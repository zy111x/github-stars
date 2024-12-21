---
project: extension.js
stars: 3919
description: 🧩 The cross-browser extension framework.
url: https://github.com/extension-js/extension.js
---

Extension.js
============

> Plug-and-play, zero-config, cross-browser extension development tool.

-   Create A New Extension — How to create a new extension.
-   Get Started Immediately — Get work done in no time.
-   I have An Extension - Use only specific parts of Extension.js.

Extension.js is a plug-and-play, zero-config, cross-browser extension development tool with built-in support for TypeScript, WebAssembly, and modern JavaScript.

Create A New Extension
----------------------

npx extension create my-extension
cd my-extension
npm run dev

A new browser instance will open up with your extension ready for development.

You are done. Time to hack on your extension!

create-a-new-extension.mp4

Web Standards and Modern JavaScript Support
-------------------------------------------

For a preview of extensions running these technologies, see documentation about Templates.

ESNext  
✅

TypeScript  
✅

WASM  
✅

React  
✅

Vue  
✅

Angular  
👋

Svelte  
✅

Solid  
👋

Preact  
✅

👋 = PR Welcome!

Get Started Immediately
-----------------------

### Use Chrome to start developing an extension from Chrome Extension Samples

> See the example below where we request the sample page-redder from Google Chrome Extension Samples.

npx extension dev https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.page-redder --browser=edge

chrome-extension-sample-page-redder-on-edge.mp4 🔥 Use Edge to start developing an extension from Chrome Extension Samples

> See the example below where we request the sample magic8ball from from Google Chrome Extension Samples with Edge as the runtime browser.

npx extension dev https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/topSites/magic8ball --browser=edge

chrome-extension-sample-magic8ball-on-edge.mp4 🔥🔥 Use Edge to start developing a Mozilla Add-On from MDN WebExtensions Examples

> See the example below where we request the sample Apply CSS from MDN WebExtensions Examples using Edge as the runtime browser.

npx extension dev https://github.com/mdn/webextensions-examples/tree/main/apply-css --browser=edge --polyfill=true

mdn-webextensions-examples-apply-css-on-edge.mp4 🔥🔥🔥 Use Chrome and Firefox to start developing a Mozilla Add-On from MDN WebExtensions Examples

> See the example below where we request the sample firefox-code-search from MDN WebExtensions Examples using Chrome and Firefox as the runtime browsers.

npx extension dev https://github.com/mdn/webextensions-examples/tree/main/firefox-code-search --browser=chrome,firefox --polyfill=true

mdn-webextensions-examples-firefox-code-search-on-chrome-and-firefox.mp4

I have An Extension
-------------------

usage-with-an-existing-extension.mp4

If you have an existing extension which is using a package manager, you can install the Extension.js package and manually create the scripts used to run your extension. See the demo above or follow these instructions to get it done:

**Step 1 - Install extension as a `devDependency`**

npm install extension --save-dev

**Step 2 - Link your npm scripts with the executable Extension.js commands**

{
  "scripts": {
    "build": "extension build",
    "dev": "extension dev",
    "start": "extension start"
  },
  "devDependencies": {
    // ...other dependencies
    "extension": "latest"
  }
}

Done. You are all set!

-   To develop the extension, run `npm run dev`.
-   To visualize the extension in production mode, run `npm run start`.
-   To build the extension in production mode, run `npm run build`.

Using a specific browser for development
----------------------------------------

### Desktop Browsers

Arc  
☑️

Brave  
☑️

Chrome  
✅

Chromium  
☑️

Edge  
✅

Firefox  
✅

Opera  
☑️

Safari  
⛔️

Vivaldi  
☑️

☑️ = It is theoretically possible to load all Chromium forks given the current support for Chrome. There is a request ticket for supporting all Chromium-based browsers. Most requested features are added first, so thumbs up it to speed-up the development process.

### Mobile Browsers

Firefox (Android)  
⛔️

Safari (iOS)  
⛔️

If you want to target a specific browser, just pass the `--browser` flag to the `dev`/`start` command (based on the list available above), like `npx extension dev path/to/extension --browser=edge`.

> Hint Pass --browser="all" to load all available browsers at once.

extension dev --browser=all

License
-------

MIT (c) Cezar Augusto.
