---
project: shoutrrr
stars: 1052
description: Notification library for gophers and their furry friends.
url: https://github.com/containrrr/shoutrrr
---

Shoutrrr
========

Notification library for gophers and their furry friends. Heavily inspired by caronc/apprise.

  
  

Installation
------------

### Using the snap

$ sudo snap install shoutrrr

### Using the Go CLI

$ go install github.com/containrrr/shoutrrr/shoutrrr@latest

### From Source

$ go build -o shoutrrr ./shoutrrr

Quick Start
-----------

### As a package

Using shoutrrr is easy! There is currently two ways of using it as a package.

#### Using the direct send command

  url := "slack://token-a/token-b/token-c"
  err := shoutrrr.Send(url, "Hello world (or slack channel) !")

#### Using a sender

  url := "slack://token-a/token-b/token-c"
  sender, err := shoutrrr.CreateSender(url)
  sender.Send("Hello world (or slack channel) !", map\[string\]string { /\* ... \*/ })

#### Using a sender with multiple URLs

  urls := \[\]string {
    "slack://token-a/token-b/token-c"
    "discord://token@channel"
  }
  sender, err := shoutrrr.CreateSender(urls...)
  sender.Send("Hello world (or slack channel) !", map\[string\]string { /\* ... \*/ })

### Through the CLI

Start by running the `build.sh` script. You may then run send notifications using the shoutrrr executable:

$ shoutrrr send \[OPTIONS\] <URL\> <Message \[...\]\>

### From a GitHub Actions workflow

You can also use Shoutrrr from a GitHub Actions workflow.

See this example and the action on GitHub Marketplace:

name: Deploy
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Some other steps needed for deploying
        run: ...
      - name: Shoutrrr
        uses: containrrr/shoutrrr-action@v1
        with:
          url: ${{ secrets.SHOUTRRR\_URL }}
          title: Deployed ${{ github.sha }}
          message: See changes at ${{ github.event.compare }}.

Documentation
-------------

For additional details, visit the full documentation.

Contributors ✨
--------------

Thanks goes to these wonderful people (emoji key):

  
**Amir Schnell**  
💻

  
**nils måsén**  
💻 📖 🚧

  
**Luka Peschke**  
💻 📖

  
**MrLuje**  
💻 📖

  
**Simon Aronsson**  
💻 📖 🚧

  
**Arne Jørgensen**  
📖 💻

  
**Alexei Tighineanu**  
💻

  
**Alexandru Bonini**  
💻

  
**Senan Kelly**  
💻

  
**JonasPf**  
💻

  
**claycooper**  
📖

  
**Derzsi Dániel**  
💻

  
**Joseph Kavanagh**  
💻 🐛

  
**Justin Steven**  
🐛

This project follows the all-contributors specification. Contributions of any kind welcome!

Related Project(s)
------------------

-   watchtower - process for automating Docker container base image updates that uses shoutrrr for notifications
-   kured - kubernetes reboot daemon has adopted shoutrrr as their unified notification method starting with version 1.7.0.
-   Green Orb - a versatile 'observe and report' buddy for your application logs
