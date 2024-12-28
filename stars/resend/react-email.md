---
project: react-email
stars: 14840
description: 💌 Build and send emails using React
url: https://github.com/resend/react-email
---

**React Email**

The next generation of writing emails.  
High-quality, unstyled components for creating emails.

  

Website · GitHub · Discord

Introduction
------------

A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript. It reduces the pain of coding responsive emails with dark mode support. It also takes care of inconsistencies between Gmail, Outlook, and other email clients for you.

Why
---

We believe that email is an extremely important medium for people to communicate. However, we need to stop developing emails like 2010, and rethink how email can be done in 2022 and beyond. Email development needs a revamp. A renovation. Modernized for the way we build web apps today.

Install
-------

Install one of the components from your command line.

#### With yarn

yarn add @react-email/components -E

#### With npm

npm install @react-email/components -E

#### With pnpm

pnpm install @react-email/components -E

Getting started
---------------

Add the component to your email template. Include styles where needed.

import { Button } from "@react-email/components";

const Email \= () \=> {
  return (
    <Button href\="https://example.com" style\={{ color: "#61dafb" }}\>
      Click me
    </Button\>
  );
};

Components
----------

A set of standard components to help you build amazing emails without having to deal with the mess of creating table-based layouts and maintaining archaic markup.

-   Body
-   Button
-   CodeBlock
-   CodeInline
-   Column
-   Container
-   Divider
-   Font
-   Head
-   Heading
-   Html
-   Image
-   Link
-   Markdown
-   Paragraph
-   Preview
-   Section

Integrations
------------

Emails built with React Email can be converted into HTML and sent using any email service provider. Here are some examples:

-   Resend
-   Nodemailer
-   SendGrid
-   Postmark
-   AWS SES
-   Plunk
-   Scaleway

Support
-------

All components were tested using the most popular email clients.

Gmail ✔

Apple Mail ✔

Outlook ✔

Yahoo! Mail ✔

HEY ✔

Superhuman ✔

Development
-----------

#### Install dependencies

pnpm install

#### Build and run packages

pnpm dev

This will initialize all packages in parallel and watch for changes, including the website which will be available at localhost:3000.

Contributing
------------

-   Contribution Guide

Authors
-------

-   Bu Kinoshita (@bukinoshita)
-   Zeno Rocha (@zenorocha)

License
-------

MIT License
