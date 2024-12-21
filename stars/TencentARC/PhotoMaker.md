---
project: PhotoMaker
stars: 9655
description: PhotoMaker [CVPR 2024]
url: https://github.com/TencentARC/PhotoMaker
---

PhotoMaker: Customizing Realistic Human Photos via Stacked ID Embedding
-----------------------------------------------------------------------

\[Paper\]   \[Project Page\]   \[Model Card\]  

\[💥New 🤗 **Demo (PhotoMaker V2)**\]   \[🤗 Demo (Realistic)\]   \[🤗 Demo (Stylization)\]  

\[Replicate Demo (Realistic)\]   \[Replicate Demo (Stylization)\]   \[Jittor version\]

**PhotoMaker-V2** is supported by the HunyuanDiT team.

🥳 We release **PhotoMaker V2**. Please refer to comparisons between PhotoMaker V1, PhotoMaker V2, IP-Adapter-FaceID-plus-V2, and InstantID. Please watch this video for how to use our demo. For PhotoMaker V2 ComfyUI nodes, please refer to the Related Resources

* * *

### 🌠 **Key Features:**

1.  Rapid customization **within seconds**, with no additional LoRA training.
2.  Ensures impressive ID fidelity, offering diversity, promising text controllability, and high-quality generation.
3.  Can serve as an **Adapter** to collaborate with other Base Models alongside LoRA modules in community.

* * *

❗❗ Note: If there are any PhotoMaker based resources and applications, please leave them in the discussion and we will list them in the Related Resources section in README file. Now we know the implementation of **Replicate**, **Windows**, **ComfyUI**, and **WebUI**. Thank you all!

🚩 **New Features/Updates**
---------------------------

-   ✅ July 22, 2024. 💥 We release PhotoMaker V2 with **improved ID fidelity**. At the same time, it still maintains the generation quality, editability, and compatibility with any plugins that PhotoMaker V1 offers. We have also provided scripts for integration with ControlNet, T2I-Adapter, and IP-Adapter to offer excellent control capabilities. Users can further customize scripts for upgrades, such as combining with LCM for acceleration or integrating with IP-Adapter-FaceID or InstantID to further improve ID fidelity. We will release technical report of PhotoMaker V2 soon. Please refer to this doc for a quick preview.
-   ✅ January 20, 2024. An **important** note: For those GPUs that do not support bfloat16, please change this line to `torch_dtype = torch.float16`, the speed will be **greatly improved** (1min/img (before) vs. 14s/img (after) on V100). The minimum GPU memory requirement for PhotoMaker is **11G** (Please refer to this link for saving GPU memory).
-   ✅ January 15, 2024. We release PhotoMaker.

* * *

🔥 **Examples**
---------------

### Realistic generation

-   
-   **PhotoMaker notebook demo**

### Stylization generation

Note: only change the base model and add the LoRA modules for better stylization

-   
-   **PhotoMaker-Style notebook demo**

🔧 Dependencies and Installation
================================

-   Python >= 3.8 (Recommend to use Anaconda or Miniconda)
-   PyTorch >= 2.0.0

conda create --name photomaker python=3.10
conda activate photomaker
pip install -U pip

# Install requirements
pip install -r requirements.txt

# Install photomaker
pip install git+https://github.com/TencentARC/PhotoMaker.git

Then you can run the following command to use it

from photomaker import PhotoMakerStableDiffusionXLPipeline

⏬ Download Models
=================

The model will be automatically downloaded through the following two lines:

from huggingface\_hub import hf\_hub\_download
photomaker\_path \= hf\_hub\_download(repo\_id\="TencentARC/PhotoMaker", filename\="photomaker-v1.bin", repo\_type\="model")

You can also choose to download manually from this url.

💻 How to Test
==============

Use like diffusers
------------------

-   Dependency

import torch
import os
from diffusers.utils import load\_image
from diffusers import EulerDiscreteScheduler
from photomaker import PhotoMakerStableDiffusionXLPipeline

\### Load base model
pipe \= PhotoMakerStableDiffusionXLPipeline.from\_pretrained(
    base\_model\_path,  \# can change to any base model based on SDXL
    torch\_dtype\=torch.bfloat16, 
    use\_safetensors\=True, 
    variant\="fp16"
).to(device)

\### Load PhotoMaker checkpoint
pipe.load\_photomaker\_adapter(
    os.path.dirname(photomaker\_path),
    subfolder\="",
    weight\_name\=os.path.basename(photomaker\_path),
    trigger\_word\="img"  \# define the trigger word
)     

pipe.scheduler \= EulerDiscreteScheduler.from\_config(pipe.scheduler.config)

\### Also can cooperate with other LoRA modules
\# pipe.load\_lora\_weights(os.path.dirname(lora\_path), weight\_name=lora\_model\_name, adapter\_name="xl\_more\_art-full")
\# pipe.set\_adapters(\["photomaker", "xl\_more\_art-full"\], adapter\_weights=\[1.0, 0.5\])

pipe.fuse\_lora()

-   Input ID Images

\### define the input ID images
input\_folder\_name \= './examples/newton\_man'
image\_basename\_list \= os.listdir(input\_folder\_name)
image\_path\_list \= sorted(\[os.path.join(input\_folder\_name, basename) for basename in image\_basename\_list\])

input\_id\_images \= \[\]
for image\_path in image\_path\_list:
    input\_id\_images.append(load\_image(image\_path))

-   Generation

\# Note that the trigger word \`img\` must follow the class word for personalization
prompt \= "a half-body portrait of a man img wearing the sunglasses in Iron man suit, best quality"
negative\_prompt \= "(asymmetry, worst quality, low quality, illustration, 3d, 2d, painting, cartoons, sketch), open mouth, grayscale"
generator \= torch.Generator(device\=device).manual\_seed(42)
images \= pipe(
    prompt\=prompt,
    input\_id\_images\=input\_id\_images,
    negative\_prompt\=negative\_prompt,
    num\_images\_per\_prompt\=1,
    num\_inference\_steps\=num\_steps,
    start\_merge\_step\=10,
    generator\=generator,
).images\[0\]
gen\_images.save('out\_photomaker.png')

Start a local gradio demo
-------------------------

Run the following command:

python gradio\_demo/app.py

You could customize this script in this file.

If you want to run it on MAC, you should follow this Instruction and then run the app.py.

Usage Tips:
-----------

-   Upload more photos of the person to be customized to improve ID fidelity. If the input is Asian face(s), maybe consider adding 'Asian' before the class word, e.g., `Asian woman img`
-   When stylizing, does the generated face look too realistic? Adjust the Style strength to 30-50, the larger the number, the less ID fidelity, but the stylization ability will be better. You could also try out other base models or LoRAs with good stylization effects.
-   Reduce the number of generated images and sampling steps for faster speed. However, please keep in mind that reducing the sampling steps may compromise the ID fidelity.

Related Resources
=================

### Replicate demo of PhotoMaker:

1.  Demo link, run PhotoMaker on replicate, provided by @yorickvP and @jd7h.
2.  Demo link (style version).

### WebUI version of PhotoMaker:

1.  **stable-diffusion-webui-forge**: https://github.com/lllyasviel/stable-diffusion-webui-forge provided by @Lvmin Zhang
2.  **Fooocus App**: Fooocus-inswapper provided by @machineminded

### Windows version of PhotoMaker:

1.  bmaltais/PhotoMaker by @bmaltais, easy to deploy PhotoMaker on Windows. The description can be found in this link.
2.  sdbds/PhotoMaker-for-windows by @sdbds.

### ComfyUI:

1.  🔥 **Official Implementation by ComfyUI**: https://github.com/comfyanonymous/ComfyUI/commit/d1533d9c0f1dde192f738ef1b745b15f49f41e02
2.  https://github.com/ZHO-ZHO-ZHO/ComfyUI-PhotoMaker
3.  https://github.com/StartHua/Comfyui-Mine-PhotoMaker
4.  https://github.com/shiimizu/ComfyUI-PhotoMaker

### ComfyUI (for PhotoMaker V2):

1.  https://github.com/shiimizu/ComfyUI-PhotoMaker-Plus
2.  https://github.com/edwios/ComfyUI-PhotoMakerV2-ZHO/tree/main
3.  https://openart.ai/workflows/shalacai/photomakerv2/fttT4ztRM85JxBJ2eUyr
4.  https://github.com/zhangp365/ComfyUI\_photomakerV2\_native

### Purely C/C++/CUDA version of PhotoMaker:

1.  stable-diffusion.cpp by @bssrdf.

### Other Applications / Web Demos

1.  **Wisemodel 始智 (Easy to use in China)** https://wisemodel.cn/space/gradio/photomaker
2.  **OpenXLab (Easy to use in China)**: https://openxlab.org.cn/apps/detail/camenduru/PhotoMaker by @camenduru.
3.  **Colab**: https://github.com/camenduru/PhotoMaker-colab by @camenduru
4.  **Monster API**: https://monsterapi.ai/playground?model=photo-maker
5.  **Pinokio**: https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/photomaker

### Graido demo in 45 lines

Provided by @Gradio

🤗 Acknowledgements
===================

-   PhotoMaker is co-hosted by Tencent ARC Lab and Nankai University MCG-NKU.
-   Inspired from many excellent demos and repos, including IP-Adapter, multimodalart/Ip-Adapter-FaceID, FastComposer, and T2I-Adapter. Thanks for their great work!
-   Thanks to the HunyuanDiT team for their generous support and suggestions!
-   Thanks to the Venus team in Tencent PCG for their feedback and suggestions.
-   Thanks to the HuggingFace team for their generous support!

Disclaimer
==========

This project strives to impact the domain of AI-driven image generation positively. Users are granted the freedom to create images using this tool, but they are expected to comply with local laws and utilize it responsibly. The developers do not assume any responsibility for potential misuse by users.

BibTeX
======

If you find PhotoMaker useful for your research and applications, please cite using this BibTeX:

@inproceedings{li2023photomaker,
  title\={PhotoMaker: Customizing Realistic Human Photos via Stacked ID Embedding},
  author\={Li, Zhen and Cao, Mingdeng and Wang, Xintao and Qi, Zhongang and Cheng, Ming-Ming and Shan, Ying},
  booktitle\={IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
  year\={2024}
}
