---
project: vinxi
stars: 2333
description: The Full Stack JavaScript SDK
url: https://github.com/nksaraf/vinxi
---

_The JavaScript toolkit to build full stack apps and frameworks with your own opinions.  
powered by `vite` and `nitro`_

`vinxi`
=======

Compose full stack applications (and frameworks) using **Vite**, the versatile bundler and dev server, and **Nitro**, the universal production server.

Inspired by the Bun.App API, the core primitive in Vinxi is the **router**, which is simply a brief specification defining how a group of URLs should be handled.

Vinxi supports many common router types:

-   'static' - for serving uncompiled, static assets
-   'http' - for creating traditional web servers
-   'spa' - for building and serving single page application assets
-   'client' - for building and serving of SSR application assets
-   custom - for adapting Vinxi to your use case

Creating a new router is as simple as adding a specification object to the `routers` array in the `createApp` call:

import { createApp } from 'vinxi';

export default createApp({
  routers: \[
    // A static router serving files from the \`public\` directory
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
    // A http router for an api
    {
      name: 'api',
      type: 'http',
      handler: './app/api.ts',
      base: '/api',
      plugins: () \=> \[
        // Vite plugins applying exclusively to \`http\` router
      \]
    }
  \],
});

* * *

There are currently two frameworks actively being developed on `vinxi`:

-   SolidStart
-   TanstackStart

There are also a few other frameworks experimenting with vinxi:

-   AngularStart

Examples
--------

Framework

Category

Example

StackBlitz Link

React

RSC

SPA

SPA

Basic

MDX

TanStack Router (Pages)

TanStack Router (App)

Wouter

SSR

Basic

Basic w/Cloudflare

TanStack Router (App)

Wouter

Solid

SPA

Basic

SSR

Basic

Solid Router

Vanilla

SPA

TRPC

Goals
-----

Primary goal is to build the tools needed to build a NextJS or SolidStart style metaframework on top of vite without worrying about a lot of the wiring required to keep dev and prod working along with SSR, SPA, RSC, and all the other acronyms. etc. On top of that, we should be able to deploy anywhere easily.

Mostly trying to disappear for the user outside the app.js file

The surface layer we are intending to tackle:

1.  Full stack builds (handle manifest stuff to figure out what assets to load at prod runtime)
2.  Dev time asset handling (avoiding FOUC in SSR frameworks) and smoothing over some of vite's dev/prod mismatching behaviours by providing common manifest APIs that work in dev and prod the same way
3.  File system router (not any specific file system conventions, just an API for interfacing with FileSystemRouters and utils to implement your conventions in them)
4.  Building the server, and providing a simple opaque `handler` API to control the server
5.  Adapter stuff to deploy to various platforms with support for all the features they provide
6.  Not to abstract away the platforms. Let people use what they want to the fullest
7.  Have little opinion about how the app should be authored or structured

Roadmap
-------

-   `vinxi deploy`
-   hooks throughout the app licycle:
    -   dev: app:created, app:started, router:created

Try it out
----------

npm install vinxi

### React SSR

import reactRefresh from "@vitejs/plugin-react";
import { createApp } from "vinxi";

export default createApp({
	routers: \[
		{
			name: "public",
			type: "static",
			dir: "./public",
		},
		{
			name: "client",
			type: "client",
			handler: "./app/client.tsx",
			target: "browser",
			plugins: () \=> \[reactRefresh()\],
			base: "/\_build",
		},
		{
			name: "ssr",
			type: "http",
			handler: "./app/server.tsx",
			target: "server",
		},
	\],
});

### Solid SSR

import { createApp } from "vinxi";
import solid from "vite-plugin-solid";

export default createApp({
	routers: \[
		{
			name: "public",
			type: "static",
			dir: "./public",
		},
		{
			name: "client",
			type: "client",
			handler: "./app/client.tsx",
			target: "browser",
			plugins: () \=> \[solid({ ssr: true })\],
			base: "/\_build",
		},
		{
			name: "ssr",
			type: "http",
			handler: "./app/server.tsx",
			target: "server",
			plugins: () \=> \[solid({ ssr: true })\],
		},
	\],
});
