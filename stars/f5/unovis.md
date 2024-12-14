---
project: unovis
stars: 2311
description: Modular data visualization framework for React, Angular, Svelte, Vue, and vanilla TypeScript or JavaScript
url: https://github.com/f5/unovis
---

Unovis.mp4

🟨 **Unovis** is a modular data visualization framework for React, Angular, Svelte, Vue, Solid and vanilla TypeScript or JavaScript:

-   📈 🗺 It has charts, maps, network graphs, and more!
-   🌳 Tree-shakable and supports individual component imports to reduce your bundle size;
-   🎨 Highly customizable, thanks to the CSS-variables support.

Learn more about _Unovis_ on unovis.dev

Quick Start
-----------

You can install the core of the library `@unovis/ts` and framework-specific packages (if you use React, Angular, Svelte, Vue or Solid) from NPM:

npm install -P @unovis/ts @unovis/<react|angular|svelte|vue|solid\>

Now you can import components and create your first chart! Here's how to build a simple line chart uising Unovis and React:

import React, { useCallback } from 'react'
import { VisXYContainer, VisLine, VisAxis } from '@unovis/react'

type DataRecord \= { x: number; y: number }
const data: DataRecord\[\] \= \[
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
\]

export function BasicLineChart (): JSX.Element {
  return (
    <VisXYContainer data\={data}\>
      <VisLine<DataRecord\>
        x\={useCallback(d \=> d.x, \[\])}
        y\={useCallback(d \=> d.y, \[\])}
      \></VisLine\>
      <VisAxis type\="x"\></VisAxis\>
      <VisAxis type\="y"\></VisAxis\>
    </VisXYContainer\>
  )
}

Looking for Angular, Svelte, Vue, Solid or TypeScript examples? Check out the Quick Start page on our website.

Examples and Documentation
--------------------------

📖 _Unovis_ has an extensive documentation with code snippets for React, Angular, Svelte and TypeScript.

🖼 Also there's a growing gallery of examples, from where you can copy the code over to your project or try it live on StackBlitz.

Repository structure
--------------------

-   `packages/ts` Core TypeScript package
-   `packages/angular` Angular components
-   `packages/react` React components
-   `packages/svelte` Svelte components
-   `packages/vue` Vue components
-   `packages/solid` Solid components
-   `packages/website` Website, docs and examples

Contributing
------------

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. For more information, please read CONTRIBUTING.

Maintainers
-----------

Contributors
------------

License
-------

_Unovis_ is licensed under Apache-2.0
