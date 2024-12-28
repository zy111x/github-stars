---
project: cacheable
stars: 1671
description: a robust, scalable, and maintained set of caching packages
url: https://github.com/jaredwray/cacheable
---

> Caching for Nodejs based on Keyv

With over `1bn downloads` a year the goal with the `Cacheable Project` is to provide a robust, scalable, and maintained set of caching packages that can be used in various projects. The packages in this repository are:

Package

Downloads

Description

cacheable

Next generation caching framework built from the ground up with layer 1 / layer 2 caching.

cache-manager

Cache Manager that is used in services such as NestJS and others with robust features such as `wrap` and more.

cacheable-request

Wrap native HTTP requests with RFC compliant cache support

flat-cache

Fast In-Memory Caching with file store persistence

file-entry-cache

A lightweight cache for file metadata, ideal for processes that work on a specific set of files and only need to reprocess files that have changed since the last run

@cacheable/node-cache

Maintained built in replacement of `node-cache`

The website documentation for https://cacheable.org is included in this repository here.

How to Use the Cacheable Mono Repo
==================================

-   CODE\_OF\_CONDUCT - Our code of conduct
-   CONTRIBUTING - How to contribute to this project
-   SECURITY - Security guidelines and supported versions

Open a Pull Request
-------------------

Please follow the CONTRIBUTING guidelines provided and remember you will need to do setup on this project such as having redis running (via docker), building the project `pnpm build`, and testing `pnpm test` which will also perform linting.

Post an Issue
-------------

To post an issue, navigate to the "Issues" tab in the main repository, and then select "New Issue." Enter a clear title describing the issue, as well as a description containing additional relevant information. Also select the label that best describes your issue type. For a bug report, for example, create an issue with the label "bug." In the description field, Be sure to include replication steps, as well as any relevant error messages.

If you're reporting a security violation, be sure to check out the project's security policy.

Please also refer to our Code of Conduct for more information on how to report issues.

Ask a Question
--------------

To ask a question, create an issue with the label "question." In the issue description, include the related code and any context that can help us answer your question.

License
-------

MIT © Jared Wray
