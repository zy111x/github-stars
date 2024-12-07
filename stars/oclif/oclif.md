---
project: oclif
stars: 9046
description: CLI for generating, building, and releasing oclif CLIs. Built by Salesforce.
url: https://github.com/oclif/oclif
---

`oclif` CLI
===========

-   `oclif` CLI
-   🗒 Description
-   🚀 Getting Started Tutorial
-   📌 Requirements
-   📌 Migrating from V1
-   🏗 Usage
-   📚 Examples
-   🔨 Commands
-   Command Topics
-   🚀 Contributing
-   🏭 Related Repositories
-   🦔 Learn More

🗒 Description
==============

This is the `oclif` CLI for the Open CLI Framework, that supports the development of oclif plugins and CLIs.

See the docs for more information.

🚀 Getting Started Tutorial
===========================

The Getting Started tutorial is a step-by-step guide to introduce you to oclif. If you have not developed anything in a command line before, this tutorial is a great place to get started.

See Usage below for an overview of the `oclif` CLI.

📌 Requirements
===============

Currently, Node 18+ is supported. We support the LTS versions of Node. You can add the node package to your CLI to ensure users are running a specific version of Node.

📌 Migrating from V1
====================

If you have been using version 1 of the `oclif` CLI there are some important differences to note when using the latest version.

Breaking Changes
----------------

-   `oclif multi`, `oclif plugin`, and `oclif single` have all been removed in favor of `oclif generate`, which generates an oclif based CLI using the hello-world example repo.
    -   The reason is that there's not enough of a meaningful difference between a "multi command cli", a "single command cli", and a "plugin" to justify the maintenance cost. The generated CLI can be easily used for any of those use cases.
-   `oclif hook` is now `oclif generate:hook`
-   `oclif command` is now `oclif generate:command`

New Commands
------------

Version 2 now includes all the commands from the `oclif-dev` CLI. This means that you can now use a single CLI for all your oclif needs. These commands include:

-   `oclif manifest`
-   `oclif pack`
-   `oclif pack:deb`
-   `oclif pack:macos`
-   `oclif pack:win`
-   `oclif upload` (formerly known as `oclif-dev publish`)
-   `oclif upload:deb` (formerly known as `oclif-dev publish:deb`)
-   `oclif upload:macos` (formerly known as `oclif-dev publish:macos`)
-   `oclif upload:win` (formerly known as `oclif-dev publish:win`)
-   `oclif readme`

🏗 Usage
========

Creating a CLI:

$ npx oclif generate mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run.js --version
mynewcli/0.0.0 darwin-x64 node-v9.5.0
$ ./bin/run.js --help
USAGE
  $ mynewcli \[COMMAND\]

COMMANDS
  hello
  help   display help for mynewcli

$ ./bin/run.js hello world
hello world! (./src/commands/hello/world.ts)

📚 Examples
===========

-   Hello-World
-   Salesforce CLI
-   Heroku CLI

🔨 Commands
===========

Command Topics
==============

-   `oclif generate` - Generate a new CLI
-   `oclif help` - Display help for oclif.
-   `oclif init` - Initialize a new oclif CLI
-   `oclif manifest` - Generates plugin manifest json (oclif.manifest.json).
-   `oclif pack` - Package an oclif CLI into installable artifacts.
-   `oclif promote` - Promote CLI builds to a S3 release channel.
-   `oclif readme` - Adds commands to README.md in current directory.
-   `oclif upload` - Upload installable CLI artifacts to AWS S3.

🚀 Contributing
===============

See the contributing guide.

🏭 Related Repositories
=======================

-   @oclif/core - Base library for oclif. This can be used directly without the generator.
-   @oclif/test - Test helper for oclif.

🦔 Learn More
=============

-   Salesforce Release Announcement
-   Heroku Release Announcement
