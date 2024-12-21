---
project: animata
stars: 1530
description: Bring your site to life with easy to use animation & interaction code. Copy. Paste. Animate. 
url: https://github.com/codse/animata
---

Handcrafted ✍️ interaction animations and visual effects sourced from across the internet 🛜, ready for you to copy and paste into your project seamlessly.

### Built with

  

### Table of Contents

1.  Introduction
    -   What is Animata?
    -   What is not Animata?
2.  Getting Started
    -   Requirements
    -   Setup Instructions
        -   Folder Structure (Recommended)
        -   Install Dependencies
        -   Create Utility Functions
3.  Contributing
4.  Authors
5.  License

Introduction
------------

### What is Animata?

Welcome to Animata, a free and open-source collection of hand-crafted animations, effects, and interactions that you can seamlessly integrate into your project with a simple copy and paste. The animations are built using TailwindCSS and React.js, so they can be easily customized to fit your project's design.

### What is not Animata?

Animata is not a full-fledged UI library like Material-UI or Chakra-UI. It is a collection of animations and effects that you can use to enhance your project's design. You can also use Animata alongside other UI libraries or design systems (you will need to set up TailwindCSS for this).

Getting Started
---------------

You don't need to install it as a dependency instead you can simply copy and paste the code, as shadcn/ui, into your project. However, you still need to install the other dependency that the code needs.

### Requirements

-   TailwindCSS: For styling.
-   Framer Motion (Optional): For complex animations.
-   Lucide Icons or Radix Icons (Optional): Use for icons, or replace with any other icon library or SVGs.

### Setup Instructions

#### Folder Structure (Recommended)

/
  /components
  /ui

where `/` is the root of your project, `/components` is where you keep your components and the project has been set up using paths in the `tsconfig.json` file.

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/\*": \["./\*"\]
    }
  }
}

#### Install Dependencies

Install the required dependencies, if you haven't already:

npm install tailwind-merge clsx lucide-react tailwindcss-animate

Add `tailwindcss-animate` to plugins in `tailwind.config.js` file:

module.exports \= {
  plugins: \[require("tailwindcss-animate")\],
};

### Create Utility Functions

Create utils.ts file in the libs folder and paste the following code:

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue\[\]) {
  return twMerge(clsx(inputs));
}

#### NOTE

1.  If you see something that has been imported but not mentioned in the documentation, then it is a dependency you need to install. If it starts with @/ then it is Animata's component else it is an external dependency. In such a case, you can submit a PR to update the documentation.
2.  If something is not working, the docs probably miss the tailwind.config.js updates. You can look for the entries that have been added to the tailwind.config.js in Animata's source code. You can create an issue or submit a PR to update the documentation.

Contributing
------------

Contributions to Animata are always welcome!

-   📥 Pull requests and 🌟 Stars are always welcome.
-   Read our contributing guide to get started, or find us on Discord, we will take the time to guide you.

Authors
-------

Heartfelt gratitude goes to each of you for your amazing contributions to this project. Your hard work, creativity, and dedication have been nothing short of incredible. Whether it was coding, debugging, testing, or sharing ideas, every effort made a significant difference.

License
-------

This project is licensed under the MIT License. see the LICENSE file for details.
