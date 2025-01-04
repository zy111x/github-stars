---
project: jsx-email
stars: 1089
description: Build emails with a delightful DX
url: https://github.com/shellscape/jsx-email
---

  
  

JSX email provides a set of React components and helpers for building delightful and responsive email templates, compatible with modern email clients.  
  
The components handle the heavy lifting of compatibility and client inconsistency so designers and developers can focus on building impactful and engaging templates.  

Migrating to Version 2.0.0
--------------------------

Version 2 represents a big leap forward for the project, but it's not without a few bumps. As with most major version releases in the Node ecosystem, there are a few breaking changes (nothing major) and steps to be performed. Please read our Migration Guide.

To browse the source code and documentation markdown for v1.12.1 please click here.

Getting Started
---------------

Everything to know about the components, props, and usage is available within our Documentation Site. Please give that a read and let us know if there's anything we can help with.

Requirements
------------

The packages and components that make up JSX email require an LTS Node version (v18.0.0+) and React v18.2.0+

  
  
Compatible with all modern email services  
  

Components
----------

A list of available components can be found on the `jsx-email` Documentation

Advantages Over `react-email`
-----------------------------

The goals of this project are to provide an improved focus on Developer Experience, maintenance, fast improvements and fast releases. As such, we feel that `jsx-email` has a number of improvements and advantages over `react-email`. Those include:

-   Email Client Compatibility Checking
-   Exclusive Components
-   Optional Configuration Files
-   Plugins
-   Crazy fast Tailwind support
-   Support for `<Suspense>` and `async` within Components
-   Enhanced Developer Experience (DX)
-   Better Command Line tools
-   Works with Monorepos out of the box. No exhaustive setup needed.
-   Less complex, smoother Preview Server
-   Faster improvements, feature development, and releases
-   Community-driven maintenance rather than company-planning priority
-   No vendor lock-in for tools. `jsx-email` uses only generic components and tools

Service Integrations
--------------------

Email built and rendered with JSX email can be used with any email provider that provides an API for sending email as a `String`. This includes AWS SES, Loops, Nodemailer, Postmark,Resend, Plunk, and SendGrid. See our documentation on Email Providers for more info and example usage.

Contributing, Working With This Repo
------------------------------------

We 💛 contributions! After all, this is a community-driven project. We have no corporate sponsorship or backing. The maintainers and users keep this project going!

Please check out our Contribution Guide.

Attribution 🧡
--------------

This project was built upon prior work for `react-email` by Bu Kinoshita (@bukinoshita) and Zeno Rocha (@zenorocha).

`jsx-email` is a fork of `react-email`.

We (the maintainers) use JSX email daily. This fork was originally created as a canary channel for fixes from pull requests and issues that had been left unaddressed. JSX email grew faster, and the upstream team didn't give the project the love we felt it needed. When our help wasn't accepted, we felt a new direction was warranted.

License
-------

MIT License
