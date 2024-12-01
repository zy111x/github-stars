---
project: postcss-html
stars: 60
description: PostCSS syntax for parsing HTML (and HTML-like)
---

PostCSS HTML Syntax
===================

PostCSS syntax for parsing HTML (and HTML-like)

-   PHP
-   Vue Single-File Component
-   Quick App
-   XSLT

Getting Started
---------------

First thing's first, install the module:

```
npm install postcss-syntax postcss-html --save-dev
```

If you want support SCSS/SASS/LESS/SugarSS syntax, you need to install the corresponding module.

-   SCSS: postcss-scss
-   SASS: postcss-sass
-   LESS: postcss-less
-   SugarSS: sugarss

Use Cases
---------

const postcss \= require('postcss');
const syntax \= require('postcss-html')({
	// syntax for parse scss (non-required options)
	scss: require('postcss-scss'),
	// syntax for parse less (non-required options)
	less: require('postcss-less'),
	// syntax for parse css blocks (non-required options)
	css: require('postcss-safe-parser'),
});
postcss(plugins).process(source, { syntax: syntax }).then(function (result) {
	// An alias for the result.css property. Use it with syntaxes that generate non-CSS output.
	result.content
});

If you want support SCSS/SASS/LESS/SugarSS syntax, you need to install these module:

-   SCSS: postcss-scss
-   SASS: postcss-sass
-   LESS: postcss-less
-   SugarSS: sugarss

Advanced Use Cases
------------------

See: postcss-syntax

Turning PostCSS off from within your HTML
-----------------------------------------

PostCSS can be temporarily turned off by using special comments in your HTML. For example:

<html\>
<body\>
<!-- postcss-disable -->
<a style\="color: red;"\></a\>
<!-- postcss-enable -->

Style Transformations
---------------------

The main use case of this plugin is to apply PostCSS transformations to `<style>` tags and `<div style="*">` property in HTML (and HTML-like).
