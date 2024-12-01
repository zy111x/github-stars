---
project: pezzo
stars: 2547
description: 🕹️ Open-source, developer-first LLMOps platform designed to streamline prompt design, version management, instant delivery, collaboration, troubleshooting, observability and more.
---

**Pezzo is a fully cloud-native and open-source LLMOps platform. Seamlessly observe and monitor your AI operations, troubleshoot issues, save up to 90% on costs and latency, collaborate and manage your prompts in one place, and instantly deliver AI changes.**  
  
     

✨ Features
==========

Documentation
=============

Click here to navigate to the Official Pezzo Documentation

In the documentation, you can find information on how to use Pezzo, its architecture, including tutorials and recipes for varius use cases and LLM providers.

Supported Clients
=================

Feature

Node.js • Docs

Python • Docs

LangChain

Prompt Management

✅

✅

✅

Observability

✅

✅

✅

Caching

✅

✅

✅

Looking for a client that's not listed here? Open an issue and let us know!

Getting Started - Docker Compose
================================

If you simply want to run the full Pezzo stack locally, check out Running With Docker Compose in the documentation.

If you want to run Pezzo in development mode, continue reading.

### Prerequisites

-   Node.js 18+
-   Docker
-   (Recommended) GraphQL Language Feature Support VSCode Extension

### Install dependencies

Install NPM dependencies by running:

```
npm install
```

### Set up the environment files

Pezzo uses a .env file to store environment variables. When using docker, you should also create a .env.docker file.

See the .env.example file for reference.

### Spin up infrastructure dependencies via Docker Compose

Pezzo is entirely cloud-native and relies solely on open-source technologies such as PostgreSQL, ClickHouse, Redis and Supertokens.

You can run these dependencies via Docker Compose:

```
docker-compose -f docker-compose.infra.yaml up
```

### Start Pezzo

Deploy Prisma migrations:

```
npx dotenv-cli -e apps/server/.env -- npx prisma migrate deploy --schema apps/server/prisma/schema.prisma
```

Run the server:

```
npx nx serve server
```

The server is now running. You can verify that by navigating to http://localhost:3000/api/healthz.

In development mode, you want to run `codegen` in watch mode, so whenever you make changes to the schema, types are generated automatically. After running the server, run the following in a _separate terminal Window_:

```
npm run graphql:codegen:watch
```

This will connect codegen directly to the server and keep your GraphQL schema up-to-date as you make changes.

Finally, you are ready to run the Pezzo Console:

```
npx nx serve console
```

That's it! The Pezzo Console is now accessible at http://localhost:4200 🚀

Contributing
============

We welcome contributions from the community! Please feel free to submit pull requests or create issues for bugs or feature suggestions.

If you want to contribute but not sure how, join our Discord and we'll be happy to help you out!

Please check out CONTRIBUTING.md before contributing.

License
=======

This repository's source code is available under the Apache 2.0 License.
