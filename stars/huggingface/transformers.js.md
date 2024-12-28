---
project: transformers.js
stars: 12470
description: State-of-the-art Machine Learning for the web. Run 🤗 Transformers directly in your browser, with no need for a server!
url: https://github.com/huggingface/transformers.js
---

  
  

### 

State-of-the-art Machine Learning for the Web

Run 🤗 Transformers directly in your browser, with no need for a server!

Transformers.js is designed to be functionally equivalent to Hugging Face's transformers python library, meaning you can run the same pretrained models using a very similar API. These models support common tasks in different modalities, such as:

-   📝 **Natural Language Processing**: text classification, named entity recognition, question answering, language modeling, summarization, translation, multiple choice, and text generation.
-   🖼️ **Computer Vision**: image classification, object detection, segmentation, and depth estimation.
-   🗣️ **Audio**: automatic speech recognition, audio classification, and text-to-speech.
-   🐙 **Multimodal**: embeddings, zero-shot audio classification, zero-shot image classification, and zero-shot object detection.

Transformers.js uses ONNX Runtime to run models in the browser. The best part about it, is that you can easily convert your pretrained PyTorch, TensorFlow, or JAX models to ONNX using 🤗 Optimum.

For more information, check out the full documentation.

Installation
------------

To install via NPM, run:

npm i @huggingface/transformers

Alternatively, you can use it in vanilla JS, without any bundler, by using a CDN or static hosting. For example, using ES Modules, you can import the library with:

<script type\="module"\>
    import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.2.4';
</script\>

Quick tour
----------

It's super simple to translate from existing code! Just like the python library, we support the `pipeline` API. Pipelines group together a pretrained model with preprocessing of inputs and postprocessing of outputs, making it the easiest way to run models with the library.

**Python (original)**

**Javascript (ours)**

from transformers import pipeline

\# Allocate a pipeline for sentiment-analysis
pipe \= pipeline('sentiment-analysis')

out \= pipe('I love transformers!')
\# \[{'label': 'POSITIVE', 'score': 0.999806941}\]

import { pipeline } from '@huggingface/transformers';

// Allocate a pipeline for sentiment-analysis
const pipe \= await pipeline('sentiment-analysis');

const out \= await pipe('I love transformers!');
// \[{'label': 'POSITIVE', 'score': 0.999817686}\]

You can also use a different model by specifying the model id or path as the second argument to the `pipeline` function. For example:

// Use a different model for sentiment-analysis
const pipe \= await pipeline('sentiment-analysis', 'Xenova/bert-base-multilingual-uncased-sentiment');

By default, when running in the browser, the model will be run on your CPU (via WASM). If you would like to run the model on your GPU (via WebGPU), you can do this by setting `device: 'webgpu'`, for example:

// Run the model on WebGPU
const pipe \= await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english', {
  device: 'webgpu',
});

For more information, check out the WebGPU guide.

Warning

The WebGPU API is still experimental in many browsers, so if you run into any issues, please file a bug report.

In resource-constrained environments, such as web browsers, it is advisable to use a quantized version of the model to lower bandwidth and optimize performance. This can be achieved by adjusting the `dtype` option, which allows you to select the appropriate data type for your model. While the available options may vary depending on the specific model, typical choices include `"fp32"` (default for WebGPU), `"fp16"`, `"q8"` (default for WASM), and `"q4"`. For more information, check out the quantization guide.

// Run the model at 4-bit quantization
const pipe \= await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english', {
  dtype: 'q4',
});

Examples
--------

Want to jump straight in? Get started with one of our sample applications/templates, which can be found here.

Name

Description

Links

Whisper Web

Speech recognition w/ Whisper

code, demo

Doodle Dash

Real-time sketch-recognition game

blog, code, demo

Code Playground

In-browser code completion website

code, demo

Semantic Image Search (client-side)

Search for images with text

code, demo

Semantic Image Search (server-side)

Search for images with text (Supabase)

code, demo

Vanilla JavaScript

In-browser object detection

video, code, demo

React

Multilingual translation website

code, demo

Text to speech (client-side)

In-browser speech synthesis

code, demo

Browser extension

Text classification extension

code

Electron

Text classification application

code

Next.js (client-side)

Sentiment analysis (in-browser inference)

code, demo

Next.js (server-side)

Sentiment analysis (Node.js inference)

code, demo

Node.js

Sentiment analysis API

code

Demo site

A collection of demos

code, demo

Check out the Transformers.js template on Hugging Face to get started in one click!

Custom usage
------------

By default, Transformers.js uses hosted pretrained models and precompiled WASM binaries, which should work out-of-the-box. You can customize this as follows:

### Settings

import { env } from '@huggingface/transformers';

// Specify a custom location for models (defaults to '/models/').
env.localModelPath \= '/path/to/models/';

// Disable the loading of remote models from the Hugging Face Hub:
env.allowRemoteModels \= false;

// Set location of .wasm files. Defaults to use a CDN.
env.backends.onnx.wasm.wasmPaths \= '/path/to/files/';

For a full list of available settings, check out the API Reference.

### Convert your models to ONNX

We recommend using our conversion script to convert your PyTorch, TensorFlow, or JAX models to ONNX in a single command. Behind the scenes, it uses 🤗 Optimum to perform conversion and quantization of your model.

python -m scripts.convert --quantize --model\_id <model\_name\_or\_path\>

For example, convert and quantize bert-base-uncased using:

python -m scripts.convert --quantize --model\_id bert-base-uncased

This will save the following files to `./models/`:

```
bert-base-uncased/
├── config.json
├── tokenizer.json
├── tokenizer_config.json
└── onnx/
    ├── model.onnx
    └── model_quantized.onnx
```

For the full list of supported architectures, see the Optimum documentation.

Supported tasks/models
----------------------

Here is the list of all tasks and architectures currently supported by Transformers.js. If you don't see your task/model listed here or it is not yet supported, feel free to open up a feature request here.

To find compatible models on the Hub, select the "transformers.js" library tag in the filter menu (or visit this link). You can refine your search by selecting the task you're interested in (e.g., text-classification).

### Tasks

#### Natural Language Processing

Task

ID

Description

Supported?

Fill-Mask

`fill-mask`

Masking some of the words in a sentence and predicting which words should replace those masks.

✅ (docs)  
(models)

Question Answering

`question-answering`

Retrieve the answer to a question from a given text.

✅ (docs)  
(models)

Sentence Similarity

`sentence-similarity`

Determining how similar two texts are.

✅ (docs)  
(models)

Summarization

`summarization`

Producing a shorter version of a document while preserving its important information.

✅ (docs)  
(models)

Table Question Answering

`table-question-answering`

Answering a question about information from a given table.

❌

Text Classification

`text-classification` or `sentiment-analysis`

Assigning a label or class to a given text.

✅ (docs)  
(models)

Text Generation

`text-generation`

Producing new text by predicting the next word in a sequence.

✅ (docs)  
(models)

Text-to-text Generation

`text2text-generation`

Converting one text sequence into another text sequence.

✅ (docs)  
(models)

Token Classification

`token-classification` or `ner`

Assigning a label to each token in a text.

✅ (docs)  
(models)

Translation

`translation`

Converting text from one language to another.

✅ (docs)  
(models)

Zero-Shot Classification

`zero-shot-classification`

Classifying text into classes that are unseen during training.

✅ (docs)  
(models)

Feature Extraction

`feature-extraction`

Transforming raw data into numerical features that can be processed while preserving the information in the original dataset.

✅ (docs)  
(models)

#### Vision

Task

ID

Description

Supported?

Depth Estimation

`depth-estimation`

Predicting the depth of objects present in an image.

✅ (docs)  
(models)

Image Classification

`image-classification`

Assigning a label or class to an entire image.

✅ (docs)  
(models)

Image Segmentation

`image-segmentation`

Divides an image into segments where each pixel is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.

✅ (docs)  
(models)

Image-to-Image

`image-to-image`

Transforming a source image to match the characteristics of a target image or a target image domain.

✅ (docs)  
(models)

Mask Generation

`mask-generation`

Generate masks for the objects in an image.

❌

Object Detection

`object-detection`

Identify objects of certain defined classes within an image.

✅ (docs)  
(models)

Video Classification

n/a

Assigning a label or class to an entire video.

❌

Unconditional Image Generation

n/a

Generating images with no condition in any context (like a prompt text or another image).

❌

Image Feature Extraction

`image-feature-extraction`

Transforming raw data into numerical features that can be processed while preserving the information in the original image.

✅ (docs)  
(models)

#### Audio

Task

ID

Description

Supported?

Audio Classification

`audio-classification`

Assigning a label or class to a given audio.

✅ (docs)  
(models)

Audio-to-Audio

n/a

Generating audio from an input audio source.

❌

Automatic Speech Recognition

`automatic-speech-recognition`

Transcribing a given audio into text.

✅ (docs)  
(models)

Text-to-Speech

`text-to-speech` or `text-to-audio`

Generating natural-sounding speech given text input.

✅ (docs)  
(models)

#### Tabular

Task

ID

Description

Supported?

Tabular Classification

n/a

Classifying a target category (a group) based on set of attributes.

❌

Tabular Regression

n/a

Predicting a numerical value given a set of attributes.

❌

#### Multimodal

Task

ID

Description

Supported?

Document Question Answering

`document-question-answering`

Answering questions on document images.

✅ (docs)  
(models)

Image-to-Text

`image-to-text`

Output text from a given image.

✅ (docs)  
(models)

Text-to-Image

`text-to-image`

Generates images from input text.

❌

Visual Question Answering

`visual-question-answering`

Answering open-ended questions based on an image.

❌

Zero-Shot Audio Classification

`zero-shot-audio-classification`

Classifying audios into classes that are unseen during training.

✅ (docs)  
(models)

Zero-Shot Image Classification

`zero-shot-image-classification`

Classifying images into classes that are unseen during training.

✅ (docs)  
(models)

Zero-Shot Object Detection

`zero-shot-object-detection`

Identify objects of classes that are unseen during training.

✅ (docs)  
(models)

#### Reinforcement Learning

Task

ID

Description

Supported?

Reinforcement Learning

n/a

Learning from actions by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback.

✅

### Models

1.  **ALBERT** (from Google Research and the Toyota Technological Institute at Chicago) released with the paper ALBERT: A Lite BERT for Self-supervised Learning of Language Representations, by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma, Radu Soricut.
2.  **Audio Spectrogram Transformer** (from MIT) released with the paper AST: Audio Spectrogram Transformer by Yuan Gong, Yu-An Chung, James Glass.
3.  **BART** (from Facebook) released with the paper BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer.
4.  **BEiT** (from Microsoft) released with the paper BEiT: BERT Pre-Training of Image Transformers by Hangbo Bao, Li Dong, Furu Wei.
5.  **BERT** (from Google) released with the paper BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova.
6.  **Blenderbot** (from Facebook) released with the paper Recipes for building an open-domain chatbot by Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu, Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston.
7.  **BlenderbotSmall** (from Facebook) released with the paper Recipes for building an open-domain chatbot by Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu, Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston.
8.  **BLOOM** (from BigScience workshop) released by the BigScience Workshop.
9.  **CamemBERT** (from Inria/Facebook/Sorbonne) released with the paper CamemBERT: a Tasty French Language Model by Louis Martin\*, Benjamin Muller\*, Pedro Javier Ortiz Suárez\*, Yoann Dupont, Laurent Romary, Éric Villemonte de la Clergerie, Djamé Seddah and Benoît Sagot.
10.  **Chinese-CLIP** (from OFA-Sys) released with the paper Chinese CLIP: Contrastive Vision-Language Pretraining in Chinese by An Yang, Junshu Pan, Junyang Lin, Rui Men, Yichang Zhang, Jingren Zhou, Chang Zhou.
11.  **CLAP** (from LAION-AI) released with the paper Large-scale Contrastive Language-Audio Pretraining with Feature Fusion and Keyword-to-Caption Augmentation by Yusong Wu, Ke Chen, Tianyu Zhang, Yuchen Hui, Taylor Berg-Kirkpatrick, Shlomo Dubnov.
12.  **CLIP** (from OpenAI) released with the paper Learning Transferable Visual Models From Natural Language Supervision by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever.
13.  **CLIPSeg** (from University of Göttingen) released with the paper Image Segmentation Using Text and Image Prompts by Timo Lüddecke and Alexander Ecker.
14.  **CodeGen** (from Salesforce) released with the paper A Conversational Paradigm for Program Synthesis by Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, Caiming Xiong.
15.  **CodeLlama** (from MetaAI) released with the paper Code Llama: Open Foundation Models for Code by Baptiste Rozière, Jonas Gehring, Fabian Gloeckle, Sten Sootla, Itai Gat, Xiaoqing Ellen Tan, Yossi Adi, Jingyu Liu, Tal Remez, Jérémy Rapin, Artyom Kozhevnikov, Ivan Evtimov, Joanna Bitton, Manish Bhatt, Cristian Canton Ferrer, Aaron Grattafiori, Wenhan Xiong, Alexandre Défossez, Jade Copet, Faisal Azhar, Hugo Touvron, Louis Martin, Nicolas Usunier, Thomas Scialom, Gabriel Synnaeve.
16.  **Cohere** (from Cohere) released with the paper Command-R: Retrieval Augmented Generation at Production Scale by Cohere.
17.  **ConvBERT** (from YituTech) released with the paper ConvBERT: Improving BERT with Span-based Dynamic Convolution by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng Yan.
18.  **ConvNeXT** (from Facebook AI) released with the paper A ConvNet for the 2020s by Zhuang Liu, Hanzi Mao, Chao-Yuan Wu, Christoph Feichtenhofer, Trevor Darrell, Saining Xie.
19.  **ConvNeXTV2** (from Facebook AI) released with the paper ConvNeXt V2: Co-designing and Scaling ConvNets with Masked Autoencoders by Sanghyun Woo, Shoubhik Debnath, Ronghang Hu, Xinlei Chen, Zhuang Liu, In So Kweon, Saining Xie.
20.  **DeBERTa** (from Microsoft) released with the paper DeBERTa: Decoding-enhanced BERT with Disentangled Attention by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen.
21.  **DeBERTa-v2** (from Microsoft) released with the paper DeBERTa: Decoding-enhanced BERT with Disentangled Attention by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen.
22.  **Decision Transformer** (from Berkeley/Facebook/Google) released with the paper Decision Transformer: Reinforcement Learning via Sequence Modeling by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.
23.  **DeiT** (from Facebook) released with the paper Training data-efficient image transformers & distillation through attention by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre Sablayrolles, Hervé Jégou.
24.  **Depth Anything** (from University of Hong Kong and TikTok) released with the paper Depth Anything: Unleashing the Power of Large-Scale Unlabeled Data by Lihe Yang, Bingyi Kang, Zilong Huang, Xiaogang Xu, Jiashi Feng, Hengshuang Zhao.
25.  **Depth Pro** (from Apple) released with the paper Depth Pro: Sharp Monocular Metric Depth in Less Than a Second by Aleksei Bochkovskii, Amaël Delaunoy, Hugo Germain, Marcel Santos, Yichao Zhou, Stephan R. Richter, Vladlen Koltun.
26.  **DETR** (from Facebook) released with the paper End-to-End Object Detection with Transformers by Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, Sergey Zagoruyko.
27.  **DINOv2** (from Meta AI) released with the paper DINOv2: Learning Robust Visual Features without Supervision by Maxime Oquab, Timothée Darcet, Théo Moutakanni, Huy Vo, Marc Szafraniec, Vasil Khalidov, Pierre Fernandez, Daniel Haziza, Francisco Massa, Alaaeldin El-Nouby, Mahmoud Assran, Nicolas Ballas, Wojciech Galuba, Russell Howes, Po-Yao Huang, Shang-Wen Li, Ishan Misra, Michael Rabbat, Vasu Sharma, Gabriel Synnaeve, Hu Xu, Hervé Jegou, Julien Mairal, Patrick Labatut, Armand Joulin, Piotr Bojanowski.
28.  **DINOv2 with Registers** (from Meta AI) released with the paper DINOv2 with Registers by Timothée Darcet, Maxime Oquab, Julien Mairal, Piotr Bojanowski.
29.  **DistilBERT** (from HuggingFace), released together with the paper DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter by Victor Sanh, Lysandre Debut and Thomas Wolf. The same method has been applied to compress GPT2 into DistilGPT2, RoBERTa into DistilRoBERTa, Multilingual BERT into DistilmBERT and a German version of DistilBERT.
30.  **DiT** (from Microsoft Research) released with the paper DiT: Self-supervised Pre-training for Document Image Transformer by Junlong Li, Yiheng Xu, Tengchao Lv, Lei Cui, Cha Zhang, Furu Wei.
31.  **Donut** (from NAVER), released together with the paper OCR-free Document Understanding Transformer by Geewook Kim, Teakgyu Hong, Moonbin Yim, Jeongyeon Nam, Jinyoung Park, Jinyeong Yim, Wonseok Hwang, Sangdoo Yun, Dongyoon Han, Seunghyun Park.
32.  **DPT** (from Intel Labs) released with the paper Vision Transformers for Dense Prediction by René Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
33.  **EfficientNet** (from Google Brain) released with the paper EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks by Mingxing Tan, Quoc V. Le.
34.  **ELECTRA** (from Google Research/Stanford University) released with the paper ELECTRA: Pre-training text encoders as discriminators rather than generators by Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning.
35.  **ESM** (from Meta AI) are transformer protein language models. **ESM-1b** was released with the paper Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences by Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, C. Lawrence Zitnick, Jerry Ma, and Rob Fergus. **ESM-1v** was released with the paper Language models enable zero-shot prediction of the effects of mutations on protein function by Joshua Meier, Roshan Rao, Robert Verkuil, Jason Liu, Tom Sercu and Alexander Rives. **ESM-2 and ESMFold** were released with the paper Language models of protein sequences at the scale of evolution enable accurate structure prediction by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie, Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido, Alexander Rives.
36.  **EXAONE** (from LG AI Research) released with the papers EXAONE 3.0 7.8B Instruction Tuned Language Model and EXAONE 3.5: Series of Large Language Models for Real-world Use Cases by the LG AI Research team.
37.  **Falcon** (from Technology Innovation Institute) by Almazrouei, Ebtesam and Alobeidli, Hamza and Alshamsi, Abdulaziz and Cappelli, Alessandro and Cojocaru, Ruxandra and Debbah, Merouane and Goffinet, Etienne and Heslow, Daniel and Launay, Julien and Malartic, Quentin and Noune, Badreddine and Pannier, Baptiste and Penedo, Guilherme.
38.  **FastViT** (from Apple) released with the paper FastViT: A Fast Hybrid Vision Transformer using Structural Reparameterization by Pavan Kumar Anasosalu Vasu, James Gabriel, Jeff Zhu, Oncel Tuzel and Anurag Ranjan.
39.  **FLAN-T5** (from Google AI) released in the repository google-research/t5x by Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Eric Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, Albert Webson, Shixiang Shane Gu, Zhuyun Dai, Mirac Suzgun, Xinyun Chen, Aakanksha Chowdhery, Sharan Narang, Gaurav Mishra, Adams Yu, Vincent Zhao, Yanping Huang, Andrew Dai, Hongkun Yu, Slav Petrov, Ed H. Chi, Jeff Dean, Jacob Devlin, Adam Roberts, Denny Zhou, Quoc V. Le, and Jason Wei
40.  **Florence2** (from Microsoft) released with the paper Florence-2: Advancing a Unified Representation for a Variety of Vision Tasks by Bin Xiao, Haiping Wu, Weijian Xu, Xiyang Dai, Houdong Hu, Yumao Lu, Michael Zeng, Ce Liu, Lu Yuan.
41.  **Gemma** (from Google) released with the paper Gemma: Open Models Based on Gemini Technology and Research by the Gemma Google team.
42.  **Gemma2** (from Google) released with the paper Gemma2: Open Models Based on Gemini Technology and Research by the Gemma Google team.
43.  **GLPN** (from KAIST) released with the paper Global-Local Path Networks for Monocular Depth Estimation with Vertical CutDepth by Doyeon Kim, Woonghyun Ga, Pyungwhan Ahn, Donggyu Joo, Sehwan Chun, Junmo Kim.
44.  **GPT Neo** (from EleutherAI) released in the repository EleutherAI/gpt-neo by Sid Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy.
45.  **GPT NeoX** (from EleutherAI) released with the paper GPT-NeoX-20B: An Open-Source Autoregressive Language Model by Sid Black, Stella Biderman, Eric Hallahan, Quentin Anthony, Leo Gao, Laurence Golding, Horace He, Connor Leahy, Kyle McDonell, Jason Phang, Michael Pieler, USVSN Sai Prashanth, Shivanshu Purohit, Laria Reynolds, Jonathan Tow, Ben Wang, Samuel Weinbach
46.  **GPT-2** (from OpenAI) released with the paper Language Models are Unsupervised Multitask Learners by Alec Radford\*, Jeffrey Wu\*, Rewon Child, David Luan, Dario Amodei\*\* and Ilya Sutskever\*\*.
47.  **GPT-J** (from EleutherAI) released in the repository kingoflolz/mesh-transformer-jax by Ben Wang and Aran Komatsuzaki.
48.  **GPTBigCode** (from BigCode) released with the paper SantaCoder: don't reach for the stars! by Loubna Ben Allal, Raymond Li, Denis Kocetkov, Chenghao Mou, Christopher Akiki, Carlos Munoz Ferrandis, Niklas Muennighoff, Mayank Mishra, Alex Gu, Manan Dey, Logesh Kumar Umapathi, Carolyn Jane Anderson, Yangtian Zi, Joel Lamy Poirier, Hailey Schoelkopf, Sergey Troshin, Dmitry Abulkhanov, Manuel Romero, Michael Lappert, Francesco De Toni, Bernardo García del Río, Qian Liu, Shamik Bose, Urvashi Bhattacharyya, Terry Yue Zhuo, Ian Yu, Paulo Villegas, Marco Zocca, Sourab Mangrulkar, David Lansky, Huu Nguyen, Danish Contractor, Luis Villa, Jia Li, Dzmitry Bahdanau, Yacine Jernite, Sean Hughes, Daniel Fried, Arjun Guha, Harm de Vries, Leandro von Werra.
49.  **Granite** (from IBM) released with the paper Power Scheduler: A Batch Size and Token Number Agnostic Learning Rate Scheduler by Yikang Shen, Matthew Stallone, Mayank Mishra, Gaoyuan Zhang, Shawn Tan, Aditya Prasad, Adriana Meza Soria, David D. Cox, Rameswar Panda.
50.  **GroupViT** (from UCSD, NVIDIA) released with the paper GroupViT: Semantic Segmentation Emerges from Text Supervision by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
51.  **HerBERT** (from Allegro.pl, AGH University of Science and Technology) released with the paper KLEJ: Comprehensive Benchmark for Polish Language Understanding by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, Ireneusz Gawlik.
52.  **Hiera** (from Meta) released with the paper Hiera: A Hierarchical Vision Transformer without the Bells-and-Whistles by Chaitanya Ryali, Yuan-Ting Hu, Daniel Bolya, Chen Wei, Haoqi Fan, Po-Yao Huang, Vaibhav Aggarwal, Arkabandhu Chowdhury, Omid Poursaeed, Judy Hoffman, Jitendra Malik, Yanghao Li, Christoph Feichtenhofer.
53.  **Hubert** (from Facebook) released with the paper HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan Salakhutdinov, Abdelrahman Mohamed.
54.  **I-JEPA** (from Meta) released with the paper Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture by Mahmoud Assran, Quentin Duval, Ishan Misra, Piotr Bojanowski, Pascal Vincent, Michael Rabbat, Yann LeCun, Nicolas Ballas.
55.  **Idefics3** (from Hugging Face) released with the paper Building and better understanding vision-language models: insights and future directions by Hugo Laurençon, Andrés Marafioti, Victor Sanh, Léo Tronchon.
56.  **JAIS** (from Core42) released with the paper Jais and Jais-chat: Arabic-Centric Foundation and Instruction-Tuned Open Generative Large Language Models by Neha Sengupta, Sunil Kumar Sahu, Bokang Jia, Satheesh Katipomu, Haonan Li, Fajri Koto, William Marshall, Gurpreet Gosal, Cynthia Liu, Zhiming Chen, Osama Mohammed Afzal, Samta Kamboj, Onkar Pandit, Rahul Pal, Lalit Pradhan, Zain Muhammad Mujahid, Massa Baali, Xudong Han, Sondos Mahmoud Bsharat, Alham Fikri Aji, Zhiqiang Shen, Zhengzhong Liu, Natalia Vassilieva, Joel Hestness, Andy Hock, Andrew Feldman, Jonathan Lee, Andrew Jackson, Hector Xuguang Ren, Preslav Nakov, Timothy Baldwin, Eric Xing.
57.  **Janus** (from DeepSeek) released with the paper Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation Chengyue Wu, Xiaokang Chen, Zhiyu Wu, Yiyang Ma, Xingchao Liu, Zizheng Pan, Wen Liu, Zhenda Xie, Xingkai Yu, Chong Ruan, Ping Luo.
58.  **JinaCLIP** (from Jina AI) released with the paper Jina CLIP: Your CLIP Model Is Also Your Text Retriever by Andreas Koukounas, Georgios Mastrapas, Michael Günther, Bo Wang, Scott Martens, Isabelle Mohr, Saba Sturua, Mohammad Kalim Akram, Joan Fontanals Martínez, Saahil Ognawala, Susana Guzman, Maximilian Werk, Nan Wang, Han Xiao.
59.  **LongT5** (from Google AI) released with the paper LongT5: Efficient Text-To-Text Transformer for Long Sequences by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung, Yinfei Yang.
60.  **LLaMA** (from The FAIR team of Meta AI) released with the paper LLaMA: Open and Efficient Foundation Language Models by Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, Aurelien Rodriguez, Armand Joulin, Edouard Grave, Guillaume Lample.
61.  **Llama2** (from The FAIR team of Meta AI) released with the paper Llama2: Open Foundation and Fine-Tuned Chat Models by Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, Nikolay Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti Bhosale, Dan Bikel, Lukas Blecher, Cristian Canton Ferrer, Moya Chen, Guillem Cucurull, David Esiobu, Jude Fernandes, Jeremy Fu, Wenyin Fu, Brian Fuller, Cynthia Gao, Vedanuj Goswami, Naman Goyal, Anthony Hartshorn, Saghar Hosseini, Rui Hou, Hakan Inan, Marcin Kardas, Viktor Kerkez Madian Khabsa, Isabel Kloumann, Artem Korenev, Punit Singh Koura, Marie-Anne Lachaux, Thibaut Lavril, Jenya Lee, Diana Liskovich, Yinghai Lu, Yuning Mao, Xavier Martinet, Todor Mihaylov, Pushka rMishra, Igor Molybog, Yixin Nie, Andrew Poulton, Jeremy Reizenstein, Rashi Rungta, Kalyan Saladi, Alan Schelten, Ruan Silva, Eric Michael Smith, Ranjan Subramanian, Xiaoqing EllenTan, Binh Tang, Ross Taylor, Adina Williams, Jian Xiang Kuan, Puxin Xu, Zheng Yan, Iliyan Zarov, Yuchen Zhang, Angela Fan, Melanie Kambadur, Sharan Narang, Aurelien Rodriguez, Robert Stojnic, Sergey Edunov, Thomas Scialom.
62.  **LLaVa** (from Microsoft Research & University of Wisconsin-Madison) released with the paper Visual Instruction Tuning by Haotian Liu, Chunyuan Li, Yuheng Li and Yong Jae Lee.
63.  **LLaVA-OneVision** (from ByteDance & NTU & CUHK & HKUST) released with the paper LLaVA-OneVision: Easy Visual Task Transfer by Bo Li, Yuanhan Zhang, Dong Guo, Renrui Zhang, Feng Li, Hao Zhang, Kaichen Zhang, Yanwei Li, Ziwei Liu, Chunyuan Li
64.  **M2M100** (from Facebook) released with the paper Beyond English-Centric Multilingual Machine Translation by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky, Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.
65.  **MarianMT** Machine translation models trained using OPUS data by Jörg Tiedemann. The Marian Framework is being developed by the Microsoft Translator Team.
66.  **MaskFormer** (from Meta and UIUC) released with the paper Per-Pixel Classification is Not All You Need for Semantic Segmentation by Bowen Cheng, Alexander G. Schwing, Alexander Kirillov.
67.  **mBART** (from Facebook) released with the paper Multilingual Denoising Pre-training for Neural Machine Translation by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov, Marjan Ghazvininejad, Mike Lewis, Luke Zettlemoyer.
68.  **mBART-50** (from Facebook) released with the paper Multilingual Translation with Extensible Multilingual Pretraining and Finetuning by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav Chaudhary, Jiatao Gu, Angela Fan.
69.  **MusicGen** (from Meta) released with the paper Simple and Controllable Music Generation by Jade Copet, Felix Kreuk, Itai Gat, Tal Remez, David Kant, Gabriel Synnaeve, Yossi Adi and Alexandre Défossez.
70.  **MGP-STR** (from Alibaba Research) released with the paper Multi-Granularity Prediction for Scene Text Recognition by Peng Wang, Cheng Da, and Cong Yao.
71.  **Mistral** (from Mistral AI) by The Mistral AI team: Albert Jiang, Alexandre Sablayrolles, Arthur Mensch, Chris Bamford, Devendra Singh Chaplot, Diego de las Casas, Florian Bressand, Gianna Lengyel, Guillaume Lample, Lélio Renard Lavaud, Lucile Saulnier, Marie-Anne Lachaux, Pierre Stock, Teven Le Scao, Thibaut Lavril, Thomas Wang, Timothée Lacroix, William El Sayed.
72.  **MMS** (from Facebook) released with the paper Scaling Speech Technology to 1,000+ Languages by Vineel Pratap, Andros Tjandra, Bowen Shi, Paden Tomasello, Arun Babu, Sayani Kundu, Ali Elkahky, Zhaoheng Ni, Apoorv Vyas, Maryam Fazel-Zarandi, Alexei Baevski, Yossi Adi, Xiaohui Zhang, Wei-Ning Hsu, Alexis Conneau, Michael Auli.
73.  **MobileBERT** (from CMU/Google Brain) released with the paper MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny Zhou.
74.  **MobileCLIP** (from Apple) released with the paper MobileCLIP: Fast Image-Text Models through Multi-Modal Reinforced Training by Pavan Kumar Anasosalu Vasu, Hadi Pouransari, Fartash Faghri, Raviteja Vemulapalli, Oncel Tuzel.
75.  **MobileLLM** (from Meta) released with the paper MobileLLM: Optimizing Sub-billion Parameter Language Models for On-Device Use Cases by Zechun Liu, Changsheng Zhao, Forrest Iandola, Chen Lai, Yuandong Tian, Igor Fedorov, Yunyang Xiong, Ernie Chang, Yangyang Shi, Raghuraman Krishnamoorthi, Liangzhen Lai, Vikas Chandra.
76.  **MobileNetV1** (from Google Inc.) released with the paper MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications by Andrew G. Howard, Menglong Zhu, Bo Chen, Dmitry Kalenichenko, Weijun Wang, Tobias Weyand, Marco Andreetto, Hartwig Adam.
77.  **MobileNetV2** (from Google Inc.) released with the paper MobileNetV2: Inverted Residuals and Linear Bottlenecks by Mark Sandler, Andrew Howard, Menglong Zhu, Andrey Zhmoginov, Liang-Chieh Chen.
78.  **MobileNetV3** (from Google Inc.) released with the paper Searching for MobileNetV3 by Andrew Howard, Mark Sandler, Grace Chu, Liang-Chieh Chen, Bo Chen, Mingxing Tan, Weijun Wang, Yukun Zhu, Ruoming Pang, Vijay Vasudevan, Quoc V. Le, Hartwig Adam.
79.  **MobileNetV4** (from Google Inc.) released with the paper MobileNetV4 - Universal Models for the Mobile Ecosystem by Danfeng Qin, Chas Leichner, Manolis Delakis, Marco Fornoni, Shixin Luo, Fan Yang, Weijun Wang, Colby Banbury, Chengxi Ye, Berkin Akin, Vaibhav Aggarwal, Tenghui Zhu, Daniele Moro, Andrew Howard.
80.  **MobileViT** (from Apple) released with the paper MobileViT: Light-weight, General-purpose, and Mobile-friendly Vision Transformer by Sachin Mehta and Mohammad Rastegari.
81.  **MobileViTV2** (from Apple) released with the paper Separable Self-attention for Mobile Vision Transformers by Sachin Mehta and Mohammad Rastegari.
82.  **ModernBERT** (from Answer.AI) released with the paper Smarter, Better, Faster, Longer: A Modern Bidirectional Encoder for Fast, Memory Efficient, and Long Context Finetuning and Inference by Benjamin Warner, Antoine Chaffin, Benjamin Clavié, Orion Weller, Oskar Hallström, Said Taghadouini, Alexis Gallagher, Raja Biswas, Faisal Ladhak, Tom Aarsen, Nathan Cooper, Griffin Adams, Jeremy Howard, Iacopo Poli.
83.  **Moondream1** released in the repository moondream by vikhyat.
84.  **Moonshine** (from Useful Sensors) released with the paper Moonshine: Speech Recognition for Live Transcription and Voice Commands by Nat Jeffries, Evan King, Manjunath Kudlur, Guy Nicholson, James Wang, Pete Warden.
85.  **MPNet** (from Microsoft Research) released with the paper MPNet: Masked and Permuted Pre-training for Language Understanding by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu.
86.  **MPT** (from MosaicML) released with the repository llm-foundry by the MosaicML NLP Team.
87.  **MT5** (from Google AI) released with the paper mT5: A massively multilingual pre-trained text-to-text transformer by Linting Xue, Noah Constant, Adam Roberts, Mihir Kale, Rami Al-Rfou, Aditya Siddhant, Aditya Barua, Colin Raffel.
88.  **NLLB** (from Meta) released with the paper No Language Left Behind: Scaling Human-Centered Machine Translation by the NLLB team.
89.  **Nougat** (from Meta AI) released with the paper Nougat: Neural Optical Understanding for Academic Documents by Lukas Blecher, Guillem Cucurull, Thomas Scialom, Robert Stojnic.
90.  **OLMo** (from Ai2) released with the paper OLMo: Accelerating the Science of Language Models by Dirk Groeneveld, Iz Beltagy, Pete Walsh, Akshita Bhagia, Rodney Kinney, Oyvind Tafjord, Ananya Harsh Jha, Hamish Ivison, Ian Magnusson, Yizhong Wang, Shane Arora, David Atkinson, Russell Authur, Khyathi Raghavi Chandu, Arman Cohan, Jennifer Dumas, Yanai Elazar, Yuling Gu, Jack Hessel, Tushar Khot, William Merrill, Jacob Morrison, Niklas Muennighoff, Aakanksha Naik, Crystal Nam, Matthew E. Peters, Valentina Pyatkin, Abhilasha Ravichander, Dustin Schwenk, Saurabh Shah, Will Smith, Emma Strubell, Nishant Subramani, Mitchell Wortsman, Pradeep Dasigi, Nathan Lambert, Kyle Richardson, Luke Zettlemoyer, Jesse Dodge, Kyle Lo, Luca Soldaini, Noah A. Smith, Hannaneh Hajishirzi.
91.  **OLMo2** (from Ai2) released with the blog OLMo 2: The best fully open language model to date by the Ai2 OLMo team.
92.  **OpenELM** (from Apple) released with the paper OpenELM: An Efficient Language Model Family with Open-source Training and Inference Framework by Sachin Mehta, Mohammad Hossein Sekhavat, Qingqing Cao, Maxwell Horton, Yanzi Jin, Chenfan Sun, Iman Mirzadeh, Mahyar Najibi, Dmitry Belenko, Peter Zatloukal, Mohammad Rastegari.
93.  **OPT** (from Meta AI) released with the paper OPT: Open Pre-trained Transformer Language Models by Susan Zhang, Stephen Roller, Naman Goyal, Mikel Artetxe, Moya Chen, Shuohui Chen et al.
94.  **OWL-ViT** (from Google AI) released with the paper Simple Open-Vocabulary Object Detection with Vision Transformers by Matthias Minderer, Alexey Gritsenko, Austin Stone, Maxim Neumann, Dirk Weissenborn, Alexey Dosovitskiy, Aravindh Mahendran, Anurag Arnab, Mostafa Dehghani, Zhuoran Shen, Xiao Wang, Xiaohua Zhai, Thomas Kipf, and Neil Houlsby.
95.  **OWLv2** (from Google AI) released with the paper Scaling Open-Vocabulary Object Detection by Matthias Minderer, Alexey Gritsenko, Neil Houlsby.
96.  **PaliGemma** (from Google) released with the papers PaliGemma: A versatile 3B VLM for transfer and PaliGemma 2: A Family of Versatile VLMs for Transfer by the PaliGemma Google team.
97.  **PatchTSMixer** (from IBM) released with the paper TSMixer: Lightweight MLP-Mixer Model for Multivariate Time Series Forecasting by Vijay Ekambaram, Arindam Jati, Nam Nguyen, Phanwadee Sinthong, Jayant Kalagnanam.
98.  **PatchTST** (from Princeton University, IBM) released with the paper A Time Series is Worth 64 Words: Long-term Forecasting with Transformers by Yuqi Nie, Nam H. Nguyen, Phanwadee Sinthong, Jayant Kalagnanam.
99.  **Phi** (from Microsoft) released with the papers - Textbooks Are All You Need by Suriya Gunasekar, Yi Zhang, Jyoti Aneja, Caio César Teodoro Mendes, Allie Del Giorno, Sivakanth Gopi, Mojan Javaheripi, Piero Kauffmann, Gustavo de Rosa, Olli Saarikivi, Adil Salim, Shital Shah, Harkirat Singh Behl, Xin Wang, Sébastien Bubeck, Ronen Eldan, Adam Tauman Kalai, Yin Tat Lee and Yuanzhi Li, Textbooks Are All You Need II: phi-1.5 technical report by Yuanzhi Li, Sébastien Bubeck, Ronen Eldan, Allie Del Giorno, Suriya Gunasekar and Yin Tat Lee.
100.  **Phi3** (from Microsoft) released with the paper Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone by Marah Abdin, Sam Ade Jacobs, Ammar Ahmad Awan, Jyoti Aneja, Ahmed Awadallah, Hany Awadalla, Nguyen Bach, Amit Bahree, Arash Bakhtiari, Harkirat Behl, Alon Benhaim, Misha Bilenko, Johan Bjorck, Sébastien Bubeck, Martin Cai, Caio César Teodoro Mendes, Weizhu Chen, Vishrav Chaudhary, Parul Chopra, Allie Del Giorno, Gustavo de Rosa, Matthew Dixon, Ronen Eldan, Dan Iter, Amit Garg, Abhishek Goswami, Suriya Gunasekar, Emman Haider, Junheng Hao, Russell J. Hewett, Jamie Huynh, Mojan Javaheripi, Xin Jin, Piero Kauffmann, Nikos Karampatziakis, Dongwoo Kim, Mahoud Khademi, Lev Kurilenko, James R. Lee, Yin Tat Lee, Yuanzhi Li, Chen Liang, Weishung Liu, Eric Lin, Zeqi Lin, Piyush Madan, Arindam Mitra, Hardik Modi, Anh Nguyen, Brandon Norick, Barun Patra, Daniel Perez-Becker, Thomas Portet, Reid Pryzant, Heyang Qin, Marko Radmilac, Corby Rosset, Sambudha Roy, Olatunji Ruwase, Olli Saarikivi, Amin Saied, Adil Salim, Michael Santacroce, Shital Shah, Ning Shang, Hiteshi Sharma, Xia Song, Masahiro Tanaka, Xin Wang, Rachel Ward, Guanhua Wang, Philipp Witte, Michael Wyatt, Can Xu, Jiahang Xu, Sonali Yadav, Fan Yang, Ziyi Yang, Donghan Yu, Chengruidong Zhang, Cyril Zhang, Jianwen Zhang, Li Lyna Zhang, Yi Zhang, Yue Zhang, Yunan Zhang, Xiren Zhou.
101.  **Phi3V** (from Microsoft) released with the paper Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone by Marah Abdin, Jyoti Aneja, Hany Awadalla, Ahmed Awadallah, Ammar Ahmad Awan, Nguyen Bach, Amit Bahree, Arash Bakhtiari, Jianmin Bao, Harkirat Behl, Alon Benhaim, Misha Bilenko, Johan Bjorck, Sébastien Bubeck, Martin Cai, Qin Cai, Vishrav Chaudhary, Dong Chen, Dongdong Chen, Weizhu Chen, Yen-Chun Chen, Yi-Ling Chen, Hao Cheng, Parul Chopra, Xiyang Dai, Matthew Dixon, Ronen Eldan, Victor Fragoso, Jianfeng Gao, Mei Gao, Min Gao, Amit Garg, Allie Del Giorno, Abhishek Goswami, Suriya Gunasekar, Emman Haider, Junheng Hao, Russell J. Hewett, Wenxiang Hu, Jamie Huynh, Dan Iter, Sam Ade Jacobs, Mojan Javaheripi, Xin Jin, Nikos Karampatziakis, Piero Kauffmann, Mahoud Khademi, Dongwoo Kim, Young Jin Kim, Lev Kurilenko, James R. Lee, Yin Tat Lee, Yuanzhi Li, Yunsheng Li, Chen Liang, Lars Liden, Xihui Lin, Zeqi Lin, Ce Liu, Liyuan Liu, Mengchen Liu, Weishung Liu, Xiaodong Liu, Chong Luo, Piyush Madan, Ali Mahmoudzadeh, David Majercak, Matt Mazzola, Caio César Teodoro Mendes, Arindam Mitra, Hardik Modi, Anh Nguyen, Brandon Norick, Barun Patra, Daniel Perez-Becker, Thomas Portet, Reid Pryzant, Heyang Qin, Marko Radmilac, Liliang Ren, Gustavo de Rosa, Corby Rosset, Sambudha Roy, Olatunji Ruwase, Olli Saarikivi, Amin Saied, Adil Salim, Michael Santacroce, Shital Shah, Ning Shang, Hiteshi Sharma, Yelong Shen, Swadheen Shukla, Xia Song, Masahiro Tanaka, Andrea Tupini, Praneetha Vaddamanu, Chunyu Wang, Guanhua Wang, Lijuan Wang , Shuohang Wang, Xin Wang, Yu Wang, Rachel Ward, Wen Wen, Philipp Witte, Haiping Wu, Xiaoxia Wu, Michael Wyatt, Bin Xiao, Can Xu, Jiahang Xu, Weijian Xu, Jilong Xue, Sonali Yadav, Fan Yang, Jianwei Yang, Yifan Yang, Ziyi Yang, Donghan Yu, Lu Yuan, Chenruidong Zhang, Cyril Zhang, Jianwen Zhang, Li Lyna Zhang, Yi Zhang, Yue Zhang, Yunan Zhang, Xiren Zhou.
102.  **PVT** (from Nanjing University, The University of Hong Kong etc.) released with the paper Pyramid Vision Transformer: A Versatile Backbone for Dense Prediction without Convolutions by Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo, Ling Shao.
103.  **PyAnnote** released in the repository pyannote/pyannote-audio by Hervé Bredin.
104.  **Qwen2** (from the Qwen team, Alibaba Group) released with the paper Qwen Technical Report by Jinze Bai, Shuai Bai, Yunfei Chu, Zeyu Cui, Kai Dang, Xiaodong Deng, Yang Fan, Wenbin Ge, Yu Han, Fei Huang, Binyuan Hui, Luo Ji, Mei Li, Junyang Lin, Runji Lin, Dayiheng Liu, Gao Liu, Chengqiang Lu, Keming Lu, Jianxin Ma, Rui Men, Xingzhang Ren, Xuancheng Ren, Chuanqi Tan, Sinan Tan, Jianhong Tu, Peng Wang, Shijie Wang, Wei Wang, Shengguang Wu, Benfeng Xu, Jin Xu, An Yang, Hao Yang, Jian Yang, Shusheng Yang, Yang Yao, Bowen Yu, Hongyi Yuan, Zheng Yuan, Jianwei Zhang, Xingxuan Zhang, Yichang Zhang, Zhenru Zhang, Chang Zhou, Jingren Zhou, Xiaohuan Zhou and Tianhang Zhu.
105.  **Qwen2-VL** (from the Qwen team, Alibaba Group) released with the paper Qwen-VL: A Versatile Vision-Language Model for Understanding, Localization, Text Reading, and Beyond by Jinze Bai, Shuai Bai, Shusheng Yang, Shijie Wang, Sinan Tan, Peng Wang, Junyang Lin, Chang Zhou, Jingren Zhou.
106.  **ResNet** (from Microsoft Research) released with the paper Deep Residual Learning for Image Recognition by Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun.
107.  **RoBERTa** (from Facebook), released together with the paper RoBERTa: A Robustly Optimized BERT Pretraining Approach by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov.
108.  **RoFormer** (from ZhuiyiTechnology), released together with the paper RoFormer: Enhanced Transformer with Rotary Position Embedding by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu.
109.  **RT-DETR** (from Baidu), released together with the paper DETRs Beat YOLOs on Real-time Object Detection by Yian Zhao, Wenyu Lv, Shangliang Xu, Jinman Wei, Guanzhong Wang, Qingqing Dang, Yi Liu, Jie Chen.
110.  **Sapiens** (from Meta AI) released with the paper Sapiens: Foundation for Human Vision Models by Rawal Khirodkar, Timur Bagautdinov, Julieta Martinez, Su Zhaoen, Austin James, Peter Selednik, Stuart Anderson, Shunsuke Saito.
111.  **SegFormer** (from NVIDIA) released with the paper SegFormer: Simple and Efficient Design for Semantic Segmentation with Transformers by Enze Xie, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M. Alvarez, Ping Luo.
112.  **Segment Anything** (from Meta AI) released with the paper Segment Anything by Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alex Berg, Wan-Yen Lo, Piotr Dollar, Ross Girshick.
113.  **SigLIP** (from Google AI) released with the paper Sigmoid Loss for Language Image Pre-Training by Xiaohua Zhai, Basil Mustafa, Alexander Kolesnikov, Lucas Beyer.
114.  **SpeechT5** (from Microsoft Research) released with the paper SpeechT5: Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing by Junyi Ao, Rui Wang, Long Zhou, Chengyi Wang, Shuo Ren, Yu Wu, Shujie Liu, Tom Ko, Qing Li, Yu Zhang, Zhihua Wei, Yao Qian, Jinyu Li, Furu Wei.
115.  **SqueezeBERT** (from Berkeley) released with the paper SqueezeBERT: What can computer vision teach NLP about efficient neural networks? by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W. Keutzer.
116.  **StableLm** (from Stability AI) released with the paper StableLM 3B 4E1T (Technical Report) by Jonathan Tow, Marco Bellagente, Dakota Mahan, Carlos Riquelme Ruiz, Duy Phung, Maksym Zhuravinskyi, Nathan Cooper, Nikhil Pinnaparaju, Reshinth Adithyan, and James Baicoianu.
117.  **Starcoder2** (from BigCode team) released with the paper StarCoder 2 and The Stack v2: The Next Generation by Anton Lozhkov, Raymond Li, Loubna Ben Allal, Federico Cassano, Joel Lamy-Poirier, Nouamane Tazi, Ao Tang, Dmytro Pykhtar, Jiawei Liu, Yuxiang Wei, Tianyang Liu, Max Tian, Denis Kocetkov, Arthur Zucker, Younes Belkada, Zijian Wang, Qian Liu, Dmitry Abulkhanov, Indraneil Paul, Zhuang Li, Wen-Ding Li, Megan Risdal, Jia Li, Jian Zhu, Terry Yue Zhuo, Evgenii Zheltonozhskii, Nii Osae Osae Dade, Wenhao Yu, Lucas Krauß, Naman Jain, Yixuan Su, Xuanli He, Manan Dey, Edoardo Abati, Yekun Chai, Niklas Muennighoff, Xiangru Tang, Muhtasham Oblokulov, Christopher Akiki, Marc Marone, Chenghao Mou, Mayank Mishra, Alex Gu, Binyuan Hui, Tri Dao, Armel Zebaze, Olivier Dehaene, Nicolas Patry, Canwen Xu, Julian McAuley, Han Hu, Torsten Scholak, Sebastien Paquet, Jennifer Robinson, Carolyn Jane Anderson, Nicolas Chapados, Mostofa Patwary, Nima Tajbakhsh, Yacine Jernite, Carlos Muñoz Ferrandis, Lingming Zhang, Sean Hughes, Thomas Wolf, Arjun Guha, Leandro von Werra, and Harm de Vries.
118.  **Swin Transformer** (from Microsoft) released with the paper Swin Transformer: Hierarchical Vision Transformer using Shifted Windows by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.
119.  **Swin2SR** (from University of Würzburg) released with the paper Swin2SR: SwinV2 Transformer for Compressed Image Super-Resolution and Restoration by Marcos V. Conde, Ui-Jin Choi, Maxime Burchi, Radu Timofte.
120.  **T5** (from Google AI) released with the paper Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer by Colin Raffel and Noam Shazeer and Adam Roberts and Katherine Lee and Sharan Narang and Michael Matena and Yanqi Zhou and Wei Li and Peter J. Liu.
121.  **T5v1.1** (from Google AI) released in the repository google-research/text-to-text-transfer-transformer by Colin Raffel and Noam Shazeer and Adam Roberts and Katherine Lee and Sharan Narang and Michael Matena and Yanqi Zhou and Wei Li and Peter J. Liu.
122.  **Table Transformer** (from Microsoft Research) released with the paper PubTables-1M: Towards Comprehensive Table Extraction From Unstructured Documents by Brandon Smock, Rohith Pesala, Robin Abraham.
123.  **TrOCR** (from Microsoft), released together with the paper TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang, Zhoujun Li, Furu Wei.
124.  **UniSpeech** (from Microsoft Research) released with the paper UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael Zeng, Xuedong Huang.
125.  **UniSpeechSat** (from Microsoft Research) released with the paper UNISPEECH-SAT: UNIVERSAL SPEECH REPRESENTATION LEARNING WITH SPEAKER AWARE PRE-TRAINING by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen, Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu.
126.  **Vision Transformer (ViT)** (from Google AI) released with the paper An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby.
127.  **ViTMAE** (from Meta AI) released with the paper Masked Autoencoders Are Scalable Vision Learners by Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dollár, Ross Girshick.
128.  **ViTMatte** (from HUST-VL) released with the paper ViTMatte: Boosting Image Matting with Pretrained Plain Vision Transformers by Jingfeng Yao, Xinggang Wang, Shusheng Yang, Baoyuan Wang.
129.  **ViTMSN** (from Meta AI) released with the paper Masked Siamese Networks for Label-Efficient Learning by Mahmoud Assran, Mathilde Caron, Ishan Misra, Piotr Bojanowski, Florian Bordes, Pascal Vincent, Armand Joulin, Michael Rabbat, Nicolas Ballas.
130.  **ViTPose** (from The University of Sydney) released with the paper ViTPose: Simple Vision Transformer Baselines for Human Pose Estimation by Yufei Xu, Jing Zhang, Qiming Zhang, Dacheng Tao.
131.  **VITS** (from Kakao Enterprise) released with the paper Conditional Variational Autoencoder with Adversarial Learning for End-to-End Text-to-Speech by Jaehyeon Kim, Jungil Kong, Juhee Son.
132.  **Wav2Vec2** (from Facebook AI) released with the paper wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli.
133.  **Wav2Vec2-BERT** (from Meta AI) released with the paper Seamless: Multilingual Expressive and Streaming Speech Translation by the Seamless Communication team.
134.  **WavLM** (from Microsoft Research) released with the paper WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu, Michael Zeng, Furu Wei.
135.  **Whisper** (from OpenAI) released with the paper Robust Speech Recognition via Large-Scale Weak Supervision by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever.
136.  **XLM** (from Facebook) released together with the paper Cross-lingual Language Model Pretraining by Guillaume Lample and Alexis Conneau.
137.  **XLM-RoBERTa** (from Facebook AI), released together with the paper Unsupervised Cross-lingual Representation Learning at Scale by Alexis Conneau\*, Kartikay Khandelwal\*, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov.
138.  **YOLOS** (from Huazhong University of Science & Technology) released with the paper You Only Look at One Sequence: Rethinking Transformer in Vision through Object Detection by Yuxin Fang, Bencheng Liao, Xinggang Wang, Jiemin Fang, Jiyang Qi, Rui Wu, Jianwei Niu, Wenyu Liu.
