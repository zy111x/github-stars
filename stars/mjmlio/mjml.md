---
project: mjml
stars: 17160
description: MJML: the only framework that makes responsive-email easy
url: https://github.com/mjmlio/mjml
---

MJML 4
======

If you're looking for MJML 3.3.X check this branch

| **Translated documentation** | **Introduction** | **Installation** | **Usage** |

* * *

Translated documentation
========================

Language

Link for documentation

日本語

日本語ドキュメント

Introduction
============

`MJML` is a markup language created by Mailjet and designed to reduce the pain of coding a responsive email. Its semantic syntax makes the language easy and straightforward while its rich standard components library shortens your development time and lightens your email codebase. MJML’s open-source engine takes care of translating the `MJML` you wrote into responsive HTML.

Installation
============

You can install `MJML` with `NPM` to use it with NodeJS or the Command Line Interface. If you're not sure what those are, head over to Usage for other ways to use MJML.

npm install mjml

Development
===========

To work on MJML, make changes and create merge requests, download and install yarn for easy development.

git clone https://github.com/mjmlio/mjml.git && cd mjml
yarn
yarn build

You can also run `yarn build:watch` to rebuild the package as you code.

Usage
=====

Online
------

Don't want to install anything? Use the free online editor!

  

Applications and plugins
------------------------

MJML comes with an ecosystem of tools and plugins, check out:

-   The MJML App (MJML is included)
-   Visual Studio Code plugin (MJML is included)
-   Sublime Text plugin (MJML needs to be installed separately)

For more tools, check the Community page.

Command line interface
----------------------

> Compiles the file and outputs the HTML generated in `output.html`

mjml input.mjml -o output.html

You can pass optional `arguments` to the CLI and combine them.

argument

description

default value

`mjml -m [input]`

Migrates a v3 MJML file to the v4 syntax

NA

`mjml [input] -o [output]`

Writes the output to \[output\]

NA

`mjml [input] -s`

Writes the output to `stdout`

NA

`mjml -w [input]`

Watches the changes made to `[input]` (file or folder)

NA

`mjml [input] --config.beautify`

Beautifies the output (`true` or `false`)

true

`mjml [input] --config.minify`

Minifies the output (`true` or `false`)

false

See mjml-cli documentation for more information about config options.

Inside Node.js
--------------

import mjml2html from 'mjml'

/\*
  Compile an mjml string
\*/
const htmlOutput \= mjml2html(\`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
\`, options)

/\*
  Print the responsive HTML generated and MJML errors if any
\*/
console.log(htmlOutput)

You can pass optional `options` as an object to the `mjml2html` function:

option

unit

description

default value

fonts

object

Default fonts imported in the HTML rendered by MJML

See in index.js

keepComments

boolean

Option to keep comments in the HTML output

true

ignoreIncludes

boolean

Option to ignore mj-includes

false

beautify

boolean

Option to beautify the HTML output

false

minify

boolean

Option to minify the HTML output

false

validationLevel

string

Available values for the validator: 'strict', 'soft', 'skip'

'soft'

filePath

string

Path of file, used for relative paths in mj-includes

'.'

preprocessors

array of functions

Preprocessors applied to the xml before parsing. Input must be xml, not json. Functions must be (xml: string) => string

\[\]

juicePreserveTags

Preserve some tags when inlining css, see mjml-cli documentation for more info

NA

minifyOptions

Options for html minifier, see mjml-cli documentation for more info

NA

mjmlConfigPath

string

The path or directory of the `.mjmlconfig` file (for custom components use)

`process.cwd()`

useMjmlConfigOptions

Allows to use the `options` attribute from `.mjmlconfig` file

false

Client-side (in browser)
------------------------

var mjml2html \= require('mjml-browser')

/\*
  Compile a mjml string
\*/
var htmlOutput \= mjml2html(\`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
\`, options)

/\*
  Print the responsive HTML generated and MJML errors if any
\*/
console.log(htmlOutput)

API
---

A free-to-use MJML API is available to make it easy to integrate MJML in your application. Head over here to learn more about the API.

MJML Slack
==========

MJML wouldn't be as cool without its amazing community. Head over the Community Slack to meet fellow MJML'ers.

Contributors
============

-   Maxime
-   Nicolas
-   Cedric
-   Loeck
-   Robin
-   Guillaume
-   Meriadec
-   Arnaud
-   HTeuMeuLeu
-   Emmanuel Payet
-   Matthieu
-   Rogier
