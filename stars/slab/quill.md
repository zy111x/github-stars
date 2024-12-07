---
project: quill
stars: 44005
description: Quill is a modern WYSIWYG editor built for compatibility and extensibility
url: https://github.com/slab/quill
---

Quill Rich Text Editor
======================

**Documentation** • **Development** • **Contributing** • **Interactive Playground**

* * *

Quill is a modern rich text editor built for compatibility and extensibility. It was created by Jason Chen and Byron Milligan and actively maintained by Slab.

To get started, check out https://quilljs.com/ for documentation, guides, and live demos!

Quickstart
----------

Instantiate a new Quill object with a css selector for the div that should become the editor.

<!-- Include Quill stylesheet -->
<link
  href\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css"
  rel\="stylesheet"
/>

<!-- Create the toolbar container -->
<div id\="toolbar"\>
  <button class\="ql-bold"\>Bold</button\>
  <button class\="ql-italic"\>Italic</button\>
</div\>

<!-- Create the editor container -->
<div id\="editor"\>
  <p\>Hello World!</p\>
  <p\>Some initial <strong\>bold</strong\> text</p\>
  <p\><br /></p\>
</div\>

<!-- Include the Quill library -->
<script src\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js"\></script\>

<!-- Initialize Quill editor -->
<script\>
  const quill \= new Quill("#editor", {
    theme: "snow",
  });
</script\>

Take a look at the Quill website for more documentation, guides and live playground!

Download
--------

npm install quill

### CDN

<!-- Main Quill library -->
<script src\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js"\></script\>

<!-- Theme included stylesheets -->
<link
  href\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css"
  rel\="stylesheet"
/>
<link
  href\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.bubble.css"
  rel\="stylesheet"
/>

<!-- Core build with no theme, formatting, non-essential modules -->
<link
  href\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.core.css"
  rel\="stylesheet"
/>
<script src\="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.core.js"\></script\>

Community
---------

Get help or stay up to date.

-   Contribute on Issues
-   Ask questions on Discussions

License
-------

BSD 3-clause
