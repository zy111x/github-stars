---
project: jarvis
stars: 5437
description: A very intelligent browser based Webpack dashboard
---

  

About the Project
-----------------

J.A.R.V.I.S. (Just A Rather Very Intelligent System) will put in your browser all the relevant information you need from your webpack build whether in dev or in prod.

Tons of features are on the roadmap but still, this beta version will improve the way you look at webpack-dev-server or webpack production build bundle, chunks and other output assets.

It is hugely inspired by other webpack dashboards and the core idea is not original, but here are some features:

**Original Features**:

-   Shows you the count of ES Harmony module imports which can be treeshakable and the CJS ones which are not.
-   Shows you how well your assets perform in 12 different connection types.
-   Google or Stackoverflow Search for programming errors in 1 button click.

**Other Features**:

-   Runs in the browser.
-   Beautified errors output.
-   Easy way figure out total assets size and individual bundles and chunks.
-   It's very beautiful.

**Tech Stack:**

-   Preact with Sass pre-processor.
-   Socket IO.
-   Polka Server.

**Screenshot:**

Installation
------------

```
$ npm i -D webpack-jarvis
```

In your webpack config file:

const Jarvis \= require("webpack-jarvis");

/\* the rest of your webpack configs \*/

plugins: \[
  new Jarvis({
    port: 1337 // optional: set a port
  })
\];

In your browser open:

```
localhost:1337
```

and you are all set!

Options
-------

Options are (optionally) passed in to the constructor

new Jarvis(options);

### `options.port`

Type: `Number`  
Default: `1337`

The Jarvis dashboard will open on a localhost server at this port.

### `options.host`

Type: `String`  
Default: `localhost`

The Jarvis dashboard will attach to this host, e.g. `0.0.0.0`.

`options.watchOnly`
-------------------

Type: `Boolean`  
Default: `true`

If set to false, then Jarvis will also run for non-watch builds, and keep running after the build completes.

`options.packageJsonPath`
-------------------------

Type: `String`  
Default: `process.cwd()`

Jarvis will look inside this directory for your package.json.

Help & Contribute
-----------------

Setting up the dev environment

Install Dependencies:

```
$ npm install
```

Run Jarvis in your browser, Jarvis root:

```
$ npm run watch
```

Finally, open a browser to `http://localhost:1337`!

**On the roadmap:**

-   Cleanup the hacky code in the client app, it's embarassing, I'm sorry!
-   Enforce best practices, structure and higher code quality standards.
-   Bundle size analyzer like feature in the table.
-   Build snippets page.
-   Build Oppurtunities Section to suggest loaders, plugins, etc. that can improve your build and bundle.

**Note:**

> I am not entirely sure how many bugs you will catch while it's in beta, but what I know for sure is the whole app, especially the client Preact app can be dramatically improved, JS & CSS and structure wise as the whole thing has been built in a rush in a very hacky way.

Contributors
------------

Thanks goes to these wonderful people (emoji key):

  
**Zouhir ⚡️**  
💻 🤔

  
**Luke Edwards**  
💻

  
**Ari Picker**  
💻

  
**Marius Niveri**  
💻

  
**Gagan**  
📖

  
**石发磊**  
📖

  
**ZiYingMai**  
💻

  
**rachmulvey**  
💻

  
**Stephan Schneider**  
📖

  
**Christopher Peng**  
💻

  
**Francesco Soncina**  
💻

  
**Jeremy Monson**  
💻

  
**Gusten**  
💻

  
**Tamas Sule**  
💻

  
**remmy hume**  
💻

  
**Michael Persson**  
📖

  
**Zach Gawlik**  
💻 📖

  
**Khachatur**  
💻

  
**Timo M. Staudinger**  
💻

This project follows the all-contributors specification. Contributions of any kind are welcome!

Credits
-------

-   Webpack Dashboard by Formidable Labs

License
-------

MIT © Zouhir
