---
project: marked
stars: 33475
description: A markdown parser and compiler. Built for speed.
url: https://github.com/markedjs/marked
---

Marked
======

-   ⚡ built for speed
-   ⬇️ low-level compiler for parsing markdown without caching or blocking for long periods of time
-   ⚖️ light-weight while implementing all markdown features from the supported flavors & specifications
-   🌐 works in a browser, on a server, or from a command line interface (CLI)

Demo
----

Checkout the demo page to see marked in action ⛹️

Docs
----

Our documentation pages are also rendered using marked 💯

Also read about:

-   Options
-   Extensibility

Compatibility
-------------

**Node.js:** Only current and LTS Node.js versions are supported. End of life Node.js versions may become incompatible with Marked at any point in time.

**Browser:** Not IE11 :)

Installation
------------

**CLI:**

npm install -g marked

**In-browser:**

npm install marked

Usage
-----

### Warning: 🚨 Marked does not sanitize the output HTML. Please use a sanitize library, like DOMPurify (recommended), sanitize-html or insane on the _output_ HTML! 🚨

```
DOMPurify.sanitize(marked.parse(`<img src="x" onerror="alert('not happening')">`));
```

**CLI**

# Example with stdin input
$ marked -o hello.html
hello world
^D
$ cat hello.html
<p\>hello world</p\>

# Print all options
$ marked --help

**Browser**

<!doctype html\>
<html\>
<head\>
  <meta charset\="utf-8"/>
  <title\>Marked in the browser</title\>
</head\>
<body\>
  <div id\="content"\></div\>
  <script src\="https://cdn.jsdelivr.net/npm/marked/marked.min.js"\></script\>
  <script\>
    document.getElementById('content').innerHTML \=
      marked.parse('# Marked in the browser\\n\\nRendered by \*\*marked\*\*.');
  </script\>
</body\>
</html\>

or import esm module

<script type\="module"\>
  import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
  document.getElementById('content').innerHTML \=
    marked.parse('# Marked in the browser\\n\\nRendered by \*\*marked\*\*.');
</script\>

License
-------

Copyright (c) 2011-2022, Christopher Jeffrey. (MIT License)
