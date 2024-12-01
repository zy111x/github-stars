---
project: nextra
stars: 11936
description: Simple, powerful and flexible site generation framework with everything you love from Next.js.
---

Nextra
======

Simple, powerful and flexible site generation framework with everything you love from Next.js.

Documentation
-------------

https://nextra.site

Development
-----------

### Installation

The Nextra repository uses PNPM Workspaces and Turborepo. To install dependencies, run `pnpm install` in the project root directory.

### Build Nextra Core

cd packages/nextra
pnpm build

Watch mode: `pnpm dev`

### Build Nextra Theme

cd packages/nextra-theme-docs
pnpm build

Command

Description

pnpm dev

Watch mode

pnpm dev:layout

Watch mode (layout only)

pnpm dev:tailwind

Watch mode (style only)

### Development

You can also debug them together with a website locally. For instance, to start examples/docs locally, run

cd examples/docs
pnpm dev

Any change to example/docs will be re-rendered instantly.

If you update the core or theme packages, a rebuild is required. Or you can use the watch mode for both nextra and the theme in separated terminals.

### Sponsors
