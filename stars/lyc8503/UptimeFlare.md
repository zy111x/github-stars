---
project: UptimeFlare
stars: 1942
description: ✔ Free and serverless uptime monitoring / status page on Cloudflare Workers, with Geo-specific checks
url: https://github.com/lyc8503/UptimeFlare
---

✔UptimeFlare
============

A more advanced, serverless, and free uptime monitoring & status page solution, powered by Cloudflare Workers, complete with a user-friendly interface.

⭐Features
---------

-   Open-source, easy to deploy (in under 10 minutes, no local tools required), and free
-   Monitoring capabilities
    -   Up to 50 checks at 1-minute intervals
    -   Geo-specific checks from over 310 cities worldwide
    -   Support for HTTP/HTTPS/TCP port monitoring
    -   Up to 90-day uptime history and uptime percentage tracking
    -   Customizable request methods, headers, and body for HTTP(s)
    -   Custom status code & keyword checks for HTTP(s)
    -   Downtime notification supporting 100+ notification channels
    -   Customizable Webhook
-   Status page
    -   Interactive ping (response time) chart for all types of monitors
    -   Responsive UI that adapts to your system theme
    -   Customizable status page
    -   Use your own domain with CNAME
    -   Optional password authentication (private status page)
    -   JSON API for fetching realtime status data

👀Demo
------

My status page (Online demo): https://uptimeflare.pages.dev/

Some screenshots:

⚡Quickstart / 📄Documentation
-----------------------------

Please refer to Wiki

New features (TODOs)
--------------------

-   Specify region for monitors
-   TCP `opened` promise
-   Use apprise to support various notification channels
-   Telegram example
-   Bark example
-   Email notification via Cloudflare Email Workers
-   Improve docs by providing simple examples
-   Notification grace period
-   SSL certificate checks
-   Self-host Dockerfile
-   Incident timeline
-   Improve `checkLocationWorkerRoute` and fix possible `proxy failed`
-   Groups
-   Remove old incidents
