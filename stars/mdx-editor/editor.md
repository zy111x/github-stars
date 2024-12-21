---
project: editor
stars: 2142
description: A rich text editor React component for markdown
url: https://github.com/mdx-editor/editor
---

MDXEditor
=========

> Because markdown editing can be even more delightful.

MDXEditor is an open-source React component that allows users to author markdown documents naturally. Just like in Google docs or Notion. See the live demo that has all features turned on. The component supports the core markdown syntax and certain extensions, including tables, images, code blocks, etc. It also allows users to edit JSX components with a built-in JSX editor or a custom one.

import {MDXEditor, headingsPlugin} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

export default function App() {
  return <MDXEditor markdown\={'# Hello World'} plugins\={\[headingsPlugin()\]} />;
}

Get Started
-----------

The best place to get started using the component is the documentation.

Help and support
----------------

If you find a bug, check if something similar is not reported already in the issues. If not, create a new issue.

If you're integrating the component in your commercial project and need dedicated assistance with your issues in exchange of sponsorship, contact me over email.

If you want to discuss ideas join the Discord server or start a discussion in the Discussions section.

License
-------

MIT © Petyo Ivanov.
