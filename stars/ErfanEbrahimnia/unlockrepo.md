---
project: unlockrepo
stars: 18
description: Automate your Github repository access
url: https://github.com/ErfanEbrahimnia/unlockrepo
---

🔐 UnlockRepo
=============

A simple tool to automate and monetize granting access to your private repositories after a purchase is made on Gumroad.

Live demo

👨‍💻 Tech Stack
----------------

UnlockRepo is built using:

-   Next.js 14
-   shadcn-ui
-   TailwindCSS
-   Lucia
-   Kysely
-   @t3-oss/env-nextjs
-   Hosted on Vercel

🛠️ Self-Hosting UnlockRepo
---------------------------

Deploying UnlockRepo is straightforward:

1.  Clone this repository.
2.  Deploy to Vercel using `npx vercel deploy --prod`.
3.  Set up a new Postgres database.
4.  Register a Gumroad OAuth application.
5.  In Gumroad, add a new custom text field titled "Github Username" (make sure it matches this text exactly).
6.  Register a GitHub OAuth application.
7.  Refer to the .env.example file and add the environment keys in Vercel.

⚙️ Running Locally
------------------

To run UnlockRepo locally, make sure you have Node.js > 18.20.4 and Postgres installed.

1.  Clone this repository.
2.  Run `npm install` to install dependencies.
3.  Copy .env.example, rename it to `.env.local`, and update the values as needed.
4.  Run `npm run dev`.

* * *

Feel free to reach out at erfan@nextjsweekly.com or on Twitter with any questions or feedback. Hope you find this useful! 😊
