---
project: tart
stars: 3921
description: macOS and Linux VMs on Apple Silicon to use in CI and other automations
url: https://github.com/cirruslabs/tart
---

_Tart_ is a virtualization toolset to build, run and manage macOS and Linux virtual machines (VMs) on Apple Silicon. Built by CI engineers for your automation needs. Here are some highlights of Tart:

-   Tart uses Apple's own `Virtualization.Framework` for near-native performance.
-   Push/Pull virtual machines from any OCI-compatible container registry.
-   Use Tart Packer Plugin to automate VM creation.
-   Easily integrates with any CI system.

Tart powers Cirrus Runners service — a drop-in replacement for the standard GitHub-hosted runners, offering 2-3 times better performance for a fraction of the price.

Many companies are using Tart in their internal setups. Here are just a few of them:

**Note:** If your company or project is using Tart please consider sharing with the community.

Usage
-----

Try running a Tart VM on your Apple Silicon device running macOS 13.0 (Ventura) or later (will download a 25 GB image):

brew install cirruslabs/cli/tart
tart clone ghcr.io/cirruslabs/macos-sonoma-base:latest sonoma-base
tart run sonoma-base

Please check the official documentation for more information and/or feel free to use discussions for remaining questions.
