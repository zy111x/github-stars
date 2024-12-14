---
project: bun
stars: 74796
description: Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one
url: https://github.com/oven-sh/bun
---

Bun
===

Documentation   •   Discord   •   Issues   •   Roadmap  

### Read the docs →

What is Bun?
------------

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called `bun`.

At its core is the _Bun runtime_, a fast JavaScript runtime designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.

bun run index.tsx             # TS and JSX supported out-of-the-box

The `bun` command-line tool also implements a test runner, script runner, and Node.js-compatible package manager. Instead of 1,000 node\_modules for development, you only need `bun`. Bun's built-in tools are significantly faster than existing options and usable in existing Node.js projects with little to no changes.

bun test                      # run tests
bun run start                 # run the \`start\` script in \`package.json\`
bun install <pkg\>             # install a package
bunx cowsay 'Hello, world!'   # execute a package

Install
-------

Bun supports Linux (x64 & arm64), macOS (x64 & Apple Silicon) and Windows (x64).

> **Linux users** — Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1.

# with install script (recommended)
curl -fsSL https://bun.sh/install | bash

# on windows
powershell -c "irm bun.sh/install.ps1 | iex"

# with npm
npm install -g bun

# with Homebrew
brew tap oven-sh/bun
brew install bun

# with Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun

### Upgrade

To upgrade to the latest version of Bun, run:

bun upgrade

Bun automatically releases a canary build on every commit to `main`. To upgrade to the latest canary build, run:

bun upgrade --canary

View canary build

Quick links
-----------

-   Intro
    
    -   What is Bun?
    -   Installation
    -   Quickstart
    -   TypeScript
-   Templating
    
    -   `bun init`
    -   `bun create`
-   Runtime
    
    -   `bun run`
    -   File types
    -   TypeScript
    -   JSX
    -   Environment variables
    -   Bun APIs
    -   Web APIs
    -   Node.js compatibility
    -   Single-file executable
    -   Plugins
    -   Watch mode
    -   Module resolution
    -   Auto-install
    -   bunfig.toml
    -   Debugger
    -   Framework API
-   Package manager
    
    -   `bun install`
    -   `bun add`
    -   `bun remove`
    -   `bun update`
    -   `bun link`
    -   `bun pm`
    -   Global cache
    -   Workspaces
    -   Lifecycle scripts
    -   Filter
    -   Lockfile
    -   Scopes and registries
    -   Overrides and resolutions
-   Bundler
    
    -   `Bun.build`
    -   Loaders
    -   Plugins
    -   Macros
    -   vs esbuild
-   Test runner
    
    -   `bun test`
    -   Writing tests
    -   Watch mode
    -   Lifecycle hooks
    -   Mocks
    -   Snapshots
    -   Dates and times
    -   DOM testing
    -   Code coverage
-   Package runner
    
    -   `bunx`
-   API
    
    -   HTTP server
    -   WebSockets
    -   Workers
    -   Binary data
    -   Streams
    -   File I/O
    -   import.meta
    -   SQLite
    -   FileSystemRouter
    -   TCP sockets
    -   UDP sockets
    -   Globals
    -   $ Shell
    -   Child processes
    -   Transpiler
    -   Hashing
    -   Console
    -   FFI
    -   HTMLRewriter
    -   Testing
    -   Utils
    -   Node-API
    -   Glob
    -   Semver
-   Project
    
    -   Roadmap
    -   Benchmarking
    -   Contributing
    -   Building Windows
    -   License

Guides
------

-   Binary
    
    -   Convert a Blob to a DataView
    -   Convert a Blob to a ReadableStream
    -   Convert a Blob to a string
    -   Convert a Blob to a Uint8Array
    -   Convert a Blob to an ArrayBuffer
    -   Convert a Buffer to a blob
    -   Convert a Buffer to a ReadableStream
    -   Convert a Buffer to a string
    -   Convert a Buffer to a Uint8Array
    -   Convert a Buffer to an ArrayBuffer
    -   Convert a DataView to a string
    -   Convert a Uint8Array to a Blob
    -   Convert a Uint8Array to a Buffer
    -   Convert a Uint8Array to a DataView
    -   Convert a Uint8Array to a ReadableStream
    -   Convert a Uint8Array to a string
    -   Convert a Uint8Array to an ArrayBuffer
    -   Convert an ArrayBuffer to a Blob
    -   Convert an ArrayBuffer to a Buffer
    -   Convert an ArrayBuffer to a string
    -   Convert an ArrayBuffer to a Uint8Array
    -   Convert an ArrayBuffer to an array of numbers
-   Ecosystem
    
    -   Build a frontend using Vite and Bun
    -   Build an app with Astro and Bun
    -   Build an app with Next.js and Bun
    -   Build an app with Nuxt and Bun
    -   Build an app with Qwik and Bun
    -   Build an app with Remix and Bun
    -   Build an app with SolidStart and Bun
    -   Build an app with SvelteKit and Bun
    -   Build an HTTP server using Elysia and Bun
    -   Build an HTTP server using Express and Bun
    -   Build an HTTP server using Hono and Bun
    -   Build an HTTP server using StricJS and Bun
    -   Containerize a Bun application with Docker
    -   Create a Discord bot
    -   Deploy a Bun application on Render
    -   Read and write data to MongoDB using Mongoose and Bun
    -   Run Bun as a daemon with PM2
    -   Run Bun as a daemon with systemd
    -   Server-side render (SSR) a React component
    -   Use Drizzle ORM with Bun
    -   Use EdgeDB with Bun
    -   Use Neon's Serverless Postgres with Bun
    -   Use Prisma with Bun
    -   Use React and JSX
    -   Add Sentry to a Bun app
-   HTTP
    
    -   Common HTTP server usage
    -   Configure TLS on an HTTP server
    -   fetch with unix domain sockets in Bun
    -   Hot reload an HTTP server
    -   Proxy HTTP requests using fetch()
    -   Send an HTTP request using fetch
    -   Start a cluster of HTTP servers
    -   Stream a file as an HTTP Response
    -   Streaming HTTP Server with Async Iterators
    -   Streaming HTTP Server with Node.js Streams
    -   Upload files via HTTP using FormData
    -   Write a simple HTTP server
-   Install
    
    -   Add a dependency
    -   Add a development dependency
    -   Add a Git dependency
    -   Add a peer dependency
    -   Add a tarball dependency
    -   Add a trusted dependency
    -   Add an optional dependency
    -   Configure a private registry for an organization scope with bun install
    -   Configure git to diff Bun's lockb lockfile
    -   Configuring a monorepo using workspaces
    -   Generate a human-readable lockfile
    -   Install a package under a different name
    -   Install dependencies with Bun in GitHub Actions
    -   Override the default npm registry for bun install
    -   Using bun install with an Azure Artifacts npm registry
    -   Using bun install with Artifactory
-   Process
    
    -   Get the process uptime in nanoseconds
    -   Listen for CTRL+C
    -   Listen to OS signals
    -   Parse command-line arguments
    -   Read from stdin
    -   Read stderr from a child process
    -   Read stdout from a child process
    -   Spawn a child process
    -   Spawn a child process and communicate using IPC
-   Read file
    
    -   Check if a file exists
    -   Get the MIME type of a file
    -   Read a file as a ReadableStream
    -   Read a file as a string
    -   Read a file to a Buffer
    -   Read a file to a Uint8Array
    -   Read a file to an ArrayBuffer
    -   Read a JSON file
    -   Watch a directory for changes
-   Runtime
    
    -   Debugging Bun with the VS Code extension
    -   Debugging Bun with the web debugger
    -   Define and replace static globals & constants
    -   Import a JSON file
    -   Import a TOML file
    -   Import HTML file as text
    -   Install and run Bun in GitHub Actions
    -   Install TypeScript declarations for Bun
    -   Re-map import paths
    -   Read environment variables
    -   Run a Shell Command
    -   Set a time zone in Bun
    -   Set environment variables
-   Streams
    
    -   Convert a Node.js Readable to a Blob
    -   Convert a Node.js Readable to a string
    -   Convert a Node.js Readable to an ArrayBuffer
    -   Convert a Node.js Readable to JSON
    -   Convert a ReadableStream to a Blob
    -   Convert a ReadableStream to a Buffer
    -   Convert a ReadableStream to a string
    -   Convert a ReadableStream to a Uint8Array
    -   Convert a ReadableStream to an array of chunks
    -   Convert a ReadableStream to an ArrayBuffer
    -   Convert a ReadableStream to JSON
-   Test
    
    -   Bail early with the Bun test runner
    -   Generate code coverage reports with the Bun test runner
    -   Mark a test as a "todo" with the Bun test runner
    -   Migrate from Jest to Bun's test runner
    -   Mock functions in `bun test`
    -   Re-run tests multiple times with the Bun test runner
    -   Run tests in watch mode with Bun
    -   Run your tests with the Bun test runner
    -   Set a code coverage threshold with the Bun test runner
    -   Set a per-test timeout with the Bun test runner
    -   Set the system time in Bun's test runner
    -   Skip tests with the Bun test runner
    -   Spy on methods in `bun test`
    -   Update snapshots in `bun test`
    -   Use snapshot testing in `bun test`
    -   Write browser DOM tests with Bun and happy-dom
-   Util
    
    -   Check if the current file is the entrypoint
    -   Check if two objects are deeply equal
    -   Compress and decompress data with DEFLATE
    -   Compress and decompress data with gzip
    -   Convert a file URL to an absolute path
    -   Convert an absolute path to a file URL
    -   Detect when code is executed with Bun
    -   Encode and decode base64 strings
    -   Escape an HTML string
    -   Get the absolute path of the current file
    -   Get the absolute path to the current entrypoint
    -   Get the current Bun version
    -   Get the directory of the current file
    -   Get the file name of the current file
    -   Get the path to an executable bin file
    -   Hash a password
    -   Sleep for a fixed number of milliseconds
-   WebSocket
    
    -   Build a publish-subscribe WebSocket server
    -   Build a simple WebSocket server
    -   Enable compression for WebSocket messages
    -   Set per-socket contextual data on a WebSocket
-   Write file
    
    -   Append content to a file
    -   Copy a file to another location
    -   Delete a file
    -   Write a Blob to a file
    -   Write a file incrementally
    -   Write a file to stdout
    -   Write a ReadableStream to a file
    -   Write a Response to a file
    -   Write a string to a file
    -   Write to stdout

Contributing
------------

Refer to the Project > Contributing guide to start contributing to Bun.

License
-------

Refer to the Project > License page for information about Bun's licensing.
