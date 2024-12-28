---
project: flood
stars: 1816
description: A web UI for rTorrent, qBittorrent and Transmission with a Node.js backend and React frontend. Migrate to v4: https://github.com/jesec/flood/wiki/Migrate-from-older-versions-of-Flood. 
url: https://github.com/Flood-UI/flood
---

Flood ⚠️ _DEPRECATED_ ⚠️ Go here
================================

Development has ceased in this repository, visit https://github.com/jesec/flood instead

Flood is a monitoring service for rTorrent. It's a Node.js service that communicates with rTorrent instances and serves a decent web UI for administration. It's a work-in-progress.

#### Feedback

If you have a specific issue or bug, please file a Github issue. Please join the Flood Discord server to discuss feature requests and implementation details.

Getting started
===============

### Pre-Requisites

1.  rTorrent needs to be installed and running **with XMLRPC** configuration.
    -   For Linux & OS X, check out rTorrent's installation wiki and/or this third-party tutorial. When you run `./configure`, be sure to run with the `--with-xmlrpc-c` flag.
    -   For Windows, try this guide.
2.  Install NodeJS version `8` or higher (you might want to manage different Node versions with nodenv or nvm or n).
3.  Install `node-gyp` pre-requisites, see https://www.npmjs.com/package/node-gyp#installation, ex: `python2`, `make`, `gcc`.

### Configuration

Copy `config.template.js` to `config.js` and review its comments. **This is required.**

When loading the web interface, you will be prompted to configure the connection to rtorrent. Other configuration options are handled `config.js`.

**What to configure**

1.  Be sure to create a long and unique secret (used to sign JWT auth tokens).
2.  If you are proxying requests to Flood from your own web server, configure Flood's path from the host at the `baseURI` property. All requests will be prefixed with this value.
    -   For example, if serving Flood from `https://foo.bar/apps/flood`, you would set `baseURI` to `/apps/flood`. If serving flood from `https://foo.bar`, you do not need to configure `baseURI`.
    -   Read more about proxying requests to Flood on the Wiki, this is a common pain-point for users.

**Note**: Some of these values are baked into the static assets (like `baseURI`), so changes to this file require recompling static assets.

### Compiling assets and starting the server

From the root of the Flood directory...

1.  Run `npm install` if you haven't already or if you've pulled changes.
2.  Run `npm run build`.
3.  Run `npm start`.

Access the UI in your browser. With default settings, go to `http://localhost:3000`. You can configure the port in `config.js`.

### Updating

I've been bad about cutting actual releases, so check this repo for recent commits.

1.  To update, run `git pull` in this repository's directory.
2.  Check `config.template.js` for configuration changes that you may wish to incoporate in your `config.js`.
3.  Kill the currently running Flood server.
4.  Run `npm install` to update dependencies.
5.  Run `npm run build` to transpile and bundle static assets.
6.  Start the Flood server with `npm start`.

### Troubleshooting

-   Ubuntu users may need to install `nodejs-legacy` (`sudo apt-get install nodejs-legacy`) for dependencies to install successfully. You can read more on this Stack Overflow post.
-   Ask for help in the Flood Discord server.

### Local Development

1.  Run `npm install`.
2.  Run `npm run start:development:server` and `npm run start:development:client` in separate terminal instances.
    -   `npm run start:development:server` uses nodemon to watch for changes to the server-side JavaScript.
    -   `npm run start:development:client` watches for changes in the client-side source.
3.  Access the UI in your browser. Defaults to `localhost:4200`.

### Environment Variables

1.  `DEV_SERVER_PORT`: webpackDevServer's port, used when developing Flood. Defaults to `4200`.
2.  `DEV_SERVER_HOST`: webpackDevServer's host, used when developing Flood. Defaults to `0.0.0.0`.
3.  `DEV_SERVER_HTTPS`: webpackDevServer's protocol, used when developing Flood. Defaults to `http`.

### Running with Docker

1.  `docker build -t rtorrent-flood .`
2.  `docker run --name rtorrent-flood -e RTORRENT_SCGI_HOST=w.x.y.z -p 3000:3000 rtorrent-flood`
3.  Other supported environment variables:
    -   `FLOOD_BASE_URI`
    -   `FLOOD_SECRET`
    -   `FLOOD_ENABLE_SSL`

The docker container includes a volume at `/data`, which is where the database will be located. Additionally, you can place your SSL files there, `/data/flood_ssl.key` and `/data/flood_ssl.cert`. Set `FLOOD_ENABLE_SSL` to `true` to enable their use if present. Additionally, a local rtorrent socket file located at `/data/rtorrent.sock` can be used if `RTORRENT_SOCK` is set to `true`. The location of the socket file can be overrided by setting `RTORRENT_SOCK_PATH` to the path of the socket.

Check out the Wiki for more information.