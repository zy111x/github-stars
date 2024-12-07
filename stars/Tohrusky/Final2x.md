---
project: Final2x
stars: 5924
description: 2^x Image Super-Resolution
url: https://github.com/Tohrusky/Final2x
---

This is a powerful tool that allows for image super-resolution to arbitrary sizes using multiple models, designed to enhance the resolution and quality of images, making them clearer and more detailed.

-   News🎉: We are thrilled to announce the release of Final2x v2.0.0, which marks a major milestone as we transition to utilizing ccrestoration (PyTorch) for our algorithm implementation.
-   News🎉: Want to enhance your video? Try FinalRip!

### Comparison

##### use Final2x to perform 4x super-resolution on a 256x256 Hutao RGBA image

Screenshots
-----------

### Installation

##### Download the latest release from here.

#### Windows

Just Run! Furthermore, you can use package mananger to install and upgrade.

##### winget

winget install Final2x

#### MacOS

sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app

In first time, you need to run the command above in terminal to allow the app to run.

#### Linux

For Linux User, you need to install the dependencies first.

Make sure you have Python >= 3.9 and PyTorch >= 1.13 installed

pip install Final2x-core
Final2x-core -h # check if the installation is successful
apt install -y libomp5 xdg-utils

### Reference

The following references were referenced in the development of this project:

-   Final2x-core
-   ccrestoration
-   PyTorch
-   ncnn
-   naive-ui
-   electron-vite

### License

This project is licensed under the BSD 3-Clause - see the LICENSE file for details.

### Acknowledgements

Feel free to reach out to the project maintainers with any questions or concerns~
