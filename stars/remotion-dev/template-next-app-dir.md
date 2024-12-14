---
project: template-next-app-dir
stars: 82
description: Next.js template for programmatic video apps
url: https://github.com/remotion-dev/template-next-app-dir
---

  
  

This is a Next.js template for building programmatic video apps, with `@remotion/player` and `@remotion/lambda` built in.

This template uses the Next.js App directory. There is a Tailwind CSS version and a Pages directory version of this template available.

Getting Started
---------------

Use this template to clone it into your GitHub account. Run

```
npm i
```

afterwards. Alternatively, use this command to scaffold a project:

```
npx create-video@latest --next
```

Commands
--------

Start the Next.js dev server:

```
npm run dev
```

Open the Remotion Studio:

```
npm run remotion
```

Render a video locally:

```
npx remotion render
```

Upgrade Remotion:

```
npx remotion upgrade
```

The following script will set up your Remotion Bundle and Lambda function on AWS:

```
node deploy.mjs
```

You should run this script after:

-   changing the video template
-   changing `config.mjs`
-   upgrading Remotion to a newer version

Set up rendering on AWS Lambda
------------------------------

This template supports rendering the videos via Remotion Lambda.

1.  Copy the `.env.example` file to `.env` and fill in the values. Complete the Lambda setup guide to get your AWS credentials.
    
2.  Edit the `config.mjs` file to your desired Lambda settings.
    
3.  Run `node deploy.mjs` to deploy your Lambda function and Remotion Bundle.
    

Docs
----

Get started with Remotion by reading the fundamentals page.

Help
----

We provide help on our Discord server.

Issues
------

Found an issue with Remotion? File an issue here.

License
-------

Note that for some entities a company license is needed. Read the terms here.
