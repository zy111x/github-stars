---
project: vim.js
stars: 4453
description: JavaScript port of Vim
url: https://github.com/coolwanglu/vim.js
---

### Vim.js : JavaScript port of Vim

A Tool/Toy for Non-Beginners

by Lu Wang

### Try it online

### Variations

-   NW.js
-   Firefox extension
-   Asyncify
-   Streamline.js

Recommended browsers: Firefox, Chrome, IE

### Vim.js Features

-   ASM.js enabled
-   Persistent `~/.vimrc`
-   Execute JavaScript from Vim.js
-   Read local files
-   Read files from Dropbox

Run `:e $VIM/vimrc` for more detail.

### Vim Features

The online demo is built with the small feature set (`--with-features=small`), with also a few from the normal set. Run `:version` to check details. (`--with-features=normal` is too large and too slow for online usage.)

Some features can be requested via pull requests, some are not intended to be included. Please discuss with me first before you work on a PR.

### Tips for hackers

-   Need emscripten with ASYNCIFY enabled
-   Need GCC & cproto (maybe) — Sometimes you need to run `make proto` when you see errors about 'undeclared variables/functions/structs' or '\*\*\*.pro' file not found
-   Read `build.sh`
-   The building process might take lots of memory

### Contact

Lu Wang coolwanglu(a)gmail.com — please do not expect a prompt response.

### License

Read `LICENSE`
