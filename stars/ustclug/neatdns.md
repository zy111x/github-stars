---
project: neatdns
stars: 286
description: anti-pollution DNS server
url: https://github.com/ustclug/neatdns
---

Neat DNS
========

an anti-pollution DNS server

Including the following software:

-   bind

Deployment
----------

docker run -itd \\
	--name=neatdns \\
	-p 53:53/tcp \\
	-p 53:53/udp \\
	-p 443:443/tcp \\
	-p 443:443/udp \\
	--cap-add=NET\_ADMIN \\
	ustclug/neatdns:bind9

P.S. you should install docker first.

Available environment variables:

Name

Implication

Default Value

GLOBAL\_DNS1

preferred DNS server to resolve non-China website

8.8.4.4

GLOBAL\_DNS2

alternate DNS server to resolve non-China website

8.8.8.8

CHINA\_DNS1

preferred DNS server to resolve China website

119.29.29.29

CHINA\_DNS2

alternate DNS server to resolve China website

223.5.5.5

FAIL2BAN\_ON

auto-start fail2ban

true
