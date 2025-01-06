---
project: kutt
stars: 8609
description: Free Modern URL Shortener.
url: https://github.com/thedevs-network/kutt
---

Kutt.it
=======

**Kutt** is a modern URL shortener with support for custom domains. Shorten URLs, manage your links and view the click rate statistics.

_Contributions and bug reports are welcome._

https://kutt.it

Table of Contents
-----------------

-   Key Features
-   Stack
-   Setup
-   Browser Extensions
-   API
-   Integrations
-   3rd Party Packages
-   Donate
-   Contributing

Key Features
------------

-   Free and open source.
-   Custom domain support.
-   Custom URLs for shortened links
-   Set password for links.
-   Set description for links.
-   Expiration time for links.
-   Private statistics for shortened URLs.
-   View, edit, delete and manage your links.
-   Admin account to view, delete and ban links.
-   Ability to disable registration and anonymous link creation for private use.
-   RESTful API.

Stack
-----

-   Node (Web server)
-   Express (Web server framework)
-   Passport (Authentication)
-   React (UI library)
-   Next (Universal/server-side rendered React)
-   Easy Peasy (State management)
-   styled-components (CSS styling solution library)
-   Recharts (Chart library)
-   PostgreSQL (database)
-   Redis (Cache layer)

Setup
-----

### Manual

You need to have Node.js, PostgreSQL and Redis installed.

1.  Clone this repository or download the latest zip.
2.  Copy `.example.env` to `.env` and fill it properly (see below).
3.  Install dependencies: `npm install`.
4.  Run for development: `npm run dev`.
5.  Run for production: `npm run build` then `npm start`.

### Docker

1.  Download the `docker-compose.yml` and the `.docker.env` files.
2.  Rename `.docker.env` to `.env` and fill it properly (see below).
3.  To execute Kutt you simply have to run `docker-compose up -d` command and then the app should be ready on port "3000".

The `docker-compose.yml` uses the official kutt docker image available on Docker Hub.

### Configuration

For the minimal configuration the following settings have to be changed in the `.env`\-file:

-   **DEFAULT\_DOMAIN**: The domain of your kutt instance
-   **DB\_**: The DB credentials (when you use docker-compose you can skip these)
-   **ADMIN\_EMAILS**: A comma-separated list of the administrator-accounts
-   **RECAPTCHA\_**: Enter your credentials to use reCaptchas or delete this setting if you don't want to use it
-   **MAIL\_**: Enter the SMTP-server's credentials (The experience shows SSL works better than STARTTLS; The mail config is required to easily create accounts, see this comment how it can be done manually)
-   **REPORT\_EMAIL**: Kutt offers a form to report malicious links which are sent to this mail-address

Browser Extensions
------------------

Download Kutt's extension for web browsers via below links. You can also find the source code on kutt-extension.

-   Chrome
-   Firefox

API
---

Visit API v2 documentation on docs.kutt.it

Integrations
------------

### ShareX

You can use Kutt as your default URL shortener in ShareX. If you host your custom instance of Kutt, refer to ShareX wiki on how to setup.

### Alfred Workflow

Download Kutt's official workflow for Alfred app from alfred-kutt repository.

3rd Party packages
------------------

Language

Link

Description

C# (.NET)

KuttSharp

.NET package for Kutt.it url shortener

C# (.NET)

Kutt.NET

✂️🔗 C# API Wrapper for Kutt

Python

kutt-cli

Command-line client for Kutt written in Python

Ruby

kutt.rb

Kutt library written in Ruby

Rust

urlshortener

URL shortener library written in Rust

Rust

kutt-rs

Command line tool written in Rust

Node.js

node-kutt

Node.js client for Kutt.it url shortener

JavaScript

kutt-vscode

Visual Studio Code extension for Kutt

Java

kutt-desktop

A Cross platform Java desktop application for Kutt

Go

kutt-go

Go client for Kutt.it url shortener

BASH

GitHub Gist

Simple BASH function to access the API

BASH

url-shortener

Simple BASH script with GUI

Donate
------

Kutt is free of charge and free of ads. Help us keep our servers running and motivate us to work on this project by donating to our Bitcoin wallet:

```
1P89WxNTinKxxDQ4FmC4jis3KUdfA9fLJB
```

Contributing
------------

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs or discussing ideas.

Special thanks to Thomas and Muthu. Logo design by Muthu.
