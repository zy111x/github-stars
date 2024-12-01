---
project: awesome-cloudflare-workers
stars: 518
description: 😎 Awesome Cloudflare Workers
---

Awesome Cloudflare Workers
==========================

A curated list of awesome articles & code for **Cloudflare Workers**. They are similar to\* browsers' Service Workers, running in a modified Chromium 'tab', but in the cloud--flare.

Inspired by the awesome list. (A bit different, since the CSV bookmark dump contains _many_ other links that didn't make the 'awesome' list.)

The "Emergency-management" links are for projects that help out with COVID-19 and other emgerinces. "Boss" links are top examples to help convince others (namely your boss or CTO).

Please use the Link Suggestion Form to add an URL to this list. To fix something, suggest a new catgory, tag, etc, reach me on Twitter.

Contents
--------

-   Official
-   Emergency-management
-   Boss
-   Article
-   GraphQL
-   Local-dev
-   Localization
-   Security
-   Tool
-   Msc
-   Related

Official
--------

-   Wrangler GitHub Action \[GitHub, deploy, Docker\] - Zero-config Cloudflare Workers deployment .
-   Official Gatsby deployment docs \[GatsbyJS, deploy, article\] - .
-   Wrangler: offiical CLI tool \[WASM, CLI, tool, Rust\] (brief tutorial) - Available via `npm` & `cargo`, can build & deploy JS, Rust, & C/C++ projects via templates.
-   Cloudflare's Worker Forum / BBS - Offical community forum.
-   Official Documentation - General docs, includes configurations, Cf KeyValue data store, and recipes.
-   Official Blog - Cloudflare's blog posts tagged 'worker'.

Emergency-management
--------------------

-   US COVID-19 APIs \[REST, GraphQL, CORVID19, JS\] (GraphQL Playground) - Scraped & hand-verifed Coronavirus data by county & states in USA.
-   API for COVID-19 stats in India \[REST, health, CORVID19, JS\] - Scrapes Ministry of Health and Family Welfare & unofficial sources.

Boss
----

-   Edgesearch \[search, WASM, Rust\] - Full-text search using, WebAssembly & Roaring Bitmaps.
-   placeholders.dev \[service, REST, JS\] (source) - Generate custom SVG placeholder images.
-   wilsonzlin/edgesearch \[REST, service, Rust\] - Full text search API using WebAssembly.
-   Axios uses CfWorkers \[article\] - "gradual rollout, perform A/B testing, and perform ESI-style page-stitching".
-   Built with Workers Showcase \[GraphQL, GatsbyJS, ReactJS, JS\] (source) - Websites & projects built with Cloudflare Workers.
-   Hosting Static Wordpress Sites \[WordPress, article, static, JS\] (YouTube) - WP2Static, then setup Workers project.

Article
-------

-   Kristian Freeman's interview at Sanity.io \[interview, video\] (YouTube) - How Cloudflare built their showcase site for Workers on Sanity.io and Gatsby… and Workers.
-   Use Cloudflare JS Workers to Deploy Your SSG \[setup, static, NextJS, JS\] - Complete tutorial: config at Cloudflare's admin dashboard to using KV to store versions..
-   Testing Cloudflare workers \[test, tool, JS\] - There is no extensive tutorial on how to test Cloudflare workers, so I wrote one.
-   Deploy a React App \[ReactJS, video, JS\] (source) - .
-   Elm CfWorkers example \[example, Elm\] - Elm on Cloudflare Workers with KV.
-   Official Serverless Quickstart \[Serverless\] - Guide to use the Serverless Plugin to deploy CfWorkers.
-   URL shortener with LavaRand \[route, app, JS\] (short blog post) - Url shortener built with Cloudflare Workers and LavaRand.
-   Diving into Technical SEO \[optmimize, SEO, TypeScript\] - Modifying incomming & outgoing requests, inject Hreflang tags,, redirects, etc.
-   FSharp tutorial \[app, F#\] - FSharp example: CRUD contact manager.
-   Serverless PWA using React \[ReactJS, JS\] (Cloudflare article builds up example script) - Terraform deploy srcipt included.
-   Supercharge Google Fonts \[optmimize, CDN, JS\] (author's live site) - Inlines font requests with CfWorker, then caches in browser.
-   Cryptocurrency API Gateway \[gatekeeper, route, TypeScript\] (blog.CloudFlare) - Mini http request routing, then gateway to multiple crypto API providers in 1 file.

GraphQL
-------

-   globally distributed Apollo GraphQL server \[JS\] (Playground demo) - Debugging, CORS, REST caching.
-   example Gatsby.js project \[ReactJS, JS\] - Blog served via GatsbyJS/React.
-   Hasura GraphQL Cloudflare Worker \[auth, JS\] - Example for Facebook-based authorization and GraphQL proxy queries with Hasura.
-   GraphQL on Edge Workers \[video, JS\] (video demo) - Workers GraphQL Gateway Example.

Local-dev
---------

-   Run Cloudflare Worker scripts locally \[tool, JS\] - Uses Docker, nice API, includes WASM build support.
-   TypeScript Types and mocks \[tool, template, TypeScript\] - Simple example and/or starting point for a CfWorker script using TypeScript, WebPack, & Jest.
-   cloudflare-workers-sandbox \[tool, test, JS\] - Sandbox environment suitable for running and testing your worker code locally.
-   Serverless framework Blueprint \[Serverless, tool, deploy, JS\] - Configure your `.env`, & `serverless deploy` away.
-   Codeship to automatically update your Cloudflare Workers \[deploy, example, JS\] - Automated Deployment.

Localization
------------

-   Serve cookie consent banner to EU visitors \[inject, app, JS\] (live demo) - Banner only shows if cllient is in EU.

Security
--------

-   Generate JWTs using the WebCrypto API \[JS\] - .
-   Abused CfWorker Used to Inject Korean SEO Spam \[article, SEO, inject\] - SEO spam showed only in Google search results.
-   score users' new passwords with zxcvbn \[app, REST, JS\] - RESTful endpoint for sanely scoring users' new passwords & querys Troy Hunt's haveibeenpwned collection of +5.1 billion breached accounts.
-   Set Google Analytics Client ID Cookie \[article, analytics, JS\] (article: Google Analytics ITP 2.1 Prevention ) - Fool Webkit's Intelligent Tracking Prevention,  HTTP Set-Cookie /snippet/.
-   Workaround Cloudflare's Anti-DDoS Protection \[tool, Rust\] - Workaround Cloudflare Anti-DDoS Protection.

Tool
----

-   Cloudflare Workers Time Tests \[test, JS\] - Example development environment with three patterns for benchmarking Cloudflare edge workers.
-   Cloudflare Workers <3 Create React App \[ReactJS, template, JS\] - .
-   CLI KV store tool \[CLI, KV, JS\] - .
-   Cf-Worker-Kit \[template, TypeScript\] - Library to make writing Cloudflare Workers way nicer .
-   Lazy Invoice PDF generator \[pdf, JS\] (source) - Simple online invoice tool.
-   GitCF \[route, JS\] (demo) - RawGit clone on CfWorkers..
-   cloudflare-worker-local \[test, JS\] - Test a Cloudflare Worker Locally.
-   Template: TypeScript & Jest by udacity \[template, TypeScript\] - Preconfigured starter template for building a Tslint strictly linted/formatted, Jest tested, Webpack built, TypeScript.
-   Local cloudflare-workers-kv \[KV, local-dev, JS\] - Workers KV in your local environment or within a CF Workers env. Chunks large values above 64kB.
-   KV interactive viewer \[CLI, JS\] - Nice CLI tool to explore keys & values of a Cloudflare account.
-   CF KV Client for .NET \[KV, .NET\] - .NET Standard 1.4-2.0.
-   Kv Web Explorer \[VueJS, KV, JS\] - Vue.js SPA for viewing Cloudflare KV data.
-   echo \[test, TypeScript\] - Echo back the request/response from worker point of view.

Msc
---

-   various @ nchlswhttkr/workers \[route, Slack, tool, JS\] - Rush/pnpm mono repo: GoLang interpreter, newsletter, WebHooks, +.
-   worker-haskell-template \[template, Haskell\] - Wrangler template for a Cloudflare Workers + Haskell (Asterius) project.
-   Assorted demos \[route, JS\] - Checks: if bot, moble, user-country, A/B testing, etc.
-   Google Analytics shield \[SEO, analytics, JS\] - Protect google analytics from being blocked by ad blockers.
-   app to flip images \[app, image, WASM, Rust\] - Uses Rust's wasm-pack-template.
-   go/WASM AMP-transformer \[AMP, WASM, GoLang\] - Go/WASM port of the AMP packager transform library.
-   Streaming Optimizations \[optmimize, cache, JS\] - Caches 3rd party scripts & dynamic HTML, inlines Google Fonts CSS. Non-streaming blocking version is avaiable.
-   simple integration to Cloudflare Workers APIs \[tool, deploy, JS\] - Deploy workers, get & remove routs, KV storage, etc.
-   Airtable Proxy Cloudflare Worker \[AirTable, REST, security, JS\] - Hides Airtable Base ID and API Key, Limit requests to specific methods and table, push updates via Travis-CL.
-   hashing service \[service, JS\] - JSON responce with SHA1, SHA286, SHA384, & SHA512 hash responce.
-   Preact Progressive Web App \[frontend, optmimize, Preact, JS\] (Preact worker demo) - Example PWA created by preact-cli.
-   Thin wrapper for Cloudflare Workers KV \[KV, JS\] - Get, put, & delete for Cloudflare KV.
-   CI/CD pipeline for CfWorkers using Serverless in Azure \[article, CI/CD, Serverless\] - Walkthough for a code pipeline with Serverless Framework.
-   CI/CD with Azure \[deploy, JS\] - .
-   DNS lookup and dig app \[app, frontend, JS\] (dnsjson.com - live app) - .

Related
-------

-   Awesome Service Workers \[JS\] - Cf Service Workers are based on browser SW.

Also by Author
--------------

-   tomByrer/awesome-awesome-covid19 - meta-lists around the not-awesome 2019 novel Coronavirus

License
-------

#### Attribution-ShareAlike 4.0 International

You are free to share & alter this, as long as you give credit & keep same license.
