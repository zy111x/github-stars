---
project: lit
stars: 18890
description: Lit is a simple library for building fast, lightweight web components.
url: https://github.com/lit/lit
---

### Simple. Fast. Web Components.

Lit is a simple library for building fast, lightweight web components.

At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive.

### Documentation

See the full documentation for Lit at lit.dev.

Additional documentation for developers looking to contribute or understand more about the project can be found in `dev-docs`.

### npm

To install from npm:

npm i lit

Lit Monorepo
------------

This is the monorepo for Lit packages.

lit 2.x source is available on the `2.x` branch. lit-html 1.x source is available on the `lit-html-1.x` branch.

### Packages

-   Core packages
    -   `lit` - The primary user-facing package of Lit which includes everything from lit-html and lit-element.
    -   `lit-element` - The web component base class used in Lit.
    -   `lit-html` - The rendering library used by LitElement.
    -   `@lit/reactive-element` - A low level base class that provides a reactive lifecycle based on attribute/property changes.
-   Additional libraries
    -   `@lit/localize` - A library and command-line tool for localizing web applications built using Lit.
    -   `@lit/localize-tools` - Localization tooling for use with `@lit/localize`.
    -   `@lit/react` - A React component wrapper for web components.
    -   `@lit/task` - A controller for Lit that renders asynchronous tasks.
    -   `@lit/context` - A system for passing data through a tree of elements using browser events, avoiding the need to pass properties down every layer of the tree using a community defined protocol.
-   Labs
    -   `@lit-labs/ssr` - A server package for rendering Lit templates and components on the server.
    -   `@lit-labs/ssr-client` - A set of client-side support modules for rendering Lit components and templates on the server using `@lit-labs/ssr`.
    -   `@lit-labs/eleventy-plugin-lit` - A plugin for Eleventy that pre-renders Lit components using `@lit-labs/ssr` with optional hydration.
    -   `@lit-labs/ssr-react` - A package for integrating Lit SSR with React and React frameworks.
    -   `@lit-labs/nextjs` - A plugin for Next.js that enables deep server rendering of Lit components with Lit SSR.
    -   `@lit-labs/router` - A router for Lit.
    -   `@lit-labs/motion` - Lit directives for making things move
    -   `@lit-labs/scoped-registry-mixin` - A mixin for LitElement that integrates with the speculative Scoped CustomElementRegistry polyfill.
    -   `@lit-labs/observers` - A set of reactive controllers that facilitate using the platform observer objects.
    -   `@lit-labs/preact-signals` - Preact Signals integration for Lit.
    -   `@lit-labs/signals` - TC39 proposal Signals integration for Lit.
    -   `@lit-labs/testing` - Utilities for testing Lit components.
    -   `@lit-labs/virtualizer` - Viewport-based virtualization (including virtual scrolling).
    -   `@lit-labs/compiler` - A compiler for optimizing Lit templates.
-   Starter kits (not published to npm)
    -   `lit-starter-ts` (template repo) - A starter repo for building reusable components using Lit in TypeScript.
    -   `lit-starter-js` (template repo) - A starter repo for building reusable components using Lit in JavaScript.
-   Internal packages (not published to npm)
    -   `tests` - Test infrastructure for the monorepo.
    -   `benchmarks` - Benchmarks for testing various libraries in the monorepo.
    -   `@lit-internal/scripts` - Utility scripts used within the monorepo.

Contributing to Lit
-------------------

Lit is open source and we appreciate issue reports and pull requests. See CONTRIBUTING.md for more information.

### Setting up the lit monorepo for development

Initialize repo:

git clone https://github.com/lit/lit.git
cd lit
npm ci

Build all packages:

npm run build

Test all packages:

npm run test

Run benchmarks for all packages:

npm run benchmarks

See individual package READMEs for details on developing for a specific package.
