---
project: rehype
stars: 1837
description: HTML processor powered by plugins part of the @unifiedjs collective
url: https://github.com/rehypejs/rehype
---

**rehype** is a tool that transforms HTML with plugins. These plugins can inspect and change the HTML. You can use rehype on the server, the client, CLIs, deno, etc.

Intro
-----

rehype is an ecosystem of plugins that work with HTML as structured data, specifically ASTs (abstract syntax trees). ASTs make it easy for programs to deal with HTML. We call those programs plugins. Plugins inspect and change trees. You can use the many existing plugins or you can make your own.

-   to learn HTML, see MDN and WHATWG HTML
-   for more about us, see `unifiedjs.com`
-   for updates, see Twitter
-   for questions, see support
-   to help, see contribute or sponsor below

Contents
--------

-   What is this?
-   When should I use this?
-   Plugins
-   Types
-   Compatibility
-   Security
-   Contribute
-   Sponsor
-   License

What is this?
-------------

With this project and a plugin, you can turn this HTML:

<!doctype html\>
<html lang\="en"\>
  <head\>
    <meta charset\="utf-8"\>
    <title\>Saturn</title\>
  </head\>
  <body\>
    <h1\>Saturn</h1\>
    <p\>Saturn is a gas giant composed predominantly of hydrogen and helium.</p\>
  </body\>
</html\>

…into the following HTML:

<!doctypehtml\><html lang\=en\><meta charset\=utf8\><title\>Saturn</title\><h1\>Saturn</h1\><p\>Saturn is a gas giant composed predominantly of hydrogen and helium.

Show example code

import rehypeParse from 'rehype-parse'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeStringify from 'rehype-stringify'
import {unified} from 'unified'

const file \= await unified()
  .use(rehypeParse)
  .use(rehypePresetMinify)
  .use(rehypeStringify).process(\`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Saturn</title>
  </head>
  <body>
    <h1>Saturn</h1>
    <p>Saturn is a gas giant composed predominantly of hydrogen and helium.</p>
  </body>
</html>\`)

console.log(String(file))

With another plugin, you can turn this HTML:

<h1\>Hi, Saturn!</h1\>

…into the following HTML:

<h2\>Hi, Saturn!</h2\>

Show example code

/\*\*
 \* @import {Root} from 'hast'
 \*/

import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import {unified} from 'unified'
import {visit} from 'unist-util-visit'

const file \= await unified()
  .use(rehypeParse, {fragment: true})
  .use(myRehypePluginToIncreaseHeadings)
  .use(rehypeStringify)
  .process('<h1>Hi, Saturn!</h1>')

console.log(String(file))

function myRehypePluginToIncreaseHeadings() {
  /\*\*
   \* @param {Root} tree
   \*/
  return function (tree) {
    visit(tree, 'element', function (node) {
      if (\['h1', 'h2', 'h3', 'h4', 'h5'\].includes(node.tagName)) {
        node.tagName \= 'h' + (Number(node.tagName.charAt(1)) + 1)
      }
    })
  }
}

You can use rehype for many different things. **unified** is the core project that transforms content with ASTs. **rehype** adds support for HTML to unified. **hast** is the HTML AST that rehype uses.

This GitHub repository is a monorepo that contains the following packages:

-   `rehype-parse` — plugin to take HTML as input and turn it into a syntax tree (hast)
-   `rehype-stringify` — plugin to take a syntax tree (hast) and turn it into HTML as output
-   `rehype` — `unified`, `rehype-parse`, and `rehype-stringify`, useful when input and output are HTML
-   `rehype-cli` — CLI around `rehype` to inspect and format HTML in scripts

When should I use this?
-----------------------

Depending on the input you have and output you want, you can use different parts of rehype. If the input is HTML, you can use `rehype-parse` with `unified`. If the output is HTML, you can use `rehype-stringify` with `unified` If both the input and output are HTML, you can use `rehype` on its own. When you want to inspect and format HTML files in a project, you can use `rehype-cli`.

Plugins
-------

rehype plugins deal with HTML. You can choose from the many plugins that already exist. Here are three good ways to find plugins:

-   `awesome-rehype` — selection of the most awesome projects
-   List of plugins — list of all plugins
-   `rehype-plugin` topic — any tagged repo on GitHub

Some plugins are maintained by us here in the `@rehypejs` organization while others are maintained by folks elsewhere. Anyone can make rehype plugins, so as always when choosing whether to include dependencies in your project, make sure to carefully assess the quality of rehype plugins too.

Types
-----

The rehype organization and the unified collective as a whole is fully typed with TypeScript. Types for hast are available in `@types/hast`.

Compatibility
-------------

Projects maintained by the unified collective are compatible with maintained versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of Node. This means we try to keep the current release line compatible with Node.js 16.

Security
--------

As improper use of HTML can open you up to a cross-site scripting (XSS) attacks, use of rehype can also be unsafe. Use `rehype-sanitize` to make the tree safe.

Use of rehype plugins could also open you up to other attacks. Carefully assess each plugin and the risks involved in using them.

For info on how to submit a report, see our security policy.

Contribute
----------

See `contributing.md` in `rehypejs/.github` for ways to get started. See `support.md` for ways to get help. Join us in Discussions to chat with the community and contributors.

This project has a code of conduct. By interacting with this repository, organization, or community you agree to abide by its terms.

Sponsor
-------

Support this effort and give back by sponsoring on OpenCollective!

Vercel  
  

Motif  
  

HashiCorp  
  

GitBook  
  

Gatsby  
  

Netlify  
  

Coinbase  
  

ThemeIsle  
  

Expo  
  

Boost Note  
  

Markdown Space  
  

Holloway  
  

  
**You?**  
  

License
-------

MIT © Titus Wormer
