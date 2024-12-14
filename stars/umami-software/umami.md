---
project: umami
stars: 23300
description: Umami is a simple, fast, privacy-focused alternative to Google Analytics.
url: https://github.com/umami-software/umami
---

Umami
=====

_Umami is a simple, fast, privacy-focused alternative to Google Analytics._

* * *

🚀 Getting Started
------------------

A detailed getting started guide can be found at umami.is/docs.

* * *

🛠 Installing from Source
-------------------------

### Requirements

-   A server with Node.js version 18.18 or newer
-   A database. Umami supports MariaDB (minimum v10.5), MySQL (minimum v8.0) and PostgreSQL (minimum v12.14) databases.

### Install Yarn

npm install -g yarn

### Get the Source Code and Install Packages

git clone https://github.com/umami-software/umami.git
cd umami
yarn install

### Configure Umami

Create an `.env` file with the following:

DATABASE\_URL=connection-url

The connection URL format:

postgresql://username:mypassword@localhost:5432/mydb
mysql://username:mypassword@localhost:3306/mydb

### Build the Application

yarn build

_The build step will create tables in your database if you are installing for the first time. It will also create a login user with username **admin** and password **umami**._

### Start the Application

yarn start

_By default, this will launch the application on `http://localhost:3000`. You will need to either proxy requests from your web server or change the port to serve the application directly._

* * *

🐳 Installing with Docker
-------------------------

To build the Umami container and start up a Postgres database, run:

docker compose up -d

Alternatively, to pull just the Umami Docker image with PostgreSQL support:

docker pull docker.umami.is/umami-software/umami:postgresql-latest

Or with MySQL support:

docker pull docker.umami.is/umami-software/umami:mysql-latest

* * *

🔄 Getting Updates
------------------

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

git pull
yarn install
yarn build

To update the Docker image, simply pull the new images and rebuild:

docker compose pull
docker compose up --force-recreate

* * *

🛟 Support
----------
