---
project: upptime
stars: 15749
description: ⬆️ GitHub Actions uptime monitor & status page by @AnandChowdhary
url: https://github.com/upptime/upptime
---

**Upptime** (https://upptime.js.org) is the open-source uptime monitor and status page, powered entirely by GitHub Actions, Issues, and Pages. It's made with 💚 by Anand Chowdhary, supported by Pabio.

> I find Upptime an incredible clever usage of \[GitHub Actions\]. You essentially get a free configurable uptime monitor for whatever you want. – CSS Tricks

Upptime is used by **1,000+** people and teams to ensure they know when their endpoints go down.

📈 Live Status: **🟧 Partial outage**
-------------------------------------

URL

Status

History

Response Time

Uptime

Google

🟩 Up

google.yml

107ms  
  
  
  
  

100.00%  
  
  
  

Wikipedia

🟩 Up

wikipedia.yml

184ms  
  
  
  
  

100.00%  
  
  
  

Hacker News

🟩 Up

hacker-news.yml

269ms  
  
  
  
  

100.00%  
  
  
  

Test Broken Site

🟥 Down

test-broken-site.yml

0ms  
  
  
  
  

0.00%  
  
  
  

IPv6 test

🟥 Down

i-pv6-test.yml

0ms  
  
  
  
  

0.00%  
  
  
  

⭐ How it works
--------------

-   GitHub Actions is used as an uptime monitor
    -   Every 5 minutes, a workflow visits your website to make sure it's up
    -   Response time is recorded every 6 hours and committed to git
    -   Graphs of response time are generated every day
-   GitHub Issues is used for incident reports
    -   An issue is opened if an endpoint is down
    -   People from your team are assigned to the issue
    -   Incidents reports are posted as issue comments
    -   Issues are locked so non-members cannot comment on them
    -   Issues are closed automatically when your site comes back up
    -   Slack notifications are sent on updates
-   GitHub Pages is used for the status website
    -   A simple, beautiful, and accessible PWA is generated
    -   Built with Svelte and Sapper
    -   Fetches data from this repository using the GitHub API

_Upptime is not affiliated to or endorsed by GitHub._

👩‍💻 Documentation
-------------------

1.  How it works
2.  Getting started
3.  Configuration
4.  Triggers
5.  Notifications
6.  Badges
7.  Packages
8.  Contributing
9.  Frequently Asked Questions

### Concepts

#### Issues as incidents

When the GitHub Actions workflow detects that one of your URLs is down, it automatically opens a GitHub issue (example issue #67). You can add incident reports to this issue by adding comments. When your site comes back up, the issue will be closed automatically as well.

#### Commits for response time

Four times per day, another workflow runs and records the response time of your websites. This data is committed to GitHub, so it's available in the commit history of each file (example commit history). Then, the GitHub API is used to graph the response time history of each endpoint and to track when a site went down.

📄 License
----------

-   Code: MIT © Anand Chowdhary, supported by Pabio
-   Data in the `./history` directory: Open Database License
