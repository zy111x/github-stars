---
project: pen
stars: 4806
description: enjoy live editing (+markdown)
---

Pen Editor
==========

-   **LIVE DEMO:** http://sofish.github.io/pen
-   **Markdown is supported**
-   **Build status:**

* * *

* * *

0\. source code
---------------

You can clone the source code from github, or using bower.

```
bower install pen
```

1\. installation
----------------

#### 1.1 init with id attribute

var editor \= new Pen('#editor');

#### 1.2 init with an element

var editor \= new Pen(document.getElementById('editor'));

#### 1.3 init with options

var options \= {
  editor: document.body, // {DOM Element} \[required\]
  class: 'pen', // {String} class of the editor,
  debug: false, // {Boolean} false by default
  textarea: '<textarea name="content"></textarea>', // fallback for old browsers
  list: \['bold', 'italic', 'underline'\], // editor menu list
  linksInNewWindow: true // open hyperlinks in a new windows/tab
}

var editor \= new Pen(options);

2\. configure
-------------

The following object sets up the default settings of Pen:

defaults \= {
  class: 'pen',
  debug: false,
  textarea: '<textarea name="content"></textarea>',
  list: \[
    'blockquote', 'h2', 'h3', 'p', 'insertorderedlist', 'insertunorderedlist',
    'indent', 'outdent', 'bold', 'italic', 'underline', 'createlink'
  \],
  stay: true,
  linksInNewWindow: false
}

If you want to customize the toolbar to fit your own project, you can instanciate `Pen` constructor with an `options` object like #1.3: init with options:

#### 2.1 Fallback for old browser

You can set `defaults.textarea` to a piece of HTML string, by default, it's `<textarea name="content"></textarea>`。This will be set as `innerHTML` of your `#editor`.

#### 2.2 Change the editor class

Pen will add `.pen` to your editor by default, if you want to change the class, make sure to replace the class name `pen` to your own in `src/pen.css`.

#### 2.3 Enable debug mode

If `options.debug` is set to `true`, Pen will output logs to the Console of your browser.

#### 2.4 Customize the toolbar

You can set `options.list` to an `Array`, add the following strings to make your own:

-   `blockquote`, `h2`, `h3`, `p`, `pre`: create a tag as its literal meaning
-   `insertorderedlist`: create an `ol>li` list
-   `insertunorderedlist`: create a `ul>li` list
-   `indent`: indent list / blockquote block
-   `outdent`: outdent list / blockquote block
-   `bold`: wrap the text selection in a `b` tag
-   `italic`: wrap the text selection in an `i` tag
-   `underline`: wrap the text selection in a `u` tag
-   `createlink`: insert link to the text selection
-   `inserthorizontalrule`: insert a `hr` tag
-   `insertimage`: insert an image (`img`) tag

#### 2.5 Add tooltips to the toolbar icons

You can set `options.titles` to an object with properties that match the toolbar actions. The value of each property will be used as the title attribute on the icon. Most browsers will display the title attribute as a tooltip when the mouse hovers over the icon.

options.title \= {
    'blockquote': 'Blockquote'
    'createlink': 'Hyperlink'
    'insertimage': 'Image'
}

If you are using Bootstrap or jQueryUI, you can standardize the tooltip style by adding `$('i.pen-icon').tooltip()` to your JavaScript.

#### 2.6 Prevent unsafe page redirect

By default, Pen will prevent unsafe page redirect when editing, to shut down it, specific `options.stay` to `false`.

**NOTE:** if `defaults.debug` is set to `true` and `default.stay` is not set: `defaults.stay == !defaults.debug`.

#### 2.7 Disable and Re-enable editor

You can disable the pen editor by call `destroy()` method of the `var pen = new Pen(options)` object. like:

var pen \= new Pen('#editor');

pen.destroy(); // return itself

And, there's a corresponding method called `rebuild()` to re-enable the editor:

pen.rebuild(); // return itself

#### 2.8 Export content as markdown

It's an experimental feature

var pen \= new Pen('#editor');

pen.toMd(); // return a markdown string

3\. markdown syntax support
---------------------------

#### 3.1 install

The syntax convertor will be enabled automatically by linking `markdown.js` after \`pen.js:

<script src\="src/pen.js"\></script\>
<script src\="src/markdown.js"\></script\>

#### 3.2 usage

To use it, you can type `action cmd` + `space key` at a line start. like:

```
### This will create a h3 tag
```

The following cmds are allowed:

-   Headings: type 1~6 `#` at the line start
-   Unordered List: type `-` or `*`
-   Ordered List: type `1.`
-   Code block: type **\`\`\`**
-   Block Quote: type `>`
-   Horizontal Rule: more than 3 `-`, `*`, `.` will create a `<hr />`, like `......`

4\. license
-----------

Licensed under MIT.

5\. trusted by \*
-----------------
