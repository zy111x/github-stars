---
project: juice
stars: 60
description: Juice inlines CSS stylesheets into your HTML source.
url: https://github.com/andrewrk/juice
---

Juice
=====

Given HTML, juice will inline your CSS properties into the `style` attribute.

How to use
----------

var juice \= require('juice2');
juice("/path/to/file.html", function(err, html) {
  console.log(html);
});

`/path/to/file.html`:

<html\>
<head\>
  <style\>
    p { color: red; }
  </style\>
  <link rel\="stylesheet" href\="style.css"\>
</head\>
<body\>
  <p\>Test</p\>
</body\>
</html\>

`style.css`

p {
  text-decoration: underline;
}

Output:

<html\>
<head\>
</head\>
<body\>
  <p style\="color: red; text-decoration: underline;"\>Test</p\>
</body\>
</html\>

What is this useful for ?
-------------------------

-   HTML emails. For a comprehensive list of supported selectors see here
-   Embedding HTML in 3rd-party websites.

Projects using juice
--------------------

-   node-email-templates - Node.js module for rendering beautiful emails with ejs templates and email-friendly inline CSS using juice.
-   swig-email-templates - Uses swig, which gives you template inheritance, and can generate a dummy context from a template.

Documentation
-------------

### juice(filePath, \[options\], callback)

-   `filePath` - html file
-   `options` - (optional) object containing these properties:
    -   `extraCss` - extra css to apply to the file. Defaults to `""`.
    -   `applyStyleTags` - whether to inline styles in `<style></style>` Defaults to `true`.
    -   `applyLinkTags` \[Deprecated, use applyLinksToStyleTags\] - whether to resolve `<link rel="stylesheet">` tags and inline the resulting styles into document `head`. Defaults to `true`.
    -   `applyLinksToStyleTags` - whether to resolve `<link rel="stylesheet">` tags and replace them with `style` tags. This works with `preserveMediaQueries` unlike the deprecated `applyLinkTags`. Defaults to `true`.
    -   `removeStyleTags` - whether to remove the original `<style></style>` tags after (possibly) inlining the css from them. Defaults to `true`.
    -   `preserveMediaQueries` - preserves all media queries (and contained styles) within `<style></style>` tags as a refinement when `removeStyleTags` is `true`. Other styles are removed. Defaults to `false`.
    -   `preserveImportant` - preserves `!important` in values. Defaults to `false`.
    -   `applyWidthAttributes` - whether to use any CSS pixel widths to create `width` attributes on elements set in `juice.widthElements`
    -   `removeLinkTags` - whether to remove the original `<link rel="stylesheet">` tags after (possibly) inlining the css from them. Defaults to `true`.
    -   `url` - how to resolve hrefs. Defaults to using `filePath`. If you want to override, be sure your `url` has the protocol at the beginning, e.g. `http://` or `file://`.
-   `callback(err, html)`
    -   `err` - `Error` object or `null`.
    -   `html` - contains the html from `filePath`, with potentially `<style>` and `<link rel="stylesheet">` tags removed, and css inlined.

### juice.juiceContent(html, options, callback)

-   `html` - raw html content
-   `options` - same options as calling `juice`, except now `url` is required.
-   `callback(err, html)` - same as calling `juice`

### juice.juiceDocument(document, options, callback)

Operates on a jsdom instance. Be sure to use the same jsdom version that juice uses. Also be sure to clean up after you are done. You may have to call `document.parentWindow.close()` to free up memory.

-   `document` - a jsdom instance
-   `options` - see `juice.juiceContent`
-   `callback(err)`

### juice.inlineContent(html, css)

This takes html and css and returns new html with the provided css inlined. It does not look at `<style>` or `<link rel="stylesheet">` elements at all.

### juice.inlineDocument(document, css, options)

Given a jsdom instance and css, this modifies the jsdom instance so that the provided css is inlined. It does not look at `<style>` or `<link rel="stylesheet">` elements at all.

### juice.ignoredPseudos

Array of ignored pseudo-selectors such as 'hover' and 'active'.

### juice.widthElements

Array of HTML elements that can receive `width` attributes.

### 3rd-party

-   Uses the excellent JSDom for the underlying DOM representation.
-   Uses cssom to parse out CSS selectors and Slick to tokenize them.
-   Icon by UnheardSounds
