---
project: chsrc
stars: 4113
description: chsrc 全平台通用换源工具与框架. Change Source everywhere for every software
url: https://github.com/RubyMetric/chsrc
---

全平台通用换源工具与框架 `chsrc`，**目标支持 Linux, Windows (MSYS2, Cygwin), macOS, BSD 等尽可能多的操作系统环境，龙芯、飞腾、RISC-V 等尽可能多的 CPU**。

我们使用 **C99** 来完成上述目标。我们并不使用 Python 或 JS 等解释语言，因为一个简单的换源工具，不应该强行塞给用户一个庞大的解释器和数十、数百 MB 其他文件。

本软件为**自由软件**，SDPX 软件许可证为 `GPL-3.0-or-later and MIT`

  

  

🤝 协作与贡献
--------

Note

**`chsrc` 可换源 60+ 目标。每个人仅仅贡献和维护自己熟悉的部分，回报是得到其他所有领域专家的帮助**。欢迎对 GitHub、Gitee 协作不熟悉的人以此为契机学习参与贡献, 欢迎任何编程初学者参与贡献，作者可提供一定的 贡献指导

Tip

**`chsrc` 不仅是一个命令行工具，同时也是一个换源框架，它甚至使你能够在不了解C语言的情况下编写出新的换源方法(recipe)。**

立刻为一个新软件添加换源方法！Write A Recipe Even If You Don't Know C

  

可参与的任务与挑战：

1.  \[HELP\] 提供默认源地址，如Debian,Maven,PHP composer等的默认源URL，帮助我们进行 `chsrc reset`
    
2.  \[Challenge\] CentOS (Stream) Recipe
    

  
已由贡献者完成的挑战

1.  \[Challenge\] 编写统一安装的 shell 和 PowerShell 脚本
    
    已由 @Efterklang 与 @xuan 完成
    

镜像站可用性

1.  https://github.com/RubyMetric/chsrc/wiki
2.  https://github.com/RubyMetric/chsrc/discussions

打包

想通过 `flatpak`,`snap`,`pacman`,`apt`,`dnf` 等系统包管理工具来安装和更新`chsrc`？若您可提供维护，请访问 issue#16 on GitHub

-   `Homebrew`
-   `Scoop`
-   `AUR`
-   `Flatpak`
-   `snap`
-   缺乏其他平台/包维护者

  

📌 示例
-----

  

🚀 安装
-----

Important

若通过下述手动方式安装，则会下载到当前目录，可直接通过 `./chsrc` 运行

Windows

-   可通过 `scoop` 安装，感谢 @Gn3po4g 与 @niheaven

$ scoop install chsrc

  

-   可通过 `PowerShell` 脚本一键下载最新版二进制文件，感谢 @xuan
    
    若下方链接无法访问，可使用 `https://gitee.com/RubyMetric/chsrc/raw/main/tool/installer.ps1` 替代
    

$ iwr \-useb "https://chsrc.run/windows" | iex

  

-   或手动下载二进制文件，这是最新版，往往比 `scoop` 提供的更新，适用于修复 Bug、添加新功能后及时使用，以及未安装 `scoop` 时

# x64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-windows.exe -o chsrc.exe

# x86
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x86-windows.exe -o chsrc.exe

Linux

-   支持 `AUR`，可通过 `yay` 安装，感谢 @Jerry-Terrasse

# AUR
$ yay -S chsrc-bin # Binary from GitHub Release
$ yay -S chsrc-git # Build  from the latest main branch (stable)
$ yay -S chsrc     # Build  from GitHub Release

  

-   可通过 `shell` 脚本一键安装最新版，感谢 @Efterklang 与 @xuan
    
    若下方链接无法访问，可使用 `https://gitee.com/RubyMetric/chsrc/raw/main/tool/installer.sh` 替代
    

# 非root用户默认安装至 ~/.local/bin
$ curl https://chsrc.run/posix | bash

# root用户默认安装至 /usr/local/bin
$ curl https://chsrc.run/posix | sudo bash

# 使用 -d 指定目录安装
$ curl https://chsrc.run/posix | bash -s -- -d ./

# 使用 -l en 输出英文
$ curl https://chsrc.run/posix | bash -s -- -l en

  

-   可手动下载二进制文件安装

# x64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc; chmod +x ./chsrc

# aarch64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-aarch64-linux -o chsrc; chmod +x ./chsrc

# riscv64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-riscv64-linux -o chsrc; chmod +x ./chsrc

# armv7
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-armv7-linux -o chsrc; chmod +x ./chsrc

macOS

-   可通过 `homebrew` 安装，感谢 @Aaron-212 与 @chenrui333

$ brew install chsrc

  

-   可通过 `shell` 脚本安装最新版，感谢 @Efterklang 与 @xuan
    
    若下方链接无法访问，可使用 `https://gitee.com/RubyMetric/chsrc/raw/main/tool/installer.sh` 替代
    

# 非root用户默认安装至 ~/.local/bin
$ curl https://chsrc.run/posix | bash

# root用户默认安装至 /usr/local/bin
$ curl https://chsrc.run/posix | sudo bash

# 使用 -d 指定目录安装
$ curl https://chsrc.run/posix | bash -s -- -d ./

# 使用 -l en 输出英文
$ curl https://chsrc.run/posix | bash -s -- -l en

  

-   或手动下载二进制文件，这是最新版，往往比 `homebrew` 提供的更新，适用于修复 Bug、添加新功能后及时使用

# arm64/aarch64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-aarch64-macos -o chsrc; chmod +x ./chsrc

# x64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-macos -o chsrc; chmod +x ./chsrc

BSD

$ git clone https://gitee.com/RubyMetric/chsrc.git; cd chsrc
$ clang -Iinclude src/chsrc-main.c -o chsrc

其他平台

$ git clone https://gitee.com/RubyMetric/chsrc.git; cd chsrc; make

  

💡 使用
-----

使用: chsrc <command\> \[options\] \[target\] \[mirror\]

help                      # 打印此帮助，或 h, -h, --help
issue                     # 查看相关issue

list (或 ls, 或 l)        # 列出可用镜像源，和可换源目标
list mirror/target        # 列出可用镜像源，或可换源目标
list os/lang/ware         # 列出可换源的操作系统/编程语言/软件

measure <target\>          # 对该目标所有源测速
cesu    <target\>

list <target\>             # 查看该目标可用源与支持功能
get  <target\>             # 查看该目标当前源的使用情况

set  <target\>             # 换源，自动测速后挑选最快源
set  <target\>  first      # 换源，使用维护团队测速第一的源
set  <target\> <mirror\>    # 换源，指定使用某镜像站 (通过list命令查看)
set  <target\> https://url # 换源，用户自定义源URL
reset <target\>            # 重置，使用上游默认使用的源

选项:
-dry                      # Dry Run，模拟换源过程，命令仅打印并不运行
-local                    # 仅对某项目而非全局换源 (仅部分软件如bundler,pdm支持)
-ipv6                     # 使用IPv6测速
-en(glish)                # 使用英文输出
-no-color                 # 无颜色输出

  

自动测速，寻找最快者，换源

    $ chsrc set ruby

不想自动测速的时候，可使用维护团队测试的最快镜像站

    $ chsrc set ruby first

先列出可用的镜像站，然后选择其一，如使用 RubyChina 作为镜像站

    $ chsrc ls  ruby
    $ chsrc set ruby rubychina

若您有自己的镜像地址，使用自定义URL

    $ chsrc set ruby https://gems.ruby-china.com/

对支持 \*项目级\* 换源的目标，可以避免全局（\*系统级\* 或 \*用户级\*）换源

    $ chsrc set -local bundler
    $ chsrc set -local pdm

  

编程语言开发
------

chsrc set ruby|rb|gem|bundler|rubygems

chsrc set python | py | pypi # 同时换 pip, poetry 和 pdm 这3个包管理器，也可以3个独立换源
  chsrc set pip
  chsrc set poetry
  chsrc set pdm

chsrc set node | nodejs # 同时换 npm, yarn 和 pnpm 这3个包管理器，也可以3个独立换源
  chsrc set npm
  chsrc set yarn
  chsrc set pnpm

chsrc set nvm
chsrc set bun

chsrc set perl | cpan
chsrc set php  | composer
chsrc set lua  | luarocks

chsrc set rust | cargo | crate
chsrc set rustup

chsrc set go
chsrc set java    | maven | mvn | gradle
chsrc set clojure | clojars
chsrc set dart    | pub
chsrc set flutter
chsrc set haskell | hackage | cabal | stack
chsrc set ocaml   | opam

# 同时会为 bioconductor 换源
chsrc set r | cran
chsrc set julia

  

操作系统
----

sudo chsrc set ubuntu
sudo chsrc set linuxmint | mint
sudo chsrc set debian
sudo chsrc set fedora
sudo chsrc set suse  | opensuse
sudo chsrc set kali
sudo chsrc set arch
sudo chsrc set archlinuxcn
sudo chsrc set manjaro
sudo chsrc set gentoo
sudo chsrc set rocky | rockylinux
sudo chsrc set alma  | almalinux
sudo chsrc set alpine
sudo chsrc set void  | voidlinux
sudo chsrc set solus
sudo chsrc set ros   | ros2
sudo chsrc set trisquel
sudo chsrc set lite  | linuxlite
sudo chsrc set raspi | raspberrypi
sudo chsrc set armbian
sudo chsrc set openwrt

sudo chsrc set openeuler
sudo chsrc set openanolis | anolis
sudo chsrc set openkylin
sudo chsrc set deepin

chsrc set msys2 | msys

# BSD
sudo chsrc set freebsd
sudo chsrc set openbsd
sudo chsrc set netbsd

  

软件
--

chsrc set winget
chsrc set brew      | homebrew
chsrc set cocoapods | cocoa | pod
chsrc set dockerhub | docker
chsrc set flathub   | flatpak
chsrc set nix
chsrc set guix
chsrc set emacs  | elpa
chsrc set tex    | ctan | latex | texlive | miktex
chsrc set conda  | anaconda

  

🛠️ 开发
------

请安装好 `gcc`或`clang` 和 `make` 以及 `curl`

# 使用 dev 分支开发
git clone https://gitee.com/RubyMetric/chsrc.git -b dev

make          # 默认使用 cc 编译
make CC=clang # 使用 clang 编译
make CC=gcc   # 使用 gcc   编译

make test    # 测试命令
make test-xy # 测试 xy.h
make clean

  

📝 许可证
------

-   `chsrc` 主程序采用 `GPL-3.0-or-later` 许可证，保证该软件的永久自由
-   `xy.h` 使用 `MIT` 许可证，保证该库可以在尽可能多的情况下复用

  

❤️ 致谢
-----

感谢各个镜像站提供的优质免费镜像服务

1.  mirror.c 包含了通用的镜像站信息
2.  各个recipe内部定义的专用镜像站

另外特别感谢以下组织或项目:

1.  MirrorZ 教育网镜像站
2.  清华大学 Tuna
3.  上海交通大学软件源镜像服务
4.  中国科学技术大学 Linux 用户协会
5.  Thanks Mirror 项目 by @eryajf

  

🚀 赞赏支持
-------

你是否因为使用 `chsrc` 而节省了时间和精力 or whatever?
