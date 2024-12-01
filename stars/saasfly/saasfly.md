---
project: saasfly
stars: 2016
description: Your Next SaaS Template or Boilerplate ! A magic trip start with `bun create saasfly` . The more stars, the more surprises
url: https://github.com/saasfly/saasfly
---

Saasfly  

==========

  

An easy-to-use and enterprise-grade Next.js boilerplate.

You don't need to buy templates anymore; Saasfly provides a complete, open-source solution for building SaaS applications quickly and easily.

> **Nextify** provides a complete Enterprise SaaS solution. Contact us at contact@nextify.ltd if you're interested in discussing your project, or if you'd simply like to have a conversation with us, please feel free to reach out.

> ❤️ We provide **free technical support and deployment services to non-profit organizations**.
> 
> 🙌 All profits obtained from our open source projects will be **entirely dedicated to supporting open source initiatives and charitable causes**.

⚡ Live Demo
-----------

Try it out for yourself!

Demo Server (Location: Washington - USA): https://show.saasfly.io

See more documentation at https://document.saasfly.io

🌟 Star History
---------------

Sponsors
--------

Add your logo here

🚀 Getting Started
------------------

### 🖱 One Click Template

### 📋 Prerequisites

Before you start, make sure you have the following installed:

1.  Bun & Node.js & Git
    
    1.  Linux
    
      curl -sL https://gist.github.com/tianzx/874662fb204d32390bc2f2e9e4d2df0a/raw -o ~/downloaded\_script.sh && chmod +x ~/downloaded\_script.sh && source ~/downloaded\_script.sh
    
    1.  MacOS
    
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      brew install git
      brew install oven-sh/bun/bun
      brew install nvm
    
2.  PostgreSQL
    
    1.  You can use Vercel Postgres or a local PostgreSQL server(add POSTGRES\_URL env in .env.local)
        
           POSTGRES\_URL = ''
        

### Installation

To get started with this boilerplate, we offer two options:

1.  Use the `bun create` command(🌟Strongly recommend🌟):

bun create saasfly 

1.  Manually clone the repository:

git clone https://github.com/saasfly/saasfly.git
cd saasfly
bun install

### Setup

Follow these steps to set up your project:

1.  Set up the environment variables:

cp .env.example .env.local
// (you must have a database prepared before running this command)
bun db:push

1.  Run the development server:

bun run dev:web

1.  Open http://localhost:3000 in your browser to see the result.
    
2.  (Optional alpha)`bun run tailwind-config-viewer` Open http://localhost:3333 in your browser to see your Tailwind CSS configuration
    

🥺 Project Roadmap
------------------

1.  Admin Dashboard Page (in alpha !!!) 2. only provide static page now and we plan to integrate with headless arch 3. You can provide your admin account and change **ADMIN\_EMAIL="admin@saasfly.io,root@saasfly.io"** in .env.local and access host:port/admin/dashboard 4. Based on security concerns, we will not provide online demos for the time being.
2.  Consider integrating Payload CMS.

⭐ Features
----------

### 🐭 Frameworks

-   **Next.js** - The React Framework for the Web (with **App Directory**)
-   **NextAuth.js** - Authentication for Next.js
-   **Kysely** - The type-safe SQL query builder for TypeScript
-   **Prisma** - Next-generation ORM for Node.js and TypeScript, used as a schema management tool
-   **React-email** - A React renderer for creating beautiful emails using React components

### 🐮 Platforms

-   **Vercel** – Deploy your Next.js app with ease
-   **Stripe** – Payment processing for internet businesses
-   **Resend** – Email marketing platform for developers

### 🐯 Enterprise Features

-   **i18n** - Support for internationalization
-   **SEO** - Search engine optimization
-   **MonoRepo** - Monorepo for better code management
-   **T3 Env** - Manage your environment variables with ease

### 🐰 Data Fetching

-   **trpc** – End-to-end typesafe APIs made easy
-   **tanstack/react-query** – Hooks for fetching, caching and updating asynchronous data in React

### 🐲 Global State Management

-   **Zustand** – Small, fast and scalable state management for React

### 🐒 UI

-   **Tailwind CSS** – Utility-first CSS framework for rapid UI development
-   **Shadcn/ui** – Re-usable components built using Radix UI and Tailwind CSS
-   **Framer Motion** – Motion library for React to animate components with ease
-   **Lucide** – Beautifully simple, pixel-perfect icons
-   **next/font** – Optimize custom fonts and remove external network requests for improved performance

### 🐴 Code Quality

-   **TypeScript** – Static type checker for end-to-end type safety
-   **Prettier** – Opinionated code formatter for consistent code style
-   **ESLint** – Pluggable linter for Next.js and TypeScript
-   **Husky** – Git hooks made easy

### 🐑 Performance

-   **Vercel Analytics** – Real-time performance metrics for your Next.js app
-   **bun.sh** – npm alternative for faster and more reliable package management

### 🐘 Database

-   **PostgreSQL** – The world's most advanced open source database

📦 Apps and Packages
--------------------

-   `web`: The main Next.js application
-   `ui`: Shared UI components
-   `db`: Database schema and utilities
-   `auth`: Authentication utilities
-   `email`: Email templates and utilities

📜 License
----------

This project is licensed under the MIT License. For more information, see the LICENSE file.

🙏 Credits
----------

This project was inspired by shadcn's Taxonomy and t3-oss's create-t3-turbo.

👨‍💻 Contributors
------------------

Made with contrib.rocks.
