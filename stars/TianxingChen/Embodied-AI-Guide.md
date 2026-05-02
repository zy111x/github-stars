---
project: Embodied-AI-Guide
stars: 13340
description: [Lumina具身智能社区] 具身智能技术指南 Embodied-AI-Guide
url: https://github.com/TianxingChen/Embodied-AI-Guide
---

具身智能技术指南 Embodied-AI-Guide
==========================

> 📚 国内最热门的具身智能技术指南，一个偏「百科全书」定位的具身智能中文知识库与资料索引。欢迎 **Star / 分享 / 提 PR**，欢迎邮件联系 lumina.embodiedai@gmail.com 或 项目发起人 微信 `TianxingChen_2002`（请备注机构+姓名与来意）。

### 📢 News｜项目进展

📷 _2026-01-15: Embodied-AI-Guide重组织完成_  
⭐️ _2025-12-18: GitHub Stars 突破 10,000_  
❤️ _2025-03-15: Embodied-AI-Guide正式开源_

### 🧑‍💻 Related Open-source Projects｜相关开源项目

⭐️ Lumina Call (具身智能照片): Website  
⭐️ Datawhale Easy-Embodied: Repo

🦉 Lumina具身智能社区: 点击访问
---------------------

**扫描右下图加入`Lumina具身智能`社区**:

🐣 (1) Start From Here - 从这里开始
------------------------------

> 具身智能是指一种基于物理实体进行感知和行动的智能系统, 其通过智能体与环境的交互获取信息、理解问题、做出决策并实现行动, 从而产生智能行为和适应性。

### (1.1) How - 如何使用这份指南

我们希望的是帮助新人快速建立领域认知, 所以设计理念是：**简要**以一个实践项目带大家动手学习具身智能，同时以**百科全书形式**介绍目前具身智能涉及到的主要技术, 让大家知道不同的技术能够解决什么问题, 未来想要深入发展的时候能够有头绪。

### (1.2) About us - 关于我们

我们是一个由具身初学者组成的团队, 希望能够通过我们自己的学习经验, 为后来者提供一些帮助, 加快具身智能的普及。欢迎更多朋友加入我们的项目, 也很欢迎交友、学术合作, 有任何问题, 可以联系邮箱`chentianxing2002@gmail.com`。

⚒️ (2) 动手学习具身智能操作
-----------------

> **建议一周内完成学习**，使用**RoboTwin 2.0**平台走通一个操作策略“生命周期”的全流程  
> **完成此教程需要至少16GB显存的显卡**

### (2.1) 为什么这样选择这个教程

具身智能操作是一个很复杂的问题：**数据从哪来**、**策略怎么设计（架构与训练细节）**、**怎么评测模型性能（平台与任务设计）**。

**数据从哪来**：具身智能的数据有很多种源头，比如真机数据采集、人类视频数据、仿真合成数据、世界模型合成数据等等，其中各有各的问题，比如真机数据采集成本高、人类视频数据信息含量低、仿真合成数据Sim2Real Gap与Scaleup难题、世界模型合成数据存在幻觉等。

**策略怎么设计**：不同的网络架构选择影响模型的表现、收敛效果、推理速度等。

**怎么评测模型性能**：评测是非常重要的，否则我们不知道科学评价模型效果如何，也没办法推动技术发展。

面对以上问题，RoboTwin 2.0平台为广大科研学者提供了非常好的学习平台，RoboTwin 2.0基于易配置的SAPIEN仿真平台开发，提供了50个双臂自动化数据合成、主流操作策略训测集成、评测系统，能够辅助大家快速走起来具身智能操作策略的生命周期。过程中也可以多看看数据与评测视频，了解数据分布与策略表现。

### (2.2) 学习流程

RoboTwin 2.0：代码 ｜ 主页 ｜ 文档 ｜ 论文

**展开学习流程**

#### (2.2.1) 了解RoboTwin 2.0做了什么 (～1天)

阅读RoboTwin 2.0论文paper，了解仿真数据合成的方案，深入理解对于合成一条机器人数据需要什么信息，机器人有什么可以做的任务，了解Aloha硬件。

#### (2.2.2) 配置RoboTwin 2.0平台，数据采集 (~0.5天)

环境安装教学: Tutorial，根据以下数据采集脚本采集`beat_block_hammer`任务50条:

```
bash collect_data.sh ${task_name} ${task_config} ${gpu_id}
## Clean Data Example: bash collect_data.sh beat_block_hammer demo_clean 0
## Radomized Data Example: bash collect_data.sh beat_block_hammer demo_randomized 0
```

#### (2.2.4) 策略训练（～1天）

选择ACT策略进行复现 Tutorial，ACT是非常经典的操作策略算法，训练此策略大约需要12GB显存，

#### (2.2.5) 测试策略（～1天）

在`demo_clean`下评测ACT成功率大约是56%（详见Leaderboard）。

📄 (3) Useful Info - 有利于搭建认知的资料
-------------------------------

这一章主要用于**快速建立对具身智能领域的整体认知**，适合在系统学习算法、工程或硬件之前，用来了解技术版图、社区生态与研究脉络。

* * *

**方向性与方法论资料**

-   具身智能基础技术路线（Yunlong Dong）：PDF ｜ bilibili
-   斯坦福机器人学导论：website
-   Cyber Nachos（偏系统与工程思维）：website

**社区 / 社交媒体（长期跟进价值高）**

-   公众号：**石麻日记（强烈推荐）**、Lumina具身智能、机器之心、新智元、量子位、具身智能研究室、具身纪元、Human Five、Xbot具身知识库、具身智能之心、自动驾驶之心、3D视觉工坊、将门创投、RLCN强化学习研究、CVHub
-   博主（小红书）：WhynotTV、穆尧\_YaoMarkMu、许华哲Harry、周博宇、高飞、李弘扬、朱政、丁琰、YY硕、Mango-Man、RHOSLab #PI-李永露、正合时宜、心言任永亮、York Yang-Dyna Robotics、哲伦班长

**实验室与学术生态参考**

-   Robotics 实验室总结：zhihu link1 ｜ zhihu link2
-   具身智能华人高引榜：repo
-   Lumina 具身智能社区：website

**高质量会议与期刊（论文检索时重点关注）**  
Science Robotics, TRO, IJRR, JFR, RSS, RAL, IROS, ICRA, ICCV, ECCV, ICML, CVPR, NeurIPS, CoRL, ICLR, AAAI, ACL

**长期跟进研究进展与选题调研**

-   Awesome Humanoid Robot Learning（Yanjie Ze）：repo
-   Paper Reading List（DeepTimber Community）：repo
-   Paper List（Yanjie Ze）：repo
-   RoboScholar / Embodied AI Paper List（Tianxing Chen）：repo
-   SOTA Paper Rating（Weiyang Jin）：website
-   Awesome LLM Robotics：repo
-   Awesome Video Robotic Papers：repo
-   Awesome Embodied Robotics and Agent：repo
-   awesome-embodied-vla / va / vln：repo
-   Awesome Affordance Learning：repo
-   Embodied AI Paper TopConf：repo
-   Awesome **RL-VLA** for Robotic Manipulation (Haoyuan Deng)：repo
-   Awesome **Efficient-VLA** for Robotic Manipulation (Weifan Guan)：repo

**年度趋势总结**

-   State of Robot Learning (Dec 2025)：website
    
-   许华哲 - 具身智能：2025回望，website
    
-   林天威 - 具身VLA的2025：从 Demo 到通用的距离，website
    

🍎 (4) Algorithm - 算法篇
----------------------

这一篇把具身智能中最常用的“算法能力栈”从下往上串了起来：底层是工程工具与几何/标定/控制这类决定系统能否稳定运行的基础；中层是视觉与多模态表征（2D/3D/4D、prompting、affordance），它们把复杂世界压缩成可泛化、可对齐、可被策略利用的中间表示；上层则是学习与决策（RL/IL、VLA、LLM+Planner、快慢系统），把感知与任务目标转成可执行动作，并逐步走向更长程、更通用、更可部署的系统形态。

-   Common Tools —— 常用工程工具
-   Vision Foundation Models —— 视觉基础模型
-   Robot Learning —— 机器人学习
-   LLM for Robotics —— LLM+机器人
-   VLA —— Vision-Language-Action Models
    -   5.0 参考与综述
    -   5.1 经典工作
    -   5.2 分层双系统 VLA
    -   5.3 最新 VLA 工作
-   Computer Vision —— 计算机视觉
    -   6.1 2D/3D/4D Vision
    -   6.2 Visual Prompting & Affordance
-   Computer Graphics —— 计算机图形学
-   Multimodal Models —— 多模态模型
-   Robot Navigation —— 机器人导航
-   Embodied AI for X —— 具身智能+X
    -   10.1 Healthcare
    -   10.2 UAV
    -   10.3 Autonomous Driving

🏋️‍♂️ (5) Infrastruture - 软件基础设施篇
----------------------------------

这一章关注的不是“具体某个模型”，而是**支撑具身智能研究与系统落地的软件基础设施（Infrastructure）**。仿真器决定你能构建怎样的世界，基准集决定你如何比较方法优劣，数据集决定模型最终学到什么样的行为分布。它们共同构成了具身智能中**最容易被忽视、但最影响上限与复现性的部分**。

-   (1) Simulators - 仿真器
-   (2) Benchmarks - 基准集
-   (3) Datasets - 数据集

🎮 (6) Control - 控制篇
--------------------

这一章并不是为了让你“立刻跑一个模型”，而是为具身智能系统提供**稳定性、可解释性与工程底座**。控制论保证系统在高频下不崩溃，机器人学提供几何与动力学约束，SLAM 与状态估计让机器人“知道自己在哪里”，ROS 与工程库则把理论变成可复现的系统。

-   (1) Control and Robotics —— 控制论与机器人学基础
    -   (1.1) 经典课程
-   (2) 控制理论基础（Control Foundations）
    -   (2.1) 经典控制（Classical Control）
    -   (2.2) 现代控制（最优控制）
    -   (2.3) 先进控制（Advanced Control）
-   (3) 机器人学导论（Robotics Foundations）
    -   (3.1) 推荐教材与材料
    -   (3.2) 运动学与动力学
    -   (3.3) 里程计与 SLAM
    -   (3.4) 工程生态与工具

🦾 (7) Hardware - 硬件篇
---------------------

具身智能硬件涵盖多个技术栈：嵌入式软硬件、机械设计、机器人系统集成与传感器等。它们知识面很杂，但共同目标只有一个：把“算法”变成真实世界里稳定可复现的系统。关于硬件学习，最有效的方式几乎永远是 **从实践出发**：先做出一个能跑起来的最小系统，再逐步扩展复杂度与可靠性。

-   (1) Embedded —— 嵌入式
-   (2) Mechanical Design —— 机械设计
-   (3) Robot System Design —— 机器人系统设计
-   (4) Sensors —— 传感器
    -   (4.1) 深度相机（Depth Camera）
-   (5) Tactile Sensing —— 触觉感知
    -   (5.1) 视触觉传感器
    -   (5.2) 电子皮肤
    -   (5.3) 触觉应用与算法
    -   (5.4) 传感器购买
-   (6) Data Collection —— 数据采集硬件
-   (7) Companies —— 公司与硬件生态

👍 Citation - 引用
----------------

If you find this repository helpful, please consider citing:

```
@misc{embodiedaiguide2025,
  title = {Embodied-AI-Guide},
  author = {Embodied-AI-Guide-Contributors, Lumina-Embodied-AI-Community, Tianxing Chen},
  month = {January},
  year = {2025},
  url = {https://github.com/tianxingchen/Embodied-AI-Guide},
}
```

🏷️ License - 许可协议
------------------

本项目为 **非商业使用（Non-Commercial Use）** 协议：

-   允许：个人学习、学术研究、非盈利使用；
-   禁止：任何形式的商业使用，包括但不限于公司/企业内部使用、 集成到收费产品或服务中、或用于任何营利目的。

详情请查看仓库中的 LICENSE 文件。

如需商业授权（例如在公司产品或商业项目中使用），请联系项目负责人：chentianxing2002@gmail.com。

⭐️ Star History - Star历史
------------------------

🤝 Sponsors - 支持机构
------------------

感谢 **无界智航、超维动力、香港大学MMLab、地瓜机器人、松灵机器人** 对本项目的支持
