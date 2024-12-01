---
project: keeweb
stars: 12357
description: Free cross-platform password manager compatible with KeePass
url: https://github.com/keeweb/keeweb
---

Free cross-platform password manager compatible with KeePass
============================================================

This webapp is a browser and desktop password manager compatible with KeePass databases. It doesn't require any server or additional resources. The app can run either in browser, or as a desktop app.

Quick Links
-----------

Apps: Web, Desktop  
Timeline: Release Notes, TODO  
On one page: Features, FAQ  
Website: keeweb.info  
Twitter: kee\_web  
Donate: OpenCollective, GitHub

Status
------

The app is quite stable now. Basic stuff, as well as more advanced operations, should be rather reliable.  
Looking for a new maintainer, see #2022

Self-hosting
------------

Everything you need to host this app on your server is any static file server. The app is a single HTML file + a service worker (optionally; for offline access). You can download the latest distribution files from gh-pages branch.

If you are using Docker:

1.  put your dh.pem, cert.pem, key.pem to /etc/nginx/external/
2.  run this script:

docker run --name keeweb -d -p 443:443 -p 80:80 -v $EXT\_DIR:/etc/nginx/external/ antelle/keeweb

To make Dropbox work in your self-hosted app, go to this Wiki page.

Building
--------

The easiest way to clone all KeeWeb repos is:

curl https://raw.githubusercontent.com/keeweb/keeweb/develop/dev-env.sh | bash -

The app can be built with grunt: `grunt` (html files will be in `dist/`).  
Desktop apps are built with `grunt desktop`. This requires some magic and currently works only on CI, you can find more details in the GitHub Actions workflow.

To run the desktop (electron) app without building an installer, build the app with `grunt` and start it this way:

npm run dev
npm run electron

For debug build:

1.  run `npm run dev`
2.  open `http://localhost:8085`

To build desktop apps, use these goals, the result can be found in `tmp`:

```
npm run dev-desktop-macos
npm run dev-desktop-windows
npm run dev-desktop-linux
```

Contributing
------------

Please read contribution guidelines for pull requests.  
Here's a list of issues where your help would be very welcome. Also you can help by translating KeeWeb to your language.

Other ways of contribution can be found on this page.

#### Important notes for pull requests

-   please branch from `develop`, not `master`
-   don't edit translation files except base.json, they will be replaced

Donations
---------

KeeWeb is not free to develop. It takes time, requires paid code signing certificates and domains.  
You can help the project or say "thank you" with this button:  

You can also sponsor the developer directly on GitHub.

Please note: donation does not imply any type of service contract.

Thank you
---------

Notable contributions to KeeWeb:

-   Florian Reuschel (@Loilo): German translation
-   Dennis Ploeger (@dploeger): auto-type improvements
-   Hackmanit (hackmanit.de): penetration test
-   Peter Bittner (@bittner): Wikipedia article

License
-------

MIT
