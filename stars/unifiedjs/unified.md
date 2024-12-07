---
project: unified
stars: 4502
description: ☔️ interface for parsing, inspecting, transforming, and serializing content through syntax trees
url: https://github.com/unifiedjs/unified
---

**unified** lets you inspect and transform content with plugins.

Contents
--------

-   What is this?
-   When should I use this?
-   Install
-   Use
-   Overview
-   API
    -   `processor()`
    -   `processor.compiler`
    -   `processor.data([key[, value]])`
    -   `processor.freeze()`
    -   `processor.parse(file)`
    -   `processor.parser`
    -   `processor.process(file[, done])`
    -   `processor.processSync(file)`
    -   `processor.run(tree[, file][, done])`
    -   `processor.runSync(tree[, file])`
    -   `processor.stringify(tree[, file])`
    -   `processor.use(plugin[, options])`
    -   `CompileResultMap`
    -   `CompileResults`
    -   `Compiler`
    -   `Data`
    -   `Parser`
    -   `Pluggable`
    -   `PluggableList`
    -   `Plugin`
    -   `PluginTuple`
    -   `Preset`
    -   `ProcessCallback`
    -   `Processor`
    -   `RunCallback`
    -   `Settings`
    -   `TransformCallback`
    -   `Transformer`
-   Types
-   Compatibility
-   Contribute
-   Sponsor
-   Acknowledgments
-   License

What is this?
-------------

unified is two things:

-   **unified** is a collective of 500+ free and open source packages that work with content as structured data (ASTs)
-   `unified` (this project) is the core package, used in 1.3m+ projects on GH, to process content with plugins

Several ecosystems are built on unified around different kinds of content. Notably, remark (markdown), rehype (HTML), and retext (natural language). These ecosystems can be connected together.

-   for more about us, see `unifiedjs.com`
-   for updates, see @unifiedjs on Twitter
-   for questions, see support
-   to help, see contribute and sponsor below

When should I use this?
-----------------------

In some cases, you are already using unified. For example, it’s used in MDX, Gatsby, Docusaurus, etc. In those cases, you don’t need to add `unified` yourself but you can include plugins into those projects.

But the real fun (for some) is to get your hands dirty and work with syntax trees and build with it yourself. You can create those projects, or things like Prettier, or your own site generator. You can connect utilities together and make your own plugins that check for problems and transform from one thing to another.

When you are dealing with one type of content (such as markdown), you can use the main package of that ecosystem instead (so `remark`). When you are dealing with different kinds of content (such as markdown and HTML), it’s recommended to use `unified` itself, and pick and choose the plugins you need.

Install
-------

This package is ESM only. In Node.js (version 16+), install with npm:

npm install unified

In Deno with `esm.sh`:

import {unified} from 'https://esm.sh/unified@11'

In browsers with `esm.sh`:

<script type\="module"\>
  import {unified} from 'https://esm.sh/unified@11?bundle'
</script\>

Use
---

import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'

const file \= await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process('# Hello world!')

console.error(reporter(file))
console.log(String(file))

Yields:

no issues found

<!doctype html\>
<html lang\="en"\>
  <head\>
    <meta charset\="utf-8"\>
    <title\>👋🌍</title\>
    <meta name\="viewport" content\="width=device-width, initial-scale=1"\>
  </head\>
  <body\>
    <h1\>Hello world!</h1\>
  </body\>
</html\>

Overview
--------

`unified` is an interface for processing content with syntax trees. Syntax trees are a representation of content understandable to programs. Those programs, called _plugins_, take these trees and inspect and modify them. To get to the syntax tree from text, there is a _parser_. To get from that back to text, there is a _compiler_. This is the _process_ of a _processor_.

```
| ........................ process ........................... |
| .......... parse ... | ... run ... | ... stringify ..........|

          +--------+                     +----------+
Input ->- | Parser | ->- Syntax Tree ->- | Compiler | ->- Output
          +--------+          |          +----------+
                              X
                              |
                       +--------------+
                       | Transformers |
                       +--------------+
```

###### Processors

Processors process content. On its own, `unified` (the root processor) doesn’t work. It needs to be configured with plugins to work. For example:

const processor \= unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)

That processor can do different things. It can:

-   …parse markdown (`parse`)
-   …turn parsed markdown into HTML and format the HTML (`run`)
-   …compile HTML (`stringify`)
-   …do all of the above (`process`)

Every processor implements another processor. To create a processor, call another processor. The new processor is configured to work the same as its ancestor. But when the descendant processor is configured in the future it does not affect the ancestral processor.

When processors are exposed from a module (for example, `unified` itself) they should not be configured directly, as that would change their behavior for all module users. Those processors are _frozen_ and they should be called to create a new processor before they are used.

###### File

When processing a document, metadata is gathered about that document. `vfile` is the file format that stores data, metadata, and messages about files for unified and plugins.

There are several utilities for working with these files.

###### Syntax tree

The syntax trees used in unified are unist nodes. A tree represents a whole document and each node is a plain JavaScript object with a `type` field. The semantics of nodes and the format of syntax trees is defined by other projects:

-   esast — JavaScript
-   hast — HTML
-   mdast — markdown
-   nlcst — natural language
-   xast — XML

There are many utilities for working with trees listed in each aforementioned project and maintained in the `syntax-tree` organization. These utilities are a level lower than unified itself and are building blocks that can be used to make plugins.

###### Ecosystems

Around each syntax tree is an ecosystem that focusses on that particular kind of content. At their core, they parse text to a tree and compile that tree back to text. They also provide plugins that work with the syntax tree, without requiring that the end user has knowledge about that tree.

-   rehype (hast) — HTML
-   remark (mdast) — markdown
-   retext (nlcst) — natural language

###### Plugins

Each aforementioned ecosystem comes with a large set of plugins that you can pick and choose from to do all kinds of things.

-   List of remark plugins · `remarkjs/awesome-remark` · `remark-plugin` topic
-   List of rehype plugins · `rehypejs/awesome-rehype` · `rehype-plugin` topic
-   List of retext plugins · `retextjs/awesome-retext` · `retext-plugin` topic

There are also a few plugins that work in any ecosystem:

-   `unified-diff` — ignore unrelated messages in GitHub Actions and Travis
-   `unified-infer-git-meta` — infer metadata of a document from Git
-   `unified-message-control` — enable, disable, and ignore messages from content

###### Configuration

Processors are configured with plugins or with the `data` method. Most plugins also accept configuration through options. See each plugin’s readme for more info.

###### Integrations

unified can integrate with the file system through `unified-engine`. CLI apps can be created with `unified-args`, Gulp plugins with `unified-engine-gulp`, and language servers with `unified-language-server`. A streaming interface can be created with `unified-stream`.

###### Programming interface

The API provided by `unified` allows multiple files to be processed and gives access to metadata (such as lint messages):

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkRehype from 'remark-rehype'
import remarkRetext from 'remark-retext'
import retextEnglish from 'retext-english'
import retextEquality from 'retext-equality'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'

const file \= await unified()
  .use(remarkParse)
  .use(remarkPresetLintMarkdownStyleGuide)
  .use(remarkRetext, unified().use(retextEnglish).use(retextEquality))
  .use(remarkRehype)
  .use(rehypeStringify)
  .process('\*Emphasis\* and \_stress\_, you guys!')

console.error(reporter(file))
console.log(String(file))

Yields:

1:16-1:24 warning Emphasis should use \`\*\` as a marker                                 emphasis-marker remark-lint
1:30-1:34 warning \`guys\` may be insensitive, use \`people\`, \`persons\`, \`folks\` instead gals-man        retext-equality

⚠ 2 warnings

<p\><em\>Emphasis</em\> and <em\>stress</em\>, you guys!</p\>

###### Transforming between ecosystems

Ecosystems can be combined in two modes.

**Bridge** mode transforms the tree from one format (_origin_) to another (_destination_). A different processor runs on the destination tree. Afterwards, the original processor continues with the origin tree.

**Mutate** mode also transforms the syntax tree from one format to another. But the original processor continues transforming the destination tree.

In the previous example (“Programming interface”), `remark-retext` is used in bridge mode: the origin syntax tree is kept after retext is done; whereas `remark-rehype` is used in mutate mode: it sets a new syntax tree and discards the origin tree.

The following plugins lets you combine ecosystems:

-   `remark-retext` — turn markdown into natural language
-   `remark-rehype` — turn markdown into HTML
-   `rehype-retext` — turn HTML into natural language
-   `rehype-remark` — turn HTML into markdown

API
---

This package exports the identifier `unified` (the root `processor`). There is no default export.

### `processor()`

Create a new processor.

###### Returns

New _unfrozen_ processor (`processor`).

This processor is configured to work the same as its ancestor. When the descendant processor is configured in the future it does not affect the ancestral processor.

###### Example

This example shows how a new processor can be created (from `remark`) and linked to **stdin**(4) and **stdout**(4).

import process from 'node:process'
import concatStream from 'concat-stream'
import {remark} from 'remark'

process.stdin.pipe(
  concatStream(function (buf) {
    process.stdout.write(String(remark().processSync(buf)))
  })
)

### `processor.compiler`

Compiler to use (`Compiler`, optional).

### `processor.data([key[, value]])`

Configure the processor with info available to all plugins. Information is stored in an object.

Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases.

> 👉 **Note**: setting information cannot occur on _frozen_ processors. Call the processor first to create a new unfrozen processor.

> 👉 **Note**: to register custom data in TypeScript, augment the `Data` interface.

###### Signatures

-   `processor = processor.data(key, value)`
-   `processor = processor.data(dataset)`
-   `value = processor.data(key)`
-   `dataset = processor.data()`

###### Parameters

-   `key` (`keyof Data`, optional) — field to get
-   `value` (`Data[key]`) — value to set
-   `values` (`Data`) — values to set

###### Returns

The current processor when setting (`processor`), the value at `key` when getting (`Data[key]`), or the entire dataset when getting without key (`Data`).

###### Example

This example show how to get and set info:

import {unified} from 'unified'

const processor \= unified().data('alpha', 'bravo')

processor.data('alpha') // => 'bravo'

processor.data() // => {alpha: 'bravo'}

processor.data({charlie: 'delta'})

processor.data() // => {charlie: 'delta'}

### `processor.freeze()`

Freeze a processor.

Frozen processors are meant to be extended and not to be configured directly.

When a processor is frozen it cannot be unfrozen. New processors working the same way can be created by calling the processor.

It’s possible to freeze processors explicitly by calling `.freeze()`. Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`, `.stringify()`, `.process()`, or `.processSync()` are called.

###### Returns

The current processor (`processor`).

###### Example

This example, `index.js`, shows how `rehype` prevents extensions to itself:

import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import {unified} from 'unified'

export const rehype \= unified().use(rehypeParse).use(rehypeStringify).freeze()

That processor can be used and configured like so:

import {rehype} from 'rehype'
import rehypeFormat from 'rehype-format'
// …

rehype()
  .use(rehypeFormat)
  // …

A similar looking example is broken as operates on the frozen interface. If this behavior was allowed it would result in unexpected behavior so an error is thrown. **This is not valid**:

import {rehype} from 'rehype'
import rehypeFormat from 'rehype-format'
// …

rehype
  .use(rehypeFormat)
  // …

Yields:

~/node\_modules/unified/index.js:426
    throw new Error(
    ^

Error: Cannot call \`use\` on a frozen processor.
Create a new processor first, by calling it: use \`processor()\` instead of \`processor\`.
    at assertUnfrozen (~/node\_modules/unified/index.js:426:11)
    at Function.use (~/node\_modules/unified/index.js:165:5)
    …

### `processor.parse(file)`

Parse text to a syntax tree.

> 👉 **Note**: `parse` freezes the processor if not already _frozen_.

> 👉 **Note**: `parse` performs the parse phase, not the run phase or other phases.

###### Parameters

-   `file` (`Compatible`) — file to parse; typically `string` or `VFile`; any value accepted as `x` in `new VFile(x)`

###### Returns

Syntax tree representing `file` (`Node`).

###### Example

This example shows how `parse` can be used to create a tree from a file.

import remarkParse from 'remark-parse'
import {unified} from 'unified'

const tree \= unified().use(remarkParse).parse('# Hello world!')

console.log(tree)

Yields:

{
  type: 'root',
  children: \[
    {type: 'heading', depth: 1, children: \[Array\], position: \[Object\]}
  \],
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 15, offset: 14}
  }
}

### `processor.parser`

Parser to use (`Parser`, optional).

### `processor.process(file[, done])`

Process the given file as configured on the processor.

> 👉 **Note**: `process` freezes the processor if not already _frozen_.

> 👉 **Note**: `process` performs the parse, run, and stringify phases.

###### Signatures

-   `processor.process(file, done)`
-   `Promise<VFile> = processor.process(file?)`

###### Parameters

-   `file` (`Compatible`, optional) — file; typically `string` or `VFile`; any value accepted as `x` in `new VFile(x)`
-   `done` (`ProcessCallback`, optional) — callback

###### Returns

Nothing if `done` is given (`undefined`). Otherwise a promise, rejected with a fatal error or resolved with the processed file (`Promise<VFile>`).

The parsed, transformed, and compiled value is available at `file.value` (see note).

> 👉 **Note**: unified typically compiles by serializing: most compilers return `string` (or `Uint8Array`). Some compilers, such as the one configured with `rehype-react`, return other values (in this case, a React tree). If you’re using a compiler that doesn’t serialize, expect different result values.
> 
> To register custom results in TypeScript, add them to `CompileResultMap`.

###### Example

This example shows how `process` can be used to process a file:

import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const file \= await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process('# Hello world!')

console.log(String(file))

Yields:

<!doctype html\>
<html lang\="en"\>
  <head\>
    <meta charset\="utf-8"\>
    <title\>👋🌍</title\>
    <meta name\="viewport" content\="width=device-width, initial-scale=1"\>
  </head\>
  <body\>
    <h1\>Hello world!</h1\>
  </body\>
</html\>

### `processor.processSync(file)`

Process the given file as configured on the processor.

An error is thrown if asynchronous transforms are configured.

> 👉 **Note**: `processSync` freezes the processor if not already _frozen_.

> 👉 **Note**: `processSync` performs the parse, run, and stringify phases.

###### Parameters

-   `file` (`Compatible`, optional) — file; typically `string` or `VFile`; any value accepted as `x` in `new VFile(x)`

###### Returns

The processed file (`VFile`).

The parsed, transformed, and compiled value is available at `file.value` (see note).

> 👉 **Note**: unified typically compiles by serializing: most compilers return `string` (or `Uint8Array`). Some compilers, such as the one configured with `rehype-react`, return other values (in this case, a React tree). If you’re using a compiler that doesn’t serialize, expect different result values.
> 
> To register custom results in TypeScript, add them to `CompileResultMap`.

###### Example

This example shows how `processSync` can be used to process a file, if all transformers are synchronous.

import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const processor \= unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)

console.log(String(processor.processSync('# Hello world!')))

Yields:

<!doctype html\>
<html lang\="en"\>
  <head\>
    <meta charset\="utf-8"\>
    <title\>👋🌍</title\>
    <meta name\="viewport" content\="width=device-width, initial-scale=1"\>
  </head\>
  <body\>
    <h1\>Hello world!</h1\>
  </body\>
</html\>

### `processor.run(tree[, file][, done])`

Run _transformers_ on a syntax tree.

> 👉 **Note**: `run` freezes the processor if not already _frozen_.

> 👉 **Note**: `run` performs the run phase, not other phases.

###### Signatures

-   `processor.run(tree, done)`
-   `processor.run(tree, file, done)`
-   `Promise<Node> = processor.run(tree, file?)`

###### Parameters

-   `tree` (`Node`) — tree to transform and inspect
-   `file` (`Compatible`, optional) — file associated with `node`; any value accepted as `x` in `new VFile(x)`
-   `done` (`RunCallback`, optional) — callback

###### Returns

Nothing if `done` is given (`undefined`). Otherwise, a promise rejected with a fatal error or resolved with the transformed tree (`Promise<Node>`).

###### Example

This example shows how `run` can be used to transform a tree:

import remarkReferenceLinks from 'remark-reference-links'
import {unified} from 'unified'
import {u} from 'unist-builder'

const tree \= u('root', \[
  u('paragraph', \[
    u('link', {href: 'https://example.com'}, \[u('text', 'Example Domain')\])
  \])
\])

const changedTree \= await unified().use(remarkReferenceLinks).run(tree)

console.log(changedTree)

Yields:

{
  type: 'root',
  children: \[
    {type: 'paragraph', children: \[Array\]},
    {type: 'definition', identifier: '1', title: '', url: undefined}
  \]
}

### `processor.runSync(tree[, file])`

Run _transformers_ on a syntax tree.

An error is thrown if asynchronous transforms are configured.

> 👉 **Note**: `runSync` freezes the processor if not already _frozen_.

> 👉 **Note**: `runSync` performs the run phase, not other phases.

###### Parameters

-   `tree` (`Node`) — tree to transform and inspect
-   `file` (`Compatible`, optional) — file associated with `node`; any value accepted as `x` in `new VFile(x)`

###### Returns

Transformed tree (`Node`).

### `processor.stringify(tree[, file])`

Compile a syntax tree.

> 👉 **Note**: `stringify` freezes the processor if not already _frozen_.

> 👉 **Note**: `stringify` performs the stringify phase, not the run phase or other phases.

###### Parameters

-   `tree` (`Node`) — tree to compile
-   `file` (`Compatible`, optional) — file associated with `node`; any value accepted as `x` in `new VFile(x)`

###### Returns

Textual representation of the tree (`Uint8Array` or `string`, see note).

> 👉 **Note**: unified typically compiles by serializing: most compilers return `string` (or `Uint8Array`). Some compilers, such as the one configured with `rehype-react`, return other values (in this case, a React tree). If you’re using a compiler that doesn’t serialize, expect different result values.
> 
> To register custom results in TypeScript, add them to `CompileResultMap`.

###### Example

This example shows how `stringify` can be used to serialize a syntax tree:

import {h} from 'hastscript'
import rehypeStringify from 'rehype-stringify'
import {unified} from 'unified'

const tree \= h('h1', 'Hello world!')

const document \= unified().use(rehypeStringify).stringify(tree)

console.log(document)

Yields:

<h1\>Hello world!</h1\>

### `processor.use(plugin[, options])`

Configure the processor to use a plugin, a list of usable values, or a preset.

If the processor is already using a plugin, the previous plugin configuration is changed based on the options that are passed in. In other words, the plugin is not added a second time.

> 👉 **Note**: `use` cannot be called on _frozen_ processors. Call the processor first to create a new unfrozen processor.

###### Signatures

-   `processor.use(preset?)`
-   `processor.use(list)`
-   `processor.use(plugin[, ...parameters])`

###### Parameters

-   `preset` (`Preset`) — plugins and settings
-   `list` (`PluggableList`) — list of usable things
-   `plugin` (`Plugin`) — plugin
-   `parameters` (`Array<unknown>`) — configuration for `plugin`, typically a single options object

###### Returns

Current processor (`processor`).

###### Example

There are many ways to pass plugins to `.use()`. This example gives an overview:

import {unified} from 'unified'

unified()
  // Plugin with options:
  .use(pluginA, {x: true, y: true})
  // Passing the same plugin again merges configuration (to \`{x: true, y: false, z: true}\`):
  .use(pluginA, {y: false, z: true})
  // Plugins:
  .use(\[pluginB, pluginC\])
  // Two plugins, the second with options:
  .use(\[pluginD, \[pluginE, {}\]\])
  // Preset with plugins and settings:
  .use({plugins: \[pluginF, \[pluginG, {}\]\], settings: {position: false}})
  // Settings only:
  .use({settings: {position: false}})

### `CompileResultMap`

Interface of known results from compilers (TypeScript type).

Normally, compilers result in text (`Value` of `vfile`). When you compile to something else, such as a React node (as in, `rehype-react`), you can augment this interface to include that type.

import type {ReactNode} from 'somewhere'

declare module 'unified' {
  interface CompileResultMap {
    // Register a new result (value is used, key should match it).
    ReactNode: ReactNode
  }
}

export {} // You may not need this, but it makes sure the file is a module.

Use `CompileResults` to access the values.

###### Type

interface CompileResultMap {
  // Note: if \`Value\` from \`VFile\` is changed, this should too.
  Uint8Array: Uint8Array
  string: string
}

### `CompileResults`

Acceptable results from compilers (TypeScript type).

To register custom results, add them to `CompileResultMap`.

###### Type

type CompileResults \= CompileResultMap\[keyof CompileResultMap\]

### `Compiler`

A **compiler** handles the compiling of a syntax tree to something else (in most cases, text) (TypeScript type).

It is used in the stringify phase and called with a `Node` and `VFile` representation of the document to compile. It should return the textual representation of the given tree (typically `string`).

> 👉 **Note**: unified typically compiles by serializing: most compilers return `string` (or `Uint8Array`). Some compilers, such as the one configured with `rehype-react`, return other values (in this case, a React tree). If you’re using a compiler that doesn’t serialize, expect different result values.
> 
> To register custom results in TypeScript, add them to `CompileResultMap`.

###### Type

type Compiler<
  Tree extends Node \= Node,
  Result extends CompileResults \= CompileResults
\> \= (tree: Tree, file: VFile) \=> Result

### `Data`

Interface of known data that can be supported by all plugins (TypeScript type).

Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases.

To type this, do something like:

declare module 'unified' {
  interface Data {
    htmlVoidElements?: Array<string\> | undefined
  }
}

export {} // You may not need this, but it makes sure the file is a module.

###### Type

interface Data {
  settings?: Settings | undefined
}

See `Settings` for more info.

### `Parser`

A **parser** handles the parsing of text to a syntax tree (TypeScript type).

It is used in the parse phase and is called with a `string` and `VFile` of the document to parse. It must return the syntax tree representation of the given file (`Node`).

###### Type

type Parser<Tree extends Node \= Node\> \= (document: string, file: VFile) \=> Tree

### `Pluggable`

Union of the different ways to add plugins and settings (TypeScript type).

###### Type

type Pluggable \=
  | Plugin<Array<any\>, any, any\>
  | PluginTuple<Array<any\>, any, any\>
  | Preset

See `Plugin`, `PluginTuple`, and `Preset` for more info.

### `PluggableList`

List of plugins and presets (TypeScript type).

###### Type

type PluggableList \= Array<Pluggable\>

See `Pluggable` for more info.

### `Plugin`

Single plugin (TypeScript type).

Plugins configure the processors they are applied on in the following ways:

-   they change the processor, such as the parser, the compiler, or by configuring data
-   they specify how to handle trees and files

In practice, they are functions that can receive options and configure the processor (`this`).

> 👉 **Note**: plugins are called when the processor is _frozen_, not when they are applied.

###### Type

type Plugin<
  PluginParameters extends unknown\[\] \= \[\],
  Input extends Node | string | undefined \= Node,
  Output \= Input
\> \= (
  this: Processor,
  ...parameters: PluginParameters
) \=> Input extends string // Parser.
  ? Output extends Node | undefined
    ? undefined | void
    : never
  : Output extends CompileResults // Compiler.
  ? Input extends Node | undefined
    ? undefined | void
    : never
  : // Inspect/transform.
      | Transformer<
          Input extends Node ? Input : Node,
          Output extends Node ? Output : Node
        \>
      | undefined
      | void

See `Transformer` for more info.

###### Example

`move.js`:

/\*\*
 \* @import {Plugin} from 'unified'
 \*/

/\*\*
 \* @typedef Options
 \*   Configuration (required).
 \* @property {string} extname
 \*   File extension to use (must start with \`.\`).
 \*/

/\*\* @type {Plugin<\[Options\]>} \*/
export function move(options) {
  if (!options || !options.extname) {
    throw new Error('Missing \`options.extname\`')
  }

  return function (\_, file) {
    if (file.extname && file.extname !== options.extname) {
      file.extname \= options.extname
    }
  }
}

`example.md`:

\# Hello, world!

`example.js`:

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {read, write} from 'to-vfile'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import {move} from './move.js'

const file \= await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(move, {extname: '.html'})
  .use(rehypeStringify)
  .process(await read('example.md'))

console.error(reporter(file))
await write(file) // Written to \`example.html\`.

Yields:

example.md: no issues found

…and in `example.html`:

<h1\>Hello, world!</h1\>

### `PluginTuple`

Tuple of a plugin and its configuration (TypeScript type).

The first item is a plugin, the rest are its parameters.

###### Type

type PluginTuple<
  TupleParameters extends unknown\[\] \= \[\],
  Input extends Node | string | undefined \= undefined,
  Output \= undefined
\> \= \[
  plugin: Plugin<TupleParameters, Input, Output\>,
  ...parameters: TupleParameters
\]

See `Plugin` for more info.

### `Preset`

Sharable configuration (TypeScript type).

They can contain plugins and settings.

###### Fields

-   `plugins` (`PluggableList`, optional) — list of plugins and presets
-   `settings` (`Data`, optional) — shared settings for parsers and compilers

###### Example

`preset.js`:

/\*\*
 \* @import {Preset} from 'unified'
 \*/

import remarkCommentConfig from 'remark-comment-config'
import remarkLicense from 'remark-license'
import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkToc from 'remark-toc'

/\*\* @type {Preset} \*/
const preset \= {
  plugins: \[
    remarkPresetLintRecommended,
    remarkPresetLintConsistent,
    remarkCommentConfig,
    \[remarkToc, {maxDepth: 3, tight: true}\],
    remarkLicense
  \],
  settings: {bullet: '\*', emphasis: '\*', fences: true},
}

export default preset

`example.md`:

\# Hello, world!

\_Emphasis\_ and \*\*importance\*\*.

\## Table of contents

\## API

\## License

`example.js`:

import {remark} from 'remark'
import {read, write} from 'to-vfile'
import {reporter} from 'vfile-reporter'
import preset from './preset.js'

const file \= await remark()
  .use(preset)
  .process(await read('example.md'))

console.error(reporter(file))
await write(file)

Yields:

example.md: no issues found

`example.md` now contains:

\# Hello, world!

\*Emphasis\* and \*\*importance\*\*.

\## Table of contents

\*   \[API\](#api)
\*   \[License\](#license)

\## API

\## License

\[MIT\](license) © \[Titus Wormer\](https://wooorm.com)

### `ProcessCallback`

Callback called when the process is done (TypeScript type).

Called with either an error or a result.

###### Parameters

-   `error` (`Error`, optional) — fatal error
-   `file` (`VFile`, optional) — processed file

###### Returns

Nothing (`undefined`).

###### Example

This example shows how `process` can be used to process a file with a callback.

import remarkGithub from 'remark-github'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'

unified()
  .use(remarkParse)
  .use(remarkGithub)
  .use(remarkStringify)
  .process('@unifiedjs', function (error, file) {
    if (error) throw error
    if (file) {
      console.error(reporter(file))
      console.log(String(file))
    }
  })

Yields:

no issues found

\[\*\*@unifiedjs\*\*\](https://github.com/unifiedjs)

### `Processor`

Type of a `processor` (TypeScript type).

### `RunCallback`

Callback called when transformers are done (TypeScript type).

Called with either an error or results.

###### Parameters

-   `error` (`Error`, optional) — fatal error
-   `tree` (`Node`, optional) — transformed tree
-   `file` (`VFile`, optional) — file

###### Returns

Nothing (`undefined`).

### `Settings`

Interface of known extra options, that can be supported by parser and compilers.

This exists so that users can use packages such as `remark`, which configure both parsers and compilers (in this case `remark-parse` and `remark-stringify`), and still provide options for them.

When you make parsers or compilers, that could be packaged up together, you should support `this.data('settings')` as input and merge it with explicitly passed `options`. Then, to type it, using `remark-stringify` as an example, do something like:

declare module 'unified' {
  interface Settings {
    bullet: '\*' | '+' | '-'
    // …
  }
}

export {} // You may not need this, but it makes sure the file is a module.

###### Type

interface Settings {}

### `TransformCallback`

Callback passed to transforms (TypeScript type).

If the signature of a `transformer` accepts a third argument, the transformer may perform asynchronous operations, and must call it.

###### Parameters

-   `error` (`Error`, optional) — fatal error to stop the process
-   `tree` (`Node`, optional) — new, changed, tree
-   `file` (`VFile`, optional) — new, changed, file

###### Returns

Nothing (`undefined`).

### `Transformer`

Transformers handle syntax trees and files (TypeScript type).

They are functions that are called each time a syntax tree and file are passed through the run phase. When an error occurs in them (either because it’s thrown, returned, rejected, or passed to `next`), the process stops.

The run phase is handled by `trough`, see its documentation for the exact semantics of these functions.

> 👉 **Note**: you should likely ignore `next`: don’t accept it. it supports callback-style async work. But promises are likely easier to reason about.

###### Type

type Transformer<
  Input extends Node \= Node,
  Output extends Node \= Input
\> \= (
  tree: Input,
  file: VFile,
  next: TransformCallback<Output\>
) \=>
  | Promise<Output | undefined\>
  | Output
  | Error
  | undefined

Types
-----

This package is fully typed with TypeScript. It exports the additional types `CompileResultMap`, `CompileResults`, `Compiler`, `Data`, `Parser`, `Pluggable`, `PluggableList`, `Plugin`, `PluginTuple`, `Preset`, `ProcessCallback`, `Processor`, `RunCallback`, `Settings`, `TransformCallback`, and `Transformer`

For TypeScript to work, it is particularly important to type your plugins correctly. We strongly recommend using the `Plugin` type with its generics and to use the node types for the syntax trees provided by our packages (as in, `@types/hast`, `@types/mdast`, `@types/nlcst`).

/\*\*
 \* @import {Root as HastRoot} from 'hast'
 \* @import {Root as MdastRoot} from 'mdast'
 \* @import {Plugin} from 'unified'
 \*/

/\*\*
 \* @typedef Options
 \*   Configuration (optional).
 \* @property {boolean | null | undefined} \[someField\]
 \*   Some option (optional).
 \*/

// To type options:
/\*\* @type {Plugin<\[(Options | null | undefined)?\]>} \*/
export function myPluginAcceptingOptions(options) {
  const settings \= options || {}
  // \`settings\` is now \`Options\`.
}

// To type a plugin that works on a certain tree, without options:
/\*\* @type {Plugin<\[\], MdastRoot>} \*/
export function myRemarkPlugin() {
  return function (tree, file) {
    // \`tree\` is \`MdastRoot\`.
  }
}

// To type a plugin that transforms one tree into another:
/\*\* @type {Plugin<\[\], MdastRoot, HastRoot>} \*/
export function remarkRehype() {
  return function (tree) {
    // \`tree\` is \`MdastRoot\`.
    // Result must be \`HastRoot\`.
  }
}

// To type a plugin that defines a parser:
/\*\* @type {Plugin<\[\], string, MdastRoot>} \*/
export function remarkParse(options) {}

// To type a plugin that defines a compiler:
/\*\* @type {Plugin<\[\], HastRoot, string>} \*/
export function rehypeStringify(options) {}

Compatibility
-------------

Projects maintained by the unified collective are compatible with maintained versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of Node. This means we try to keep the current release line, `unified@^11`, compatible with Node.js 16.

Contribute
----------

See `contributing.md` in `unifiedjs/.github` for ways to get started. See `support.md` for ways to get help.

This project has a code of conduct. By interacting with this repository, organization, or community you agree to abide by its terms.

For info on how to submit a security report, see our security policy.

Sponsor
-------

Support this effort and give back by sponsoring on OpenCollective!

Vercel  
  

Motif  
  

HashiCorp  
  

American Express  
  

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
  

Acknowledgments
---------------

Preliminary work for unified was done in 2014 for **retext** and inspired by `ware`. Further incubation happened in **remark**. The project was finally externalised in 2015 and published as `unified`. The project was authored by **@wooorm**.

Although `unified` since moved its plugin architecture to `trough`, thanks to **@calvinfo**, **@ianstormtaylor**, and others for their work on `ware`, as it was a huge initial inspiration.

License
-------

MIT © Titus Wormer
