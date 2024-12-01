---
project: editor.js
stars: 28913
description: A block-style editor with clean JSON output
url: https://github.com/codex-team/editor.js
---

editorjs.io | documentation | changelog

About
-----

Editor.js is an open-source text editor offering a variety of features to help users create and format content efficiently. It has a modern, block-style interface that allows users to easily add and arrange different types of content, such as text, images, lists, quotes, etc. Each Block is provided via a separate plugin making Editor.js extremely flexible.

Editor.js outputs a clean JSON data instead of heavy HTML markup. Use it in Web, iOS, Android, AMP, Instant Articles, speech readers, AI chatbots — everywhere. Easy to sanitize, extend and integrate with your logic.

-   😍  Modern UI out of the box
-   💎  Clean JSON output
-   ⚙️  Well-designed API
-   🛍  Various Tools available
-   💌  Free and open source

Installation
------------

It's quite simple:

1.  Install Editor.js
2.  Install tools you need
3.  Initialize Editor's instance

Install using NPM, Yarn, or CDN:

npm i @editorjs/editorjs

Choose and install tools:

-   Heading
-   Quote
-   Image
-   Simple Image (without backend requirement)
-   Nested List
-   Checklist
-   Link embed
-   Embeds (YouTube, Twitch, Vimeo, Gfycat, Instagram, Twitter, etc)
-   Table
-   Delimiter
-   Warning
-   Code
-   Raw HTML
-   Attaches
-   Marker
-   Inline Code

See the 😎 Awesome Editor.js list for more tools.

Initialize the Editor:

<div id\="editorjs"\></div\>

import EditorJS from '@editorjs/editorjs'

const editor \= new EditorJS({
  tools: {
   // ... your tools
  }
})

See details about Installation and Configuration at the documentation.

### Saving Data

Call `editor.save()` and handle returned Promise with saved data.

const data \= await editor.save()

### Example

Take a look at the example.html to view more detailed examples.

Roadmap
-------

-   Unified Toolbars
    -   Block Tunes moved left
    -   Toolbox becomes vertical
    -   Ability to display several Toolbox buttons by the single Tool
    -   Block Tunes become vertical
    -   Block Tunes support nested menus
    -   Block Tunes support separators
    -   Conversion Menu added to the Block Tunes
    -   Unified Toolbar supports hints
    -   Conversion Toolbar uses Unified Toolbar
    -   Inline Toolbar uses Unified Toolbar
-   Collaborative editing
    -   Implement Inline Tools JSON format
    -   Operations Observer, Executor, Manager, Transformer
    -   Implement Undo/Redo Manager
    -   Implement Tools API changes
    -   Implement Server and communication
    -   Update basic tools to fit the new API
-   Other features
    -   Blocks drag'n'drop
    -   New cross-block selection
    -   New cross-block caret moving
-   Ecosystem improvements
    -   CodeX Icons — the way to unify all tools and core icons
    -   New Homepage and Docs
    -   @editorjs/create-tool for Tools bootstrapping
    -   Editor.js DevTools — stand for core and tools development
    -   Editor.js Design System
    -   Editor.js Preset Env
    -   Editor.js ToolKit
    -   New core bundle system
    -   New documentation and guides

  

Like Editor.js?
---------------

You can support project improvement and development of new features with a donation to our team.

Donate via OpenCollective  
Donate via Crypto  
Donate via Patreon

### Why donate

Donations to open-source products have several advantages for your business:

-   If your business relies on Editor.js, you'll probably want it to be maintained
-   It helps Editor.js to evolve and get the new features
-   We can support contributors and the community around the project. You'll receive well organized docs, guides, etc.
-   We need to pay for our infrastructure and maintain public resources (domain names, homepages, docs, etc). Supporting it guarantees you to access any resources at the time you need them.
-   You can advertise by adding your brand assets and mentions on our public resources

### Sponsors

Support us by becoming a sponsor. Your logo will show up here with a link to your website.

Become a Sponsor

### Backers

Thank you to all our backers

Become a Backer

### Contributors

This project exists thanks to all the people who contribute.

### Need something special?

Hire CodeX experts to resolve technical challenges and match your product requirements.

-   Resolve a problem that has high value for you
-   Implement a new feature required by your business
-   Help with integration or tool development
-   Provide any consultation

Contact us via team@codex.so and share your details

Community
---------

-   Official Tools
-   Awesome Editor.js
-   Good First Tasks
-   Contributing
-   Telegram Chat

About CodeX
===========

CodeX is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are open for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

🌐

Join 👋

Twitter

Instagram

codex.so

codex.so/join

@codex\_team

@codex\_team
