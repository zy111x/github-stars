---
project: dante-astro-theme
stars: 305
description: Dante, a single-author blog and portfolio theme for Astro.js. 
url: https://github.com/JustGoodUI/dante-astro-theme
---

Dante - Astro & Tailwind CSS Theme by justgoodui.com
====================================================

Dante is a single-author blog and portfolio theme for Astro.js. Featuring a minimal, slick, responsive and content-focused design. For more Astro.js themes please check justgoodui.com.

If you click this☝️ button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

Theme Features:
---------------

-   ✅ Dark and light color mode
-   ✅ Hero section with bio
-   ✅ Portfolio collection
-   ✅ Pagination support
-   ✅ Post tags support
-   ✅ Subscription form
-   ✅ View transitions
-   ✅ Tailwind CSS
-   ✅ Mobile-first responsive layout
-   ✅ SEO-friendly with canonical URLs and OpenGraph data
-   ✅ Sitemap support
-   ✅ RSS Feed support
-   ✅ Markdown & MDX support

Template Integrations
---------------------

-   @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
-   @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
-   @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
-   @astrojs/rss - https://docs.astro.build/en/guides/rss/

Project Structure
-----------------

Inside of Dante Astro theme, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro (`.astro`) components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See Astro's Content Collections docs to learn more.

Any static assets, like images, can be placed in the `public/` directory.

Astro.js Commands
-----------------

All commands are run from the root of the project, from a terminal:

Command

Action

`npm install`

Installs dependencies

`npm run dev`

Starts local dev server at `localhost:4321`

`npm run build`

Build your production site to `./dist/`

`npm run preview`

Preview your build locally, before deploying

`npm run astro ...`

Run CLI commands like `astro add`, `astro check`

`npm run astro -- --help`

Get help using the Astro CLI

Want to learn more about Astro.js?
----------------------------------

Check out our documentation or jump into our Discord server.

Credits
-------

-   Demo content generate with Chat GPT
-   Images for demo content from Unsplash

Astro Themes by Just Good UI
----------------------------

-   Ovidius is a free single author blog theme.

License
-------

Licensed under the GPL-3.0 license.
