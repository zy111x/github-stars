---
project: every-embodied
stars: 1469
description: 仅需Python基础，从0构建自己的具身智能机器人；从0逐步构建VLA/OpenVLA/SmolVLA/Pi0， 深入理解具身智能
url: https://github.com/datawhalechina/every-embodied
---

  ███████╗███╗   ███╗██████╗  ██████╗ ██████╗ ██╗███████╗██████╗ 
  ██╔════╝████╗ ████║██╔══██╗██╔═══██╗██╔══██╗██║██╔════╝██╔══██╗
  █████╗  ██╔████╔██║██████╔╝██║   ██║██║  ██║██║█████╗  ██║  ██║
  ██╔══╝  ██║╚██╔╝██║██╔══██╗██║   ██║██║  ██║██║██╔══╝  ██║  ██║
  ███████╗██║ ╚═╝ ██║██████╔╝╚██████╔╝██████╔╝██║███████╗██████╔╝
  ╚══════╝╚═╝     ╚═╝╚═════╝  ╚═════╝ ╚═════╝ ╚═╝╚══════╝╚═════╝ 
  

Every-Embodied : Zero to Hero in Embodied AI
============================================

📌 组队学习文档 (Team Learning) · ✨ 学习地图 (Learning Map) · 🤖 前沿复现 (SOTA) · 📖 在线阅读

**Supported By**

🚀 快速开始 (Quick Start) ：一分钟体验 Hello Every-Embodied
-------------------------------------------------

想要立刻在本地跑通第一个具身智能仿真 Demo？只需三步：

# 1. 克隆仓库
git clone --depth 1 https://github.com/datawhalechina/every-embodied.git
cd every-embodied

# 2. 创建并激活 Conda 环境
conda create -n embodied python=3.8
conda activate embodied

# 3. 安装依赖并运行基础机械臂抓取 Demo
pip install mujoco
# 可选：更平滑的 jerk 限制轨迹规划
pip install ruckig
python examples/01\_hello\_every\_embodied\_mujoco.py

详细说明请见：`examples/README.md`

  

  
**项目快速入门**  
基于mujoco一键了解项目基础

  
**Genie Sim的Pi0部署**  
基于Pi0和Isaac Sim实现高保真仿真

  
**LeRobot 遥操作**  
支持地瓜 RDK-X5 连接 SO101 机械臂实操

  
**视觉语义感知**  
场景分割与目标检测，让机器人“看懂”环境

  
**LLM控制无人机导航VLN**  
通过WebUI快速上手无人机大模型VLN导航

  
**基于SmolVLA微调LIBERO基准**  
小型VLA测试机器人终身学习基准

  
**春晚机器人复刻**  
输入豆包生成功夫视频，输出机器人mujoco仿真

  
**ETPNav-VLN导航复现**  
连续环境视觉语言导航 (VLN-CE) 领域强力 Baseline

### ⭐ 欢迎点点 Star 共同构建具身智能开源生态 ❤️

具身智能（Embodied AI）是通往通用人工智能（AGI）的关键钥匙。

**Every-Embodied 致力于打造一个“基础友好、工程可复现、前沿可拓展”的学习库。** 我们希望降低门槛：即使你目前只有 Python 基础，也可以从仿真和最小可运行 Demo 出发，逐步完成从“看懂”到“动手复现”的跨越。

-   **入门友好**：优先提供可运行示例与环境脚本，不要求你一开始就掌握复杂机器人学推导
-   **实践导向**：强调“跑起来-看结果-再理解原理”的学习路径，减少抽象概念带来的挫败感
-   **前沿连接**：从 MuJoCo / Isaac Sim 到 VLA / VLN，让学习路径与产业热点保持同步

👥 项目受众
-------

这个项目不仅面向机器人专业背景同学，也欢迎更多跨领域学习者加入：

-   **Python 初学者 / 转型开发者**：有基础编程能力，希望系统进入 AI+机器人、具身智能方向
-   **高校学生 / 研究生**：希望通过课程项目、毕业设计或论文复现快速建立具身智能实践能力
-   **算法工程师**：希望把视觉、强化学习、大模型能力迁移到真实物理交互场景
-   **硬件与机器人爱好者**：希望理解从硬件控制、仿真验证到 Sim2Real 部署的完整链路
-   **教育工作者与社区组织者**：希望基于开源教程组织课程、读书会、训练营和项目共创

* * *

本教程分为三个阶段，带你逐层深入具身智能的世界：

阶段

核心技能

产出

**第一阶段**

机器人学基础、硬件选型、ROS 入门

搭建自己的第一台仿真机器人 / 配置仿真环境

**第二阶段**

计算机视觉、运动规划、强化学习

完成“识别-规划-抓取”闭环任务

**第三阶段**

模仿学习、大模型(VLA/VLN)、Sim2Real

复现大模型导航VLN、OpenVLA、SmolVLA 等前沿项目，实现仿真或真实部署

🔥 News & Highlights
--------------------

-   **\[2026-04-11\]** 新增了无人机相关教程：系统的讲解无人机从控制到轨迹生成再到轨迹优化的完整流程，包括比较难以理解的微分平坦性，SE3控制器，minimumsnap轨迹优化等内容，包含12个可运行的简单易懂案例，不用复杂的环境，不用复杂的代码，助你从零入门无人机。
-   **\[2026-04-07\]** 新增LeWorldModel世界模型教程和复现指导！用最通俗的话、最清晰的结构，把LeWM从头到尾讲明白，一步到位带你吃透最新的LeWM世界模型算法，不管是入门世界模型还是深入科研都能用
-   **\[2026-03-17\]** 新增具身导航综合入门实践视频教程！仅需“半天”即可走通从感知决策再到规划控制的所有的算法：从入门具身导航到深入研究一站式
-   **\[2026-03-17\]** 新增视频教程：LeHome柔性衣物折叠ICRA2026比赛视频教程 http://xhslink.com/o/2oxCz0RTXcA
-   **\[2026-03-16\]** 新增达摩院 x Datawhale 组队学习 https://github.com/datawhalechina/every-embodied/tree/main/16-%E4%B8%93%E9%A2%98%E7%BB%84%E9%98%9F%E5%AD%A6%E4%B9%A0/01-%E8%BE%BE%E6%91%A9%E9%99%A2%E7%BB%84%E9%98%9F%E5%AD%A6%E4%B9%A0
-   **\[2026-03-16\]** 新增LeHome ICRA2026 比赛教程 https://github.com/datawhalechina/every-embodied/blob/main/15-Challenge%E7%AB%9E%E8%B5%9B/LeHome/README.md
-   **\[2026-03-05\]** 算力自由平台复刻ETPNav连续环境导航算法视频教程 http://xhslink.com/o/8t08X6dROt5
-   **\[2026-03-02\]** 新增具身智能面试教程
-   **\[2026-02-28\]** 复刻ACT机械臂抓取水杯算法 https://www.bilibili.com/video/BV1YFAbzoECf
-   **\[2026-02-25\]** 复刻mujoco机械臂数据采集 https://www.bilibili.com/video/BV1DNAbzpE6Z
-   **\[2026-02-23\]** 新增春晚武术机器人复刻视频教程 https://www.datawhale.cn/learn/content/258/6228
-   **\[2026-02-22\]** 新增 ETPNav(IEEE TPAMI 2024)复现教程指导
-   **\[2026-02-21\]** 新增春晚武术机器人复刻
-   **\[2026-02-16\]** 新增GenieSim一键启动镜像和视频教程
-   **\[2026-01-15\]** 新增Habitat导航实战一键启动镜像和视频教程及大模型导航实战VLN教程

Past News

-   **\[2025-07-02\]** 新增 **地瓜 RDK-X5** 连接 LeRobot SO101 遥操作实战教程。
-   **\[2025-06-25\]** 发布 **OpenVLA** 及 OmniGibson 仿真环境深度指南。
-   **\[2025-03-31\]** 推出 **具身场景的计算机视觉** 模块，支持物体识别与复杂抓取。
-   **\[2025-01-01\]** 项目初始化，发布具身智能基础路线图。

📽️视频教程
-------

Habitat导航基础复现： https://www.datawhale.cn/learn/content/258/6154

GenieSim一键启动教程：https://www.datawhale.cn/learn/content/258/6172

Joycon服务器本地异步遥控机械臂教程：https://www.datawhale.cn/learn/content/258/5728

Mujoco仿真UR机械臂抓取实验：https://www.bilibili.com/video/BV1WhxeznE61/

春晚武术机器人复刻视频教程：http://xhslink.com/o/1lB9dX0Vt2t

ACT机械臂抓取水杯算法训练 https://www.bilibili.com/video/BV1YFAbzoECf

Mujoco机械臂数据采集 https://www.bilibili.com/video/BV1DNAbzpE6Z

算力自由平台复刻ETPNav连续环境导航算法视频教程 http://xhslink.com/o/8t08X6dROt5

具身导航入门到实践！仅需“半天”即可走通从感知决策再到规划控制的所有的算法：从入门具身导航到深入研究一站式

-   Part 1 环境基础与安装: http://xhslink.com/o/9KuYgWrRpaE
-   Part 2 代码演示讲解与分析: http://xhslink.com/o/2xY3fit6cmj

🗺️ 学习地图
--------

### 一、基础入门 - 走进机器人的世界

章节

关键内容

状态

**1\. 具身智能概述**

定义背景、发展历程、未来趋势

✅

**2\. 机器人学基础**

运动学(DH参数)、动力学、坐标变换

✅

**3\. 硬件与电子**

地瓜开发板实战、LeRobot遥操作、传感器选型、执行器原理、阿加犀开发板实战

✅

**4\. 软件基础设施**

ROS/ROS2 通信机制、AutoCAD/Solidworks 基础

🚧

### 二、核心技术 - 给机器人装上大脑

章节

关键内容

状态

**5\. 计算机视觉 (CV)**

目标检测 (YOLO)、图像分割 (SAM)、6D 位姿估计

✅

**6\. 运动与控制**

路径规划 (A\*/RRT)、轨迹优化、PID 与 MPC 控制、模仿学习 (IL)、ACT复现、Hand-Eye 标定、AnyGrasp 抓取算法、灵巧手操作

🚧

**7\. 强化学习 (RL)**

多机器人PPO/SAC 算法详解、Isaac Gym 并行训练实战

✅

**8\. 仿真环境**

Isaac Sim 高级渲染、MuJoCo 物理引擎下OMY/Nova5/Franka机械臂和ACT/Pi0/SmolVLA算法复现、Genie-Sim3教程

✅

### 三、具身大脑 - 前沿论文复现与真机部署

章节

关键内容

状态

**9\. 具身智能benchmark和数据讲解**

LIBERO、SimplerENV

✅

**10\. VLA 大模型**

SmolVLA 训练和部署、OpenVLA部署、RT-1 / RT-2 / RT-X 论文解读与代码分析

✅

**11\. VLN 大模型**

VLN概念基础、ETPNav

✅

**12\. 综合项目复现**

无人机多模态LLM导航

✅

### 四、专题组队学习 - 面向活动组织与专题共学

专题

关键内容

状态

**16\. 达摩院组队学习专题**

专题导航、组织学习方案、学习任务安排、乐云平台体验指引

✅

🛠️ 环境要求
--------

在开始之前，请确保你的开发环境满足以下基础要求（不同子项目复现可能略有不同，请参考各自项目的readme，我们会通过conda或mamba环境实现）：

-   **Python**: 3.8+
-   **GPU**: 推荐 NVIDIA RTX 3060+ (用于 Isaac Sim 渲染与 RL 训练)
-   **OS**: Ubuntu 20.04 / 22.04 (推荐)
-   **Core Libs**:
    -   `MuJoCo` (物理引擎)
    -   `Isaac Sim` (Nvidia 仿真平台，需要IsaacSim配置时我们会为大家提供预安装的一键启动镜像)

🤝 参与贡献
-------

我们非常欢迎社区的贡献！无论是修复 Bug、补充文档，还是提交新的复现代码！

贡献者名单（教程部分）
-----------

姓名

职责

简介

GitHub

Ethan-Chen-plus

项目负责人

中国科学院大学

@Ethan-Chen-plus

YYPro

第1、2、3、4章贡献者

中国科学院大学

@YYpro

李昀迪

第2、8、13章贡献者

北京科技大学

@muzilyd

张天一

第8章贡献者

北京工业大学

@GodoneZ

陈可为

第5、6、7、9、10章贡献者

中国科学院大学

@Ethan-Chen-plus

霍海杰

第1章贡献者

佛山大学

@howe12

**其他贡献者风采（补充相关资源、单独push readme子教程、文档挑错）：**

感谢以下小伙伴的参与和贡献：howe, Miles, 麦芒, HAO, zhangningboo，机智流硬件冷小莫，icarried修复雅可比矩阵文档 , PeterH0323-贡献RDKx5入门教程

**英文教程翻译者贡献：**

我们同时准备了英文部分的教程，感谢如下小伙伴的贡献：Lune、刘远洋、苏家煜、梁坚斌

Star History
------------

📬 联系我们
-------

如果你发现教程有 Bug，或者有任何想要交流、学习、讨论、吐槽的具身智能内容，或者有更 High-level 的 Idea，别让它只停留在你的神经元里！扫码直连微信交流群（Every-Embodied读者交流2群），一起为具身智能‘注入灵魂’。

扫描下方二维码关注公众号：Datawhale

📚 飞书知识库 | 🌐 官方网站

📄 LICENSE
----------

  
本项目文档与教程内容采用 **Creative Commons Attribution 4.0 International (CC BY 4.0)** 许可协议。  
你可以自由分享与改编本项目内容，但需保留来源署名。详细条款见 LICENSE。
