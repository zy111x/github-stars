---
project: lychee
stars: 2340
description: ⚡ Fast, async, stream-based link checker written in Rust. Finds broken URLs and mail addresses inside Markdown, HTML, reStructuredText, websites and more!
url: https://github.com/lycheeverse/lychee
---

⚡ A fast, async, stream-based link checker written in Rust.  
Finds broken hyperlinks and mail addresses inside Markdown, HTML, reStructuredText, or any other text file or website!

Available as a command-line utility, a library and a GitHub Action.

Table of Contents
-----------------

-   Development
-   Installation
-   Features
-   Commandline usage
-   Library usage
-   GitHub Action Usage
-   Pre-commit Usage
-   Contributing to lychee
-   Troubleshooting and Workarounds
-   Users
-   Credits
-   License

Development
-----------

After installing Rust use Cargo for building and testing. On Linux the OpenSSL package is required to compile `reqwest`, a dependency of lychee. For Nix we provide a flake so you can use `nix develop` and `nix build`.

Installation
------------

### Arch Linux

pacman -S lychee

### OpenSUSE Tumbleweed

zypper in lychee

### macOS

Via Homebrew:

brew install lychee

Via MacPorts:

sudo port install lychee

### Docker

docker pull lycheeverse/lychee

### NixOS

nix-env -iA nixos.lychee

### Nixpkgs

-   `lychee` package for configurations, Nix shells, etc.
    
-   Let Nix check a packaged site with  
    `testers.lycheeLinkCheck` `{ site = …; }`
    

### FreeBSD

pkg install lychee

### Scoop

scoop install lychee

### Termux

pkg install lychee

### Alpine Linux

 # available for Alpine Edge in testing repositories
apk add lychee

### Chocolatey (Windows)

choco install lychee

### Pre-built binaries

We provide binaries for Linux, macOS, and Windows for every release.  
You can download them from the releases page.

### Cargo

#### Build dependencies

On APT/dpkg-based Linux distros (e.g. Debian, Ubuntu, Linux Mint and Kali Linux) the following commands will install all required build dependencies, including the Rust toolchain and `cargo`:

curl -sSf 'https://sh.rustup.rs' | sh
apt install gcc pkg-config libc6-dev libssl-dev

#### Compile and install lychee

cargo install lychee

#### Feature flags

Lychee supports several feature flags:

-   `native-tls` enables the platform-native TLS crate native-tls.
-   `vendored-openssl` compiles and statically links a copy of OpenSSL. See the corresponding feature of the openssl crate.
-   `rustls-tls` enables the alternative TLS crate rustls.
-   `email-check` enables checking email addresses using the check-if-email-exists crate. This feature requires the `native-tls` feature.
-   `check_example_domains` allows checking example domains such as `example.com`. This feature is useful for testing.

By default, `native-tls` and `email-check` are enabled.

Features
--------

This comparison is made on a best-effort basis. Please create a PR to fix outdated information.

lychee

awesome\_bot

muffet

broken-link-checker

linkinator

linkchecker

markdown-link-check

fink

Language

Rust

Ruby

Go

JS

TypeScript

Python

JS

PHP

Async/Parallel

JSON output

1

Static binary

️

Markdown files

HTML files

Text files

Website support

Chunked encodings

GZIP compression

Basic Auth

Custom user agent

Relative URLs

Anchors/Fragments

Skip relative URLs

Include patterns

️

Exclude patterns

Handle redirects

Ignore insecure SSL

File globbing

Limit scheme

Custom headers

Summary

`HEAD` requests

Colored output

Filter status code

Custom timeout

E-mail links

Progress bar

Retry and backoff

Skip private domains

Use as library

Quiet mode

Config file

Cookies

Recursion

Amazing lychee logo

1 Other machine-readable formats like CSV are supported.

Commandline usage
-----------------

Recursively check all links in supported files inside the current directory

lychee .

You can also specify various types of inputs:

# check links in specific local file(s):
lychee README.md
lychee test.html info.txt

# check links on a website:
lychee https://endler.dev

# check links in directory but block network requests
lychee --offline path/to/directory

# check links in a remote file:
lychee https://raw.githubusercontent.com/lycheeverse/lychee/master/README.md

# check links in local files via shell glob:
lychee ~/projects/\*/README.md

# check links in local files (lychee supports advanced globbing and ~ expansion):
lychee "~/projects/big\_project/\*\*/README.\*"

# ignore case when globbing and check result for each link:
lychee --glob-ignore-case --verbose "~/projects/\*\*/\[r\]eadme.\*"

# check links from epub file (requires atool: https://www.nongnu.org/atool)
acat -F zip {file.epub} "\*.xhtml" "\*.html" | lychee -

lychee parses other file formats as plaintext and extracts links using linkify. This generally works well if there are no format or encoding specifics, but in case you need dedicated support for a new file format, please consider creating an issue.

### Docker Usage

Here's how to mount a local directory into the container and check some input with lychee.

-   The `--init` parameter is passed so that lychee can be stopped from the terminal.
-   We also pass `-it` to start an interactive terminal, which is required to show the progress bar.
-   The `--rm` removes not used anymore container from the host after the run (self-cleanup).
-   The `-w /input` points to `/input` as the default workspace
-   The `-v $(pwd):/input` does local volume mounting to the container for lychee access.

> By default a Debian-based Docker image is used. If you want to run an Alpine-based image, use the `latest-alpine` tag. For example, `lycheeverse/lychee:latest-alpine`

#### Linux/macOS shell command

docker run --init -it --rm -w /input -v $(pwd):/input lycheeverse/lychee README.md

#### Windows PowerShell command

docker run \--init \-it \--rm \-w /input \-v ${PWD}:/input lycheeverse/lychee README.md

### GitHub Token

To avoid getting rate-limited while checking GitHub links, you can optionally set an environment variable with your GitHub token like so `GITHUB_TOKEN=xxxx`, or use the `--github-token` CLI option. It can also be set in the config file. Here is an example config file.

The token can be generated on your GitHub account settings page. A personal access token with no extra permissions is enough to be able to check public repo links.

For more scalable organization-wide scenarios you can consider a GitHub App. It has a higher rate limit than personal access tokens but requires additional configuration steps on your GitHub workflow. Please follow the GitHub App Setup example.

### Commandline Parameters

There is an extensive list of command line parameters to customize the behavior. See below for a full list.

```
A fast, async link checker

Finds broken URLs and mail addresses inside Markdown, HTML, `reStructuredText`, websites and more!

Usage: lychee [OPTIONS] <inputs>...

Arguments:
  <inputs>...
          The inputs (where to get links to check from). These can be: files (e.g. `README.md`), file globs (e.g. `"~/git/*/README.md"`), remote URLs (e.g. `https://example.com/README.md`) or standard input (`-`). NOTE: Use `--` to separate inputs from options that allow multiple arguments

Options:
  -c, --config <CONFIG_FILE>
          Configuration file to use

          [default: lychee.toml]

  -v, --verbose...
          Set verbosity level; more output per occurrence (e.g. `-v` or `-vv`)

  -q, --quiet...
          Less output per occurrence (e.g. `-q` or `-qq`)

  -n, --no-progress
          Do not show progress bar.
          This is recommended for non-interactive shells (e.g. for continuous integration)

      --cache
          Use request cache stored on disk at `.lycheecache`

      --max-cache-age <MAX_CACHE_AGE>
          Discard all cached requests older than this duration

          [default: 1d]

      --cache-exclude-status <CACHE_EXCLUDE_STATUS>
          A list of status codes that will be ignored from the cache

          The following accept range syntax is supported: [start]..[=]end|code. Some valid
          examples are:

          - 429
          - 500..=599
          - 500..

          Use "lychee --cache-exclude-status '429, 500..502' <inputs>..." to provide a comma- separated
          list of excluded status codes. This example will not cache results with a status code of 429, 500,
          501 and 502.

          [default: ]

      --dump
          Don't perform any link checking. Instead, dump all the links extracted from inputs that would be checked

      --dump-inputs
          Don't perform any link extraction and checking. Instead, dump all input sources from which links would be collected

      --archive <ARCHIVE>
          Specify the use of a specific web archive. Can be used in combination with `--suggest`

          [possible values: wayback]

      --suggest
          Suggest link replacements for broken links, using a web archive. The web archive can be specified with `--archive`

  -m, --max-redirects <MAX_REDIRECTS>
          Maximum number of allowed redirects

          [default: 5]

      --max-retries <MAX_RETRIES>
          Maximum number of retries per request

          [default: 3]

      --max-concurrency <MAX_CONCURRENCY>
          Maximum number of concurrent network requests

          [default: 128]

  -T, --threads <THREADS>
          Number of threads to utilize. Defaults to number of cores available to the system

  -u, --user-agent <USER_AGENT>
          User agent

          [default: lychee/x.y.z]

  -i, --insecure
          Proceed for server connections considered insecure (invalid TLS)

  -s, --scheme <SCHEME>
          Only test links with the given schemes (e.g. https). Omit to check links with any other scheme. At the moment, we support http, https, file, and mailto

      --offline
          Only check local files and block network requests

      --include <INCLUDE>
          URLs to check (supports regex). Has preference over all excludes

      --exclude <EXCLUDE>
          Exclude URLs and mail addresses from checking (supports regex)

      --exclude-file <EXCLUDE_FILE>
          Deprecated; use `--exclude-path` instead

      --exclude-path <EXCLUDE_PATH>
          Exclude file path from getting checked

  -E, --exclude-all-private
          Exclude all private IPs from checking.
          Equivalent to `--exclude-private --exclude-link-local --exclude-loopback`

      --exclude-private
          Exclude private IP address ranges from checking

      --exclude-link-local
          Exclude link-local IP address range from checking

      --exclude-loopback
          Exclude loopback IP address range and localhost from checking

      --exclude-mail
          Exclude all mail addresses from checking (deprecated; excluded by default)

      --include-mail
          Also check email addresses

      --remap <REMAP>
          Remap URI matching pattern to different URI

      --fallback-extensions <FALLBACK_EXTENSIONS>
          Test the specified file extensions for URIs when checking files locally.
          Multiple extensions can be separated by commas. Extensions will be checked in
          order of appearance.

          Example: --fallback-extensions html,htm,php,asp,aspx,jsp,cgi

      --header <HEADER>
          Custom request header

  -a, --accept <ACCEPT>
          A List of accepted status codes for valid links

          The following accept range syntax is supported: [start]..[=]end|code. Some valid
          examples are:

          - 200..=204
          - 200..204
          - ..=204
          - ..204
          - 200

          Use "lychee --accept '200..=204, 429, 500' <inputs>..." to provide a comma-
          separated list of accepted status codes. This example will accept 200, 201,
          202, 203, 204, 429, and 500 as valid status codes.

          [default: 100..=103,200..=299]

      --include-fragments
          Enable the checking of fragments in links

  -t, --timeout <TIMEOUT>
          Website timeout in seconds from connect to response finished

          [default: 20]

  -r, --retry-wait-time <RETRY_WAIT_TIME>
          Minimum wait time in seconds between retries of failed requests

          [default: 1]

  -X, --method <METHOD>
          Request method

          [default: get]

  -b, --base <BASE>
          Base URL or website root directory to check relative URLs e.g. <https://example.com> or `/path/to/public`

      --root-dir <ROOT_DIR>
          Root path to use when checking absolute local links, must be an absolute path

      --basic-auth <BASIC_AUTH>
          Basic authentication support. E.g. `http://example.com username:password`

      --github-token <GITHUB_TOKEN>
          GitHub API token to use when checking github.com links, to avoid rate limiting

          [env: GITHUB_TOKEN]

      --skip-missing
          Skip missing input files (default is to error if they don't exist)

      --no-ignore
          Do not skip files that would otherwise be ignored by '.gitignore', '.ignore', or the global ignore file

      --hidden
          Do not skip hidden directories and files

      --include-verbatim
          Find links in verbatim sections like `pre`- and `code` blocks

      --glob-ignore-case
          Ignore case when expanding filesystem path glob inputs

  -o, --output <OUTPUT>
          Output file of status report

      --mode <MODE>
          Set the output display mode. Determines how results are presented in the terminal

          [default: color]
          [possible values: plain, color, emoji]

  -f, --format <FORMAT>
          Output format of final status report

          [default: compact]
          [possible values: compact, detailed, json, markdown, raw]

      --require-https
          When HTTPS is available, treat HTTP links as errors

      --cookie-jar <COOKIE_JAR>
          Tell lychee to read cookies from the given file. Cookies will be stored in the cookie jar and sent with requests. New cookies will be stored in the cookie jar and existing cookies will be updated

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```

### Exit codes

-   `0` for success (all links checked successfully or excluded/skipped as configured)
-   `1` for missing inputs and any unexpected runtime failures or config errors
-   `2` for link check failures (if any non-excluded link failed the check)
-   `3` for errors in the config file

### Ignoring links

You can exclude links from getting checked by specifying regex patterns with `--exclude` (e.g. `--exclude example\.(com|org)`).

Here are some examples:

# Exclude LinkedIn URLs (note that we match on the full URL, including the schema to avoid false-positives)
lychee --exclude '^https://www\\.linkedin\\.com'

# Exclude LinkedIn and Archive.org URLs
lychee --exclude '^https://www\\.linkedin\\.com' --exclude '^https://web\\.archive\\.org/web/'

# Exclude all links to PDF files
lychee --exclude '\\.pdf$' .

# Exclude links to specific domains
lychee --exclude '(facebook|twitter|linkedin)\\.com' .

# Exclude links with certain URL parameters
lychee --exclude '\\?utm\_source=' .

# Exclude all mailto links
lychee --exclude '^mailto:' .

For excluding files/directories from being scanned use `lychee.toml` and `exclude_path`.

exclude\_path = \["some/path", "\*/dev/\*"\]

If a file named `.lycheeignore` exists in the current working directory, its contents are excluded as well. The file allows you to list multiple regular expressions for exclusion (one pattern per line).

For more advanced usage and detailed explanations, check out our comprehensive guide on excluding links.

### Caching

If the `--cache` flag is set, lychee will cache responses in a file called `.lycheecache` in the current directory. If the file exists and the flag is set, then the cache will be loaded on startup. This can greatly speed up future runs. Note that by default lychee will not store any data on disk.

Library usage
-------------

You can use lychee as a library for your own projects! Here is a "hello world" example:

use lychee\_lib::Result;

#\[tokio::main\]
async fn main() -> Result<()\> {
  let response = lychee\_lib::check("https://github.com/lycheeverse/lychee").await?;
  println!("{response}");
  Ok(())
}

This is equivalent to the following snippet, in which we build our own client:

use lychee\_lib::{ClientBuilder, Result, Status};

#\[tokio::main\]
async fn main() -> Result<()\> {
  let client = ClientBuilder::default().client()?;
  let response = client.check("https://github.com/lycheeverse/lychee").await?;
  assert!(response.status().is\_success());
  Ok(())
}

The client builder is very customizable:

let client = lychee\_lib::ClientBuilder::builder()
    .includes(includes)
    .excludes(excludes)
    .max\_redirects(cfg.max\_redirects)
    .user\_agent(cfg.user\_agent)
    .allow\_insecure(cfg.insecure)
    .custom\_headers(headers)
    .method(method)
    .timeout(timeout)
    .github\_token(cfg.github\_token)
    .scheme(cfg.scheme)
    .accepted(accepted)
    .build()
    .client()?;

All options that you set will be used for all link checks. See the builder documentation for all options. For more information, check out the examples folder.

GitHub Action Usage
-------------------

A GitHub Action that uses lychee is available as a separate repository: lycheeverse/lychee-action which includes usage instructions.

Pre-commit Usage
----------------

Lychee can also be used as a pre-commit hook.

# .pre-commit-config.yaml
repos:
  - repo: https://github.com/lycheeverse/lychee.git
    rev: v0.15.1
    hooks:
      - id: lychee
        # Optionally include additional CLI arguments
        args: \["--no-progress", "--exclude", "file://"\]

Rather than running on staged-files only, Lychee can be run against an entire repository.

\- id: lychee
  args: \["--no-progress", "."\]
  pass\_filenames: false

Contributing to lychee
----------------------

We'd be thankful for any contribution.  
We try to keep the issue tracker up-to-date so you can quickly find a task to work on.

Try one of these links to get started:

-   good first issues
-   help wanted

For more detailed instructions, head over to `CONTRIBUTING.md`.

Troubleshooting and Workarounds
-------------------------------

We collect a list of common workarounds for various websites in our troubleshooting guide.

Users
-----

-   https://github.com/InnerSourceCommons/InnerSourcePatterns
-   https://github.com/opensearch-project/OpenSearch
-   https://github.com/ramitsurana/awesome-kubernetes
-   https://github.com/papers-we-love/papers-we-love
-   https://github.com/pingcap/docs
-   https://github.com/microsoft/WhatTheHack
-   https://github.com/nix-community/awesome-nix
-   https://github.com/balena-io/docs
-   https://github.com/launchdarkly/LaunchDarkly-Docs
-   https://github.com/pawroman/links
-   https://github.com/analysis-tools-dev/static-analysis
-   https://github.com/analysis-tools-dev/dynamic-analysis
-   https://github.com/mre/idiomatic-rust
-   https://github.com/bencherdev/bencher
-   https://github.com/sindresorhus/execa
-   https://github.com/tldr-pages/tldr-maintenance
-   https://github.com/git-ecosystem/git-credential-manager
-   https://github.com/git/git-scm.com
-   https://github.com/OWASP/threat-dragon
-   https://github.com/oxc-project/oxc
-   https://github.com/hugsy/gef
-   https://github.com/mermaid-js/mermaid
-   https://github.com/hashicorp/consul
-   https://github.com/Unleash/unleash
-   https://github.com/fastify/fastify
-   https://github.com/nuxt/nuxt
-   https://github.com/containerd/containerd
-   https://github.com/rolldown/rolldown
-   https://github.com/rerun-io/rerun
-   https://github.com/0xAX/asm
-   https://github.com/mainmatter/100-exercises-to-learn-rust
-   https://github.com/GoogleCloudPlatform/generative-ai
-   https://github.com/DioxusLabs/dioxus
-   https://github.com/ministryofjustice/modernisation-platform
-   https://github.com/orhun/binsider
-   https://github.com/NVIDIA/aistore
-   https://github.com/gradle/gradle
-   https://github.com/forus-labs/forui
-   https://github.com/lycheeverse/lychee (yes, the lychee docs are checked with lychee 🤯)

If you are using lychee for your project, **please add it here**.

Credits
-------

The first prototype of lychee was built in episode 10 of Hello Rust. Thanks to all GitHub and Patreon sponsors for supporting the development since the beginning. Also, thanks to all the great contributors who have since made this project more mature.

License
-------

lychee is licensed under either of

-   Apache License, Version 2.0, (LICENSE-APACHE or https://www.apache.org/licenses/LICENSE-2.0)
-   MIT license (LICENSE-MIT or https://opensource.org/licenses/MIT)

at your option.

  

* * *

🔼 Back to top
