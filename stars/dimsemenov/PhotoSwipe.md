---
project: PhotoSwipe
stars: 24345
description: JavaScript image gallery for mobile and desktop, modular, framework independent
url: https://github.com/dimsemenov/PhotoSwipe
---

PhotoSwipe v5 — JavaScript image gallery and lightbox

**Demo** | **Documentation**

### Repo structure

-   `dist/` - main JS and CSS
-   `src/` - source JS and CSS.
    -   `src/js/photoswipe.js` - entry for PhotoSwipe Core.
    -   `src/js/lightbox/lightbox.js` - entry for PhotoSwipe Lightbox.
-   `docs/` - documentation markdown files.
-   `demo-docs-website/` - website with documentation, demos and manual tests.
-   `build/` - rollup build config.

To build JS and CSS in `dist/` directory, run `npm run build`.

To run the demo website and automatically rebuild files during development, run `npm install` in `demo-docs-website/` and `npm run watch` in the root directory.

### Older versions

Documentation for the old version (v4) can be found here and the code for 4.1.3 is here.

* * *

This project is tested with BrowserStack.
