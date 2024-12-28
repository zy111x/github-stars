---
project: partyserver
stars: 412
description: PartyKit, for Workers
url: https://github.com/threepointone/partyserver
---

🎈 PartyServer
--------------

_Much like life, this is a Work in Progress._

Libraries / Examples / Documentation for building real-time apps (and more!) with Cloudflare Workers. Powered by Durable Objects, Inspired by PartyKit.

This is the main repository for PartyServer. It contains the following packages:

PartyServer - The core library for building real-time applications with Durable Objects. This library enhances a standard Durable Object to make it easier to work with WebSockets, as well as adding some additional features like lifecycle hooks and broadcasting.

Y-PartyServer - A library that adds Yjs support to PartyServer. Yjs is a CRDT library that allows for real-time collaborative editing. This library exposes a base class extending PartyServer that adds Yjs support, with utility hooks for loading/saving Yjs documents from any external storage.

🥖 partysub - A library for doing pubsub at scale with PartyServer. It lets you configure a "room" to be backed by N separate Durable Object instances, and a strategy for spreading the load across the world concentrated in configurable locations.

### Fixtures

We have a set of small examples for PartyServer in the `fixtures` directory. These are small, self-contained examples that demonstrate how to use PartyServer in different ways. We will expand this repository with broader (and deeper!) examples in the future.

Reach out to @threepointone on twitter or the Cloudflare Workers Discord to follow progress, and if you have any questions or feedback.
