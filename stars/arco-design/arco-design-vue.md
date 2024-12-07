---
project: arco-design-vue
stars: 2754
description: A Vue.js 3 UI Library based on Arco Design
url: https://github.com/arco-design/arco-design-vue
---

Arco Design
===========

A comprehensive Vue UI components library based on the Arco Design system.

English | 简体中文

Features
========

Comprehensive
-------------

With more than 60 crafted components that you can use out of the box.

Customizable theme
------------------

Extensive theme tokens can be customized to build your own theme. Two ways of customization are supported:

-   With less-loader
-   Design Lab - Recommended!

TypeScript friendly
-------------------

All components are written in TypeScript so it's type friendly.

Installation
============

Available as an npm package

// with npm
npm install @arco-design/web-vue

// with yarn
yarn add @arco-design/web-vue

Examples
========

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app \= createApp(App);
app.use(ArcoVue);
app.mount('#app');

Development
-----------

1.  Use `npm install -g` to install basic packages such as `lerna` and `yarn`.
    
2.  Use `yarn install` to install the dependencies of each package in `workspaces` (If you encounter a `YN0018` error, you can use `YARN_CHECKSUM_BEHAVIOR=update yarn` to install).
    
3.  Use `npm run init` to initialize the project.
    

Useful Links
============

-   Documentation website
-   Dark mode
-   Theme customization
-   Figma component library
-   Awesome Arco

Ecosystems
==========

Project

Description

React Component Library

A comprehensive React UI components library based on the Arco Design system

Design Lab

A platform to create and manage your themes with ease.

Material Market

A platform that provides massive high-quality customized materials to greatly boost development efficiency.

Icon Box

One-stop platform to manage your icons.

Arco Pro

A solution to quickly building applications from scratch.

Contributing
============

Developers interested in contributing should read the Code of Conduct and the Contributing Guide.

Thank you to all the people who already contributed to ArcoDesign!

License
=======

Ths project is MIT licensed.
