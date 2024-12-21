---
project: chrome-ai
stars: 282
description: Vercel AI provider for Chrome built-in model (Gemini Nano)
url: https://github.com/jeasonstudio/chrome-ai
---

Chrome AI
=========

Vercel AI provider for Chrome built-in model (Gemini Nano).

Report Bug · Pull Request

> ⚠️ Note:
> 
> -   This module is under development and may contain errors and frequent incompatible changes.
> -   Chrome's implementation of built-in AI with Gemini Nano is an experiment and will change as they test and address feedback.
> -   If you've never heard of it before, follow these steps to turn on Chrome's built-in AI.

📦 Installation
---------------

The ChromeAI provider is available in the `chrome-ai` module. You can install it with:

npm install chrome-ai

🦄 Language Models
------------------

The `chromeai` provider instance is a function that you can invoke to create a language model:

import { chromeai } from 'chrome-ai';

const model \= chromeai();

It automatically selects the correct model id. You can also pass additional settings in the second argument:

import { chromeai } from 'chrome-ai';

const model \= chromeai('text', {
  // additional settings
  temperature: 0.5,
  topK: 5,
});

You can use the following optional settings to customize:

-   **modelId** `'text' (default:` 'text'\`)
-   **temperature** `number` (default: `0.8`)
-   **topK** `number` (default: `3`)

⭐️ Embedding models
-------------------

import { chromeai } from 'chrome-ai';
import { embedMany, cosineSimilarity } from 'ai';

const { embeddings } \= await embedMany({
  model: chromeai('embedding'),
  values: \['sunny day at the beach', 'rainy afternoon in the city'\],
});
// \[\[1.9545, 0.0318...\], \[1.8015, 0.1504...\]\]

const similarity \= cosineSimilarity(embeddings\[0\], embeddings\[1\]);
// similarity: 0.9474937159037822

🎯 Examples
-----------

You can use Chrome built-in language models to generate text with the `generateText` or `streamText` function:

import { generateText } from 'ai';
import { chromeai } from 'chrome-ai';

const { text } \= await generateText({
  model: chromeai(),
  prompt: 'Who are you?',
});

console.log(text); //  I am a large language model, trained by Google.

import { streamText } from 'ai';
import { chromeai } from 'chrome-ai';

const { textStream } \= await streamText({
  model: chromeai(),
  prompt: 'Who are you?',
});

let result \= '';
for await (const textPart of textStream) {
  result += textPart;
}

console.log(result);
//  I am a large language model, trained by Google.

Chrome built-in language models can also be used in the `generateObject/streamObject` function:

import { generateObject } from 'ai';
import { chromeai } from 'chrome-ai';
import { z } from 'zod';

const { object } \= await generateObject({
  model: chromeai(),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          amount: z.string(),
        })
      ),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
});

console.log(object);
// { recipe: {...} }

import { streamObject } from 'ai';
import { chromeai } from 'chrome-ai';
import { z } from 'zod';

const { partialObjectStream } \= await streamObject({
  model: chromeai(),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          amount: z.string(),
        })
      ),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
});

for await (const partialObject of result.partialObjectStream) {
  console.log(JSON.stringify(partialObject, null, 2));
  // { recipe: {...} }
}

> Due to model reasons, `toolCall/functionCall` are not supported. We are making an effort to implement these functions by prompt engineering.

Enabling AI in Chrome
---------------------

Chrome built-in AI is a preview feature, you need to use chrome version 127 or greater, now in dev or canary channel, may release on stable chanel at Jul 17, 2024.

After then, you should turn on these flags:

-   chrome://flags/#prompt-api-for-gemini-nano: `Enabled`
-   chrome://flags/#optimization-guide-on-device-model: `Enabled BypassPrefRequirement`
-   chrome://components/: Click `Optimization Guide On Device Model` to download the model.

Or you can try using the experimental feature: `chrome-ai/polyfill`, to use `chrome-ai` in any browser that supports WebGPU and WebAssembly.

import 'chrome-ai/polyfill';
// or
require('chrome-ai/polyfill');

Star History
------------

License
-------

MIT License © 2024 Jeason
