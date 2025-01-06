---
project: acme.sh
stars: 40556
description: A pure Unix shell script implementing ACME client protocol
url: https://github.com/acmesh-official/acme.sh
---

An ACME Shell script: acme.sh
=============================

-   An ACME protocol client written purely in Shell (Unix shell) language.
-   Full ACME protocol implementation.
-   Support ECDSA certs
-   Support SAN and wildcard certs
-   Simple, powerful and very easy to use. You only need 3 minutes to learn it.
-   Bash, dash and sh compatible.
-   Purely written in Shell with no dependencies on python.
-   Just one script to issue, renew and install your certificates automatically.
-   DOES NOT require `root/sudoer` access.
-   Docker ready
-   IPv6 ready
-   Cron job notifications for renewal or error etc.

It's probably the `easiest & smartest` shell script to automatically issue & renew the free certificates.

Wiki: https://github.com/acmesh-official/acme.sh/wiki

For Docker Fans: acme.sh 💕 Docker

Twitter: @neilpangxa

中文说明
====

Who:
====

-   FreeBSD.org
-   ruby-china.org
-   Proxmox
-   pfsense
-   Loadbalancer.org
-   discourse.org
-   Centminmod
-   splynx
-   opnsense.org
-   CentOS Web Panel
-   lnmp.org
-   more...

Tested OS
=========

NO

Status

Platform

1

Mac OSX

2

Windows (cygwin with curl, openssl and crontab included)

3

FreeBSD

4

Solaris

5

Ubuntu

6

NA

pfsense

7

OpenBSD

8

NetBSD

9

DragonFlyBSD

10

Omnios

11

Debian

12

CentOS

13

openSUSE

14

Alpine Linux (with curl)

15

Archlinux

16

fedora

17

Kali Linux

18

Oracle Linux

19

Mageia

10

Gentoo Linux

11

ClearLinux

22

\-----

Cloud Linux #111

23

\-----

OpenWRT: Tested and working. See wiki page

24

Proxmox: See Proxmox VE Wiki. Version 4.x, 5.0, 5.1, version 5.2 and up

Check our testing project:

https://github.com/acmesh-official/acmetest

Supported CA
============

-   ZeroSSL.com CA(default)
-   Letsencrypt.org CA
-   BuyPass.com CA
-   SSL.com CA
-   Google.com Public CA
-   Pebble strict Mode
-   Any other RFC8555\-compliant CA

Supported modes
===============

-   Webroot mode
-   Standalone mode
-   Standalone tls-alpn mode
-   Apache mode
-   Nginx mode
-   DNS mode
-   DNS alias mode
-   Stateless mode

1\. How to install
==================

### 1\. Install online

Check this project: https://github.com/acmesh-official/get.acme.sh

curl https://get.acme.sh | sh -s email=my@example.com

Or:

wget -O -  https://get.acme.sh | sh -s email=my@example.com

### 2\. Or, Install from git

Clone this project and launch installation:

git clone https://github.com/acmesh-official/acme.sh.git
cd ./acme.sh
./acme.sh --install -m my@example.com

You `don't have to be root` then, although `it is recommended`.

Advanced Installation: https://github.com/acmesh-official/acme.sh/wiki/How-to-install

The installer will perform 3 actions:

1.  Create and copy `acme.sh` to your home dir (`$HOME`): `~/.acme.sh/`. All certs will be placed in this folder too.
2.  Create alias for: `acme.sh=~/.acme.sh/acme.sh`.
3.  Create daily cron job to check and renew the certs if needed.

Cron entry example:

0 0 \* \* \* "/home/user/.acme.sh"/acme.sh --cron --home "/home/user/.acme.sh" \> /dev/null

After the installation, you must close the current terminal and reopen it to make the alias take effect.

Ok, you are ready to issue certs now.

Show help message:

root@v1:~# acme.sh -h

2\. Just issue a cert
=====================

**Example 1:** Single domain.

acme.sh --issue -d example.com -w /home/wwwroot/example.com

or:

acme.sh --issue -d example.com -w /home/username/public\_html

or:

acme.sh --issue -d example.com -w /var/www/html

**Example 2:** Multiple domains in the same cert.

acme.sh --issue -d example.com -d www.example.com -d cp.example.com -w /home/wwwroot/example.com

The parameter `/home/wwwroot/example.com` or `/home/username/public_html` or `/var/www/html` is the web root folder where you host your website files. You **MUST** have `write access` to this folder.

Second argument **"example.com"** is the main domain you want to issue the cert for. You must have at least one domain there.

You must point and bind all the domains to the same webroot dir: `/home/wwwroot/example.com`.

The certs will be placed in `~/.acme.sh/example.com/`

The certs will be renewed automatically every **60** days.

More examples: https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

3\. Install the cert to Apache/Nginx etc.
=========================================

After the cert is generated, you probably want to install/copy the cert to your Apache/Nginx or other servers. You **MUST** use this command to copy the certs to the target files, **DO NOT** use the certs files in **~/.acme.sh/** folder, they are for internal use only, the folder structure may change in the future.

**Apache** example:

acme.sh --install-cert -d example.com \\
--cert-file      /path/to/certfile/in/apache/cert.pem  \\
--key-file       /path/to/keyfile/in/apache/key.pem  \\
--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \\
--reloadcmd     "service apache2 force-reload"

**Nginx** example:

acme.sh --install-cert -d example.com \\
--key-file       /path/to/keyfile/in/nginx/key.pem  \\
--fullchain-file /path/to/fullchain/nginx/cert.pem \\
--reloadcmd     "service nginx force-reload"

Only the domain is required, all the other parameters are optional.

The ownership and permission info of existing files are preserved. You can pre-create the files to define the ownership and permission.

Install/copy the cert/key to the production Apache or Nginx path.

The cert will be renewed every **60** days by default (which is configurable). Once the cert is renewed, the Apache/Nginx service will be reloaded automatically by the command: `service apache2 force-reload` or `service nginx force-reload`.

**Please take care: The reloadcmd is very important. The cert can be automatically renewed, but, without a correct 'reloadcmd' the cert may not be flushed to your server(like nginx or apache), then your website will not be able to show renewed cert in 60 days.**

4\. Use Standalone server to issue cert
=======================================

**(requires you to be root/sudoer or have permission to listen on port 80 (TCP))**

Port `80` (TCP) **MUST** be free to listen on, otherwise you will be prompted to free it and try again.

acme.sh --issue --standalone -d example.com -d www.example.com -d cp.example.com

More examples: https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

5\. Use Standalone ssl server to issue cert
===========================================

**(requires you to be root/sudoer or have permission to listen on port 443 (TCP))**

Port `443` (TCP) **MUST** be free to listen on, otherwise you will be prompted to free it and try again.

acme.sh --issue --alpn -d example.com -d www.example.com -d cp.example.com

More examples: https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

6\. Use Apache mode
===================

**(requires you to be root/sudoer, since it is required to interact with Apache server)**

If you are running a web server, it is recommended to use the `Webroot mode`.

Particularly, if you are running an Apache server, you can use Apache mode instead. This mode doesn't write any files to your web root folder.

Just set string "apache" as the second argument and it will force use of apache plugin automatically.

acme.sh --issue --apache -d example.com -d www.example.com -d cp.example.com

**This apache mode is only to issue the cert, it will not change your apache config files. You will need to configure your website config files to use the cert by yourself. We don't want to mess with your apache server, don't worry.**

More examples: https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

7\. Use Nginx mode
==================

**(requires you to be root/sudoer, since it is required to interact with Nginx server)**

If you are running a web server, it is recommended to use the `Webroot mode`.

Particularly, if you are running an nginx server, you can use nginx mode instead. This mode doesn't write any files to your web root folder.

Just set string "nginx" as the second argument.

It will configure nginx server automatically to verify the domain and then restore the nginx config to the original version.

So, the config is not changed.

acme.sh --issue --nginx -d example.com -d www.example.com -d cp.example.com

**This nginx mode is only to issue the cert, it will not change your nginx config files. You will need to configure your website config files to use the cert by yourself. We don't want to mess with your nginx server, don't worry.**

More examples: https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

8\. Automatic DNS API integration
=================================

If your DNS provider supports API access, we can use that API to automatically issue the certs.

You don't have to do anything manually!

### Currently acme.sh supports most of the dns providers:

https://github.com/acmesh-official/acme.sh/wiki/dnsapi

9\. Use DNS manual mode:
========================

See: https://github.com/acmesh-official/acme.sh/wiki/dns-manual-mode first.

If your dns provider doesn't support any api access, you can add the txt record by hand.

acme.sh --issue --dns -d example.com -d www.example.com -d cp.example.com

You should get an output like below:

Add the following txt record:
Domain:\_acme-challenge.example.com
Txt value:9ihDbjYfTExAYeDs4DBUeuTo18KBzwvTEjUnSwd32-c

Add the following txt record:
Domain:\_acme-challenge.www.example.com
Txt value:9ihDbjxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Please add those txt records to the domains. Waiting for the dns to take effect.

Then just rerun with `renew` argument:

acme.sh --renew -d example.com

Ok, it's done.

**Take care, this is dns manual mode, it can not be renewed automatically. you will have to add a new txt record to your domain by your hand when you renew your cert.**

**Please use dns api mode instead.**

10\. Issue ECC certificates
===========================

Just set the `keylength` parameter with a prefix `ec-`.

For example:

### Single domain ECC certificate

acme.sh --issue -w /home/wwwroot/example.com -d example.com --keylength ec-256

### SAN multi domain ECC certificate

acme.sh --issue -w /home/wwwroot/example.com -d example.com -d www.example.com --keylength ec-256

Please look at the `keylength` parameter above.

Valid values are:

1.  **ec-256 (prime256v1, "ECDSA P-256", which is the default key type)**
2.  **ec-384 (secp384r1, "ECDSA P-384")**
3.  **ec-521 (secp521r1, "ECDSA P-521", which is not supported by Let's Encrypt yet.)**
4.  **2048 (RSA2048)**
5.  **3072 (RSA3072)**
6.  **4096 (RSA4096)**

11\. Issue Wildcard certificates
================================

It's simple, just give a wildcard domain as the `-d` parameter.

acme.sh  --issue -d example.com  -d '\*.example.com'  --dns dns\_cf

12\. How to renew the certs
===========================

No, you don't need to renew the certs manually. All the certs will be renewed automatically every **60** days.

However, you can also force to renew a cert:

acme.sh --renew -d example.com --force

or, for ECC cert:

acme.sh --renew -d example.com --force --ecc

13\. How to stop cert renewal
=============================

To stop renewal of a cert, you can execute the following to remove the cert from the renewal list:

acme.sh --remove -d example.com \[--ecc\]

The cert/key file is not removed from the disk.

You can remove the respective directory (e.g. `~/.acme.sh/example.com`) by yourself.

14\. How to upgrade `acme.sh`
=============================

acme.sh is in constant development, so it's strongly recommended to use the latest code.

You can update acme.sh to the latest code:

acme.sh --upgrade

You can also enable auto upgrade:

acme.sh --upgrade --auto-upgrade

Then **acme.sh** will be kept up to date automatically.

Disable auto upgrade:

acme.sh --upgrade --auto-upgrade 0

15\. Issue a cert from an existing CSR
======================================

https://github.com/acmesh-official/acme.sh/wiki/Issue-a-cert-from-existing-CSR

16\. Send notifications in cronjob
==================================

https://github.com/acmesh-official/acme.sh/wiki/notify

17\. Under the Hood
===================

Speak ACME language using shell, directly to "Let's Encrypt".

TODO:

18\. Acknowledgments
====================

1.  Acme-tiny: https://github.com/diafygi/acme-tiny
2.  ACME protocol: https://github.com/ietf-wg-acme/acme

Contributors
------------

### Code Contributors

This project exists thanks to all the people who contribute.

### Financial Contributors

Become a financial contributor and help us sustain our community. \[Contribute\]

#### Individuals

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. \[Contribute\]

19\. License & Others
=====================

License is GPLv3

Please Star and Fork me.

Issues and pull requests are welcome.

20\. Donate
===========

Your donation makes **acme.sh** better:

1.  PayPal/Alipay(支付宝)/Wechat(微信): https://donate.acme.sh/

Donate List
