---
project: wasm-pack
stars: 6388
description: 📦✨ your favorite rust -> wasm workflow tool!
url: https://github.com/rustwasm/wasm-pack
---

📦✨ wasm-pack
=============

**Your favorite Rust → Wasm workflow tool!**

### Docs | Contributing | Chat

Built with 🦀🕸 by The Rust and WebAssembly Working Group

About
-----

This tool seeks to be a one-stop shop for building and working with rust- generated WebAssembly that you would like to interop with JavaScript, in the browser or with Node.js. `wasm-pack` helps you build rust-generated WebAssembly packages that you could publish to the npm registry, or otherwise use alongside any javascript packages in workflows that you already use, such as webpack.

This project is a part of the rust-wasm group. You can find more info by visiting that repo!

🔮 Prerequisites
----------------

This project requires Rust 1.30.0 or later.

-   Development Environment
-   Installation

⚡ Quickstart Guide
------------------

Visit the quickstart guide in our documentation.

🎙️ Commands
------------

-   `new`: Generate a new RustWasm project using a template
-   `build`: Generate an npm wasm pkg from a rustwasm crate
-   `test`: Run browser tests
-   `pack` and `publish`: Create a tarball of your rustwasm pkg and/or publish to a registry

📝 Logging
----------

`wasm-pack` uses `env_logger` to produce logs when `wasm-pack` runs.

To configure your log level, use the `RUST_LOG` environment variable. For example:

```
RUST_LOG=info wasm-pack build
```

👯 Contributing
---------------

Read our guide on getting up and running for developing `wasm-pack`, and check out our contribution policy.

🤹‍♀️ Governance
----------------

This project is part of the rustwasm Working Group.

This project was started by ashleygwilliams and is maintained by drager and the Rust Wasm Working Group Core Team.
