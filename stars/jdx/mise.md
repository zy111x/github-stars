---
project: mise
stars: 10520
description: dev tools, env vars, task runner
url: https://github.com/jdx/mise
---

  
mise-en-place
================

_The front-end to your dev env._

What is it?
-----------

-   Like asdf (or nvm or pyenv but for any language) it manages dev tools like node, python, cmake, terraform, and hundreds more.
-   Like direnv it manages environment variables for different project directories.
-   Like make it manages tasks used to build and test projects.

30 Second Demo
--------------

The following shows using mise to install different versions of node. Note that calling `which node` gives us a real path to node, not a shim.

Quickstart
----------

Install mise (other methods here):

$ curl https://mise.run | sh
$ ~/.local/bin/mise --version
2024.12.2 macos-arm64 (a1b2d3e 2024-12-07)

or install a specific a version:

$ curl https://mise.run | MISE\_VERSION=v2024.5.16 sh
$ ~/.local/bin/mise --version
2024.5.16 macos-arm64 (8838098 2024-05-14)

Hook mise into your shell (pick the right one for your shell):

\# note this assumes mise is located at ~/.local/bin/mise
# which is what https://mise.run does by default
echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc
echo '~/.local/bin/mise activate fish | source' >> ~/.config/fish/config.fish

Install a runtime and set it as the global default:

$ mise use --global node@20
$ node -v
v20.0.0

Full Documentation
------------------

See mise.jdx.dev

Contributors
------------
