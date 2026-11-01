---
project: spytify
stars: 2397
description: null
url: https://github.com/spytify/spytify
---

**Records an application's audio, splits it into tracks and tags them.**

Spytify records the sound one application plays, nothing else, and saves each track as its own file, cut at the right sample and tagged with the title, artist, album and cover the application reports. It runs on Linux and macOS 14.2 or later; a first Windows build is being tested.

**Download** · Install · Documentation · FAQ

A recorder, not a downloader
----------------------------

Spytify records what your computer already plays, like Audio Hijack or OBS. It downloads nothing, emulates no streaming protocol and circumvents no DRM.

Stream downloaders pull files through a service's own protocol; those are what services go after with legal action. Recording can break a service's terms, and what the service may do then is close your account. It is rare and has never happened to the maintainer, but use a separate free account. This is not legal advice: see Legal.

Privacy
-------

Spytify's bug tracker, Sentry, is on by default. Untick it at the first launch or in Settings > Privacy, and nothing is sent at all.

-   **Sent:** crashes, errors and recording counts, with the system, the version and the country: what it takes to fix a bug and to know where it happened.
-   **Never kept:** your computer's name, your user name, your home folder, your IP address or any MAC address. Sentry reads the country from the IP address, then drops it.
-   Your computer is known only by a code made from its machine ID, for Spytify alone.

Everything the bug tracker sends: PRIVACY.md.

Build and contribute
--------------------

Building from source, the architecture, the tests and releases: see CONTRIBUTING.md.

License
-------

MIT, see LICENSE.
