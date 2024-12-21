---
project: ecapture
stars: 13744
description: Capturing SSL/TLS plaintext without a CA certificate using eBPF. Supported on Linux/Android kernels for amd64/arm64.
url: https://github.com/gojue/ecapture
---

简体中文 | English | 日本語

### eCapture(旁观者): capture SSL/TLS text content without a CA certificate using eBPF.

Important

Supports Linux/Android kernel versions x86\_64 4.18 and above, **aarch64 5.5** and above. Need ROOT permission. Does not support Windows and macOS system.

* * *

-   Introduction
-   Getting started
    -   Download
        -   ELF binary file
        -   Docker image
    -   Capture openssl text content.
    -   Modules
        -   OpenSSL Module
        -   GoTLS Module
        -   Other Modules
    -   Videos
-   Contributing
-   Compilation

Introduction
============

-   SSL/TLS plaintext capture, support openssl\\libressl\\boringssl\\gnutls\\nspr(nss) libraries.
-   GoTLS plaintext support go tls library, which refers to encrypted communication in https/tls programs written in the golang language.
-   Bash audit, capture bash command for Host Security Audit.
-   Zsh audit, capture zsh command for Host Security Audit.
-   MySQL query SQL audit, support mysqld 5.6\\5.7\\8.0, and MariaDB.

Getting started
===============

Download
--------

### ELF binary file

Tip

support Linux/Android x86\_64/aarch64.

Download ELF zip file release , unzip and use by command `sudo ecapture --help`.

### Docker image

Tip

Linux only.

# pull docker image
docker pull gojue/ecapture:latest
# run
docker run --rm --privileged=true --net=host -v ${HOST\_PATH}:${CONTAINER\_PATH} gojue/ecapture ARGS

see Docker Hub for more information.

Capture openssl text content.
-----------------------------

sudo ecapture tls
2024-09-15T11:51:31Z INF AppName="eCapture(旁观者)"
2024-09-15T11:51:31Z INF HomePage=https://ecapture.cc
2024-09-15T11:51:31Z INF Repository=https://github.com/gojue/ecapture
2024-09-15T11:51:31Z INF Author="CFC4N <cfc4ncs@gmail.com>"
2024-09-15T11:51:31Z INF Description="Capturing SSL/TLS plaintext without a CA certificate using eBPF. Supported on Linux/Android kernels for amd64/arm64."
2024-09-15T11:51:31Z INF Version=linux\_arm64:0.8.6-20240915-d87ae48:5.15.0-113-generic
2024-09-15T11:51:31Z INF Listen=localhost:28256
2024-09-15T11:51:31Z INF eCapture running logs logger=
2024-09-15T11:51:31Z INF the file handler that receives the captured event eventCollector=
2024-09-15T11:51:31Z INF listen=localhost:28256
2024-09-15T11:51:31Z INF https server starting...You can update the configuration file via the HTTP interface.
2024-09-15T11:51:31Z WRN ========== module starting. ==========
2024-09-15T11:51:31Z INF Kernel Info=5.15.152 Pid=233698
2024-09-15T11:51:31Z INF BTF bytecode mode: CORE. btfMode=0
2024-09-15T11:51:31Z INF master key keylogger has been set. eBPFProgramType=Text keylogger=
2024-09-15T11:51:31Z INF module initialization. isReload=false moduleName=EBPFProbeOPENSSL
2024-09-15T11:51:31Z INF Module.Run()
2024-09-15T11:51:31Z WRN OpenSSL/BoringSSL version not found from shared library file, used default version OpenSSL Version=linux\_default\_3\_0
2024-09-15T11:51:31Z INF Hook masterKey function ElfType=2 Functions=\["SSL\_get\_wbio","SSL\_in\_before","SSL\_do\_handshake"\] binrayPath=/usr/lib/aarch64-linux-gnu/libssl.so.3
2024-09-15T11:51:31Z INF target all process.
2024-09-15T11:51:31Z INF target all users.
2024-09-15T11:51:31Z INF setupManagers eBPFProgramType=Text
2024-09-15T11:51:31Z INF BPF bytecode file is matched. bpfFileName=user/bytecode/openssl\_3\_0\_0\_kern\_core.o
2024-09-15T11:51:32Z INF perfEventReader created mapSize(MB)=4
2024-09-15T11:51:32Z INF perfEventReader created mapSize(MB)=4
2024-09-15T11:51:32Z INF module started successfully. isReload=false moduleName=EBPFProbeOPENSSL
2024-09-15T11:51:53Z ??? UUID:233851\_233851\_curl\_5\_1\_172.16.71.1:51837, Name:HTTP2Request, Type:2, Length:304

Frame Type	=\>	SETTINGS

Frame Type	=\>	WINDOW\_UPDATE

Frame Type	=\>	HEADERS
header field ":method" = "GET"
header field ":path" = "/"
header field ":scheme" = "https"
header field ":authority" = "google.com"
header field "user-agent" = "curl/7.81.0"
header field "accept" = "\*/\*"

Frame Type	=\>	SETTINGS

2024-09-15T11:51:53Z ??? UUID:233851\_233851\_curl\_5\_0\_172.16.71.1:51837, Name:HTTP2Response, Type:4, Length:1160

Frame Type	=\>	SETTINGS

Frame Type	=\>	WINDOW\_UPDATE

Frame Type	=\>	SETTINGS

Frame Type	=\>	HEADERS
header field ":status" = "301"
header field "location" = "https://www.google.com/"
header field "content-type" = "text/html; charset=UTF-8"
header field "content-security-policy-report-only" = "object-src 'none';base-uri 'self';script-src 'nonce-qvZZ0XreBfeqRnUEV1WoYw' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp"
header field "date" = "Sun, 15 Sep 2024 11:51:52 GMT"
header field "expires" = "Tue, 15 Oct 2024 11:51:52 GMT"
header field "cache-control" = "public, max-age=2592000"
header field "server" = "gws"
header field "content-length" = "220"
header field "x-xss-protection" = "0"
header field "x-frame-options" = "SAMEORIGIN"
header field "alt-svc" = "h3=\\":443\\"; ma=2592000,h3-29=\\":443\\"; ma=2592000"

Frame Type	=\>	PING

Frame Type	=\>	DATA
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8"\>
<TITLE\>301 Moved</TITLE></HEAD><BODY\>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/"\>here</A\>.
</BODY></HTML\>

Modules
-------

The eCapture tool comprises 8 modules that respectively support plaintext capture for TLS/SSL encryption libraries like OpenSSL, GnuTLS, NSPR, BoringSSL, and GoTLS. Additionally, it facilitates software audits for Bash, MySQL, and PostgreSQL applications.

-   bash capture bash command
-   zsh capture zsh command
-   gnutls capture gnutls text content without CA cert for gnutls libraries.
-   gotls Capturing plaintext communication from Golang programs encrypted with TLS/HTTPS.
-   mysqld capture sql queries from mysqld 5.6/5.7/8.0 .
-   nss capture nss/nspr encrypted text content without CA cert for nss/nspr libraries.
-   postgres capture sql queries from postgres 10+.
-   tls use to capture tls/ssl text content without CA cert. (Support openssl 1.0.x/1.1.x/3.0.x or newer). You can use `ecapture -h` to view the list of subcommands.

### OpenSSL Module

eCapture search `/etc/ld.so.conf` file default, to search load directories of `SO` file, and search `openssl` shard libraries location. or you can use `--libssl` flag to set shard library path.

If target program is compile statically, you can set program path as `--libssl` flag value directly。

The OpenSSL module supports three capture modes:

-   `pcap`/`pcapng` mode stores captured plaintext data in `pcap-NG` format.
-   `keylog`/`key` mode saves the TLS handshake keys to a file.
-   `text` mode directly captures plaintext data, either outputting to a specified file or printing to the command line.

#### Pcap Mode

Supported TLS encrypted http `1.0/1.1/2.0` over TCP, and http3 `QUIC` protocol over UDP. You can specify `-m pcap` or `-m pcapng` and use it in conjunction with `--pcapfile` and `-i` parameters. The default value for `--pcapfile` is `ecapture_openssl.pcapng`.

sudo ecapture tls -m pcap -i eth0 --pcapfile=ecapture.pcapng tcp port 443

This command saves captured plaintext data packets as a pcapng file, which can be viewed using `Wireshark`.

sudo ecapture tls -m pcap -w ecap.pcapng -i ens160
2024-09-15T06:54:12Z INF AppName="eCapture(旁观者)"
2024-09-15T06:54:12Z INF HomePage=https://ecapture.cc
2024-09-15T06:54:12Z INF Repository=https://github.com/gojue/ecapture
2024-09-15T06:54:12Z INF Author="CFC4N <cfc4ncs@gmail.com>"
2024-09-15T06:54:12Z INF Description="Capturing SSL/TLS plaintext without a CA certificate using eBPF. Supported on Linux/Android kernels for amd64/arm64."
2024-09-15T06:54:12Z INF Version=linux\_arm64:0.8.6-20240915-d87ae48:5.15.0-113-generic
2024-09-15T06:54:12Z INF Listen=localhost:28256
2024-09-15T06:54:12Z INF eCapture running logs logger=
2024-09-15T06:54:12Z INF the file handler that receives the captured event eventCollector=
2024-09-15T06:54:12Z WRN ========== module starting. ==========
2024-09-15T06:54:12Z INF Kernel Info=5.15.152 Pid=230440
2024-09-15T06:54:12Z INF BTF bytecode mode: CORE. btfMode=0
2024-09-15T06:54:12Z INF listen=localhost:28256
2024-09-15T06:54:12Z INF module initialization. isReload=false moduleName=EBPFProbeOPENSSL
2024-09-15T06:54:12Z INF Module.Run()
2024-09-15T06:54:12Z INF https server starting...You can update the configuration file via the HTTP interface.
2024-09-15T06:54:12Z WRN OpenSSL/BoringSSL version not found from shared library file, used default version OpenSSL Version=linux\_default\_3\_0
2024-09-15T06:54:12Z INF HOOK type:Openssl elf ElfType=2 IFindex=2 IFname=ens160 PcapFilter= binrayPath=/usr/lib/aarch64-linux-gnu/libssl.so.3
2024-09-15T06:54:12Z INF Hook masterKey function Functions=\["SSL\_get\_wbio","SSL\_in\_before","SSL\_do\_handshake"\]
2024-09-15T06:54:12Z INF target all process.
2024-09-15T06:54:12Z INF target all users.
2024-09-15T06:54:12Z INF setupManagers eBPFProgramType=PcapNG
2024-09-15T06:54:12Z INF BPF bytecode file is matched. bpfFileName=user/bytecode/openssl\_3\_0\_0\_kern\_core.o
2024-09-15T06:54:12Z INF packets saved into pcapng file. pcapng path=/home/ecapture/ecap.pcapng
2024-09-15T06:54:12Z INF perfEventReader created mapSize(MB)=4
2024-09-15T06:54:12Z INF perfEventReader created mapSize(MB)=4
2024-09-15T06:54:12Z INF module started successfully. isReload=false moduleName=EBPFProbeOPENSSL
2024-09-15T06:54:14Z INF packets saved into pcapng file. count=4
2024-09-15T06:54:16Z INF non-TLSv1.3 cipher suite found CLientRandom=f08e8d784962d1693c042f9fe266345507ccfaba58b823904a357f30dbfa1e71 CipherId=0
2024-09-15T06:54:16Z INF non-TLSv1.3 cipher suite found CLientRandom=f08e8d784962d1693c042f9fe266345507ccfaba58b823904a357f30dbfa1e71 CipherId=0
2024-09-15T06:54:16Z INF packets saved into pcapng file. count=183
2024-09-15T06:54:16Z INF CLIENT\_RANDOM save success CLientRandom=f08e8d784962d1693c042f9fe266345507ccfaba58b823904a357f30dbfa1e71 TlsVersion=TLS1\_2\_VERSION bytes=176
2024-09-15T06:54:18Z INF packets saved into pcapng file. count=65
^C2024-09-15T06:54:18Z INF module close.
2024-09-15T06:54:18Z INF packets saved into pcapng file. count=3
2024-09-15T06:54:18Z INF packets saved into pcapng file. count=255
2024-09-15T06:54:18Z INF Module closed,message recived from Context
2024-09-15T06:54:18Z INF iModule module close
2024-09-15T06:54:18Z INF bye bye.

Used `Wireshark` to open `ecap.pcapng` file to view the plaintext data packets.

#### Keylog Mode

You can specify `-m keylog` or `-m key` and use it in conjunction with the `--keylogfile` parameter, which defaults to `ecapture_masterkey.log`.

The captured OpenSSL TLS `Master Secret` information is saved to `--keylogfile`. You can also enable `tcpdump` packet capture and then use `Wireshark` to open the file and set the `Master Secret` path to view plaintext data packets.

sudo ecapture tls -m keylog -keylogfile=openssl\_keylog.log

You can also directly use the `tshark` software for real-time decryption and display:

tshark -o tls.keylog\_file:ecapture\_masterkey.log -Y http -T fields -e http.file\_data -f "port 443" -i eth0

#### Text Mode

`sudo ecapture tls -m text` will output all plaintext data packets. (Starting from v0.7.0, it no longer captures SSLKEYLOG information.)

### GoTLS Module

Similar to the OpenSSL module.

#### gotls command

capture tls text context.

Step 1:

sudo ecapture gotls --elfpath=/home/cfc4n/go\_https\_client --hex

Step 2:

/home/cfc4n/go\_https\_client

#### more help

sudo ecapture gotls -h

### Other Modules

such as `bash\mysqld\postgres` modules, you can use `ecapture -h` to view the list of subcommands.

Videos
------

-   Youtube video: How to use eCapture v0.1.0
-   eCapture:supports capturing plaintext of Golang TLS/HTTPS traffic

Stargazers over time
--------------------

Contributing
============

See CONTRIBUTING for details on submitting patches and the contribution workflow.

Compilation
===========

See COMPILATION for details on compiling the eCapture source code.