---
project: etcher
stars: 30041
description: Flash OS images to SD cards & USB drives, safely and easily.
url: https://github.com/balena-io/etcher
---

Etcher
======

> Flash OS images to SD cards & USB drives, safely and easily.

Etcher is a powerful OS image flasher built with web technologies to ensure flashing an SDCard or USB drive is a pleasant and safe experience. It protects you from accidentally writing to your hard-drives, ensures every byte of data was written correctly, and much more. It can also directly flash Raspberry Pi devices that support USB device boot mode.

* * *

**Download** | **Support** | **Documentation** | **Contributing** | **Roadmap**

Supported Operating Systems
---------------------------

-   Linux; most distros; Intel 64-bit.
-   Windows 10 and later; Intel 64-bit.
-   macOS 10.13 (High Sierra) and later; both Intel and Apple Silicon.

Installers
----------

Refer to the downloads page for the latest pre-made installers for all supported operating systems.

Packages
--------

#### Debian and Ubuntu based Package Repository (GNU/Linux x86/x64)

Package for Debian and Ubuntu can be downloaded from the Github release page

##### Install .deb file using apt

   sudo apt install ./balena-etcher\_\*\*\*\*\*\*\_amd64.deb

##### Uninstall

   sudo apt remove balena-etcher

#### Redhat (RHEL) and Fedora-based Package Repository (GNU/Linux x86/x64)

##### Yum

Package for Fedora-based and Redhat can be downloaded from the Github release page

1.  Install using yum

   sudo yum localinstall balena-etcher-\*\*\*.x86\_64.rpm

#### Arch/Manjaro Linux (GNU/Linux x64)

Etcher is offered through the Arch User Repository and can be installed on both Manjaro and Arch systems. You can compile it from the source code in this repository using `balena-etcher`. The following example uses a common AUR helper to install the latest release:

yay -S balena-etcher

##### Uninstall

yay -R balena-etcher

#### WinGet (Windows)

This package is updated by gh-action, and is kept up to date automatically.

winget install balenaEtcher #or Balena.Etcher

##### Uninstall

winget uninstall balenaEtcher

#### Chocolatey (Windows)

This package is maintained by @majkinetor, and is kept up to date automatically.

choco install etcher

##### Uninstall

choco uninstall etcher

Support
-------

If you're having any problem, please raise an issue on GitHub, and the balena.io team will be happy to help.

License
-------

Etcher is free software and may be redistributed under the terms specified in the license.
