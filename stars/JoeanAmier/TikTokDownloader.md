---
project: TikTokDownloader
stars: 8278
description: TikTok 主页/合辑/直播/视频/图集/原声；抖音主页/视频/图集/实况/收藏/直播/原声/合集/评论/账号/搜索/热榜数据采集工具
url: https://github.com/JoeanAmier/TikTokDownloader
---

  

TikTokDownloader
================

简体中文 | English

  

  

🔥 **TikTok 主页/合辑/直播/视频/图集/原声；抖音主页/视频/图集/收藏/直播/原声/合集/评论/账号/搜索/热榜数据采集工具：**完全开源，基于 HTTPX 模块实现的免费工具；批量下载抖音账号发布、喜欢、收藏作品；批量下载 TikTok 账号发布、喜欢作品；下载抖音链接或 TikTok 链接作品；获取抖音直播推流地址；下载抖音直播视频；获取 TikTok 直播推流地址；下载 TikTok 直播视频；采集抖音作品评论数据；批量下载抖音合集作品；批量下载 TikTok 合辑作品；采集抖音账号详细数据；采集抖音用户 / 作品 / 直播搜索结果；采集抖音热榜数据。

⚠️ 本项目 `5.5 Beta` 正在重构代码，部分功能可能无法正常使用，建议暂时使用 `5.4` 版本！

⭐ 本项目完全免费开源，无任何收费功能，请勿上当受骗！

* * *

📝 项目功能(Function)
=================

-   ✅ 下载抖音无水印视频/图集
-   ✅ 下载 TikTok 无水印视频/图集
-   ✅ 批量下载抖音账号发布/喜欢/收藏作品
-   ✅ 批量下载 TikTok 账号发布/喜欢作品
-   ✅ 采集抖音 / TikTok 详细数据
-   ✅ 批量下载链接作品
-   ✅ 多账号批量下载作品
-   ✅ 自动跳过已下载的文件
-   ✅ 持久化保存采集数据
-   ✅ 下载动态/静态封面图
-   ✅ 获取抖音直播推流地址
-   ✅ 获取 TikTok 直播推流地址
-   ✅ 调用 ffmpeg 下载直播
-   ✅ Web UI 交互界面
-   ✅ 采集抖音作品评论数据
-   ✅ 批量下载抖音合集作品
-   ✅ 批量下载 TikTok 合辑作品
-   ✅ 记录点赞收藏等统计数据
-   ✅ 筛选作品发布时间
-   ✅ 支持账号作品增量下载
-   ✅ 支持使用代理采集数据
-   ✅ 支持局域网远程访问
-   ✅ 采集抖音账号详细数据
-   ✅ 作品统计数据更新
-   ✅ 自动更新账号昵称
-   ✅ 部署至私有服务器
-   ✅ 部署至公开服务器
-   ✅ 采集抖音搜索数据
-   ✅ 采集抖音热榜数据
-   ✅ 记录已下载作品 ID
-   ☑️ 扫码登陆获取 Cookie
-   ✅ 从浏览器获取 Cookie
-   ✅ 支持 Web API 调用
-   ✅ 支持多线程下载作品
-   ✅ 文件完整性处理机制
-   ✅ 自定义规则筛选作品
-   ✅ 支持文件断点续传下载

💻 程序界面(Screenshot)
===================

**终端交互模式：**  
  

* * *

* * *

  
  
**Web UI 交互模式：**  
  

* * *

* * *

  
  
**Web API 接口模式：**  
  

📽 运行演示(Example)
================

**🎥 点击图片观看演示视频，建议通过配置文件管理账号，更多介绍请查阅 文档**

📈 项目状态(Status)
===============

-   🟢 经过测试，Releases 发布的源码已经验证所有功能正常可用
-   🟡 TikTokDownloader 开发计划及进度可前往 Projects 查阅
-   🔴 请注意，最新源码(Beta 版本)可能存在一些不稳定的 Bug
-   🔴 如果在使用过程中发现程序 Bug，请及时告知作者修复

📋 项目说明(Instructions)
=====================

快速入门
----

⭐ Mac OS、Windows 10 及以上用户可前往 Releases 下载已编译的程序，开箱即用！

**注意：Mac OS 平台可执行文件 `main` 可能需要从终端命令行启动；受设备限制，Mac OS 平台可执行文件尚未经过测试，无法保证可用性！**

* * *

1.  **运行可执行文件** 或者 **配置环境运行**
    
    **运行可执行文件**2.  下载 Releases 发布的可执行文件压缩包
    3.  解压后打开程序文件夹，双击运行 `main`
    
    **配置环境运行**2.  安装不低于 `3.12` 版本的 Python 解释器
    3.  下载最新的源码或 Releases 发布的源码至本地
    4.  运行 `python -m venv venv` 命令创建虚拟环境（可选）
    5.  运行 `.\venv\Scripts\activate.ps1` 或者 `venv\Scripts\activate` 命令激活虚拟环境（可选）
    6.  运行 `pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt` 命令安装程序所需模块
    7.  运行 `python .\main.py` 或者 `python main.py` 命令启动 TikTokDownloader
2.  阅读 TikTokDownloader 的免责声明，根据提示输入内容
3.  将 Cookie 信息写入配置文件
    
    **手动复制粘贴 Cookie（推荐）**2.  参考 Cookie 提取教程，复制所需 Cookie 至剪贴板
    3.  选择 `复制粘贴写入 Cookie` 选项，按照提示将 Cookie 写入配置文件
    
    **从浏览器获取 Cookie（推荐）**2.  选择 `从浏览器获取 Cookie` 选项，按照提示选择浏览器类型
    
    **扫码登录获取 Cookie（弃用）**2.  选择 `扫码登录获取 Cookie` 选项，程序会显示登录二维码图片，并使用默认应用打开图片
    3.  使用抖音 APP 扫描二维码并登录账号
    4.  按照提示操作，将 Cookie 写入配置文件
4.  返回程序界面，依次选择 `终端交互模式` -> `批量下载链接作品(通用)` -> `手动输入待采集的作品链接`
5.  输入抖音作品链接即可下载作品文件（TikTok 平台需要更多初始设置，详见文档）
6.  更多详细说明请查看 **项目文档**

⭐ 推荐使用 Windows 终端（Windows 11 自带默认终端）

### Docker 容器

1.  获取镜像

-   方式一：使用 `Dockerfile` 文件构建镜像
-   方式二：使用 `docker pull joeanamier/tiktokdownloader` 命令拉取镜像

3.  创建容器：`docker run -it joeanamier/tiktokdownloader`
4.  运行容器
    -   启动容器：`docker start -i 容器名称/容器 ID`
    -   重启容器：`docker restart -i 容器名称/容器 ID`

Docker 容器无法直接访问宿主机的文件系统，部分功能不可用，例如：`从浏览器获取 Cookie`；其他功能如有异常请反馈！

* * *

关于 Cookie
---------

点击查看 Cookie 获取教程

程序功能

是否需要登录

下载账号发布作品

⭕建议登录

下载账号喜欢作品

⭕建议登录

下载链接作品

⭕建议登录

获取直播推流地址

❌无需登录

下载直播视频

❌无需登录

获取作品评论数据

⭕建议登录

下载合集作品

⭕建议登录

获取账号数据

⭕建议登录

采集搜索结果

⭕建议登录

采集热榜数据

❌无需登录

下载收藏作品

✔️需要登录

下载收藏夹作品

✔️需要登录

获取收藏合集数据

✔️需要登录

获取收藏音乐数据

✔️需要登录

获取收藏短剧数据

✔️需要登录

> -   Cookie 仅需在失效后重新写入配置文件，并非每次运行程序都要写入配置文件！
>     
> -   Cookie 会影响抖音平台下载的视频文件分辨率，如果无法下载 1080P 视频文件，请尝试更新 Cookie！
>     
> -   程序获取数据失败时，可以尝试更新 Cookie 或者使用已登录的 Cookie！
>     

* * *

其他说明
----

-   程序提示用户输入时，直接回车代表返回上级菜单，输入 `Q` 或 `q` 代表结束运行
-   由于获取账号喜欢作品和收藏作品数据仅返回喜欢 / 收藏作品的发布日期，不返回操作日期，因此程序需要获取全部喜欢 / 收藏作品数据再进行日期筛选；如果作品数量较多，可能会花费较长的时间；可通过 `max_pages` 参数控制请求次数
-   获取私密账号的发布作品数据需要登录后的 Cookie，且登录的账号需要关注该私密账号
-   批量下载账号作品或合集作品时，如果对应的昵称或标识发生变化，程序会自动更新已下载作品文件名称中的昵称和标识
-   程序下载文件时会先将文件下载至临时文件夹，下载完成后再移动至储存文件夹；程序运行结束时会清空临时文件夹
-   `批量下载收藏作品模式` 目前仅支持下载当前已登录 Cookie 对应账号的收藏作品，暂不支持多账号
-   如果想要程序使用代理请求数据，必须在 `settings.json` 设置 `proxy` 参数，否则程序不会使用代理
-   退出程序时，请以正常方式结束运行或者按下 Ctrl + C 结束运行，不要直接点击终端窗口的关闭按钮结束运行，否则会导致数据丢失
-   如果您的计算机没有合适的程序编辑 JSON 文件，建议使用 JSON 在线工具 编辑配置文件内容
-   当程序请求用户输入内容或链接时，请注意避免输入的内容或链接包含换行符，这可能会导致预期之外的问题
-   本项目不会支持付费作品下载，请勿反馈任何关于付费作品下载的问题
-   Windows 系统需要以管理员身份运行程序才能读取 Chromium、Chrome、Edge 浏览器 Cookie

* * *

程序更新
----

> **方案一：** 下载并解压文件，将旧版本的 `TikTokDownloader.db` 文件和 `settings.json` 文件复制到 `_internal` 文件夹。

> **方案二：** 下载并解压文件（不要运行程序），复制全部文件，直接覆盖旧版本文件。

⚠️ 免责声明(Disclaimers)
====================

-   使用者对本项目的使用由使用者自行决定，并自行承担风险。作者对使用者使用本项目所产生的任何损失、责任、或风险概不负责。
-   本项目的作者提供的代码和功能是基于现有知识和技术的开发成果。作者尽力确保代码的正确性和安全性，但不保证代码完全没有错误或缺陷。
-   使用者在使用本项目时必须严格遵守 GNU General Public License v3.0 的要求，并在适当的地方注明使用了 GNU General Public License v3.0 的代码。
-   使用者在任何情况下均不得将本项目的作者、贡献者或其他相关方与使用者的使用行为联系起来，或要求其对使用者使用本项目所产生的任何损失或损害负责。
-   使用者在使用本项目的代码和功能时，必须自行研究相关法律法规，并确保其使用行为合法合规。任何因违反法律法规而导致的法律责任和风险，均由使用者自行承担。
-   本项目的作者不会提供 TikTokDownloader 项目的付费版本，也不会提供与 TikTokDownloader 项目相关的任何商业服务。
-   基于本项目进行的任何二次开发、修改或编译的程序与原创作者无关，原创作者不承担与二次开发行为或其结果相关的任何责任，使用者应自行对因二次开发可能带来的各种情况负全部责任。

**在使用本项目的代码和功能之前，请您认真考虑并接受以上免责声明。如果您对上述声明有任何疑问或不同意，请不要使用本项目的代码和功能。如果您使用了本项目的代码和功能，则视为您已完全理解并接受上述免责声明，并自愿承担使用本项目的一切风险和后果。**

✉️ 联系作者(Contact)
================

-   作者邮箱：yonglelolu@foxmail.com
-   作者微信: Downloader\_Tools
-   微信公众号: Downloader Tools
-   **Discord 社区**: 点击加入社区
-   QQ 群聊(项目交流): 扫码加入群聊

✨ **作者的其他开源项目：**

-   **XHS-Downloader（小红书）**：https://github.com/JoeanAmier/XHS-Downloader
-   **KS-Downloader（快手）**：https://github.com/JoeanAmier/KS-Downloader

♥️ 支持项目(Support)
================

如果 **TikTokDownloader** 对您有帮助，请考虑为它点个 **Star** ⭐，感谢您的支持！

微信(WeChat)

支付宝(Alipay)

如果您愿意，可以考虑提供资助为 **TikTokDownloader** 提供额外的支持！

💰 项目赞助(Sponsor)
================

JetBrains 工具
------------

**JetBrains** 支持全球开源社区认可的活跃项目，并为非商业开发提供免费许可证。

* * *

TikHub
------

TikHub 是一家领先的数据接口服务供应商，专注于提供高质量的数据接口，涵盖了多个热门平台，包括 抖音、TikTok、小红书、Instagram、Twitter 和 快手 等平台。

TikHub 还提供定制化的服务，如直播间监控、作品监控和达人监控，以满足不同业务场景的需求。

通过每日签到，用户可以免费获取一定额度的使用量；可以使用我的 **推荐链接**：https://beta-web.tikhub.io/users/signup?referral\_code=X084IATy 或 **推荐码**：`X084IATy`，注册并充值即可获得 `$2` 额度！

TikHub 提供以下服务：

-   丰富的数据接口
-   每日签到免费获取额度
-   高质量的 API 服务
-   官网：https://tikhub.io/
-   项目地址：https://github.com/TikHubIO/
-   用户登陆地址：https://beta-web.tikhub.io/

💡 项目参考(Refer)
==============

-   https://github.com/Johnserf-Seed/f2
-   https://github.com/Johnserf-Seed/TikTokDownload
-   https://github.com/Evil0ctal/Douyin\_TikTok\_Download\_API
-   https://github.com/NearHuiwen/TiktokDouyinCrawler
-   https://github.com/ihmily/DouyinLiveRecorder
-   https://github.com/encode/httpx/
-   https://github.com/Textualize/rich
-   https://github.com/omnilib/aiosqlite
-   https://github.com/Tinche/aiofiles
-   https://github.com/thewh1teagle/rookie
-   https://github.com/pyinstaller/pyinstaller
-   https://foss.heptapod.net/openpyxl/openpyxl
-   https://github.com/carpedm20/emoji/
-   https://github.com/lxml/lxml
-   https://ffmpeg.org/ffmpeg-all.html
-   https://html5up.net/hyperspace
