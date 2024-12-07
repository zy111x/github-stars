---
project: cult-directory-template
stars: 469
description: A full stack Next.js, Shadcn, and Supabase directory template. Build your startup directory effortlessly with features like user authentication, product filters, and customizable themes. Advanced admin perks and AI magic.
url: https://github.com/nolly-studio/cult-directory-template
---

Cult Directory Template
=======================

A full stack nextjs + shadcn + supabase template

  

  

### Table of contents

-   Onboarding Video
-   Features
-   Additional Templates
-   Supabase Setup
-   Develop
-   Adding Products to the Directory
-   Admin Setup
-   Accessing the Admin Dashboard
-   Customize
-   Deploy
-   Other Open Source Work

YouTube Onboarding Video
------------------------

#### This video walks you through how to set up the directory app from scratch. We will:

-   Setup a new Supabase project using the CLI
-   Link it to our app
-   Setup environment variables
-   Run the DB migrations to configure the schema
-   Configure authentication
-   Register an admin user (Paid)
-   Run a 3-stage AI enrichment script to populate our directory (Paid)
-   Review the admin panel (Paid)

Features
--------

Feature

Free Version

Paid Version

Next.js v13

✅

✅

/app Directory

✅

✅

Tailwind CSS

✅

✅

Shadcn Components

✅

✅

Vercel AI SDK

✅

✅

Supabase Integration

✅

✅

Mobile Responsive

✅

✅

Submit Product RSC

✅

✅

Dark & Light Mode

✅

✅

User Authentication

✅

✅

Product Filters

✅

✅

Custom Color Themes

✅

✅

Free Updates

✅

✅

Admin Dashboard

❌

✅

Admin Analytics

❌

✅

Bulk AI Data Enrichment

❌

✅

License

GPL-2.0

Commercial

 

 

 

Pricing

Free

**$119**

✨ Join the Cult ✨

### Additional Templates Included with Paid

When you join the cult, you get lifetime access to a variety of other premium templates.

Template

Description

Features

Link

Travel Stash

Offline-first travel app with real-time sync and PWA support, designed for managing and planning travel goals.

Offline Capabilities, Real-time Sync, PWA Support, Next.js, Tailwind CSS, Claude AI, RXDB Progressive Web App

Travel Stash

Cult SEO

Tool for crawling websites, grading SEO, and providing AI-driven improvements.

RSC Web Scraping, Web Vitals, Structured AI output, Next.js, Tailwind CSS, Claude AI

Cult SEO

Manifest

Full-stack template for shipping AI apps with vector embeddings and RAG retrieval.

Vector embeddings, RAG retrieval, Supabase, Next.js, Tailwind CSS, Open AI

Manifest

Landing Page

Design subscription landing page.

Animation, Unique navigation, Next.js, Tailwind CSS

Landing Page

Backend

Various backend templates for different needs.

Various backend solutions and snippets for different use cases.

Backend

Each of these templates is full designed and production ready like cult-directory. The cult stack is Next.js, Shadcn, Tailwind CSS, Supabase, and the vercel ai sdk.

Designed to help you build and launch well designed startups fast.

Getting Started
===============

> Watch the Onboarding Video to spin up quickly

\## Supabase

### Install the Supabase CLI

-   **Mac:** `brew install supabase/tap/supabase`
    
-   **Windows:**
    
    scoop bucket add supabase https://github.com/supabase/scoop\-bucket.git
    scoop install supabase
    
-   **Linux:** `brew install supabase/tap/supabase`
    
-   **NPM/Bun:** `npx supabase <command>`
    

  

### Create a Supabase project

1.  Create a Supabase project at Supabase Dashboard, or via the CLI:
    
    npx supabase projects create -i "your-saas-app"
    
    Your Org ID can be found in the URL after selecting an org.
    

  

### Link your CLI to the project

1.  Link your CLI to the project:
    
    npx supabase init
    npx supabase link
    
    Select the project you just created.
    

  

### Store Supabase URL & public anon key in `.env.local` for Next.js

1.  Store Supabase URL & public anon key in `.env.local` for Next.js:
    
    NEXT\_PUBLIC\_SUPABASE\_URL=<api-url\>
    NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY=<anon-key\>
    
    You can get the project API URL and anonymous key from the API settings page.
    

  

### Setup DB schema

1.  Setup DB schema:
    
    > This will run all of the migrations located in the `supabase/migrations` directory
    
    supabase db push
    

Ensure your `.env` variables are configured correctly
-----------------------------------------------------

cp .env.local.example .env.local

# Example Supabase Config
NEXT\_PUBLIC\_SUPABASE\_URL="https://examplesqnwerasdfaser.supabase.co"
SUPABASE\_PROJECT\_ID="examplesqnwerasdfaser"
NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.."

Develop
-------

### Install dependencies and run the Next.js client

In a separate terminal, run the following commands:

pnpm i

pnpm run dev

Open http://localhost:3000 in your browser.

#### Recommended Turn off confirm email

> The default smtp rate limiting for supabase is very low now.

Providers Email - API settings page.

Adding Products to the Directory
--------------------------------

To add new products to your directory, simply visit the submission page:

Submit Products

### Congratulations!

You now have a fully seeded database with all the data you need to start building your own cult directory.

Admin Setup
===========

> Paid version only

✨ Join the Cult ✨

### Sign up with the email you want for your admin account

#### Recommended Turn off confirm email

> The default smtp rate limiting for supabase is very low now.

-   The rate was lowered to 4/hour for the built in SMTP service.
-   Too low for production. You need to use your own SMTP service.

Providers Email - API settings page.

If you need email confirmation follow follow these guides

-   How to Increase Supabase signup rate limit (3000 free emails / mo)
-   How to configure Supabase to send emails from your domain

Login

### Copy your newly created users UID

Retrieve from the auth users table API settings page.

In `.env.local` copy the `SUPABASE_ADMIN_ID` variable and paste it into the SQL Editor.

### Assigning Admin Rights

Go to the SQL Editor in Supabase API settings page.

UPDATE auth.users
SET raw\_app\_meta\_data \= jsonb\_set(
    coalesce(raw\_app\_meta\_data, '{}'),
    '{claims\_admin}',
    'true'::jsonb
)
WHERE id \= 'USER\_UUID';

To assign admin rights to a user, run the following SQL script. Replace `'USER_UUID'` with the same user ID you copied from the auth users table.

### 3-Stage AI Bulk Enrichment Scripts

> The seed script is pretty complex. There are overview docs 0. `supabase/seed/src/README.md` And docs for each stage:

1.  `supabase/seed/src/stage-1-crawl/readme.md`
2.  `supabase/seed/src/stage-2-enrich/readme.md`
3.  `supabase/seed/src/stage-3-seed/readme.md`

I've tried to make it as cheap as possible to run. Depending on your API support level you can increase the performance of the scripts by playing with the concurrency and timeout values.

#### Option 1

You need either the `ANTHROPIC_API_KEY` or an `ANTHROPIC_API_KEY` in your `.env.local` file to run `supabase/seed/src/stage-2-enrich`.

1.  If you have an API key, copy it to your `.env.local` file.
    
2.  Optionally edit the `SEED_URLS` variable in `supabase/seed/src/main.ts` to include the URLs you want to scrape and enrich.
    
3.  Run the script:
    
    pnpm run enrich-seed
    

#### Option 2

If you don't have an API key, I've included a pre-enriched data set of a previous run. You can see this in `supabase/seed/src/stage-2-enrich/__data__/enriched-20240611T210738.json`.

To use this data set instead of enriching using your keys:

1.  Open the file at `supabase/seed/src/main.ts`.
    
2.  Comment out lines `104 - 110`:
    
    // console.log("Step 1: Crawl and save raw data")
    // await crawlAndSave(SEED\_URLS)
    // console.log("Step 1 completed successfully")
    
    // console.log("Step 2: Enrich the latest raw data")
    // await enrichLatestData()
    // console.log("Step 2 completed successfully")
    
3.  Run the script:
    
    pnpm run enrich-seed
    

Accessing the Admin Dashboard
-----------------------------

Manage the content and users of your directory through the admin dashboard. Access it here:

Admin Dashboard

Customize
---------

### Custom Color Theme

To give your directory a unique look, create a custom color theme:

1.  **Design Your Theme**
    
    Visit the custom shadcn theme page to design your theme.
    
2.  **Apply Your Theme**
    
    Once you have your theme, copy the relevant CSS and paste it into your `app/globals.css` file, replacing lines 5-67.
    

Deploy
------

1.  **Create a new repository and push the project to GitHub.**
    
2.  **Go to Vercel and import the GitHub repository: Deploy.**
    
3.  **Set up Environment Variables in Vercel**
    
    Go to your project settings on Vercel and set up the environment variables by copying the content from your `.env.local` file. Ensure the following variables are included:
    
    -   `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase API URL
    -   `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
    -   `SUPABASE_PROJECT_ID` - Your Supabase project ID
    -   `SUPABASE_ADMIN_ID` - Admin user ID for your application
    -   Any other environment variables specific to your project setup
    
    Here's an example of what your environment variables might look like:
    
    ```
    NEXT_PUBLIC_SUPABASE_URL="https://abcd1234.supabase.co"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    SUPABASE_PROJECT_ID="abcd1234"
    SUPABASE_ADMIN_ID="efgh5678"
    ```
    
4.  **Deploy the Project**
    
    Once your environment variables are set, you can deploy your project. Vercel will handle the build and deployment process for you.
    
5.  **Access Your Live Application**
    
    After deployment, you can access your live application through the URL provided by Vercel. Your application should now be live and ready to use.
    

Conclusion
----------

Welcome to the cult! :)

Follow the steps outlined in this README to deploy and customize your directory app. If you have any questions or run into issues, feel free to reach out for support on Twitter: https://x.com/nolansym

Cheers! Stoked to see what you build!

Other Open Source Work
----------------------

Other Free Goods

### Cult UI

Cult UI is a collection of beautifully designed React components built with Radix UI and Tailwind CSS. These components are optimized for ease of use and integration, making it simple to create visually appealing and functional web applications.

-   **Repository**: nolly-studio/cult-ui
-   **Features**:
    -   Radix UI components
    -   Tailwind CSS styling
    -   Ready-to-use and customizable
    -   Open Source and free to use

### AI Template

AI Template is a full-stack template designed for building AI-powered applications. It leverages Next.js, Tailwind CSS, Supabase, and OpenAI to provide a robust foundation for developing sophisticated AI solutions.

-   **Repository**: Jordan-Gilliam/ai-template
-   **Features**:
    -   Next.js framework
    -   Tailwind CSS for styling
    -   Supabase for backend and database management
    -   Integration with OpenAI for advanced AI capabilities

Scroll to top
