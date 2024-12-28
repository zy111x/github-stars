---
project: hono
stars: 21139
description: Web framework built on Web Standards
url: https://github.com/honojs/hono
---

* * *

**Documentation 👉 hono.dev**  
_Now supports JSR and `deno.land/x` is deprecated! See Migration guide._

* * *

Hono - _**means flame🔥 in Japanese**_ - is a small, simple, and ultrafast web framework built on Web Standards. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, AWS Lambda, Lambda@Edge, and Node.js.

Fast, but not only fast.

import { Hono } from 'hono'
const app \= new Hono()

app.get('/', (c) \=> c.text('Hono!'))

export default app

Quick Start
-----------

npm create hono@latest

Features
--------

-   **Ultrafast** 🚀 - The router `RegExpRouter` is really fast. Not using linear loops. Fast.
-   **Lightweight** 🪶 - The `hono/tiny` preset is under 12kB. Hono has zero dependencies and uses only the Web Standard API.
-   **Multi-runtime** 🌍 - Works on Cloudflare Workers, Fastly Compute, Deno, Bun, AWS Lambda, Lambda@Edge, or Node.js. The same code runs on all platforms.
-   **Batteries Included** 🔋 - Hono has built-in middleware, custom middleware, and third-party middleware. Batteries included.
-   **Delightful DX** 😃 - Super clean APIs. First-class TypeScript support. Now, we've got "Types".

Documentation
-------------

The documentation is available on hono.dev.

Migration
---------

The migration guide is available on docs/MIGRATION.md.

Communication
-------------

X and Discord channel are available.

Contributing
------------

Contributions Welcome! You can contribute in the following ways.

-   Create an Issue - Propose a new feature. Report a bug.
-   Pull Request - Fix a bug and typo. Refactor the code.
-   Create third-party middleware - Instruct below.
-   Share - Share your thoughts on the Blog, X, and others.
-   Make your application - Please try to use Hono.

For more details, see docs/CONTRIBUTING.md.

Contributors
------------

Thanks to all contributors!

Authors
-------

Yusuke Wada https://github.com/yusukebe

_RegExpRouter_, _SmartRouter_, _LinearRouter_, and _PatternRouter_ are created by Taku Amano https://github.com/usualoma

License
-------

Distributed under the MIT License. See LICENSE for more information.
