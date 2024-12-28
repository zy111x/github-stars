---
project: changesets
stars: 9207
description: 🦋       A way to manage your versioning and changelogs with a focus on monorepos
url: https://github.com/changesets/changesets
---

A tool to manage versioning and changelogs  
with a focus on multi-package repositories

  

The `changesets` workflow is designed to help when people are making changes, all the way through to publishing. It lets contributors declare how their changes should be released, then we automate updating package versions, and changelogs, and publishing new versions of packages based on the provided information.

Changesets has a focus on solving these problems for multi-package repositories, and keeps packages that rely on each other within the multi-package repository up-to-date, as well as making it easy to make changes to groups of packages.

How do we do that?
------------------

A `changeset` is an intent to release a set of packages at particular semver bump types with a summary of the changes made.

The **@changesets/cli** package allows you to write `changeset` files as you make changes, then combine any number of changesets into a release, that flattens the bump-types into a single release per package, handles internal dependencies in a multi-package-repository, and updates changelogs, as well as release all updated packages from a mono-repository with one command.

How do I get started?
---------------------

If you just want to jump in to using changesets, the Intro to using changesets and @changesets/cli docs are where you should head.

If you want a detailed explanation of the concepts behind changesets, or to understand how you would build on top of changesets, check out our detailed-explanation.

We also have a dictionary.

Integrating with CI
-------------------

While changesets can be an entirely manual process, we recommend integrating it with how your CI works.

To check that PRs contain a changeset, we recommend using the changeset bot, or if you want to fail builds on a changesets failure, run `yarn changeset status` in CI.

To make releasing easier, you can use this changesets github action to automate creating versioning pull requests, and optionally publishing packages.

Documentation
-------------

-   Intro to using changesets
-   Detailed explanation
-   Common questions
-   Adding a changeset
-   Automating changesets
-   Checking for changesets
-   Command line options
-   Config file options
-   Decisions
-   Dictionary
-   Fixed packages
-   Linked packages
-   Modifying changelog format
-   Prereleases
-   Problems publishing in monorepos
-   Snapshot releases
-   Versioning applications and other non-npm packages
-   Experimental Options

Cool Projects already using Changesets for versioning and changelogs
--------------------------------------------------------------------

-   atlaskit
-   emotion
-   keystone
-   react-select
-   XState
-   pnpm
-   filbert-js
-   tinyhttp
-   Firebase Javascript SDK
-   Formik
-   MobX
-   Nhost
-   verdaccio
-   Chakra UI
-   Astro
-   SvelteKit
-   Hydrogen
-   react-pdf
-   GraphQL Code Generator
-   GraphQL Yoga
-   GraphQL-Mesh
-   GraphiQL
-   wagmi
-   refine
-   Modern Web
-   Atomizer
-   Medusa
-   OpenZeppelin Contracts
-   Block Protocol
-   Remix
-   Clerk
-   Hey API
-   neverthrow

Thanks/Inspiration
==================

-   bolt - Brought us a strong concept of how packages in a mono-repo should be able to interconnect, and provided the initial infrastructure to get inter-package information.
-   Atlassian - The original idea/sponsor of the changesets code, and where many of the ideas and processes were fermented. It was originally implemented by the team behind atlaskit.
-   lerna-semantic-release - put down many of the initial patterns around updating packages within a multi-package-repository, and started us thinking about how to manage dependent packages.
-   Thinkmill - For sponsoring the focused open sourcing of this project, and the version two rearchitecture.
