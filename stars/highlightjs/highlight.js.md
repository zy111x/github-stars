---
project: highlight.js
stars: 23777
description: JavaScript syntax highlighter with language auto-detection and zero dependencies.
---

Highlight.js
============

Highlight.js is a syntax highlighter written in JavaScript. It works in the browser as well as on the server. It can work with pretty much any markup, doesn’t depend on any other frameworks, and has automatic language detection.

**Contents**

-   Basic Usage
    -   In the Browser
        -   Plaintext Code Blocks
        -   Ignoring a Code Block
    -   Node.js on the Server
-   Supported Languages
-   Custom Usage
    -   Using custom HTML
    -   Using with Vue.js
    -   Using Web Workers
-   Importing the Library
    -   Node.js CommonJS Modules / `require`
    -   Node.js ES6 Modules / `import`
    -   Browser ES6 Modules
-   Getting the Library
    -   Fetch via CDN
        -   cdnjs (link)
        -   jsdelivr (link)
        -   unpkg (link)
    -   Download prebuilt CDN assets
    -   Download from our website
    -   Install via NPM package
    -   Build from Source
-   Requirements
-   License
-   Links

* * *

#### Upgrading to Version 11

As always, major releases do contain breaking changes which may require action from users. Please read VERSION\_11\_UPGRADE.md for a detailed summary of breaking changes and any actions you may need to take.

#### Support for older versions

Please see SECURITY.md for long-term support information.

* * *

Basic Usage
-----------

### In the Browser

The bare minimum for using highlight.js on a web page is linking to the library along with one of the themes and calling `highlightAll`:

<link rel\="stylesheet" href\="/path/to/styles/default.min.css"\>
<script src\="/path/to/highlight.min.js"\></script\>
<script\>hljs.highlightAll();</script\>

This will find and highlight code inside of `<pre><code>` tags; it tries to detect the language automatically. If automatic detection doesn’t work for you, or you simply prefer to be explicit, you can specify the language manually by using the `class` attribute:

<pre\><code class\="language-html"\>...</code\></pre\>

#### Plaintext Code Blocks

To apply the Highlight.js styling to plaintext without actually highlighting it, use the `plaintext` language:

<pre\><code class\="language-plaintext"\>...</code\></pre\>

#### Ignoring a Code Block

To skip highlighting of a code block completely, use the `nohighlight` class:

<pre\><code class\="nohighlight"\>...</code\></pre\>

### Node.js on the Server

The bare minimum to auto-detect the language and highlight some code.

// load the library and ALL languages
hljs \= require('highlight.js');
html \= hljs.highlightAuto('<h1>Hello World!</h1>').value

To load only a "common" subset of popular languages:

hljs \= require('highlight.js/lib/common');

To highlight code with a specific language, use `highlight`:

html \= hljs.highlight('<h1>Hello World!</h1>', {language: 'xml'}).value

See Importing the Library for more examples of `require` vs `import` usage, etc. For more information about the result object returned by `highlight` or `highlightAuto` refer to the api docs.

Supported Languages
-------------------

Highlight.js supports over 180 languages in the core library. There are also 3rd party language definitions available to support even more languages. You can find the full list of supported languages in SUPPORTED\_LANGUAGES.md.

Custom Usage
------------

If you need a bit more control over the initialization of Highlight.js, you can use the `highlightElement` and `configure` functions. This allows you to better control _what_ to highlight and _when_.

For example, here’s the rough equivalent of calling `highlightAll` but doing the work manually instead:

document.addEventListener('DOMContentLoaded', (event) \=> {
  document.querySelectorAll('pre code').forEach((el) \=> {
    hljs.highlightElement(el);
  });
});

Please refer to the documentation for `configure` options.

### Using custom HTML

We strongly recommend `<pre><code>` wrapping for code blocks. It's quite semantic and "just works" out of the box with zero fiddling. It is possible to use other HTML elements (or combos), but you may need to pay special attention to preserving linebreaks.

Let's say your markup for code blocks uses divs:

<div class\='code'\>...</div\>

To highlight such blocks manually:

// first, find all the div.code blocks
document.querySelectorAll('div.code').forEach(el \=> {
  // then highlight each
  hljs.highlightElement(el);
});

Without using a tag that preserves linebreaks (like `pre`) you'll need some additional CSS to help preserve them. You could also pre and post-process line breaks with a plug-in, but _we recommend using CSS_.

To preserve linebreaks inside a `div` using CSS:

div.code {
  white-space: pre;
}

### Using with Vue.js

See highlightjs/vue-plugin for a simple Vue plugin that works great with Highlight.js.

An example of `vue-plugin` in action:

  <div id\="app"\>
    <!-- bind to a data property named \`code\` -->
    <highlightjs autodetect :code\="code" />
    <!-- or literal code works as well -->
    <highlightjs language\='javascript' code\="var x = 5;" />
  </div\>

### Using Web Workers

You can run highlighting inside a web worker to avoid freezing the browser window while dealing with very big chunks of code.

In your main script:

addEventListener('load', () \=> {
  const code \= document.querySelector('#code');
  const worker \= new Worker('worker.js');
  worker.onmessage \= (event) \=> { code.innerHTML \= event.data; }
  worker.postMessage(code.textContent);
});

In worker.js:

onmessage \= (event) \=> {
  importScripts('<path>/highlight.min.js');
  const result \= self.hljs.highlightAuto(event.data);
  postMessage(result.value);
};

Importing the Library
---------------------

First, you'll likely be installing the library via `npm` or `yarn` -- see Getting the Library.

### Node.js CommonJS Modules / `require`

Requiring the top-level library will load all languages:

// require the highlight.js library, including all languages
const hljs \= require('./highlight.js');
const highlightedCode \= hljs.highlightAuto('<span>Hello World!</span>').value

For a smaller footprint, load our common subset of languages (the same set used for our default web build).

const hljs \= require('highlight.js/lib/common');

For the smallest footprint, load only the languages you need:

const hljs \= require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

const highlightedCode \= hljs.highlight('<span>Hello World!</span>', {language: 'xml'}).value

### Node.js ES6 Modules / `import`

The default import will register all languages:

import hljs from 'highlight.js';

It is more efficient to import only the library and register the languages you need:

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

If your build tool processes CSS imports, you can also import the theme directly as a module:

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

### Browser ES6 Modules

_Note: For now you'll want to install `@highlightjs/cdn-assets` package instead of `highlight.js`. See Download prebuilt CDN assets_

To import the library and register only those languages that you need:

import hljs from './assets/js/@highlightjs/cdn-assets/es/core.js';
import javascript from './assets/js/@highlightjs/cdn-assets/es/languages/javascript.min.js';

hljs.registerLanguage('javascript', javascript);

To import the library and register all languages:

import hljs from './assets/js/@highlightjs/cdn-assets/es/highlight.js';

_Note: The path to these files will vary depending on where you have installed/copied them within your project or site. The above path is only an example._

You can also use `importmap` to import in similar way as Node:

<script type\="importmap"\>
{
	"imports": {
		"@highlightjs": "./assets/js/@highlightjs/cdn-assets/es/"
	}
}
</script\>

Use the above code in your HTML. After that, your JavaScript can import using the named key from your `importmap`, for example `@highlightjs` in this case:

import hljs from '@highlightjs/core.js';
import javascript from '@highlightjs/languages/javascript.min.js';

hljs.registerLanguage('javascript', javascript);

_Note: You can also import directly from fully static URLs, such as our very own pre-built ES6 Module CDN resources. See Fetch via CDN for specific examples._

Getting the Library
-------------------

You can get highlight.js as a hosted, or custom-build, browser script or as a server module. Right out of the box the browser script supports both AMD and CommonJS, so if you wish you can use RequireJS or Browserify without having to build from source. The server module also works perfectly fine with Browserify, but there is the option to use a build specific to browsers rather than something meant for a server.

**Do not link to GitHub directly.** The library is not supposed to work straight from the source, it requires building. If none of the pre-packaged options work for you refer to the building documentation.

**On Almond.** You need to use the optimizer to give the module a name. For example:

r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js

### Fetch via CDN

A prebuilt version of Highlight.js bundled with many common languages is hosted by several popular CDNs. When using Highlight.js via CDN you can use Subresource Integrity for additional security. For details see DIGESTS.md.

#### cdnjs (link)

##### Common JS

<link rel\="stylesheet" href\="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/default.min.css"\>
<script src\="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"\></script\>
<!-- and it's easy to individually load additional languages -->
<script src\="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"\></script\>

##### ES6 Modules

<link rel\="stylesheet" href\="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/dark.min.css"\>
<script type\="module"\>
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/highlight.min.js';
//  and it's easy to individually load additional languages
import go from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/languages/go.min.js';
hljs.registerLanguage('go', go);
</script\>

#### jsdelivr (link)

##### Common JS

<link rel\="stylesheet" href\="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/default.min.css"\>
<script src\="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/highlight.min.js"\></script\>
<!-- and it's easy to individually load additional languages -->
<script src\="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/languages/go.min.js"\></script\>

##### ES6 Modules

<link rel\="stylesheet" href\="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/default.min.css"\>
<script type\="module"\>
import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/es/highlight.min.js';
//  and it's easy to individually load additional languages
import go from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/es/languages/go.min.js';
hljs.registerLanguage('go', go);
</script\>

#### unpkg (link)

##### Common JS

<link rel\="stylesheet" href\="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/default.min.css"\>
<script src\="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/highlight.min.js"\></script\>
<!-- and it's easy to individually load additional languages -->
<script src\="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/languages/go.min.js"\></script\>

##### ES6 Modules

<link rel\="stylesheet" href\="https://unpkg.com/@highlightjs/cdn-assets@11.10.0/styles/default.min.css"\>
<script type\="module"\>
import hljs from 'https://unpkg.com/@highlightjs/cdn-assets@11.10.0/es/highlight.min.js';
//  and it's easy to individually load & register additional languages
import go from 'https://unpkg.com/@highlightjs/cdn-assets@11.10.0/es/languages/go.min.js';
hljs.registerLanguage('go', go);
</script\>

**Note:** _The CDN-hosted `highlight.min.js` package doesn't bundle every language._ It would be very large. You can find our list of "common" languages that we bundle by default on our download page.

### Download prebuilt CDN assets

You can also download and self-host the same assets we serve up via our own CDNs. We publish those builds to the cdn-release GitHub repository. You can easily pull individual files off the CDN endpoints with `curl`, etc; if say you only needed `highlight.min.js` and a single CSS file.

There is also an npm package @highlightjs/cdn-assets if pulling the assets in via `npm` or `yarn` would be easier for your build process.

### Download from our website

The download page can quickly generate a custom single-file minified bundle including only the languages you desire.

**Note:** Building from source can produce slightly smaller builds than the website download.

### Install via NPM package

Our NPM package including all supported languages can be installed with NPM or Yarn:

npm install highlight.js
# or
yarn add highlight.js

There is also another npm package @highlightjs/cdn-assets that contains prebuilt CDN assets including ES6 Modules that can be imported in browser:

npm install @highlightjs/cdn-assets
# or
yarn add @highlightjs/cdn-assets

Alternatively, you can build the NPM package from source.

### Build from Source

The current source code is always available on GitHub.

node tools/build.js -t node
node tools/build.js -t browser :common
node tools/build.js -t cdn :common

See our building documentation for more information.

Requirements
------------

Highlight.js works on all modern browsers and currently supported Node.js versions. You'll need the following software to contribute to the core library:

-   Node.js >= 12.x
-   npm >= 6.x

License
-------

Highlight.js is released under the BSD License. See our LICENSE file for details.

Links
-----

The official website for the library is https://highlightjs.org/.

Further in-depth documentation for the API and other topics is at http://highlightjs.readthedocs.io/.

A list of the Core Team and contributors can be found in the CONTRIBUTORS.md file.
