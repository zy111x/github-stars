---
project: openwrt-6.x
stars: 425
description: |-
    IPQ60XX系列、IPQ807X系列满血NSS支持！Full-featured NSS support for IPQ60XX series and IPQ807X series！
url: https://github.com/LiBwrt/openwrt-6.x
---

# 适用于 IPQ系列设备的 OpenWrt 源码仓库

## 说明
>对于以前IPQ系列想要使用OpenWrt系统只能放弃部分NSS功能，亦或者使用相对老旧的内核，在开源社区的努力下完善了这部分的支持。其中本仓库中融合了[JiaY-shi](https://github.com/JiaY-shi)和[qosmio](https://github.com/qosmio)两位大佬NSS支持的代码实现了这一功能，以及使用了[ImmortalWrt](https://github.com/immortalwrt)的LuCI和Packages作为插件的支持，在此感谢大佬们的付出！

| Target  | NSS <br />`Matrix` | 2.4G WiFi <br />`NSS Offload` | 5G WiFi <br />`NSS Offload` |
| :-:     | :-:     | :-:       | :-:     |
| IPQ807X | ✅      | ✅       | ✅      |
| IPQ60XX | ✅      | ✅       | ✅      |
| IPQ50XX | ❌      |❌        |❌       |

## NSS功能支持矩阵

|   功能    | IPQ807x | IPQ60xx |   功能          | IPQ807x | IPQ60xx |
| --------- | :-----: | :-----: | --------------- | :-----: | :-----: |
| TUNIPIP6  |   ✅    |   ✅    | RMNET           |  🟨<sup><a href="#fn1">1</a></sup>  |  ⛔<sup><a href="#fn2">2</a></sup>  |
| PPPOE     |   ✅    |   ✅    | MIRROR          |   ✅    |   ✅    |
| L2TPV2    |   ✅    |   ✅    | WIFI (AP/STA)   |   ✅    |   ✅    |
| BRIDGE    |   ✅    |   ✅    | WIFI (WDS)      |  🟨<sup><a href="#fn1">1</a></sup>  |  🟨<sup><a href="#fn1">1</a></sup>  |
| VLAN      |   ✅    |   ✅    | WIFI (MESH)     |  🟨<sup><a href="#fn1">1</a></sup>  |  🟨<sup><a href="#fn1">1</a></sup>  |
| MAP_T     |   ✅    |   ✅    | WIFI (AP VLAN)  |  ⚠️<sup><a href="#fn4">4</a></sup>  |  ⚠️<sup><a href="#fn4">4</a></sup>  |
| TUN6RD    |   ✅    |   ✅    | IPSEC           |   ❌<sup><a href="#fn3">3</a></sup>  |   ❌<sup><a href="#fn3">3</a></sup>  |
| GRE       |   ✅    |   ✅    | PVXLAN          |   ❌<sup><a href="#fn3">3</a></sup>  |   ❌<sup><a href="#fn3">3</a></sup>  |
| PPTP      |   ✅    |   ✅    | CLMAP           |   ❌<sup><a href="#fn3">3</a></sup>  |   ❌<sup><a href="#fn3">3</a></sup>  |
| IGS       |   ✅    |   ✅    | TLS             |   ❌<sup><a href="#fn3">3</a></sup>  |   ❌<sup><a href="#fn3">3</a></sup>  |
| VXLAN     |   ✅    |   ✅    | CAPWAP          |   ❌<sup><a href="#fn3">3</a></sup>  |   ❌<sup><a href="#fn3">3</a></sup>  |
| MATCH     |   ✅    |   ✅    | DTLS            |   ❌<sup><a href="#fn3">3</a></sup>  |   ❌<sup><a href="#fn3">3</a></sup>  |

<a id="fn1"></a><sup>1</sup> 🟨 需要**NSS固件11.4版本​**（CONFIG_NSS_FIRMWARE_VERSION_11_4=y）  
<a id="fn2"></a><sup>2</sup> ⛔ 在该平台上不可用  
<a id="fn3"></a><sup>3</sup> ❌ ​在NSS固件(11.4–12.5)版本中不可用  
<a id="fn4"></a><sup>4</sup> ⚠️ ​在ath11k驱动程序中存在故障​  

## Wiki
- [什么是NSS？](https://github.com/qosmio/openwrt-ipq/blob/qualcommax-6.x-nss-wifi/README.md#whats-nss)
- [OpenWrt如何“分载”流量？](https://github.com/qosmio/openwrt-ipq/blob/qualcommax-6.x-nss-wifi/README.md#how-does-openwrt-offload-traffic)
- [NSS与OpenWrt的“分载”选项有何不同？](https://github.com/qosmio/openwrt-ipq/blob/qualcommax-6.x-nss-wifi/README.md#how-is-nss-different-from-openwrts-offloading-options)
- [我需要NSS吗？](https://github.com/qosmio/openwrt-ipq/blob/qualcommax-6.x-nss-wifi/README.md#do-i-need-nss)
- [我的设备支持NSS吗？](https://github.com/qosmio/openwrt-ipq/blob/qualcommax-6.x-nss-wifi/README.md#ok-i-want-nss-does-my-device-support-it)
- [重要提示！](https://github.com/qosmio/openwrt-ipq/blob/qualcommax-6.x-nss-wifi/README.md#important-note)

---

## 使用方法

### [云编译1](https://github.com/breeze303/openwrt-ci) [云编译2](https://github.com/ZqinKing/wrt_release) [云编译3](https://github.com/laipeng668/openwrt-ci-roc) [云编译4](https://github.com/VIKINGYFY/OpenWRT-CI)

### 本地编译

- **不要用 `root` 用户进行编译⚠**
- 国内用户编译前最好准备好梯子
- 至少需要4GB内存​​和​​25GB可用磁盘空间​
- 默认登陆IP 192.168.1.1 密码 none


1. 首先装好 Linux 系统，推荐使用Ubuntu 22.04 LTS 或 Debian 11

2. 安装编译依赖

   ```bash
   sudo apt update -y
   sudo apt full-upgrade -y
   sudo apt install -y ack antlr3 asciidoc autoconf automake autopoint binutils bison build-essential \
   bzip2 ccache cmake cpio curl device-tree-compiler fastjar flex gawk gettext gcc-multilib g++-multilib \
   git gperf haveged help2man intltool libc6-dev-i386 libelf-dev libglib2.0-dev libgmp3-dev libltdl-dev \
   libmpc-dev libmpfr-dev libncurses5-dev libncursesw5-dev libreadline-dev libfuse-dev libssl-dev libtool lrzsz \
   genisoimage msmtp nano ninja-build p7zip p7zip-full patch pkgconf python3 python3-pip libpython3-dev qemu-utils \
   rsync scons squashfs-tools subversion swig texinfo uglifyjs upx-ucl unzip vim wget xmlto xxd zlib1g-dev
   ```

3. 下载源代码，更新 feeds 并选择配置

   ```bash
   git clone --depth 1 --single-branch https://github.com/LiBwrt-op/openwrt-6.x.git libwrt
   cd libwrt
   ./scripts/feeds update -a && ./scripts/feeds install -a
   make menuconfig
   ```

4. 下载 dl 库，编译固件 （-j 后面是线程数，为便于排除错误推荐用单线程）

   ```bash
   make download -j$(nproc)
   make -j1 V=s
   ```

5. 二次编译：

   ```bash
   cd libwrt
   git fetch && git reset --hard origin/k6.12-nss
   ./scripts/feeds update -a && ./scripts/feeds install -a
   make defconfig
   make -j$(nproc) V=s 
   ```

6. 如果需要重新配置：

   ```bash
   rm -rf .config
   make menuconfig
   make -j$(nproc) V=s 
   ```

7. 编译完成后输出路径：bin/targets

### 如果你喜欢这个项目的话别忘了点个Star⭐
## Stargazers over time
[![Stargazers over time](https://starchart.cc/LiBwrt-op/openwrt-6.x.svg?variant=adaptive)](https://starchart.cc/LiBwrt-op/openwrt-6.x)

