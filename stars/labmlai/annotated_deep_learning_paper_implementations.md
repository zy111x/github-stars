---
project: annotated_deep_learning_paper_implementations
stars: 67256
description: 🧑‍🏫 60+ Implementations/tutorials of deep learning papers with side-by-side notes 📝; including transformers (original, xl, switch, feedback, vit, ...), optimizers (adam, adabelief, sophia, ...), gans(cyclegan, stylegan2, ...), 🎮 reinforcement learning (ppo, dqn), capsnet, distillation, ... 🧠
url: https://github.com/labmlai/annotated_deep_learning_paper_implementations
---

labml.ai Deep Learning Paper Implementations
============================================

This is a collection of simple PyTorch implementations of neural networks and related algorithms. These implementations are documented with explanations,

The website renders these as side-by-side formatted notes. We believe these would help you understand these algorithms better.

We are actively maintaining this repo and adding new implementations almost weekly. for updates.

Paper Implementations
---------------------

#### ✨ Transformers

-   JAX implementation
-   Multi-headed attention
-   Triton Flash Attention
-   Transformer building blocks
-   Transformer XL
    -   Relative multi-headed attention
-   Rotary Positional Embeddings
-   Attention with Linear Biases (ALiBi)
-   RETRO
-   Compressive Transformer
-   GPT Architecture
-   GLU Variants
-   kNN-LM: Generalization through Memorization
-   Feedback Transformer
-   Switch Transformer
-   Fast Weights Transformer
-   FNet
-   Attention Free Transformer
-   Masked Language Model
-   MLP-Mixer: An all-MLP Architecture for Vision
-   Pay Attention to MLPs (gMLP)
-   Vision Transformer (ViT)
-   Primer EZ
-   Hourglass

#### ✨ Low-Rank Adaptation (LoRA)

#### ✨ Eleuther GPT-NeoX

-   Generate on a 48GB GPU
-   Finetune on two 48GB GPUs
-   LLM.int8()

#### ✨ Diffusion models

-   Denoising Diffusion Probabilistic Models (DDPM)
-   Denoising Diffusion Implicit Models (DDIM)
-   Latent Diffusion Models
-   Stable Diffusion

#### ✨ Generative Adversarial Networks

-   Original GAN
-   GAN with deep convolutional network
-   Cycle GAN
-   Wasserstein GAN
-   Wasserstein GAN with Gradient Penalty
-   StyleGAN 2

#### ✨ Recurrent Highway Networks

#### ✨ LSTM

#### ✨ HyperNetworks - HyperLSTM

#### ✨ ResNet

#### ✨ ConvMixer

#### ✨ Capsule Networks

#### ✨ U-Net

#### ✨ Sketch RNN

#### ✨ Graph Neural Networks

-   Graph Attention Networks (GAT)
-   Graph Attention Networks v2 (GATv2)

#### ✨ Counterfactual Regret Minimization (CFR)

Solving games with incomplete information such as poker with CFR.

-   Kuhn Poker

#### ✨ Reinforcement Learning

-   Proximal Policy Optimization with Generalized Advantage Estimation
-   Deep Q Networks with with Dueling Network, Prioritized Replay and Double Q Network.

#### ✨ Optimizers

-   Adam
-   AMSGrad
-   Adam Optimizer with warmup
-   Noam Optimizer
-   Rectified Adam Optimizer
-   AdaBelief Optimizer
-   Sophia-G Optimizer

#### ✨ Normalization Layers

-   Batch Normalization
-   Layer Normalization
-   Instance Normalization
-   Group Normalization
-   Weight Standardization
-   Batch-Channel Normalization
-   DeepNorm

#### ✨ Distillation

#### ✨ Adaptive Computation

-   PonderNet

#### ✨ Uncertainty

-   Evidential Deep Learning to Quantify Classification Uncertainty

#### ✨ Activations

-   Fuzzy Tiling Activations

#### ✨ Langauge Model Sampling Techniques

-   Greedy Sampling
-   Temperature Sampling
-   Top-k Sampling
-   Nucleus Sampling

#### ✨ Scalable Training/Inference

-   Zero3 memory optimizations

### Installation

pip install labml-nn
