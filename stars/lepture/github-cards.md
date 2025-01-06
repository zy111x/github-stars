---
project: github-cards
stars: 2132
description: The unofficial GitHub Cards. Card for your GitHub profile, card for your GitHub repositories.
url: https://github.com/lepture/github-cards
---

Unofficial GitHub Cards
=======================

Card for your GitHub profile, card for your GitHub repositories.

**New theme available**

Usage
-----

The cards are hosted via GitHub Pages.

Visit card generator: http://lab.lepture.com/github-cards/

### widget.js

You can include the `widget.js` script, it will create the embed iframes for you.

Example of user card:

<div class\="github-card" data-user\="lepture"\></div\>
<script src\="https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js"\></script\>

Example of repo card:

<div class\="github-card" data-user\="lepture" data-repo\="github-cards"\></div\>
<script src\="https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js"\></script\>

Data parameters:

-   user: GitHub username
-   repo: GitHub repository name
-   width: Embed width you want, default is 400
-   height: Embed height you want, default is 200
-   theme: GitHub card theme, default is `default`
-   target: If you want to open links in new tab, set it to `blank`
-   client\_id: Your app client\_id, optional
-   client\_secret: Your app client\_secret, optional

You can also define in meta tags:

<meta name\="gc:base" content\="http://lab.lepture.com/github-cards/"\>
<meta name\="gc:theme" content\="medium"\>
<meta name\="gc:client-id" content\="client id string"\>
<meta name\="gc:client-secret" content\="client secret string"\>

Limitation
----------

There are some limitations for github cards.

1.  GitHub API rate limitation
2.  No interaction. You can't actually follow someone

SSL support
-----------

GitHub Cards is available on jsdelivr now. Use widget hosted on jsdelivr:

<div class\="github-card" data-user\="lepture" data-repo\="github-cards"\></div\>
<script src\="https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js"\></script\>

Contribution
------------

This project is under the BSD License.
