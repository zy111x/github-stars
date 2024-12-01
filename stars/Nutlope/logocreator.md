---
project: logocreator
stars: 1315
description: A free + OSS logo generator powered by Flux on Together AI
url: https://github.com/Nutlope/logocreator
---

AI Logo Generator
=================

An open source logo generator – create professional logos in seconds with customizable styles.

Tech stack
----------

-   Flux Pro 1.1 on Together AI for logo generation
-   Next.js with TypeScript for the app framework
-   Shadcn for UI components & Tailwind for styling
-   Upstash Redis for rate limiting
-   Clerk for authentication
-   Plausible & Helicone for analytics & observability

Cloning & running
-----------------

1.  Clone the repo: `git clone https://github.com/Nutlope/logocreator`
2.  Create a `.env` file and add your Together AI API key: `TOGETHER_API_KEY=`
3.  Run `npm install` and `npm run dev` to install dependencies and run locally.

Future Tasks
------------

-   Create a dashboard with a user's logo history
-   Support SVG exports instead of just PNG
-   Add support for additional styles
-   Add a dropdown for image size (can do up to 1440x1440)
-   Show approximate price when using your own Together AI key
-   Allow the ability to upload a reference logo (use vision model to read it)
-   Redesign popular brand’s logos with my logo maker and have it in a showcase
