---
project: immortalwrt
stars: 6908
description: An opensource OpenWrt variant for mainland China users.
url: https://github.com/immortalwrt/immortalwrt
---

Project ImmortalWrt
===================

ImmortalWrt is a fork of OpenWrt, with more packages ported, more devices supported, default optimized profiles and localization modifications for mainland China users.  
Compared to upstream, we allow to use (non-upstreamable) modifications/hacks to provide better feature/performance/support.

Default login address: http://192.168.1.1 or http://immortalwrt.lan, username: **root**, password: _none_.

Download
--------

Built firmware images are available for many architectures and come with a package selection to be used as WiFi home router. To quickly find a factory image usable to migrate from a vendor stock firmware to ImmortalWrt, try the _Firmware Selector_.

-   ImmortalWrt Firmware Selector

If your device is supported, please follow the **Info** link to see install instructions or consult the support resources listed below.

Development
-----------

To build your own firmware you need a GNU/Linux, BSD or macOS system (case sensitive filesystem required). Cygwin is unsupported because of the lack of a case sensitive file system.  

### Requirements

To build with this project, Debian 11 is preferred. And you need use the CPU based on AMD64 architecture, with at least 4GB RAM and 25 GB available disk space. Make sure the **Internet** is accessible.

The following tools are needed to compile ImmortalWrt, the package names vary between distributions.

-   Here is an example for Debian/Ubuntu users:  
    -   Method 1:
        
        Setup dependencies via APT
        
        sudo apt update -y
        sudo apt full-upgrade -y
        sudo apt install -y ack antlr3 asciidoc autoconf automake autopoint binutils bison build-essential \\
          bzip2 ccache clang cmake cpio curl device-tree-compiler ecj fastjar flex gawk gettext gcc-multilib \\
          g++-multilib git gnutls-dev gperf haveged help2man intltool lib32gcc-s1 libc6-dev-i386 libelf-dev \\
          libglib2.0-dev libgmp3-dev libltdl-dev libmpc-dev libmpfr-dev libncurses-dev libpython3-dev \\
          libreadline-dev libssl-dev libtool libyaml-dev libz-dev lld llvm lrzsz mkisofs msmtp nano \\
          ninja-build p7zip p7zip-full patch pkgconf python3 python3-pip python3-ply python3-docutils \\
          python3-pyelftools qemu-utils re2c rsync scons squashfs-tools subversion swig texinfo uglifyjs \\
          upx-ucl unzip vim wget xmlto xxd zlib1g-dev zstd
        
    -   Method 2:
        
        sudo bash -c 'bash <(curl -s https://build-scripts.immortalwrt.org/init\_build\_environment.sh)'
        

Note:

-   Do everything as an unprivileged user, not root, without sudo.
-   Using CPUs based on other architectures should be fine to compile ImmortalWrt, but more hacks are needed - No warranty at all.
-   You must **not** have spaces or non-ascii characters in PATH or in the work folders on the drive.
-   If you're using Windows Subsystem for Linux (or WSL), removing Windows folders from PATH is required, please see Build system setup WSL documentation.
-   Using macOS as the host build OS is **not** recommended. No warranty at all. You can get tips from Build system setup macOS documentation.
-   For more details, please see Build system setup documentation.

### Quickstart

1.  Run `git clone -b <branch> --single-branch --filter=blob:none https://github.com/immortalwrt/immortalwrt` to clone the source code.
2.  Run `cd immortalwrt` to enter source directory.
3.  Run `./scripts/feeds update -a` to obtain all the latest package definitions defined in feeds.conf / feeds.conf.default
4.  Run `./scripts/feeds install -a` to install symlinks for all obtained packages into package/feeds/
5.  Run `make menuconfig` to select your preferred configuration for the toolchain, target system & firmware packages.
6.  Run `make` to build your firmware. This will download all sources, build the cross-compile toolchain and then cross-compile the GNU/Linux kernel & all chosen applications for your target system.

### Related Repositories

The main repository uses multiple sub-repositories to manage packages of different categories. All packages are installed via the OpenWrt package manager called opkg. If you're looking to develop the web interface or port packages to ImmortalWrt, please find the fitting repository below.

-   LuCI Web Interface: Modern and modular interface to control the device via a web browser.
-   ImmortalWrt Packages: Community repository of ported packages.
-   OpenWrt Routing: Packages specifically focused on (mesh) routing.
-   OpenWrt Video: Packages specifically focused on display servers and clients (Xorg and Wayland).

Support Information
-------------------

For a list of supported devices see the OpenWrt Hardware Database

### Documentation

-   Quick Start Guide
-   User Guide
-   Developer Documentation
-   Technical Reference

### Support Community

-   Support Chat: group @ctcgfw\_openwrt\_discuss on Telegram.
-   Support Chat: group #immortalwrt on Matrix.

License
-------

ImmortalWrt is licensed under GPL-2.0-only.

Acknowledgements
----------------
