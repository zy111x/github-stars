---
project: htmx
stars: 42303
description: </> htmx - high power tools for HTML
url: https://github.com/bigskysoftware/htmx
---

_high power tools for HTML_

introduction
------------

htmx allows you to access AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext

htmx is small (~14k min.gz'd), dependency-free & extendable

motivation
----------

-   Why should only `<a>` and `<form>` be able to make HTTP requests?
-   Why should only `click` & `submit` events trigger them?
-   Why should only GET & POST be available?
-   Why should you only be able to replace the _entire_ screen?

By removing these arbitrary constraints htmx completes HTML as a hypertext

quick start
-----------

  <script src\="https://unpkg.com/htmx.org@2.0.4"\></script\>
  <!-- have a button POST a click via AJAX -->
  <button hx-post\="/clicked" hx-swap\="outerHTML"\>
    Click Me
  </button\>

The `hx-post` and `hx-swap` attributes tell htmx:

> "When a user clicks on this button, issue an AJAX request to /clicked, and replace the entire button with the response"

htmx is the successor to intercooler.js

### installing as a node package

To install using npm:

```
npm install htmx.org --save
```

Note there is an old broken package called `htmx`. This is `htmx.org`.

website & docs
--------------

-   https://htmx.org
-   https://htmx.org/docs

contributing
------------

Want to contribute? Check out our contribution guidelines

No time? Then become a sponsor

### hacking guide

To develop htmx locally, you will need to install the development dependencies.

Run:

```
npm install
```

Then, run a web server in the root.

This is easiest with:

```
npx serve
```

You can then run the test suite by navigating to:

http://0.0.0.0:3000/test/

At this point you can modify `/src/htmx.js` to add features, and then add tests in the appropriate area under `/test`.

-   `/test/index.html` - the root test page from which all other tests are included
-   `/test/attributes` - attribute specific tests
-   `/test/core` - core functionality tests
-   `/test/core/regressions.js` - regression tests
-   `/test/ext` - extension tests
-   `/test/manual` - manual tests that cannot be automated

htmx uses the mocha testing framework, the chai assertion framework and sinon to mock out AJAX requests. They are all OK.

You can also run live tests and demo of the WebSockets and Server-Side Events extensions with `npm run ws-tests`

haiku
-----

_javascript fatigue:  
longing for a hypertext  
already in hand_
