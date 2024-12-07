---
project: openpanel
stars: 3194
description: All the goodies from both Mixpanel and Plausible combined into one tool.
url: https://github.com/Openpanel-dev/openpanel
---

**Openpanel**
=============

An open-source alternative to Mixpanel  
  
Website · Docs · Sign in · Discord · X/Twitter ·

  
  

Openpanel is a simple analytics tool for logging events on web, apps and backend. We have tried to combine Mixpanel and Plausible in the same product.

-   Visualize your data
    -   **Charts**
        -   Funnels
        -   Line
        -   Bar
        -   Pie
        -   Histogram
        -   Maps
    -   **Breakdown** on all properties
    -   **Advanced filters** on all properties
    -   Create **beautiful dashboards** with your charts
    -   **Access all your events**
    -   Access all your visitors and there history
-   Own Your Own Data
-   GDPR Compliant
-   Cloud or Self-Hosting
-   Real-Time Events
-   No cookies!
-   Privacy friendly
-   Cost-Effective
-   Predictable pricing
-   First Class React Native Support
-   Powerful Export API

Disclaimer
----------

> Hey folks 👋🏻 Just a friendly heads-up: we're still in the early stages of this project. We have migrated from pages to app dir and made some major changes during the development of Openpanel, so everything is not perfect.

Stack
-----

-   **Nextjs** - the dashboard
-   **Fastify** - event api
-   **Postgres** - storing basic information
-   **Clickhouse** - storing events
-   **Redis** - cache layer, pub/sub and queue

### More

-   Tailwind
-   Shadcn
-   tRPC - will probably migrate this to server actions
-   Clerk - for authentication

Self-hosting
------------

OpenPanel can be self-hosted and we have tried to make it as simple as possible.

You can find the how to here

**Give us a star if you like it!**

Development
-----------

pnpm dock:up
pnpm codegen
pnpm migrate:deploy # once to setup the db
pnpm dev
