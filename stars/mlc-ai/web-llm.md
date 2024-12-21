---
project: web-llm
stars: 14041
description: High-performance In-browser LLM Inference Engine 
url: https://github.com/mlc-ai/web-llm
---

WebLLM
======

**High-Performance In-Browser LLM Inference Engine.**

Documentation | Blogpost | Examples

Overview
--------

WebLLM is a high-performance in-browser LLM inference engine that brings language model inference directly onto web browsers with hardware acceleration. Everything runs inside the browser with no server support and is accelerated with WebGPU.

WebLLM is **fully compatible with OpenAI API.** That is, you can use the same OpenAI API on **any open source models** locally, with functionalities including streaming, JSON-mode, function-calling (WIP), etc.

We can bring a lot of fun opportunities to build AI assistants for everyone and enable privacy while enjoying GPU acceleration.

You can use WebLLM as a base npm package and build your own web application on top of it by following the examples below. This project is a companion project of MLC LLM, which enables universal deployment of LLM across hardware environments.

**Check out WebLLM Chat to try it out!**

Key Features
------------

-   **In-Browser Inference**: WebLLM is a high-performance, in-browser language model inference engine that leverages WebGPU for hardware acceleration, enabling powerful LLM operations directly within web browsers without server-side processing.
    
-   **Full OpenAI API Compatibility**: Seamlessly integrate your app with WebLLM using OpenAI API with functionalities such as streaming, JSON-mode, logit-level control, seeding, and more.
    
-   **Structured JSON Generation**: WebLLM supports state-of-the-art JSON mode structured generation, implemented in the WebAssembly portion of the model library for optimal performance. Check WebLLM JSON Playground on HuggingFace to try generating JSON output with custom JSON schema.
    
-   **Extensive Model Support**: WebLLM natively supports a range of models including Llama 3, Phi 3, Gemma, Mistral, Qwen(通义千问), and many others, making it versatile for various AI tasks. For the complete supported model list, check MLC Models.
    
-   **Custom Model Integration**: Easily integrate and deploy custom models in MLC format, allowing you to adapt WebLLM to specific needs and scenarios, enhancing flexibility in model deployment.
    
-   **Plug-and-Play Integration**: Easily integrate WebLLM into your projects using package managers like NPM and Yarn, or directly via CDN, complete with comprehensive examples and a modular design for connecting with UI components.
    
-   **Streaming & Real-Time Interactions**: Supports streaming chat completions, allowing real-time output generation which enhances interactive applications like chatbots and virtual assistants.
    
-   **Web Worker & Service Worker Support**: Optimize UI performance and manage the lifecycle of models efficiently by offloading computations to separate worker threads or service workers.
    
-   **Chrome Extension Support**: Extend the functionality of web browsers through custom Chrome extensions using WebLLM, with examples available for building both basic and advanced extensions.
    

Built-in Models
---------------

Check the complete list of available models on MLC Models. WebLLM supports a subset of these available models and the list can be accessed at `prebuiltAppConfig.model_list`.

Here are the primary families of models currently supported:

-   **Llama**: Llama 3, Llama 2, Hermes-2-Pro-Llama-3
-   **Phi**: Phi 3, Phi 2, Phi 1.5
-   **Gemma**: Gemma-2B
-   **Mistral**: Mistral-7B-v0.3, Hermes-2-Pro-Mistral-7B, NeuralHermes-2.5-Mistral-7B, OpenHermes-2.5-Mistral-7B
-   **Qwen (通义千问)**: Qwen2 0.5B, 1.5B, 7B

If you need more models, request a new model via opening an issue or check Custom Models for how to compile and use your own models with WebLLM.

Jumpstart with Examples
-----------------------

Learn how to use WebLLM to integrate large language models into your application and generate chat completions through this simple Chatbot example:

For an advanced example of a larger, more complicated project, check WebLLM Chat.

More examples for different use cases are available in the examples folder.

Get Started
-----------

WebLLM offers a minimalist and modular interface to access the chatbot in the browser. The package is designed in a modular way to hook to any of the UI components.

### Installation

#### Package Manager

# npm
npm install @mlc-ai/web-llm
# yarn
yarn add @mlc-ai/web-llm
# or pnpm
pnpm install @mlc-ai/web-llm

Then import the module in your code.

// Import everything
import \* as webllm from "@mlc-ai/web-llm";
// Or only import what you need
import { CreateMLCEngine } from "@mlc-ai/web-llm";

#### CDN Delivery

Thanks to jsdelivr.com, WebLLM can be imported directly through URL and work out-of-the-box on cloud development platforms like jsfiddle.net, Codepen.io, and Scribbler:

import \* as webllm from "https://esm.run/@mlc-ai/web-llm";

It can also be dynamically imported as:

const webllm \= await import ("https://esm.run/@mlc-ai/web-llm");

### Create MLCEngine

Most operations in WebLLM are invoked through the `MLCEngine` interface. You can create an `MLCEngine` instance and loading the model by calling the `CreateMLCEngine()` factory function.

(Note that loading models requires downloading and it can take a significant amount of time for the very first run without caching previously. You should properly handle this asynchronous call.)

import { CreateMLCEngine } from "@mlc-ai/web-llm";

// Callback function to update model loading progress
const initProgressCallback \= (initProgress) \=> {
  console.log(initProgress);
}
const selectedModel \= "Llama-3.1-8B-Instruct-q4f32\_1-MLC";

const engine \= await CreateMLCEngine(
  selectedModel,
  { initProgressCallback: initProgressCallback }, // engineConfig
);

Under the hood, this factory function does the following steps for first creating an engine instance (synchronous) and then loading the model (asynchronous). You can also do them separately in your application.

import { MLCEngine } from "@mlc-ai/web-llm";

// This is a synchronous call that returns immediately
const engine \= new MLCEngine({
  initProgressCallback: initProgressCallback
});

// This is an asynchronous call and can take a long time to finish
await engine.reload(selectedModel);

### Chat Completion

After successfully initializing the engine, you can now invoke chat completions using OpenAI style chat APIs through the `engine.chat.completions` interface. For the full list of parameters and their descriptions, check section below and OpenAI API reference.

(Note: The `model` parameter is not supported and will be ignored here. Instead, call `CreateMLCEngine(model)` or `engine.reload(model)` instead as shown in the Create MLCEngine above.)

const messages \= \[
  { role: "system", content: "You are a helpful AI assistant." },
  { role: "user", content: "Hello!" },
\]

const reply \= await engine.chat.completions.create({
  messages,
});
console.log(reply.choices\[0\].message);
console.log(reply.usage);

### Streaming

WebLLM also supports streaming chat completion generating. To use it, simply pass `stream: true` to the `engine.chat.completions.create` call.

const messages \= \[
  { role: "system", content: "You are a helpful AI assistant." },
  { role: "user", content: "Hello!" },
\]

// Chunks is an AsyncGenerator object
const chunks \= await engine.chat.completions.create({
  messages,
  temperature: 1,
  stream: true, // <-- Enable streaming
  stream\_options: { include\_usage: true },
});

let reply \= "";
for await (const chunk of chunks) {
  reply += chunk.choices\[0\]?.delta.content || "";
  console.log(reply);
  if (chunk.usage) {
    console.log(chunk.usage); // only last chunk has usage
  }
}

const fullReply \= await engine.getMessage();
console.log(fullReply);

Advanced Usage
--------------

### Using Workers

You can put the heavy computation in a worker script to optimize your application performance. To do so, you need to:

1.  Create a handler in the worker thread that communicates with the frontend while handling the requests.
2.  Create a Worker Engine in your main application, which under the hood sends messages to the handler in the worker thread.

For detailed implementations of different kinds of Workers, check the following sections.

#### Dedicated Web Worker

WebLLM comes with API support for WebWorker so you can hook the generation process into a separate worker thread so that the computing in the worker thread won't disrupt the UI.

We create a handler in the worker thread that communicates with the frontend while handling the requests.

// worker.ts
import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

// A handler that resides in the worker thread
const handler \= new WebWorkerMLCEngineHandler();
self.onmessage \= (msg: MessageEvent) \=> {
  handler.onmessage(msg);
};

In the main logic, we create a `WebWorkerMLCEngine` that implements the same `MLCEngineInterface`. The rest of the logic remains the same.

// main.ts
import { CreateWebWorkerMLCEngine } from "@mlc-ai/web-llm";

async function main() {
  // Use a WebWorkerMLCEngine instead of MLCEngine here
  const engine \= await CreateWebWorkerMLCEngine(
    new Worker(
      new URL("./worker.ts", import.meta.url), 
      {
        type: "module",
      }
    ),
    selectedModel,
    { initProgressCallback }, // engineConfig
  );

  // everything else remains the same
}

### Use Service Worker

WebLLM comes with API support for ServiceWorker so you can hook the generation process into a service worker to avoid reloading the model in every page visit and optimize your application's offline experience.

(Note, Service Worker's life cycle is managed by the browser and can be killed any time without notifying the webapp. `ServiceWorkerMLCEngine` will try to keep the service worker thread alive by periodically sending heartbeat events, but your application should also include proper error handling. Check `keepAliveMs` and `missedHeatbeat` in `ServiceWorkerMLCEngine` for more details.)

We create a handler in the worker thread that communicates with the frontend while handling the requests.

// sw.ts
import { ServiceWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

let handler: ServiceWorkerMLCEngineHandler;

self.addEventListener("activate", function (event) {
  handler \= new ServiceWorkerMLCEngineHandler();
  console.log("Service Worker is ready");
});

Then in the main logic, we register the service worker and create the engine using `CreateServiceWorkerMLCEngine` function. The rest of the logic remains the same.

// main.ts
import { MLCEngineInterface, CreateServiceWorkerMLCEngine } from "@mlc-ai/web-llm";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(
    new URL("sw.ts", import.meta.url),  // worker script
    { type: "module" },
  );
}

const engine: MLCEngineInterface \=
  await CreateServiceWorkerMLCEngine(
    selectedModel,
    { initProgressCallback }, // engineConfig
  );

You can find a complete example on how to run WebLLM in service worker in examples/service-worker.

### Chrome Extension

You can also find examples of building Chrome extension with WebLLM in examples/chrome-extension and examples/chrome-extension-webgpu-service-worker. The latter one leverages service worker, so the extension is persistent in the background. Additionally, you can explore another full project of a Chrome extension, WebLLM Assistant, which leverages WebLLM here.

Full OpenAI Compatibility
-------------------------

WebLLM is designed to be fully compatible with OpenAI API. Thus, besides building a simple chatbot, you can also have the following functionalities with WebLLM:

-   streaming: return output as chunks in real-time in the form of an AsyncGenerator
-   json-mode: efficiently ensure output is in JSON format, see OpenAI Reference for more.
-   seed-to-reproduce: use seeding to ensure a reproducible output with fields `seed`.
-   function-calling (WIP): function calling with fields `tools` and `tool_choice` (with preliminary support); or manual function calling without `tools` or `tool_choice` (keeps the most flexibility).

Custom Models
-------------

WebLLM works as a companion project of MLC LLM and it supports custom models in MLC format. It reuses the model artifact and builds the flow of MLC LLM. To compile and use your own models with WebLLM, please check out MLC LLM document on how to compile and deploy new model weights and libraries to WebLLM.

Here, we go over the high-level idea. There are two elements of the WebLLM package that enable new models and weight variants.

-   `model`: Contains a URL to model artifacts, such as weights and meta-data.
-   `model_lib`: A URL to the web assembly library (i.e. wasm file) that contains the executables to accelerate the model computations.

Both are customizable in the WebLLM.

import { CreateMLCEngine } from "@mlc-ai/web-llm";

async main() {
  const appConfig \= {
    "model\_list": \[
      {
        "model": "/url/to/my/llama",
        "model\_id": "MyLlama-3b-v1-q4f32\_0",
        "model\_lib": "/url/to/myllama3b.wasm",
      }
    \],
  };
  // override default
  const chatOpts \= {
    "repetition\_penalty": 1.01
  };

  // load a prebuilt model
  // with a chat option override and app config
  // under the hood, it will load the model from myLlamaUrl
  // and cache it in the browser cache
  // The chat will also load the model library from "/url/to/myllama3b.wasm",
  // assuming that it is compatible to the model in myLlamaUrl.
  const engine \= await CreateMLCEngine(
    "MyLlama-3b-v1-q4f32\_0",
    { appConfig }, // engineConfig
    chatOpts,
  );
}

In many cases, we only want to supply the model weight variant, but not necessarily a new model (e.g. `NeuralHermes-Mistral` can reuse `Mistral`'s model library). For examples of how a model library can be shared by different model variants, see `webllm.prebuiltAppConfig`.

Build WebLLM Package From Source
--------------------------------

NOTE: you don't need to build from source unless you would like to modify the WebLLM package. To use the npm, simply follow Get Started or any of the examples instead.

To build from source, simply run:

npm install
npm run build

Then, to test the effects of your code change in an example, inside `examples/get-started/package.json`, change from `"@mlc-ai/web-llm": "^0.2.77"` to `"@mlc-ai/web-llm": ../..`.

Then run:

cd examples/get-started
npm install
npm start

Note that sometimes you would need to switch between `file:../..` and `../..` to trigger npm to recognize new changes. In the worst case, you can run:

cd examples/get-started
rm -rf node\_modules dist package-lock.json .parcel-cache
npm install
npm start

### In case you need to build TVMjs from source

WebLLM's runtime largely depends on TVMjs: https://github.com/apache/tvm/tree/main/web

While it is also available as an npm package: https://www.npmjs.com/package/@mlc-ai/web-runtime, you can build it from source if needed by following the steps below.

1.  Install emscripten. It is an LLVM-based compiler that compiles C/C++ source code to WebAssembly.
    
    -   Follow the installation instruction to install the latest emsdk.
    -   Source `emsdk_env.sh` by `source path/to/emsdk_env.sh`, so that `emcc` is reachable from PATH and the command `emcc` works.
    
    We can verify the successful installation by trying out `emcc` terminal.
    
    Note: We recently found that using the latest `emcc` version may run into issues during runtime. Use `./emsdk install 3.1.56` instead of `./emsdk install latest` for now as a workaround. The error may look like
    
    ```
    Init error, LinkError: WebAssembly.instantiate(): Import #6 module="wasi_snapshot_preview1"
    function="proc_exit": function import requires a callable
    ```
    
2.  In `./package.json`, change from `"@mlc-ai/web-runtime": "0.18.0-dev2",` to `"@mlc-ai/web-runtime": "file:./tvm_home/web",`.
    
3.  Setup necessary environment
    
    Prepare all the necessary dependencies for web build:
    
    ./scripts/prep\_deps.sh
    
    In this step, if `$TVM_SOURCE_DIR` is not defined in the environment, we will execute the following line to build `tvmjs` dependency:
    
    git clone https://github.com/mlc-ai/relax 3rdparty/tvm-unity --recursive
    
    This clones the current HEAD of `mlc-ai/relax`. However, it may not always be the correct branch or commit to clone. To build a specific npm version from source, refer to the version bump PR, which states which branch (i.e. `mlc-ai/relax` or `apache/tvm`) and which commit the current WebLLM version depends on. For instance, version 0.2.52, according to its version bump PR #521, is built by checking out the following commit https://github.com/apache/tvm/commit/e6476847753c80e054719ac47bc2091c888418b6 in `apache/tvm`, rather than the HEAD of `mlc-ai/relax`.
    
    Besides, `--recursive` is necessary and important. Otherwise, you may encounter errors like `fatal error: 'dlpack/dlpack.h' file not found`.
    
4.  Build WebLLM Package
    
    npm run build
    
5.  Validate some of the sub-packages
    
    You can then go to the subfolders in examples to validate some of the sub-packages. We use Parcelv2 for bundling. Although Parcel is not very good at tracking parent directory changes sometimes. When you make a change in the WebLLM package, try to edit the `package.json` of the subfolder and save it, which will trigger Parcel to rebuild.
    

Links
-----

-   Demo App: WebLLM Chat
-   If you want to run LLM on native runtime, check out MLC-LLM
-   You might also be interested in Web Stable Diffusion.

Acknowledgement
---------------

This project is initiated by members from CMU Catalyst, UW SAMPL, SJTU, OctoML, and the MLC community. We would love to continue developing and supporting the open-source ML community.

This project is only possible thanks to the shoulders open-source ecosystems that we stand on. We want to thank the Apache TVM community and developers of the TVM Unity effort. The open-source ML community members made these models publicly available. PyTorch and Hugging Face communities make these models accessible. We would like to thank the teams behind Vicuna, SentencePiece, LLaMA, and Alpaca. We also would like to thank the WebAssembly, Emscripten, and WebGPU communities. Finally, thanks to Dawn and WebGPU developers.

Contributors
------------

⬆ Back to Top ⬆