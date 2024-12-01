---
project: react-native-web
stars: 21695
description: Cross-platform React UI packages
url: https://github.com/necolas/react-native-web
---

Development monorepo
====================

This is the development monorepo for "React Native for Web" and related projects.

Structure
---------

-   `.github`
    -   Contains workflows used by GitHub Actions.
    -   Contains issue templates.
-   `configs`
    -   Contains configuration files used by the monorepo tooling (compiling, linting, testing, etc.)
-   `packages`
    -   react-native-web
    -   Contains the individual packages managed in the monorepo.
-   `scripts`
    -   Contains Node.js scripts for miscellaneous tasks.

Tasks
-----

-   `build`
    -   Use `npm run build` to run the build script in every package.
    -   Use `npm run build -w <package-name>` to run the build script for a specific package.
-   `dev`
    -   Use `npm run dev` to run the dev script in every package.
    -   Use `npm run dev -w <package-name>` to run the dev script for a specific package.
-   `test`
    -   Use `npm run test` to run tests for every package.

More details can be found in the contributing guide below.

Contributing
------------

Development happens in the open on GitHub and we are grateful for contributions including bugfixes, improvements, and ideas.

### Code of conduct

This project expects all participants to adhere to Meta's OSS Code of Conduct. Please read the full text so that you can understand what actions will and will not be tolerated.

### Contributing guide

Read the contributing guide to learn about the development process, how to propose bugfixes and improvements, and how to build and test your changes to React Native for Web.

### Good first issues

To help you get you familiar with the contribution process, there is a list of good first issues that contain bugs which have a relatively limited scope. This is a great place to get started.
