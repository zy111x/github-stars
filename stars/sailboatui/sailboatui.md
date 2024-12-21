---
project: sailboatui
stars: 1257
description: Sailboat UI is a modern UI component library for Tailwind CSS 
url: https://github.com/sailboatui/sailboatui
---

Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open-source Tailwind CSS components, and make it easy to build your products.

Documentation
-------------

For the full documentation, visit sailboatui.com.

Meet our sponsors
-----------------

MagickPen

OpenL

magickimg

AI Writing Assistant, powered by ChatGPT

Amazing Translator, powered by AI

Boost Your images Powered by AI

Components
----------

Avatar

Badge

Button

Card

Dropdown

Input

Notification

Pagination

View All

Installation
------------

npm install -D tailwindcss

Sailboat UI is a modern UI component library for Tailwind CSS, you just need to install Tailwind CSS and configure it. Learn how to install Tailwind CSS.

Configuration
-------------

You need to add this to your `tailwind.config.js` file.

// tailwind.config.js
const defaultTheme \= require("tailwindcss/defaultTheme");
const colors \= require("tailwindcss/colors");
module.exports \= {
  content: \["./src/\*\*/\*.{html,js}"\],
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: \["Inter", ...defaultTheme.fontFamily.sans\],
      },
      // Set theme colors (Required config!)
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  // Add plugins
  plugins: \[require("@tailwindcss/typography"), require("@tailwindcss/forms")\],
};

More configuration options are available in the Sailboat UI Quick Start.

Development
-----------

Sailboat UI is an open-source project that you can contribute to on GitHub. If you appreciate the project, please consider giving it a star to show your support. Thank you.

1.  You need Hugo to run the development server. If you have Homebrew you can do the following:

brew install hugo

1.  Clone the repository and install the dependencies. Run the development server.

npm run dev

1.  Open http://localhost:1313/ in your browser.

-   `npm run dev`: Run the dev server.
-   `npm run build`: Build the static site.
