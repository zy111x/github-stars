---
project: 5ire
stars: 329
description: 5ire is a cross-platform desktop AI assistant, MCP client. It compatible with major service providers,  supports local knowledge base and  tools via model context protocol servers .
url: https://github.com/nanbingxyz/5ire
---

  

A Well-Designed AI assistant and MCP Client
===========================================

  
  

  

OpenAI / Azure OpenAI / Anthropic / Google / Baidu / Moonshot / Doubao / Grok / DeepSeek / Ollama

  
Twitter · Releases

  
5ire.mp4

  

Features
========

 

⚒️ Support Tools via MCP Servers
--------------------------------

MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

With tools, you can access the file system, obtain system information, interact with databases, access remote data, and more, rather than just having a simple conversation.

Tip

5ire is currently in the early stage, so custom MCP Servers are not open yet. However, you can add servers by modifying the `{userData}/5ire/mcp.json` configuration file (It should be `~/Library/Application Support/5ire/mcp.json` on Mac). If there's any error, just delete the file, and 5ire will reset automatically. Feel free to explore!

💡 Local Knowledge Base
-----------------------

We have integrated the bge-m3 as our local embedding model, which excels in multilingual vectorization. 5ire now supports parsing and vectorization of docx, xlsx, pptx, pdf, txt, and csv documents, enabling storage of these vectors to power robust Retrieval-Augmented Generation (RAG) capabilities locally.

📈 Usage Analytics
------------------

By keeping track of your API usage and spending, you can gain a better understanding of how much you're spending on the API and make informed decisions to optimize your use of the service.

✨ Prompts Library
-----------------

The prompt library provides an effective way to create and organize your own prompts. These prompts are highly versatile, thanks to their support for variables.

🔖 Bookmarks
------------

You can bookmark each conversation, and even if the original messages are deleted, the saved bookmarked content remains unaffected.

🔍 Quick Search
---------------

You can perform keyword searches across all conversations, quickly pinpointing the information you need.

Tip

Since 5ire uses native dependencies, it needs to be packaged on the corresponding platform. If it is on Mac OS, you may also need to configure APPLE\_TEAM\_ID, APPLE\_ID, and APPLE\_ID\_PASS for notarization to avoid security alerts.

  
  

License
=======

5ire is licensed under the GNU General Public License version 3.
