---
project: itty-router
stars: 1807
description: A little router.
url: https://github.com/kwhitley/itty-router
---

  

### v5 Documentation  |   v4 -> v5 Migration Guide  |   Discord

* * *

An ultra-tiny API microrouter, for use when size matters (e.g. Cloudflare Workers).

Features
--------

-   Tiny. Routers from ~450 bytes to a ~970 bytes batteries-included version (~240-500x smaller than Express.js).
-   TypeScript. Powerfully (and flexibly) typed for any environment.
-   Route-parsing & query parsing.
-   Middleware. Use ours or write your own.
-   100% Test Coverage. Bulletproof for production peace-of-mind.
-   Designed specifically for serverless (but works anywhere).
-   No assumptions. Return anything; pass in anything.
-   Future-proof. HTTP methods not-yet-invented already work with it.

Example
-------

import { AutoRouter } from 'itty-router' // ~1kB

const router \= AutoRouter()

router
  .get('/hello/:name', ({ name }) \=> \`Hello, ${name}!\`)
  .get('/json', () \=> \[1,2,3\])
  .get('/promises', () \=> Promise.resolve('foo'))

export default router

// that's it ^-^

  

Need Help?
----------

Complete API documentation is available on itty.dev, or join our Discord channel to chat with community members for quick help!

Join the Discussion!
--------------------

Have a question? Suggestion? Idea? Complaint? Want to send a gift basket? Join us on Discord!

A Special Thanks ❤️
===================

As the community and contributor list has grown (and thus an individualized list here is no longer easily maintainable), I'd like to thank each and every one of you for making itty far greater than its humble origins. The robustness you see today, the careful consideration of every byte spent on features, the API choices, the code-golfing itself... are all thanks to the efforts and feedback from the community. I'd especially like to thank the core contributors and PR-authors, as well as the fantastic folks on the itty Discord group, for their tireless work refining this little beast and answering community questions.
