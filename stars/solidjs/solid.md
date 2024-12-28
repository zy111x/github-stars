---
project: solid
stars: 32683
description: A declarative, efficient, and flexible JavaScript library for building user interfaces.
url: https://github.com/solidjs/solid
---

**Website • API Docs • Features Tutorial • Playground • Discord**

Solid is a declarative JavaScript library for creating user interfaces. Instead of using a Virtual DOM, it compiles its templates to real DOM nodes and updates them with fine-grained reactions. Declare your state and use it throughout your app, and when a piece of state changes, only the code that depends on it will rerun.

At a Glance
-----------

import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function Counter() {
  const \[count, setCount\] \= createSignal(0);
  const doubleCount \= () \=> count() \* 2;
  
  console.log("The body of the function runs once...");

  return (
    <\>
      <button onClick\={() \=> setCount(c \=> c + 1)}\>
        {doubleCount()}
      </button\>
    </\>
  );
}

render(Counter, document.getElementById("app")!);

Try this code in our playground!

Explain this!

import { createSignal } from "solid-js";
import { render } from "solid-js/web";

// A component is just a function that returns a DOM node
function Counter() {
  // Create a piece of reactive state, giving us a accessor, count(), and a setter, setCount()
  const \[count, setCount\] \= createSignal(0);
  
  //To create derived state, just wrap an expression in a function
  const doubleCount \= () \=> count() \* 2;
  
  console.log("The body of the function runs once...");

  // JSX allows you to write HTML within your JavaScript function and include dynamic expressions using the { } syntax
  // The only part of this that will ever rerender is the doubleCount() text.
  return (
    <\>
      <button onClick\={() \=> setCount(c \=> c + 1)}\>
        Increment: {doubleCount()}
      </button\>
    </\>
  );
}

// The render function mounts a component onto your page
render(Counter, document.getElementById("app")!);

Solid compiles your JSX down to efficient real DOM updates. It uses the same reactive primitives (`createSignal`) at runtime but making sure there's as little rerendering as possible. Here's what that looks like in this example:

import { template as \_$template } from "solid-js/web";
import { delegateEvents as \_$delegateEvents } from "solid-js/web";
import { insert as \_$insert } from "solid-js/web";
//The compiler pulls out any static HTML
const \_tmpl$ \= /\*#\_\_PURE\_\_\*/\_$template(\`<button>Increment: \`);

import { createSignal, createEffect } from "solid-js";
import { render } from "solid-js/web";

function Counter() {
  const \[count, setCount\] \= createSignal(0);
  
  const doubleCount \= () \=> count() \* 2;
  
  console.log("The body of the function runs once...");
  
  return (() \=> {
    //\_el$ is a real DOM node!
    const \_el$ \= \_tmpl$();
    \_el$.$$click \= () \=> setCount(c \=> c + 1);
     //This inserts the count as a child of the button in a way that allows count to update without rerendering the whole button
    \_$insert(\_el$, doubleCount);
    return \_el$;
  })();
}
render(Counter, document.getElementById("app"));
\_$delegateEvents(\["click"\]);

Key Features
------------

-   Fine-grained updates to the real DOM
-   Declarative data: model your state as a system with reactive primitives
-   Render-once mental model: your components are regular JavaScript functions that run once to set up your view
-   Automatic dependency tracking: accessing your reactive state subscribes to it
-   Small and fast
-   Simple: learn a few powerful concepts that can be reused, combined, and built on top of
-   Provides modern framework features like JSX, fragments, Context, Portals, Suspense, streaming SSR, progressive hydration, Error Boundaries and concurrent rendering.
-   Naturally debuggable: A `<div>` is a real div, so you can use your browser's devtools to inspect the rendering
-   Web component friendly and can author custom elements
-   Isomorphic: render your components on the client and the server
-   Universal: write custom renderers to use Solid anywhere
-   A growing community and ecosystem with active core team support

Quick Start

You can get started with a simple app by running the following in your terminal:

\> npx degit solidjs/templates/js my-app
\> cd my-app
\> npm i # or yarn or pnpm
\> npm run dev # or yarn or pnpm

Or for TypeScript:

\> npx degit solidjs/templates/ts my-app
\> cd my-app
\> npm i # or yarn or pnpm
\> npm run dev # or yarn or pnpm

This will create a minimal, client-rendered application powered by Vite.

Or you can install the dependencies in your own setup. To use Solid with JSX (_recommended_), run:

\> npm i -D babel-preset-solid
\> npm i solid-js

The easiest way to get set up is to add `babel-preset-solid` to your `.babelrc`, babel config for webpack, or rollup configuration:

"presets": \["solid"\]

For TypeScript to work, remember to set your `.tsconfig` to handle Solid's JSX:

"compilerOptions": {
  "jsx": "preserve",
  "jsxImportSource": "solid-js",
}

Why Solid?
----------

### Performant

Meticulously engineered for performance and with half a decade of research behind it, Solid's performance is almost indistinguishable from optimized vanilla JavaScript (See Solid on the JS Framework Benchmark). Solid is small and completely tree-shakable, and fast when rendering on the server, too. Whether you're writing a fully client-rendered SPA or a server-rendered app, your users see it faster than ever. (Read more about Solid's performance from the library's creator.)

### Powerful

Solid is fully-featured with everything you can expect from a modern framework. Performant state management is built-in with Context and Stores: you don't have to reach for a third party library to manage global state (if you don't want to). With Resources, you can use data loaded from the server like any other piece of state and build a responsive UI for it thanks to Suspense and concurrent rendering. And when you're ready to move to the server, Solid has full SSR and serverless support, with streaming and progressive hydration to get to interactive as quickly as possible. (Check out our full interactive features walkthrough.)

### Pragmatic

Do more with less: use simple, composable primitives without hidden rules and gotchas. In Solid, components are just functions - rendering is determined purely by how your state is used - so you're free to organize your code how you like and you don't have to learn a new rendering system. Solid encourages patterns like declarative code and read-write segregation that help keep your project maintainable, but isn't opinionated enough to get in your way.

### Productive

Solid is built on established tools like JSX and TypeScript and integrates with the Vite ecosystem. Solid's bare-metal, minimal abstractions give you direct access to the DOM, making it easy to use your favorite native JavaScript libraries like D3. And the Solid ecosystem is growing fast, with custom primitives, component libraries, and build-time utilities that let you write Solid code in new ways.

More
----

Check out our official documentation or browse some examples

Browser Support
---------------

SolidJS Core is committed to supporting the last 2 years of modern browsers including Firefox, Safari, Chrome and Edge (for desktop and mobile devices). We do not support IE or similar sunset browsers. For server environments, we support Node LTS and the latest Deno and Cloudflare Worker runtimes.

Community
---------

Come chat with us on Discord! Solid's creator and the rest of the core team are active there, and we're always looking for contributions.

### Contributors

### Open Collective

Support us with a donation and help us continue our activities. \[Contribute\]

### Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. \[Become a sponsor\]
