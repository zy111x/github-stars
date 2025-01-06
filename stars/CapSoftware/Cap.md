---
project: Cap
stars: 5556
description: Open source Loom alternative. Beautiful, shareable screen recordings.
url: https://github.com/CapSoftware/Cap
---

**Cap**
=======

The open source Loom alternative.  
**Cap.so »**  
  
**Download for** macOS · Web ·  
  
_~ Cap is currently in public beta, and is available for macOS and Web. Windows and Linux builds are in development. Join the Cap Discord to help test future releases and join the community. ~_  

  

> NOTE: Cap is under active development, and is currently in public beta. This repository is updated regularly with changes and new releases.

Cap is the open source alternative to Loom. It's a video messaging tool that allows you to record, edit and share videos in seconds.

Cap Self Hosting
================

We're working on a self-hosting guide for Cap. This will include one-click deployment buttons for Vercel and Render, as well as an option to self host with Docker. Join the Cap Discord if you want to help contribute to this particular project.

Monorepo App Architecture
=========================

We use a combination of Rust, React (Next.js), TypeScript, Tauri, Drizzle (ORM), MySQL, TailwindCSS throughout this Turborepo powered monorepo.

### Apps:

-   `desktop`: A Tauri (Rust) app, using SolidStart on the frontend.
-   `web`: A Next.js web app.

### Packages:

-   `ui`: A React Shared component library.
-   `utils`: A React Shared utility library.
-   `tsconfig`: Shared `tsconfig` configurations used throughout the monorepo.
-   `database`: A React and Drizzle ORM Shared database library.
-   `config`: `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier` other configs used throughout the monorepo).

Contributing
============

See CONTRIBUTING.md for more information. This guide is a work in progress, and is updated regularly as the app matures.
