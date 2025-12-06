---
project: ab-download-manager
stars: 12145
description: A Download Manager that speeds up your downloads
url: https://github.com/amir1376/ab-download-manager
---

AB Download Manager
===================

Description
-----------

AB Download Manager is a desktop app that helps you manage and organize your downloads more efficiently than ever before.

Features
--------

-   ⚡️ Faster Download Speed
-   ⏰ Queues and Schedulers
-   🌐 Browser Extensions
-   💻 Multiplatform (Windows / Linux / Mac)
-   🌙 Multiple Themes (Dark/Light) with modern UI
-   ❤️ Free and Open Source

Please visit Project Website for more info.

Installation
------------

### Download and Install the App

#### Installation script (Linux)

bash <(curl -fsSL https://raw.githubusercontent.com/amir1376/ab-download-manager/master/scripts/install.sh)

#### Winget or Scoop (for Windows)

**winget**:

winget install amir1376.ABDownloadManager

**scoop**:

scoop install extras/abdownloadmanager

#### Homebrew (for macOS)

brew tap amir1376/tap && brew install --cask ab-download-manager

### Browser Extensions

You can download the browser extension to integrate the app with your browser.

Screenshots
-----------

Project Status & Feedback
-------------------------

Please keep in mind that this project is in the beginning of its journey. **Lots of features** are on the way!

**But**, in the meantime you may face **Bugs or Problems**. If you do, please report them to me via the Community chat or through `GitHub Issues`, and I'll do my best to fix them ASAP.

Community
---------

You can join our Telegram Group to:

-   Report problems
-   Suggest features
-   Get help with the app

Repositories And Source Code
----------------------------

There are multiple repositories related to the **AB Download Manager** project:

Repository

Description

Main Application (You are here)

Contains the **Application** that runs on your **device**

Browser Integration

Contains the **Browser Extension** to be installed on your **browser**

Website

Contains the **AB Download Manager** website

I've spent a lot of time to create this project.

If you like my work, please consider giving it a ⭐ — thanks! ❤️

Bug Report
----------

If you notice any bugs in the source code, please report them via the `GitHub Issues` section.

Build From Source
-----------------

To compile and test the desktop app on your local machine, follow these steps:

1.  Clone the project.
    
2.  Download and extract the JBR, and make it available by either:
    
    -   Adding it to your `PATH`, or
    -   Setting the `JAVA_HOME` environment variable to its installation path.
3.  Navigate to the project directory, open your terminal and execute the following command:
    
    ./gradlew createReleaseFolderForCi
    
4.  The output will be available at:
    
    ```
    <project_dir>/build/ci-release
    ```
    

> **Note**. This project is compiled and published by GitHub actions here, so if you faced any problem you can check that too.

Translations
------------

If you’d like to help translate AB Download Manager into another language, or improve existing translations, you can do so on Crowdin. Here’s how:

-   Visit the project in Crowdin
-   Please DO NOT submit translations via pull requests.
-   If you want to add a new language, please see this.

Contribution
------------

> ❌ **Important Notice:** The entire codebase is being completely rewritten. Pull requests are **not accepted** at this time, as incoming changes may be lost or conflict heavily with ongoing refactoring. Please wait until the refactor is complete before submitting any PRs.

Contributions to this project are very welcome!

If you want to contribute to this project, please read Contributing Guide first.

Let's make a better Download Manager together! ❤️

Support the Project
-------------------

If you'd like to support the project, you can find details on how to donate in the DONATE.md file.
