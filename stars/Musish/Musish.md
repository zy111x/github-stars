---
project: Musish
stars: 3074
description: Apple Music...ish 
url: https://github.com/Musish/Musish
---

Musish (musi.sh)
================

The unofficial open source Apple Music webapp.

Built with React and Apple's MusicKit JS while utilising the official Apple Music API. Contains some serverless functions deployed with AWS Lambda to speed up certain functionalities. (Found in backend).

Looks neat, how can I contribute?
---------------------------------

The Musish project welcomes contributions of all sorts; PRs, issues, feedback, comments, donations, or even just sharing the project would all be infinitely useful to us!

Please do remember to read our contributing guidelines before making a pull request.

We also welcome financial contributions in full transparency on our open collective, and we are extremely thankful for all those who have contributed already:

A massive thank you also to our code contributors, who you can see here

Self hosting
------------

Building Musi.sh requires node and yarn.

#### Running the Musish web app:

##### 1\. Generating an Apple Developer Token (JWT):

Musish uses the Apple Music API and therefore you'll need a signed developer token from Apple.

Please reference Apple's official guide on generating the keys and an associated token.

##### 2\. Environment setup:

Musish requires two environment variables to start. You'll need to enter your Apple Developer token as `APPLE_TOKEN`, and a link to your hosted Musish backend with `BACKEND_URL`.

.env.example:

APPLE\_TOKEN=your\_apple\_music\_token
BACKEND\_URL=https://musish.app

##### 3\. Install dependencies:

yarn

##### 4\. Launch Musish:

Start webpack dev server on port 8080:

yarn start

_Or:_

yarn build

This will create a directory called `dist` in the project root, these files can be served from a web server as static content.

#### Running the Musish backend:

We use Serverless to run our backend on AWS lambdas, however you can choose differently here.

##### Generating a Genius Developer Token:

If you wish to work on the Musish project's serverless backend, you will require a Genius Developer token.

Create a client access token via Genius' developer portal.

Is it safe?
-----------

Musish uses official Apple public APIs and libraries to handle authentication. The user is prompted to login directly on a new window under the Apple.com domain. Apple.com returns the user a temporary valid token to allow their browser to make requests to Apple Music data only.

At no point do we request, log, or gain access to information from a user of the site. The user's token is never sent to any server other than Apple's own. At no point do we ever intentionally pass any user information to any server which we control.

Our official build (https://musi.sh/) is powered by Github Pages with an AWS lambda providing both lyrics and artist information, we send no cookies or headers related to your Apple account.

* * *

Credits:

-   Musish logo (headphone icon) provided by zidney from the Noun Project.
