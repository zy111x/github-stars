---
project: lobe-chat
stars: 48333
description: 🤯 Lobe Chat - an open-source, modern-design AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Qwen /  DeepSeek), Knowledge Base (file upload / knowledge management / RAG ), Multi-Modals (Vision/TTS/Plugins/Artifacts). One-click FREE deployment of your private ChatGPT/ Claude application.
url: https://github.com/lobehub/lobe-chat
---

Lobe Chat
=========

An open-source, modern-design ChatGPT/LLMs UI/Framework.  
Supports speech-synthesis, multi-modal, and extensible (function call) plugin system.  
One-click **FREE** deployment of your private OpenAI ChatGPT/Claude/Gemini/Groq/Ollama chat application.

**English** · 简体中文 · 日本語 · Official Site · Changelog · Documents · Blog · Feedback

  
  
  

**Share LobeChat Repository**

Pioneering the new age of thinking and creating. Built for you, the Super Individual.

Table of contents

#### TOC

-   👋🏻 Getting Started & Join Our Community
-   ✨ Features
    -   `1` File Upload/Knowledge Base
    -   `2` Multi-Model Service Provider Support
    -   `3` Local Large Language Model (LLM) Support
    -   `4` Model Visual Recognition
    -   `5` TTS & STT Voice Conversation
    -   `6` Text to Image Generation
    -   `7` Plugin System (Function Calling)
    -   `8` Agent Market (GPTs)
    -   `9` Support Local / Remote Database
    -   `10` Support Multi-User Management
    -   `11` Progressive Web App (PWA)
    -   `12` Mobile Device Adaptation
    -   `13` Custom Themes
    -   `*` What's more
-   ⚡️ Performance
-   🛳 Self Hosting
    -   `A` Deploying with Vercel, Zeabur , Sealos or Alibaba Cloud
    -   `B` Deploying with Docker
    -   Environment Variable
-   📦 Ecosystem
-   🧩 Plugins
-   ⌨️ Local Development
-   🤝 Contributing
-   ❤️ Sponsor
-   🔗 More Products

  

👋🏻 Getting Started & Join Our Community
-----------------------------------------

We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC. By adopting the Bootstrapping approach, we aim to provide developers and users with a more open, transparent, and user-friendly product ecosystem.

Whether for users or professional developers, LobeHub will be your AI Agent playground. Please be aware that LobeChat is currently under active development, and feedback is welcome for any issues encountered.

No installation or registration necessary! Visit our website to experience it firsthand.

Join our Discord community! This is where you can connect with developers and other enthusiastic users of LobeHub.

Important

**Star Us**, You will receive all release notifications from GitHub without any delay ~ ⭐️

Star History

✨ Features
----------

### `1` File Upload/Knowledge Base

LobeChat supports file upload and knowledge base functionality. You can upload various types of files including documents, images, audio, and video, as well as create knowledge bases, making it convenient for users to manage and search for files. Additionally, you can utilize files and knowledge base features during conversations, enabling a richer dialogue experience.

chat.pdf.mp4

Tip

Learn more on 📘 LobeChat Knowledge Base Launch — From Now On, Every Step Counts

### `2` Multi-Model Service Provider Support

In the continuous development of LobeChat, we deeply understand the importance of diversity in model service providers for meeting the needs of the community when providing AI conversation services. Therefore, we have expanded our support to multiple model service providers, rather than being limited to a single one, in order to offer users a more diverse and rich selection of conversations.

In this way, LobeChat can more flexibly adapt to the needs of different users, while also providing developers with a wider range of choices.

#### Supported Model Service Providers

We have implemented support for the following model service providers:

-   **AWS Bedrock**: Integrated with AWS Bedrock service, supporting models such as **Claude / LLama2**, providing powerful natural language processing capabilities. Learn more
-   **Anthropic (Claude)**: Accessed Anthropic's **Claude** series models, including Claude 3 and Claude 2, with breakthroughs in multi-modal capabilities and extended context, setting a new industry benchmark. Learn more
-   **Google AI (Gemini Pro, Gemini Vision)**: Access to Google's **Gemini** series models, including Gemini and Gemini Pro, to support advanced language understanding and generation. Learn more
-   **Groq**: Accessed Groq's AI models, efficiently processing message sequences and generating responses, capable of multi-turn dialogues and single-interaction tasks. Learn more
-   **OpenRouter**: Supports routing of models including **Claude 3**, **Gemma**, **Mistral**, **Llama2** and **Cohere**, with intelligent routing optimization to improve usage efficiency, open and flexible. Learn more
-   **01.AI (Yi Model)**: Integrated the 01.AI models, with series of APIs featuring fast inference speed, which not only shortened the processing time, but also maintained excellent model performance. Learn more
-   **Together.ai**: Over 100 leading open-source Chat, Language, Image, Code, and Embedding models are available through the Together Inference API. For these models you pay just for what you use. Learn more
-   **ChatGLM**: Added the **ChatGLM** series models from Zhipuai (GLM-4/GLM-4-vision/GLM-3-turbo), providing users with another efficient conversation model choice. Learn more
-   **Moonshot AI (Dark Side of the Moon)**: Integrated with the Moonshot series models, an innovative AI startup from China, aiming to provide deeper conversation understanding. Learn more
-   **Minimax**: Integrated the Minimax models, including the MoE model **abab6**, offers a broader range of choices. Learn more
-   **DeepSeek**: Integrated with the DeepSeek series models, an innovative AI startup from China, The product has been designed to provide a model that balances performance with price. Learn more
-   **Qwen**: Integrated the Qwen series models, including the latest **qwen-turbo**, **qwen-plus** and **qwen-max**. Learn more
-   **Novita AI**: Access **Llama**, **Mistral**, and other leading open-source models at cheapest prices. Engage in uncensored role-play, spark creative discussions, and foster unrestricted innovation. **Pay For What You Use.** Learn more

At the same time, we are also planning to support more model service providers, such as Replicate and Perplexity, to further enrich our service provider library. If you would like LobeChat to support your favorite service provider, feel free to join our community discussion.

### `3` Local Large Language Model (LLM) Support

To meet the specific needs of users, LobeChat also supports the use of local models based on Ollama, allowing users to flexibly use their own or third-party models.

Tip

Learn more about 📘 Using Ollama in LobeChat by checking it out.

### `4` Model Visual Recognition

LobeChat now supports OpenAI's latest `gpt-4-vision` model with visual recognition capabilities, a multimodal intelligence that can perceive visuals. Users can easily upload or drag and drop images into the dialogue box, and the agent will be able to recognize the content of the images and engage in intelligent conversation based on this, creating smarter and more diversified chat scenarios.

This feature opens up new interactive methods, allowing communication to transcend text and include a wealth of visual elements. Whether it's sharing images in daily use or interpreting images within specific industries, the agent provides an outstanding conversational experience.

### `5` TTS & STT Voice Conversation

LobeChat supports Text-to-Speech (TTS) and Speech-to-Text (STT) technologies, enabling our application to convert text messages into clear voice outputs, allowing users to interact with our conversational agent as if they were talking to a real person. Users can choose from a variety of voices to pair with the agent.

Moreover, TTS offers an excellent solution for those who prefer auditory learning or desire to receive information while busy. In LobeChat, we have meticulously selected a range of high-quality voice options (OpenAI Audio, Microsoft Edge Speech) to meet the needs of users from different regions and cultural backgrounds. Users can choose the voice that suits their personal preferences or specific scenarios, resulting in a personalized communication experience.

### `6` Text to Image Generation

With support for the latest text-to-image generation technology, LobeChat now allows users to invoke image creation tools directly within conversations with the agent. By leveraging the capabilities of AI tools such as `DALL-E 3`, `MidJourney`, and `Pollinations`, the agents are now equipped to transform your ideas into images.

This enables a more private and immersive creative process, allowing for the seamless integration of visual storytelling into your personal dialogue with the agent.

### `7` Plugin System (Function Calling)

The plugin ecosystem of LobeChat is an important extension of its core functionality, greatly enhancing the practicality and flexibility of the LobeChat assistant.

Plugin-Demo.mp4

By utilizing plugins, LobeChat assistants can obtain and process real-time information, such as searching for web information and providing users with instant and relevant news.

In addition, these plugins are not limited to news aggregation, but can also extend to other practical functions, such as quickly searching documents, generating images, obtaining data from various platforms like Bilibili, Steam, and interacting with various third-party services.

Tip

Learn more about 📘 Plugin Usage by checking it out.

Recent Submits

Description

Google CSE  
By **vsnthdev** on **2024-12-02**

Searches Google through their official CSE API.  
`web` `search`

Google CSE  
By **vsnthdev** on **2024-12-02**

Searches Google through their official CSE API.  
`web` `search`

Speak  
By **speak** on **2024-12-02**

Learn how to say anything in another language with Speak, your AI-powered language tutor.  
`education` `language`

Speak  
By **speak** on **2024-12-02**

Learn how to say anything in another language with Speak, your AI-powered language tutor.  
`education` `language`

> 📊 Total plugins: **98**

### `8` Agent Market (GPTs)

In LobeChat Agent Marketplace, creators can discover a vibrant and innovative community that brings together a multitude of well-designed agents, which not only play an important role in work scenarios but also offer great convenience in learning processes. Our marketplace is not just a showcase platform but also a collaborative space. Here, everyone can contribute their wisdom and share the agents they have developed.

Tip

By 🤖/🏪 Submit Agents, you can easily submit your agent creations to our platform. Importantly, LobeChat has established a sophisticated automated internationalization (i18n) workflow, capable of seamlessly translating your agent into multiple language versions. This means that no matter what language your users speak, they can experience your agent without barriers.

Important

We welcome all users to join this growing ecosystem and participate in the iteration and optimization of agents. Together, we can create more interesting, practical, and innovative agents, further enriching the diversity and practicality of the agent offerings.

Recent Submits

Description

System Instruction Expert  
By **yuyun2000** on **2024-12-04**

Skilled in refining and generating efficient system instructions  
`system-instructions` `writing` `detail-optimization` `user-needs`

Japanese Memory Helper  
By **sharkbear212** on **2024-12-04**

Specializes in Japanese Hiragana, Katakana, vocabulary, and memory techniques for explanations and phrases  
`explanation` `memory-techniques` `japanese-teaching`

Poetry Card Designer  
By **lianxin255** on **2024-12-03**

Skilled in designing poetry cards to enhance artistic sense and appeal  
`poetry-card-design` `card` `creativity` `artistic-expression`

Daily Doctor  
By **yuyun2000** on **2024-11-30**

Specializes in surgical diagnosis and personalized health management  
`general-medicine` `surgery` `health-consultation` `personalized-treatment` `medical-education`

> 📊 Total agents: **453**

### `9` Support Local / Remote Database

LobeChat supports the use of both server-side and local databases. Depending on your needs, you can choose the appropriate deployment solution:

-   **Local database**: suitable for users who want more control over their data and privacy protection. LobeChat uses CRDT (Conflict-Free Replicated Data Type) technology to achieve multi-device synchronization. This is an experimental feature aimed at providing a seamless data synchronization experience.
-   **Server-side database**: suitable for users who want a more convenient user experience. LobeChat supports PostgreSQL as a server-side database. For detailed documentation on how to configure the server-side database, please visit Configure Server-side Database.

Regardless of which database you choose, LobeChat can provide you with an excellent user experience.

### `10` Support Multi-User Management

LobeChat supports multi-user management and provides two main user authentication and management solutions to meet different needs:

-   **next-auth**: LobeChat integrates `next-auth`, a flexible and powerful identity verification library that supports multiple authentication methods, including OAuth, email login, credential login, etc. With `next-auth`, you can easily implement user registration, login, session management, social login, and other functions to ensure the security and privacy of user data.
    
-   **Clerk**: For users who need more advanced user management features, LobeChat also supports `Clerk`, a modern user management platform. `Clerk` provides richer functions, such as multi-factor authentication (MFA), user profile management, login activity monitoring, etc. With `Clerk`, you can get higher security and flexibility, and easily cope with complex user management needs.
    

Regardless of which user management solution you choose, LobeChat can provide you with an excellent user experience and powerful functional support.

### `11` Progressive Web App (PWA)

We deeply understand the importance of providing a seamless experience for users in today's multi-device environment. Therefore, we have adopted Progressive Web Application (PWA) technology, a modern web technology that elevates web applications to an experience close to that of native apps.

Through PWA, LobeChat can offer a highly optimized user experience on both desktop and mobile devices while maintaining its lightweight and high-performance characteristics. Visually and in terms of feel, we have also meticulously designed the interface to ensure it is indistinguishable from native apps, providing smooth animations, responsive layouts, and adapting to different device screen resolutions.

Note

If you are unfamiliar with the installation process of PWA, you can add LobeChat as your desktop application (also applicable to mobile devices) by following these steps:

-   Launch the Chrome or Edge browser on your computer.
-   Visit the LobeChat webpage.
-   In the upper right corner of the address bar, click on the Install icon.
-   Follow the instructions on the screen to complete the PWA Installation.

### `12` Mobile Device Adaptation

We have carried out a series of optimization designs for mobile devices to enhance the user's mobile experience. Currently, we are iterating on the mobile user experience to achieve smoother and more intuitive interactions. If you have any suggestions or ideas, we welcome you to provide feedback through GitHub Issues or Pull Requests.

### `13` Custom Themes

As a design-engineering-oriented application, LobeChat places great emphasis on users' personalized experiences, hence introducing flexible and diverse theme modes, including a light mode for daytime and a dark mode for nighttime. Beyond switching theme modes, a range of color customization options allow users to adjust the application's theme colors according to their preferences. Whether it's a desire for a sober dark blue, a lively peach pink, or a professional gray-white, users can find their style of color choices in LobeChat.

Tip

The default configuration can intelligently recognize the user's system color mode and automatically switch themes to ensure a consistent visual experience with the operating system. For users who like to manually control details, LobeChat also offers intuitive setting options and a choice between chat bubble mode and document mode for conversation scenarios.

### `*` What's more

Beside these features, LobeChat also have much better basic technique underground:

-   💨 **Quick Deployment**: Using the Vercel platform or docker image, you can deploy with just one click and complete the process within 1 minute without any complex configuration.
-   🌐 **Custom Domain**: If users have their own domain, they can bind it to the platform for quick access to the dialogue agent from anywhere.
-   🔒 **Privacy Protection**: All data is stored locally in the user's browser, ensuring user privacy.
-   💎 **Exquisite UI Design**: With a carefully designed interface, it offers an elegant appearance and smooth interaction. It supports light and dark themes and is mobile-friendly. PWA support provides a more native-like experience.
-   🗣️ **Smooth Conversation Experience**: Fluid responses ensure a smooth conversation experience. It fully supports Markdown rendering, including code highlighting, LaTex formulas, Mermaid flowcharts, and more.

> ✨ more features will be added when LobeChat evolve.

* * *

Note

You can find our upcoming Roadmap plans in the Projects section.

⚡️ Performance
--------------

Note

The complete list of reports can be found in the 📘 Lighthouse Reports

Desktop

Mobile

📑 Lighthouse Report

📑 Lighthouse Report

🛳 Self Hosting
---------------

LobeChat provides Self-Hosted Version with Vercel, Alibaba Cloud, and Docker Image. This allows you to deploy your own chatbot within a few minutes without any prior knowledge.

Tip

Learn more about 📘 Build your own LobeChat by checking it out.

### `A` Deploying with Vercel, Zeabur , Sealos or Alibaba Cloud

"If you want to deploy this service yourself on Vercel, Zeabur or Alibaba Cloud, you can follow these steps:

-   Prepare your OpenAI API Key.
-   Click the button below to start deployment: Log in directly with your GitHub account, and remember to fill in the `OPENAI_API_KEY`(required) and `ACCESS_CODE` (recommended) on the environment variable section.
-   After deployment, you can start using it.
-   Bind a custom domain (optional): The DNS of the domain assigned by Vercel is polluted in some areas; binding a custom domain can connect directly.

Deploy with Vercel

Deploy with Zeabur

Deploy with Sealos

Deploy with RepoCloud

Deploy with Alibaba Cloud

#### After Fork

After fork, only retain the upstream sync action and disable other actions in your repository on GitHub.

#### Keep Updated

If you have deployed your own project following the one-click deployment steps in the README, you might encounter constant prompts indicating "updates available." This is because Vercel defaults to creating a new project instead of forking this one, resulting in an inability to detect updates accurately.

Tip

We suggest you redeploy using the following steps, 📘 Auto Sync With Latest

  

### `B` Deploying with Docker

We provide a Docker image for deploying the LobeChat service on your own private device. Use the following command to start the LobeChat service:

$ docker run \-d \-p 3210:3210 \\
  \-e OPENAI\_API\_KEY=sk-xxxx \\
  \-e ACCESS\_CODE=lobe66 \\
  \--name lobe-chat \\
  lobehub/lobe-chat

Tip

If you need to use the OpenAI service through a proxy, you can configure the proxy address using the `OPENAI_PROXY_URL` environment variable:

$ docker run \-d \-p 3210:3210 \\
  \-e OPENAI\_API\_KEY=sk-xxxx \\
  \-e OPENAI\_PROXY\_URL=https://api-proxy.com/v1 \\
  \-e ACCESS\_CODE=lobe66 \\
  \--name lobe-chat \\
  lobehub/lobe-chat

Note

For detailed instructions on deploying with Docker, please refer to the 📘 Docker Deployment Guide

  

### Environment Variable

This project provides some additional configuration items set with environment variables:

Environment Variable

Required

Description

Example

`OPENAI_API_KEY`

Yes

This is the API key you apply on the OpenAI account page

`sk-xxxxxx...xxxxxx`

`OPENAI_PROXY_URL`

No

If you manually configure the OpenAI interface proxy, you can use this configuration item to override the default OpenAI API request base URL

`https://api.chatanywhere.cn` or `https://aihubmix.com/v1`  
The default value is  
`https://api.openai.com/v1`

`ACCESS_CODE`

No

Add a password to access this service; you can set a long password to avoid leaking. If this value contains a comma, it is a password array.

`awCTe)re_r74` or `rtrt_ewee3@09!` or `code1,code2,code3`

`OPENAI_MODEL_LIST`

No

Used to control the model list. Use `+` to add a model, `-` to hide a model, and `model_name=display_name` to customize the display name of a model, separated by commas.

`qwen-7b-chat,+glm-6b,-gpt-3.5-turbo`

Note

The complete list of environment variables can be found in the 📘 Environment Variables

📦 Ecosystem
------------

NPM

Repository

Description

Version

@lobehub/ui

lobehub/lobe-ui

Open-source UI component library dedicated to building AIGC web applications.

@lobehub/icons

lobehub/lobe-icons

Popular AI / LLM Model Brand SVG Logo and Icon Collection.

@lobehub/tts

lobehub/lobe-tts

High-quality & reliable TTS/STT React Hooks library

@lobehub/lint

lobehub/lobe-lint

Configurations for ESlint, Stylelint, Commitlint, Prettier, Remark, and Semantic Release for LobeHub.

🧩 Plugins
----------

Plugins provide a means to extend the Function Calling capabilities of LobeChat. They can be used to introduce new function calls and even new ways to render message results. If you are interested in plugin development, please refer to our 📘 Plugin Development Guide in the Wiki.

-   lobe-chat-plugins: This is the plugin index for LobeChat. It accesses index.json from this repository to display a list of available plugins for LobeChat to the user.
-   chat-plugin-template: This is the plugin template for LobeChat plugin development.
-   @lobehub/chat-plugin-sdk: The LobeChat Plugin SDK assists you in creating exceptional chat plugins for Lobe Chat.
-   @lobehub/chat-plugins-gateway: The LobeChat Plugins Gateway is a backend service that provides a gateway for LobeChat plugins. We deploy this service using Vercel. The primary API POST /api/v1/runner is deployed as an Edge Function.

Note

The plugin system is currently undergoing major development. You can learn more in the following issues:

-   **Plugin Phase 1**: Implement separation of the plugin from the main body, split the plugin into an independent repository for maintenance, and realize dynamic loading of the plugin.
-   **Plugin Phase 2**: The security and stability of the plugin's use, more accurately presenting abnormal states, the maintainability of the plugin architecture, and developer-friendly.
-   **Plugin Phase 3**: Higher-level and more comprehensive customization capabilities, support for plugin authentication, and examples.

⌨️ Local Development
--------------------

You can use GitHub Codespaces for online development:

Or clone it for local development:

$ git clone https://github.com/lobehub/lobe-chat.git
$ cd lobe-chat
$ pnpm install
$ pnpm dev

If you would like to learn more details, please feel free to look at our 📘 Development Guide.

🤝 Contributing
---------------

Contributions of all types are more than welcome; if you are interested in contributing code, feel free to check out our GitHub Issues and Projects to get stuck in to show us what you’re made of.

Tip

We are creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation.

Help us make LobeChat better. Welcome to provide product design feedback, user experience discussions directly to us.

**Principal Maintainers:** @arvinxx @canisminor1990

  
  
  

❤️ Sponsor
----------

Every bit counts and your one-time donation sparkles in our galaxy of support! You're a shooting star, making a swift and bright impact on our journey. Thank you for believing in us – your generosity guides us toward our mission, one brilliant flash at a time.

🔗 More Products
----------------

-   **🅰️ Lobe SD Theme:** Modern theme for Stable Diffusion WebUI, exquisite interface design, highly customizable UI, and efficiency-boosting features.
-   **⛵️ Lobe Midjourney WebUI:** WebUI for Midjourney, leverages AI to quickly generate a wide array of rich and diverse images from text prompts, sparking creativity and enhancing conversations.
-   **🌏 Lobe i18n :** Lobe i18n is an automation tool for the i18n (internationalization) translation process, powered by ChatGPT. It supports features such as automatic splitting of large files, incremental updates, and customization options for the OpenAI model, API proxy, and temperature.
-   **💌 Lobe Commit:** Lobe Commit is a CLI tool that leverages Langchain/ChatGPT to generate Gitmoji-based commit messages.

* * *

#### 📝 License

Copyright © 2024 LobeHub.  
This project is Apache 2.0 licensed.
