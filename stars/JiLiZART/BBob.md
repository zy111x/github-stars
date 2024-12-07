---
project: BBob
stars: 167
description: ⚡️Blazing fast js bbcode parser, that transforms and parses bbcode to AST and transform it to HTML, React, Vue with plugin support in pure javascript, no dependencies 
url: https://github.com/JiLiZART/BBob
---

BBob is a tool to parse and transform BBCode written in pure javascript, no dependencies

Packages
--------

Package

Status

Size

Description

@bbob/react

React renderer

@bbob/preset-react

React default tags preset

@bbob/vue3

Vue 3 renderer

@bbob/vue2

Vue 2 renderer

@bbob/preset-vue

Vue default tags preset

@bbob/html

HTML renderer

@bbob/preset-html5

HTML5 default tags preset

@bbob/core

Core package

DEMO Playground

Table of contents
-----------------

-   Usage
    -   Basic usage
    -   React usage
    -   Vue 2 usage
-   Parse Options
-   Presets
    -   Create your own preset
    -   HTML Preset
    -   React Preset
-   React usage
    -   Component
    -   Render prop
-   PostHTML usage
-   Create Plugin
-   Benchmarks
-   Donate

### Basic usage

npm i @bbob/html @bbob/preset-html5

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const processed \= bbobHTML(\`\[i\]Text\[/i\]\`, presetHTML5())

console.log(processed); // <span style="font-style: italic;">Text</span>

### React usage

npm i @bbob/react @bbob/preset-react

import React from 'react'
import BBCode from '@bbob/react';
import presetReact from '@bbob/preset-react';

const plugins \= \[presetReact()\];

export default () \=> (
    <BBCode plugins\={plugins}\>
    \[table\]
      \[tr\]
          \[td\]table 1\[/td\]
          \[td\]table 2\[/td\]
      \[/tr\]
      \[tr\]
          \[td\]table 3\[/td\]
          \[td\]table 4\[/td\]
      \[/tr\]
    \[/table\]
    </BBCode\>
)

import { render } from '@bbob/react'

export default () \=> render(\`
\[table\]
  \[tr\]
      \[td\]table 1\[/td\]
      \[td\]table 2\[/td\]
  \[/tr\]
  \[tr\]
      \[td\]table 3\[/td\]
      \[td\]table 4\[/td\]
  \[/tr\]
\[/table\]
\`)

### Vue 2 usage

npm i @bbob/vue2 @bbob/preset-vue

import Vue from 'vue'
import VueBbob from '@bbob/vue2';

Vue.use(VueBbob);

<template\>
  <div class\="html"\>
    <h2\>Generated HTML here</h2\>
    <bbob-bbcode container\="div" :plugins\="plugins"\>{{ bbcode }}</bbob-bbcode\>
  </div\>
</template\>
<script\>
  import Vue from 'vue'
  import preset from '@bbob/preset-vue'
  
  export default Vue.extend({
    name: 'App',
    data() {
      return {
        bbcode: 'Text \[b\]bolded\[/b\] and \[i\]Some Name\[/i\]',
        plugins: \[
          preset()
        \],
      }
    }
  })
</script\>

More examples available in examples folder

### Parse options

#### onlyAllowTags

Parse only allowed tags

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const processed \= bbobHTML(\`\[i\]\[b\]Text\[/b\]\[/i\]\`, presetHTML5(), { onlyAllowTags: \['i'\] })

console.log(processed); // <span style="font-style: italic;">\[b\]Text\[/b\]</span>

#### contextFreeTags

Enable context free mode that ignores parsing all tags inside given tags

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const processed \= bbobHTML(\`\[b\]Text\[/b\]\[code\]\[b\]Text\[/b\]\[/code\]\`, presetHTML5(), { contextFreeTags: \['code'\] })

console.log(processed); // <span style="font-weight: bold;">Text</span><pre>\[b\]Text\[/b\]</pre>

#### enableEscapeTags

Enable escape support for tags

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const processed \= bbobHTML(\`\[b\]Text\[/b\]'\\\\\[b\\\\\]Text\\\\\[/b\\\\\]'\`, presetHTML5(), { enableEscapeTags: true })

console.log(processed); // <span style="font-weight: bold;">Text</span>\[b\]Text\[/b\]

#### caseFreeTags

Allows to parse case insensitive tags like `[h1]some[/H1]` -> `<h1>some</h1>`

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const processed \= bbobHTML(\`\[h1\]some\[/H1\]\`, presetHTML5(), { caseFreeTags: true })

console.log(processed); // <h1>some</h1>

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const processed \= bbobHTML(\`\[b\]Text\[/b\]'\\\\\[b\\\\\]Text\\\\\[/b\\\\\]'\`, presetHTML5(), { enableEscapeTags: true })

console.log(processed); // <span style="font-weight: bold;">Text</span>\[b\]Text\[/b\]

### Presets

Its a way to transform parsed BBCode AST tree to another tree by rules in preset

#### Create your own preset

import { createPreset } from '@bbob/preset'

export default createPreset({
  quote: (node) \=> ({
    tag: 'blockquote',
    attrs: node.attrs,
    content: \[{
      tag: 'p',
      attrs: {},
      content: node.content,
    }\],
  }),
})

#### HTML Preset

Also you can use predefined preset for HTML

import html5Preset from '@bbob/preset-html5/es'
import { render } from '@bbob/html/es'
import bbob from '@bbob/core'

console.log(bbob(html5Preset()).process(\`\[quote\]Text\[/quote\]\`, { render }).html) // <blockquote><p>Text</p></blockquote>

#### React Preset

Also you can use predefined preset for React

import reactPreset from "@bbob/preset-react";
import reactRender from "@bbob/react/es/render";

const preset \= reactPreset.extend((tags, options) \=> ({
  ...tags,
  quote: node \=> ({
    tag: "blockquote",
    content: node.content
  })
}));

const result \= reactRender(\`\[quote\]Text\[/quote\]\`, reactPreset());

/\* 
It produces a VDOM Nodes equal to
React.createElement('blockquote', 'Text')
\*/
document.getElementById("root").innerHTML \= JSON.stringify(result, 4);

### React usage

#### Component

Or you can use React Component

import React from 'react'
import { render } from 'react-dom'

import BBCode from '@bbob/react/es/Component'
import reactPreset from '@bbob/preset-react/es'

const MyComponent \= () \=> (
  <BBCode plugins\={\[reactPreset()\]} options\={{ onlyAllowTags: \['i'\] }}\>
    \[quote\]Text\[/quote\]
  </BBCode\>
)

render(<MyComponent />) // <div><blockquote><p>Text</p></blockquote></div>

#### Render prop

Or pass result as render prop

import React from "react";
import { render } from 'react-dom'

import reactRender from '@bbob/react/es/render'
import reactPreset from '@bbob/preset-react/es'

const toReact \= input \=> reactRender(input, reactPreset())

const text \= toReact('\[b\]Super \[i\]easy\[/i\]\[/b\] \[u\]to\[/u\] render')

const App \= ({ renderProp }) \=> (
  <span\>{text}</span\>
)

render(<App />) // <span><span style="font-weight: bold;">Super <span style="font-style: italic;">easy</span></span> <span style="text-decoration: underline;">to</span> render</span>

### PostHTML usage

### Create Plugin

For example lets parse all strings that similar to links like "https://some-site.com"

import { createRoot } from "react-dom/client";

import BBCode from "@bbob/react/es/Component";
import TagNode from "@bbob/plugin-helper/es/TagNode";
import { isStringNode } from "@bbob/plugin-helper/es";

const URL\_RE \= new RegExp(
  \`(\[--:\\\\w?@%&+~#=\]+\\\\/\*\\\\.\[a-z\]{2,4}\\\\/{0,2})((?:\[?&\](?:\\\\w+)=(?:\\\\w+))+|\[^^).|,\]\[--:\\\\w?@%&+~#=()\_\]+)?\`,
  "g"
);

const isValidUrl \= (url) \=> URL\_RE.test(url);

const linkParsePlugin \= (tree) \=> {
  return tree.walk((node) \=> {
    if (isStringNode(node) && isValidUrl(node)) {
      return TagNode.create(
        "a",
        {
          href: node
        },
        \`Url to: ${node}\`
      );
    }

    return node;
  });
};

const rootElement \= document.getElementById("root");
const root \= createRoot(rootElement);

root.render(
  <BBCode plugins\={\[linkParsePlugin\]}\>
    https://github.com/JiLiZART/BBob Other text without link
  </BBCode\>
);

### Benchmarks

To test on your machine run

npm run build
node benchmark

Tested on Node v20.11.1

Package

Ops/sec

regex/parser

`6 ops/sec`

ya-bbcode

`11 ops/sec`

xbbcode/parser

`102 ops/sec`

@bbob/parser

`174 ops/sec`

Checkout Benckmark job results

### Donations

You can support this projecti with donation in:

_Bitcoin:_ `bc1qx34sx3zmfd5e2km607p8s8t30d4rt33d2l9pwt`

_USDT(TRC20):_ `TT94uVjJho8n47xbdfNYz6vdebgmKFpxAT`

Also thanks to support

Developed with <3 using JetBrains
