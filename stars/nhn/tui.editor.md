---
project: tui.editor
stars: 17235
description: 🍞📝 Markdown WYSIWYG Editor. GFM Standard + Chart & UML Extensible.
url: https://github.com/nhn/tui.editor
---

> GFM Markdown and WYSIWYG Editor - Productive and Extensible

🚩 Table of Contents
--------------------

-   Packages
-   Why TOAST UI Editor?
-   Features
-   Examples
-   Browser Support
-   Pull Request Steps
-   Contributing
-   TOAST UI Family
-   Used By
-   License

📦 Packages
-----------

### TOAST UI Editor

Name

Description

`@toast-ui/editor`

Plain JavaScript component

### TOAST UI Editor's Wrappers

Name

Description

`@toast-ui/react-editor`

React wrapper component

`@toast-ui/vue-editor`

Vue wrapper component

### TOAST UI Editor's Plugins

Name

Description

`@toast-ui/editor-plugin-chart`

Plugin to render chart

`@toast-ui/editor-plugin-code-syntax-highlight`

Plugin to highlight code syntax

`@toast-ui/editor-plugin-color-syntax`

Plugin to color editing text

`@toast-ui/editor-plugin-table-merged-cell`

Plugin to merge table columns

`@toast-ui/editor-plugin-uml`

Plugin to render UML

🤖 Why TOAST UI Editor?
-----------------------

TOAST UI Editor provides **Markdown mode** and **WYSIWYG mode**. Depending on the type of use you want like production of _Markdown_ or maybe to just edit the _Markdown_. The TOAST UI Editor can be helpful for both the usage. It offers **Markdown mode** and **WYSIWYG mode**, which can be switched any point in time.

### Productive Markdown Mode

**CommonMark + GFM Specifications**

Today _CommonMark_ is the de-facto _Markdown_ standard. _GFM (GitHub Flavored Markdown)_ is another popular specification based on _CommonMark_ - maintained by _GitHub_, which is the _Markdown_ mostly used. TOAST UI Editor follows both _CommonMark_ and _GFM_ specifications. Write documents with ease using productive tools provided by TOAST UI Editor and you can easily open the produced document wherever the specifications are supported.

-   **Live Preview** : Edit Markdown while keeping an eye on the rendered HTML. Your edits will be applied immediately.
-   **Scroll Sync** : Synchronous scrolling between Markdown and Preview. You don't need to scroll through each one separately.
-   **Syntax Highlight** : You can check broken Markdown syntax immediately.

### Easy WYSIWYG Mode

-   **Table** : Through the context menu of the table, you can add or delete columns or rows of the table, and you can also arrange text in cells.
-   **Custom Block Editor** : The custom block area can be edited through the internal editor.
-   **Copy and Paste** : Paste anything from browser, screenshot, excel, powerpoint, etc.

### UI

-   **Toolbar** : Through the toolbar, you can style or add elements to the document you are editing.
    
-   **Dark Theme** : You can use the dark theme.
    

### Use of Various Extended Functions - Plugins

CommonMark and GFM are great, but we often need more abstraction. The TOAST UI Editor comes with powerful **Plugins** in compliance with the Markdown syntax.

**Five basic plugins** are provided as follows, and can be downloaded and used with npm.

-   **`chart`** : A code block marked as a 'chart' will render TOAST UI Chart.
-   **`code-syntax-highlight`** : Highlight the code block area corresponding to the language provided by Prism.js.
-   **`color-syntax`** : Using TOAST UI ColorPicker, you can change the color of the editing text with the GUI.
-   **`table-merged-cell`** : You can merge columns of the table header and body area.
-   **`uml`** : A code block marked as an 'uml' will render UML diagrams.

🎨 Features
-----------

-   Viewer : Supports a mode to display only markdown data without an editing area.
-   Internationalization (i18n) : Supports English, Dutch, Korean, Japanese, Chinese, Spanish, German, Russian, French, Ukrainian, Turkish, Finnish, Czech, Arabic, Polish, Galician, Swedish, Italian, Norwegian, Croatian + language and you can extend.
-   Widget : This feature allows you to configure the rules that replaces the string matching to a specific `RegExp` with the widget node.
-   Custom Block : Nodes not supported by Markdown can be defined through custom block. You can display the node what you want through writing the parsing logic with custom block.

🐾 Examples
-----------

-   Basic
-   Viewer
-   Using All Plugins
-   Creating the User's Plugin
-   Customizing the Toobar Buttons
-   Internationalization (i18n)

Here are more examples and play with TOAST UI Editor!

🌏 Browser Support
------------------

Chrome

Internet Explorer

Edge

Safari

Firefox

Yes

11+

Yes

Yes

Yes

🔧 Pull Request Steps
---------------------

TOAST UI products are open source, so you can create a pull request(PR) after you fix issues. Run npm scripts and develop yourself with the following process.

### Setup

Fork `main` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

$ git clone https://github.com/{your-personal-repo}/tui.editor.git
$ npm install
$ npm run build toastmark
$ npm run test editor

> TOAST UI Editor uses npm workspace, so you need to set the environment based on npm7. If subversion is used, dependencies must be installed by moving direct paths per package.

### Develop

You can see your code reflected as soon as you save the code by running a server. Don't miss adding test cases and then make green rights.

#### Run snowpack-dev-server

snowpack allows you to run a development server without bundling.

$ npm run serve editor

#### Run webpack-dev-server

If testing of legacy browsers is required, the development server can still be run using a webpack.

$ npm run serve:ie editor

#### Run test

$ npm test editor

### Pull Request

Before uploading your PR, run test one last time to check if there are any errors. If it has no errors, commit and then push it!

For more information on PR's steps, please see links in the Contributing section.

💬 Contributing
---------------

-   Code of Conduct
-   Contributing Guideline
-   Commit Convention
-   Issue Guidelines

🍞 TOAST UI Family
------------------

-   TOAST UI Calendar
-   TOAST UI Chart
-   TOAST UI Grid
-   TOAST UI Image Editor
-   TOAST UI Components

🚀 Used By
----------

-   NHN Dooray! - Collaboration Service (Project, Messenger, Mail, Calendar, Drive, Wiki, Contacts)
-   UNOTES - Visual Studio Code Extension

📜 License
----------

This software is licensed under the MIT © NHN Cloud.
