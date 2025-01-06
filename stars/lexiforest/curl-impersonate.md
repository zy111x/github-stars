---
project: curl-impersonate
stars: 1187
description: An active fork of curl-impersonate with more versions and build targets.
url: https://github.com/lexiforest/curl-impersonate
---

curl-impersonate
================

Note

This is a (slightly) more active fork of curl-impersonate. Differences include:

1.  Encrypted Client Hello(ECH) support introduced in Chrome 119.
2.  ZSTD compression support introduced in Chrome 123.
3.  X25519Kyber768 curve introduced in Chrome 124.
4.  More options for impersonation Akamai http/2 fingerprints, especially for Safari.
5.  Upgrade to more recent version of curl, 8.7.1 as of April, 2024.
6.  Ability to change extension orders and enable/disable TLS grease.
7.  (In progress) Single binary to support both Webkit-based and Gecko-based browsers, i.e. Chrome and Firefox.

A special build of curl that can impersonate the four major browsers: Chrome, Edge, Safari and Firefox(In progress). `curl-impersonate` is able to perform TLS and HTTP handshakes that are identical to that of a real browser.

`curl-impersonate` can be used either as a command line tool, similar to the regular curl, or as a library that can be integrated instead of the regular libcurl. See Usage below.

Why?
----

When you use an HTTP client with a TLS website, it first performs a TLS handshake. The first message of that handshake is called Client Hello. The Client Hello message that most HTTP clients and libraries produce differs drastically from that of a real browser.

If the server uses HTTP/2, then in addition to the TLS handshake there is also an HTTP/2 handshake where various settings are exchanged. The settings that most HTTP clients and libraries use differ as well from those of any real browsers.

For these reasons, some web services use the TLS and HTTP handshakes to fingerprint which client is accessing them, and then present different content for different clients. These methods are known as TLS fingerprinting and HTTP/2 fingerprinting respectively. Their widespread use has led to the web becoming less open, less private and much more restrictive towards specific web clients

With the modified curl in this repository, the TLS and HTTP handshakes look _exactly_ like those of a real browser.

How?
----

To make this work, `curl` was patched significantly to resemble a browser. Specifically, The modifications that were needed to make this work:

-   Compiling with BoringSSL, Google's TLS library, which is used by Chrome and Safari.
-   Modifying the way curl configures various TLS extensions and SSL options.
-   Adding support for new TLS extensions.
-   Changing the settings that curl uses for its HTTP/2 connections.
-   Running curl with some non-default flags, for example `--ciphers`, `--curves` and some `-H` headers.

The resulting curl looks, from a network perspective, identical to a real browser.

Read the full technical description in the blog posts: part a, part b.

Supported browsers
------------------

The following browsers can be impersonated.

Browser

Version

Build

OS

Target name

Wrapper script

99

99.0.4844.51

Windows 10

`chrome99`

curl\_chrome99

100

100.0.4896.75

Windows 10

`chrome100`

curl\_chrome100

101

101.0.4951.67

Windows 10

`chrome101`

curl\_chrome101

104

104.0.5112.81

Windows 10

`chrome104`

curl\_chrome104

107

107.0.5304.107

Windows 10

`chrome107`

curl\_chrome107

110

110.0.5481.177

Windows 10

`chrome110`

curl\_chrome110

116

116.0.5845.180

Windows 10

`chrome116`

curl\_chrome116

119

119.0.6045.199

macOS Sonoma

`chrome119`

curl\_chrome119

120

120.0.6099.109

macOS Sonoma

`chrome120`

curl\_chrome120

123

123.0.6312.124

macOS Sonoma

`chrome123`

curl\_chrome123

124

124.0.6367.60

macOS Sonoma

`chrome124`

curl\_chrome124

131

131.0.6778.86

macOS Sonoma

`chrome131`

curl\_chrome131

99

99.0.4844.73

Android 12

`chrome99_android`

curl\_chrome99\_android

131

131.0.6778.81

Android 14

`chrome131_android`

curl\_chrome131\_android

99

99.0.1150.30

Windows 10

`edge99`

curl\_edge99

101

101.0.1210.47

Windows 10

`edge101`

curl\_edge101

15.3

16612.4.9.1.8

MacOS Big Sur

`safari15_3`

curl\_safari15\_3

15.5

17613.2.7.1.8

MacOS Monterey

`safari15_5`

curl\_safari15\_5

17.0

unclear

MacOS Sonoma

`safari17_0`

curl\_safari17\_0

17.2

unclear

iOS 17.2

`safari17_2_ios`

curl\_safari17\_2\_ios

18.0

unclear

MacOS Sequoia

`safari18_0`

curl\_safari18\_0

18.0

unclear

iOS 18.0

`safari18_0_ios`

curl\_safari18\_0\_ios

Notes:

1.  Chromium-based browsers all share the same fingerprints, except for the `User-Agent` header and `sec-ch-ua-platform` header. They will not be updated unless this assumption changed. Use your own header if you need to impersonate `Edge`, `Chrome Android` etc.
2.  The original Safari fingerprints in the upstream fork are not correct.

This list is also available in the browsers.json file.() Needs to be updated.

Basic usage
-----------

For each supported browser there is a wrapper script that launches `curl-impersonate` with all the needed headers and flags. For example:

```
curl_chrome123 https://www.wikipedia.org
```

You can add command line flags and they will be passed on to curl. However, some flags change curl's TLS signature which may cause it to be detected.

Please note that the wrapper scripts use a default set of HTTP headers. If you want to change these headers, you may want to modify the wrapper scripts to fit your own purpose.

See Advanced usage for more options, including using `libcurl-impersonate` as a library.

Documentation
-------------

More documentation is available in the docs/ directory.

Installation
------------

There are two versions of `curl-impersonate` for technical reasons. The **chrome** version is used to impersonate Chrome, Edge and Safari.

### Pre-compiled binaries

Pre-compiled binaries for Windows, Linux and macOS are available at the GitHub releases page. Before you use them you may need to install zstd and CA certificates:

-   Ubuntu - `sudo apt install ca-certificates zstd libzstd-dev`
-   Red Hat/Fedora/CentOS - `yum install ca-certificates zstd libzstd-devel`
-   Archlinux - `pacman -S ca-certificates zstd`
-   macOS - `brew install ca-certificates zstd`

The pre-compiled binaries contain libcurl-impersonate and a statically compiled curl-impersonate for ease of use.

The pre-compiled Linux binaries are built for Ubuntu systems. On other distributions if you have errors with certificate verification you may have to tell curl where to find the CA certificates. For example:

```
curl_chrome123 https://www.wikipedia.org --cacert /etc/ssl/certs/ca-bundle.crt
```

Also make sure to read Notes on Dependencies.

### Building from source

See INSTALL.md.

### Docker images

Warning

New docker images added in this fork are work in progress.

Docker images based on Alpine Linux and Debian with `curl-impersonate` compiled and ready to use are available on Docker Hub. The images contain the binary and all the wrapper scripts. Use like the following:

# Chrome version, Alpine Linux
docker pull lwthiker/curl-impersonate:0.5-chrome
docker run --rm lwthiker/curl-impersonate:0.5-chrome curl\_chrome110 https://www.wikipedia.org

### Distro packages

Warning

This is for the upstream project

AUR packages are available to Archlinux users:

-   Pre-compiled package: curl-impersonate-bin, libcurl-impersonate-bin.
-   Build from source code: curl-impersonate-chrome, curl-impersonate-firefox.

Advanced usage
--------------

### libcurl-impersonate

`libcurl-impersonate.so` is libcurl compiled with the same changes as the command line `curl-impersonate`.

It has an additional API function:

CURLcode curl\_easy\_impersonate(struct Curl\_easy \*data, const char \*target,
                               int default\_headers);

You can call it with the target names, e.g. `chrome123`, and it will internally set all the options and headers that are otherwise set by the wrapper scripts. If `default_headers` is set to 0, the built-in list of HTTP headers will not be set, and the user is expected to provide them instead using the regular `CURLOPT_HTTPHEADER` libcurl option.

Calling the above function sets the following libcurl options:

-   `CURLOPT_HTTP_VERSION`
-   `CURLOPT_SSLVERSION`,
-   `CURLOPT_SSL_CIPHER_LIST`,
-   `CURLOPT_SSL_EC_CURVES`,
-   `CURLOPT_SSL_ENABLE_NPN`,
-   `CURLOPT_SSL_ENABLE_ALPN`
-   `CURLOPT_HTTPBASEHEADER`, if `default_headers` is non-zero (this is a non-standard HTTP option created for this project).
-   `CURLOPT_HTTP2_PSEUDO_HEADERS_ORDER`, sets http2 pseudo header order, for exmaple: `masp` (non-standard HTTP/2 options created for this project).
-   `CURLOPT_HTTP2_SETTINGS` sets the settings frame values, for example `1:65536;3:1000;4:6291456;6:262144` (non-standard HTTP/2 options created for this project).
-   `CURLOPT_HTTP2_WINDOW_UPDATE` sets intial window update value for http2, for example `15663105` (non-standard HTTP/2 options created for this project).
-   `CURLOPT_SSL_ENABLE_ALPS`, `CURLOPT_SSL_SIG_HASH_ALGS`, `CURLOPT_SSL_CERT_COMPRESSION`, `CURLOPT_SSL_ENABLE_TICKET` (non-standard TLS options created for this project).
-   `CURLOPT_SSL_PERMUTE_EXTENSIONS`, whether to permute extensions like Chrome 110+. (non-standard TLS options created for this project).
-   `CURLOPT_TLS_GREASE`, whether to enable the grease behavior. (non-standard TLS options created for this project).
-   `CURLOPT_TLS_EXTENSION_ORDER`, explicit order or TLS extensions, in the format of `0-5-10`. (non-standard TLS options created for this project).

Note that if you call `curl_easy_setopt()` later with one of the above it will override the options set by `curl_easy_impersonate()`.

### Using CURL\_IMPERSONATE env var

If your application uses `libcurl` already, you can replace the existing library at runtime with `LD_PRELOAD` (Linux only). You can then set the `CURL_IMPERSONATE` env var. For example:

```
LD_PRELOAD=/path/to/libcurl-impersonate.so CURL_IMPERSONATE=chrome116 my_app
```

The `CURL_IMPERSONATE` env var has two effects:

-   `curl_easy_impersonate()` is called automatically for any new curl handle created by `curl_easy_init()`.
-   `curl_easy_impersonate()` is called automatically after any `curl_easy_reset()` call.

This means that all the options needed for impersonation will be automatically set for any curl handle.

If you need precise control over the HTTP headers, set `CURL_IMPERSONATE_HEADERS=no` to disable the built-in list of HTTP headers, then set them yourself with `curl_easy_setopt()`. For example:

```
LD_PRELOAD=/path/to/libcurl-impersonate.so CURL_IMPERSONATE=chrome116 CURL_IMPERSONATE_HEADERS=no my_app
```

Note that the `LD_PRELOAD` method will NOT WORK for `curl` itself because the curl tool overrides the TLS settings. Use the wrapper scripts instead.

### Notes on dependencies

If you intend to copy the self-compiled artifacts to another system, or use the Pre-compiled binaries provided by the project, make sure that all the additional dependencies are met on the target system as well. In particular, see the note about the Firefox version.

Contents
--------

This repository contains these folders:

-   chrome - Scripts and patches for building the Chrome version of `curl-impersonate`.
    -   curl\_chrome110, curl\_chrome124 - Wrapper scripts that launch `curl-impersonate` with the correct flags.
    -   curl-impersonate.patch - The main patch that makes curl use the same TLS extensions as Firefox. Also makes curl compile statically with libnghttp2.
    -   boringssl.patch - The boringssl patch that tweaks boringssl behaviors.
-   win - Scripts for building the Windows version of `curl-impersonate`, which is quite different from `*nix`.
-   zigshim - We use the awesome `zig` toolchain to bring `curl-impersonate` to more archs on Linux. Special thanks to @bjia56 for making it possible.
-   docker - Debian and alpine dockerfiles for this project.

Other files of interest:

-   tests/signatures - YAML database of known browser signatures that can be impersonated.

Contributing
------------

If you'd like to help, please check out the open issues in the origional repo and open issues here. You can open a pull request with your changes. Note that some of the upstream issues have been fixed.

This repository contains the build process for `curl-impersonate`. The actual patches to `curl` are maintained in a separate repository forked from lwthiker's fork of the upstream curl. The changes are maintained in the impersonate-firefox and impersonate-chrome branches.

You may also need the forked and patched BoringSSL.

Sponsors
--------

Original sponsor info:

> Sponsors help keep this project open and maintained. If you wish to become a sponsor, please contact me directly at: lwt at lwthiker dot com.

> 

No one has sponsored this fork.
