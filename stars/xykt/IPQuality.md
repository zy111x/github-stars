---
project: IPQuality
stars: 2411
description: A script for IP quality detection
url: https://github.com/xykt/IPQuality
---

IP质量体检脚本 - IP Quality Check Script (EN)
---------------------------------------

**支持OS/Platform：Ubuntu | Debian | Linux Mint | Fedora | Red Hat Enterprise Linux (RHEL) | CentOS | Arch Linux | Manjaro | Alpine Linux | AlmaLinux | Rocky Linux | macOS | Anolis OS | Alibaba Cloud Linux | SUSE Linux | openSUSE | Void Linux**

-   中英文双语言支持
-   支持IPv4/IPv6双栈查询
-   精美排版，直观显示，多终端单屏优化展示，便于截图分享
-   基础信息、IP类型、风险评分、风险因子、流媒体解锁、邮局检测六大模块
-   基础数据源自_Maxmind_数据库
-   风险信息 _IPinfo / ipregistry / ipapi / AbuseIPDB / IP2LOCATION / IPQS / DB-IP / SCAMALYTICS / IPWHOIS / Cloudflare_ 多数据库整合
-   流媒体及AI多个服务商 _TikTok / Disney+ / Netflix / Youtube / AmazonPrimeVideo / Spotify / ChatGPT_ 解锁及解锁类型检测
-   多邮局服务商 _Gmail / Outlook / Yahoo / Apple / QQ / Mail.ru / AOL / GMX / Mail.com / 163 / Sohu / Sina_ 连通性检测
-   IP地址黑名单400+数据库检测

##### 屏幕截图

使用方法
----

##### 默认双栈检测：

bash <(curl -Ls IP.Check.Place)

##### 只检测IPv4结果：

bash <(curl -Ls IP.Check.Place) -4

##### 只检测IPv6结果：

bash <(curl -Ls IP.Check.Place) -6

##### 指定检测网卡：

bash <(curl -Ls IP.Check.Place) -i eth0

##### 指定代理服务器：

bash <(curl -Ls IP.Check.Place) -x http://username:password@proxyserver:port
bash <(curl -Ls IP.Check.Place) -x https://username:password@proxyserver:port
bash <(curl -Ls IP.Check.Place) -x socks5://username:password@socksproxy:port

##### 选择脚本语言为英文：

bash <(curl -Ls IP.Check.Place) -l en

##### 报告展示完整IP地址：

bash <(curl -Ls IP.Check.Place) -f

##### 基础信息多语言支持：

bash <(curl -Ls IP.Check.Place) -l jp|es|de|fr|ru|pt

脚本更新
----

2024/11/09 00:30 增加Cloudflare风险评分，修复IP2Location偶发IP类型判断BUG

2024/10/06 01:15 修复极个别运行脚本报错问题

2024/07/23 23:50 增加运行参数-f使报告显示完整IP地址

2024/07/22 01:50 安装依赖包前增加询问，修复Disney+解锁类型错误

2024/06/27 01:00 增加Anolis OS | Alibaba Cloud Linux | SUSE Linux | openSUSE系统支持

2024/05/30 01:15 增加macOS系统支持

2024/05/28 18:00 修复了指定网卡/代理服务器仍然检测默认IP的bug

2024/05/17 00:45 增加报告svg图片分享链接，修复一些排版问题

2024/05/11 23:20 修复因网关阻断25端口导致的邮件检测时间过长的问题，修复Tiktok IPv6结果不准确的bug

2024/05/10 17:50 修复未安装sudo系统无法正常安装依赖的bug

2024/05/10 11:00 增加指定网卡及代理服务器检测支持

2024/05/09 15:00 修正不规范内网IP导致的错误，修正其他若干bug

2024/05/08 23:00 修正Netflix澳洲检测结果不正确的bug

2024/05/08 18:10 更新依赖程序dig检测及安装

2024/05/08 00:00 脚本发布

脚本贡献
----

**Acknowledgments:**

-   感谢lmc999，本脚本局部代码参考原版流媒体解锁检测脚本
    
-   感谢spiritLHLS，本脚本局部代码参考融合怪测评脚本
    

**Stars History:**

**History of daily runs:**
