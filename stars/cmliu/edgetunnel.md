---
project: edgetunnel
stars: 26912
description: edgetunnel 2.0 VLESS/Trojan 多功能面板
url: https://github.com/cmliu/edgetunnel
---

🚀 edgetunnel 2.0
=================

📖 项目简介
-------

**edgetunnel** 是一个基于 CF Workers/Pages 平台的边缘计算隧道解密方案。它能够高效地处理网络流量，并提供强大的管理面板和灵活的节点配置能力。

-   🖥️ **Demo 演示站点**：https://EDT-Pages.github.io/admin

### ✨ 核心特性

-   🛡️ **协议支持**：支持 VLESS、Trojan 等主流协议，深度集成加密传输。
-   📊 **管理面板**：内置可视化后台，支持实时配置修改、日志查看及流量统计。
-   🛠️ **部署灵活**：完整适配 CF Workers 及 CF Pages (GitHub / 上传)。
-   🔄 **订阅系统**：内置自动订阅生成及混淆转换，适配主流客户端（Clash, Sing-box, Surge 等）。
-   ⚡ **性能加速**：支持自定义 ProxyIP、SOCKS5/HTTP 链式代理及优选 API，优化网络延迟。
-   🌐 **多台适配**：完美适配 Windows, Android, iOS, MacOS 及各种软路由固件。

* * *

💡 快速部署
-------

Tip

📖 **详尽图文教程**：edgetunnel 部署指南

Warning

⚠️ **Error 1101问题**：视频解析

### ⚙️ Workers 部署

`**「 Workers 部署文字教程 」**`

1.  部署 CF Worker：
    
    -   在 CF Worker 控制台中创建一个新的 Worker。
    -   将 worker.js 的内容粘贴到 Worker 编辑器中。
    -   在左侧的 `设置`选项卡中，选择 `变量` > `添加变量`。 变量名称填写**ADMIN**，值则为你的管理员密码，后点击 `保存`即可。
2.  绑定 KV 命名空间：
    
    -   在 `绑定`选项卡中选择 `添加绑定 +` > `KV 命名空间` > `添加绑定`，然后选择一个已有的命名空间或创建一个新的命名空间进行绑定。
    -   `变量名称`填写**KV**，然后点击 `添加绑定`即可。
3.  给 Workers绑定 自定义域：
    
    -   在 workers控制台的 `触发器`选项卡，下方点击 `添加自定义域`。
    -   填入你已转入 CF 域名解析服务的次级域名，例如:`vless.google.com`后 点击`添加自定义域`，等待证书生效即可。
4.  访问后台：
    
    -   访问 `https://vless.google.com/admin` 输入管理员密码即可登录后台。

### 🛠 Pages 上传 部署方法 **最佳推荐!!!** 图文教程

`**「 Pages 上传文件部署文字教程 」**`

1.  部署 CF Pages：
    
    -   下载 main.zip 文件，并点上 Star !!!
    -   在 CF Pages 控制台中选择 `上传资产`后，为你的项目取名后点击 `创建项目`，然后上传你下载好的 main.zip 文件后点击 `部署站点`。
    -   部署完成后点击 `继续处理站点` 后，选择 `设置` > `环境变量` > **制作**为生产环境定义变量 > `添加变量`。 变量名称填写**ADMIN**，值则为你的管理员密码，后点击 `保存`即可。
    -   返回 `部署` 选项卡，在右下角点击 `创建新部署` 后，重新上传 main.zip 文件后点击 `保存并部署` 即可。
2.  绑定 KV 命名空间：
    
    -   在 `设置`选项卡中选择 `绑定` > `+ 添加` > `KV 命名空间`，然后选择一个已有的命名空间或创建一个新的命名空间进行绑定。
    -   `变量名称`填写**KV**，然后点击 `保存`后重试部署即可。
3.  给 Pages绑定 CNAME自定义域：视频教程
    
    -   在 Pages控制台的 `自定义域`选项卡，下方点击 `设置自定义域`。
    -   填入你的自定义次级域名，注意不要使用你的根域名，例如： 您分配到的域名是 `fuck.cloudns.biz`，则添加自定义域填入 `lizi.fuck.cloudns.biz`即可；
    -   按照 CF 的要求将返回你的域名DNS服务商，添加 该自定义域 `lizi`的 CNAME记录 `edgetunnel.pages.dev` 后，点击 `激活域`即可。
4.  访问后台：
    
    -   访问 `https://lizi.fuck.cloudns.biz/admin` 输入管理员密码即可登录后台。

### 🛠 Pages + GitHub 部署方法

`**「 Pages + GitHub 部署文字教程 」**`

1.  部署 CF Pages：
    
    -   在 Github 上先 Fork 本项目，并点上 Star !!!
    -   在 CF Pages 控制台中选择 `连接到 Git`后，选中 `edgetunnel`项目后点击 `开始设置`。
    -   在 `设置构建和部署`页面下方，选择 `环境变量（高级）`后并 `添加变量` 变量名称填写**ADMIN**，值则为你的管理员密码，后点击 `保存并部署`即可。
2.  绑定 KV 命名空间：
    
    -   在 `设置`选项卡中选择 `绑定` > `+ 添加` > `KV 命名空间`，然后选择一个已有的命名空间或创建一个新的命名空间进行绑定。
    -   `变量名称`填写**KV**，然后点击 `保存`后重试部署即可。
3.  给 Pages绑定 CNAME自定义域：视频教程
    
    -   在 Pages控制台的 `自定义域`选项卡，下方点击 `设置自定义域`。
    -   填入你的自定义次级域名，注意不要使用你的根域名，例如： 您分配到的域名是 `fuck.cloudns.biz`，则添加自定义域填入 `lizi.fuck.cloudns.biz`即可；
    -   按照 CF 的要求将返回你的域名DNS服务商，添加 该自定义域 `lizi`的 CNAME记录 `edgetunnel.pages.dev` 后，点击 `激活域`即可。
4.  访问后台：
    
    -   访问 `https://lizi.fuck.cloudns.biz/admin` 输入管理员密码即可登录后台。

* * *

🔑 环境变量说明
---------

变量名

必填

示例

详细备注

**ADMIN**

✅

`123456`

后台管理面板登录密码

**KEY**

❌

`CMLiussss`

快速订阅路径密钥，访问 `/CMLiussss` 即可快速获取节点

**UUID**

❌

`90cd4a77-141a-43c9-991b-08263cfe9c10`

强制固定UUID，只支持**UUIDv4**标准格式

HOST

❌

`edt.pages.dev`

强制固定伪装域名可通过面板直接设置

PATH

❌

`/`

强制固定伪装路径可通过面板直接设置

**PROXYIP**

❌

`proxyip.cmliussss.net:443`

全局自定义反代 IP

**URL**

❌

`https://cloudflare-error-page-3th.pages.dev`

默认主页伪装地址（可填写网页 URL 或 `1101`）

**GO2SOCKS5**

❌

`blog.cmliussss.com`,`*.ip111.cn`,`*google.com`

强制走 SOCKS5 的名单 (`*` 为全局，域名用逗号分隔)

* * *

🔧 高级实用技巧
---------

本工具支持通过 **PATH路径** 动态切换底层代理方案：

-   指定 `PROXYIP` 案例
    
    /proxyip\=proxyip.cmliussss.net
    /?proxyip\=proxyip.cmliussss.net
    /proxyip.cmliussss.net (仅限于域名开头为'proxyip.'的域名)
    
-   指定 `SOCKS5` 案例
    
    /socks5\=user:password@127.0.0.1:1080
    /?socks5\=user:password@127.0.0.1:1080
    /socks://dXNlcjpwYXNzd29yZA\==@127.0.0.1:1080 (默认激活全局SOCKS5)
    /socks5://user:password@127.0.0.1:1080 (默认激活全局SOCKS5)
    
-   指定 `HTTP代理` 案例
    
    /http\=user:password@127.0.0.1:1080
    /http://user:password@127.0.0.1:8080 (默认激活全局SOCKS5)
    

* * *

💻 客户端适配情况
----------

平台

推荐客户端

备注

**Windows**

v2rayN, FlClash, mihomo-party, Clash Verge Rev

全面支持

**Android**

ClashMetaForAndroid, FlClash, v2rayNG

建议使用 Meta 核心

**iOS**

Surge, Shadowrocket, Stash

完美适配

**MacOS**

FlClash, mihomo-party, Clash Verge Rev, Surge

M1/M2 完美兼容

* * *

⭐ 项目热度
------

* * *

🙏 特别鸣谢
-------

### 💖 赞助支持 - 提供云服务器维持订阅转换服务

-   NodeLoc
-   Alice
-   EasyLinks
-   ZMTO(VTEXS)

### 🛠 开源代码引用

-   zizifn/edgetunnel
-   3Kmfi6HP/EDtunnel
-   SHIJS1999/cloudflare-worker-vless-ip
-   Stanley-baby
-   ACL4SSR
-   股神
-   Workers/Pages Metrics
-   白嫖哥
-   Mingyu
-   Alexandre Kojève
-   eooce
-   Sukka
-   zhangtaile

* * *

⚠️ 免责声明
-------

1.  本项目（"edgetunnel"）仅供**教育、科学研究及个人安全测试**之目的。
2.  使用者在下载或使用本项目代码时，必须严格遵守所在地区的法律法规。
3.  作者 **cmliu** 对任何滥用本项目代码导致的行为或后果均不承担任何责任。
4.  本项目不对因使用代码引起的任何直接或间接损害负责。
5.  建议在测试完成后 24 小时内删除本项目相关部署。

* * *

**如果您觉得项目对您有帮助，请给一个 Star 🌟，这是对我最大的鼓励！**
