---
project: gotosocial
stars: 3887
description: Fast, fun, small ActivityPub server. WE'RE ON HOLIDAY! <3 Repo is read-only until Jan 2, 2025. See you in the new year!
url: https://github.com/superseriousbusiness/gotosocial
---

GoToSocial
==========

**Update regarding corporate sponsors: we are open to sponsorship arrangements with organizations that align with our values; see the conditions below**

GoToSocial is an ActivityPub social network server, written in Golang.

With GoToSocial, you can keep in touch with your friends, post, read, and share images and articles. All without being tracked or advertised to!

**GoToSocial is still BETA SOFTWARE**. It is already deployable and useable, and it federates cleanly with many other Fediverse servers (not yet all). However, many things are not yet implemented, and there are plenty of bugs! We left alpha stage around September/October 2024, and we intend to exit beta some time around 2026.

Documentation is at docs.gotosocial.org. You can skip straight to the API documentation here.

To build from source, check the CONTRIBUTING.md file.

Here's a screenshot of the instance landing page! Check out the project's official account running on GoToSocial.

Table of Contents
-----------------

-   What is GoToSocial?
    -   Federation
    -   History and Status
-   Features
    -   Mastodon API compatibility
    -   Granular post visibility settings
    -   Reply controls
    -   Local-only posting
    -   RSS feed
    -   Rich text formatting
    -   Themes and custom CSS
    -   Easy to run
    -   Safety + security features
    -   Various federation modes
    -   OIDC integration
    -   Backend-first design
-   Known Issues
-   Installing GoToSocial
    -   Supported Platforms
        -   FreeBSD
        -   32-bit
        -   OpenBSD
    -   Stable Releases
    -   Snapshot Releases
        -   Docker
        -   Binary release .tar.gz
    -   From Source
    -   Third-party Packaging
-   Contributing
-   Contact
-   Credits
    -   Libraries
    -   Image Attribution and Licensing
    -   Team
    -   Special Thanks
-   Sponsorship + Funding
    -   Crowdfunding
    -   Corporate Sponsorship
    -   NLnet
-   License

What is GoToSocial?
-------------------

GoToSocial provides a lightweight, customizable, and safety-focused entryway into the Fediverse, and is comparable to (but distinct from) existing projects such as Mastodon, Pleroma, Friendica, and PixelFed.

If you've ever used something like Twitter or Tumblr (or even Myspace!) GoToSocial will probably feel familiar to you: You can follow people and have followers, you make posts which people can favourite and reply to and share, and you scroll through posts from people you follow using a timeline. You can write long posts or short posts, or just post images, it's up to you. You can also, of course, block people or otherwise limit interactions that you don't want by posting just to your friends.

**GoToSocial does NOT use recommendation algorithms or collect data about you to suggest content or 'improve your experience'**. The timeline is chronological: whatever you see at the top of your timeline is there because it's _just been posted_, not because it's been selected as interesting (or controversial) based on your personal profile.

GoToSocial is not designed for 'must-follow' influencers with tens of thousands of followers, and it's not designed to be addictive. Your timeline and your experience are shaped by who you follow and how you interact with people, not by metrics of engagement!

GoToSocial doesn't claim to be _better_ than any other application, but it offers something that might be better _for you_ in particular.

### Federation

Because GoToSocial uses ActivityPub, you can hang out not just with people on your home server, but with people all over the Fediverse, seamlessly.

Federation means that your home server is part of a network of servers all over the world that all communicate using the same protocol. Your data is no longer centralized on one company's servers, but resides on your own server and is shared — as you see fit — across a resilient web of servers run by other people.

This federated approach also means that you aren't beholden to arbitrary rules from some gigantic corporation potentially thousands of miles away. Your server has its own rules and culture; your fellow server residents are your neighbors; you will likely get to know your server admins and moderators, or be an admin yourself.

GoToSocial advocates for many small, weird, specialist servers where people can feel at home, rather than a few big and generic ones where one person's voice can get lost in the crowd.

### History and Status

This project sprang up in February/March 2021 out of a dissatisfaction with the safety + privacy features of other Federated microblogging/social media applications, and a desire to implement something a little different.

It began as a solo project, and then picked up steam as more developers became interested and jumped on.

We made our first Alpha release in November 2021. We left Alpha and entered Beta in September/October 2024.

For a detailed view on what's implemented and what's not, and progress made towards stable release, please see the roadmap document.

* * *

Features
--------

### Mastodon API compatibility

The Mastodon API has become the de facto standard for client communication with federated servers, so GoToSocial has implemented and extended the API with custom functionality.

Though most apps that implement the Mastodon API should work, GoToSocial is tested and works reliably with beautiful apps like:

-   Tusky for Android
-   Pinafore in the browser
-   Feditext (beta) on iOS, iPadOS and macOS

If you've used Mastodon with a third-party app before, you'll find using GoToSocial a breeze.

### Granular post visibility settings

It's important that when you post something, you can choose who sees it.

GoToSocial offers public, unlisted/unlocked, followers-only, and direct posts (slide in DMs! -- with consent).

### Reply controls

GoToSocial lets you choose who can reply to your posts, via interaction policies. You can choose to let anyone reply to your posts, let only your friends reply, and more.

### Local-only posting

Sometimes you only want to talk to people you share an instance with. GoToSocial supports this via local-only posting, which ensures that your post stays on your instance only. (Local-only posting is currently dependent on client support.)

### RSS feed

GoToSocial lets you opt-in to exposing your profile as an RSS feed, so that people can subscribe to your public feed without missing a post.

### Rich text formatting

With GoToSocial, you can write posts using the popular, easy-to-use Markdown markup language, which lets you produce rich HTML posts with support for blockquotes, syntax-highlighted code blocks, lists, inline links, and more.

### Themes and custom CSS

Users can choose from a variety of fun themes for their profile, or even write their own custom CSS.

It's also easy for admins to add their own custom themes for users to choose from.

Show theme examples Blurple dark

* * *

Blurple light

* * *

Brutalist light

* * *

Brutalist dark

* * *

Ecks pee

* * *

Midnight trip Moonlight hunt

* * *

Rainforest

* * *

Soft

* * *

Solarized dark

* * *

Solarized light

* * *

Sunset

* * *

### Easy to run

GoToSocial uses only about 250-350MiB of RAM, and requires very little CPU power, so it plays nice with single-board computers, old laptops and tiny $5/month VPSes.

No external dependencies apart from a database (or just use SQLite!).

Simply download the binary + assets (or Docker container), tweak your configuration, and run.

### Safety + security features

-   Built-in, automatic support for secure HTTPS with Let's Encrypt.
-   Strict privacy enforcement for posts and strict blocking logic.
-   Import and export allow lists and deny lists. Subscribe to community-created block lists (think Ad blocker, but for federation!) (feature still in progress).
-   HTTP signature authentication: GoToSocial requires HTTP Signatures when sending and receiving messages, to ensure that your messages can't be tampered with and your identity can't be forged.

### Various federation modes

GoToSocial doesn't apply a one-size-fits-all approach to federation. Who your server federates with should be up to you.

-   'blocklist' mode (default): discover new servers; block servers you don't like.
-   'allowlist' mode (experimental); opt-in to federation with trusted servers.
-   'zero' federation mode; keep your server private (not yet implemented).

See the docs for more info.

### OIDC integration

GoToSocial supports OpenID Connect (OIDC) identity providers, meaning you can integrate it with existing user management services like Auth0, Gitlab, etc., or run your own and hook GtS up to that (we recommend Dex).

### Backend-first design

Unlike other federated server projects, GoToSocial doesn't include an integrated client front-end (i.e., a web app).

Instead, like Matrix.org's Synapse project, it provides a relatively generic backend server implementation, some beautiful static pages for profiles and posts, and a well-documented API.

On top of this API, web developers are encouraged to build any front-end implementation or mobile application that they wish, whether Tumblr-like, Facebook-like, Twitter-like, or something else entirely.

* * *

Known Issues
------------

Since GoToSocial is still in beta, there are plenty of bugs. We use GitHub issues to track these.

Since every ActivityPub server implementation has a slightly different interpretation of the protocol, some servers don't quite federate properly with GoToSocial yet. We're tracking these issues in this project. Eventually, we want to make sure that any implementation that can federate nicely with Mastodon should also be able to federate with GoToSocial.

* * *

Installing GoToSocial
---------------------

Check our getting started documentation! And have a peruse of our releases page.

### Supported Platforms

While we try to support a reasonable number of architectures and operating systems, it's not always possible to support a given platform due to library constraints or performance issues.

Platforms that we don't officially support _may_ still work, but we can't test or guarantee performance or stability.

This is the current status of support offered by GoToSocial for different platforms (if something is unlisted it means we haven't checked yet so we don't know):

OS

Architecture

Support level

Binary archive

Docker container

Linux

x86-64/AMD64 (64-bit)

🟢 Full

Yes

Yes

Linux

Armv8/ARM64 (64-bit)

🟢 Full

Yes

Yes

FreeBSD

x86-64/AMD64 (64-bit)

🟢 Full1

Yes

No

Linux

x86-32/i386 (32-bit)

🟡 Partial2

Yes

Yes

Linux

Armv7/ARM32 (32-bit)

🟡 Partial2

Yes

Yes

Linux

Armv6/ARM32 (32-bit)

🟡 Partial2

Yes

Yes

OpenBSD

Any

🔴 None3

No

No

#### FreeBSD

Mostly works, just a few issues with WASM SQLite; check release notes carefully when installing on FreeBSD. If running with Postgres you should have no issues.

#### 32-bit

GtS doesn't work well on 32-bit systems like i386, or Armv6/v7, mainly due to performance of media decoding.

We don't recommend running GtS on 32-bit, but you may have some success either turning off remote media processing altogether, or building a binary yourself with the totally **unsupported, experimental** nowasm tag.

For more guidance, check release notes when trying to install on 32-bit.

#### OpenBSD

Marked as unsupported due to performance issues (high memory usage when idle, crashes while processing media).

While we don't support running GtS on OpenBSD, you may have some success building a binary yourself with the totally **unsupported, experimental** nowasm tag.

### Stable Releases

We package our stable releases for both binary builds and Docker containers, so that you don't have to build from source yourself.

The Docker image `superseriousbusiness/gotosocial:latest` will always correspond to the latest stable release. Since this tag is overwritten frequently, you may want to use Docker CLI flag `--pull always` to ensure that you always have the most up-to-date image every time you run using this tag. Alternatively, run `docker pull superseriousbusiness/gotosocial:latest` manually just before use.

### Snapshot Releases

We also make snapshot builds every time something is merged into the main branch, so you can run from whatever code is on main if you wish.

Please be warned that you do so at your own risk! We try to keep main working properly, but we make absolutely no guarantees. Take a stable release instead if you're unsure.

#### Docker

To run from main using Docker, use the `snapshot` Docker tag. The Docker image `superseriousbusiness/gotosocial:snapshot` will always correspond to the latest commit on main. Since this tag is overwritten frequently, you may want to use Docker CLI flag `--pull always` to ensure that you always have the most up-to-date image every time you run using this tag. Alternatively, run `docker pull superseriousbusiness/gotosocial:snapshot` manually just before use.

#### Binary release .tar.gz

To run from main using a binary release, download the appropriate .tar.gz file for your architecture from our self-hosted Minio S3 repository.

Snapshot binary releases in the S3 bucket are keyed by Github commit hash. To get the latest one, sort by Last Modified, or check out the list of commits here, copy the SHA of the latest one, and paste it in the Minio console filter. Snapshot binary releases are expired after 28 days, to keep our hosting costs down.

### From Source

Instructions for building GoToSocial from source are in the CONTRIBUTING.md file.

### Third-party Packaging

Thank you so much to the cool people who have put time and energy into packaging GoToSocial!

These packages are not maintained by GoToSocial, so please direct questions and issues to the repository maintainers (and donate to them!).

You can also deploy your own instance of GoToSocial with the help of:

-   YunoHost GoToSocial Packaging by OniriCorpe.
-   Ansible Playbook (MASH): The playbook supports a many services, including GoToSocial. Documentation
-   GoToSocial Helm Chart by 0hlov3.

* * *

Contributing
------------

You would like to contribute to GtS? Great! ❤️❤️❤️ Check out the issues page to see if there's anything you intend to jump in on, and read the CONTRIBUTING.md file for guidelines and setting up your dev environment.

* * *

Contact
-------

For questions and comments, you can join our Matrix space at `#gotosocial-space:superseriousbusiness.org`. This is the quickest way to reach the devs. You can also mail admin@gotosocial.org.

For bugs and feature requests, please check to see if there's already an issue, and if not, open one or use one of the above channels to make a request (if you don't have a Github account).

* * *

Credits
-------

### Libraries

The following open source libraries, frameworks, and tools are used by GoToSocial, with gratitude 💕

-   buckket/go-blurhash; used for generating image blurhashes. GPL-3.0 License.
-   coreos/go-oidc; OIDC client library. Apache-2.0 License.
-   DmitriyVTitov/size; runtime model memory size calculations. MIT License.
-   Gin:
    -   gin-contrib/cors; Gin CORS middleware. MIT License.
    -   gin-contrib/gzip; Gin gzip middleware. MIT License.
    -   gin-contrib/sessions; Gin sessions middleware. MIT License.
    -   gin-gonic/gin; speedy router engine. MIT License.
-   google/uuid; UUID generation. BSD-3-Clause License.
-   Go-Playground:
    -   go-playground/form; funky form mapping support. MIT License.
    -   go-playground/validator; struct validation. MIT License.
-   Gorilla:
    -   gorilla/feeds; RSS + Atom feed generation. BSD-2-Clause License.
    -   gorilla/websocket; Websocket connectivity. BSD-2-Clause License.
-   go-swagger/go-swagger; Swagger OpenAPI spec generation. Apache-2.0 License.
-   gruf:
    -   gruf/go-bytesize; byte size parsing / formatting. MIT License.
    -   gruf/go-cache; LRU and TTL caches. MIT License.
    -   gruf/go-debug; debug build tag. MIT License.
    -   gruf/go-errors; context-like error w/ value wrapping MIT License.
    -   gruf/go-fastcopy; performant (buffer pooled) I/O copying MIT License.
    -   gruf/go-ffmpreg; embedded ffmpeg / ffprobe WASM binaries GPL-3.0 License.
    -   gruf/go-kv; log field formatting. MIT License.
    -   gruf/go-list; generic doubly linked list. MIT License.
    -   gruf/go-mutexes; safemutex & mutex map. MIT License.
    -   gruf/go-runners; synchronization utilities. MIT License.
    -   gruf/go-sched; task scheduler. MIT License.
    -   gruf/go-storage; file storage backend (local & s3). MIT License.
    -   gruf/go-structr; struct caching + queueing with automated indexing by field. MIT License.
-   jackc:
    -   jackc/pgconn; Postgres driver. MIT License.
    -   jackc/pgx; Postgres driver and toolkit. MIT License.
-   KimMachineGun/automemlimit; cgroups memory limit checking. MIT License.
-   k3a/html2text; HTML-to-text conversion. MIT License.
-   mcuadros/go-syslog; Syslog server library. MIT License.
-   microcosm-cc/bluemonday; HTML user-input sanitization. BSD-3-Clause License.
-   miekg/dns; DNS utilities. Go License.
-   minio/minio-go; S3 client SDK. Apache-2.0 License.
-   mitchellh/mapstructure; Go interface => struct parsing. MIT License.
-   modernc.org/sqlite; cgo-free port of SQLite. Other License.
-   mvdan.cc/xurls; URL parsing regular expressions. BSD-3-Clause License.
-   oklog/ulid; sequential, database-friendly ID generation. Apache-2.0 License.
-   open-telemetry/opentelemetry-go; OpenTelemetry API + SDK. Apache-2.0 License.
-   spf13:
    -   spf13/cobra; command-line tooling. Apache-2.0 License.
    -   spf13/viper; configuration management. Apache-2.0 License.
-   stretchr/testify; test framework. MIT License.
-   superseriousbusiness:
    -   superseriousbusiness/activity forked from go-fed/activity; Golang ActivityPub/ActivityStreams library. BSD-3-Clause License.
    -   superseriousbusiness/exif-terminator; EXIF data removal. GNU AGPL v3 LICENSE.
    -   superseriousbusiness/httpsig forked from go-fed/httpsig; secure HTTP signature library. BSD-3-Clause License.
    -   superseriousbusiness/oauth2 forked from go-oauth2/oauth2; OAuth server framework and token handling. MIT License.
-   tdewolff/minify; HTML minification for Markdown-submitted posts. MIT License.
-   uber-go/automaxprocs; GOMAXPROCS automation. MIT License.
-   ulule/limiter; http rate limit middleware. MIT License.
-   uptrace/bun; database ORM. BSD-2-Clause License.
-   wagslane/go-password-validator; password strength validation. MIT License.
-   yuin/goldmark; markdown parser. MIT License.

### Image Attribution and Licensing

Sloth logo by Anna Abramek.

  
The GoToSocial sloth mascot is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.

The Creative Commons Attribution-ShareAlike 4.0 International License license applies specifically to the following files and subdirectories of this repository:

-   sloth logo png
-   sloth logo webp
-   sloth logo svg
-   all default avatars

Under the terms of the license, you are free to:

-   Share — copy and redistribute the abovementioned material in any medium or format.
-   Adapt — remix, transform, and build upon the abovementioned material for any purpose, even commercially.

### Team

In alphabetical order (... and order of smell):

-   daenney
-   f0x \[donate with liberapay\]
-   kim \[check out my code @ codeberg, or find me @ @kim\]
-   tobi \[donate with liberapay\]
-   vyr

### Special Thanks

A huge thank you to CJ from go-fed: without your work, GoToSocial would not have been possible.

Thanks to everyone who has used GtS, opened an issue, suggested something, given funding, and otherwise encouraged or supported the project!

* * *

Sponsorship + Funding
---------------------

**Update regarding corporate sponsors: we are open to sponsorship arrangements with organizations that align with our values; see the conditions below**

### Crowdfunding

If you would like to donate to GoToSocial to keep the lights on during development, you can do so via our OpenCollective page!

If you prefer, we also have an account on LiberaPay! You can find that right here.

Crowdfunded donations to our OpenCollective and Liberapay accounts go towards paying the core team, paying server costs, and paying for GtS art, design, and other bits and bobs.

💕 🦥 💕 Thank you!

### Corporate Sponsorship

GoToSocial is open to sponsorship arrangements with organizations that align with our values. To show our thanks for your support, we will display your logo, website, and a short tagline on the repository and documentation. The following caveats apply to sponsorships:

1.  GoToSocial project direction will always remain 100% in the hands of the core team, and will never be dictated or influenced by corporate sponsorship. This is non-negotiable. Corporations are of course free of course to suggest / request features in the same manner as any other user, but they are not given special treatment.
    
2.  Corporate sponsorship is dependent on your organization meeting our team's ethical guidelines. These are not a concrete set of rules but instead boil down to "is your company causing harm?". For example, those in the defense industry need not apply as the simple answer to that question is, "yes!".
    

If after reading this you are still interested in supporting us, that is wonderful! Please reach out to us at admin@gotosocial.org to further discuss :)

### NLnet

Combined with the above crowdfunding sources, 2023 Alpha development of GoToSocial was funded by a 50,000 EUR grant from the NGI0 Entrust Fund, via NLnet. See here for more details. The successful grant application is archived here.

2024 Beta development of GoToSocial is being funded by an additional 50,000 EUR grant from the NGI0 Entrust Fund, via NLnet.

* * *

License
-------

GoToSocial is free software, licensed under the GNU AGPL v3 LICENSE. We encourage forking and changing the code, hacking around with it, and experimenting.

See here for the differences between AGPL versus GPL licensing, and here for FAQ's about GPL licenses, including the AGPL.

If you modify the GoToSocial source code, and run that modified code in a way that's accessible over a network, you _must_ make your modifications to the source code available following the guidelines of the license:

> \[I\]f you modify the Program, your modified version must prominently offer all users interacting with it remotely through a computer network (if your version supports such interaction) an opportunity to receive the Corresponding Source of your version by providing access to the Corresponding Source from a network server at no charge, through some standard or customary means of facilitating copying of software.

Copyright (C) GoToSocial Authors
