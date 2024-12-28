---
project: markdown-it-emoji
stars: 731
description: Emoji syntax plugin for markdown-it markdown parser
url: https://github.com/markdown-it/markdown-it-emoji
---

markdown-it-emoji
=================

> Plugin for markdown-it markdown parser, adding emoji & emoticon syntax support. Also supports emoticons shortcuts like `:)`, `:-(`, and others.

**NOTE. v3 changed exports, see below.**

Install
-------

npm install markdown-it-emoji

Use
---

### init

//
// { full, light, bare } configs available.
//
//  full:  includes all available emojis support
//  light: includes small subset of most useable emojis
//  bare:  no defaults
//
// Also CJS & UMD builds available in \`dist/\` folder of published package,
// if your env not supports ESM modules use.
//
import { full as emoji } from 'markdown-it-emoji'
import markdownit from 'markdown-it'

const md \= markdownit().use(emoji/\* , options \*/);

Options are not mandatory:

-   **defs** (Object) - rewrite available emoji definitions
    -   example: `{ name1: char1, name2: char2, ... }`
-   **enabled** (Array) - disable all emojis except whitelisted
-   **shortcuts** (Object) - rewrite default shortcuts
    -   example: `{ "smile": [ ":)", ":-)" ], "laughing": ":D" }`

_Differences in browser._ If you load the script directly into the page without using a package system, the module will add itself globally with the name `markdownitEmoji`.

### change output

By default, emojis are rendered as appropriate unicode chars. But you can change the renderer function as you wish.

Render as span blocks (for example, to use a custom iconic font):

// ...
// initialize

md.renderer.rules.emoji \= function(token, idx) {
  return '<span class="emoji emoji\_' + token\[idx\].markup + '"></span>';
};

Or use twemoji:

// ...
// initialize

import twemoji from 'twemoji'

md.renderer.rules.emoji \= function(token, idx) {
  return twemoji.parse(token\[idx\].content);
};

**NB 1**. Read twemoji docs! In case you need more options to change image size & type.

**NB 2**. When using twemoji you can make image height match the line height with this style:

.emoji {
  height: 1.2em;
}

### In your markdown file

Hello from mars :satellite:

becomes

```
Hello from mars 📡
```
