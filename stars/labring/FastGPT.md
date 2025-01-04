---
project: FastGPT
stars: 19485
description: FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.
url: https://github.com/labring/FastGPT
---

FastGPT
=======

English | 简体中文 | 日语

FastGPT 是一个基于 LLM 大语言模型的知识库问答系统，提供开箱即用的数据处理、模型调用等能力。同时可以通过 Flow 可视化进行工作流编排，从而实现复杂的问答场景！

fastgpt.mp4

🛸 在线使用
-------

-   🌍 国际版：tryfastgpt.ai

💡 RoadMap
----------

`1` 应用编排能力

-   对话工作流、插件工作流
-   工具调用
-   Code sandbox
-   循环调用
-   用户选择
-   表单输入

`2` 知识库能力

-   多库复用，混用
-   chunk 记录修改和删除
-   支持手动输入，直接分段，QA 拆分导入
-   支持 txt，md，html，pdf，docx，pptx，csv，xlsx (有需要更多可 PR file loader)，支持 url 读取、CSV 批量导入
-   混合检索 & 重排
-   API 知识库
-   自定义文件读取服务
-   自定义分块服务

`3` 应用调试能力

-   知识库单点搜索测试
-   对话时反馈引用并可修改与删除
-   完整上下文呈现
-   完整模块中间值呈现
-   高级编排 DeBug 模式

`4` OpenAPI 接口

-   completions 接口 (chat 模式对齐 GPT 接口)
-   知识库 CRUD
-   对话 CRUD

`5` 运营能力

-   免登录分享窗口
-   Iframe 一键嵌入
-   聊天窗口嵌入支持自定义 Icon，默认打开，拖拽等功能
-   统一查阅对话记录，并对数据进行标注

`6` 其他

-   支持语音输入和输出 (可配置语音输入语音回答)
-   模糊输入提示
-   模板市场

👨‍💻 开发
--------

项目技术栈：NextJs + TS + ChakraUI + MongoDB + PostgreSQL (PG Vector 插件)/Milvus

-   **⚡ 快速部署**
    
    > 使用 Sealos 服务，无需采购服务器、无需域名，支持高并发 & 动态伸缩，并且数据库应用采用 kubeblocks 的数据库，在 IO 性能方面，远超于简单的 Docker 容器部署。
    
    点击查看 Sealos 一键部署 FastGPT 教程
    

-   快速开始本地开发
-   部署 FastGPT
-   系统配置文件说明
-   多模型配置方案
-   版本更新/升级介绍
-   OpenAPI API 文档
-   知识库结构详解

🏘️ 社区交流群
---------

扫码加入飞书话题群：

🏘️ 加入我们
--------

我们正在寻找志同道合的小伙伴，加速 FastGPT 的发展。你可以通过 FastGPT 2025 招聘了解 FastGPT 的招聘信息。

💪 相关项目
-------

-   Laf：3 分钟快速接入三方应用
-   Sealos：快速部署集群应用
-   One API：多模型管理，支持 Azure、文心一言等
-   TuShan：5 分钟搭建后台管理系统

🌿 第三方生态
--------

-   COW 个人微信/企微机器人
-   SiliconCloud (硅基流动) —— 开源模型在线体验平台

👀 其他
-----

-   保姆级 FastGPT 教程
-   接入飞书
-   接入企微

🤝 参与贡献
-------

我们非常欢迎各种形式的贡献。如果你对贡献代码感兴趣，可以查看我们的 GitHub Issues，大展身手，向我们展示你的奇思妙想。

  
  
  

\*\*\*\*

🌟 Star History
---------------

使用协议
----

本仓库遵循 FastGPT Open Source License 开源协议。

1.  允许作为后台服务直接商用，但不允许提供 SaaS 服务。
2.  未经商业授权，任何形式的商用服务均需保留相关版权信息。
3.  完整请查看 FastGPT Open Source License
4.  联系方式：Dennis@sealos.io，点击查看商业版定价策略
