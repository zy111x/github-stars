---
project: supermemory
stars: 7348
description: Build your own second brain with supermemory. It's a ChatGPT for your bookmarks. Import tweets or save websites and content using the chrome extension.
---

SuperMemory
===========

Interested in helping build the best second brain for everyone? Join the discord https://discord.gg/2X2XsKz5AU. Contributions welcome.

👀 What is this?
----------------

Build your own second brain with supermemory. It's a ChatGPT for your bookmarks. Import tweets or save websites and content using the Chrome extension

Well, here's the thing - me and @yxshv save a _lot_ of content on the internet.

Twitter bookmarks, websites, snippets, etc.

But we never look back to it - to us, it's like throwing information in the void.

Supermemory fixes this.

Key Features
------------

-   💡 **Ideation**: Capture and save ideas effortlessly.
-   🔖 **Bookmarks**: Import, organize, and resurface bookmarks when needed.
-   📇 **Contacts**: Store and manage information about people you know.
-   🐦 **Twitter Bookmarks**: Import and utilize your saved tweets.
-   🔍 **Powerful Search**: Quickly find any saved information.
-   💬 **Chat with Collections**: Interact with specific knowledge bases.
-   🖼️ **Knowledge Canvas**: Organize information visually in a 2D canvas.
-   ✍️ **Writing Assistant**: Use a markdown editor with AI assistance for content creation.
-   🔒 **Privacy Focused**: Ensures data security and privacy.
-   🏠 **Self Hostable**: Open source and easy to deploy locally.
-   🔗 **Integrations**: Compatible with Telegram, Twitter, and more to come.

How do I use this?
------------------

Just go to supermemory.ai and sign in with your google account.

To use the chrome extension,

Warning

You need to be signed in before installing the supermemory extension, or you may experience problems

1.  Download from Chrome Web Store
2.  Now you can see on any page on bottom right (just click on it to save)

### Import Twitter Bookmarks

1.  Make sure you signed into supermemory and installed chrome extension
    
2.  Open Twitter/X, you will see the save icon as follows
    
3.  Click on save button and give it 10 - 20 secs, where supermemory extension will sync all your twitter bookmarks to supermemory.ai
    
4.  Voila! Now your second brain has all your twitter bookmarks.
    

👨‍💻 The Stack
---------------

#### Architecture:

Supermemory has three main modules, managed by turborepo:

#### `apps/web`: The main web UI.

The database, auth etc logic is here

Built with:

-   Nextjs 14
-   Next Auth
-   Drizzle ORM
-   Cloudflare D1 database
-   Cloudflare ratelimiter
-   TailwindCSS
-   shadcn-ui
-   And some other amazing open source projects like Novel and vaul
-   Hosted on Cloudflare Pages

#### `apps/extension`: Chrome extension

The chrome extension is one of the most important part of the setup, but is not required.This is to easily add pages to your memory.

Built with:

-   CRXJS
-   Vite
-   TailwindCSS
-   shadcn-ui
-   React

#### `apps/cf-ai-backend`: This module handles the vector store and AI response generation

This is where the magic happens! Built with:

-   Cloudflare Workers
-   Cloudflare AI
-   Cloudflare Vectorize
-   Cloudflare Queues
-   Cloudflare Browser Rendering
-   Cloudflare KV
-   mem0

Star History
------------

Contribute or self host
-----------------------

Supermemory is design to be set up easily locally and super duper easy to set up 💫

Please see the SETUP-GUIDE.md for setup instructions.

### Contributing

Contributions are very welcome! A contribution can be as small as a ⭐ or even finding and creating issues.
