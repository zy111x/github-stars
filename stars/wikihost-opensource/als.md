---
project: als
stars: 1197
description: Another Looking-glass Server
url: https://github.com/wikihost-opensource/als
---

Language: English | 简体中文

ALS - Another Looking-glass Server
==================================

Quick start
-----------

```
docker run -d --name looking-glass --restart always --network host wikihostinc/looking-glass-server
```

DEMO

If you don't want to use Docker , you can use the compiled server

Host Requirements
-----------------

-   RAM: 32MB or more

How to change config
--------------------

```
# you need pass -e KEY=VALUE to docker command
# you can find the KEY below the [Image Environment Variables]
# for example, change the listen port to 8080
docker run -d \
    --name looking-glass \
    -e HTTP_PORT=8080 \
    --restart always \
    --network host \
    wikihostinc/looking-glass-server
```

Environment variable table
--------------------------

Key

Example

Default

Description

LISTEN\_IP

127.0.0.1

(all ip)

which IP address will be listen use

HTTP\_PORT

80

80

which HTTP port should use

SPEEDTEST\_FILE\_LIST

100MB 1GB

1MB 10MB 100MB 1GB

size of static test files, separate with space

LOCATION

"this is location"

(request from http://ipapi.co)

location string

PUBLIC\_IPV4

1.1.1.1

(fetch from http://ifconfig.co)

The IPv4 address of the server

PUBLIC\_IPV6

fe80::1

(fetch from http://ifconfig.co)

The IPv6 address of the server

DISPLAY\_TRAFFIC

true

true

Toggle the streaming traffic graph

ENABLE\_SPEEDTEST

true

true

Toggle the speedtest feature

UTILITIES\_PING

true

true

Toggle the ping feature

UTILITIES\_SPEEDTESTDOTNET

true

true

Toggle the speedtest.net feature

UTILITIES\_FAKESHELL

true

true

Toggle the HTML Shell feature

UTILITIES\_IPERF3

true

true

Toggle the iperf3 feature

UTILITIES\_IPERF3\_PORT\_MIN

30000

30000

iperf3 listen port range - from

UTILITIES\_IPERF3\_PORT\_MAX

31000

31000

iperf3 listen port range - to

SPONSOR\_MESSAGE

"Test message" or "/tmp/als\_readme.md" or "http://some\_host/114514.md"

''

Show server sponsor message (support markdown file, required mapping file to container)

Features
--------

-   HTML 5 Speed Test
-   Ping - IPv4 / IPv6
-   iPerf3 server
-   Streaming traffic graph
-   Speedtest.net Client
-   Online shell box (limited commands)
-   NextTrace Support

Thanks to
---------

https://github.com/librespeed/speedtest

https://www.jetbrains.com/

License
-------

Code is licensed under MIT Public License.

-   If you wish to support my efforts, keep the "Powered by WIKIHOST Opensource - ALS" link intact.

Star History
------------
