---
project: offen
stars: 891
description: Offen Fair Web Analytics
url: https://github.com/offen/offen
---

Offen Fair Web Analytics
========================

**Let your users access their data.  
Gain valuable insights at the same time.  
Open, lightweight, self hosted and free.**

Contents
--------

**Software**

-   Core features
-   How it works
-   Essential metrics
-   Objectives
-   Localize
-   Customize
-   Test drive
-   License

**Community**

-   Feedback and contributions welcome
-   Kind support
-   Who's using Offen Fair Web Analytics?
-   Links

Core features
-------------

**Secure & free**  
Our code is open source. All usage data is encrypted end-to-end. Offen Fair Web Analytics will always be available for free.

**Self hosted**  
Comply with GDPR guidelines. No ads, no third parties involved. Offen Fair Web Analytics uses first-party cookies only.

**Fair & by choice**  
Opt-in only. Users must actively give their consent to data collection. They have full access to their data.

How it works
------------

**Your job**

-   Self host Offen Fair Web Analytics while protecting your users' data.
-   Integrate the code snippet into pages you want to track.
-   Make your users aware of the access to their data.
-   Improve your services with fair and transparent insights.

**Benefits for your users**

-   Opt in to data collection or decide to not participate at all.
-   Review own data with detailed explanations of metrics and terms.
-   Only delete usage data or opt out completely at any time.

**What you see**  
Data of all pages where your installation is active. For example:

**What your users see**  
Data of all pages a user has visited where your installation is active. For example:

**More features**

-   Easily analyze multiple websites within one installation.
-   All website accounts can be shared within teams.
-   User data is only stored for 6 months and then deleted.
-   A detailed documentation on how to run Offen Fair Web Analytics is available.

Essential metrics
-----------------

All important statistics that help you to improve your service.  
Filter collected data by URL, Location, Referrer, UTM parameters, as well as Landing Pages and Exit Pages.

Objectives
----------

**Privacy friendly**  
Collection of usage data is opt in, users that do not actively opt in will never leave a trace. After opt in, Offen Fair Web Analytics collects the minimal amount of data needed to generate meaningful statistics for operators. No IPs, User-Agent strings or similar are being collected or even looked at.

**Secure**  
Data in Offen Fair Web Analytics is encrypted End-To-End. Clients encrypt usage data before it leaves the browser and there is no way for the server storing this data to decrypt it. Attackers have no means to compromise an instance, accidental data leaks cannot expose user data.

**Self hosted and lightweight**  
You can run Offen Fair Web Analytics on-premises, or in any other deployment scenario that fits your need. All you need to do is download a single binary file or pull a Docker image, and run it on your server. Offen Fair Web Analytics will automatically install and renew SSL certificates for you if you want it to. If you do not want to deploy a dedicated database, you can use SQLite to store data directly on the server.

**Transparent and fair**  
Offen Fair Web Analytics treats the user as a party of equal importance in the collection of usage data. Users have access to the same set of tools for analyzing their own data and they can delete their data at any time.

Localize
--------

**Offen Fair Web Analytics is currently available in English, French, German, Portuguese, Spanish and Vietnamese.** Our consent banner and the Auditorium for operators as well as users can be displayed in the respective locale.

If you want to support fair web analytics by contributing Italian, Dutch, Polish or other language versions, don't hesitate to request an invite.

Customize
---------

Our consent banner is customizable in **color, shape and basic font specifications** to match your design. Learn more.

Test drive
----------

Give Offen Fair Web Analytics a test drive right now. Open your terminal and type:

curl https://demo.offen.dev | bash

This creates an ephemeral one-off installation that is populated with random data and is running on `http://localhost:9876`. There, you can log in using the account `demo@offen.dev` and password `demo`.

License
-------

Work in this repository is licensed under multiple licences.

-   All original source code is licensed under Apache-2.0.
-   All documentation is licensed under Apache-2.0.
-   The Offen Fair Web Analytics icon and logo are licensed as CC-BY-NC-ND-4.0.

See the NOTICE file for license information on works that get bundled by Offen Fair Web Analytics.

Feedback and contributions welcome
----------------------------------

Found an issue or want to add something? Please do not hesitate to file an issue or open a pull request (or send an email in case you don't want to use GitHub). For details on how to get started head over to our contributing guidelines.

* * *

This repository contains all source code needed to work on Offen Fair Web Analytics, both on the server as well as on the client. The development setup requires `docker` and the `compose` plugin to be installed.

After cloning the repository

```
$ git clone git@github.com:offen/offen.git
```

you can build the containers and install dependencies using:

$ make setup

Next seed the database for the `server` application:

$ make bootstrap

You can test your setup by starting the application:

$ make up

which should enable you to access http://localhost:8080/auditorium/ and use the `Auditorium`

Run the tests for all subapplications using

$ make test

Detailed instructions on how to get started with development can be found at our dedicated docs site.

* * *

The documentation site at https://docs.offen.dev is also part of this repository. To run this site locally, you can:

make setup-docs
make docs

This will serve the documentation site on https://localhost:4000.

Kind support
------------

We are happy to work with NLnet Foundation, which has supported our efforts as part of its Next Generation Internet initiative.

Cross-Browser testing provided by BrowserStack.

Who's using Offen Fair Web Analytics?
-------------------------------------

We're happy to feature you in this README. Send a PR adding your site or app to this section.

-   All Quiet - Incident escalation made easy

Links
-----

Website  
Docs  
Mastodon
