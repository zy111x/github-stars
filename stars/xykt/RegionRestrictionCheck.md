---
project: RegionRestrictionCheck
stars: 356
description: A bash script to check the status of your IP on various geo-restricted services. 
url: https://github.com/xykt/RegionRestrictionCheck
---

流媒体解锁检测脚本 - Streaming Unlock Test Script (EN)
---------------------------------------------

**支持OS/Platform：CentOS 6+, Ubuntu 14.04+, Debian 8+, Alpine, MacOS, Android with Termux, iOS**

**使用脚本前请确认curl已安装**

bash <(curl -sL Media.Check.Place)

##### 只检测IPv4结果：

bash <(curl -sL Media.Check.Place) -M 4

##### 只检测IPv6结果：

bash <(curl -sL Media.Check.Place) -M 6

##### 指定检测的网卡名称：

bash <(curl -sL Media.Check.Place) -I eth0

##### 选择脚本语言为英文：

bash <(curl -sL Media.Check.Place) -E

脚本更新
----

2024/07/22 02:40 增加Google Gemini检测，修复Disney+解锁类型错误；因展示原版广告，改版运行次数同时计入原版

2024/05/09 00:40 修正Netflix澳洲检测错误问题，增加Wikipedia及Reddit检测

2024/03/22 09:45 修复MyTVSuper，感谢RikkaNaa

2024/03/22 09:30 增加ChatGPT地区检测，更新英文原生/DNS解锁显示内容

2024/02/20 01:30 修正Docker运行报错的bug，补全全区域检测项目

2024/02/18 22:00 修复LineTV.tw

2024/02/17 16:00 修复Now E，感谢RikkaNaa

2024/02/12 00:45 增加Alpine系统支持

2024/02/09 23:59 Netflix页面改版导致原脚本判定出现错误，现已修正

2024/01/31 00:30 修复Youtube极小概率解锁类别判断错误问题

2024/01/08 13:01 增加TikTok解锁检测

2024/01/07 21:55 增加对动画疯、MyTVSuper、4GTV的DNS解锁检测

2024/01/04 18:55 增加独立的脚本运行计数器

2024/01/03 23:27 进一步增加DNS检测机制，增加代理服务器解锁检测，修正纯ipv6机器无法检测的bug

2024/01/02 23:00 增加双重DNS检测机制，修正原版日本流媒体检测报错，广告前置

2024/01/02 03:00 改进检测机制，杜绝了部分误判

2024/01/01 21:00 增加DNS/原生解锁检测机制

脚本贡献
----

**Acknowledgments:**

-   感谢lmc999原作，本改版脚本由此进化而来
    
-   本脚本基于CoiaPrant/MediaUnlock\_Test代码进行修改
    
-   onoc1yn 提供多架构docker解决方案及Hulu Cookies加密方案
    
-   目前市面的流媒体解锁检测脚本都是从Lemonbench演化而来
    

**Stars History:**
