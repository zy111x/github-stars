---
project: go-proxy-bingai
stars: 8845
description: 用 Vue3 和 Go 搭建的微软 New Bing 演示站点，拥有一致的 UI 体验，支持 ChatGPT 提示词，国内可用。
url: https://github.com/adams549659584/go-proxy-bingai
---

go-proxy-bing
=============

基于微软 New Bing 用 Vue3 和 Go 简单定制的微软 New Bing 演示站点，拥有一致的 UI 体验，支持 ChatGPT 提示词，国内可用，基本兼容微软 Bing AI 所有功能，无需登录即可畅聊。

⭐ Bing 官方聊天服务器（相对较快和稳定，推荐）不可用时，可参考以下方案

> 1.  可用 ModHeader 添加 X-Forwarded-For 请求头，对应 URL 是 wss://sydney.bing.com/sydney/ChatHub，具体可参考 issues #71 及 https://zhuanlan.zhihu.com/p/606655303

> 1.  本地部署再部署一份作为聊天中转服务，或下载 Release 直接运行，自定义聊天服务器中填入 http://localhost:8080，并选择。

⭐ 聊天服务器 (暂时默认 Cloudflare Workers，请求数每天限额 100,000，撑不了多久 ，推荐自行部署，参考下面 部署聊天服务器 ) 可在右上角 设置 => 服务选择 中切换

⭐ 国内可用 （部署服务器需要直连 www.bing.com 不重定向 CN ，可配置 socks 连接）

⭐ 支持现有开源 ChatGPT 提示词库

⭐ 需要画图等高级功能时(需选更有创造力模式或右上角 设置 => 图像创建 )，可登录微软账号设置用户 Cookie 进行体验

⭐ 遇到一切问题，先点左下角 试试，不行使用刷新大法（Shift + F5 或 Ctrl + Shift + R 或 右上角设置中的一键重置），最终大招就 清理浏览器缓存 及 Cookie ，比如（24 小时限制、未登录提示等等）

-   go-proxy-bing
    -   网页展示
    -   侧边栏
    -   演示站点
    -   设置用户
    -   环境变量
    -   部署
        -   Docker
        -   Release
        -   Railway
        -   Vercel
        -   Render
    -   部署聊天服务器
    -   TODO

网页展示
----

-   电脑端未登录状态

-   电脑端登录

-   电脑端画图

> ⭐ 需登录，并选择 更有创造力 对话模式

-   手机端未登录状态

侧边栏
---

-   在 Edge 浏览器可把聊天和撰写分别添加侧边栏

演示站点
----

### 甲骨文小鸡仔，轻虐

-   https://bing.vcanbb.top

### Railway 搭建

-   https://bing-railway.vcanbb.top
    
-   https://go-proxy-bingai-production.up.railway.app
    

### Vercel 搭建

-   https://bing-vercel.vcanbb.top
    
-   https://go-proxy-bingai-adams549659584.vercel.app
    

### Render 搭建

-   https://bing-render.vcanbb.top
    
-   https://go-proxy-bingai.onrender.com
    

设置用户
----

-   访问 https://www.bing.com/ 或 https://cn.bing.com/ ，登录
    
-   F12 或 Ctrl + Shift + I 打开控制台
    
-   拿到 Cookie 中 \_U 的值 后，在网站设置 => 设置用户 中填入即可。
    

环境变量
----

# 运行端口 默认 8080 可选
PORT=8080
# Socks 环境变量 示例 可选
Go\_Proxy\_BingAI\_SOCKS\_URL=192.168.0.88:1070
# Socks 账号、密码 可选
Go\_Proxy\_BingAI\_SOCKS\_USER=xxx
Go\_Proxy\_BingAI\_SOCKS\_PWD=xxx
# 默认用户 Cookie 设置，可选，不推荐使用，固定前缀 Go\_Proxy\_BingAI\_USER\_TOKEN 可设置多个，未登录用户将随机使用，多人共用将很快触发图形验证，并很快达到该账号的24小时限制
Go\_Proxy\_BingAI\_USER\_TOKEN\_1=xxx
Go\_Proxy\_BingAI\_USER\_TOKEN\_2=xxx
Go\_Proxy\_BingAI\_USER\_TOKEN\_3=xxx ...
# 简单授权认证密码，可选
Go\_Proxy\_BingAI\_AUTH\_KEY=xxx

部署
--

> ⭐ 需 https 域名 (自行配置 nginx 等) (前后端都有限制 只有在HTTPS的情况下，浏览器 Accept-Encoding 才会包含 br , localhost 除外)

> 支持 Linux (amd64 / arm64)、Windows (amd64 / arm64)

> 国内机器部署可配置 socks 环境变量

### Docker

> 参考 Dockerfile 、docker-compose.yml

-   docker 示例

# 运行容器 监听8080 端口
docker run -d -p 8080:8080 --name go-proxy-bingai --restart=unless-stopped adams549659584/go-proxy-bingai

# 配置 socks 环境变量
docker run -e Go\_Proxy\_BingAI\_SOCKS\_URL=192.168.0.88:1070 -e Go\_Proxy\_BingAI\_SOCKS\_USER=xxx -e Go\_Proxy\_BingAI\_SOCKS\_PWD=xxx -d -p 8080:8080 --name go-proxy-bingai --restart=unless-stopped adams549659584/go-proxy-bingai

-   docker compose 示例

version: '3'

services:
  go-proxy-bingai:
    # 镜像名称
    image: adams549659584/go-proxy-bingai
    # 容器名称
    container\_name: go-proxy-bingai  
    # 自启动
    restart: unless-stopped
    ports:
      - 8080:8080
    # environment:
    #   - Go\_Proxy\_BingAI\_SOCKS\_URL=192.168.0.88:1070
    #   - Go\_Proxy\_BingAI\_SOCKS\_USER=xxx
    #   - Go\_Proxy\_BingAI\_SOCKS\_PWD=xxx
    #   - Go\_Proxy\_BingAI\_USER\_TOKEN\_1=xxx
    #   - Go\_Proxy\_BingAI\_USER\_TOKEN\_2=xxx    

### Release

在 GitHub Releases 下载适用于对应平台的压缩包，解压后可得到可执行文件 go-proxy-bingai，直接运行即可。

### Railway

> 主要配置 Dockerfile 路径 及 端口就可以

PORT=8080
RAILWAY\_DOCKERFILE\_PATH=docker/Dockerfile

一键部署，点这里 =>

自行使用 Railway 部署配置如下

### Vercel

> ⭐ Vercel 部署不支持 Websocket ，需选择 官方聊天服务器 或 Cloudflare

一键部署，点这里 =>

### Render

一键部署，点这里 =>

部署聊天服务器
-------

> 核心代码 worker.js

> 具体部署 Cloudflare Workers 教程自行查询，大概如下

-   注册 Cloudflare 账号
    
-   创建 Worker 服务，复制 worker.js 全部代码，粘贴至创建的服务中，保存并部署。
    
-   触发器 中自定义访问域名。
    

TODO
----

-   撰写
-   Vue3 重构
-   提示词
-   历史聊天
-   导出消息到本地（Markdown、图片、PDF）
-   简单访问权限控制
