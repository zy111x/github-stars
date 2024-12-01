---
project: Cloudreve
stars: 22029
description: 🌩支持多家云存储的云盘系统 (Self-hosted file management and sharing system, supports multiple storage providers)
url: https://github.com/cloudreve/Cloudreve
---

中文版本 • ✨V4 版本前瞻

  
  
Cloudreve  

==================

#### Self-hosted file management system with muilt-cloud support.

Homepage • Demo • Discussion • Documents • Download • Telegram Group • License

✨ Features
----------

-   ☁️ Support storing files into Local storage, Remote storage, Qiniu, Aliyun OSS, Tencent COS, Upyun, OneDrive, S3 compatible API.
-   📤 Upload/Download in directly transmission with speed limiting support.
-   💾 Integrate with Aria2 to download files offline, use multiple download nodes to share the load.
-   📚 Compress/Extract files, download files in batch.
-   💻 WebDAV support covering all storage providers.
-   ⚡Drag&Drop to upload files or folders, with streaming upload processing.
-   🗃️ Drag & Drop to manage your files.
-   👩‍👧‍👦 Multi-users with multi-groups.
-   🔗 Create share links for files and folders with expiration date.
-   👁️‍🗨️ Preview videos, images, audios, ePub files online; edit texts, Office documents online.
-   🎨 Customize theme colors, dark mode, PWA application, SPA, i18n.
-   🚀 All-In-One packing, with all features out-of-the-box.
-   🌈 ... ...

🛠️ Deploy
----------

Download the main binary for your target machine OS, CPU architecture and run it directly.

# Extract Cloudreve binary
tar -zxvf cloudreve\_VERSION\_OS\_ARCH.tar.gz

# Grant execute permission
chmod +x ./cloudreve

# Start Cloudreve
./cloudreve

The above is a minimum deploy example, you can refer to Getting started for a completed deployment.

⚙️ Build
--------

You need to have `Go >= 1.18`, `node.js`, `yarn`, `zip`, goreleaser and other necessary dependencies before you can build it yourself.

#### Install goreleaser

go install github.com/goreleaser/goreleaser@latest

#### Clone the code

git clone --recurse-submodules https://github.com/cloudreve/Cloudreve.git

#### Compile

goreleaser build --clean --single-target --snapshot

⚗️ Stacks
---------

-   Go + Gin
-   React + Redux + Material-UI

📜 License
----------

GPL V3
