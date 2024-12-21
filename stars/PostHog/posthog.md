---
project: posthog
stars: 22705
description: 🦔 PostHog provides open-source web & product analytics, session recording, feature flagging and A/B testing that you can self-host. Get started - free.
url: https://github.com/PostHog/posthog
---

Docs - Community - Roadmap - Changelog - Bug reports

PostHog is an all-in-one, open source platform for building better products
---------------------------------------------------------------------------

-   Specify events manually, or use autocapture to get started quickly
-   Analyze data with ready-made visualizations, or do it yourself with SQL
-   Track website visitors separately with our GA4 alternative
-   Only capture properties on the people you want to track, save money when you don't
-   Gather insights by capturing session replays, console logs, and network monitoring
-   Improve your product with Experiments that automatically analyze performance
-   Safely roll out features to select users or cohorts with feature flags
-   Send out fully customizable surveys to specific cohorts of users
-   Connect to external services and manage data flows with PostHog CDP

PostHog is available with hosting in the EU or US and is SOC 2 Type 2 compliant. It's free to get started and comes with a generous monthly free tier.

We're constantly adding new features, and recently launched web analytics and a data warehouse!

Table of Contents
-----------------

-   Get started for free
-   Docs
-   Contributing
-   Philosophy
-   Open-source vs paid

Get started for free
--------------------

### PostHog Cloud (Recommended)

The fastest and most reliable way to get started with PostHog is signing up for free to PostHog Cloud or PostHog Cloud EU. Your first 1 million events (and 5k replays) are free every month, after which you pay based on usage.

### Open-source hobby deploy (Advanced)

You can deploy a hobby instance in one line on Linux with Docker (recommended 4GB memory):

 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/posthog/posthog/HEAD/bin/deploy-hobby)" 

Open source deployments should scale to approximately 100k events per month, after which we recommend migrating to a PostHog Cloud instance. See our docs for more info and limitations. Please note that we do not provide customer support for open source deployments.

Docs
----

Want to find out more? Request a demo!

PostHog brings all the tools and data you need to build better products.

### Analytics and optimization tools

-   **Event-based analytics:** Capture your product's usage automatically, or customize it to your needs
-   **User and group tracking:** Understand the people and groups behind the events and track properties about them when needed
-   **Data visualizations:** Create and share graphs, funnels, paths, retention, and dashboards
-   **SQL access:** Use SQL to get a deeper understanding of your users, breakdown information and create completely tailored visualizations
-   **Session replays:** Watch videos of your users' behavior, with fine-grained filters and privacy controls, as well as network monitoring and captured console logs
-   **Heatmaps:** See where users click and get a visual representation of their behaviour with the PostHog Toolbar
-   **Feature flags:** Test and manage the rollout of new features to specific users and groups, or deploy flags as kill-switches
-   **Experiments:** run simple or complex changes as experiments and get automatic significance calculations
-   **Correlation analysis:** Discover what events and properties correlate with success and failure
-   **Surveys:** Collect qualitative feedback from your users using fully customizable surveys

### Data and infrastructure tools

-   **Import and export your data:** Import from and export to the services that matter to you with the PostHog CDP
-   **Ready-made libraries:** We’ve built libraries for JavaScript, Python, Ruby, Node, Go, Android, iOS, PHP, Flutter, React Native, Elixir, Nim, and an API for anything else
-   **Plays nicely with data warehouses:** import events or user data from your warehouse by writing a simple transformation plugin, and export data with pre-built apps - such as BigQuery, Redshift, Snowflake, and S3

Check out the full list of PostHog features.

Contributing
------------

We <3 contributions big and small:

-   Vote on features or get early access to beta functionality in our roadmap
-   Open a PR (see our instructions on developing PostHog locally)
-   Submit a feature request or bug report

Open-source vs. paid
--------------------

This repo is available under the MIT expat license, except for the `ee` directory (which has its license here) if applicable.

Need _absolutely 💯% FOSS_? Check out our posthog-foss repository, which is purged of all proprietary code and features.

To learn more, book a demo or see our pricing page.

### We’re hiring!

Come help us make PostHog even better. We're growing fast and would love for you to join us.

Contributors 🦸
---------------
