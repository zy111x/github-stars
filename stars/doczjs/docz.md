---
project: docz
stars: 23679
description: ✍ It has never been so easy to document your things!
url: https://github.com/doczjs/docz
---

> ⚠️ WARNING

> This is an **OUTDATED** version of Docz, if you are going to use it, be aware that you may possibly find bugs due to the outdated dependencies. Mainly because of all this time without updates, became almost impossible to follow with the decision of keep the same stack and update things.

> So, we're working in a new version that will include an entire core refactoring/rewritting by adding Astro behind the scenes as bundler and another cools feature.

> Since we really want to don't have so much breakings changes - and try to bring back the spot and quality Docz deserves - this can take a while to be done, please be patient and if you want to help, just send me a message on my Twitter!

> Issues related to this old version, also won't be answered, ok? 😅

> Thank you 🙏

Docz
====

Docz makes it easy to write and publish beautiful interactive documentation for your code. Create MDX files showcasing your code and Docz turns them into a live-reloading, production-ready site.

Why?
----

Documenting code is one of the most important and time-consuming tasks when developing software.

A lot of time is spent on building and maintaining custom documentation sites.

Docz enables you to quickly create a live-reloading, SEO-friendly, production-ready documentation site with MDX and customize the look, feel and behavior when required by leveraging GatsbyJS and Gatsby theme shadowing.

Getting started
---------------

Start by adding `docz` as a dependency to your project with Yarn or npm:

$ yarn add docz # react react-dom

# or

$ npm install docz # react react-dom

> **Note**: `react` and `react-dom` will not be installed automatically. You'll have to install them yourself.

Then, create `.mdx` files anywhere in your project:

\---
name: Button
route: /
\---

import { Playground, Props } from 'docz'
import Button from './Button'

\# Button

<Props of\={Button} />

\## Basic usage

<Playground\>
  <Button type\="submit"\>Click me</Button\>
  <Button\>No, click me</Button\>
</Playground\>

And a Button component `Button.jsx`:

import React from 'react'
import t from 'prop-types'

const Button \= ({ children, type }) \=> <button type\={type}\>{children}</button>

Button.propTypes \= {
  /\*\*
   \* This is a description for this prop.
   \* Button type.
   \*/
  type: t.oneOf(\['button', 'submit', 'reset'\]),
}
Button.defaultProps \= {
  type: 'button',
}
export default Button

Finally, run:

yarn docz dev

This starts a local development server and opens your documentation site in the browser.

Build
-----

`yarn docz build` generates a static site in `.docz/dist/`.

Try it with `yarn docz serve` or by serving the generated site with your favorite static file server (e.g. `npx serve .docz/dist`).

You can have `yarn docz build` emit to a different directory by providing a path to the `dest` field in your `doczrc.js` or from the command line: `yarn docz build --dest docs-site-directory`.

Deploying
---------

The output of docz consists of static assets only. This allows you to deploy your generated `docz` site with any static site hosting provider you'd like.

Start by building your site with `yarn docz build`, if you haven't provided a `dest` flag to your config then you will find your generated files in `.docz/dist` to copy to the server.

Examples
--------

-   **with basic**
-   **with a gatsby site**
-   **with react native**
-   **with styled-components**
-   **with typescript**
-   **with algolia search**
-   **with gatsby-remark-vscode**
-   **with react-router**
-   **with flow**
-   **with images**
-   **with sass**
-   **with less**
-   **with stylus**
-   **with css modules**: works out of the box.

### You can check the complete list of docz examples here.

More info on docz.site
----------------------

Used by
-------

-   **Welcome UI**: Customizable design system with react • styled-components • styled-system and reakit.
-   **React Hooks Testing Library**: 🐏 Simple and complete React hooks testing utilities that encourage good testing practices.
-   **Mobx React**: mobx-react documentation site.
-   **React Google Charts**: A thin, typed, React wrapper over Google Charts Visualization and Charts API.
-   **Entur**: Entur operates the national registry for all public transport in Norway.
-   **FAB Specification**: 💎 FABs are a compile target for frontend applications.
-   **@umijs/hooks**: React Hooks Library.
-   **React Yandex Maps**: Yandex Maps API bindings for React.
-   **Components-extra**: Customizable react component blocks built with material-ui and styled-components.
-   **Add your site**

Contributors
------------

This project exists thanks to all the people who contribute. \[Contribute\].

Contributing
------------

All kinds of contributions are very welcome and appreciated!

If you want to contribute time to docz then here's a list of suggestions to get you started:

1.  Star the project on GitHub.
2.  Help people in the issues by sharing your knowledge and experience.
3.  Find and report issues.
4.  Submit pull requests to help solve issues or add features.
5.  Influence the future of docz with feature requests.

If you're looking for a place to start make sure to check issues tagged with the `good first issue` label:

Read the Contributing Guide before you open a pull request.

You can also sponsor us via OpenCollective to help secure docz's future.
