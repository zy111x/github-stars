---
project: badgen.net
stars: 1462
description: Fast badge service
---

Badgen Service
==============

Home of badgen.net, fast badge generating service.

The Badgen Story
----------------

> That's a service, that's a library, hooorey! - @tunnckoCore

> Finally something to replace http://shields.io - @EGOIST

> Epic work on Badgen! Porting the @dependabot badges over to it now. ⚡️ - @greybaker

The badgen library was born as an exploration of "is it possible to generate badge SVG markup directly (without using pdfkit/canvas/puppeteer to measure text width)?". The result is better than I expected, Width of Verdana (the de-facto font for badges) text can be calculated precisely with a prebuilt char-width-table, even no need to worry about kerning 🤯

Then, logically, Badgen Service was born. I had a good time with shields.io, but as time goes by Shields gets slower, leaves more and more broken badges in READMEs. Badgen is trying to be a fast alternative with simplicity and flexibility. Its codebase is simple (**2K LoCs** vs Shields' 22K LoCs), well structured and fun to develop - it is pretty easy to add badge(s) for new service(s).

In the beginning, I was considering both Vercel and Google Cloud Functions. Then Vercel announced Edge Network on the same day as badgen.now.sh (the PoC of Badgen Service)'s reveal, what a fate! Cloudflare powered Vercel Edge Network is a perfect choice for such service, caching and scalability in simplicity. Badgen is the fastest possible badge generating service out there. It's fast, it's reliable, it's globally distributed and cached, thanks to Vercel.

At the time of badgen.now.sh's reveal, it had only four live badges as demonstrations. Since then, thanks to awesome people's help, Badgen keeps getting better at a fast pace. Welcome to join us, let's build the best badge service in the universe 🔥

Anatomy
-------

-   Written in TypeScript
-   Using badgen library to generate svg on the fly
-   Two visual styles
    -   https://badgen.net - classic style badges
    -   https://flat.badgen.net - flat & square style badges
-   Two badge types
    -   static badge - URL defined badge (label, status, color)
    -   live badge - Show live status from 3rd party services
-   Builtin Icons & External Icon Support
    -   see badgen-icons
-   Docker image amio/badgen

Developing
----------

**start dev server**

```
npm run dev
```

**start prod server**

```
npm run build && npm start
```

**run with docker image**

```
docker run -p 3000:3000 amio/badgen
```

### Add Live Badge

If a service you wish to have is still missing here, we welcome new contributions. Basically, you need to add a file in `api/[name-of-service].ts` and that's it. Take /crates as an example:

-   pages/api/crates.ts - main function for crates badges
-   libs/badge-list2.ts - contains index of all live badges

To ensure that your addition is working correctly, start the development server with `npm run dev`.

**NOTES**

-   You can create live badge without touching badgen.net's code. Checkout docs for /runkit or /https.
    
-   The /runkit support would be super handy for prototyping a new live badge.
    

### Add Icon

You can contribute icons to badgen-icons. Please make sure new icon is optimized using svgomg.

Tracking Policy
---------------

Badgen use Sentry to collect errors for improving service, use Google Analytics on doc pages (home, /github, /packagephobia, etc.) to understand overall usage.

Badgen do not collect any identifying information.

Environments
------------

Supported environment variables for managing a Badgen instance.

-   `GITHUB_TOKENS` - Comma delimited list of Github Tokens. Required for Github Badges
-   `GITHUB_API` - Custom Github API endpoint. e.g., `https://github.mycompany.com/api/v3`
-   `GITHUB_API_GRAPHQL` - Custom Github GraphQL API endpoint. e.g., `https://github.mycompany.com/api/graphql`
-   `NPM_REGISTRY` - Custom NPM registry endpoint
-   `SENTRY_DSN` - Sentry Error Monitoring Data Source Name
-   `GA_MEASUREMENT_ID` - Google Analytics Measurement ID

Contributors
------------

Thanks to our contributors 🎉👏

Support Badgen
--------------

We are on OpenCollective https://opencollective.com/badgen

Support this project by donation, help Badgen continue and evolving!

\[Become a backer\]

Sponsors
--------
