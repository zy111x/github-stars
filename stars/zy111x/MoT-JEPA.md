---
project: MoT-JEPA
stars: 1
description: null
url: https://github.com/zy111x/MoT-JEPA
---

MoT-JEPA-Flow
=============

中文文档 / Chinese README

**MoT-JEPA-Flow** is a reconstruction-free world-action model for embodied control. It upgrades LeWorldModel and the first-stage MoT-JEPA prototype with:

Upgrade

This repository

World representation

**8 structured world tokens** (global / robot / effector / contact / 4 object-scene slots) instead of one compressed latent

Action representation

**Temporal action tokens** — each action block keeps its `[frameskip, action_dim]` time structure instead of being flattened to one 25-dim token

Dynamics

**Ensemble of 3 independent dynamics predictors** (separate transformers and heads, shared observation encoder) for epistemic uncertainty

Training objective

**Multi-step JEPA rollout loss** (4–8 free-running steps, discounted) on top of one-step teacher forcing

Anti-collapse

**SIGReg applied to world latents only**, independently for every (time, role) token slot

Attention

**Causal, asymmetric joint attention** inside a Mixture-of-Transformers (MoT) backbone — per-modality experts, shared attention, masks that block information leaks

Action generation

**Flow action expert** (conditional flow matching) proposes diverse in-distribution action plans

Planning

**Flow proposals → ensemble-uncertainty-aware cost → local CEM refinement → receding-horizon MPC that executes only the first 1–2 action blocks**

1\. Repository layout
---------------------

```
motjepa/
  data/        HDF5 trajectory loading, 8:1:1 episode splits, train-only statistics
  models/      MoT backbone + masks, tokenizers, encoder, dynamics ensemble,
               world model, flow action expert, SIGReg and losses
  policy/      FlowCEMSolver (flow proposals + local CEM) and receding-horizon MPC
  train/       stage-1 world-model trainer, stage-2 flow trainer, checkpointing
  eval/        offline metrics, closed-loop simulator adapters
               (stable-worldmodel/OGBench, LIBERO, gymnasium), history-aware policy
configs/       data / model / train / eval YAML configs
scripts/       train_world.py, train_flow.py, evaluate_offline.py,
               evaluate_sim.py, inspect_dataset.py
tests/         unit and smoke tests (22 tests, CPU-only)
docs/          architecture and reproduction notes
storage/       split manifests, normalization statistics, evaluation manifests
```

2\. Method overview
-------------------

### 2.1 Structured world tokens

The observation encoder is a MoT transformer over three modalities: image patches (`vision`), grouped proprioceptive tokens (`state`), and `K = 8` learned world queries. Attention is **asymmetric**: vision/state tokens attend only within themselves, while world queries read everything. The output world tokens carry fixed roles:

```
index 0   global scene summary
index 1   robot configuration        -> supervises gripper opening
index 2   end-effector               -> supervises effector position
index 3   contact state              -> supervises gripper contact
index 4+  object / scene slots       -> supervise object position
```

Small auxiliary heads ground each role token in metric quantities during training (privileged labels are never used at planning time — the goal is always given as a goal image + goal proprioception).

### 2.2 Dynamics ensemble and multi-step JEPA

Each of the `M = 3` dynamics predictors is an independent MoT transformer over `world` and `action` token streams with a **time-causal** joint-attention mask: tokens at step `t` can only read steps `≤ t`. The training loss combines:

-   one-step JEPA prediction against stop-gradient targets (per member, with bootstrap masks so members see different sub-batches);
-   a discounted **multi-step free-running rollout** loss (horizon 4–8) where the model consumes its own predictions;
-   **SIGReg** on encoder world latents only — the statistic is computed per (time, role) slot, so no token can collapse individually;
-   auxiliary object/effector/contact/gripper losses and an action-contrastive term that forces the predictions to actually depend on actions.

Ensemble variance is the epistemic-uncertainty signal used at planning time.

### 2.3 Flow action expert

A conditional flow-matching transformer conditioned on the current and goal world tokens. Actions are `plan_horizon × action_block` **temporal action tokens** (5 blocks × 5 raw steps by default). Training regresses the constant velocity field `a - ε` on demonstration windows; sampling integrates a few Euler steps from Gaussian noise and yields diverse, in-distribution plans.

### 2.4 Planning: Flow → uncertainty-aware cost → local CEM → MPC

1.  The flow expert samples `N` action plans (strong behavioral prior).
2.  Every plan is rolled out by **every ensemble member**; the planning cost mixes goal terms (object terminal/trajectory distance, latent distance, effector-object distance, contact) with an **ensemble-disagreement penalty**, so the planner avoids regions where the model is unreliable.
3.  A small **local CEM** refines the best proposal — few iterations, small standard deviation, quadratic penalty for drifting away from the flow anchor. It corrects locally instead of searching the whole action space.
4.  The MPC executes only the **first action block** (`receding_horizon = 1`, i.e. 5 environment steps), then replans with the real observation history.

3\. Environment
---------------

Validated configuration (see `requirements/environment-cu130.txt` for exact versions):

-   Linux, NVIDIA GPU (validated on RTX 4090, 24 GB), CUDA 13.0 driver
-   Python 3.10 (3.10–3.12 supported)
-   PyTorch 2.13.0 + cu130, torchvision 0.28.0
-   numpy 2.2.6, h5py 3.16.0, hdf5plugin 7.0.0, PyYAML 6.0.3
-   Simulation: stable-worldmodel 0.1.1, gymnasium 1.3.0, mujoco 3.10.0

python3.10 -m venv .venv
source .venv/bin/activate
pip install torch==2.13.0 torchvision==0.28.0 --index-url https://download.pytorch.org/whl/cu130
pip install -e ".\[train,dev\]"          # core + training + tests
pip install -e ".\[stablewm\]"           # optional: OGBench/MuJoCo closed-loop eval

Headless MuJoCo rendering needs `MUJOCO_GL=egl`.

4\. Dataset protocol
--------------------

The default experiment uses the OGBench `cube_single_expert` HDF5 dataset (image observations, proprioception, privileged cube labels). Point `configs/data/ogbench_cube.yaml:path` at your copy.

The data protocol is **identical to the original LeWorldModel experiments**:

-   episode-level **8:1:1 train/validation/test split**, seed 3072, persisted as a JSON manifest with dataset checksums (`storage/splits/`);
-   normalization statistics (state/action mean and std) computed **on the training split only** (`storage/statistics/`);
-   windows of `sequence_length` observations with `frameskip = 5`; action blocks keep the temporal layout `[T, frameskip, action_dim]`;
-   checkpoints record manifest hashes, and every evaluation refuses to run if its split does not match the checkpoint's split.

5\. Reproduction
----------------

# 0. (optional) inspect the dataset schema
python scripts/inspect\_dataset.py /path/to/cube\_single\_expert.h5

# 1. Stage 1 — world model (encoder + dynamics ensemble)
python scripts/train\_world.py --config configs/train/stage1\_world\_ogbench\_cube.yaml

# 2. Stage 2 — flow action expert (frozen world model)
#    Set world\_checkpoint in the config to the stage-1 best.pt first.
python scripts/train\_flow.py --config configs/train/stage2\_flow\_ogbench\_cube.yaml

# 3. Offline evaluation on the untouched test split
python scripts/evaluate\_offline.py \\
  --checkpoint outputs/<stage2\_run\>/best.pt \\
  --config configs/eval/offline\_ogbench\_cube.yaml

# 4. Closed-loop MPC evaluation in the OGBench MuJoCo simulator
MUJOCO\_GL=egl python scripts/evaluate\_sim.py \\
  --checkpoint outputs/<stage2\_run\>/best.pt \\
  --config configs/eval/sim\_ogbench\_cube.yaml

`planner: cem` in the simulator config evaluates a stage-1 checkpoint with the stock random-initialization CEM — the baseline for the flow-vs-random ablation.

A fast end-to-end pipeline check (a few minutes on one GPU):

python scripts/train\_world.py --config configs/train/smoke\_stage1.yaml
python scripts/train\_flow.py  --config configs/train/smoke\_stage2.yaml
python scripts/evaluate\_offline.py --checkpoint outputs/smoke\_stage2/best.pt \\
  --config configs/eval/smoke\_offline.yaml
MUJOCO\_GL=egl python scripts/evaluate\_sim.py --checkpoint outputs/smoke\_stage2/best.pt \\
  --config configs/eval/smoke\_sim.yaml

Unit tests (CPU-only): `pytest tests`.

6\. Key metrics
---------------

-   Offline: `rollout_mse_h{1,5,10}`, `object_rollout_mse_h*`, `rollout_ensemble_disagreement_h*`, `latent_effective_rank`, `action_preference_accuracy`.
-   Closed-loop: success rate (with Wilson 95% CI), distance- and phase-stratified success, closed-loop latent/object prediction MSE, planning elite cost, action saturation.

7\. Other simulators
--------------------

-   **LIBERO**: `motjepa/eval/adapters/libero.py` + `configs/eval/libero_example.yaml` (requires a demonstration goal frame and goal proprioception).
-   **Gymnasium/MuJoCo**: `motjepa/eval/adapters/gymnasium.py` wraps any image+state gymnasium environment into the planning info format.

8\. License and acknowledgements
--------------------------------

MIT License. Derived from LeWorldModel (FAIR), the MoT-LeWorldModel prototype, the Mixture-of-Transformers architecture, and stable-worldmodel/OGBench; see `THIRD_PARTY_NOTICES.md`.
