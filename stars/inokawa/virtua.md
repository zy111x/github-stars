---
project: virtua
stars: 1755
description: A zero-config, fast and small (~3kB) virtual list (and grid) component for React, Vue, Solid and Svelte.
url: https://github.com/inokawa/virtua
---

virtua
======

> A zero-config, fast and small (~3kB) virtual list (and grid) component for React, Vue, Solid and Svelte.

If you want to check the difference with the alternatives right away, see comparison section.

Motivation
----------

This project is a challenge to rethink virtualization. The goals are...

-   **Zero-config virtualization:** This library is designed to give the best performance without configuration. It also handles common hard things in the real world (dynamic size measurement, scroll position adjustment while reverse scrolling and imperative scrolling, iOS support, etc).
-   **Fast:** Natural virtual scrolling needs optimization in many aspects (eliminate frame drops by reducing CPU usage and GC, reduce synchronous layout recalculation, reduce visual jumps on repaint, optimize with CSS, optimize for frameworks, etc). We are trying to combine the best of them.
-   **Small:** Its bundle size should be small as much as possible to be friendly with modern web development. Currently each components are ~3kB gzipped and tree-shakeable. The total size for React is ~5kB gzipped.
-   **Flexible:** Aiming to support many usecases - fixed size, dynamic size, horizontal scrolling, reverse scrolling, RTL, mobile, infinite scrolling, scroll restoration, DnD, keyboard navigation, sticky, placeholder and more. See live demo.
-   **Framework agnostic:** React, Vue, Solid and Svelte are supported. We could support other frameworks in the future.

Demo
----

https://inokawa.github.io/virtua/

Install
-------

npm install virtua

If you use this lib in legacy browsers which does not have ResizeObserver, you should use polyfill.

Getting started
---------------

### React

`react >= 16.14` is required.

If you use ESM and webpack 5, use react >= 18 to avoid Can't resolve `react/jsx-runtime` error.

#### Vertical scroll

import { VList } from "virtua";

export const App \= () \=> {
  return (
    <VList style\={{ height: 800 }}\>
      {Array.from({ length: 1000 }).map((\_, i) \=> (
        <div
          key\={i}
          style\={{
            height: Math.floor(Math.random() \* 10) \* 10 + 10,
            borderBottom: "solid 1px gray",
            background: "white",
          }}
        \>
          {i}
        </div\>
      ))}
    </VList\>
  );
};

#### Horizontal scroll

import { VList } from "virtua";

export const App \= () \=> {
  return (
    <VList style\={{ height: 400 }} horizontal\>
      {Array.from({ length: 1000 }).map((\_, i) \=> (
        <div
          key\={i}
          style\={{
            width: Math.floor(Math.random() \* 10) \* 10 + 10,
            borderRight: "solid 1px gray",
            background: "white",
          }}
        \>
          {i}
        </div\>
      ))}
    </VList\>
  );
};

#### Customization

`VList` is a recommended solution which works like a drop-in replacement of simple list built with scrollable `div` (or removed virtual-scroller element). For more complicated styling or markup, use `Virtualizer`.

import { Virtualizer } from "virtua";

export const App \= () \=> {
  return (
    <div style\={{ overflowY: "auto", height: 800 }}\>
      <div style\={{ height: 40 }}\>header</div\>
      <Virtualizer startMargin\={40}\>
        {Array.from({ length: 1000 }).map((\_, i) \=> (
          <div
            key\={i}
            style\={{
              height: Math.floor(Math.random() \* 10) \* 10 + 10,
              borderBottom: "solid 1px gray",
              background: "white",
            }}
          \>
            {i}
          </div\>
        ))}
      </Virtualizer\>
    </div\>
  );
};

#### Window scroll

import { WindowVirtualizer } from "virtua";

export const App \= () \=> {
  return (
    <div style\={{ padding: 200 }}\>
      <WindowVirtualizer\>
        {Array.from({ length: 1000 }).map((\_, i) \=> (
          <div
            key\={i}
            style\={{
              height: Math.floor(Math.random() \* 10) \* 10 + 10,
              borderBottom: "solid 1px gray",
              background: "white",
            }}
          \>
            {i}
          </div\>
        ))}
      </WindowVirtualizer\>
    </div\>
  );
};

#### Vertical and horizontal scroll

import { experimental\_VGrid as VGrid } from "virtua";

export const App \= () \=> {
  return (
    <VGrid style\={{ height: 800 }} row\={1000} col\={500}\>
      {({ rowIndex, colIndex }) \=> (
        <div
          style\={{
            width: ((colIndex % 3) + 1) \* 100,
            border: "solid 1px gray",
            background: "white",
          }}
        \>
          {rowIndex} / {colIndex}
        </div\>
      )}
    </VGrid\>
  );
};

#### React Server Components (RSC) support

This library is marked as a Client Component. You can render RSC as children of `VList`, `Virtualizer` or `WindowVirtualizer`.

// page.tsx in App Router of Next.js

export default async () \=> {
  const articles \= await fetchArticles();
  return (
    <div\>
      <div\>This is Server Component</div\>
      <VList style\={{ height: 300 }}\>
        {articles.map((a) \=> (
          <div key\={a.id} style\={{ border: "solid 1px gray", height: 80 }}\>
            {a.content}
          </div\>
        ))}
      </VList\>
    </div\>
  );
};

### Vue

`vue >= 3.2` is required.

<script setup>
import { VList } from "virtua/vue";
const sizes \= \[20, 40, 180, 77\];
const data \= Array.from({ length: 1000 }).map((\_, i) \=> sizes\[i % 4\]);
</script\>

<template\>
  <VList :data\="data" :style\="{ height: '800px' }" #default\="{ item, index }"\>
    <div
      :key\="index"
      :style\="{
        height: item + 'px',
        background: 'white',
        borderBottom: 'solid 1px #ccc',
      }"
    >
      {{ index }}
    </div\>
  </VList\>
</template\>

### Solid

`solid-js >= 1.0` is required.

import { VList } from "virtua/solid";

export const App \= () \=> {
  const sizes \= \[20, 40, 80, 77\];
  const data \= Array.from({ length: 1000 }).map((\_, i) \=> sizes\[i % 4\]);

  return (
    <VList data\={data} style\={{ height: "800px" }}\>
      {(d, i) \=> (
        <div
          style\={{
            height: d + "px",
            "border-bottom": "solid 1px #ccc",
            background: "#fff",
          }}
        \>
          {i}
        </div\>
      )}
    </VList\>
  );
};

### Svelte

`svelte >= 5.0` is required.

<script lang\="ts"\>
  import { VList } from "virtua/svelte";
  const sizes \= \[20, 40, 180, 77\];
  const data \= Array.from({ length: 1000 }).map((\_, i) \=> sizes\[i % 4\] );
</script\>

<VList {data} style\="height: 100vh;" getKey\={(\_, i) \=> i}>
  {#snippet children(item, index)}
    <div
      style\="
        height: {item}px;
        background: white;
        border-bottom: solid 1px #ccc;
      "
    >
      {index}
    </div\>
  {/snippet}
</VList\>

Documentation
-------------

-   API reference
-   Storybook examples for more usages

### FAQs

#### Is there any way to improve performance further?

In complex usage, especially if you re-render frequently the parent of virtual scroller or the children are tons of items, children element creation can be a performance bottle neck. That's because creating React elements is fast enough but not free and new React element instances break some of memoization inside virtual scroller.

One solution is memoization with `useMemo`. You can use it to reduce computation and keep the elements' instance the same. And if you want to pass state from parent to the items, using `context` instead of props may be better because it doesn't break the memoization.

const elements \= useMemo(
  () \=> tooLongArray.map((d) \=> <Component key\={d.id} {...d} />),
  \[tooLongArray\]
);
const \[position, setPosition\] \= useState(0);
return (
  <div\>
    <div\>position: {position}</div\>
    <VList onScroll\={(offset) \=> setPosition(offset)}\>{elements}</VList\>
  </div\>
);

The other solution is using `render prop` as children to create elements lazily. It will effectively reduce cost on start up when you render many items (>1000). An important point is that newly created elements from `render prop` will disable optimization possible with cached element instances. We recommend using `memo` to reduce calling render function of your item components during scrolling.

const Component \= memo(HeavyItem);

<VList count\={items.length}\>
  {(i) \=> {
    const item \= items\[i\];
    return <Component key\={item.id} data\={item} />;
  }}
</VList\>;

Decreasing `overscan` prop may also improve perf in case that components are large and heavy.

Virtua try to suppress glitch caused by resize as much as possible, but it will also require additional work. If your item contains something resized often, such as lazy loaded image, we recommend to set height or min-height to it if possible.

#### What is `ResizeObserver loop completed with undelivered notifications.` error?

It may be dispatched by ResizeObserver in this lib as described in spec, and this is a common problem with ResizeObserver. If it bothers you, you can safely ignore it.

Especially for `webpack-dev-server`, you can filter out the specific error with `devServer.client.overlay.runtimeErrors` option.

#### Why `VListHandle.viewportSize` is 0 on mount?

`viewportSize` will be calculated by ResizeObserver so it's 0 until the first measurement.

#### What is `Cannot find module 'virtua/vue(solid|svelte)' or its corresponding type declarations` error?

This package uses exports of package.json for entry point of Vue/Solid/Svelte adapter. This field can't be resolved in TypeScript with `moduleResolution: node`. Try `moduleResolution: bundler` or `moduleResolution: nodenext` instead.

Comparison
----------

### Features

virtua

react-virtuoso

react-window

react-virtualized

@tanstack/react-virtual

react-tiny-virtual-list

react-cool-virtual

Bundle size

Vertical scroll

✅

✅

✅

✅

🟠 (needs customization)

✅

🟠 (needs customization)

Horizontal scroll

✅

✅

✅ (may be dropped in v2)

✅

🟠 (needs customization)

✅

🟠 (needs customization)

Horizontal scroll in RTL direction

✅

❌

✅ (may be dropped in v2)

❌

❌

❌

❌

Grid (Virtualization for two dimension)

🟠 (experimental\_VGrid)

❌

✅ (FixedSizeGrid / VariableSizeGrid)

✅ (Grid)

🟠 (needs customization)

❌

🟠 (needs customization)

Table

🟠 (needs customization)

✅ (TableVirtuoso)

🟠 (needs customization)

🟠 (Table but it's built with div)

🟠 (needs customization)

❌

🟠 (needs customization)

Window scroller

✅ (WindowVirtualizer)

✅

❌

✅ (WindowScroller)

✅ (useWindowVirtualizer)

❌

❌

Dynamic list size

✅

✅

🟠 (needs AutoSizer)

🟠 (needs AutoSizer)

✅

❌

✅

Dynamic item size

✅

✅

🟠 (needs additional codes and has wrong destination when scrolling to item imperatively)

🟠 (needs CellMeasurer and has wrong destination when scrolling to item imperatively)

🟠 (has wrong destination when scrolling to item imperatively)

❌

🟠 (has wrong destination when scrolling to item imperatively)

Reverse scroll

✅

✅

❌

❌

❌

❌

❌

Reverse scroll in iOS Safari

🟠 (user must release scroll)

🟠 (has glitch with unknown sized items)

❌

❌

❌

❌

❌

Infinite scroll

✅

✅

🟠 (needs react-window-infinite-loader)

🟠 (needs InfiniteLoader)

✅

❌

✅

Reverse (bi-directional) infinite scroll

✅

✅

❌

❌

❌

❌

🟠 (has startItem method but its scroll position can be inaccurate)

Scroll restoration

✅

✅ (getState)

❌

❌

❌

❌

❌

Smooth scroll

✅

✅

❌

❌

✅

❌

✅

SSR support

✅

✅

✅

✅

✅

❌

✅

Render React Server Components (RSC) as children

✅

❌

❌

❌

🟠(needs customization)

❌

🟠 (needs customization)

Display exceeding browser's max element size limit

❌

❌

❌

✅

❌

❌

❌

-   ✅ - Built-in supported
-   🟠 - Supported but partial, limited or requires some user custom code
-   ❌ - Not officially supported

### Benchmark

WIP

Contribute
----------

All contributions are welcome. If you find a problem, feel free to create an issue or a PR. If you have a question, ask in discussions.

### Making a Pull Request

1.  Fork this repo.
2.  Run `npm install`.
3.  Commit your fix.
4.  Make a PR and confirm all the CI checks passed.
