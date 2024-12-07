---
project: godns
stars: 1516
description: A dynamic DNS client tool that supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go.
url: https://github.com/TimothyYe/godns
---

```
 ██████╗  ██████╗ ██████╗ ███╗   ██╗███████╗
██╔════╝ ██╔═══██╗██╔══██╗████╗  ██║██╔════╝
██║  ███╗██║   ██║██║  ██║██╔██╗ ██║███████╗
██║   ██║██║   ██║██║  ██║██║╚██╗██║╚════██║
╚██████╔╝╚██████╔╝██████╔╝██║ ╚████║███████║
 ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
```

GoDNS is a dynamic DNS (DDNS) client tool. It is a rewrite in Go of my early DynDNS open source project.

* * *

-   Supported DNS Providers
-   Supported Platforms
-   Pre-conditions
-   Installation
-   Usage
-   Configuration
    -   Overview
    -   Configuration file format
    -   Dynamic loading of configuration
    -   Configuration properties
    -   Update root domain
    -   Configuration examples
        -   Cloudflare
        -   DigitalOcean
        -   DNSPod
        -   Dreamhost
        -   Dynv6
        -   Google Domains
        -   AliDNS
        -   DuckDNS
        -   No-IP
        -   HE.net
        -   Scaleway
        -   Linode
        -   Strato
        -   LoopiaSE
        -   Infomaniak
        -   Hetzner
        -   OVH
        -   Dynu
        -   IONOS
    -   Notifications
        -   Email
        -   Telegram
        -   Slack
        -   Discord
        -   Pushover
    -   Webhook
        -   Webhook with HTTP GET request
        -   Webhook with HTTP POST request
    -   Miscellaneous topics
        -   IPv6 support
        -   Network interface IP address
        -   SOCKS5 proxy support
        -   Display debug info
        -   Obtain IP from RouterOS
        -   Multiple API URLs
        -   Recommended APIs
-   Web Panel
-   Running GoDNS
    -   Manually
    -   As a manual daemon
    -   As a managed daemon (with upstart)
    -   As a managed daemon (with systemd)
    -   As a managed daemon (with procd)
    -   As a Docker container
    -   As a Windows service
-   Contributing
    -   Setup the frontend development environment
    -   Build the frontend
    -   Run the frontend
-   Special Thanks

* * *

Supported DNS Providers
-----------------------

Provider

IPv4 support

IPv6 support

Root Domain

Subdomains

Cloudflare

✅

✅

✅

✅

DigitalOcean

✅

✅

✅

✅

Google Domains

✅

✅

❌

✅

DNSPod

✅

✅

✅

✅

Dynv6

✅

✅

❌

✅

HE.net (Hurricane Electric)

✅

✅

✅

✅

AliDNS

✅

✅

✅

✅

DuckDNS

✅

✅

❌

✅

Dreamhost

✅

✅

❌

✅

No-IP

✅

✅

❌

✅

Scaleway

✅

✅

✅

✅

Linode

✅

✅

✅

✅

Strato

✅

✅

❌

✅

LoopiaSE

✅

✅

❌

✅

Infomaniak

✅

✅

❌

✅

Hetzner

✅

✅

✅

✅

OVH

✅

✅

❌

✅

Dynu

✅

✅

❌

✅

IONOS

✅

✅

❌

✅

Tip: You can follow this issue to view the current status of DDNS for root domains.

Supported Platforms
-------------------

-   Linux
    
-   MacOS
    
-   ARM Linux (Raspberry Pi, etc.)
    
-   Windows
    
-   MIPS32 platform
    
    To compile binaries for MIPS (mips or mipsle), run:
    
    GOOS=linux GOARCH=mips/mipsle GOMIPS=softfloat go build -a
    
    The binary can run on routers as well.
    

Pre-conditions
--------------

To use GoDNS, it is assumed:

-   You registered (now own) a domain
-   Domain was delegated to a supported DNS provider (i.e. it has nameserver `NS` records pointing at a supported provider)

Alternatively, you can sign in to DuckDNS (with a social account) and get a subdomain on the duckdns.org domain for free.

Installation
------------

Build GoDNS by running (from the root of the repository):

cd cmd/godns        # go to the GoDNS directory
go mod download     # get dependencies
go build            # build

You can also download a compiled binary from the releases.

Usage
-----

Print usage/help by running:

$ ./godns -h
Usage of ./godns:
  -c string
        Specify a config file (default "./config.json")
  -h    Show help

Configuration
-------------

### Overview

-   Make a copy of config\_sample.json and name it as `config.json`, or make a copy of config\_sample.yaml and name it as `config.yaml`.
-   Configure your provider, domain/subdomain info, credentials, etc.
-   Configure a notification medium (e.g. SMTP to receive emails) to get notified when your IP address changes
-   Place the file in the same directory of GoDNS or use the `-c=path/to/your/file.json` option

### Configuration file format

GoDNS supports 2 different configuration file formats:

-   JSON
-   YAML

By default, GoDNS uses `JSON` config file. However, you can specify to use the `YAML` format via: `./godns -c /path/to/config.yaml`

### Dynamic loading of configuration

GoDNS supports dynamic loading of configuration. If you modify the configuration file, GoDNS will automatically reload the configuration and apply the changes.

### Configuration properties

-   `provider` — One of the supported provider to use: `Cloudflare`, `Google`, `DNSPod`, `AliDNS`, `HE`, `DuckDNS` or `Dreamhost`.
-   `email` — Email or account name of the DNS provider.
-   `password` — Password of the DNS provider.
-   `login_token` — API token of the DNS provider.
-   `domains` — Domains list, with your sub domains.
-   `ip_urls` — A URL array for fetching one's public IPv4 address.
-   `ipv6_urls` — A URL array for fetching one's public IPv6 address.
-   `ip_type` — Switch deciding if IPv4 or IPv6 should be used (when supported). Available values: `IPv4` or `IPv6`.
-   `interval` — How often (in seconds) the public IP should be updated.
-   `socks5_proxy` — Socks5 proxy server.
-   `resolver` — Address of a public DNS server to use. For instance to use Google's public DNS, you can set `8.8.8.8` when using GoDNS in IPv4 mode or `2001:4860:4860::8888` in IPv6 mode.
-   `skip_ssl_verify` - Skip verification of ssl certificates for https requests.

### Update root domain

By simply putting `@` into `sub_domains`, for example:

"domains": \[{
      "domain\_name": "example.com",
      "sub\_domains": \["@"\]
    }\]

### Configuration examples

#### Cloudflare

For Cloudflare, you need to provide the email & Global API Key as password (or to use the API token) and config all the domains & subdomains.

By setting the option `proxied = true`, the record is receiving the performance and security benefits of Cloudflare. This option is only available for Cloudflare.

Using email & Global API Key

{
  "provider": "Cloudflare",
  "email": "you@example.com",
  "password": "Global API Key",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": "",
  "proxied": false
}

Using the API Token

{
  "provider": "Cloudflare",
  "login\_token": "API Token",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### DNSPod

For DNSPod, you need to provide your API Token(you can create it here), and config all the domains & subdomains.

Example

{
  "provider": "DNSPod",
  "login\_token": "your\_id,your\_token",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### DigitalOcean

For DigitalOcean, you need to provide a API Token with the `domain` scopes (you can create it here), and config all the domains & subdomains.

Example

{
  "provider": "DigitalOcean",
  "login\_token": "dop\_v1\_00112233445566778899aabbccddeeff",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["@", "www"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300
}

#### Dreamhost

For Dreamhost, you need to provide your API Token(you can create it here), and config all the domains & subdomains.

Example

{
  "provider": "Dreamhost",
  "login\_token": "your\_api\_key",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "resolver": "ns1.dreamhost.com",
  "socks5\_proxy": ""
}

#### Dynv6

For Dynv6, only need to provide the `token`, config 1 default domain & subdomains.

Example

{
  "provider": "Dynv6",
  "password": "",
  "login\_token": "1234567ABCDEFGabcdefg123456789",
  "domains": \[
    {
      "domain\_name": "dynv6.net",
      "sub\_domains": \["myname"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### Google Domains

For Google Domains, you need to provide email & password, and config all the domains & subdomains.

Example

{
  "provider": "Google",
  "email": "Your\_Username",
  "password": "Your\_Password",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### AliDNS

For AliDNS, you need to provide `AccessKeyID` & `AccessKeySecret` as `email` & `password`, and config all the domains & subdomains.

Example

{
  "provider": "AliDNS",
  "email": "AccessKeyID",
  "password": "AccessKeySecret",
  "login\_token": "",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### DuckDNS

For DuckDNS, the only thing needed is to provide the `token`, config 1 default domain & subdomains.

Example

{
  "provider": "DuckDNS",
  "password": "",
  "login\_token": "3aaaaaaaa-f411-4198-a5dc-8381cac61b87",
  "domains": \[
    {
      "domain\_name": "www.duckdns.org",
      "sub\_domains": \["myname"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### No-IP

Example

{
  "provider": "NoIP",
  "email": "mail@example.com",
  "password": "YourPassword",
  "domains": \[
    {
      "domain\_name": "ddns.net",
      "sub\_domains": \["timothyye6"\]
    }
  \],
  "ip\_type": "IPv4",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "resolver": "8.8.8.8",
  "interval": 300,
  "socks5\_proxy": ""
}

#### HE.net

For HE, email is not needed, just fill the DDNS key as password, and config all the domains & subdomains.

Example

{
  "provider": "HE",
  "password": "Your DDNS Key",
  "login\_token": "",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

Provider configuration

Add a new "A record" and make sure that "Enable entry for dynamic dns" is checked:

Fill in your own DDNS key or generate a random DDNS key for this new created "A record":

Remember the DDNS key and set it in the `password` property in the configuration file.

**NOTICE**: If you have multiple domains or subdomains, make sure their DDNS key are the same.

#### Scaleway

For Scaleway, you need to provide an API Secret Key as the `login_token` (How to generate an API key), and configure the domains and subdomains. `domain_name` should equal a DNS zone, or the root domain in Scaleway. TTL for the DNS records will be set to the `interval` value. Make sure `A` or `AAAA` records exist for the relevant sub domains, these can be set up in the Scaleway console.

Example

{
  "provider": "Scaleway",
  "login\_token": "API Secret Key",
  "domains": \[{
      "domain\_name": "example.com",
      "sub\_domains": \["www","@"\]
    },{
      "domain\_name": "samplednszone.example.com",
      "sub\_domains": \["www","test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300
}

#### Linode

To authenticate with the Linode API you will need to provide a Personal Access Token with "Read/Write" access on the "Domain" scope. Linode has a help page about creating access tokens. Pass this token into the `login_token` field of the config file.

The `domain_name` field of the config file must be the name of an existing Domain managed by Linode. Linode has a help page about adding domains. The GoDNS Linode handler will not create domains automatically, but will create subdomains automatically.

The GoDNS Linode handler currently uses a fixed TTL of 30 seconds for Linode DNS records.

Example

{
  "provider": "Linode",
  "login\_token": ${PERSONAL\_ACCESS\_TOKEN},
  "domains": \[{
      "domain\_name": "example.com",
      "sub\_domains": \["www","@"\]
    },{
      "domain\_name": "samplednszone.example.com",
      "sub\_domains": \["www","test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300
}

#### Strato

For Strato, you need to provide email & password, and config all the domains & subdomains. More Info: German English

Example

{
  "provider": "strato",
  "password": "Your\_Password",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### LoopiaSE

For LoopiaSE, you need to provide username & password, and config all the domains & subdomains. More info: Swedish

Example

{
  "provider": "LoopiaSE",
  "email": "Your\_Username",
  "password": "Your\_Password",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### Infomaniak

For Infomaniak, you need to provide username & password, and config all the domains & subdomains. More info: English

Example

{
  "provider": "Infomaniak",
  "email": "Your\_Username",
  "password": "Your\_Password",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### Hetzner

For Hetzner, you have to create an access token. This can be done in the DNS-Console. (Person Icon in the top left corner --> API Tokens) Notice: If a domain has multiple Records **only the first** Record will be updated. Make sure there is just one record.

Example

{
  "provider": "hetzner",
  "login\_token": "<token>",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4"
}

#### OVH

For OVH, you need to provide a Consumerkey, an Appsecret, an Appkey and configure all the domains & subdomains. The needed values can be obtained by visiting this site Rights should be '\*' on GET, POST and PUT More info: help.ovhcloud.com

Example

{
  "provider": "OVH",
  "consumer\_key": "e389ac80cc8da9c7451bc7b8f171bf4f",
  "app\_secret": "d1ffee354d3643d70deaab48a09131fd",
  "app\_key": "cd338839d6472064",
  "domains": \[
    {
      "domain\_name": "example.com",
      "sub\_domains": \["www", "test"\]
    },
    {
      "domain\_name": "example2.com",
      "sub\_domains": \["www", "test"\]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### Dynu

For Dynu, you need to configure the `password`, config 1 default domain & subdomain.

Example

{
  "provider": "Dynu",
  "password": "Your\_Password",
  "domains": \[
    {
      "domain\_name": "your\_domain.com",
      "sub\_domains": \[
        "your\_subdomain"
      \]
    }
  \],
  "resolver": "8.8.8.8",
  "ip\_urls": \["https://api.ip.sb/ip"\],
  "ip\_type": "IPv4",
  "interval": 300,
  "socks5\_proxy": ""
}

#### IONOS

This is for IONOS Hosting Services, **not** IONOS Cloud. You'll need to sign up for API Access to Hosting Services, then create an API Key. You can find a full guide in the IONOS API Documentation. **Note**: The API-Key used by GoDNS must follow the form `publicprefix.secret` as described in the aforementioned documentation.

Example

provider: IONOS
login\_token: publicprefix.secret
domains:
  - domain\_name: example.com
    sub\_domains:
      - somesubdomain
      - anothersubdomain
resolver: 1.1.1.1
ip\_urls:
  - https://api.ipify.org
ip\_type: IPv4
interval: 300
socks5\_proxy: ""

### Notifications

GoDNS can send a notification each time the IP changes.

#### Email

Emails are sent over SMTP. Update your configuration with the following snippet:

  "notify": {
    "mail": {
      "enabled": true,
      "smtp\_server": "smtp.example.com",
      "smtp\_username": "user",
      "smtp\_password": "password",
      "smtp\_port": 25,
      "send\_from": "my\_mail@example.com"
      "send\_to": "my\_mail@example.com"
    }
  }

Each time the IP changes, you will receive an email like that:

#### Telegram

To receive a Telegram message each time the IP changes, update your configuration with the following snippet:

  "notify": {
    "telegram": {
      "enabled": true,
      "bot\_api\_key": "11111:aaaa-bbbb",
      "chat\_id": "\-123456",
      "message\_template": "Domain \*{{ .Domain }}\* updated to %0A{{ .CurrentIP }}",
      "use\_proxy": false
    },
  }

The `message_template` property supports markdown. New lines needs to be escaped with `%0A`.

#### Slack

To receive a Slack message each time the IP changes, update your configuration with the following snippet:

  "notify": {
    "slack": {
      "enabled": true,
      "bot\_api\_token": "xoxb-xxx",
      "channel": "your\_channel",
      "message\_template": "Domain \*{{ .Domain }}\* updated to \\n{{ .CurrentIP }}",
      "use\_proxy": false
    },
  }

The `message_template` property supports markdown. New lines needs to be escaped with `\n`.

#### Discord

To receive a Discord message each time the IP changes, update your configuration with the following snippit:

  "notify": {
    "discord": {
          "enabled": true,
          "bot\_api\_token": "discord\_bot\_token",
          "channel": "your\_channel",
          "message\_template": "(Optional) Domain \*{{ .Domain }}\* updated to \\n{{ .CurrentIP }}",
        }
  }

#### Pushover

To receive a Pushover message each time the IP changes, update your configuration with the following snippet:

  "notify": {
    "pushover": {
      "enabled": true,
      "token": "abcdefghijklmnopqrstuvwxyz1234",
      "user": "abcdefghijklmnopqrstuvwxyz1234",
      "message\_template": "",
      "device": "",
      "title": "",
      "priority": 0,
      "html": 1
    }
  }

The `message_template` property supports html if the `html` parameter is `1`. If it is left empty a default message will be used. If the `device` and `title` parameters are left empty, Pushover will choose defaults see. More details on the priority parameter can be found on the Pushover API description.

### Webhook

Webhook is another feature that GoDNS provides to deliver notifications to the other applications while the IP is changed. GoDNS delivers a notification to the target URL via an HTTP `GET` or `POST` request.

The configuration section `webhook` is used for customizing the webhook request. In general, there are 2 fields used for the webhook request:

> -   `url`: The target URL for sending webhook request.
> -   `request_body`: The content for sending `POST` request, if this field is empty, a HTTP GET request will be sent instead of the HTTP POST request.

Available variables:

> -   `Domain`: The current domain.
> -   `IP`: The new IP address.
> -   `IPType`: The type of the IP: `IPV4` or `IPV6`.

#### Webhook with HTTP GET request

"webhook": {
  "enabled": true,
  "url": "http://localhost:5000/api/v1/send?domain={{.Domain}}&ip={{.CurrentIP}}&ip\_type={{.IPType}}",
  "request\_body": ""
}

For this example, a webhook with query string parameters will be sent to the target URL:

```
http://localhost:5000/api/v1/send?domain=ddns.example.com&ip=192.168.1.1&ip_type=IPV4
```

#### Webhook with HTTP POST request

"webhook": {
  "enabled": true,
  "url": "http://localhost:5000/api/v1/send",
  "request\_body": "{ \\"domain\\": \\"{{.Domain}}\\", \\"ip\\": \\"{{.CurrentIP}}\\", \\"ip\_type\\": \\"{{.IPType}}\\" }"
}

For this example, a webhook will be triggered when the IP changes, the target URL `http://localhost:5000/api/v1/send` will receive an `HTTP POST` request with request body:

{ "domain": "ddns.example.com", "ip": "192.168.1.1", "ip\_type": "IPV4" }

### Miscellaneous topics

#### IPv6 support

Most of the providers support IPv6.

To enable the `IPv6` support of GoDNS, there are two solutions to choose from:

1.  Use an online service to lookup the external IPv6
    
    For that:
    
    -   Set the `ip_type` as `IPv6`, and make sure the `ipv6_urls` is configured
    -   Create an `AAAA` record instead of an `A` record in your DNS provider
    
    Configuration example
    
    {
      "domains": \[
        {
          "domain\_name": "example.com",
          "sub\_domains": \["ipv6"\]
        }
      \],
      "resolver": "2001:4860:4860::8888",
      "ipv6\_urls": \["https://api-ipv6.ip.sb/ip"\],
      "ip\_type": "IPv6"
    }
    
2.  Let GoDNS find the IPv6 of the network interface of the machine it is running on (more on that later).
    
    For this to happen, just leave `ip_urls` and `ipv6_urls` empty.
    
    Note that the network interface must be configured with an IPv6 for this to work.
    

#### Network interface IP address

For some reasons if you want to get the IP address associated to a network interface (instead of performing an online lookup), you can specify it in the configuration file this way:

  "ip\_urls": \[""\],
  "ip\_interface": "interface-name",

With `interface-name` replaced by the name of the network interface, e.g. `eth0` on Linux or `Local Area Connection` on Windows.

Note: If `ip_urls` is also specified, it will be used to perform an online lookup first and the network interface IP will be used as a fallback in case of failure.

#### SOCKS5 proxy support

You can make all remote calls go through a SOCKS5 proxy by specifying it in the configuration file this way:

"socks5\_proxy": "127.0.0.1:7070"
"use\_proxy": true

#### Obtain IP from Router OS

If you want to get the public IP from a Mikrotik RouterOS device, you can use the following configuration:

"mikrotik": {
  "enabled": false,
  "server": "http://192.168.88.1",
  "username": "admin",
  "password": "password",
  "interface": "pppoe-out"
}

#### Display debug info

To display debug info, set `debug_info` as `true` to enable this feature. By default, the debug info is disabled.

  "debug\_info": true,

#### Multiple API URLs

GoDNS supports to fetch the public IP from multiple URLs via a simple round-robin algorithm. If the first URL fails, it will try the next one until it succeeds. Here is an example of the configuration:

  "ip\_urls": \[
  "https://api.ipify.org",
  "https://myip.biturl.top",
  "https://api-ipv4.ip.sb/ip"
  \],

#### Recommended APIs

-   https://api.ipify.org
-   https://myip.biturl.top
-   https://ipecho.net/plain
-   https://api-ipv4.ip.sb/ip

Web Panel
---------

Starting from version 3.1.0, GoDNS provides a web panel to manage the configuration and monitor the status of the domains. The web UI is disabled by default. To enable it, just enable the `web_panel` in the configuration file.

"web\_panel": {
  "enabled": true,
  "addr": "0.0.0.0:9000",
  "username": "admin",
  "password": "123456"
}

After enabling the web panel, you can visit `http://localhost:9000` to manage the configuration and monitor the status of the domains.

Running GoDNS
-------------

There are a few ways to run GoDNS.

### Manually

Note: make sure to set the `run_once` parameter in your config file so the program will quit after the first run (the default is `false`).

Can be added to `cron` or attached to other events on your system.

{
  "...": "...",
  "run\_once": true
}

Then run

./godns

### As a manual daemon

nohup ./godns &

Note: when the program stops, it will not be restarted.

### As a managed daemon (with upstart)

1.  Install `upstart` first (if not available already)
    
2.  Copy `./config/upstart/godns.conf` to `/etc/init` (and tweak it to your needs)
    
3.  Start the service:
    
    sudo start godns
    

### As a managed daemon (with systemd)

1.  Install `systemd` first (it not available already)
    
2.  Copy `./config/systemd/godns.service` to `/lib/systemd/system` (and tweak it to your needs)
    
3.  Start the service:
    
    sudo systemctl enable godns
    sudo systemctl start godns
    

### As a managed daemon (with procd)

`procd` is the init system on OpenWRT. If you want to use godns as a service with OpenWRT and procd:

1.  Copy `./config/procd/godns` to `/etc/init.d` (and tweak it to your needs)
    
2.  Start the service (with root privilege):
    
    service godns enable
    service godns start
    

### As a Docker container

Available docker registries:

-   https://hub.docker.com/r/timothyye/godns
-   https://github.com/TimothyYe/godns/pkgs/container/godns

Visit https://hub.docker.com/r/timothyye/godns to fetch the latest docker image. The `-p 9000:9000` option is used to expose the web panel.

With `/path/to/config.json` as your local configuration file, run:

docker run \\
-d --name godns --restart=always \\
-v /path/to/config.json:/config.json \\
-p 9000:9000 \\
timothyye/godns:latest

To run it with a `YAML` config file:

docker run \\
-d --name godns \\
-e CONFIG=/config.yaml \\
--restart=always \\
-v /path/to/config.yaml:/config.yaml \\
-p 9000:9000 \\
timothyye/godns:latest

### As a Windows service

1.  Download the latest version of NSSM
    
2.  In an administrative prompt, from the folder where NSSM was downloaded, e.g. `C:\Downloads\nssm\` **win64**, run:
    
    ```
    nssm install YOURSERVICENAME
    ```
    
3.  Follow the interface to configure the service. In the "Application" tab just indicate where the `godns.exe` file is. Optionally you can also define a description on the "Details" tab and define a log file on the "I/O" tab. Finish by clicking on the "Install service" button.
    
4.  The service will now start along Windows.
    

Note: you can uninstall the service by running:

```
nssm remove YOURSERVICENAME
```

Contributing
------------

Contributions are welcome! Please feel free to submit a Pull Request.

### Setup the frontend development environment

Requirements:

-   Node.js `18.19.0` or higher
-   Go `1.17` or higher

The frontend project is built with Next.js and daisyUI. To start the development environment, run:

cd web
npm ci
npm run dev

### Build the frontend

To build the frontend, run:

cd web
npm run build

### Run the frontend

To run the frontend, run:

cd web
npm run start

Special Thanks
--------------

Thanks JetBrains for sponsoring this project with free open source license.

> I like GoLand, it is an amazing and productive tool.
