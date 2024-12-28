---
project: codeimage
stars: 1513
description: A tool to beautify your code screenshots. Built with SolidJS and Fastify.
url: https://github.com/riccardoperra/codeimage
---

> Create elegant code screenshots of your source code.

Introduction
------------

CodeImage is the newest tool to help developers to create beautiful screenshots of their code, providing several features to speed up the process to post in social media.

#### Supported by

* * *

🤖 Tech stack
-------------

CodeImage architecture consist of a PNPM monorepo, currently subdivided in `packages` and `apps`.

### Apps

#### @codeimage/app

The front-end application, entirely built with SolidJS.

It currently also relies on these libraries:

-   vanilla-extract: Zero-runtime Stylesheets-in-TypeScript.
-   CodeMirror6: Extensible code editor
-   StateBuilder: Composable state management
-   @codeui/kit: Accessible UI Kit based on Kobalte
-   solid-primitives: SolidJS primitives library

#### @codeimage/api

The REST API layer built with Fastify, Prisma ORM and Auth0.

### Packages

-   @codeimage/ui: contains the source code of the UI kit of CodeImage front-end application.
    
    > **Note** the UI kit is being moved to @codeui/kit repository
    
-   @codeimage/config: contains the base configurations and interfaces for CodeImage
-   @codeimage/highlight: contains the custom editor and highlighting themes for CodeMirror
-   @codeimage/dom-export: contains the html-to-image fork which includes several fix for image export
-   @codeimage/locale: contains a wrapper of @solid-primitives/i18n which includes strict typing for i18n
-   @codeimage/vanilla-extract: contain the Vanilla Extract plugin fork which includes SolidJS and PNPM fixes to work under monorepo.
-   @codeimage/prisma-models: contains the Prisma ORM backend models shared across front-end and back-end application.
-   @codeimage/atomic-state: contain the source code of a small state manager which includes some utilities helper for RxJS and solid-js/store

🌏 Contributions
----------------

> **Warning** **Read this before opening any PR!**

When contributing, it's better to first discuss the change you wish to make via issue or discussion, or any other method with the owners of this repository before making a change.

See the CONTRIBUTING.md guide for more details.

* * *

CodeImage is the winner of SolidHack 2022 for the Best Application category!

License
-------

MIT © Riccardo Perra
