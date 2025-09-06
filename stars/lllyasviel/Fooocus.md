---
project: Fooocus
stars: 46372
description: Focus on prompting and generating
url: https://github.com/lllyasviel/Fooocus
---

Fooocus
=======

\>>> Click Here to Install Fooocus <<<

Fooocus is an image generating software (based on Gradio ).

Fooocus presents a rethinking of image generator designs. The software is offline, open source, and free, while at the same time, similar to many online image generators like Midjourney, the manual tweaking is not needed, and users only need to focus on the prompts and images. Fooocus has also simplified the installation: between pressing "download" and generating the first image, the number of needed mouse clicks is strictly limited to less than 3. Minimal GPU memory requirement is 4GB (Nvidia).

**Recently many fake websites exist on Google when you search “fooocus”. Do not trust those – here is the only official source of Fooocus.**

Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only
===================================================================

The Fooocus project, built entirely on the **Stable Diffusion XL** architecture, is now in a state of limited long-term support (LTS) with bug fixes only. As the existing functionalities are considered as nearly free of programmartic issues (Thanks to mashb1t's huge efforts), future updates will focus exclusively on addressing any bugs that may arise.

**There are no current plans to migrate to or incorporate newer model architectures.** However, this may change during time with the development of open-source community. For example, if the community converge to one single dominant method for image generation (which may really happen in half or one years given the current status), Fooocus may also migrate to that exact method.

For those interested in utilizing newer models such as **Flux**, we recommend exploring alternative platforms such as WebUI Forge (also from us), ComfyUI/SwarmUI. Additionally, several excellent forks of Fooocus are available for experimentation.

Again, recently many fake websites exist on Google when you search “fooocus”. Do **NOT** get Fooocus from those websites – this page is the only official source of Fooocus. We never have any website like such as “fooocus.com”, “fooocus.net”, “fooocus.co”, “fooocus.ai”, “fooocus.org”, “fooocus.pro”, “fooocus.one”. Those websites are ALL FAKE. **They have ABSOLUTLY no relationship to us. Fooocus is a 100% non-commercial offline open-source software.**

Features
========

Below is a quick list using Midjourney's examples:

Midjourney

Fooocus

High-quality text-to-image without needing much prompt engineering or parameter tuning.  
(Unknown method)

High-quality text-to-image without needing much prompt engineering or parameter tuning.  
(Fooocus has an offline GPT-2 based prompt processing engine and lots of sampling improvements so that results are always beautiful, no matter if your prompt is as short as “house in garden” or as long as 1000 words)

V1 V2 V3 V4

Input Image -> Upscale or Variation -> Vary (Subtle) / Vary (Strong)

U1 U2 U3 U4

Input Image -> Upscale or Variation -> Upscale (1.5x) / Upscale (2x)

Inpaint / Up / Down / Left / Right (Pan)

Input Image -> Inpaint or Outpaint -> Inpaint / Up / Down / Left / Right  
(Fooocus uses its own inpaint algorithm and inpaint models so that results are more satisfying than all other software that uses standard SDXL inpaint method/model)

Image Prompt

Input Image -> Image Prompt  
(Fooocus uses its own image prompt algorithm so that result quality and prompt understanding are more satisfying than all other software that uses standard SDXL methods like standard IP-Adapters or Revisions)

\--style

Advanced -> Style

\--stylize

Advanced -> Advanced -> Guidance

\--niji

Multiple launchers: "run.bat", "run\_anime.bat", and "run\_realistic.bat".  
Fooocus support SDXL models on Civitai  
(You can google search “Civitai” if you do not know about it)

\--quality

Advanced -> Quality

\--repeat

Advanced -> Image Number

Multi Prompts (::)

Just use multiple lines of prompts

Prompt Weights

You can use " I am (happy:1.5)".  
Fooocus uses A1111's reweighting algorithm so that results are better than ComfyUI if users directly copy prompts from Civitai. (Because if prompts are written in ComfyUI's reweighting, users are less likely to copy prompt texts as they prefer dragging files)  
To use embedding, you can use "(embedding:file\_name:1.1)"

\--no

Advanced -> Negative Prompt

\--ar

Advanced -> Aspect Ratios

InsightFace

Input Image -> Image Prompt -> Advanced -> FaceSwap

Describe

Input Image -> Describe

Below is a quick list using LeonardoAI's examples:

LeonardoAI

Fooocus

Prompt Magic

Advanced -> Style -> Fooocus V2

Advanced Sampler Parameters (like Contrast/Sharpness/etc)

Advanced -> Advanced -> Sampling Sharpness / etc

User-friendly ControlNets

Input Image -> Image Prompt -> Advanced

Also, click here to browse the advanced features.

Download
========

### Windows

You can directly download Fooocus with:

**\>>> Click here to download <<<**

After you download the file, please uncompress it and then run the "run.bat".

The first time you launch the software, it will automatically download models:

1.  It will download default models to the folder "Fooocus\\models\\checkpoints" given different presets. You can download them in advance if you do not want automatic download.
2.  Note that if you use inpaint, at the first time you inpaint an image, it will download Fooocus's own inpaint control model from here as the file "Fooocus\\models\\inpaint\\inpaint\_v26.fooocus.patch" (the size of this file is 1.28GB).

After Fooocus 2.1.60, you will also have `run_anime.bat` and `run_realistic.bat`. They are different model presets (and require different models, but they will be automatically downloaded). Check here for more details.

After Fooocus 2.3.0 you can also switch presets directly in the browser. Keep in mind to add these arguments if you want to change the default behavior:

-   Use `--disable-preset-selection` to disable preset selection in the browser.
-   Use `--always-download-new-model` to download missing models on preset switch. Default is fallback to `previous_default_models` defined in the corresponding preset, also see terminal output.

If you already have these files, you can copy them to the above locations to speed up installation.

Note that if you see **"MetadataIncompleteBuffer" or "PytorchStreamReader"**, then your model files are corrupted. Please download models again.

Below is a test on a relatively low-end laptop with **16GB System RAM** and **6GB VRAM** (Nvidia 3060 laptop). The speed on this machine is about 1.35 seconds per iteration. Pretty impressive – nowadays laptops with 3060 are usually at very acceptable price.

Besides, recently many other software report that Nvidia driver above 532 is sometimes 10x slower than Nvidia driver 531. If your generation time is very long, consider download Nvidia Driver 531 Laptop or Nvidia Driver 531 Desktop.

Note that the minimal requirement is **4GB Nvidia GPU memory (4GB VRAM)** and **8GB system memory (8GB RAM)**. This requires using Microsoft’s Virtual Swap technique, which is automatically enabled by your Windows installation in most cases, so you often do not need to do anything about it. However, if you are not sure, or if you manually turned it off (would anyone really do that?), or **if you see any "RuntimeError: CPUAllocator"**, you can enable it here:

Click here to see the image instructions.

**And make sure that you have at least 40GB free space on each drive if you still see "RuntimeError: CPUAllocator" !**

Please open an issue if you use similar devices but still cannot achieve acceptable performances.

Note that the minimal requirement for different platforms is different.

See also the common problems and troubleshoots here.

### Colab

(Last tested - 2024 Aug 12 by mashb1t)

Colab

Info

Fooocus Official

In Colab, you can modify the last line to `!python entry_with_update.py --share --always-high-vram` or `!python entry_with_update.py --share --always-high-vram --preset anime` or `!python entry_with_update.py --share --always-high-vram --preset realistic` for Fooocus Default/Anime/Realistic Edition.

You can also change the preset in the UI. Please be aware that this may lead to timeouts after 60 seconds. If this is the case, please wait until the download has finished, change the preset to initial and back to the one you've selected or reload the page.

Note that this Colab will disable refiner by default because Colab free's resources are relatively limited (and some "big" features like image prompt may cause free-tier Colab to disconnect). We make sure that basic text-to-image is always working on free-tier Colab.

Using `--always-high-vram` shifts resource allocation from RAM to VRAM and achieves the overall best balance between performance, flexibility and stability on the default T4 instance. Please find more information here.

Thanks to camenduru for the template!

### Linux (Using Anaconda)

If you want to use Anaconda/Miniconda, you can

```
git clone https://github.com/lllyasviel/Fooocus.git
cd Fooocus
conda env create -f environment.yaml
conda activate fooocus
pip install -r requirements_versions.txt
```

Then download the models: download default models to the folder "Fooocus\\models\\checkpoints". **Or let Fooocus automatically download the models** using the launcher:

```
conda activate fooocus
python entry_with_update.py
```

Or, if you want to open a remote port, use

```
conda activate fooocus
python entry_with_update.py --listen
```

Use `python entry_with_update.py --preset anime` or `python entry_with_update.py --preset realistic` for Fooocus Anime/Realistic Edition.

### Linux (Using Python Venv)

Your Linux needs to have **Python 3.10** installed, and let's say your Python can be called with the command **python3** with your venv system working; you can

```
git clone https://github.com/lllyasviel/Fooocus.git
cd Fooocus
python3 -m venv fooocus_env
source fooocus_env/bin/activate
pip install -r requirements_versions.txt
```

See the above sections for model downloads. You can launch the software with:

```
source fooocus_env/bin/activate
python entry_with_update.py
```

Or, if you want to open a remote port, use

```
source fooocus_env/bin/activate
python entry_with_update.py --listen
```

Use `python entry_with_update.py --preset anime` or `python entry_with_update.py --preset realistic` for Fooocus Anime/Realistic Edition.

### Linux (Using native system Python)

If you know what you are doing, and your Linux already has **Python 3.10** installed, and your Python can be called with the command **python3** (and Pip with **pip3**), you can

```
git clone https://github.com/lllyasviel/Fooocus.git
cd Fooocus
pip3 install -r requirements_versions.txt
```

See the above sections for model downloads. You can launch the software with:

```
python3 entry_with_update.py
```

Or, if you want to open a remote port, use

```
python3 entry_with_update.py --listen
```

Use `python entry_with_update.py --preset anime` or `python entry_with_update.py --preset realistic` for Fooocus Anime/Realistic Edition.

### Linux (AMD GPUs)

Note that the minimal requirement for different platforms is different.

Same with the above instructions. You need to change torch to the AMD version

```
pip uninstall torch torchvision torchaudio torchtext functorch xformers 
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm5.6
```

AMD is not intensively tested, however. The AMD support is in beta.

Use `python entry_with_update.py --preset anime` or `python entry_with_update.py --preset realistic` for Fooocus Anime/Realistic Edition.

### Windows (AMD GPUs)

Note that the minimal requirement for different platforms is different.

Same with Windows. Download the software and edit the content of `run.bat` as:

```
.\python_embeded\python.exe -m pip uninstall torch torchvision torchaudio torchtext functorch xformers -y
.\python_embeded\python.exe -m pip install torch-directml
.\python_embeded\python.exe -s Fooocus\entry_with_update.py --directml
pause
```

Then run the `run.bat`.

AMD is not intensively tested, however. The AMD support is in beta.

For AMD, use `.\python_embeded\python.exe Fooocus\entry_with_update.py --directml --preset anime` or `.\python_embeded\python.exe Fooocus\entry_with_update.py --directml --preset realistic` for Fooocus Anime/Realistic Edition.

### Mac

Note that the minimal requirement for different platforms is different.

Mac is not intensively tested. Below is an unofficial guideline for using Mac. You can discuss problems here.

You can install Fooocus on Apple Mac silicon (M1 or M2) with macOS 'Catalina' or a newer version. Fooocus runs on Apple silicon computers via PyTorch MPS device acceleration. Mac Silicon computers don't come with a dedicated graphics card, resulting in significantly longer image processing times compared to computers with dedicated graphics cards.

1.  Install the conda package manager and pytorch nightly. Read the Accelerated PyTorch training on Mac Apple Developer guide for instructions. Make sure pytorch recognizes your MPS device.
2.  Open the macOS Terminal app and clone this repository with `git clone https://github.com/lllyasviel/Fooocus.git`.
3.  Change to the new Fooocus directory, `cd Fooocus`.
4.  Create a new conda environment, `conda env create -f environment.yaml`.
5.  Activate your new conda environment, `conda activate fooocus`.
6.  Install the packages required by Fooocus, `pip install -r requirements_versions.txt`.
7.  Launch Fooocus by running `python entry_with_update.py`. (Some Mac M2 users may need `python entry_with_update.py --disable-offload-from-vram` to speed up model loading/unloading.) The first time you run Fooocus, it will automatically download the Stable Diffusion SDXL models and will take a significant amount of time, depending on your internet connection.

Use `python entry_with_update.py --preset anime` or `python entry_with_update.py --preset realistic` for Fooocus Anime/Realistic Edition.

### Docker

See docker.md

### Download Previous Version

See the guidelines here.

Minimal Requirement
-------------------

Below is the minimal requirement for running Fooocus locally. If your device capability is lower than this spec, you may not be able to use Fooocus locally. (Please let us know, in any case, if your device capability is lower but Fooocus still works.)

Operating System

GPU

Minimal GPU Memory

Minimal System Memory

System Swap

Note

Windows/Linux

Nvidia RTX 4XXX

4GB

8GB

Required

fastest

Windows/Linux

Nvidia RTX 3XXX

4GB

8GB

Required

usually faster than RTX 2XXX

Windows/Linux

Nvidia RTX 2XXX

4GB

8GB

Required

usually faster than GTX 1XXX

Windows/Linux

Nvidia GTX 1XXX

8GB (\* 6GB uncertain)

8GB

Required

only marginally faster than CPU

Windows/Linux

Nvidia GTX 9XX

8GB

8GB

Required

faster or slower than CPU

Windows/Linux

Nvidia GTX < 9XX

Not supported

/

/

/

Windows

AMD GPU

8GB (updated 2023 Dec 30)

8GB

Required

via DirectML (\* ROCm is on hold), about 3x slower than Nvidia RTX 3XXX

Linux

AMD GPU

8GB

8GB

Required

via ROCm, about 1.5x slower than Nvidia RTX 3XXX

Mac

M1/M2 MPS

Shared

Shared

Shared

about 9x slower than Nvidia RTX 3XXX

Windows/Linux/Mac

only use CPU

0GB

32GB

Required

about 17x slower than Nvidia RTX 3XXX

\* AMD GPU ROCm (on hold): The AMD is still working on supporting ROCm on Windows.

\* Nvidia GTX 1XXX 6GB uncertain: Some people report 6GB success on GTX 10XX, but some other people report failure cases.

_Note that Fooocus is only for extremely high quality image generating. We will not support smaller models to reduce the requirement and sacrifice result quality._

Troubleshoot
------------

See the common problems here.

Default Models
--------------

Given different goals, the default models and configs of Fooocus are different:

Task

Windows

Linux args

Main Model

Refiner

Config

General

run.bat

juggernautXL\_v8Rundiffusion

not used

here

Realistic

run\_realistic.bat

\--preset realistic

realisticStockPhoto\_v20

not used

here

Anime

run\_anime.bat

\--preset anime

animaPencilXL\_v500

not used

here

Note that the download is **automatic** - you do not need to do anything if the internet connection is okay. However, you can download them manually if you (or move them from somewhere else) have your own preparation.

UI Access and Authentication
----------------------------

In addition to running on localhost, Fooocus can also expose its UI in two ways:

-   Local UI listener: use `--listen` (specify port e.g. with `--port 8888`).
-   API access: use `--share` (registers an endpoint at `.gradio.live`).

In both ways the access is unauthenticated by default. You can add basic authentication by creating a file called `auth.json` in the main directory, which contains a list of JSON objects with the keys `user` and `pass` (see example in auth-example.json).

List of "Hidden" Tricks
-----------------------

Click to see a list of tricks. Those are based on SDXL and are not very up-to-date with latest models.

1.  GPT2-based prompt expansion as a dynamic style "Fooocus V2". (similar to Midjourney's hidden pre-processing and "raw" mode, or the LeonardoAI's Prompt Magic).
2.  Native refiner swap inside one single k-sampler. The advantage is that the refiner model can now reuse the base model's momentum (or ODE's history parameters) collected from k-sampling to achieve more coherent sampling. In Automatic1111's high-res fix and ComfyUI's node system, the base model and refiner use two independent k-samplers, which means the momentum is largely wasted, and the sampling continuity is broken. Fooocus uses its own advanced k-diffusion sampling that ensures seamless, native, and continuous swap in a refiner setup. (Update Aug 13: Actually, I discussed this with Automatic1111 several days ago, and it seems that the “native refiner swap inside one single k-sampler” is merged into the dev branch of webui. Great!)
3.  Negative ADM guidance. Because the highest resolution level of XL Base does not have cross attentions, the positive and negative signals for XL's highest resolution level cannot receive enough contrasts during the CFG sampling, causing the results to look a bit plastic or overly smooth in certain cases. Fortunately, since the XL's highest resolution level is still conditioned on image aspect ratios (ADM), we can modify the adm on the positive/negative side to compensate for the lack of CFG contrast in the highest resolution level. (Update Aug 16, the IOS App Draw Things will support Negative ADM Guidance. Great!)
4.  We implemented a carefully tuned variation of Section 5.1 of "Improving Sample Quality of Diffusion Models Using Self-Attention Guidance". The weight is set to very low, but this is Fooocus's final guarantee to make sure that the XL will never yield an overly smooth or plastic appearance (examples here). This can almost eliminate all cases for which XL still occasionally produces overly smooth results, even with negative ADM guidance. (Update 2023 Aug 18, the Gaussian kernel of SAG is changed to an anisotropic kernel for better structure preservation and fewer artifacts.)
5.  We modified the style templates a bit and added the "cinematic-default".
6.  We tested the "sd\_xl\_offset\_example-lora\_1.0.safetensors" and it seems that when the lora weight is below 0.5, the results are always better than XL without lora.
7.  The parameters of samplers are carefully tuned.
8.  Because XL uses positional encoding for generation resolution, images generated by several fixed resolutions look a bit better than those from arbitrary resolutions (because the positional encoding is not very good at handling int numbers that are unseen during training). This suggests that the resolutions in UI may be hard coded for best results.
9.  Separated prompts for two different text encoders seem unnecessary. Separated prompts for the base model and refiner may work, but the effects are random, and we refrain from implementing this.
10.  The DPM family seems well-suited for XL since XL sometimes generates overly smooth texture, but the DPM family sometimes generates overly dense detail in texture. Their joint effect looks neutral and appealing to human perception.
11.  A carefully designed system for balancing multiple styles as well as prompt expansion.
12.  Using automatic1111's method to normalize prompt emphasizing. This significantly improves results when users directly copy prompts from civitai.
13.  The joint swap system of the refiner now also supports img2img and upscale in a seamless way.
14.  CFG Scale and TSNR correction (tuned for SDXL) when CFG is bigger than 10.

Customization
-------------

After the first time you run Fooocus, a config file will be generated at `Fooocus\config.txt`. This file can be edited to change the model path or default parameters.

For example, an edited `Fooocus\config.txt` (this file will be generated after the first launch) may look like this:

{
    "path\_checkpoints": "D:\\\\Fooocus\\\\models\\\\checkpoints",
    "path\_loras": "D:\\\\Fooocus\\\\models\\\\loras",
    "path\_embeddings": "D:\\\\Fooocus\\\\models\\\\embeddings",
    "path\_vae\_approx": "D:\\\\Fooocus\\\\models\\\\vae\_approx",
    "path\_upscale\_models": "D:\\\\Fooocus\\\\models\\\\upscale\_models",
    "path\_inpaint": "D:\\\\Fooocus\\\\models\\\\inpaint",
    "path\_controlnet": "D:\\\\Fooocus\\\\models\\\\controlnet",
    "path\_clip\_vision": "D:\\\\Fooocus\\\\models\\\\clip\_vision",
    "path\_fooocus\_expansion": "D:\\\\Fooocus\\\\models\\\\prompt\_expansion\\\\fooocus\_expansion",
    "path\_outputs": "D:\\\\Fooocus\\\\outputs",
    "default\_model": "realisticStockPhoto\_v10.safetensors",
    "default\_refiner": "",
    "default\_loras": \[\["lora\_filename\_1.safetensors", 0.5\], \["lora\_filename\_2.safetensors", 0.5\]\],
    "default\_cfg\_scale": 3.0,
    "default\_sampler": "dpmpp\_2m",
    "default\_scheduler": "karras",
    "default\_negative\_prompt": "low quality",
    "default\_positive\_prompt": "",
    "default\_styles": \[
        "Fooocus V2",
        "Fooocus Photograph",
        "Fooocus Negative"
    \]
}

Many other keys, formats, and examples are in `Fooocus\config_modification_tutorial.txt` (this file will be generated after the first launch).

Consider twice before you really change the config. If you find yourself breaking things, just delete `Fooocus\config.txt`. Fooocus will go back to default.

A safer way is just to try "run\_anime.bat" or "run\_realistic.bat" - they should already be good enough for different tasks.

Note that `user_path_config.txt` is deprecated and will be removed soon. (Edit: it is already removed.)

### All CMD Flags

```
entry_with_update.py  [-h] [--listen [IP]] [--port PORT]
                      [--disable-header-check [ORIGIN]]
                      [--web-upload-size WEB_UPLOAD_SIZE]
                      [--hf-mirror HF_MIRROR]
                      [--external-working-path PATH [PATH ...]]
                      [--output-path OUTPUT_PATH]
                      [--temp-path TEMP_PATH] [--cache-path CACHE_PATH]
                      [--in-browser] [--disable-in-browser]
                      [--gpu-device-id DEVICE_ID]
                      [--async-cuda-allocation | --disable-async-cuda-allocation]
                      [--disable-attention-upcast]
                      [--all-in-fp32 | --all-in-fp16]
                      [--unet-in-bf16 | --unet-in-fp16 | --unet-in-fp8-e4m3fn | --unet-in-fp8-e5m2]
                      [--vae-in-fp16 | --vae-in-fp32 | --vae-in-bf16]
                      [--vae-in-cpu]
                      [--clip-in-fp8-e4m3fn | --clip-in-fp8-e5m2 | --clip-in-fp16 | --clip-in-fp32]
                      [--directml [DIRECTML_DEVICE]]
                      [--disable-ipex-hijack]
                      [--preview-option [none,auto,fast,taesd]]
                      [--attention-split | --attention-quad | --attention-pytorch]
                      [--disable-xformers]
                      [--always-gpu | --always-high-vram | --always-normal-vram | --always-low-vram | --always-no-vram | --always-cpu [CPU_NUM_THREADS]]
                      [--always-offload-from-vram]
                      [--pytorch-deterministic] [--disable-server-log]
                      [--debug-mode] [--is-windows-embedded-python]
                      [--disable-server-info] [--multi-user] [--share]
                      [--preset PRESET] [--disable-preset-selection]
                      [--language LANGUAGE]
                      [--disable-offload-from-vram] [--theme THEME]
                      [--disable-image-log] [--disable-analytics]
                      [--disable-metadata] [--disable-preset-download]
                      [--disable-enhance-output-sorting]
                      [--enable-auto-describe-image]
                      [--always-download-new-model]
                      [--rebuild-hash-cache [CPU_NUM_THREADS]]
```

Inline Prompt Features
----------------------

### Wildcards

Example prompt: `__color__ flower`

Processed for positive and negative prompt.

Selects a random wildcard from a predefined list of options, in this case the `wildcards/color.txt` file. The wildcard will be replaced with a random color (randomness based on seed). You can also disable randomness and process a wildcard file from top to bottom by enabling the checkbox `Read wildcards in order` in Developer Debug Mode.

Wildcards can be nested and combined, and multiple wildcards can be used in the same prompt (example see `wildcards/color_flower.txt`).

### Array Processing

Example prompt: `[[red, green, blue]] flower`

Processed only for positive prompt.

Processes the array from left to right, generating a separate image for each element in the array. In this case 3 images would be generated, one for each color. Increase the image number to 3 to generate all 3 variants.

Arrays can not be nested, but multiple arrays can be used in the same prompt. Does support inline LoRAs as array elements!

### Inline LoRAs

Example prompt: `flower <lora:sunflowers:1.2>`

Processed only for positive prompt.

Applies a LoRA to the prompt. The LoRA file must be located in the `models/loras` directory.

Advanced Features
-----------------

Click here to browse the advanced features.

Forks
-----

Below are some Forks to Fooocus:

Fooocus' forks

fenneishi/Fooocus-Control  
runew0lf/RuinedFooocus  
MoonRide303/Fooocus-MRE  
mashb1t/Fooocus  
and so on ...

Thanks
------

Many thanks to twri and 3Diva and Marc K3nt3L for creating additional SDXL styles available in Fooocus.

The project starts from a mixture of Stable Diffusion WebUI and ComfyUI codebases.

Also, thanks daswer123 for contributing the Canvas Zoom!

Update Log
----------

The log is here.

Localization/Translation/I18N
-----------------------------

You can put json files in the `language` folder to translate the user interface.

For example, below is the content of `Fooocus/language/example.json`:

{
  "Generate": "生成",
  "Input Image": "入力画像",
  "Advanced": "고급",
  "SAI 3D Model": "SAI 3D Modèle"
}

If you add `--language example` arg, Fooocus will read `Fooocus/language/example.json` to translate the UI.

For example, you can edit the ending line of Windows `run.bat` as

```
.\python_embeded\python.exe -s Fooocus\entry_with_update.py --language example
```

Or `run_anime.bat` as

```
.\python_embeded\python.exe -s Fooocus\entry_with_update.py --language example --preset anime
```

Or `run_realistic.bat` as

```
.\python_embeded\python.exe -s Fooocus\entry_with_update.py --language example --preset realistic
```

For practical translation, you may create your own file like `Fooocus/language/jp.json` or `Fooocus/language/cn.json` and then use flag `--language jp` or `--language cn`. Apparently, these files do not exist now. **We need your help to create these files!**

Note that if no `--language` is given and at the same time `Fooocus/language/default.json` exists, Fooocus will always load `Fooocus/language/default.json` for translation. By default, the file `Fooocus/language/default.json` does not exist.
