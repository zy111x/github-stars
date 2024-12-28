---
project: openwrt-6.x
stars: 169
description: This repository is a mirror of https://git.openwrt.org/openwrt/openwrt.git It is for reference only and is not active for check-ins.  We will continue to accept Pull Requests here. They will be merged via staging trees then into openwrt.git.
url: https://github.com/LiBwrt/openwrt-6.x
---

适用于 IPQ系列设备的 OpenWrt 源码仓库
=========================

说明
--

> 对于以前IPQ系列想要使用OpenWrt系统只能放弃部分NSS功能，亦或者使用相对老旧的内核，在开源社区的努力下完善了这部分的支持  
> 其中本库中融合了JiaY-shi、qosmio两位大佬NSS支持的代码实现了这一功能，以及使用了immortalwrt的luci、packages作为插件的支持,在此感谢大佬们的付出

目前已实现功能

Target

NSS NAT

2.4G WiFi  
`NSS Offload`

5G WiFi  
`NSS Offload`

IPQ807X

✅

✅

✅

IPQ60XX

✅

✅

✅

IPQ50XX

❌

❌

❌

Wiki
----

-   什么是NSS?
-   OpenWrt如何“分载”流量？
-   NSS与OpenWrt的“分载”选项有何不同？
-   我需要NSS吗?
-   我的设备支持NSS吗？
-   重要提示

* * *

使用方法
----

-   推荐使用24.10分支

### 云编译

### 本地编译

-   **不要用 `root` 用户进行编译⚠**
-   国内用户编译前最好准备好梯子
-   默认登陆IP 192.168.1.1 密码 password

1.  首先装好 Linux 系统， Ubuntu 20.04 LTS
    
2.  安装编译依赖
    
    sudo apt update -y
    sudo apt full-upgrade -y
    sudo apt install -y ack antlr3 asciidoc autoconf automake autopoint binutils bison build-essential \\
    bzip2 ccache cmake cpio curl device-tree-compiler fastjar flex gawk gettext gcc-multilib g++-multilib \\
    git gperf haveged help2man intltool libc6-dev-i386 libelf-dev libglib2.0-dev libgmp3-dev libltdl-dev \\
    libmpc-dev libmpfr-dev libncurses5-dev libncursesw5-dev libreadline-dev libssl-dev libtool lrzsz \\
    mkisofs msmtp nano ninja-build p7zip p7zip-full patch pkgconf python3 python3-pip libpython3-dev qemu-utils \\
    rsync scons squashfs-tools subversion swig texinfo uglifyjs upx-ucl unzip vim wget xmlto xxd zlib1g-dev zstd
    
3.  下载源代码，更新 feeds 并选择配置
    
    git clone --depth 1 -b main --single-branch https://github.com/LiBwrt-op/openwrt-6.x.git
    cd openwrt-6.x
    ./scripts/feeds update -a && ./scripts/feeds install -a
    make menuconfig
    
4.  下载 dl 库，编译固件 （-j 后面是线程数，为便于排除错误推荐用单线程）
    
    make download -j$(nproc)
    make -j1 V=s
    
5.  二次编译：
    
    cd openwrt-6.x
    git fetch && git reset --hard origin/main
    ./scripts/feeds update -a && ./scripts/feeds install -a
    make menuconfig
    make V=s -j$(nproc)
    
6.  如果需要重新配置：
    
    rm -rf .config
    make menuconfig
    make V=s -j$(nproc)
    
7.  编译完成后输出路径：bin/targets
    

### 如果你喜欢这个项目的话别忘了点个Star⭐

Stargazers over time
--------------------
