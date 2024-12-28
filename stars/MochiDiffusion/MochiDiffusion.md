---
project: MochiDiffusion
stars: 7518
description: Run Stable Diffusion on Mac natively
url: https://github.com/MochiDiffusion/MochiDiffusion
---

Mochi Diffusion
===============

Run Stable Diffusion on Mac natively

English, 한국어, 中文

Features
--------

-   Apple's Core ML Stable Diffusion implementation to achieve maximum performance and speed on Apple Silicon based Macs while reducing memory requirements
-   Extremely fast and memory efficient (~150MB with Neural Engine)
-   Runs well on all Apple Silicon Macs by fully utilizing Neural Engine
-   Generate images locally and completely offline
-   Generate images based on an existing image (commonly known as Image2Image)
-   Generate images using ControlNet
-   Generated images are saved with prompt info inside EXIF metadata (view in Finder's Get Info window)
-   Convert generated images to high resolution (using RealESRGAN)
-   Autosave & restore images
-   Use custom Stable Diffusion Core ML models
-   No worries about pickled models
-   macOS native app using SwiftUI

Downloads
---------

Latest version

Community models

ControlNet models

Stable Diffusion 1.5 with ControlNet

When using a model for the very first time, it may take up to 2 minutes for the Neural Engine to compile a cached version. Afterwards, subsequent generations will be much faster.

Compute Unit
------------

-   `CPU & Neural Engine` provides a good balance between speed and low memory usage
-   `CPU & GPU` may be faster on M1 Max, Ultra and later but will use more memory

Depending on the option chosen, you will need to use the correct model version (see Models section for details).

Models
------

You will need to convert or download Core ML models in order to use Mochi Diffusion.

1.  Convert or download Core ML models
    -   `split_einsum` version is compatible with all compute unit options including Neural Engine
    -   `original` version is only compatible with `CPU & GPU` option
2.  By default, the app's model folder will be created under your home directory. This location can be customized under Settings
3.  In the model folder, create a new folder with the name you'd like displayed in the app then move or extract the converted models here
4.  Your directory structure should look like this:

```
<Home Directory>/
└── MochiDiffusion/
    └── models/
        ├── stable-diffusion-2-1_split-einsum_compiled/
        │   ├── merges.txt
        │   ├── TextEncoder.mlmodelc
        │   ├── Unet.mlmodelc
        │   ├── VAEDecoder.mlmodelc
        │   ├── VAEEncoder.mlmodelc
        │   └── vocab.json
        ├── ...
        └── ...
```

Compatibility
-------------

-   Apple Silicon (M1 and later)
-   macOS Sonoma 14.0 and later
-   Xcode 15.2 (to build)

Privacy
-------

All generation happens locally and absolutely nothing is sent to the cloud.

Contributing
------------

Mochi Diffusion is always looking for contributions, whether it's through bug reports, code, or new translations.

-   If you find a bug, or would like to suggest a new feature or enhancement, try searching for your problem first as it helps avoid duplicates. If you can't find your issue, feel free to create a new issue. Don't create an issue for your question as those are for bugs and feature requests only.
    
-   If you're looking to contribute code, feel free to open a Pull Request. I recommend installing swift-format to catch lint issues.
    
-   If you'd like to translate Mochi Diffusion to your language, please visit the project page on Crowdin. You can create an account for free and start translating and/or approving.
    

Credits
-------

-   Apple's Core ML Stable Diffusion implementation
-   Hugging Face's Swift UI sample implementation
-   App Icon by Zabriskije
