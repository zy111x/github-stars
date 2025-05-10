---
project: comfyui-portrait-master
stars: 1047
description: This node was designed to help AI image creators to generate prompts for human portraits.
url: https://github.com/florestefano1975/comfyui-portrait-master
---

ComfyUI Portrait Master
=======================

This nodes was designed to help AI image creators to generate prompts for human portraits.

Version 3.3.0
-------------

-   The node has been divided into **five** separate modules: **Base Character**, **Skin Details**, **Style & Pose**, **Make-up**, **Prompt Styler**.
-   New node: **Prompt Styler**. This node removes the declarative weights typical of the SD1.5 and SDXL models to adapt the prompt with a conversational style, more suitable for modern checkpoints such as Flux, Sana, Hidream.
-   Improved code and performance.

Donations and marketplace
-------------------------

**_If this project is useful to you and you like it, please consider a small donation to the author_**

➡️ https://ko-fi.com/stefanoflore75

Overview of the custom node
---------------------------

Install from ComfyUI Manager
----------------------------

-   Type _florestefano1975_ on the search bar of ComfyUI Manager.
-   Click the install button.

Manual installation and update instructions
-------------------------------------------

### Install

To install comfyui-portrait-master:

1.  open the terminal on the ComfyUI `custom_nodes` folder
2.  digit: `git clone https://github.com/florestefano1975/comfyui-portrait-master`
3.  restart ComfyUI

### Update

To update comfyui-portrait-master:

1.  open the terminal on the ComfyUI `comfyui-portrait-master` folder
2.  digit: `git pull`
3.  restart ComfyUI

**Warning: update command overwrites files modified and customized by users.**

Available Options
-----------------

-   **shot**: sets the shot type
-   **shot\_weight**: coefficient (weight) of the shot type
-   **gender**: sets the character's gender
-   **androgynous**: coefficient (weight) to change the genetic appearance of the character
-   **age**: the age of the subject portrayed
-   **nationality\_1**: sets first ethnicity
-   **nationality\_2**: sets second ethnicity
-   **nationality\_mix**: controls the mix between nationality\_1 and nationality\_2, according to the syntax \[nationality\_1: nationality\_2: nationality\_mix\]. This syntax is not natively recognized by ComfyUI; we therefore recommend the use of comfyui-prompt-control. _This feature is still being tested_.
-   **body\_type**: set the type of the body
-   **body\_type\_weight**: coefficient (weight) of the body type
-   **model\_pose**: select the pose from the list
-   **eyes\_color**: set the eyes color
-   **eyes\_shape**: set the eyes shape
-   **lips\_color**: set the lips color
-   **lips\_shape**: set the lips shape
-   **makeup**: set the makeup
-   **clothes**: set the clothes
-   **facial\_expression** / **facial\_expression\_weight**: apply and adjust character's expression
-   **face\_shape** / **face\_shape\_weight**: apply and adjust the face shape
-   **facial\_asymmetry**: coefficient (weight) to set the asymmetry of the face
-   **hair\_color**: set the hair color
-   **hairs\_style**: hairstyle selector
-   **hairs\_length**: hair length selector
-   **disheveled**: coefficient (weight) of the disheveled effect
-   **natural\_skin**: coefficient (weight) for control the natural aspect of the skin
-   **bare\_face**: coefficient (weight) for control bare face level
-   **washed\_face**: coefficient (weight) for control washed face level
-   **dried\_face**: coefficient (weight) for control dried face level
-   **skin\_details**: coefficient (weight) of the skin detail
-   **skin\_pores**: coefficient (weight) of the skin pores
-   **dimples**: coefficient (weight) for controlling facial dimples
-   **freckles**: coefficient (weight) of the freckles
-   **moles**: coefficient (weight) for the presence of moles on the skin
-   **skin\_imperfections**: coefficient (weight) to introduce skin imperfections
-   **eyes\_details**: coefficient (weight) for the general detail of the eyes
-   **iris\_details**: coefficient (weight) for the iris detail
-   **circular\_iris**: coefficient (weight) to increase or force the circular shape of the iris
-   **circular\_pupil**: coefficient (weight) to increase or force the circular shape of the pupil
-   **light\_type**: set global illumination
-   **light\_direction**: set the direction of the light. _This feature is still being tested_
-   **photorealism\_improvement**: experimental option to improve photorealism and the final result
-   **style\_1** / **style\_1\_weight**: apply and adjust the first style
-   **style\_1** / **style\_1\_weight**: apply and adjust the second style

Parameters with null value (-) would be not included in the prompt generated.

To enable the casual generation options, connect a random seed generator to the nodes.

The nodes generates output string.

Model Pose Library
------------------

The _model\_pose_ option allows you to use a list of default poses. You need to disable ControlNet, if in use, in this case and adjust framing with the _shot_ option.

Practical advice
----------------

Using high values for the skin and eye detail control parameters may override the setting for the chosen shot. In this case it is advisable to reduce the parameter values for the skin and eyes, or insert in the negative prompt (closeup, close up, close-up:1.5), modifying the weight as needed.

Notes
-----

The effectiveness of the parameters depends on the quality of the checkpoint used.

For advanced photorealism we recommend FormulaXL 2.0.

Portrait Master is compatible with Prompt Composer.

Portrait Master 2.9.2 (legacy) documentation

Other projects
--------------

-   ComfyUI Prompt Composer
-   ComfyUI HiDiffusion
