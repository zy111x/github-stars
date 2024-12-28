---
project: verdaccio
stars: 16572
description: A lightweight Node.js private proxy registry
url: https://github.com/verdaccio/verdaccio
---

> Verdaccio stands for **peace**, stop the war, we will be yellow / blue 🇺🇦 until that happens.

Version Next (Development Branch)
=================================

> Looking for Verdaccio version 5 or 6? Version 6 is the latest version and successor to version 5. Version 6 requires Node.js 18 or higher and is maintained in the `6.x` branch.

> The plugins for versions 5 and 6 are located at the `verdaccio/monorepo` repository. Plugins for the `next-8` version are hosted in this project under the `./packages/plugins` folder.

> Note that contributing guidelines might be different based on the branch.

Verdaccio is a simple, **zero-config-required local private npm registry**. No need for an entire database just to get started! Verdaccio comes out of the box with **its own tiny database**, and the ability to proxy other registries (eg. npmjs.org), caching the downloaded modules along the way. For those looking to extend their storage capabilities, Verdaccio **supports various community-made plugins to hook into services such as Amazon's s3, Google Cloud Storage** or create your own plugin.

Versions
--------

You can find more details about the different versions of Verdaccio, minimum requirements, as well as links to associated npm packages and docker images in the version history.

Install
-------

> Node.js v18 as minimum version required

Install with npm:

npm install -g verdaccio@next-8

With `yarn`

yarn global add verdaccio@next-8

With `pnpm`

pnpm i -g verdaccio@next-8

or

docker pull verdaccio/verdaccio:nightly-master

or with _helm_ official chart.

helm repo add verdaccio https://charts.verdaccio.org
helm repo update
helm install verdaccio/verdaccio

Furthermore, you can read the **Debugging Guidelines** and the **Docker Examples** for more advanced development.

Plugins
-------

You can develop your own plugins with the verdaccio generator. Installing Yeoman is required.

```
npm install -g yo
npm install -g generator-verdaccio-plugin
```

Learn more here how to develop plugins. Share your plugins with the community.

Integration Tests
-----------------

In our compatibility testing project, we're dedicated to ensuring that your favorite commands work seamlessly across different versions of npm, pnpm, and Yarn. From publishing packages to managing dependencies. Our goal is to give you the confidence to use your preferred package manager without any issues. So dive in, check out our matrix, and see how your commands fare across the board!

Learn or contribute here

### Commands

cmd

npm6

npm7

npm8

npm9

npm10

pnpm8

pnpm9

pnpm10

yarn1

yarn2

yarn3

yarn4

publish

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

unpublish

✅

✅

✅

✅

✅

✅

✅

❌

❌

❌

❌

❌

info

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

audit

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

❌

install

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

deprecate

✅

✅

✅

✅

✅

✅

✅

✅

⛔

⛔

⛔

⛔

ping

✅

✅

✅

✅

✅

✅

✅

✅

⛔

⛔

⛔

⛔

search

✅

✅

✅

✅

✅

✅

✅

✅

⛔

⛔

⛔

⛔

star

✅

✅

✅

✅

✅

✅

✅

✅

⛔

⛔

⛔

⛔

stars

✅

✅

✅

✅

✅

✅

✅

✅

⛔

⛔

⛔

⛔

dist-tag

✅

✅

✅

✅

✅

✅

✅

✅

✅

❌

❌

❌

> notes:
> 
> -   yarn search cmd exist in _modern_ but, it do not uses the search registry endpoint.
> -   yarn _modern_ has two info commands, the one used here is `yarn npm info`

❌ = no tested ✅ = tested ⛔ = no supported

Donations
---------

Verdaccio is run by **volunteers**; nobody is working full-time on it. If you find this project to be useful and would like to support its development, consider doing a long support donation - **and your logo will be on this section of the readme.**

**Donate** 💵👍🏻 starting from _$1/month_ or just one single contribution.

What does Verdaccio do for me?
------------------------------

### Use private packages

If you want to use all benefits of npm package system in your company without sending all code to the public, and use your private packages just as easy as public ones.

### Cache npmjs.org registry

If you have more than one server you want to install packages on, you might want to use this to decrease latency (presumably "slow" npmjs.org will be connected to only once per package/version) and provide limited failover (if npmjs.org is down, we might still find something useful in the cache) or avoid issues like _How one developer just broke Node, Babel and thousands of projects in 11 lines of JavaScript_, _Many packages suddenly disappeared_ or _Registry returns 404 for a package I have installed before_.

### Link multiple registries

If you use multiples registries in your organization and need to fetch packages from multiple sources in one single project you might take advance of the uplinks feature with Verdaccio, chaining multiple registries and fetching from one single endpoint.

### Override public packages

If you want to use a modified version of some 3rd-party package (for example, you found a bug, but maintainer didn't accept pull request yet), you can publish your version locally under the same name. See in detail here.

### E2E Testing

Verdaccio has proved to be a lightweight registry that can be booted in a couple of seconds, fast enough for any CI. Many open source projects use Verdaccio for end to end testing, to mention some examples, **create-react-app**, **mozilla neutrino**, **pnpm**, **storybook**, **babel.js**, **angular-cli** or **docusaurus**. You can read more in here.

Furthermore, here few examples how to start:

-   e2e-ci-example-gh-actions
-   verdaccio-end-to-end-tests
-   verdaccio-fork

Watch our Videos
----------------

**Node 2022, February 2022, Online Free**

You might want to check out as well our previous talks:

-   Using Docker and Verdaccio to make Integration Testing Easy - **Docker All Hands #4 December - 2021**
-   **Juan Picado** – Testing the integrity of React components by publishing in a private registry - React Finland - 2021
-   BeerJS Cba Meetup No. 53 May 2021 - **Juan Picado**
-   Node.js Dependency Confusion Attacks - April 2021 - **Juan Picado**
-   **OpenJS World 2020** about \*Cover your Projects with a Multi purpose Lightweight Node.js Registry - **Juan Picado**
-   ViennaJS Meetup - Introduction to Verdaccio by **Priscila Olivera** and **Juan Picado**
-   Open Source? trivago - Verdaccio (**Ayush** and **Juan Picado**) January 2020
-   GitNation Open Source Stage - How we have built a Node.js Registry with React - **Juan Picado** December 2019
-   Verdaccio - A lightweight Private Proxy Registry built in Node.js | **Juan Picado** at The Destro Dev Show

Get Started
-----------

Run in your terminal

verdaccio

You would need set some npm configuration, this is optional.

npm set registry http://localhost:4873/

For one-off commands or to avoid setting the registry globally:

NPM\_CONFIG\_REGISTRY=http://localhost:4873 npm i

Now you can navigate to http://localhost:4873/ where your local packages will be listed and can be searched.

> Warning: Verdaccio does not currently support PM2's cluster mode, running it with cluster mode may cause unknown behavior.

Publishing
----------

#### 1\. create a user and log in

npm adduser --registry http://localhost:4873

> if you use HTTPS, add an appropriate CA information ("null" means get CA list from OS)

npm set ca null

#### 2\. publish your package

npm publish --registry http://localhost:4873

This will prompt you for user credentials which will be saved on the `verdaccio` server.

Docker
------

Below are the most commonly needed information, every aspect of Docker and verdaccio is documented separately

```
docker pull verdaccio/verdaccio:nightly-master
```

Available as tags.

### Running Verdaccio using Docker

To run the docker container:

docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

Docker examples are available in this repository.

Compatibility
-------------

Verdaccio aims to support all features of a standard npm client that make sense to support in a private repository. Unfortunately, it isn't always possible.

### Basic features

-   Installing packages (`npm install`, `npm update`, etc.) - **supported**
-   Publishing packages (`npm publish`) - **supported**

### Advanced package control

-   Unpublishing packages (`npm unpublish`) - **supported**
-   Tagging (`npm dist-tag`) - **supported**
-   Deprecation (`npm deprecate`) - **supported**

### User management

-   Registering new users (`npm adduser {newuser}`) - **supported**
-   Change password (`npm profile set password`) - **supported**
-   Transferring ownership (`npm owner`) - **supported**
-   Token (`npm token`) - **supported**

### Miscellaneous

-   Searching (`npm search`) - **supported** (cli / browser)
-   Ping (`npm ping`) - **supported**
-   Starring (`npm star`, `npm unstar`, `npm stars`) - **supported**

### Security

-   Audit (`npm/yarn audit`) - **supported**

Report a vulnerability
----------------------

If you want to report a security vulnerability, please follow the steps which we have defined for you in our security policy.

Special Thanks
--------------

Thanks to the following companies to help us to achieve our goals providing free open source licenses. Every company provides enough resources to move this project forward.

Company

Logo

License

JetBrains

JetBrains provides licenses for products for active maintainers, renewable yearly

Crowdin

Crowdin provides platform for translations

BrowserStack

BrowserStack provides plan to run End to End testing for the UI

Netlify

Netlify provides pro plan for website deployment

Algolia

Algolia provides search services for the website

Docker

Docker offers unlimited pulls and unlimited egress to any and all users

Maintainers
-----------

Juan Picado

Ayush Sharma

Sergio Hg

@jotadeveloper

@ayusharma\_

@sergiohgz

Priscila Oliveria

Daniel Ruf

@priscilawebdev

@DanielRufde

You can find and chat with them over Discord, click here or follow them at _Twitter_.

Who is using Verdaccio?
-----------------------

-   create-react-app _(+86.2k ⭐️)_
-   Grafana _(+54.9k ⭐️)_
-   Gatsby _(+49.2k ⭐️)_
-   Babel.js _(+38.5k ⭐️)_
-   Docusaurus _(+34k ⭐️)_
-   Vue CLI _(+27.4k ⭐️)_
-   Angular CLI _(+24.3k ⭐️)_
-   Uppy _(+23.8k ⭐️)_
-   bit _(+13k ⭐️)_
-   Aurelia Framework _(+11.6k ⭐️)_
-   pnpm _(+10.1k ⭐️)_
-   ethereum/web3.js _(+9.8k ⭐️)_
-   Webiny CMS _(+6.6k ⭐️)_
-   NX _(+6.1k ⭐️)_
-   Mozilla Neutrino _(+3.7k ⭐️)_
-   workshopper how to npm _(+1k ⭐️)_
-   Amazon SDK v3
-   Amazon Encryption SDK for Javascript

🤓 Don't be shy, add yourself to this readme.

Open Collective Sponsors
------------------------

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. \[Become a sponsor\]

Open Collective Backers
-----------------------

Thank you to all our backers! 🙏 \[Become a backer\]

Contributors
------------

This project exists thanks to all the people who contribute. \[Contribute\].

### FAQ / Contact / Troubleshoot

If you have any issue you can try the following options. Do no hesitate to ask or check our issues database. Perhaps someone has asked already what you are looking for.

-   Blog
-   Donations
-   Reporting an issue
-   Running discussions
-   Chat
-   Logos
-   Docker Examples
-   FAQ

### License

Verdaccio is MIT licensed

The Verdaccio documentation and logos (excluding /thanks, e.g., .md, .png, .sketch) files within the /assets folder) is Creative Commons licensed.
