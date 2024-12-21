---
project: cut-it
stars: 183
description: Link shortener built using Next.js App Router, Server Actions, Drizzle ORM, Turso and styled with shadcn ui
url: https://github.com/mehrabmp/cut-it
---

Cut It
======

Cut It is a free open source tool to generate short links . With a user-friendly interface and robust functionality, Cut It makes it easy to share and manage shortened links.

This project inspired by Dub.

Features
--------

-   **URL Shortening:** Easily shorten long URLs with a click.
-   **Customizable URLs:** Customize the shortened URLs to your preference.
-   **User-Friendly Interface:** Intuitive and easy-to-use interface for quick link management.
-   **Analytics:** Track link analytics and statistics. (soon)

Technologies Used
-----------------

-   **Framework**: Next.js
-   **Database**: Turso
-   **ORM**: Drizzle
-   **Authentication**: NextAuth.js
-   **Redis**: Upstash
-   **Styling:** Tailwind CSS
-   **UI Components**: Shadcn-ui
-   **Deployment**: Vercel

Running Locally
---------------

1.  Clone the repository
    
    git clone https://github.com/mehrabmp/cut-it
    
2.  Install dependencies using pnpm
    
    pnpm install
    
3.  Copy the `.env.example` to `.env` and update the variables.
    
    cp .env.example .env
    
4.  Start the development server
    
    pnpm run dev
    
5.  Push the database schema
    
    pnpm run db:push
    

How do I deploy this?
---------------------

Follow the deployment guides for Vercel and Docker for more information.

Contributing
------------

Contributions are welcome! Please open an issue if you have any questions or suggestions. Your contributions will be acknowledged. See the contributing guide for more information.

License
-------

Licensed under the MIT License. Check the LICENSE file for details.
