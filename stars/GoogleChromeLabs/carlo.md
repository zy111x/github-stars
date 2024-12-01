---
project: carlo
stars: 9312
description: Web rendering surface for Node applications
url: https://github.com/GoogleChromeLabs/carlo
---

Carlo - headful Node app framework
==================================

### ❗Carlo is no longer maintained.

* * *

> Carlo provides Node applications with Google Chrome rendering capabilities, communicates with the locally-installed browser instance using the Puppeteer project, and implements a remote call infrastructure for communication between Node and the browser.

###### API | FAQ | Contributing

###### What can I do?

With Carlo, users can create hybrid applications that use Web stack for rendering and Node for capabilities:

-   For Node applications, the web rendering stack lets users visualize the dynamic state of the app.
-   For Web applications, additional system capabilities are accessible from Node.
-   The application can be bundled into a single executable using pkg.

###### How does it work?

-   Carlo locates Google Chrome installed locally.
-   Launches Chrome and establishes a connection over the process pipe.
-   Exposes a high-level API for rendering in Chrome with the Node environment.

Usage
-----

Install Carlo

#### npm

npm i carlo
# yarn add carlo

> Carlo requires at least Node v7.6.0.

**Example** - Display local environment

Save file as **example.js**

const carlo \= require('carlo');

(async () \=> {
  // Launch the browser.
  const app \= await carlo.launch();

  // Terminate Node.js process on app window closing.
  app.on('exit', () \=> process.exit());

  // Tell carlo where your web files are located.
  app.serveFolder(\_\_dirname);

  // Expose 'env' function in the web environment.
  await app.exposeFunction('env', \_ \=> process.env);

  // Navigate to the main page of your app.
  await app.load('example.html');
})();

Save file as **example.html**

<script\>
async function run() {
  // Call the function that was exposed in Node.
  const data \= await env();
  for (const type in data) {
    const div \= document.createElement('div');
    div.textContent \= \`${type}: ${data\[type\]}\`;
    document.body.appendChild(div);
  }
}
</script\>
<body onload\="run()"\>

Run your application:

node example.js

Check out systeminfo and terminal examples with richer UI and RPC-based communication between the Web and Node in the examples folder.

API
---

Check out the API to get familiar with Carlo.

Testing
-------

Carlo uses Puppeteer project for testing. Carlo application and all Carlo windows have corresponding Puppeteer objects exposed for testing. Please refer to the API and the systeminfo project for more details.

Contributing to Carlo
---------------------

Look at the contributing guide to get an overview of Carlo's development.

FAQ
---

#### Q: What was the motivation behind this project when we already have Electron and NW.js? How does this project differ from these platforms, how does it achieve something that is not possible/harder with Electron or NW.js?

-   One of the motivations of this project is to demonstrate how browsers that are installed locally can be used with Node out of the box.
-   Node v8 and Chrome v8 engines are decoupled in Carlo, providing a maintainable model with the ability to independently update underlying components. Carlo gives the user control over bundling and is more about productivity than branding.

#### Q: Can a Node app using Carlo be packaged as a Desktop app?

The pkg project can be used to package a Node app as a Desktop app. Carlo does not provide branding configurability such as application icons or customizable menus, instead, Carlo focuses on productivity and Web/Node interoperability. Check out the systeminfo example and call `pkg package.json` to see how it works.

#### Q: What happens if the user does not have Chrome installed?

Carlo prints an error message when Chrome can not be located.

#### Q: What is the minimum Chrome version that Carlo supports?

Chrome Stable channel, versions 70.\* are supported.
