---
project: Docker-Warp-Socks
stars: 374
description: Connet to CloudFlare WARP, exposing `socks5` proxy all together.
url: https://github.com/Mon-ius/Docker-Warp-Socks
---

Docker-Warp-Socks
=================

> A lightweight Docker image, designed for easy connection to CloudFlare WARP, exposing `socks5` proxy all together.

Multi-platform: `linux/amd64`, `linux/arm64`, `linux/arm`, `linux/ppc64le`, `linux/s390x` and `linux/riscv64`;

Migrate to v3
-------------

-   The `v2` version will be kept and available at `monius/docker-warp-socks:v2`.
-   The `v3` version will soon be released and available at `monius/docker-warp-socks:v3` and default in `monius/docker-warp-socks`.
-   The `Referral` programme will be concluded on Nov 1st from Cloudflare, the `Plus` flag in `v3` will be unavaible due to it.
-   According to the new policy, see `sliver=005-tier1` for `plus` user and `siliver=none` for free account.
-   The `v3` version will be based on `alpine 3.20`.

V3 features
-----------

-   Support for mixed protocols on the default port `9091`. (#15)
-   Networking between containers. (#16)
-   More secure Bootstrap without `privileged` acquisition in docker container.
-   Light start without `NET_ADMIN`, `SYS_MODULE`, `/lib/modules`, and extra `net` deps.
-   Migration of core components from `Dante` and `ViRb3/wgcf` to `SagerNet/sing-box`.
-   Support `linux/ppc64le` and `linux/riscv64` in addition.

Quick start from:

docker run --restart=always -itd \\
    --name warp\_socks\_v3 \\
    -p 9091:9091 \\
    monius/docker-warp-socks:v3

Then, verify on host with:

curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"
curl -x "http://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"

Tip

-   To use `plus` license, now called `siliver`, add `-e WARP_LICENSE=$WARP_LICENSE`.
-   To use customized `port`, set `-e NET_PORT=$NET_PORT`.
-   To use Tunnel Encryption with `user` and `passwd`, set `-e SOCK_USER=$USER` and `-e SOCK_PWD=$PASSWD`.

docker run --restart=always -itd \\
    --name warp\_socks\_plus \\
    -e WARP\_LICENSE=$WARP\_LICENSE \\
    -e NET\_PORT=9091 \\
    -p 9091:9091 \\
    monius/docker-warp-socks:v3

Check if both `siliver=xxx-xxx` and `warp=on` shown from:

curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"
curl -x "http://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"

V2 features
-----------

The features undergo the testing at rws-cli.

-   `+` 1. automatically enroll the WARP+ account plan
-   `+` 2. eBFP featured wireguard implement
-   `+` 3. more OS/platform support
-   `+` 4. access to `OpenAI Sora` without effort
-   `+` 5. **96.3%** lighter(only `8MB`) in `alpine` core run in more small devices!
-   `+` 6. from `10s` to `0.1s` clone speed up from dockerhub!
-   `+` 7. Enhance **robustness** to handle restartorreboot events!
-   `+` 8. all in one caller written in Rust!!!
-   `+` 9. Used to join in the `SORA` RED TEAM waitlist!
-   `+` 10. Used call `Gemini 1.5 Pro` API!
-   `+` 11. Used to implement `SD 3.0` API!
-   `+` 12. Used to use the `Claude 3.5 Sonnet`!
-   `+` 13. Enable to join `Zero-Trust` team plan with **Unlimited** traffic plan!
-   Automatically install and config CloudFlare WARP Client in Docker
-   Enable the access of WARP network from Docker Container's **SOCKS5** port
-   Extend accessibility and avoid potential restrictions by using proxy services
-   Avoid looping verification in the Midjourney Discord Channel
-   Prevent being banned by proxying API calls
-   Successfully pre-process the AI WaitList
-   Develop apps with warp embedded
-   Bypass the New Bing wait-list
-   ...

Why to use
----------

The official `warp-cli` only support amd64 machines, and its guide is prone to causing potential connection loss risks on remote machines. It is recommended to experiment with fresh installations within a docker container, or you have to reboot it via the panel.

With any existed running proxy service, it acts just like a plugin that helps unlock public content such as `OpenAI Sora`, `OpenAI GPT-3.5`,`OpenAI GPT-4`, `OpenAI GPT-4V`, `OpenAI GPT-4o`, `OpenAI GPT-4o-mini`, `Claude`, `Claude 2`, `Claude 3 Opus`, `Claude 3.5 Sonnet`, `Google Bard`, `Google Gemini`, `Google Gemini Pro Vision`, `Google Gemini Advanced`, `Google Gemini 1.5 PRO`, `Google Gemini 1.5 Flash` `Google PaLM2 API`, `Google Vertex API`, `Google Scholar`, and `Netflix`. No necessary to have any knowledge of `CloudFlare`, `Warp`, `WireGuard`, and `WGCF` before using this image.

Usage
-----

The `v1` image is built on `debian:bookworm` aka `debian:12`, we recently migrate from `v1` to `v2`, which based on a more lighter container `alpine:3.19`. The main line will transition within a month, with minimal impact on the user side. As a contingency plan, users can revert to `monius/docker-warp-socks:v1` if needed.

_**Please follow the EXAMPLES `1.1` and `2.1` To Get Start !**_

### 💾 Prerequisites

# in case, you have no docker-ce installed;
curl -fsSL "https://get.docker.com" | sudo bash

# to avoid \`sudo\` calling
sudo usermod -aG docker ${USER}
# or check https://docs.docker.com/engine/security/rootless 
# if required a rootless install with \`dockerd-rootless-setuptool.sh install\`

# in case, using Centos/RedHatEL
sudo systemctl enable docker && sudo systemctl start docker

### 1\. Docker CLI

#### 1.1 🎉 Quick Start

Run the following commands in your terminal:

docker run --privileged --restart=always -itd \\
    --name warp\_socks \\
    --cap-add NET\_ADMIN \\
    --cap-add SYS\_MODULE \\
    --sysctl net.ipv6.conf.all.disable\_ipv6=0 \\
    --sysctl net.ipv4.conf.all.src\_valid\_mark=1 \\
    -v /lib/modules:/lib/modules \\
    -p 9091:9091 \\
    monius/docker-warp-socks

The above command will create a background service that allows the entire container network to join the dual-stack cloudflare network pool without disconnecting from the host.

#### 1.2 ⭐ WARP Plus Account(Advanced)

docker run --privileged --restart=always -itd \\
    --name warp\_socks\_plus \\
    -e WGCF\_LICENSE\_KEY=yourpluslicense \\
    --cap-add NET\_ADMIN \\
    --cap-add SYS\_MODULE \\
    --sysctl net.ipv6.conf.all.disable\_ipv6=0 \\
    --sysctl net.ipv4.conf.all.src\_valid\_mark=1 \\
    -v /lib/modules:/lib/modules \\
    -p 9091:9091 \\
    monius/docker-warp-socks

Run, `curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"`; See `plus` means _**WARP Plus License Key**_ applied success.

Updates: Since the policy changes, there will be no such `plus` flag when check with `https://www.cloudflare.com/cdn-cgi/trace`. See `sliver=xxx-tier1` means sucess for now.

#### 1.3 🔒 Tunnel Encryption(Advanced)

Run the following commands in your terminal:

docker run --privileged --restart=always -itd \\
    --name warp\_socks\_passwd \\
    -e SOCK\_USER=monius \\
    -e SOCK\_PWD=passwd \\
    --cap-add NET\_ADMIN \\
    --cap-add SYS\_MODULE \\
    --sysctl net.ipv6.conf.all.disable\_ipv6=0 \\
    --sysctl net.ipv4.conf.all.src\_valid\_mark=1 \\
    -v /lib/modules:/lib/modules \\
    -p 9091:9091 \\
    monius/docker-warp-socks

The above command will add a little encryption to the existed socks connection, just a little~

Run, `curl -U "monius:passwd" -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"` to go 🤗

#### 1.4 🪡 Custom Port(Advanced)

Run the following commands in your terminal:

docker run --privileged --restart=always -itd \\
    --name warp\_socks\_passwd \\
    -e NET\_PORT=8091 \\
    --cap-add NET\_ADMIN \\
    --cap-add SYS\_MODULE \\
    --sysctl net.ipv6.conf.all.disable\_ipv6=0 \\
    --sysctl net.ipv4.conf.all.src\_valid\_mark=1 \\
    -v /lib/modules:/lib/modules \\
    -p 8091:8091 \\
    monius/docker-warp-socks

Run, `curl -x "socks5h://127.0.0.1:8091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"` to go 🤗

#### 1.5 🔧 Pre-Configuration Start (advanced)

To use your prepared config:

docker run --privileged --restart=always -itd \\
    --name warp\_socks \\
    -e SOCK\_USER=monius \\
    -e SOCK\_PWD=cool \\
    --cap-add NET\_ADMIN \\
    --cap-add SYS\_MODULE \\
    --sysctl net.ipv6.conf.all.disable\_ipv6=0 \\
    --sysctl net.ipv4.conf.all.src\_valid\_mark=1 \\
    -p 127.0.0.1:9091:9091 \\
    -v /lib/modules:/lib/modules \\
    -v ~/wireguard/:/opt/wireguard/:ro \\
    monius/docker-warp-socks

It will also recognize the prepared `wgcf-profile.conf` and `danted.conf` if they are located in `~/wireguard/`. Use **\-v** `~/wireguard/:/opt/wireguard/:ro` to map the directory.

And, `-p 127.0.0.1:9091:9091` will create a localhost(`127.0.0.1`) access-only `9091` port to secure the connection.

#### 1.3 Test and Verify

To output the network test log:

# Host
curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"
# See\`warp=on\` means success. 

### 2\. Docker Compose

`docker-compose.yml` could replace some args in a file to run a container.

#### 💾 Download Standalone Docker-Compose V2 Binary

If you don't have Docker-Compose installed, following this:

sudo curl -fsSL <https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-\>\`uname -s\`\-\`uname -m\` \> /usr/bin/docker-compose

sudo chmod +x /usr/bin/docker-compose

#### 2.1 🎉 Compose up the container

#start
curl -fsSL https://bit.ly/docker-warp-socks-compose | docker-compose -f - up -d --wait && curl --proxy socks5h://127.0.0.1:9091 "https://www.cloudflare.com/cdn-cgi/trace"

#stop
curl -fsSL https://bit.ly/docker-warp-socks-compose | docker-compose -f - down 

### 3\. Docker Stack Deploy

> Click the _CLOSE_ button, Replace the $IP with the given one on the top side, then run: `curl -x "socks5h://$IP:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"`

#### 3.1 Enable Swarm Mode

To use `Docker Stack`, first perform the _Swarm Initialized_ by:

# create
docker swarm init

# leave
docker swarm leave --force

#### 3.2 Service Creation

# create
curl -fsSL https://bit.ly/docker-warp-socks-compose | docker stack deploy -c - TEST

# remove
docker stack rm TEST

#### 3.3 Check and Test

-   `docker info`
-   `docker node ls`
-   `docker network ls`
-   `docker stack ps TEST`
-   `docker stack services TEST`
-   `docker service ls`
-   `docker service logs TEST_warp-socks`
-   `docker service inspect TEST_warp-socks`

# in swarm mode, the ip addr is random

TID=\`docker ps -aqf "name=^TEST\_warp-socks"\`
IF=\`docker exec $TID sh -c "ip route show default" | awk '{print $5}'\`
TIP=\`docker exec $TID sh -c "ifconfig $IF" | awk '/inet /{print $2}' | cut -d' ' -f2\`

curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"

### 4\. Official Implement

#### 4.1 For `warp-cli 2024.6` and later

echo y | warp-cli registration new
warp-cli registration license "$LICENSE\_KEY"
warp-cli mode proxy
warp-cli proxy port 9091
warp-cli connect

curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"

#### 4.1.1 `Proxy` Mode for newbie

For those who has `amd64` remote machine and don't need to use `docker` to secure network connection, I suggest to use the official `warp-cli` as following:

curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg \\
    | sudo gpg --yes --dearmor --output /etc/apt/trusted.gpg.d/cloudflare-warp.gpg

echo "deb https://pkg.cloudflareclient.com $(lsb\_release -cs) main" \\
    | sudo tee /etc/apt/sources.list.d/cloudflare-warp.list  \> /dev/null

sudo apt-get -qq update && sudo apt-get -qq install cloudflare-warp

echo y | warp-cli register
warp-cli set-mode proxy
warp-cli set-proxy-port 9091
warp-cli connect

# test
curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"
# See\`warp=on\` means success. 

#### 4.1.2 `Proxy` Mode with `Plus`

Prepare `WGCF_LICENSE_KEY="xxxxxxx"`

curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg \\
    | sudo gpg --yes --dearmor --output /etc/apt/trusted.gpg.d/cloudflare-warp.gpg

echo "deb https://pkg.cloudflareclient.com $(lsb\_release -cs) main" \\
    | sudo tee /etc/apt/sources.list.d/cloudflare-warp.list  \> /dev/null

sudo apt-get -qq update && sudo apt-get -qq install cloudflare-warp

echo y | warp-cli registration new && warp-cli registration license "$WGCF\_LICENSE\_KEY"
warp-cli mode proxy
warp-cli proxy port 9091
warp-cli connect

# test
curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"
# Instead of \`warp=plus\`, see \`sliver=005-tier1\` means success.

#### 4.2 `Default` Global Mode for old man

For those who are **ooold** enough for Linux network management, try it for a global proxy mode, keep in mind that you have already back up or have second way or third way to save your remote VM's network!!!

CF\_WARP="https://pkg.cloudflareclient.com/pubkey.gpg"
\_WARP="deb https://pkg.cloudflareclient.com $(lsb\_release -cs) main"
echo "$\_WARP" | sudo tee /etc/apt/sources.list.d/cloudflare-warp.list  \> /dev/null
curl -fsSL "$CF\_WARP" | sudo gpg --yes --dearmor --output /etc/apt/trusted.gpg.d/cloudflare-warp.gpg
sudo apt-get -qq update && sudo apt-get -qq install cloudflare-warp

GATEWAY=$(ip route show default | awk '/default/ {print $3}')
IFACE=$(ip route get 8.8.8.8 | sed -n 's/.\*dev \\(\[^\\ \]\*\\).\*/\\1/p' | head -n 1)
\_IPv4=$(ip addr show dev "$IFACE" | awk '/inet /{print $2}' | cut -d' ' -f2)
\_IPv6=$(ip addr show dev "$IFACE" | awk '/inet6 /{print $2}' | cut -d' ' -f2)
# Setting for VPC ip structure
\_VPC=$(curl -fsSL https://www.cloudflare.com/cdn-cgi/trace | grep 'ip' | sed 's/ip=//') 

echo y | warp-cli registration new

# Setting for VPC internal
warp-cli add-excluded-route "$\_IPv4"
warp-cli add-excluded-route "$\_IPv6"
warp-cli add-excluded-route "$\_VPC"
# Setting for external ssh
echo "$SSH\_CONNECTION" | sed 's/ .\*//' | sed 's/\[0-9\]\*$/0\\/24/' | xargs warp-cli add-excluded-route

warp-cli connect
# Whole network in WARP proxy, \`warp=on\` means success. 

# Check \`/var/log/cloudflare-warp/cfwarp\_service\_log.txt\` for logs details

**Plz be aware that the VMs still has possibility to be lost due to the `IP` can still be changed after `reboot`!!!**

**DONT USE** `warp-cli tunnel ip add` to exclude ip for now!!!

GATEWAY=$(ip route show default | awk '/default/ {print $3}')
IFACE=$(ip route get 8.8.8.8 | sed -n 's/.\*dev \\(\[^\\ \]\*\\).\*/\\1/p' | head -n 1)
\_IPv4=$(ip addr show dev "$IFACE" | awk '/inet /{print $2}' | cut -d' ' -f2 | sed 's/\\(\[0-9.\]\*\\)\\/.\*/\\1/')
\_IPv6=$(ip addr show dev "$IFACE" | awk '/inet6 /{print $2}' | cut -d' ' -f2 | sed 's/\\(\[0-9.\]\*\\)\\/.\*/\\1/')
warp-cli tunnel ip add "$\_IPv4"
warp-cli tunnel ip add "$\_IPv6"
warp-cli tunnel ip add "$\_VPC"
echo "$SSH\_CONNECTION" | sed 's/ .\*//' | sed 's/\[0-9\]\*$/0\\/24/' | sed 's/\\(\[0-9.\]\*\\)\\/.\*/\\1/' | xargs warp-cli tunnel ip add

#### 4.3 `Zero-Trust` official implement

1.  Go to `https://$TEAM.cloudflareaccess.com/warp` and authenticate.
2.  On the ‘Success’ page in the browser, right click and ‘Inspect’ the blue ‘Open Cloudflare WARP’ button. Copy the long url start with `com.cloudflare.warp://` that’s shown linked to the button.
3.  Assume you store it inside `$TOKEN_URL`
4.  Go to `one.dash.cloudflare.com`
5.  Find -> Setting -> WARP Client -> Device settings
6.  Click Default -> Configure -> Split Tunnels -> Manage, then add exclude IPs which is same as `warp-cli add-excluded-route`

curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg \\
    | sudo gpg --yes --dearmor --output /etc/apt/trusted.gpg.d/cloudflare-warp.gpg

echo "deb https://pkg.cloudflareclient.com $(lsb\_release -cs) main" \\
    | sudo tee /etc/apt/sources.list.d/cloudflare-warp.list  \> /dev/null

sudo apt-get -qq update && sudo apt-get -qq install cloudflare-warp

TOKEN\_URL="com.cloudflare.warp://xxx.cloudflareaccess.com/auth?token=xxxxx"

echo y | warp-cli registration token $TOKEN\_URL

warp-cli connect

curl -fsSL "https://www.cloudflare.com/cdn-cgi/trace"
curl --proxy socks5h://127.0.0.1:9011 https://www.cloudflare.com/cdn-cgi/trace
curl -x "socks5h://127.0.0.1:9091" -fsSL "https://www.cloudflare.com/cdn-cgi/trace"

### 5\. Debug Information

Debug commands for quick troubleshooting

docker rm -f $(docker ps -a -q) && docker rmi -f $(docker images -a -q)

docker run --privileged --restart=always -itd \\
    --name warp\_debug \\
    --sysctl net.ipv6.conf.all.disable\_ipv6=0 \\
    --sysctl net.ipv4.conf.all.src\_valid\_mark=1 \\
    --cap-add NET\_ADMIN --cap-add SYS\_MODULE \\
    -p 9091:9091 \\
    -v /lib/modules:/lib/modules \\
    monius/docker-warp-socks:meta

docker exec -it warp\_debug /bin/bash

IFACE=$(ip route show default | grep default | awk '{print $5}')
IPv4=$(ifconfig "$IFACE" | awk '/inet /{print $2}' | cut -d' ' -f2)
IPv6=$(ifconfig "$IFACE" | awk '/inet6 /{print $2}' | cut -d' ' -f2)
TAR="https://api.github.com/repos/Mon-ius/Docker-Warp-Socks/releases/latest"
ARCH=$(dpkg --print-architecture)
URL=$(curl -fsSL ${TAR} | grep 'browser\_download\_url' | cut -d'"' -f4 | grep linux | grep "${ARCH}")
curl -LSs "${URL}" -o ./wgcf && chmod +x ./wgcf && mv ./wgcf /usr/bin
wgcf register --accept-tos && wgcf generate && mv wgcf-profile.conf /etc/wireguard/warp.conf
sed -i "/\\\[Interface\\\]/a PostDown = ip -6 rule delete from ${IPv6}  lookup main" /etc/wireguard/warp.conf
sed -i "/\\\[Interface\\\]/a PostUp = ip -6 rule add from ${IPv6} lookup main" /etc/wireguard/warp.conf
sed -i "/\\\[Interface\\\]/a PostDown = ip -4 rule delete from ${IPv4} lookup main" /etc/wireguard/warp.conf
sed -i "/\\\[Interface\\\]/a PostUp = ip -4 rule add from ${IPv4} lookup main" /etc/wireguard/warp.conf

wg-quick up warp

curl "https://www.cloudflare.com/cdn-cgi/trace"
curl --interface eth0 "https://www.cloudflare.com/cdn-cgi/trace"
curl --interface warp "https://www.cloudflare.com/cdn-cgi/trace"

### Known issues

-   CentOS/RedHat/Rocky Linux as Host, see https://github.com/uzairali001/docker-wireguard-rhel

### Source

Docker-Warp-Socks

### Credits

-   WireGuard
-   Mon-ius/Docker-Warp-Socks
-   Cloudflare WARP
-   SagerNet/sing-box
-   ViRb3/wgcf
-   Neilpang/wgcf-docker
-   Wireguard-Socks-Proxy
-   WARP exlude config

Notice of Non-Affiliation and Disclaimer
----------------------------------------

We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Cloudflare, or any of its subsidiaries or its affiliates. The official Cloudflare website can be found at https://www.cloudflare.com.
