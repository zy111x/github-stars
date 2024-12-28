---
project: opennextjs-cloudflare
stars: 477
description: Open Next.js adapter for Cloudflare
url: https://github.com/opennextjs/opennextjs-cloudflare
---

Deploy Next.js apps to Cloudflare
=================================

OpenNext for Cloudflare is an adapter that enables the deployment of Next.js applications to Cloudflare's developer platform.

This monorepo includes a package for adapting a Next.js application built via `next build` (in standalone mode) to run in the Cloudflare workerd runtime using the Workers Node.js compatibility layer.

Get started
-----------

Visit the OpenNext docs for instructions on starting a new project, or migrating an existing one.

Contributing
------------

### The repository

The repository contains two directories:

-   `packages` containing a cloudflare package that can be used to build a Cloudflare Workers-compatible output for Next.js applications.
-   `examples` containing Next.js applications that use the above mentioned cloudflare package.

### How to try out the `@opennextjs/cloudflare` package

You can simply install the package from npm as specified in the OpenNext documentation.

#### Preleases

Besides the standard npm releases we also automatically publish prerelease packages on branch pushes (using `pkg.pr.new`):

-   `https://pkg.pr.new/@opennextjs/cloudflare@main`: Updated with every push to the `main` branch, this prerelease contains the most up to date yet (reasonably) stable version of the package.
-   `https://pkg.pr.new/@opennextjs/cloudflare@experimental` Updated with every push to the `experimental` branch, this prerelease contains the latest experimental version of the package (containing features that we want to test/experiment on before committing to).

Which you can simply install directly with your package manager of choice, for example:

npm i https://pkg.pr.new/@opennextjs/cloudflare@main

### How to develop in the repository

See the CONTRIBUTING page for how to get started with this repository.
