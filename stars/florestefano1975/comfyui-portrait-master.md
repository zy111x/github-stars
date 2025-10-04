---
project: comfyui-portrait-master
stars: 1127
description: This node was designed to help AI image creators to generate prompts for human portraits.
url: https://github.com/florestefano1975/comfyui-portrait-master
---

ComfyUI Portrait Master
=======================

A comprehensive custom node for ComfyUI designed to help AI image creators generate detailed and professional prompts for human portraits. This powerful tool provides modular control over every aspect of portrait generation, from basic character features to advanced skin details and styling options.

🌟 Features
-----------

### Modular Node System

-   **Portrait Master: Base Character** - Core character attributes (gender, age, nationality, body type, facial features)
-   **Portrait Master: Skin Details** - Advanced skin rendering controls (pores, imperfections, natural skin effects)
-   **Portrait Master: Style & Pose** - Lighting, poses, clothing, and artistic styles
-   **Portrait Master: Make-up** - Comprehensive makeup options with color controls
-   **Portrait Master: Face Generator** - Simplified face generation for quick results
-   **Portrait Master: Prompt Styler** - Converts weighted prompts to conversational style for modern models

### Advanced Features

-   **Preset System** - Save and load your favorite configurations across all nodes
-   **Random Generation** - Built-in randomization for creative exploration
-   **Weight Control** - Fine-tune the influence of each parameter
-   **Nationality Mixing** - Blend multiple ethnicities with precise control
-   **Comprehensive Lists** - Over 1000+ options across all categories

### Extensive Options Library

-   **192 Nationalities** - Complete global coverage
-   **65+ Artistic Styles** - From vintage photography to modern effects
-   **100+ Hair Styles** - Comprehensive hair options
-   **70+ Lighting Types** - Professional lighting setups
-   **87+ Model Poses** - Diverse pose library
-   **And much more** - Eyes, lips, makeup, clothing, expressions, and body types

📋 Requirements
---------------

-   **ComfyUI** - Latest version recommended
-   **Python 3.8+** - Required for ComfyUI
-   **Compatible Models** - Works with SD1.5, SDXL, Flux, and other modern checkpoints
-   **Optional Dependencies**:
    -   ComfyUI Manager - For easy installation
    -   ComfyUI Prompt Control - For nationality mixing syntax

🚀 Installation
---------------

### Method 1: ComfyUI Manager (Recommended)

1.  Open ComfyUI Manager
2.  Search for `florestefano1975` in the search bar
3.  Click the install button for "ComfyUI Portrait Master"
4.  Restart ComfyUI

### Method 2: Manual Installation

1.  Navigate to your ComfyUI `custom_nodes` folder
2.  Open terminal/command prompt in this directory
3.  Run: `git clone https://github.com/florestefano1975/comfyui-portrait-master`
4.  Restart ComfyUI

### Method 3: Manual Update

To update an existing installation:

1.  Navigate to the `comfyui-portrait-master` folder
2.  Run: `git pull`
3.  Restart ComfyUI

**⚠️ Warning**: The update command will overwrite any custom modifications you've made to the files.

📖 Usage Guide
--------------

### Basic Workflow

1.  **Add Base Character Node** - Start with `PortraitMasterBaseCharacter` for core features
2.  **Chain Additional Nodes** - Connect `PortraitMasterSkinDetails`, `PortraitMasterStylePose`, etc.
3.  **Configure Parameters** - Adjust sliders and dropdowns to your preferences
4.  **Connect to Prompt** - Link the final output to your `CLIPTextEncode` node
5.  **Generate** - Run your workflow to create detailed portrait prompts

### Node Descriptions

#### Portrait Master: Base Character

Controls fundamental character attributes:

-   **Shot Types**: Head portrait, full body, close-up, etc.
-   **Demographics**: Gender, age, nationality with mixing support
-   **Physical Features**: Body type, breast/butt size, facial features
-   **Hair & Beard**: Style, color, length options
-   **Facial Details**: Expression, face shape, asymmetry controls

#### Portrait Master: Skin Details

Advanced skin rendering controls:

-   **Skin Quality**: Natural skin, bare face, washed/dried effects
-   **Details**: Skin pores, imperfections, acne, tanned skin
-   **Features**: Dimples, freckles, moles, wrinkles
-   **Eyes**: Detailed eye rendering, iris details, pupil shape

#### Portrait Master: Style & Pose

Environmental and artistic controls:

-   **Poses**: 87+ model poses from the pose library
-   **Clothing**: General clothing and female lingerie options
-   **Lighting**: 70+ professional lighting setups with direction control
-   **Styles**: 65+ artistic styles from vintage to modern
-   **Enhancement**: Photorealism improvement toggle

#### Portrait Master: Make-up

Comprehensive makeup system:

-   **Styles**: Various makeup styles and color schemes
-   **Individual Elements**: Eyeshadow, eyeliner, mascara, blush, lipstick, lip gloss
-   **Color Control**: Specific makeup color selection

#### Portrait Master: Face Generator

Simplified face generation for quick results:

-   **Optimized Settings**: Pre-configured for frontal, symmetrical faces
-   **Essential Controls**: Gender, age, nationality, basic features
-   **Clean Output**: Neutral expressions with professional lighting

#### Portrait Master: Prompt Styler

Converts traditional weighted prompts to conversational style:

-   **Style Options**: Descriptive, cinematic, illustrative, artistic, documentary, fashion
-   **Modern Compatibility**: Optimized for Flux, Sana, HiDream, and similar models
-   **Clean Conversion**: Removes SD1.5/SDXL weight syntax

🎛️ Preset System
-----------------

### Saving Presets

1.  Configure all parameters in a node to your desired settings
2.  Scroll to the `--- PRESETS ---` section at the bottom
3.  Enter a descriptive name in the `save_preset_as` field (e.g., "Cyberpunk Hero")
4.  Toggle `save_preset` to `True`
5.  Queue the prompt to save the preset
6.  Turn `save_preset` back to `False`

### Loading Presets

1.  Use the `load_preset` dropdown menu
2.  Select from your saved presets for that specific node
3.  Queue the prompt to apply the preset settings

### Preset Storage

Presets are stored in `comfyui-portrait-master/presets/` with separate subdirectories for each node type:

-   `presets/BaseCharacter/`
-   `presets/SkinDetails/`
-   `presets/StylePose/`
-   `presets/Makeup/`
-   `presets/FaceGenerator/`

🎲 Random Generation
--------------------

Enable creative exploration with built-in randomization:

-   **Random Option**: Select "random 🎲" from any dropdown
-   **Seed Control**: Connect a seed input for reproducible randomization
-   **Weight Control**: Use sliders to control the influence of random selections

📊 Available Parameters
-----------------------

### Core Parameters

Parameter

Description

Options

`shot`

Portrait framing type

8 options (Head portrait, Full body, etc.)

`gender`

Character gender

Man, Woman

`age`

Character age

Multiple age ranges

`nationality_1` & `nationality_2`

Ethnicity options

192 nationalities

`body_type`

Body build

Multiple body types

`eyes_color`

Eye color

10+ color options

`hair_style`

Hairstyle

100+ styles

`hair_color`

Hair color

21 color options

### Advanced Controls

-   **Weight Parameters**: Fine-tune influence with decimal precision (0.00-2.00)
-   **Nationality Mixing**: Blend ethnicities using `nationality_mix` slider (0.0-1.0)
-   **Facial Asymmetry**: Add realistic facial variations
-   **Skin Details**: Control pores, imperfections, and natural skin effects
-   **Lighting Direction**: Professional lighting setups with directional control

🖼️ Model Pose Library
----------------------

The `model_pose` option provides 87+ predefined poses:

-   Disable ControlNet when using pose library
-   Adjust framing with the `shot` parameter
-   Poses are optimized for portrait generation

💡 Tips & Best Practices
------------------------

### Optimal Settings

-   **Skin Details**: High values may override shot settings - reduce if needed
-   **Eye Details**: Balance with shot type to avoid conflicts
-   **Negative Prompts**: Add `(closeup, close up, close-up:1.5)` if detail parameters interfere
-   **Model Selection**: Use high-quality checkpoints for best results

### Recommended Models

-   **FormulaXL 2.0** - Excellent for photorealistic portraits
-   **SDXL Models** - Generally provide superior portrait quality
-   **Flux Models** - Use with Prompt Styler for optimal results

### Workflow Integration

-   **Compatible with Prompt Composer**
-   **Chain multiple Portrait Master nodes** for complex character creation
-   **Use presets** to maintain consistency across projects

🔧 Troubleshooting
------------------

### Common Issues

**Node not appearing in ComfyUI**

-   Ensure ComfyUI is restarted after installation
-   Check that files are in the correct `custom_nodes` directory
-   Verify no Python errors in the console

**Random options not working**

-   Connect a seed input to enable randomization
-   Ensure "random 🎲" is selected in dropdown menus
-   Check that the seed is properly connected

**Preset system not working**

-   Verify write permissions in the ComfyUI directory
-   Check that the `presets` folder is created automatically
-   Ensure preset names don't contain invalid characters

**Nationality mixing not working**

-   Install ComfyUI Prompt Control for full syntax support
-   Use the format: `[nationality_1:nationality_2:mix_value]`
-   This feature is experimental and may not work with all models

**Output prompts too complex**

-   Use the Prompt Styler node to simplify for modern models
-   Reduce weight values for subtle effects
-   Set unused parameters to "-" to exclude them

### Performance Issues

-   **Large workflows**: Consider using fewer nodes simultaneously
-   **Memory usage**: High detail settings may increase VRAM requirements
-   **Generation speed**: Complex prompts may slow down inference

📝 Version History
------------------

### Version 3.5.0 (Latest)

-   ✨ **New**: Face Generator node for simplified face creation
-   ✨ **Enhanced**: Base Character node with breast and butt size options
-   🔧 **Improved**: Overall code performance and stability

### Version 3.4.0

-   ✨ **New**: Comprehensive preset system across all nodes
-   ✨ **New**: Prompt Styler node for modern model compatibility
-   🔄 **Restructured**: Split into five specialized modules
-   🔧 **Improved**: Code optimization and performance enhancements

### Previous Versions

See CHANGELOG.md for complete version history.

🤝 Contributing
---------------

We welcome contributions to improve Portrait Master:

-   **Bug Reports**: Use GitHub Issues for bug reports
-   **Feature Requests**: Suggest new features via GitHub Issues
-   **Code Contributions**: Submit pull requests with improvements
-   **Documentation**: Help improve documentation and examples

📄 License
----------

This project is licensed under the terms specified in the LICENSE file.

💖 Support the Project
----------------------

If you find Portrait Master useful, please consider supporting the developer:

**☕ Support on Ko-fi**

Your support helps maintain and improve this project for the entire community.

🔗 Related Projects
-------------------

-   **ComfyUI Prompt Composer** - Advanced prompt composition tools
-   **ComfyUI HiDiffusion** - High-resolution diffusion enhancements

📚 Additional Resources
-----------------------

-   **Legacy Documentation** - Documentation for Portrait Master 2.9.2
-   **Example Workflows** - Sample workflows for different use cases
-   **Developer Website** - More projects and resources

* * *

**Created by AI Wiz Art (Stefano Flore)**  
**Version 3.5.0** | **GitHub Repository**
