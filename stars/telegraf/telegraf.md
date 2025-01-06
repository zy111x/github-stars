---
project: telegraf
stars: 8445
description: Modern Telegram Bot Framework for Node.js
url: https://github.com/telegraf/telegraf
---

telegraf.js
===========

Modern Telegram Bot API framework for Node.js

For 3.x users
-------------

-   3.x docs
-   4.0 release notes

Introduction
------------

Bots are special Telegram accounts designed to handle messages automatically. Users can interact with bots by sending them command messages in private or group chats. These accounts serve as an interface for code running somewhere on your server.

Telegraf is a library that makes it simple for you to develop your own Telegram bots using JavaScript or TypeScript.

### Features

-   Full Telegram Bot API 7.1 support
-   Excellent TypeScript typings
-   Lightweight
-   AWS **λ** / Firebase / Glitch / Fly.io / Whatever ready
-   `http/https/fastify/Connect.js/express.js` compatible webhooks
-   Extensible

### Example

const { Telegraf } \= require('telegraf')
const { message } \= require('telegraf/filters')

const bot \= new Telegraf(process.env.BOT\_TOKEN)
bot.start((ctx) \=> ctx.reply('Welcome'))
bot.help((ctx) \=> ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) \=> ctx.reply('👍'))
bot.hears('hi', (ctx) \=> ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () \=> bot.stop('SIGINT'))
process.once('SIGTERM', () \=> bot.stop('SIGTERM'))

const { Telegraf } \= require('telegraf')

const bot \= new Telegraf(process.env.BOT\_TOKEN)
bot.command('oldschool', (ctx) \=> ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () \=> bot.stop('SIGINT'))
process.once('SIGTERM', () \=> bot.stop('SIGTERM'))

For additional bot examples see the new `docs repo`.

### Resources

-   Getting started
-   API reference
-   Telegram groups (sorted by number of members):
    -   English
    -   Russian
    -   Uzbek
    -   Ethiopian
-   GitHub Discussions
-   Dependent repositories

Getting started
---------------

### Telegram token

To use the Telegram Bot API, you first have to get a bot account by chatting with BotFather.

BotFather will give you a _token_, something like `123456789:AbCdefGhIJKlmNoPQRsTUVwxyZ`.

### Installation

```
$ npm install telegraf
```

or

```
$ yarn add telegraf
```

or

```
$ pnpm add telegraf
```

### `Telegraf` class

`Telegraf` instance represents your bot. It's responsible for obtaining updates and passing them to your handlers.

Start by listening to commands and launching your bot.

### `Context` class

`ctx` you can see in every example is a `Context` instance. `Telegraf` creates one for each incoming update and passes it to your middleware. It contains the `update`, `botInfo`, and `telegram` for making arbitrary Bot API requests, as well as shorthand methods and getters.

This is probably the class you'll be using the most.

#### Shorthand methods

import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const bot \= new Telegraf(process.env.BOT\_TOKEN)

bot.command('quit', async (ctx) \=> {
  // Explicit usage
  await ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using context shortcut
  await ctx.leaveChat()
})

bot.on(message('text'), async (ctx) \=> {
  // Explicit usage
  await ctx.telegram.sendMessage(ctx.message.chat.id, \`Hello ${ctx.state.role}\`)

  // Using context shortcut
  await ctx.reply(\`Hello ${ctx.state.role}\`)
})

bot.on('callback\_query', async (ctx) \=> {
  // Explicit usage
  await ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

  // Using context shortcut
  await ctx.answerCbQuery()
})

bot.on('inline\_query', async (ctx) \=> {
  const result \= \[\]
  // Explicit usage
  await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

  // Using context shortcut
  await ctx.answerInlineQuery(result)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () \=> bot.stop('SIGINT'))
process.once('SIGTERM', () \=> bot.stop('SIGTERM'))

Production
----------

### Webhooks

import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';

const bot \= new Telegraf(token);

bot.on(message("text"), ctx \=> ctx.reply("Hello"));

// Start webhook via launch method (preferred)
bot.launch({
  webhook: {
    // Public domain for webhook; e.g.: example.com
    domain: webhookDomain,

    // Port to listen on; e.g.: 8080
    port: port,

    // Optional path to listen for.
    // \`bot.secretPathComponent()\` will be used by default
    path: webhookPath,

    // Optional secret to be sent back in a header for security.
    // e.g.: \`crypto.randomBytes(64).toString("hex")\`
    secretToken: randomAlphaNumericString,
  },
});

Use `createWebhook()` if you want to attach Telegraf to an existing http server.

import { createServer } from "http";

createServer(await bot.createWebhook({ domain: "example.com" })).listen(3000);

import { createServer } from "https";

createServer(tlsOptions, await bot.createWebhook({ domain: "example.com" })).listen(8443);

-   AWS Lambda example integration
-   Google Cloud Functions example integration
-   `express` example integration
-   `fastify` example integration
-   `koa` example integration
-   NestJS framework integration module
-   Cloudflare Workers integration module
-   Use `bot.handleUpdate` to write new integrations

### Error handling

If middleware throws an error or times out, Telegraf calls `bot.handleError`. If it rethrows, update source closes, and then the error is printed to console and process terminates. If it does not rethrow, the error is swallowed.

Default `bot.handleError` always rethrows. You can overwrite it using `bot.catch` if you need to.

⚠️ Swallowing unknown errors might leave the process in invalid state!

ℹ️ In production, `systemd` or `pm2` can restart your bot if it exits for any reason.

Advanced topics
---------------

### Working with files

Supported file sources:

-   `Existing file_id`
-   `File path`
-   `Url`
-   `Buffer`
-   `ReadStream`

Also, you can provide an optional name of a file as `filename` when you send the file.

bot.on('message', async (ctx) \=> {
  // resend existing file by file\_id
  await ctx.replyWithSticker('123123jkbhj6b')

  // send file
  await ctx.replyWithVideo(Input.fromLocalFile('/path/to/video.mp4'))

  // send stream
  await ctx.replyWithVideo(
    Input.fromReadableStream(fs.createReadStream('/path/to/video.mp4'))
  )

  // send buffer
  await ctx.replyWithVoice(Input.fromBuffer(Buffer.alloc()))

  // send url via Telegram server
  await ctx.replyWithPhoto(Input.fromURL('https://picsum.photos/200/300/'))

  // pipe url content
  await ctx.replyWithPhoto(
    Input.fromURLStream('https://picsum.photos/200/300/?random', 'kitten.jpg')
  )
})

### Middleware

In addition to `ctx: Context`, each middleware receives `next: () => Promise<void>`.

As in Koa and some other middleware-based libraries, `await next()` will call next middleware and wait for it to finish:

import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

const bot \= new Telegraf(process.env.BOT\_TOKEN);

bot.use(async (ctx, next) \=> {
  console.time(\`Processing update ${ctx.update.update\_id}\`);
  await next() // runs next middleware
  // runs after next middleware finishes
  console.timeEnd(\`Processing update ${ctx.update.update\_id}\`);
})

bot.on(message('text'), (ctx) \=> ctx.reply('Hello World'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () \=> bot.stop('SIGINT'));
process.once('SIGTERM', () \=> bot.stop('SIGTERM'));

With this simple ability, you can:

-   extract information from updates and then `await next()` to avoid disrupting other middleware,
-   like `Composer` and `Router`, `await next()` for updates you don't wish to handle,
-   like `session` and `Scenes`, extend the context by mutating `ctx` before `await next()`,
-   intercept API calls,
-   reuse other people's code,
-   do whatever **you** come up with!

### Usage with TypeScript

Telegraf is written in TypeScript and therefore ships with declaration files for the entire library. Moreover, it includes types for the complete Telegram API via the `typegram` package. While most types of Telegraf's API surface are self-explanatory, there's some notable things to keep in mind.

#### Extending `Context`

The exact shape of `ctx` can vary based on the installed middleware. Some custom middleware might register properties on the context object that Telegraf is not aware of. Consequently, you can change the type of `ctx` to fit your needs in order for you to have proper TypeScript types for your data. This is done through Generics:

import { Context, Telegraf } from 'telegraf'

// Define your own context type
interface MyContext extends Context {
  myProp?: string
  myOtherProp?: number
}

// Create your bot and tell it about your context type
const bot \= new Telegraf<MyContext\>('SECRET TOKEN')

// Register middleware and launch your bot as usual
bot.use((ctx, next) \=> {
  // Yay, \`myProp\` is now available here as \`string | undefined\`!
  ctx.myProp \= ctx.chat?.first\_name?.toUpperCase()
  return next()
})
// ...
