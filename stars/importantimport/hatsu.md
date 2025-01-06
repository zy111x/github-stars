---
project: hatsu
stars: 166
description: 🩵 Self-hosted & Fully-automated ActivityPub Bridge for Static Sites.
url: https://github.com/importantimport/hatsu
---

Hatsu「初」
========

Self-hosted & Fully-automated ActivityPub Bridge for Static Sites.

About
-----

Hatsu is a self-hosted bridge that interacts with Fediverse on behalf of your static site.

Normally it can do all the:

-   When a Fediverse user searches for a user of your site (`@catch-all@example.com`), redirects to the corresponding user of the Hatsu instance.
-   When a Fediverse user searches for your site URL (`https://example.com/hello-world`), redirects to the corresponding post on the Hatsu instance.
-   Accepts follow requests and pushes new posts to the follower's homepage as they become available.
-   Receive replies from Fediverse users and backfeed to your static site.

Best of all, these are fully automated! Just set it up once and you won't need to do anything else.

### Features

-   Self hostable, easy to deploy.
    -   Comes with Docker.
-   Works with any SSGs and most static hosting services.
    -   Use Feed instead of Webmention to check updates.
    -   It is not required that the site support microformats2.
    -   Redirection in many ways, including purely static files.
    -   Backfeed in many ways. \[WIP\]
-   High performance.
    -   Backend is written in Rust.
    -   Supports aarch64.

### Installation

Read the documentation to get started.

### Fediverse compatibility

Hatsu uses the same library as Lemmy, Activitypub-Federation, so it should behave similarly in practice.

In addition to this, Hatsu is also enabled:

-   signed\_fetch\_actor
    -   Hatsu performs an HTTP signature on each request. This ensures compatibility with Mastodon instances with secure mode enabled and GoToSocial.
-   http\_signature\_compat
    -   Like Lemmy, Hatsu enables this by default for Pleroma compatibility.

If you're not sure whether it's a Hatsu or Activitypub-Federation compatibility issue, you should open new issue in Hatsu first.

License
-------

Licensed under AGPLv3.

### Third Party Licenses

This project partially copies code from the following projects:

Project

License

LemmyNet/activitypub-federation-rust

AGPL-3.0

LemmyNet/lemmy

AGPL-3.0
