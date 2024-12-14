---
project: Sink
stars: 3152
description: ⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.
url: https://github.com/ccbikai/Sink
---

⚡ Sink
======

**A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.**

* * *

✨ Features
----------

-   **URL Shortening:** Compress your URLs to their minimal length.
-   **Analytics:** Monitor link analytics and gather insightful statistics.
-   **Serverless:** Deploy without the need for traditional servers.
-   **Customizable Slug:** Support for personalized slugs.
-   **🪄 AI Slug:** Leverage AI to generate slugs.
-   **Link Expiration:** Set expiration dates for your links.

🪧 Demo
-------

Experience the demo at Sink.Cool. Log in using the Site Token below:

Site Token: SinkCool

**Screenshots**

🧱 Technologies Used
--------------------

-   **Framework**: Nuxt
-   **Database**: Cloudflare Workers KV
-   **Analytics Engine**: Cloudflare Workers Analytics Engine
-   **UI Components**: Shadcn-vue
-   **Styling:** Tailwind CSS
-   **Deployment**: Cloudflare

🚗 Roadmap \[WIP\]
------------------

We welcome your contributions and PRs.

-   Browser Extension - Sink Tool
-   Raycast Extension - Raycast-Sink
-   Apple Shortcuts - Sink Shortcuts
-   Enhanced Link Management (with Cloudflare D1)
-   Analytics Enhancements (Support for merging filter conditions)
-   Dashboard Performance Optimization (Infinite loading)
-   Units Test
-   Support for Other Deployment Platforms

🏗️ Deployment
--------------

> Video tutorial: Watch here

1.  Fork the repository to your GitHub account.
    
2.  Create a project in Cloudflare Pages.
    
3.  Select the `Sink` repository and choose the `Nuxt.js` preset.
    
4.  Configure the following environment variables:
    
    -   `NUXT_SITE_TOKEN`: Must be longer than **8** characters. This token grants access to your dashboard.
    -   `NUXT_CF_ACCOUNT_ID`: Locate your account ID.
    -   `NUXT_CF_API_TOKEN`: Create a Cloudflare API token with at least `Account.Account Analytics` permissions. See reference.
5.  Save and deploy the project.
    
6.  Cancel the deployment, then navigate to **Settings** -> **Bindings** -> **Add**:
    
    -   **KV Namespace**: Bind the variable name `KV` to a KV namespace (create a new one under **Workers & Pages** -> **KV**).
    -   **Workers AI** (_Optional_): Bind the variable name `AI` to the Workers AI Catalog.
    -   **Analytics Engine**:
        -   In **Workers & Pages**, go to **Account details** on the right side, find `Analytics Engine`, and click `Set up` to enable the free version.
        -   Return to **Settings** -> **Bindings** -> **Add** and select **Analytics engine**.
        -   Bind the variable name `ANALYTICS` to the `sink` dataset.
7.  Redeploy the project.
    

⚒️ Configuration
----------------

Configuration Docs

🔌 API
------

API Docs

🙋🏻 FAQs
---------

FAQs

💖 Credits
----------

1.  **Cloudflare**
2.  **NuxtHub**
3.  **Astroship**

☕ Sponsor
---------

1.  Follow Me on X(Twitter).
2.  Become a sponsor to on GitHub.
