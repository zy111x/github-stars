---
project: core
stars: 1021
description: Build full-stack applications with Nuxt on CloudFlare, with zero configuration.
url: https://github.com/nuxt-hub/core
---

Full-Stack Nuxt on Cloudflare, with Zero Config ✨
=================================================

Build and deploy powerful full-stack Nuxt applications on your Cloudflare account, with zero configuration.

NuxtHub supercharges your Nuxt development workflow so you can focus on shipping features.

✨ Key Features
--------------

NuxtHub provides optional features to help you build full-stack applications:

-   **AI Models** & **Vector database** to run machine learning models and build full-stack AI-powered apps.
-   **Files storage** to store static assets, such as images, videos and more
-   **Caching system** for your Nuxt pages, API routes or server functions
-   **SQL database** to store your application's data with automatic migrations
-   **Key-Value** to store JSON data accessible globally with low-latency
-   **Browser Rendering** to take screenshots, generate PDFs, craw web pages using a headless browser on the edge.
-   **Open API** to generate your API documentation with Scalar
-   **Remote Storage** to connect to your project's resources from your local environment, allowing you to work with your remote storage as if it was local with `npx nuxi dev --remote`.

On top of the full-stack features, you can **deploy your Nuxt application** to your Cloudflare account with `npx nuxthub deploy` or with the NuxtHub Admin, you can also self-host your application and create the resources manually.

Read more on https://hub.nuxt.com

📚 Resources
------------

-   NuxtHub Website
-   NuxtHub Admin
-   NuxtHub CLI
-   NuxtHub Templates

🚀 Quickstart
-------------

Head over to our Getting Started guide to learn more.

Duplicate our `nuxt-hub/hello-edge` template or create a new NuxtHub project with:

npx nuxthub init my-app
cd my-app
npm run dev

Open http://localhost:3000 with your browser.

Deploy your app to production with:

npx nuxthub deploy

nuxthub-deploy.mp4

Learn more on how to deploy a Nuxt app with NuxtHub.

🤝 Community
------------

-   💡 Feature request: Suggest an idea or improvement.
-   🐞 Bug report: Create a report to help us improve the platform.
-   🏞️ New Template: Share a template you made based on NuxtHub.

💚 Contributing
---------------

# Install dependencies
pnpm i

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Run Vitest
pnpm test
pnpm test:watch

📄 License
----------

Apache 2.0
