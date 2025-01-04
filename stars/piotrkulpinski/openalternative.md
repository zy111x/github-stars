---
project: openalternative
stars: 2489
description: A community driven list of open source alternatives to proprietary software and applications.
url: https://github.com/piotrkulpinski/openalternative
---

Discover open source alternatives to popular software.  
**Learn more »**  
  
Website · Issues

About this project
------------------

OpenAlternative is a community driven list of **open source alternatives to proprietary software** and applications.

Our goal is to be your first stop when researching for a new open source service to help you grow your business. We will help you **find alternatives** of the products you already use.

Join us in creating the biggest **directory of open source software**.

Sponsors
--------

OpenAlternative is an GPL-3.0-licensed open source project with its ongoing development made possible entirely by the support of these awesome backers. If you'd like to join them, please consider sponsoring OpenAlternative's development.

Project Structure
-----------------

OpenAlternative is a Next.js application using the App Router architecture. The project follows a standard Next.js file structure:

-   `app/` - Application routes and layouts
-   `components/` - Reusable React components
-   `lib/` - Core utilities and business logic
-   `public/` - Static assets
-   `utils/` - Helper functions and utilities

Development
-----------

This project uses Bun as the package manager and runtime. Make sure you have Bun installed before proceeding.

To set up the project for development:

1.  Clone the repository
2.  Run `bun install` to install all dependencies
3.  Set up the required environment variables (see below)
4.  Run `bun run db:push` to push the Prisma schema to the database
5.  Run `bun run dev` to start the application in development mode

### Environment Variables

Refer to the `.env.example` file for a complete list of required variables.

Copy the `.env.example` file to `.env` and update the variables as needed:

cp .env.example .env

🧞 Commands
-----------

All commands are run from the root of the project, from a terminal:

Command

Action

`bun install`

Installs dependencies

`bun run dev`

Starts local dev server at `localhost:5173`

`bun run build`

Build production application

`bun run start`

Preview production build locally

`bun run lint`

Run linter

`bun run format`

Format code

`bun run typecheck`

Run TypeScript type checking

`bun run db:generate`

Generate Prisma client

`bun run db:studio`

Start Prisma Studio

`bun run db:push`

Push Prisma schema to database

`bun run db:pull`

Pull Prisma schema from database

`bun run db:reset`

Reset Prisma schema

Third-Party Services
--------------------

OpenAlternative uses the following third-party services:

-   Database: Supabase
-   Analytics: Plausible, PostHog
-   Newsletter: Beehiiv
-   Background Jobs: Inngest
-   File Storage: AWS S3
-   Payments: Stripe
-   Screenshots: ScreenshotOne

Make sure to set up accounts with these services and add the necessary environment variables to your `.env` file.

Deployment
----------

The project is set up for deployment on Vercel. To deploy manually:

1.  Build the project: `bun run build`
2.  Start the production server: `bun run start`

Ensure all environment variables are properly set in your production environment.

License
-------

OpenAlternative is licensed under the GPL-3.0 License.
