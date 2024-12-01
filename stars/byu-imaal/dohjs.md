---
project: dohjs
stars: 130
description: DNS over HTTPS client for use in the browser
---

###   
  
Javascript library for DNS over HTTPS lookups in web apps

* * *

**Try sending DoH lookups from your browser - https://dohjs.org**

Contents
========

-   Why DoHjs
    -   Features
-   Installation
-   Quickstart
-   Examples
-   Docs
-   Tests
-   Web interface
-   CORS Issues
-   License

Why dohjs
=========

The purpose of dohjs is described well in the Internet standard document for DNS over HTTPS (RFC 8484):

> allowing web applications to access DNS information via existing browser APIs in a safe way consistent with Cross Origin Resource Sharing (CORS)

Features
--------

-   Fully compliant DNS over HTTPS client implementation
-   Supports GET and POST wireformat queries
-   Command line DNS over HTTPS lookup tool
-   Web interface to try dohjs
-   CORS proxy to get past CORS errors associated with DoH (source code here). This is mainly for use on https://dohjs.org.

Installation
============

If you're not using npm, you can skip to quickstart.

npm install dohjs

If you want to just use the command line tool `dohjs` to issue DoH lookups, install it globally (or use npx):

npm install -g dohjs

_NOTE: The above command may need to be run as root (how to fix this)_

Quickstart
==========

A simple way to start is to include doh.js in your HTML file. You can include it from jsdelivr or your local installation.

<!-- from CDN -->
<script src\="https://cdn.jsdelivr.net/npm/dohjs@latest/dist/doh.min.js"\></script\>
<!-- from local installation -->
<script src\="/path/to/node\_modules/dohjs/dist/doh.min.js"\></script\>

If your project is mostly nodejs-style (e.g. you're using browserify), you can `require()` dohjs like so:

const doh \= require('dohjs');

Now here's a quick example of a DoH lookup using dohjs:

// create your stub resolver
const resolver \= new doh.DohResolver('https://1.1.1.1/dns-query');

// lookup the A records for example.com and log the IP addresses to the console
resolver.query('example.com', 'A')
  .then(response \=> {
    response.answers.forEach(ans \=> console.log(ans.data));
  })
  .catch(err \=> console.error(err));

Examples
========

Checkout our examples to see dohjs in action. See examples/README for a description of the examples.

To serve thr examples, run `npm start`. Your browser will open up to an index of your current directory, then just navigate to the examples and open whatever html file you were wanting to look at.

Docs
====

API documentation for dohjs can be found in docs/README.md.

Documentation for the dohjs CLI is in docs/cli.md.

Contributing
============

We love contributors!

If you find a bug in dohjs, or you have a feature you'd like added, please open an issue and/or submit a pull request.

Tests
=====

To run tests, clone the repo, and run:

npm test

Web interface
=============

The web interface is available at https://dohjs.org.

See the `gh-pages` branch for code.

CORS issues
===========

You'll probably get some CORS errors when sending DoH queries. A few ways to get around those are:

-   Use a CORS proxy. At dohjs.org, there is an option to use a CORS proxy if you want to try it out.
-   Disable CORS when you launch your browser sometimes works (e.g. `google-chrome --user-data-dir=/tmp/asdf --disable-web-security`)
-   Run your own DoH server that sets the Access-Control-Allow-Origin header appropriately (e.g. `Access-Control-Allow-Origin: *` to allow everyone)

License
=======

MIT (see LICENSE)
