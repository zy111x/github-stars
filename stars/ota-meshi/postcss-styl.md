---
project: postcss-styl
stars: 15
description: PostCSS parser plugin for converting Stylus syntax to PostCSS AST.
---

This project has moved the repository as an official Stylus project!
====================================================================

It is currently maintained in stylus/postcss-styl!  
See https://github.com/stylus/postcss-styl.

postcss-styl
============

PostCSS parser plugin for converting Stylus syntax to PostCSS AST.

::: **_This plugin is still in an experimental state_** :::

Installation
------------

npm install -D postcss-styl

Usage
-----

### Lint Stylus with stylelint

You can use this PostCSS plugin to apply Stylus syntax to stylelint.  
**You can use it more easily by using it with stylelint-plugin-stylus.**

For example, this PostCSS plugin is used as follows:

1.  First, add `customSyntax` option to `stylelint` config file.
    
    e.g. stylelint.config.js
    
    // Filename: \`stylelint.config.js\`
    
    module.exports \= {
       overrides: \[
           {
               files: \["\*.styl", "\*\*/\*.styl", "\*.stylus", "\*\*/\*.stylus"\],
               customSyntax: "postcss-styl",
           },
       \],
    };
    
2.  You need to include the stylus in the linting target, as shown in the following example.
    
    -   via CLI
        
        stylelint ./path/to/input.styl
        
    -   with VSCode extension
        
        {
          "stylelint.validate": \[
             ...,
             // ↓ Add "stylus" language.
             "stylus"
          \]
        }
        

### Stylus Transformations

Also you can use this parser plugin to apply PostCSS transformations directly to the Stylus source code.

For example, Stylus sources can be automatically prefixed using Autoprefixer.

const postcss \= require("postcss");
const autoprefixer \= require("autoprefixer");
const postcssStyl \= require("postcss-styl");

const stylusCode \= \`
a
  transform scale(0.5)
\`;
postcss(\[autoprefixer\])
  .process(stylusCode, {
    syntax: postcssStyl
  })
  .then(result \=> {
    console.log(result.css);
    // ->
    // a
    //   -webkit-transform scale(0.5);
    //   -moz-transform scale(0.5);
    //   transform scale(0.5)
  });

Contributing
------------

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

-   `npm test` runs tests and measures coverage.

### AST

You can check the AST online.  
https://ota-meshi.github.io/postcss-styl/

License
-------

See the LICENSE file for license rights and limitations (MIT).
