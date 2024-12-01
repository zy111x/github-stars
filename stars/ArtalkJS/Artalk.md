---
project: Artalk
stars: 1689
description: 🌌  Your Self-hosted Comment System. | 自托管评论系统
---

Artalk
======

Homepage • Documentation • Latest Release • Changelog • 简体中文

Artalk is an intuitive yet feature-rich comment system, ready for immediate deployment into any blog, website, or web application.

-   🍃 Client ~40KB, crafted with pure Vanilla JS, framework-agnostic
-   🍱 Server powered by Golang, offering efficient and lightweight cross-platform performance
-   🐳 One-click deployment via Docker, ensuring ease and speed
-   🌈 Open-source software, self-hosted with privacy as a priority

Features
--------

-   Sidebar: Quick management, intuitive browsing
-   Social Login: Fast login via social accounts
-   Email Notification: Various sending methods, email templates
-   Diverse Push: Multiple push methods, notification templates
-   Site Notification: Red dot marks, mention list
-   Captcha: Various verification types, frequency limits
-   Comment Moderation: Content detection, spam interception
-   Image Upload: Custom upload, supports image hosting
-   Markdown: Supports Markdown syntax
-   Emoji Pack: Compatible with OwO, quick integration
-   Multi-Site: Site isolation, centralized management
-   Admin: Password verification, badge identification
-   Page Management: Quick view, one-click title navigation
-   Page View Statistics: Easily track page views
-   Hierarchical Structure: Nested paginated list, infinite scroll
-   Comment Voting: Upvote or downvote comments
-   Comment Sorting: Various sorting options, freely selectable
-   Comment Search: Quick comment content search
-   Comment Pinning: Pin important messages
-   View Author Only: Show only the author's comments
-   Comment Jump: Quickly jump to quoted comment
-   Auto Save: Content loss prevention
-   IP Region: Display user's IP region
-   Data Migration: Free migration, quick backup
-   Image Lightbox: Quick integration of image lightbox
-   Image Lazy Load: Lazy load images, optimize experience
-   Latex: Integrate Latex formula parsing
-   Night Mode: Switch to night mode
-   Extension Plugin: Create more possibilities
-   Multi-Language: Switch between multiple languages
-   Command Line: Command line operation management
-   API Documentation: Provides OpenAPI format documentation
-   Program Upgrade: Version check, one-click upgrade

Installation
------------

Deploy Artalk Server with Docker in one step:

docker run -d \\
    --name artalk \\
    -p 8080:23366 \\
    -v $(pwd)/data:/data \\
    -e "TZ=America/New\_York" \\
    -e "ATK\_LOCALE=en" \\
    -e "ATK\_SITE\_DEFAULT=Artalk Blog" \\
    -e "ATK\_SITE\_URL=https://example.com" \\
    artalk/artalk-go

Integrate Artalk Client into your webpage:

Artalk.init({
  el:      '#Comments',
  site:    'Artalk Blog',
  server:  'https://artalk.example.com',
  pageKey: '/2018/10/02/hello-world.html'
})

We offer various installation methods, including binary files, go install, and package managers for Linux distributions.

**Learn More →**

For Developers
--------------

Pull requests are welcome!

See Development and Contributing for information on working with the codebase, getting a local development setup, and contributing changes.

Contributors
------------

Your contributions enrich the open-source community, fostering learning, inspiration, and innovation. We deeply value your involvement. Thank you for being a vital part of our community! 🥰

Supporters
----------

Repobeats Analytics
-------------------

Stargazers over time
--------------------

License
-------

MIT
