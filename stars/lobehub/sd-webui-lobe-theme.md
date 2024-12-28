---
project: sd-webui-lobe-theme
stars: 2479
description: 🅰️ Lobe theme - The modern theme for stable diffusion webui, exquisite interface design, highly customizable UI, and efficiency boosting features.
url: https://github.com/lobehub/sd-webui-lobe-theme
---

Lobe Theme
==========

A modern interface framework designed for Stable Diffusion WebUI  
with an exquisite interface design, a highly customizable UI, and efficiency-boosting features.

English · 简体中文 · Changelog · Report Bug · Request Feature

  
  

Warning

`Lobe Theme v3` is compatible with `SD WebUI v1.6` and is not backwards compatible. Versions below `< 1.6` should be moved to the branch legacy-sd-webui-1.5

Table of contents

#### TOC

-   👋🏻 Getting Started & Join Our Community
-   📦 Extension Installation
-   ✨ Feature Overview
-   🖥 Environment Support
-   📦 Ecosystem
-   ⌨️ Local Development
-   🤝 Contributing
-   🩷 Sponsor
-   🔗 Links
    -   More Products
    -   Credits

👋🏻 Getting Started & Join Our Community
-----------------------------------------

Please be aware that LobeTheme is currently under active development, and feedback is welcome for any issues encountered.

Join our Discord community! This is where you can connect with developers and other enthusiastic users of LobeHub.

Important

**Star Us**, You will receive all release notifications from GitHub without any delay ~ ⭐️

Star History

📦 Extension Installation
-------------------------

Note

Before installing the extension, please check the environment version of Stable Diffusion WebUI, with a minimum requirement of `gradio-3.41.2` & `sd-webui 1.6`

#### `A` Installation via SD WebUI Extension Market

In Stable Diffusion WebUI, you can install the Lobe Theme extension through the built-in extension market.

-   First, open Stable Diffusion WebUI and go to the extension market. Enter "Lobe Theme" in the search box and click the search button. You will see a list of related extensions.
-   After finding the Lobe Theme extension, click the install button. The system will start downloading and installing the extension. After installation, you can find the Lobe Theme in the extension list, and it will take effect after reloading the UI.

#### `B` Clone this Repository via Git (Recommended)

If you prefer to manage extensions using Git, you can clone the repository to your extensions folder. Here are the detailed steps:

-   Open the command line interface and navigate to the root directory of Stable Diffusion WebUI.
-   Run the following command in the command line to clone the repository:

git clone "https://github.com/lobehub/sd-webui-lobe-theme" extensions/lobe-theme

> Once you have completed these steps, the Lobe Theme extension will be successfully installed in Stable Diffusion WebUI.

✨ Feature Overview
------------------

#### `1` Light & Dark Theme

The current theme design provides two visual effects: light theme and dark theme, to meet the visual comfort needs of users in different lighting environments, which can be quickly switched in the upper right corner of the navigation bar.

If you prefer to default to the dark theme, you can achieve this by using the startup parameter `--theme=dark`.

Tip

To force a certain color theme in the startup file, for example, if you want to default to the dark mode in the Windows system, you can add the following content to the `webui-user.bat` file:

set COMMANDLINE\_ARGS= --theme=dark

In addition, you can also directly switch the theme through URL parameters:

http://localhost:7860/?\_\_theme=light
http://localhost:7860/?\_\_theme=dark

Through these simple and intuitive operations, users can quickly switch the interface theme according to their personal preferences or current environment, in order to achieve the best user experience.

#### `2` Personalized Theme Customization

As a design engineer, LobeChat considers the personalized experience of users in interface design, and has introduced a flexible and changeable theme mode, providing a series of color customization options, allowing users to adjust the theme color of the application according to their preferences.

Whether you want a stable deep blue, a lively peach pink, or a professional gray and white, users can find color options that match their style in LobeTheme.

Tip

By clicking the gear icon in the upper right corner of the page, you can enter the settings panel for personalized customization.

-   **Primary Color**: We provide `13` carefully selected theme color schemes to meet your personalized color needs.
-   **Neutral Color**: For a more detailed adjustment of the visual experience, you can also choose from `6` different neutral gray levels.
-   **Logo Type**: You can choose the default `Lobe` and `Kitchen` logos, or customize them.
-   **Logo Customization**: Support inputting `img url`, `base64` encoded images, or `emoji` emoticons for logo customization. When entering a single `emoji`, the system will automatically convert it into a 3D Fluent Emoji, enriching the visual effect.
-   **Site Title Customization**: Allows you to customize the title of the website according to your needs.

#### `3` Prompt Syntax Highlighting

When using the Stable Diffusion model for Prompt writing, an effective feature is the Prompt syntax highlighting.

This feature automatically adds color coding to the input Prompt text according to preset syntax rules, enhancing the user experience and the intuitiveness of operations. Prompt syntax highlighting can not only help users identify and construct syntax structures more clearly, but also improve the efficiency of text editing and debugging.

#### `4` Customizable Sidebar

One of the key highlights of LobeTheme is its highly customizable sidebar feature, designed to make the image generation workflow smoother, ensuring that every user can adjust and optimize their workspace according to their preferences.

Tip

By clicking the gear icon in the upper right corner of the interface, you can easily access and adjust the following settings:

-   **Input Area**
    -   Display Mode: `Scroll Fixed Height` | `Adjust Size According to Text Lines`
-   **Sidebar Configuration**
    -   Default Expansion: `true`
    -   Display Mode: `Fixed` | `Floating`
    -   Default Width: `280 pixels`
-   **Extra Network Sidebar**
    -   Enable: `true`
    -   Default Expansion: `true`
    -   Display Mode: `Fixed` | `Floating`
    -   Default Width: `340 pixels`
    -   Model Card Default Size: `86 pixels`

Recommended System Settings

**Extra-Networks Extension Model Window**

-   Thumbnail View
-   Card Width: 86
-   Card Height: 128

**Quick-Setting**

sd\_model\_checkpoint, sd\_vae, CLIP\_stop\_at\_last\_layers, img2img\_background\_color, img2img\_color\_correction, samples\_save, samples\_format, grid\_save, return\_grid,  n\_rows, live\_previews\_enable, show\_progress\_every\_n\_steps, live\_preview\_refresh\_period

#### `5` Improved Image Information Display

The display of generation information has been improved, with a deep optimization of the data presentation mechanism, and the introduction of a "one-click copy" function to improve information retrieval efficiency.

Now, you can quickly obtain the required Seeds without tedious searching in long strings.

#### `6` Image Recipe Sharing

A brand-new image sharing feature has been launched. With a simple one-click operation, you can easily share the current image recipe, create exquisite shared images, and explore more customizable settings to make the shared images more personalized.

#### `7` Prompt Editor

A user-friendly prompt word editor has been added to the second tab of the quick setting menu. It includes a series of preset tags covering post-processing, style description, and other key words, simplifying your operation process and helping you edit and manage prompts more efficiently.

#### `8` Mobile-Friendly Adaptation

In order to improve the interactive experience of mobile users, LobeTheme has implemented an intelligent folding mechanism for breadcrumb navigation and finely adapted the sidebar. These adjustments are aimed at providing convenient and intuitive navigation experience on any device.

However, achieving the same complex functions and detailed customization as the desktop on the mobile end poses certain challenges. Especially when integrating with the Stable Diffusion WebUI interface, high complexity and precise parameter settings are required, which may result in differences in user experience between mobile and desktop.

If you have any suggestions or ideas, please feel free to provide feedback through GitHub Issues or Pull Requests.

#### `9` PWA Progressive Web Application

In today's multi-device environment, providing a seamless experience for users is crucial. Therefore, we have adopted the Progressive Web Application PWA technology, which is a modern web technology that can elevate web applications to a near-native application experience.

Through PWA, LobeTheme can provide a highly optimized user experience on desktop and mobile devices, while maintaining lightweight and high performance characteristics. Visually and perceptually, it has been carefully designed to ensure that its interface is indistinguishable from native applications, providing smooth animations, responsive layout, and adaptation to different screen resolutions of different devices.

Note

If you are not familiar with the installation process of PWA, you can follow these steps to add LobeChat as your desktop application (also applicable to mobile devices):

-   Run the Chrome or Edge browser on your computer.
-   Visit the LobeChat website.
-   Click the Install icon in the upper right corner of the address bar.
-   Follow the on-screen instructions to complete the installation of PWA.

#### `10` Prompt Word Formatting

Click the 🪄 button below the Prompt to format the prompt words with one click.

Tip

Convert full-width punctuation to half-width, remove extra spaces, add missing commas, and move the Extra-Networks model to the end.

Before formatting

```
photorealistic   photo of a handsome male (wizard  :1.2）， <lora:LuisapHotlineStyle:0.5> <lora:ElegantHanfuRuqunStyle:0.2>    short beard, white wizard  shirt, (with golden    trim:0.8),
```

After formatting

```
photorealistic photo of a handsome male, (wizard:1.2), short beard, white wizard shirt, (with golden trim:0.8), <lora:LuisapHotlineStyle:0.5>, <lora:ElegantHanfuRuqunStyle:0.2>
```

#### More Features

-   💎 **Exquisite UI Design**: Carefully designed interface with elegant appearance and smooth interactive effects.
-   🖼️ **Multiple Layout Modes**: In the dual-column mode, it achieves adjustable canvas proportions, ensuring that the generated images are always on top.
-   🌍 **Internationalization Support**: Fully supports major i18n languages and welcomes contributions on PR.

> ✨ With continuous updates in product iterations, we hope to bring more exciting features!

🖥 Environment Support
----------------------

  
Chrome

  
Edge

  
Safari

last 2 versions

last 2 versions

last 2 versions

Caution

There is currently a known compatibility issue with styles on Firefox browser.

📦 Ecosystem
------------

NPM

Repository

Description

Version

@lobehub/ui

lobehub/lobe-ui

Lobe UI is an open-source UI component library dedicated to building AIGC web applications.

@lobehub/lint

lobehub/lobe-lint

LobeLint provides configurations for ESlint, Stylelint, Commitlint, Prettier, Remark, and Semantic Release for LobeHub.

@lobehub/assets

lobehub/assets

Logo assets, favicons, webfonts for LobeHub.

⌨️ Local Development
--------------------

You can use Github Codespaces for online development:

Alternatively, you can clone it for local development. To enable hot-reloading mode, you need to start stable diffuison on port `7860` in advance.

$ git clone https://github.com/lobehub/sd-webui-lobe-theme.git
$ cd sd-webui-lobe-theme
$ bun install
$ bun dev

🤝 Contributing
---------------

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub Issues to get stuck in to show us what you’re made of.

  
  
  

🩷 Sponsor
----------

Every bit counts and your one-time donation sparkles in our galaxy of support! You're a shooting star, making a swift and bright impact on our journey. Thank you for believing in us – your generosity guides us toward our mission, one brilliant flash at a time.

🔗 Links
--------

### More Products

-   **🤖 Lobe Chat :** An open-source, extensible (Function Calling), high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.
-   **🌏 Lobe i18n :** Lobe i18n is an automation tool for the i18n (internationalization) translation process, powered by ChatGPT. It supports features such as automatic splitting of large files, incremental updates, and customization options for the OpenAI model, API proxy, and temperature.
-   **💌 Lobe Commit :** Lobe Commit is a CLI tool that leverages Langchain/ChatGPT to generate Gitmoji-based commit messages.

### Credits

-   stable-diffusion-webui：https://github.com/AUTOMATIC1111/stable-diffusion-webui
-   gradio-theme-gallery: https://huggingface.co/spaces/gradio/theme-gallery
-   cozy-nest: https://github.com/Nevysha/Cozy-Nest
-   _before `1.0.0` version_
    -   sd-web-ui-quickcs: https://github.com/Gerschel/sd-web-ui-quickcss/
    -   Dark-Themes-SD-WebUI-Automatic1111: https://github.com/Nacurutu/Dark-Themes-SD-WebUI-Automatic1111

* * *

#### 📝 License

Copyright © 2023 LobeHub.  
This project is AGPL3 licensed.
