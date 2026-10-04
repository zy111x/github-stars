---
project: Final2x
stars: 7332
description: a cross-platform image super-resolution tool
url: https://github.com/EutropicAI/Final2x
---

Final2x
=======

A cross-platform image super-resolution tool for Windows, macOS, and Linux.

Use built-in models or load your own. See the custom model demo to get started.

🖼️ Screenshots
---------------

📦 Installation
---------------

Download the latest release for your platform.

### 🪟 Windows

Install from the release page, or use a package manager such as winget or Scoop. Package manager versions may lag behind the latest release.

### 🍎 macOS

If macOS blocks the app on first launch, run the following command in Terminal after placing it in `/Applications`:

xattr -cr /Applications/Final2x.app

### 🐧 Linux

Install Python >= 3.10 and PyTorch >= 2.0, then install the backend and required system libraries. On Debian or Ubuntu:

pip install Final2x-core
Final2x-core -h # Verify the backend installation
sudo apt install -y libomp5 xdg-utils

🧩 References
-------------

The Python CLI and desktop backend live in `core` and share the desktop app's version number.

This project builds on the following open-source projects:

-   cccv — image restoration and super-resolution backend
-   naive-ui
-   electron-vite

📄 License
----------

This project is licensed under the BSD 3-Clause - see the LICENSE file for details.

💙 Acknowledgements
-------------------

Feel free to reach out to the project maintainers with any questions or concerns~
