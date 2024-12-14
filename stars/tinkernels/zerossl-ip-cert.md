---
project: zerossl-ip-cert
stars: 209
description: Automation tool for issuing ZeroSSL IP certificates
url: https://github.com/tinkernels/zerossl-ip-cert
---

zerossl-ip-cert ·
=================

⚠️WARNING: ZeroSSL removed the `Delete Certificate` API endpoint, free account can't renew certificate infinitely.
------------------------------------------------------------------------------------------------------------------

zerossl-ip-cert is a automation tool for issuing ZeroSSL IP certificates.

-   Use ZeroSSL REST API to implement certificate issuing.
-   Mainly made for **IP** certificates (ipv4 only for now).
-   Call external program for automatically verification.
-   Painless certificate renewal.
-   Cross platform (Linux/Macos/Windows).

Installation
------------

-   Package zerossl-ip-cert contains ZeroSSL REST API client, one can just `go get github.com/tinkernels/zerossl-ip-cert` and import it to use the client.
-   To build static executables, clone this repository and `make release` , or you can make your desire target binary, just take a look at the Makefile.

Usage
-----

zerossl-ip-cert rely on configuration file to run. To archive the goal of issuing certificate automatically, you need do some additional work, saying the external hook.

### Usage Info

```
Usage: zerossl-ip-cert [ -renew ] -config CONFIG_FILE

  -config string
        Config file
  -renew
        Renew existing certs only
```

### Configuration File

You can find a sample configuration file here, with enough comments in it.

And also a sample state record file here, just for troubleshooting.

### External Hook

zerossl-ip-cert use `HTTP_CSR_HASH` validation method to verify domains (including ip address surely), get more information from the ZeroSSL official documentation.

So you should have a http server running and prepare hook programs to finish the domain verification.

-   **verify-hook** will be called before domain verification, some environment variables will be passed to it.
    
    `ZEROSSL_HTTP_FV_HOST` stands for listening host, here will be ip address.
    
    `ZEROSSL_HTTP_FV_PATH` stands for url path, where verification content will locate.
    
    `ZEROSSL_HTTP_FV_PORT` stands for listening port, ZeroSSL only reach port `80` of your http server according to use experience.
    
    `ZEROSSL_HTTP_FV_CONTENT` stands for validation content, ZeroSSL will check it when domain verification started.
    
    And a sample script for nginx can be found here, a sample script for caddy can be found here.
    
    _P.S._ When running in **Windows OS**, text lines are concatenated with spaces in `%ZEROSSL_HTTP_FV_CONTENT%`, as windows doesn't accept multiline variables without using magic.
    
-   **post-hook** will be called after certification downloading, and some other environment variables will be passed to it.
    
    `ZEROSSL_CERT_FPATH` stands for the store path of certificate.
    
    `ZEROSSL_KEY_FPATH` stands for the store path of private key.
    
    And a sample script for nginx can be found here, a sample script for caddy can be found here.
    

License
-------

Apache-2.0
