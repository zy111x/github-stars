---
project: ab-download-manager
stars: 7594
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

Download Instructions

GitHub Releases

in order to download and install the app

### installation script (Linux)

bash <(curl -fsSL https://raw.githubusercontent.com/amir1376/ab-download-manager/master/scripts/install.sh)

### winget or scoop (for Windows)

**winget**:

winget install amir1376.ABDownloadManager

**scoop**:

scoop install extras/abdownloadmanager

Uninstall
---------

perform below command to uninstall

bash <(curl -fsSL https://raw.githubusercontent.com/amir1376/ab-download-manager/master/scripts/uninstall.sh)

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
2.  Install the JBR
    1.  If you extract it to your home directory and don't want to modify global `JAVA_HOME` environment variable you can set `JAVA_HOME` to the extracted directory e.g. `export JAVA_HOME=~/jbrsdk_jcef-21.0.4-linux-x64-b620.4` for linux or `$env:JAVA_HOME="C:\path\to\jbr"` on Windows
3.  cd into the project, open your terminal and execute the following commands
4.  select which way you want to compile the app

Packaged (msi,deb at the moment)

./gradlew

./gradlew packageReleaseDistributionForCurrentOS

This will create an installer package for your **current OS**, so you can install it on your own

> Note: you will get error if your OS does not support any of above package types in this case you should compile it `without packaging`

Without Package

In case you don't want to package it or your OS does not support those package types you can use this command to compile the app without packaging it

./gradlew

./gradlew createReleaseDistributable

It will create an output folder

> NOTE: this is not packaged you may package it yourself manually, or just simply run it!

> I suggest you to move the output somewhere else if you want to run it directly

The output will be created in

```
<project_dir>/desktop/app/build/compose/binaries/main-release/
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
