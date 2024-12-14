---
project: uppy
stars: 29291
description: The next open source file uploader for web browsers :dog: 
url: https://github.com/transloadit/uppy
---

Uppy
====

Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly with any application. It’s fast, has a comprehensible API and lets you worry about more important problems than building a file uploader.

-   **Fetch** files from local disk, remote URLs, Google Drive, Dropbox, Box, Instagram or snap and record selfies with a camera
-   **Preview** and edit metadata with a nice interface
-   **Upload** to the final destination, optionally process/encode

**Read the docs** | **Try Uppy**

Uppy is being developed by the folks at Transloadit, a versatile API to handle any file in your app.

Tests

Deploys

Example
-------

Code used in the above example:

import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import RemoteSources from '@uppy/remote-sources'
import ImageEditor from '@uppy/image-editor'
import Webcam from '@uppy/webcam'
import Tus from '@uppy/tus'

const uppy \= new Uppy()
  .use(Dashboard, { trigger: '#select-files' })
  .use(RemoteSources, { companionUrl: 'https://companion.uppy.io' })
  .use(Webcam)
  .use(ImageEditor)
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
  .on('complete', (result) \=> {
    console.log('Upload result:', result)
  })

**Try it online** or **read the docs** for more details on how to use Uppy and its plugins.

Features
--------

-   Lightweight, modular plugin-based architecture, light on dependencies ⚡
-   Resumable file uploads via the open tus standard, so large uploads survive network hiccups
-   Supports picking files from: Webcam, Dropbox, Box, Google Drive, Instagram, bypassing the user’s device where possible, syncing between servers directly via @uppy/companion
-   Works great with file encoding and processing backends, such as Transloadit, works great without (all you need is to roll your own Apache/Nginx/Node/FFmpeg/etc backend)
-   Sleek user interface ✨
-   Optional file recovery (after a browser crash) with Golden Retriever
-   Speaks several languages (i18n) 🌍
-   Built with accessibility in mind
-   Free for the world, forever (as in beer 🍺, pizza 🍕, and liberty 🗽)
-   Cute as a puppy, also accepts cat pictures 🐶

Installation
------------

npm install @uppy/core @uppy/dashboard @uppy/tus

Add CSS uppy.min.css, either to your HTML page’s `<head>` or include in JS, if your bundler of choice supports it.

Alternatively, you can also use a pre-built bundle from Transloadit’s CDN: Smart CDN. In that case `Uppy` will attach itself to the global `window.Uppy` object.

> ⚠️ The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.

<!-- 1. Add CSS to \`<head>\` -->
<link
  href\="https://releases.transloadit.com/uppy/v4.8.0/uppy.min.css"
  rel\="stylesheet"
/>

<!-- 2. Initialize -->
<div id\="files-drag-drop"\></div\>
<script type\="module"\>
  import {
    Uppy,
    Dashboard,
    Tus,
  } from 'https://releases.transloadit.com/uppy/v4.8.0/uppy.min.mjs'

  const uppy \= new Uppy()
  uppy.use(Dashboard, { target: '#files-drag-drop' })
  uppy.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
</script\>

Documentation
-------------

-   Uppy — full list of options, methods and events
-   Companion — setting up and running a Companion instance, which adds support for Instagram, Dropbox, Box, Google Drive and remote URLs
-   React — components to integrate Uppy UI plugins with React apps
-   Architecture & Writing a Plugin — how to write a plugin for Uppy

Plugins
-------

### UI Elements

-   `Dashboard` — universal UI with previews, progress bars, metadata editor and all the cool stuff. Required for most UI plugins like Webcam and Instagram
-   `Progress Bar` — minimal progress bar that fills itself when upload progresses
-   `Status Bar` — more detailed progress, pause/resume/cancel buttons, percentage, speed, uploaded/total sizes (included by default with `Dashboard`)
-   `Informer` — send notifications like “smile” before taking a selfie or “upload failed” when all is lost (also included by default with `Dashboard`)

### Sources

-   `Drag & Drop` — plain drag and drop area
-   `File Input` — even plainer “select files” button
-   `Webcam` — snap and record those selfies 📷
-   ⓒ `Google Drive` — import files from Google Drive
-   ⓒ `Dropbox` — import files from Dropbox
-   ⓒ `Box` — import files from Box
-   ⓒ `Instagram` — import images and videos from Instagram
-   ⓒ `Facebook` — import images and videos from Facebook
-   ⓒ `OneDrive` — import files from Microsoft OneDrive
-   ⓒ `Import From URL` — import direct URLs from anywhere on the web

The ⓒ mark means that `@uppy/companion`, a server-side component, is needed for a plugin to work.

### Destinations

-   `Tus` — resumable uploads via the open tus standard
-   `XHR Upload` — regular uploads for any backend out there (like Apache, Nginx)
-   `AWS S3` — plain upload to AWS S3 or compatible services
-   `AWS S3 Multipart` — S3-style “Multipart” upload to AWS or compatible services

### File Processing

-   `Transloadit` — support for Transloadit’s robust file uploading and encoding backend

### Miscellaneous

-   `Golden Retriever` — restores files after a browser crash, like it’s nothing
-   `Thumbnail Generator` — generates image previews (included by default with `Dashboard`)
-   `Form` — collects metadata from `<form>` right before an Uppy upload, then optionally appends results back to the form
-   `Redux` — for your emerging time traveling needs

React
-----

-   React — components to integrate Uppy UI plugins with React apps
-   React Native — basic Uppy component for React Native with Expo

Browser Support
---------------

We aim to support recent versions of Chrome, Firefox, and Safari.

FAQ
---

### Why not use `<input type="file">`?

Having no JavaScript beats having a lot of it, so that’s a fair question! Running an uploading & encoding business for ten years though we found that in cases, the file input leaves some to be desired:

-   We received complaints about broken uploads and found that resumable uploads are important, especially for big files and to be inclusive towards people on poorer connections (we also launched tus.io to attack that problem). Uppy uploads can survive network outages and browser crashes or accidental navigate-aways.
-   Uppy supports editing meta information before uploading.
-   Uppy allows cropping images before uploading.
-   There’s the situation where people are using their mobile devices and want to upload on the go, but they have their picture on Instagram, files in Dropbox or a plain file URL from anywhere on the open web. Uppy allows to pick files from those and push it to the destination without downloading it to your mobile device first.
-   Accurate upload progress reporting is an issue on many platforms.
-   Some file validation — size, type, number of files — can be done on the client with Uppy.
-   Uppy integrates webcam support, in case your users want to upload a picture/video/audio that does not exist yet :)
-   A larger drag and drop surface can be pleasant to work with. Some people also like that you can control the styling, language, etc.
-   Uppy is aware of encoding backends. Often after an upload, the server needs to rotate, detect faces, optimize for iPad, or what have you. Uppy can track progress of this and report back to the user in different ways.
-   Sometimes you might want your uploads to happen while you continue to interact on the same single page.

Not all apps need all these features. An `<input type="file">` is fine in many situations. But these were a few things that our customers hit / asked about enough to spark us to develop Uppy.

### Why is all this goodness free?

Transloadit’s team is small and we have a shared ambition to make a living from open source. By giving away projects like tus.io and Uppy, we’re hoping to advance the state of the art, make life a tiny little bit better for everyone and in doing so have rewarding jobs and get some eyes on our commercial service: a content ingestion & processing platform.

Our thinking is that if only a fraction of our open source userbase can see the appeal of hosted versions straight from the source, that could already be enough to sustain our work. So far this is working out! We’re able to dedicate 80% of our time to open source and haven’t gone bankrupt yet. :D

### Does Uppy support S3 uploads?

Yes, please check out the docs for more information.

### Can I use Uppy with Rails/Node.js/Go/PHP?

Yes, whatever you want on the backend will work with `@uppy/xhr-upload` plugin, since it only does a `POST` or `PUT` request. Here’s a PHP backend example.

If you want resumability with the Tus plugin, use one of the tus server implementations 👌🏼

And you’ll need `@uppy/companion` if you’d like your users to be able to pick files from Instagram, Google Drive, Dropbox or via direct URLs (with more services coming).

Contributions are welcome
-------------------------

-   Contributor’s guide in `.github/CONTRIBUTING.md`
-   Changelog to track our release progress (we aim to roll out a release every month): `CHANGELOG.md`

Used by
-------

Uppy is used by: Photobox, Issuu, Law Insider, Cool Tabs, Soundoff, Scrumi, Crive and others.

Use Uppy in your project? Let us know!

Contributors
------------

License
-------

The MIT License.
