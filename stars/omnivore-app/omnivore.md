---
project: omnivore
stars: 14083
description: Omnivore is a complete, open source read-it-later solution for people who like reading.
url: https://github.com/omnivore-app/omnivore
---

Omnivore
========

Omnivore is a complete, open source read-it-later solution for people who like text.

We built Omnivore because we love reading and we want it to be more social. Join us!

-   Highlighting, notes, search, and sharing
-   Full keyboard navigation
-   Automatically saves your place in long articles
-   Add newsletter articles via email (with substack support!)
-   PDF support
-   Web app written in Node.js and TypeScript
-   Native iOS app (source)
-   Android app (source)
-   Progressive web app for Android users
-   Browser extensions for Chrome, Safari, Firefox, and Edge
-   Labels (aka tagging)
-   Offline support
-   Text to speech (iOS only)
-   Logseq support via our Logseq Plugin
-   Obsidian support via our Obsidian Plugin

Every single part is fully open source! Fork it, extend it, or deploy it to your own server.

We also have a free hosted version of Omnivore at omnivore.app -- try it now!

Join us on Discord! 💬
----------------------

We're building our community on Discord. Join us!

Read more about Omnivore on our blog. https://blog.omnivore.app/p/getting-started-with-omnivore

Shoutouts 🎉
------------

Omnivore takes advantage of some great open source software:

-   TypeScript - Most of our backend and frontend are written in TypeScript.
-   Next.js - Our frontend is a Next.JS app and is hosted on Vercel.
-   SWR - We do all our data fetching on the web using SWR.
-   Stitches - We use Stitches on the frontend to style our components.
-   Mozilla Readability - We use Mozilla's Readability library to make pages easier to read.
-   Swift GraphQL - We generate our GraphQL queries on iOS using Swift GraphQL.
-   Apollo GraphQL - We generate our GraphQL queries on Android using Apollo GraphQL.
-   Radix - We use Radix UI's components on our frontend.
-   And many more awesome libraries, just checkout our package files to see what we are using.

Importing Libraries
-------------------

Check out our docs for information on importing your data from other apps.

How to setup local development 💻
---------------------------------

The easiest way to get started with local development is to use `docker compose up`. This will start a postgres container, our web frontend, an API server, and our content fetching microservice.

### Requirements for development

Omnivore is written in TypeScript and JavaScript.

-   Node.js (v18.16) and Yarn -- Versions are managed by Volta.
-   Chromium -- See below for installation info.

### Running the web and API services

#### 1\. Start docker compose

git clone https://github.com/omnivore-app/omnivore
cd omnivore
docker compose up

This will start postgres, initialize the database, and start the web and api services.

#### 2\. Open the browser

Open http://localhost:3000 and confirm Omnivore is running

#### 3\. Login with the test account

During database setup docker compose creates an account `demo@omnivore.app`, password: `demo_password`.

Go to http://localhost:3000/ in your browser and choose `Continue with Email` to login.

### Frontend Development

If you want to work on just the frontend of Omnivore you can run the backend services with docker compose and the frontend locally:

docker compose up api content-fetch
cd packages/web
cp .env.template .env.local
yarn dev

You will need to configure some values in the new `.env.local` file. These are the values for running the `web` service directly on your host machine and running `api` and `content-fetch` within docker:

NEXT\_PUBLIC\_BASE\_URL=http://localhost:3000
NEXT\_PUBLIC\_HIGHLIGHTS\_BASE\_URL=http://localhost:3000
NEXT\_PUBLIC\_LOCAL\_BASE\_URL=http://localhost:3000
NEXT\_PUBLIC\_SERVER\_BASE\_URL=http://localhost:4000
NEXT\_PUBLIC\_LOCAL\_SERVER\_BASE\_URL=http://localhost:4000

### Running the puppeteer-parse service outside of Docker

To save pages you need to run the `puppeteer-parse` service.

#### 1\. Install and configure Chromium

brew install chromium --no-quarantine
export PUPPETEER\_SKIP\_CHROMIUM\_DOWNLOAD=true
export CHROMIUM\_PATH=\`which chromium\`

#### 2\. Navigate to the service directory, setup your env file, and install dependencies

cd packages/puppeteer-parse
cp .env.example .env
yarn

#### 3\. Start the service

yarn start

This will start the puppeteer-parse service on port 9090.

In your browser go to http://localhost:3000/home, click the `Add Link` button, and enter a URL such as `https://blog.omnivore.app/p/getting-started-with-omnivore`.

You should see a Chromium window open and navigate to your link. When the service is done fetching your content you will see it in your library.

How to deploy to your own server
--------------------------------

Omnivore was originally designed to be deployed on GCP and takes advantage of some of GCP's PaaS features. We are working to make Omnivore more portable so you can easily run the service on your own infrastructure. You can track progress here: #25

To deploy Omnivore on your own hardware you will need to deploy three dockerized services and configure access to a postgres service. To handle PDF documents you will need to configure access to a Google Cloud Storage bucket.

-   `packages/api` - the backend API service
-   `packages/web` - the web frontend (can easily be deployed to vercel)
-   `packages/puppeteer-parse` - the content fetching service (can easily be deployed as an AWS lambda or GCP Cloud Function)

Additionally, you will need to run our database migrations to initialize your database. These are dockerized and can be run with the `packages/db` service.

License
-------

Omnivore and our extensions to Readability.js are under the AGPL-3.0 license.
