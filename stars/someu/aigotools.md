---
project: aigotools
stars: 509
description: AigoTools can help users quickly create and manage website directory, with built-in site auto-crawling features, and also provides internationalization, SEO, image storage, and other functions. It allows users to quickly deploy their own directory site online.
url: https://github.com/someu/aigotools
---

AigoTools
---------

简体中文 | 日本語  
  

AigoTools helps users quickly create and manage website directory with built-in site management and automatic inclusion features. It also offers internationalization, SEO, and multiple image storage solutions, enabling users to quickly deploy and launch their own navigation site.

Visit here: www.aigotools.com

aigotools-preview.mp4

Table of Contents
-----------------

-   Table of Contents
-   Features
-   Deployment
    -   Prerequisites
    -   Local Deployment
    -   Hosting Service Deployment
-   Development
-   Figma Resource
-   Maintainers
-   How to Contribute
-   Contact Us
-   🌟 Star History
-   License

Features
--------

-   **Site Management**
-   **Automatic Site Information Collection (playwright, jina, openai)**
-   **User Management (clerk)**
-   **Internationalization**
-   **Dark/Light Theme Toggle**
-   **SEO Optimization**
-   **Multiple Image Storage Solutions (local minio, AWS S3, Tencent Cloud COS)**

Deployment
----------

This project consists of the main navigation site (`packages/aigotools`) and the inclusion service (`packages/crawler`). It can be deployed via hosting services like Zeabur or directly on a local machine using `docker-compose`.

### Prerequisites

-   Create an application at https://clerk.com/ and add a user to log in as the admin for the management backend.
-   Obtain `OpenAI apiKey` and `jina apiKey`, which are used for site inclusion.
-   Set up MongoDB and Redis databases.

### Local Deployment

1.  Clone the repository:
    
    git clone https://github.com/someu/aigotools.git
    cd aigotools
    
2.  Configure environment variables: Copy the `.env` files in `packages/aigotools` and `packages/crawler` to `.env.prod`.
    
    cp packages/aigotools/.env packages/aigotools/.env.prod
    cp packages/crawler/.env packages/crawler/.env.prod
    
    Modify the configuration files accordingly.
    
3.  Start the project:
    
    docker-compose up -d
    

**Note: If using minio for image storage, you can initially leave the minio authentication configuration empty when starting the project. After running the project, access the minio management backend to create a Bucket, ACCESS\_KEY, and SECRET\_KEY, enable public read permissions for the Bucket, update the configuration file, and restart the project.**

### Hosting Service Deployment

Refer to the documentation: zeabur-deploy.md

Zeabur demo link: https://aigotools.zeabur.app/

Development
-----------

1.  Clone the repository:
    
    git clone https://github.com/someu/aigotools.git
    cd aigotools
    
2.  Install dependencies:
    
    pnpm i
    
3.  Configure environment variables: Copy the `.env` files in `packages/aigotools` and `packages/crawler` to `.env.local` and modify the configuration files.
    
    cp packages/aigotools/.env packages/aigotools/.env.local
    cp packages/crawler/.env packages/crawler/.env.local
    
4.  Start the project: Navigate to `packages/aigotools` and `packages/crawler` respectively.
    
    pnpm run dev
    

Figma Resource
--------------

We have also open-sourced the design drafts for this project. Feel free to use the UI and code from this project to develop your own website.

https://www.figma.com/community/file/1385200592630492334/aigotools

Maintainers
-----------

@someu.

How to Contribute
-----------------

We warmly welcome your contributions! Submit an Issue or submit a Pull Request.

Contact Us
----------

For any questions or suggestions, please contact us via:

-   GitHub Issues: Submit Issues
-   Email: someuxyz@gmail.com

🌟 Star History
---------------

License
-------

AigoTools is licensed under the Apache License 2.0. For more details, see the LICENSE file.
