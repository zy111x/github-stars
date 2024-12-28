---
project: mailmason
stars: 938
description: A complete toolset to streamline building and updating a set of consistent transactional emails.
url: https://github.com/ActiveCampaign/mailmason
---

A complete toolset to streamline building and updating a set of consistent transactional emails.

Brought to you by

_Few tasks are more tedious than building a consistent set of well-tested and beautiful transactional email templates for your application._ Not any longer.

With MailMason, you can use Grunt tasks, Handlebars, and SASS to streamline building a consistent set of transactional email templates using layouts and partials to reduce redundancy and create both the HTML and plain text versions of your transactional emails in one fell swoop.

By default, the generated templates use Mustachio for the variable placeholders so that you can easily use them as Postmark templates. However, the Mustachio pieces are only placeholders, and the generated templates could easily be adapted to work with any email provider.

What does it do for you?
------------------------

-   Gives you a thoroughly tested and reliable starting point for building consistent email templates
-   Uses Handlebars to enable layouts and partials in templates and avoid redundancy
-   Enables the use of SCSS for generating the styles
-   Automatically inlines the resulting CSS for testing email client compatibility
-   Automatically generates text versions of emails with the same content as the HTML versions
-   Enables easy sending of test emails through your Postmark account
-   Enables easy batch testing against the Postmark Spamcheck API
-   Enables easy batch testing through Litmus
-   Enables easy uploading of image assets to your CDN so you can include images in your templates (but you don't have to)
-   Enables easy template pushing to your Postmark account

Interested in contributing?
---------------------------

Read through our guidelines for contributing to help make contributions quick and easy.

Visit the wiki for documentation and usage
------------------------------------------

If you need help getting started or using MailMason, make sure to check out the MailMason wiki.

-   About
    -   What can it do?
    -   What templates are included?
-   Getting Started
    -   Setup
    -   Configuration
        -   Secrets.json
        -   Config.json
        -   Images & Assets
        -   Social Images
-   Project Structure
    -   Templates
    -   Images
    -   Layouts
    -   Partials
    -   Stylesheets
-   Usage
    -   Building
    -   Testing
    -   Pushing templates to Postmark
-   Development
-   Templates

License
-------

MailMason is licensed under the **MIT** license. Please refer to the LICENSE for more information.
