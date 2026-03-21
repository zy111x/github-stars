---
project: site-status
stars: 871
description: 📺 一个基于 UptimeRobot API 的在线状态面板 | 站点监测 | 状态检测 | An online status panel based on the UptimeRobot API | UptimeRobot, status, site
url: https://github.com/imsyy/site-status
---

English | 简体中文

site-status
===========

An online status panel based on UptimeRobot API

  
  
  

👀 Demo
-------

> Demo password: `123456`

-   IMSYY-Site Monitoring

🎉 Features
-----------

-   🌍 Multi-platform deployment support
-   ✨ Elegant and smooth browsing experience
-   🔐 Supports site password encryption (JWT + Hash)
-   👀 Overall site status preview
-   ⏲️ Data auto-refresh
-   📱 Mobile-friendly design

Prerequisites
-------------

-   You need to first add site monitors on UptimeRobot and get the `Read-Only API Key` from the `My Settings` or API Management page (Do not use the `Main API key`).
-   You can also use `Monitor-specific API keys` for individual monitors.

Deployment
----------

### Cloudflare

This project is deployed by default using Cloudflare Pages.

-   `star` and `fork` this project 😘
-   You can use the new NuxtHub to quickly deploy this project. If you have experience deploying on Vercel, the process is quite similar. Alternatively, you can use Cloudflare Pages for deployment.
-   Before moving on, make sure to configure the environment variables as detailed in the `.env.example` file. The `API_KEY` is a required field.
-   If everything goes smoothly, you should be able to see the project’s main page.

### Vercel

-   Click the button above to deploy.
    
-   Add the following environment variables (important):
    
    **Variable Name**
    
    **Value**
    
    DEPLOYMENT\_PLATFORM
    
    auto
    
    API\_KEY
    
-   All set!
    

### Other Hosting Platforms

For deployment guides, refer to the official documentation: Deploying Nuxt Apps

Q & A
-----

### How to Enable Site Encryption

Add the following environment variables: `SITE_PASSWORD` and `SITE_SECRET_KEY`. Both are required. The `SITE_PASSWORD` is the site password, and the `SITE_SECRET_KEY` is the encryption key, which you can choose freely.

Thanks
------

-   uptime-status inspired this project
