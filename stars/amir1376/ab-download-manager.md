---
project: ab-download-manager
stars: 7995
description: A Download Manager that speeds up your downloads
url: https://github.com/amir1376/ab-download-manager
---

AB Download Manager
===================

Description
-----------

AB Download Manager is a desktop app which lets you manage and organize your download files better than before

Features
--------

-   ⚡️ Faster Download Speed
-   ⏰ Queues and Schedulers
-   🌐 Browser Extensions
-   💻 Multiplatform (Windows / Linux / Mac)
-   🌙 Multiple Themes (Dark/Light) with modern UI
-   ❤️ Free and Open Source

Please visit Project Website for more info

Installation
------------

### Download and Install the App

Official Website

GitHub Releases

#### installation script (Linux)

bash <(curl -fsSL https://raw.githubusercontent.com/amir1376/ab-download-manager/master/scripts/install.sh)

#### winget or scoop (for Windows)

**winget**:

winget install amir1376.ABDownloadManager

**scoop**:

scoop install extras/abdownloadmanager

### Browser Extensions

You can download the browser extension to integrate the app with your browser

Screenshots
-----------

Project Status & Feedback
-------------------------

Please keep in mind that this project is in the beginning of its journey. **lots of features** are on the way!.

**But**, in the meantime you may face **Bugs or Problems**. so. Please report them (by Community chat or `GitHub Issues`) to me,And I'll do my best to fix them ASAP

Community
---------

You can join to our Telegram Group to

-   Report problems
-   Suggest features
-   Get help about the app

Repositories And Source Code
----------------------------

There are multiple repositories related to the **AB Download Manager** project

Repository

Description

Main Application (You are here)

Contains the **Application** that runs on your **device**

Browser Integration

Contains the **Browser Extension** to be installed on your **browser**

Website

Contains the **AB Download Manager** website

I spent a lot of time to create this project.

If you like my work, Please consider giving it a ⭐ Thanks ❤️

Bug Report
----------

If you see bugs in the source code! please report them in the `GitHub Issues` section

Build From Source
-----------------

to compile and test desktop app on your local machine follow these steps.

1.  Clone the project
    
2.  Download and extract the JBR and make it available by either
    
    -   adding it to your `PATH`, or
    -   setting the `JAVA_HOME` environment variable to its installation path.
3.  cd into the project, open your terminal and execute the following command
    
    ./gradlew createReleaseFolderForCi
    
4.  The output will be created in:
    
    ```
    <project_dir>/build/ci-release
    ```
    

> **Note**. This project is compiled and published by GitHub actions here, so if you faced any problem you can check that too

Translations
------------

If you’d like to help translate AB Download Manager into another language, or improve existing translations, you can do so on Crowdin. Here’s how:

-   Visit the project in Crowdin
-   Please DO NOT submit translations via pull requests.
-   If you want to add a new language, please see here

Contribution
------------

Contributions to this project are very welcome!

If you want to contribute to this project, please read Contributing Guide first.

Let's make a better Download Manager together ❤️

Support the Project
-------------------

If you'd like to support the project, you can find details on how to donate in the DONATE.md file.
