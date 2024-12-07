---
project: exo
stars: 17023
description: Run your own AI cluster at home with everyday devices 📱💻 🖥️⌚
url: https://github.com/exo-explore/exo
---

exo: Run your own AI cluster at home with everyday devices. Maintained by exo labs.

### 

Discord | Telegram | X

* * *

Forget expensive NVIDIA GPUs, unify your existing devices into one powerful GPU: iPhone, iPad, Android, Mac, Linux, pretty much any device!

Update: exo is hiring. See here for more details.
-------------------------------------------------

Get Involved
------------

exo is **experimental** software. Expect bugs early on. Create issues so they can be fixed. The exo labs team will strive to resolve issues quickly.

We also welcome contributions from the community. We have a list of bounties in this sheet.

Features
--------

### Wide Model Support

exo supports different models including LLaMA (MLX and tinygrad), Mistral, LlaVA, Qwen and Deepseek.

### Dynamic Model Partitioning

exo optimally splits up models based on the current network topology and device resources available. This enables you to run larger models than you would be able to on any single device.

### Automatic Device Discovery

exo will automatically discover other devices using the best method available. Zero manual configuration.

### ChatGPT-compatible API

exo provides a ChatGPT-compatible API for running models. It's a one-line change in your application to run models on your own hardware using exo.

### Device Equality

Unlike other distributed inference frameworks, exo does not use a master-worker architecture. Instead, exo devices connect p2p. As long as a device is connected somewhere in the network, it can be used to run models.

Exo supports different partitioning strategies to split up a model across devices. The default partitioning strategy is ring memory weighted partitioning. This runs an inference in a ring where each device runs a number of model layers proportional to the memory of the device.

Installation
------------

The current recommended way to install exo is from source.

### Prerequisites

-   Python>=3.12.0 is required because of issues with asyncio in previous versions.
-   For Linux with NVIDIA GPU support (Linux-only, skip if not using Linux or NVIDIA):
    -   NVIDIA driver - verify with `nvidia-smi`
    -   CUDA toolkit - install from NVIDIA CUDA guide, verify with `nvcc --version`
    -   cuDNN library - download from NVIDIA cuDNN page, verify installation by following these steps

### Hardware Requirements

-   The only requirement to run exo is to have enough memory across all your devices to fit the entire model into memory. For example, if you are running llama 3.1 8B (fp16), you need 16GB of memory across all devices. Any of the following configurations would work since they each have more than 16GB of memory in total:
    -   2 x 8GB M3 MacBook Airs
    -   1 x 16GB NVIDIA RTX 4070 Ti Laptop
    -   2 x Raspberry Pi 400 with 4GB of RAM each (running on CPU) + 1 x 8GB Mac Mini
-   exo is designed to run on devices with heterogeneous capabilities. For example, you can have some devices with powerful GPUs and others with integrated GPUs or even CPUs. Adding less capable devices will slow down individual inference latency but will increase the overall throughput of the cluster.

### From source

git clone https://github.com/exo-explore/exo.git
cd exo
pip install -e .
# alternatively, with venv
source install.sh

### Troubleshooting

-   If running on Mac, MLX has an install guide with troubleshooting steps.

### Performance

-   There are a number of things users have empirically found to improve performance on Apple Silicon Macs:

1.  Upgrade to the latest version of MacOS 15.
2.  Run `./configure_mlx.sh`. This runs commands to optimize GPU memory allocation on Apple Silicon Macs.

Documentation
-------------

### Example Usage on Multiple MacOS Devices

#### Device 1:

exo

#### Device 2:

exo

That's it! No configuration required - exo will automatically discover the other device(s).

exo starts a ChatGPT-like WebUI (powered by tinygrad tinychat) on http://localhost:52415

For developers, exo also starts a ChatGPT-compatible API endpoint on http://localhost:52415/v1/chat/completions. Examples with curl:

#### Llama 3.2 3B:

curl http://localhost:52415/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
     "model": "llama-3.2-3b",
     "messages": \[{"role": "user", "content": "What is the meaning of exo?"}\],
     "temperature": 0.7
   }'

#### Llama 3.1 405B:

curl http://localhost:52415/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
     "model": "llama-3.1-405b",
     "messages": \[{"role": "user", "content": "What is the meaning of exo?"}\],
     "temperature": 0.7
   }'

#### Llava 1.5 7B (Vision Language Model):

curl http://localhost:52415/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
     "model": "llava-1.5-7b-hf",
     "messages": \[
      {
        "role": "user",
        "content": \[
          {
            "type": "text",
            "text": "What are these?"
          },
          {
            "type": "image\_url",
            "image\_url": {
              "url": "http://images.cocodataset.org/val2017/000000039769.jpg"
            }
          }
        \]
      }
    \],
     "temperature": 0.0
   }'

### Example Usage on Multiple Heterogenous Devices (MacOS + Linux)

#### Device 1 (MacOS):

exo

Note: We don't need to explicitly tell exo to use the **tinygrad** inference engine. **MLX** and **tinygrad** are interoperable!

#### Device 2 (Linux):

exo

Linux devices will automatically default to using the **tinygrad** inference engine.

You can read about tinygrad-specific env vars here. For example, you can configure tinygrad to use the cpu by specifying `CLANG=1`.

### Example Usage on a single device with "exo run" command

exo run llama-3.2-3b

With a custom prompt:

exo run llama-3.2-3b --prompt "What is the meaning of exo?"

### Model Storage

Models by default are stored in `~/.cache/huggingface/hub`.

You can set a different model storage location by setting the `HF_HOME` env var.

Debugging
---------

Enable debug logs with the DEBUG environment variable (0-9).

DEBUG=9 exo

For the **tinygrad** inference engine specifically, there is a separate DEBUG flag `TINYGRAD_DEBUG` that can be used to enable debug logs (1-6).

TINYGRAD\_DEBUG=2 exo

Formatting
----------

We use yapf to format the code. To format the code, first install the formatting requirements:

pip3 install -e '.\[formatting\]'

Then run the formatting script:

python3 format.py ./exo

Known Issues
------------

-   On some versions of MacOS/Python, certificates are not installed properly which can lead to SSL errors (e.g. SSL error with huggingface.co). To fix this, run the Install Certificates command, usually:

/Applications/Python 3.x/Install Certificates.command

-   🚧 As the library is evolving so quickly, the iOS implementation has fallen behind Python. We have decided for now not to put out the buggy iOS version and receive a bunch of GitHub issues for outdated code. We are working on solving this properly and will make an announcement when it's ready. If you would like access to the iOS implementation now, please email alex@exolabs.net with your GitHub username explaining your use-case and you will be granted access on GitHub.

Inference Engines
-----------------

exo supports the following inference engines:

-   ✅ MLX
-   ✅ tinygrad
-   🚧 PyTorch
-   🚧 llama.cpp

Networking Modules
------------------

-   ✅ GRPC
-   🚧 Radio
-   🚧 Bluetooth
