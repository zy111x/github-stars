---
project: developer-icons
stars: 192
description: A collection of well-optimized SVG tech logos for developers and designers—customizable, scalable, and free.
url: https://github.com/xandemon/developer-icons
---

Developer Icons
===============

Homepage  ⬥  Browse Icons  ⬥  NPM Package  ⬥  Usage  ⬥  Contributing

Welcome to **`developer-icons`**—a curated set of high-quality, customizable tech icons built for developers and designers. Fully compatible with TypeScript, ideal for React and Next.js, or downloadable from our official website for design projects.

🚀 Tech Stack
-------------

-   Astro - The web framework for content-driven websites.
-   React - A JavaScript UI library used with Astro.
-   Tailwind CSS - A utility-first CSS framework for rapid UI development.
-   NPM - The package manager for JavaScript.
-   Typescript - A statically typed, superset of JavaScript.
-   Vite - A lightning-fast build tool for an optimized development experience.
-   Lucide Icons - A modern, customizable, open-source icon library.
-   SVGO - A powerful tool for compressing and optimizing SVG files.
-   SVGSON - A tool to seamlessly convert SVGs to JSON format and back.

🌟 Features
-----------

-   ⚡**Highly optimized:** Icons are optimized for performance and size. They are designed to be as small as possible while maintaining the quality.
-   🎨**Customizable:** Cusomizations are available for all icons. You can change the size, color, stroke width, and much more.
-   🔍**Perfectly scalable:** Icons are designed to be properly scaled to any size without compromising the quality.
-   🔄**Consistent icons:** No more dealing with inconsistent styles and designs. All icons are designed with a pre-defined set of rules.
-   🌗**Various variants:** Icons come with their own set of families such as light and dark mode, wordmark, and other variants.
-   ⭐**Free & open-source:** Completely free and open-source with license. No need to worry about privately hidden malicious code and be a contributor yourself.

Explore more and start using `developer-icons` today to enhance your projects with stunning, customizable icons!

📦 Installation
---------------

To add the icons to your project, run one of the following commands:

npm i developer-icons

or

yarn add developer-icons

or

pnpm add developer-icons

⚙️ Usage
--------

Import named icon components from the `developer-icons` package and use them just like any other React component, with props/attributes similar to those of an SVG:

import { HtmlIcon, JavascriptIcon } from "developer-icons";

//inside your React component JSX
export const YourReactComponent \= () \=> {
  return (
    <div\>
      <HtmlIcon className\="html-icon" />
      <JavascriptIcon size\={52} style\={{ marginLeft: 20 }} />
    </div\>
  );
};

In this example, we import `HtmlIcon` and `JavascriptIcon` from the `developer-icons` package and use them within a React component. You can customize the icons by adjusting their `size`, `color`, `style`, and other properties.

🤝 Contributing
---------------

We welcome contributions of all kinds, whether you're looking to add new icons, improve existing ones, or enhance the overall project. To get started, refer to our Contributing Guidelines.

📜 License
----------

Licensed under MIT License and copyrights reserved.

For complete documentation, visit our official documentation.
