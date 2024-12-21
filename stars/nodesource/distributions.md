---
project: distributions
stars: 13547
description: NodeSource Node.js Binary Distributions
url: https://github.com/nodesource/distributions
---

NodeSource N|Solid & Node.js Binary Distributions
=================================================

This repository contains the instructions to install the **NodeSource N|solid** and **Node.js** Binary Distributions via .rpm and .deb as well as their setup and support scripts.

If you're looking for more information on NodeSource's low-impact Node.js performance monitoring platform, **Learn more here.**

**New Update ⚠️**
-----------------

We'd like to inform you of important changes to our distribution repository nodesource/distributions.

**What's New:**

-   _**Package Changes:** DEB and RPM packages are now available under the `nodistro` codename. We no longer package the installer coupled to specific versions. This means you can install Node.js on almost any distro that meets the minimum requirements._
-   **Installation Scripts:** Back by popular demand, the installation scripts have returned and are better than ever. See the installation instructions below for details on how to use them.
-   **RPM Package Signing Key:** The key used to sign RPM packages has changed. We now sign packages using SHA256, providing better support to the community.
-   **Questions and concerns:** To resolve questions and discuss concerns about this update we've opened this discussion space New distribution's packages

Looking for the previous Documentation README.md

Table of Contents
-----------------

-   **Debian and Ubuntu based distributions** (deb)
    -   Available architectures
    -   Supported Versions
        -   Ubuntu versions
        -   Debian versions
    -   Installation instructions
    -   Uninstall instructions
-   **Enterprise Linux based distributions** (rpm)
    -   Available architectures
    -   Supported Versions
        -   Fedora versions
        -   Redhat versions
        -   Amazon Linux versions
    -   Uninstall instructions
-   **Nodejs Release Calendar**
-   FAQ
-   Authors and Contributors
-   License

Debian and Ubuntu based distributions
-------------------------------------

### DEB Available architectures

NodeSource will continue to maintain the following architectures and may add additional ones in the future.

-   **amd64** (64-bit)
-   **armhf** (ARM 32-bit hard-float, ARMv7 and up: _arm-linux-gnueabihf_)
-   **arm64** (ARM 64-bit, ARMv8 and up: _aarch64-linux-gnu_)

### DEB Supported Versions

#### **Ubuntu versions**

Distro Name

Node 18x

Node 20x

Node 21x

Node 22x

Node 23x

Ubuntu Bionic ^18.04

❌

❌

❌

❌

❌

Ubuntu Focal ^20.04

✅

✅

✅

✅

✅

Ubuntu Jammy ^22.04

✅

✅

✅

✅

✅

Ubuntu Noble ^24.04

✅

✅

✅

✅

✅

#### **Debian versions**

Distro Name

Node 18x

Node 20x

Node 21x

Node 22x

Node 23x

Debian 8 Jessie

❌

❌

❌

❌

❌

Debian 9 Stretch

❌

❌

❌

❌

❌

Debian 10 Buster

✅

✅

✅

✅

✅

Debian 11 Bullseye

✅

✅

✅

✅

✅

Debian 12 Bookworm

✅

✅

✅

✅

✅

Note

If you are looking to run Node.js in a non-supported Linux version contact NodeSource to get enterprise support for your specific needs.

### Installation Instructions (DEB)

**Node.js 23.x**:

##### Using Ubuntu (Node.js 23)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_23.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    sudo -E bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    sudo apt-get install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

##### Using Debian, as root (Node.js 23)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_23.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    apt-get install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

**Node.js v22.x**:

##### Using Ubuntu (Node.js 22)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_22.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    sudo -E bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### Using Debian, as root (Node.js 22)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_22.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**Node.js v20.x**:

##### Using Ubuntu (Node.js 20)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_20.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    sudo -E bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### Using Debian, as root (Node.js 20)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_20.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**Node.js v18.x**:

##### Using Ubuntu (Node.js 18)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_18.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    sudo -E bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### Using Debian, as root (Node.js 18)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_18.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**Node.js LTS (v22.x)**:

##### Using Ubuntu (Node.js LTS)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_lts.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    sudo -E bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### Using Debian, as root (N|Solid or Node.js LTS)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_lts.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    apt-get install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    apt-get install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**Node.js Current (23)**:

##### Using Ubuntu (Node.js Current)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_current.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    sudo -E bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    sudo apt-get install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

##### Using Debian, as root (Node.js Current)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

apt-get install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://deb.nodesource.com/setup\_current.x -o nodesource\_setup.sh
    
2.  **Run the setup script with sudo:**
    
    bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    apt-get install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

### Uninstall `nsolid` or `nodejs` Ubuntu & Debian packages

To completely remove Node.js or N|solid installed from the deb.nodesource.com package methods above:

#### use `sudo` on Ubuntu or run this as root on debian

**N|Solid**

apt-get purge nsolid &&\\
rm -r /etc/apt/sources.list.d/nodesource.list &&\\
rm -r /etc/apt/keyrings/nodesource.gpg

**Node.js**

apt-get purge nodejs &&\\
rm -r /etc/apt/sources.list.d/nodesource.list &&\\
rm -r /etc/apt/keyrings/nodesource.gpg

Enterprise Linux Based Distributions
------------------------------------

### RPM Available architectures

NodeSource will continue to maintain the following architectures and may add additional ones in the future.

-   **x86\_64** (64-bit)
-   **arm64** (ARM 64-bit, ARMv8 and up: _aarch64-linux-gnu_)

### RPM Supported Versions

#### **Fedora versions**

Distro Name

Node 18x

Node 20x

Node 21x

Node 22x

Node 23x

Fedora >= 20 (20->28)

❌

❌

❌

❌

❌

Fedora >= 29

✅

✅

✅

✅

✅

Fedora >= 36

✅

✅

✅

✅

✅

#### **Redhat versions**

Distro Name

Node 18x

Node 20x

Node 21x

Node 22x

Node 23x

Redhat 7

❌

❌

❌

❌

❌

Redhat 8

✅

✅

✅

✅

✅

Redhat 9

✅

✅

✅

✅

✅

Redhat 9-minimal

✅

✅

✅

✅

✅

#### **Amazon Linux versions**

Distro Name

Node 18x

Node 20x

Node 21x

Node 22x

Amazon Linux 2

❌

❌

❌

❌

Amazon Linux 2023

✅

✅

✅

✅

Note

If you are looking to run Node.js in a non-supported Linux version contact NodeSource to get enterprise support for your specific needs.

### RPM Installation Instructions

### Installation Instructions (RPM)

**Node.js v23.x**

##### Using RPM-based Systems (Node.js 23)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_23.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    sudo bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    sudo yum install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

##### No root privileges (Node.js 23)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_23.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    yum install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

**Node.js v22.x**

##### Using RPM-based Systems (Node.js 22)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_22.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    sudo bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    sudo yum install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

##### No root privileges (Node.js 22)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_22.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    yum install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

**Node.js v20.x**

##### As root (Node.js 20)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_20.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    yum install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    yum install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### No root privileges (Node.js 20)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_20.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo yum install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo yum install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**Node.js v18.x**

##### As root (Node.js 18)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_18.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo yum install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo yum install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### No root privileges (Node.js 18)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_18.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    sudo bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo yum install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo yum install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**N|Solid or Node.js LTS (22.x)**

##### As root (N|Solid or Node.js LTS)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_lts.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    yum install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    yum install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

##### No root privileges (N|Solid or Node.js LTS)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_lts.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    sudo bash nodesource\_setup.sh
    
3.  **Install N|Solid or Node.js:**
    
    **N|Solid**
    
    **Install N|Solid:**
    
    sudo yum install -y nsolid
    
    **Verify the installation:**
    
    nsolid -v
    
    **Node.js**
    
    **Install Node.js:**
    
    sudo yum install -y nodejs
    
    **Verify the installation:**
    
    node -v
    

**Node.js Current (23.x)**

##### As root (Node.js Current)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_current.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    yum install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

##### No root privileges (Node.js Current)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

sudo yum install -y curl

1.  **Download the setup script:**
    
    curl -fsSL https://rpm.nodesource.com/setup\_current.x -o nodesource\_setup.sh
    
2.  **Run the setup script as root:**
    
    sudo bash nodesource\_setup.sh
    
3.  **Install Node.js:**
    
    sudo yum install -y nodejs
    
4.  **Verify the installation:**
    
    node -v
    

_**Optional**_: install build tools

To compile and install native addons from npm you may also need to install build tools:

```
yum install gcc-c++ make
# or: yum groupinstall 'Development Tools'
```

### Uninstall `nsolid` or `nodejs` Enterprise Linux packages

To completely remove Node.js installed from the rpm.nodesource.com package methods above:

#### use `sudo` or run this as root

**N|Solid**

yum remove nsolid &&\\
rm -r /etc/yum.repos.d/nodesource\*.repo &&\\
yum clean all

**Node.js**

yum remove nodejs &&\\
rm -r /etc/yum.repos.d/nodesource\*.repo &&\\
yum clean all

Nodejs Release Calendar
-----------------------

_source: https://nodejs.dev_

FAQ
---

Q: Are the scripts deprecated?

A: The scripts are deprecated for the versions of Node.js that are currently outdated. While the packages for these versions still exist, we no longer provide support for them. Our support is exclusively dedicated to the active Node.js versions, which, as of today, are 18, 20, and 21. Users utilizing these versions can confidently use our scripts, but we encourage those using older versions to upgrade for continued support and the best experience.

* * *

Q: How can I configure the repository manually?

A: If you prefer to manually configure the repository, we have a detailed guide to assist you through the process. Please visit our Repository Manual Installation Guide for comprehensive instructions. This guide is designed to provide step-by-step directions to ensure a smooth and successful manual setup of the repository for your Node.js environment.

* * *

Q: How do I pin to specific versions of Node.js?

A: Please take a look at wiki

* * *

* * *

Q: Why is there no folder listing available when I visit the following URLs? https://deb.nodesource.com/node\_XX.x/pool/main/n/

https://rpm.nodesource.com/pub\_20.x/

A: This issue may arise because some users utilize the above URLs to download specific versions of Node.js or create mirrors of our repository.

For more information and possible solutions, please refer to the following resources:

-   Github issue
-   Creating a Repository Mirror

* * *

Authors and Contributors
------------------------

### Current Members

Adrian Estrada

GitHub/edsadr

Twitter/@edsadr

Jesus Paz

GitHub/JesusPaz

Jefferson Rios

GitHub/riosje

### Past Members

Chris Lea

GitHub/chrislea

Twitter/@chrislea

Rod Vagg

GitHub/rvagg

Twitter/@rvagg

William Blankenship

GitHub/retrohacker

Twitter/@retrohack3r

Harry Truong

GitHub/harrytruong

Matteo Brunati

GitHub/mattbrun

Brian White

GitHub/mscdex

Matt Lewandowsky

GitHub/lewellyn

Jan-Hendrik Peters

GitHub/hennr

Andris Reinman

GitHub/andris9

Carvilsi

GitHub/carvilsi

Krasimir Trenchev

GitHub/Ava7

Phil Helm

GitHub/phelma

0xmohit

GitHub/0xmohit

jdarling

GitHub/jdarling

Prayag Verma

GitHub/pra85

Misha Brukman

GitHub/mbrukman

Simon Lydell

GitHub/lydell

Sebastian Blei

GitHub/iamsebastian

Jorge Maldonado Ventura

NotABug/jorgesumle

Mayank Metha

GitHub/mayankmetha

Twitter/@mayankmethad

Iván Iguarán

GitHub/igsu

Contributions are welcomed from anyone wanting to improve this project!

License
-------

This material is Copyright (c) NodeSource and licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.

* * *

_Supported with love by the NodeSource team_

_This project is not affiliated with Debian, Ubuntu, Red Hat, CentOS or Fedora._

_Ubuntu is a registered trademark of Canonical Ltd._

_Debian is a registered trademark owned by Software in the Public Interest, Inc._

_Red Hat, CentOS and Fedora are trademarks of Red Hat, Inc._

_Amazon Linux is a trademark of Amazon Web Services, Inc._

_CloudLinux is a trademark of CloudLinux, Inc_
