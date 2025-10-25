---
project: Final2x
stars: 6688
description: a cross-platform image super-resolution tool
url: https://github.com/EutropicAI/Final2x
---

Final2x
=======

A cross-platform image super-resolution tool.

-   News🎉: Final2x v4.0.0 is now available! It uses the cccv backend, supporting custom models and more. See custom model demo.
-   News🎉: Final2x v3.0.0 is now available, support Nvidia 50 series GPUs now!

### Screenshots

### Installation

##### Download the latest release from here.

#### Windows

You can also use a package manager like winget or scoop to install and upgrade. Please note that the versions available through package managers may not always be the latest.

#### MacOS

sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app

In first time, you need to run the command above in terminal to allow the app to run.

#### Linux

For Linux User, you need to install the dependencies first.

Make sure you have Python >= 3.9 and PyTorch >= 2.0 installed

pip install Final2x-core
Final2x-core -h # check if the installation is successful
apt install -y libomp5 xdg-utils

### Reference

The following references were referenced in the development of this project:

-   Final2x-core
-   naive-ui
-   electron-vite

### License

This project is licensed under the BSD 3-Clause - see the LICENSE file for details.

### Acknowledgements

Feel free to reach out to the project maintainers with any questions or concerns~
