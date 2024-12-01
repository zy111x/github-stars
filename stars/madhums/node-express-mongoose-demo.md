---
project: node-express-mongoose-demo
stars: 5119
description: A simple demo app using node and mongodb for beginners (with docker)
url: https://github.com/madhums/node-express-mongoose-demo
---

Nodejs Express Mongoose Demo
============================

This is a demo application illustrating various features used in everyday web development, with a fine touch of best practices. The demo app is a blog application where users can signup, create an article, delete an article and add comments etc.

Table of contents:

-   Boilerplate
-   Install
-   Tests
-   Docker
-   License

Boilerplate
-----------

Want to build something from scratch? use the boilerplate

-   Checkout the apps that are built using this approach
-   The wiki is wip, it has some information about the way application is setup.

Install
-------

git clone git://github.com/madhums/node-express-mongoose-demo.git
npm install
cp .env.example .env
npm start

Then visit http://localhost:3000/

**NOTE:** Do not forget to set the twitter, google, linkedin and github `CLIENT_ID`s and `SECRET`s. In `development` env, you can set the env variables in `.env` and replace the values there. In `production` env, it is not safe to keep the ids and secrets in a file, so you need to set it up via commandline. If you are using heroku checkout how environment variables are set here.

Tests
-----

npm test

Docker
------

You can also use docker for development. Make sure you run npm install on your host machine so that code linting and everything works fine.

npm i
cp .env.example .env

Start the services

docker-compose up -d

View the logs

docker-compose logs -f

In case you install a npm module while developing, it should also be installed within docker container, to do this first install the module you want with simple `npm i module name`, then run it within docker container

docker-compose exec node npm i

If you make any changes to the file, nodemon should automatically pick up and restart within docker (you can see this in the logs)

To run tests

docker-compose exec -e MONGODB\_URL=mongodb://mongo:27017/noobjs\_test node npm test

Note that we are overriding the environment variable set in `.env` file because we don't want our data erased by the tests.

Note: The difference between exec and run is that, exec executes the command within the running container and run will spin up a new container to run that command. So if you want to run only the tests without docker-compose up, you may do so by running `docker-compose run -e MONGODB_URL=mongodb://mongo:27017/noobjs_test node npm test`

License
-------

MIT
