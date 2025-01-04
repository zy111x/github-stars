---
project: keeweb
stars: 12397
description: Free cross-platform password manager compatible with KeePass
url: https://github.com/keeweb/keeweb
---

###### Password Manager

KeeWeb Password Manager🔑
=========================

  

KeeWeb is a browser and desktop password manager which is capable of opening up existing KeePass database \`kdbx\` files, or creating new vaults to store your important credentials in.

  
  

  

* * *

  

-   About
    -   Quick Links
-   Self-hosting
    -   Docker
        -   Images
        -   Docker Run
        -   Docker Compose
        -   Traefik Integration
            -   Labels
            -   Dynamic.yml
            -   Static.yml
                -   Providers
                -   certificatesResolvers
                -   entryPoints (Normal)
                -   entryPoints (Cloudflare)
        -   Authentik Integration
            -   Labels
            -   Dynamic.yml
    -   Env & Volumes
        -   Env Variables
        -   Volumes
    -   Dropbox Support
-   Build From Source
    -   Platform: Windows
        -   Using Grunt
        -   Using NPM
    -   Platform: Linux
        -   Using Grunt
        -   Using NPM
    -   Platform: MacOS
        -   Using Grunt
        -   Using NPM
-   Donations
-   Contributors ✨

  

* * *

  

About
-----

**KeeWeb** is a password manager which supports managing `kdbx` files created by other applications such as KeePass, KeePassXC, etc. You choose the platform you wish to run; as KeeWeb supports being installed and ran as either a Desktop application, or in your web-browser.

  

With support for Linux, Windows, and MacOS, we give you the tools to seamlessly manage your most important credentials across multiple applications and platforms.

  

Decide how you want to save your credential vault, KeeWeb supports saving your database as a local file, or you can store your password vault with some of the most popular cloud services such as Dropbox, Google Drive, and Microsoft OneDrive.

  

### Quick Links

Review some of our most important links below to learn more about KeeWeb and who we are:

  

Topic

Links

Description

**Apps**

Web, Desktop

Try out our application

**Demos**

Web, Beta

Test our stable and beta releases of Keeweb

**Services**

Favicon Grabber

Services integrated within Keeweb

**Branches**

docker/alpine-base, docker/keeweb

Important branches related to our project

**Timeline**

Release Notes, TODO

See what we're planning

**On one page**

Features, FAQ

Information about Keeweb development

**Website**

keeweb.info

Visit our official website

**Social**

kee\_web

Check us out on our social media

**Donate**

OpenCollective, GitHub

Help keep us going

  

* * *

  

Self-hosting
------------

Want to self-host your copy of KeeWeb? Everything you need to host this app on your server is provided within the package. KeeWeb itself is a single HTML file combined with a service worker (optionally; for offline access).

You can download the latest distribution files from **gh-pages** branch.

  

### Docker

If you wish to host Keeweb within a Docker container, we provide pre-built images that you can pull into your environment. This section explains how to run Keeweb using `docker run`, or by setting up a `docker-compose.yml` file.

  

Note

For a full set of Docker instructions, visit our **docker/keeweb readme**

  

#### Images

Use any of the following images in your `📄 docker-compose.yml` or `run` command:

  

Service

Version

Image Link

`Docker Hub`

`🔖 keeweb/keeweb:latest`  
`🔖 keeweb/keeweb:1.19.0`  
`🔖 keeweb/keeweb:1.19.0-amd64`  
`🔖 keeweb/keeweb:1.19.0-arm64`  
`🔖 keeweb/keeweb:development`  
`🔖 keeweb/keeweb:development-amd64`  
`🔖 keeweb/keeweb:development-arm64`

`Github`

`🔖 ghcr.io/keeweb/keeweb:latest`  
`🔖 ghcr.io/keeweb/keeweb:1.19.0`  
`🔖 ghcr.io/keeweb/keeweb:1.19.0-amd64`  
`🔖 ghcr.io/keeweb/keeweb:1.19.0-arm64`  
`🔖 ghcr.io/keeweb/keeweb:development`  
`🔖 ghcr.io/keeweb/keeweb:development-amd64`  
`🔖 ghcr.io/keeweb/keeweb:development-arm64`

  

#### Docker Run

If you wish to use `docker run`; use the following command:

docker run -d --restart=unless-stopped -p 443:443 --name keeweb -v ${PWD}/keeweb:/config ghcr.io/keeweb/keeweb:latest

  

#### Docker Compose

For users wishing to use `docker compose`, create a new `docker-compose.yml` with the following:

services:
    keeweb:
        container\_name: keeweb
        image: ghcr.io/keeweb/keeweb:latest       # Github image
      # image: keeweb/keeweb:latest               # Dockerhub image
        restart: unless-stopped
        volumes:
            - ./keeweb:/config
        environment:
            - PUID=1000
            - PGID=1000
            - TZ=Etc/UTC

  
  

#### Traefik Integration

You can put this container behind Traefik if you want to use a reverse proxy and let Traefik handle the SSL certificate management.

  

Note

These steps are **optional**.

If you do not use Traefik, you can skip this section of steps. This is only for users who wish to put this container behind Traefik.

If you do not wish to use Traefik, remember that if you make your Keeweb container public facing, you will need to utilize a service such as **certbot/lets encrypt** to generate SSL certificates.

  

Our first step is to tell Traefik about our Keeweb container. We highly recommend you utilize a Traefik **dynamic file**, instead of **labels**. Using a dynamic file allows for automatic refreshing without the need to restart Traefik when a change is made.

If you decide to use **labels** instead of a **dynamic file**, any changes you want to make to your labels will require a restart of Traefik.

  

We will be setting up the following:

-   A `middleware` to re-direct http to https
-   A `route` to access Keeweb via http (optional)
-   A `route` to access Keeweb via https (secure)
-   A `service` to tell Traefik how to access your Keeweb container
-   A `resolver` so that Traefik can generate and apply a wildcard SSL certificate

  

##### Labels

To add Keeweb to Traefik, you will need to open your `docker-compose.yml` and apply the following labels to your Keeweb container. Ensure you change `domain.lan` to your actual domain name.

services:
    keeweb:
        container\_name: keeweb
        image: ghcr.io/keeweb/keeweb:latest       # Github image
      # image: keeweb/keeweb:latest               # Dockerhub image
        restart: unless-stopped
        volumes:
            - ./keeweb:/config
        environment:
            - PUID=1000
            - PGID=1000
            - TZ=Etc/UTC
        labels:

          #   General
          - traefik.enable=true

          #   Router > http
          - traefik.http.routers.keeweb-http.rule=Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
          - traefik.http.routers.keeweb-http.service=keeweb
          - traefik.http.routers.keeweb-http.entrypoints=http
          - traefik.http.routers.keeweb-http.middlewares=https-redirect@file

          #   Router > https
          - traefik.http.routers.keeweb-https.rule=Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
          - traefik.http.routers.keeweb-https.service=keeweb
          - traefik.http.routers.keeweb-https.entrypoints=https
          - traefik.http.routers.keeweb-https.tls=true
          - traefik.http.routers.keeweb-https.tls.certresolver=cloudflare
          - traefik.http.routers.keeweb-https.tls.domains\[0\].main=domain.lan
          - traefik.http.routers.keeweb-https.tls.domains\[0\].sans=\*.domain.lan

          #   Load Balancer
          - traefik.http.services.keeweb.loadbalancer.server.port=443
          - traefik.http.services.keeweb.loadbalancer.server.scheme=https

  

After you've added the labels above, skip the dynamic.yml section and go straight to the **static.yml** section.

  
  

##### Dynamic.yml

If you decide to not use **labels** and want to use a dynamic file, you will first need to create your dynamic file. the Traefik dynamic file is usually named `dynamic.yml`. We need to add a new `middleware`, `router`, and `service` to our Traefik dynamic file so that it knows about our new Keeweb container and where it is.

http:
    middlewares:
        https-redirect:
            redirectScheme:
                scheme: "https"
                permanent: true

    routers:
        keeweb-http:
            service: keeweb
            rule: Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
            entryPoints:
                - http
            middlewares:
                - https-redirect@file

        keeweb-https:
            service: keeweb
            rule: Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
            entryPoints:
                - https
            tls:
                certResolver: cloudflare
                domains:
                    - main: "domain.lan"
                      sans:
                          - "\*.domain.lan"

    services:
        keeweb:
            loadBalancer:
                servers:
                    - url: "https://keeweb:443"

  

##### Static.yml

These entries will go in your Traefik `static.yml` file. Any changes made to this file requires that you restart Traefik afterward.

  

###### Providers

Note

This step is only for users who opted to use the **dynamic file** method.

Users who opted to use labels can skip to the section **certificatesResolvers**

  

Ensure you add the following new section to your `static.yml`:

  

providers:
    docker:
        endpoint: "unix:///var/run/docker.sock"
        exposedByDefault: false
        network: traefik
        watch: true
    file:
        filename: "/etc/traefik/dynamic.yml"
        watch: true

  

The code above is what enables the use of a **dynamic file** instead of labels. Change `/etc/traefik/dynamic.yml` if you are placing your dynamic file in a different location. This path is relative to inside the container, not your host machine mounted volume path. Traefik keeps most files in the `/etc/traefik/` folder.

  

After you add the above, open your Traefik's `docker-compose.yml` file and mount a new volume so that Traefik knows where your new dynamic file is:

    traefik:
        container\_name: traefik
        image: traefik:latest
        restart: unless-stopped
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock:ro
            - /etc/localtime:/etc/localtime:ro
            - ./config/traefik.yml:/etc/traefik/traefik.yml:ro
            - ./config/dynamic.yml:/etc/traefik/dynamic.yml:ro

  

You must ensure you add a new volume like shown above:

-   `/config/dynamic.yml:/etc/traefik/dynamic.yml:ro`

  

On your host machine, make sure you place the `dynamic.yml` file in a sub-folder called **config**, which should be inside the same folder where your Traefik's `docker-compose.yml` file is. If you want to change this location, ensure you change the mounted volume path above.

  

After you have completed this, proceed to the section **certificatesResolvers**.

  

###### certificatesResolvers

Note

This step is required no matter which option you picked above, both for **dynamic file** setups, as well as people using **labels**.

  

Open your Traefik `static.yml` file. We need to define the `certResolver` that we added above either in your dynamic file, or label. To define the `certResolver`, we will be adding a new section labeled `certificatesResolvers`. We are going to use Cloudflare in this example, you can use whatever from the list at:

-   https://doc.traefik.io/traefik/https/acme/#providers

  

certificatesResolvers:
    cloudflare:
        acme:
            email: youremail@address.com
            storage: /cloudflare/acme.json
            keyType: EC256
            preferredChain: 'ISRG Root X1'
            dnsChallenge:
                provider: cloudflare
                delayBeforeCheck: 15
                resolvers:
                    - "1.1.1.1:53"
                    - "1.0.0.1:53"
                disablePropagationCheck: true

  

Once you pick the DNS / SSL provider you want to use from the code above, you need to see if that provider has any special environment variables that must be set. The **Providers Page** lists all providers and also what env variables need set for each one.

  

In our example, since we are using **Cloudflare** for `dnsChallenge` -> `provider`, we must set the following environment variables:

-   `CF_API_EMAIL`
-   `CF_API_KEY`

  

Create a `.env` environment file in the same folder where your Traefik `docker-compose.yml` file is located, and add the following:

CF\_API\_EMAIL=yourcloudflare@email.com
CF\_API\_KEY=Your-Cloudflare-API-Key

  

Save the `.env` file and exit. For these environment variables to be detected by Traefik, you must give your Traefik container a restart. Until you restart Traefik, it will not be able to generate your new SSL certificates.

You can wait and restart in a moment after you finish editing the `static.yml` file, as there are more items to add below.

  

###### entryPoints (Normal)

Finally, inside the Traefik `static.yml`, we need to make sure we have our `entryPoints` configured. Add the following to the Traefik `static.yml` file only if you **DON'T** have entry points set yet:

entryPoints:
    http:
        address: :80
        http:
            redirections:
                entryPoint:
                    to: https
                    scheme: https

    https:
        address: :443
        http3: {}
        http:
            tls:
                options: default
                certResolver: cloudflare
                domains:
                    - main: domain.lan
                      sans:
                          - '\*.domain.lan'

  

###### entryPoints (Cloudflare)

If your website is behind Cloudflare's proxy service, you need to modify your `entryPoints` above so that you can automatically allow Cloudflare's IP addresses through. This means your entry points will look a bit different.

  

In the example below, we will add `forwardedHeaders` -> `trustedIPs` and add all of Cloudflare's IPs to the list which are available here:

-   https://cloudflare.com/ips/

    http:
        address: :80
        forwardedHeaders:
            trustedIPs: &trustedIps
                - 103.21.244.0/22
                - 103.22.200.0/22
                - 103.31.4.0/22
                - 104.16.0.0/13
                - 104.24.0.0/14
                - 108.162.192.0/18
                - 131.0.72.0/22
                - 141.101.64.0/18
                - 162.158.0.0/15
                - 172.64.0.0/13
                - 173.245.48.0/20
                - 188.114.96.0/20
                - 190.93.240.0/20
                - 197.234.240.0/22
                - 198.41.128.0/17
                - 2400:cb00::/32
                - 2606:4700::/32
                - 2803:f800::/32
                - 2405:b500::/32
                - 2405:8100::/32
                - 2a06:98c0::/29
                - 2c0f:f248::/32
        http:
            redirections:
                entryPoint:
                    to: https
                    scheme: https

    https:
        address: :443
        http3: {}
        forwardedHeaders:
            trustedIPs: \*trustedIps
        http:
            tls:
                options: default
                certResolver: cloudflare
                domains:
                    - main: domain.lan
                      sans:
                          - '\*.domain.lan'

  

Save the files and then give Traefik and your Keeweb containers a restart.

  
  

#### Authentik Integration

This section will not explain how to install and set up Authentik. We are only going to cover adding Keeweb integration to Authentik.

  

Sign into the Authentik admin panel, go to the left-side navigation, select **Applications** -> **Providers**. Then at the top of the new page, click **Create**.

  

  

For the **provider**, select `Proxy Provider`.

  

  

Add the following provider values:

-   **Name**: `Keeweb ForwardAuth`
-   **Authentication Flow**: `default-source-authentication (Welcome to authentik!)`
-   **Authorization Flow**: `default-provider-authorization-implicit-consent (Authorize Application)`

  

Select **Forward Auth (single application)**:

-   **External Host**: `https://keeweb.domain.lan`

  

  

Once finished, click **Create**. Then on the left-side menu, select **Applications** -> **Applications**. Then at the top of the new page, click **Create**.

  

  

Add the following parameters:

-   **Name**: `Keeweb (Password Manager)`
-   **Slug**: `keeweb`
-   **Group**: `Security`
-   **Provider**: `Keeweb ForwardAuth`
-   **Backchannel Providers**: `None`
-   **Policy Engine Mode**: `any`

  

  

Save, and then on the left-side menu, select **Applications** -> **Outposts**:

  

  

Find your **Outpost** and edit it.

  

Move `Keeweb (Password Manager)` to the right side **Selected Applications** box.

  

  

If you followed our Traefik guide above, you were shown how to add your Keeweb container to Traefik using either the **dynamic file** or **labels**. Depending on which option you picked, follow that section's guide below.

-   For **label** users, go to the section Labels below.
-   For **dynamic file** users, go to the section Dynamic File below.

  

##### Labels

Open your Keeweb's `docker-compose.yml` and modify your labels to include Authentik as a **middleware** by adding `authentik@file` to the label `traefik.http.routers.keeweb-https.middlewares`. You should have something similar to the example below:

services:
    keeweb:
        container\_name: keeweb
        image: ghcr.io/keeweb/keeweb:latest       # Github image
      # image: keeweb/keeweb:latest               # Dockerhub image
        restart: unless-stopped
        volumes:
            - ./keeweb:/config
        environment:
            - PUID=1000
            - PGID=1000
            - TZ=Etc/UTC
        labels:

          #   General
          - traefik.enable=true

          #   Router > http
          - traefik.http.routers.keeweb-http.rule=Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
          - traefik.http.routers.keeweb-http.service=keeweb
          - traefik.http.routers.keeweb-http.entrypoints=http
          - traefik.http.routers.keeweb-http.middlewares=https-redirect@file

          #   Router > https
          - traefik.http.routers.keeweb-https.rule=Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
          - traefik.http.routers.keeweb-https.service=keeweb
          - traefik.http.routers.keeweb-https.entrypoints=https
          - traefik.http.routers.keeweb-https.middlewares=authentik@file
          - traefik.http.routers.keeweb-https.tls=true
          - traefik.http.routers.keeweb-https.tls.certresolver=cloudflare
          - traefik.http.routers.keeweb-https.tls.domains\[0\].main=domain.lan
          - traefik.http.routers.keeweb-https.tls.domains\[0\].sans=\*.domain.lan

          #   Load Balancer
          - traefik.http.services.keeweb.loadbalancer.server.port=443
          - traefik.http.services.keeweb.loadbalancer.server.scheme=https

  

##### Dynamic.yml

If you opted to use the dynamic file, open your Traefik's `dynamic.yml` file and apply the `authentik@file` middleware to look something like the following:

  

        keeweb-https:
            service: keeweb
            rule: Host(\`keeweb.localhost\`) || Host(\`keeweb.domain.lan\`)
            entryPoints:
                - https
            middlewares:
                - authentik@file
            tls:
                certResolver: cloudflare
                domains:
                    - main: "domain.lan"
                      sans:
                          - "\*.domain.lan"

  

After you've done everything above, give your **Traefik** and **Authentik** containers a restart. Once they come back up; you should be able to access `keeweb.domain.lan` and be prompted now to authenticate with Authentik. Once you authenticate, you should be re-directed to your Keeweb home screen which asks you to load a vault file.

  

* * *

  

### Env & Volumes

This section outlines that environment variables can be specified, and which volumes you can mount when the container is started.

  

#### Env Variables

The following env variables can be modified before spinning up this container:

  

Env Var

Default

Description

`PUID`

1000

User ID running the container

`PGID`

1000

Group ID running the container

`TZ`

Etc/UTC

Timezone

`PORT_HTTP`

80

Defines the HTTP port to run on

`PORT_HTTPS`

443

Defines the HTTPS port to run on

  

#### Volumes

The following volumes can be mounted with this container:

  

Volume

Description

`./keeweb:/config`

Path which stores Keeweb, nginx configs, and optional SSL certificate/keys

  

By mounting the volume above, you should now have access to the following folders:  

Folder

Description

`📁 keys`

Responsible for storing your ssl certificate `cert.crt` + key `cert.key`

`📁 log`

All nginx / container logs

`📁 nginx`

Contains `nginx.conf`, `resolver.conf`, `ssl.conf`, `site-confs`

`📁 www`

Folder which stores the Keeweb files, images, and plugins

  

### Dropbox Support

To configure Dropbox support on your self-hosted setup view our Wiki page.

  

* * *

  

Build From Source
-----------------

Note

Keeweb v1.19.0+ requires a minimum of Node v20.9.0 LTS in order to build. If you require multiple versions of node, you can install `nvm`

# install nvm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# install node 20
nvm install 20

# switch to node 20
nvm use 20

  

The easiest way to clone all KeeWeb repos is:

curl https://raw.githubusercontent.com/keeweb/keeweb/develop/dev-env.sh | bash -

  

KeeWeb can be built utilizing the **grunt commandline**. Each platform has multiple commands you can use; pick one:

  

### Platform: Windows

You may build KeeWeb for `Windows` by executing ONE of the following two commands provided:

  

#### Using Grunt

grunt dev-desktop-win32 --skip-sign

  

#### Using NPM

npm run dev-desktop-windows

  

### Platform: Linux

You may build KeeWeb for `Linux` by executing ONE of the following two commands provided:

  

#### Using Grunt

grunt dev-desktop-linux --skip-sign

  

#### Using NPM

npm run dev-desktop-linux

  
  

### Platform: MacOS

You may build KeeWeb for `MacOS` by executing ONE of the following two commands provided:

#### Using Grunt

grunt dev-desktop-darwin --skip-sign

#### Using NPM

npm run dev-desktop-macos

  

Once the build is complete, all (html files will be in `dist/` folder. To build KeeWeb, utilize the following commands below.

  

To run the desktop (electron) app without building an installer, build the app with `grunt` and then launch KeeWeb with one of the following commands:

  

npm run dev
npm run electron

  

To debug your build:

1.  run `npm run dev`
2.  open `http://localhost:8085`

  

Once built, the output files will be generated in `tmp`:

  

* * *

  

Donations
---------

KeeWeb is not free to develop. It takes time, requires paid code signing certificates and domains.  
You can help the project or say "thank you" with this button:  

  

You can also sponsor the developer directly on GitHub.

  

Please note: donation does not imply any type of service contract.

  

* * *

  

Contributors ✨
--------------

We are always looking for contributors. If you feel that you can provide something useful to Keeweb or our other projects, then we'd love to review your suggestion. Before submitting your contribution, please review the following resources:

-   Pull Request Procedure
-   Contributor Policy

  

Want to help but can't write code?

-   Review active questions by our community and answer the ones you know.

  

Want to help but can't write code?

-   Review active questions by our community and answer the ones you know.
-   Help translating KeeWeb

  

  
**Antelle**  
💻 📆 🔍

  
**Aetherinox**  
💻 📆 🔍

  
**HarlemSquirrel**  
💻 📆

  
  

* * *
