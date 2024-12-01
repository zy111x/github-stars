---
project: openwrt-ipq
stars: 152
description: NSS Fork of OpenWrt targeting Qualcomm IPQ807x/6018
---

NSS Fork for IPQ807x
====================

Branch

mac80211 Version

Notes

qualcommax-6.x-nss-wifi

6.11

Current with upstream

qualcommax-6.x-nss-mx4300

6.11

Current with upstream. Supports Linksys MX4300

qualcommax-6.x-nss-wifi-6.9

6.9.9

Current with upstream, except older mac80211

qualcommax-6.x-nss-mx4300-6.9

6.9.9

Current with upstream, except older mac80211. Supports Linksys MX4300

NOTE: The 6.9 branches are meant for folks having issues with the current 6.11.2 version of backports/mac80211. These are mostly just meant as a workaround for the time being. I don't plan on supporting these branches longterm.

The MX4300 branches will soon be merged in once the PR for MX4300 is approved upstream.

Table of Contents
-----------------

-   Overview
-   What's NSS?
-   How Does OpenWrt "Offload" Traffic?
-   How Is NSS Different from OpenWrt's Offloading Options?
-   Do I Need NSS?
-   OK, I Want NSS. Does My Device Support It?
-   Quickstart
-   Important Note
-   Donate

* * *

Overview
--------

This repository contains a fork of OpenWrt that integrates Qualcomm's NSS (Network Subsystem) support for the IPQ807x and IPQ6018 series of SoCs. The goal of this project is to provide enhanced network performance and reliability through hardware offloading, leveraging NSS's capabilities to improve throughput and reduce CPU load.

* * *

#### What's NSS?

NSS (**N**etwork **S**ub**s**ystem) is a specialized hardware offloading engine developed by Qualcomm, integrated into their IPQ series SoCs (System-on-Chip), such as the IPQ807x and IPQ6018. NSS is designed to handle high-throughput network tasks like NAT, routing, and even security tasks such as IPsec, without burdening the main CPU cores.

* * *

#### How Does OpenWrt "Offload" Traffic?

OpenWrt offers three primary methods for offloading network traffic, each aimed at reducing CPU load and improving throughput:

1.  **Packet Steering**: Distributes network processing across multiple CPU cores. It helps balance the load on multi-core CPUs but still relies on the CPU to handle packet processing.
    
2.  **Software Flow Offloading**: Accelerates traffic processing by using the CPU’s fast path, allowing more efficient handling of routing and NAT (Network Address Translation) by bypassing the kernel's normal slow path. This relies entirely on the CPU to speed up packet forwarding.
    
3.  **Hardware Flow Offloading**: Available only on select devices (e.g., Mediatek), this method offloads packet forwarding directly to the network hardware using kernel-based mechanisms (nftables/iptables) to accelerate traffic. However, this is limited to devices that have hardware acceleration capabilities supported by OpenWrt.
    

* * *

#### Why Isn't NSS Supported in Vanilla OpenWrt?

NSS requires proprietary binaries (NSS firmware) and extensive patches to the Linux kernel and networking stack. Qualcomm does not openly release the necessary firmware or detailed documentation on how to integrate NSS support, making it extremely difficult for the OpenWrt community to maintain. The required patches are invasive and complex, altering significant portions of the network stack, which makes upstream integration into OpenWrt unlikely. Maintaining compatibility with each new kernel version is another barrier, as Qualcomm’s support for these patches is minimal and sporadic.

* * *

#### How Is NSS Different from OpenWrt's Offloading Options?

The main difference between NSS and OpenWrt's offloading methods is that NSS provides **hardware acceleration** directly within the SoC, bypassing the CPU almost entirely for certain network tasks. OpenWrt's offloading, on the other hand, relies heavily on the **CPU** to manage and accelerate traffic, either via multi-core CPU distribution (Packet Steering) or kernel-level acceleration (Software/Hardware Flow Offloading).

NSS doesn’t play nice with OpenWrt’s built-in offloading because they conflict in how they handle packets, leading to performance issues or even outright failures.

* * *

#### Key Differences:

-   **Packet Steering**: While it redistributes packet processing across multiple CPU cores, it still involves the CPU heavily. With NSS, dedicated hardware cores handle packet processing, so packet steering can interfere by unnecessarily involving the CPU, reducing the benefits of offloading to hardware.
    
-   **Software Flow Offloading**: This uses kernel-level mechanisms (nftables/iptables) to accelerate packet forwarding by utilizing the CPU’s fast path. NSS, however, bypasses the kernel’s networking stack and offloads these tasks directly to the hardware. If both are enabled, packet handling may be done redundantly in software and hardware, leading to inefficiencies or conflicts.
    
-   **Hardware Flow Offloading**: Available only for certain devices like Mediatek, this method offloads packet processing to specific hardware via kernel drivers. However, this hardware-based acceleration is entirely separate from NSS and not as efficient on Qualcomm devices. Using it alongside NSS can lead to unpredictable behavior, as both try to accelerate traffic but in incompatible ways.
    

* * *

#### Do I Need NSS?

Here are some reasons you might need NSS:

-   You require high network throughput (e.g., gigabit speeds) on devices like the IPQ807x or IPQ6018 series.
-   Your router handles resource-intensive tasks like NAT, VPN (IPsec), or other routing-heavy activities that would otherwise overwhelm the CPU.
-   You’re seeking better performance than what OpenWrt’s software and hardware offloading options can provide.

However, it’s important to note that **NSS is NOT supported upstream** in OpenWrt. As of now, there are only a few community-driven projects that maintain NSS patches.

I personally maintain an NSS fork of OpenWrt qosmio/openwrt-ipq and the necessary NSS packages qosmio/nss-packages.

* * *

#### OK, I Want NSS. Does My Device Support It?

NSS is available for most Qualcomm IPQ807x and IPQ6018 devices. If your device is part of this chipset family and supported in OpenWrt, it can run NSS.

Supported devices include, but are not limited to:

-   Devices based on the **IPQ807x** (e.g., some high-end Netgear and TP-Link routers)
-   Devices based on the **IPQ6018** (e.g., certain enterprise routers)

* * *

Quickstart
----------

1.  Clone this repository:
    
    git clone https://github.com/qosmio/openwrt-ipq -b qualcommax-6.x-nss-wifi
    cd openwrt-ipq
    
2.  Update feeds:
    
    ./scripts/feeds update
    ./scripts/feeds install -a
    
3.  Copy over the seed file
    
    cp nss-setup/config-nss.seed .config
    
4.  Open the `.config` in a text editor, find your device, and remove the "#" and change `"is not set"` to `"=y"`
    
    Example:
    
    \-\# CONFIG\_TARGET\_qualcommax\_ipq807x\_DEVICE\_dynalink\_dl-wrx36 is not set
    +CONFIG\_TARGET\_qualcommax\_ipq807x\_DEVICE\_dynalink\_dl-wrx36=y
    
5.  Generate the full config
    
    make defconfig V=s
    
6.  Now run full build
    
    make download -j$(nproc) V=s
    make -j$(nproc) V=s
    

* * *

### Important Note:

Many users report issues after enabling Packet Steering or Flow Offloading (Software or Hardware), often because they are used to these options or they get carried over during a sysupgrade. Even if the setup seems to work initially, it is not optimized for NSS offloading, and you are losing the full benefits of hardware acceleration.

If you plan to use NSS, **start fresh** and **disable all other offloading options**.

By default OpenWrt's offloading is disabled, but if you ever happen to enable it accidentally, make sure you disable it.

* * *

uci set network.@device\[0\].packet\_steering=0
uci set network.@device\[0\].flow\_offloading=0
uci set network.@device\[0\].flow\_offloading\_hw=0
uci commit network

If you have questions or issues, please join the discussion on OpenWrt's forums. Qualcomm NSS Build

Please remember when posting about an issue:
--------------------------------------------

1.  Include your device make and model.
    
2.  Relevant logs and screenshots.
    
3.  State clearly and concisely the issue you're having.
    
    > "My router doesn't work", "I'm getting an error"
    
    Is not something I can help with.
    
4.  Include the specific commit you're building from.
    
    > "I'm building from latest"
    
    Also not helpful as I'm always pushing changes...
    
5.  Be respectful and mindful. I dedicate my free time to maintain and improve this project, and I do it for the benefit of the community. Remember that I'm not a full-time developer or support team—I'm just an individual sharing my work. Constructive feedback is always welcome, but please refrain from being overly critical or demanding.
    

Support the Project
-------------------

I never really thought about setting up donations before, but with so many people being receptive and appreciative and asking how to contribute, I figured, why not? Of course, this project also builds on the incredible work done by the talented devs upstream who put in countless hours into OpenWrt itself. I’ll definitely continue working on this, but if you’d like to support, every bit helps.

Consider donating to the OpenWrt Foundation