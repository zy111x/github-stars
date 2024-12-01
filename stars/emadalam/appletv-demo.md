---
project: appletv-demo
stars: 15
description: A demo application for AppleTV using atvjs with presentation
---

appletv-demo
============

A demo application for AppleTV using atvjs.

### Getting Started

Assuming that you have nodejs and npm installed on your machine, do the following to get started:

$ npm install -g gulp                   # Install Gulp globally
$ npm install                           # Install dependencies

### Accessing Presentation

$ npm run presentation 8080             # Specify optional port if needed

### Development

Builds the application and starts a webserver. By default the webserver starts at port 9001.

$ npm start

By default, it builds in debug mode and starts the server with live reload.

-   If you need to build otherwise, use `gulp` with additional flags.
-   If you need to build in release mode, add `--t production` flag.
-   You can define a port with `--p 8080` flag. (If you start the server on a different port, make sure to update the same in the native application)

### Structure

The project is split into two parts:

-   native: this directory contains the Xcode project and related files. The AppDelegate.swift file handles the setup of the TVMLKit framework and launching the JavaScript context to manage the application.
-   web: this directory contains the JavaScript and TVML template files needed to render the application. The contents of this directory must be hosted on a server accessible from the device.

### License

MIT License.
