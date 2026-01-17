---
project: certimate
stars: 8084
description: |-
    An open-source and free self-hosted SSL certificates ACME tool, automates the full-cycle of issuance, deployment, and renewal visually. 完全开源免费的自托管 SSL 证书 ACME 工具，申请、部署、续期全流程自动化可视化，支持各大主流云厂商。
url: https://github.com/certimate-go/certimate
---

<h1 align="center">🔒 Certimate</h1>

<div align="center">

[![Stars](https://img.shields.io/github/stars/certimate-go/certimate?style=flat)](https://github.com/certimate-go/certimate)
[![Forks](https://img.shields.io/github/forks/certimate-go/certimate?style=flat)](https://github.com/certimate-go/certimate)
[![Docker Pulls](https://img.shields.io/docker/pulls/certimate/certimate?style=flat)](https://hub.docker.com/r/certimate/certimate)
[![Release](https://img.shields.io/github/v/release/certimate-go/certimate?style=flat&sort=semver)](https://github.com/certimate-go/certimate/releases)
[![License](https://img.shields.io/github/license/certimate-go/certimate?style=flat)](https://mit-license.org/)

</div>

<div align="center">

English ｜ [简体中文](README_zh.md)

</div>

---

## 🚩 Introduction

An open-source and free self-hosted SSL certificates ACME tool, automates the full-cycle of issuance, deployment, and renewal visually.

- **Self-Hosted**: Private deployment. All data is stored locally, giving you full control to ensure data privacy and security.
- **Zero Dependencies**: No need to install databases, runtimes, or any complex frameworks. Truly ready to use out of the box with a single click.
- **Low Resource Usage**: Extremely lightweight, requiring only ~16 MB of memory. It's so efficient that it can even run on devices like home routers.
- **Easy to Use**: The user-friendly GUI lets you automate certificate management for multiple platforms with a visual workflow — all with just a few simple configurations.

## 💡 Features

- Flexible workflow orchestration, fully automation from certificate application to deployment;
- Supports single-domain, multi-domain, wildcard certificates, with options for RSA or ECC.
- Supports DNS-01 challenge and HTTP-01 challenge both.
- Supports various certificate formats such as PEM, PFX, JKS.
- Supports more than 60+ domain registrars (e.g., AWS, Cloudflare, GoDaddy, Alibaba Cloud, Tencent Cloud, etc. [Check out full providers](https://docs.certimate.me/en-US/docs/reference/providers#supported-dns-providers));
- Supports more than 110+ deployment targets (e.g., Kubernetes, CDN, WAF, load balancers, etc. [Check out full providers](https://docs.certimate.me/en-US/docs/reference/providers#supported-hosting-providers));
- Supports multiple notification channels including email, Discord, Slack, Telegram, DingTalk, Feishu, WeCom, and more;
- Supports multiple ACME CAs including Let's Encrypt, Actalis, Google Trust Services，SSL.com, ZeroSSL, and more;
- More features waiting to be discovered.

## 🚀 Quick Start

**Run Certimate in 1 minute!**

<details>
<summary>👉 Binary Installation: </summary>

Download the archived package of precompiled executable files directly from [GitHub Releases](https://github.com/certimate-go/certimate/releases), extract and then execute:

```bash
./certimate serve
```

</details>

<details>
<summary>👉 Docker Installation: </summary>

```bash
docker run -d \
  --name certimate \
  --restart unless-stopped \
  -p 8090:8090 \
  -v /etc/localtime:/etc/localtime:ro \
  -v /etc/timezone:/etc/timezone:ro \
  -v $(pwd)/data:/app/pb_data \
  certimate/certimate:latest
```

</details>

Visit `http://127.0.0.1:8090` in your browser.

Default administrator account:

- Username: `admin@certimate.fun`
- Password: `1234567890`

Work with Certimate right now. Or read other content in the documentation to learn more.

## 📄 Documentation

For full documentation, please visit [docs.certimate.me](https://docs.certimate.me/).

Related articles:

> - [_Migrate to v0.4_](https://docs.certimate.me/en-US/docs/migrations/migrate-to-v0.4)
> - [_使用 CNAME 完成 ACME DNS-01 质询_](https://docs.certimate.me/en-US/blog/cname)
> - [_Why Certimate?_](https://docs.certimate.me/en-US/blog/why-certimate)

## 🖥️ Screenshot

[![Screenshot](https://i.imgur.com/4DAUKEE.gif)](https://www.youtube.com/watch?v=am_yzdfyNOE)

## 🤝 Contributing

Certimate is a free and open-source project, and your feedback and contributions are needed and always welcome. Contributions include but are not limited to: submitting code, reporting bugs, sharing ideas, or showcasing your use cases based on Certimate. We also encourage users to share Certimate on personal blogs or social media.

For those who'd like to contribute code, see our [Contribution Guide](./CONTRIBUTING_EN.md).

[Issues](https://github.com/certimate-go/certimate/issues) and [Pull Requests](https://github.com/certimate-go/certimate/pulls) are opened at https://github.com/certimate-go/certimate.

#### Contributors

[![Contributors](https://contrib.rocks/image?repo=certimate-go/certimate)](https://github.com/certimate-go/certimate/graphs/contributors)

## ⛔ Disclaimer

This repository is available under the [MIT License](https://opensource.org/licenses/MIT), and distributed “as-is” without any warranty of any kind. The authors and contributors are not responsible for any damages or losses resulting from the use or inability to use this software, including but not limited to data loss, business interruption, or any other potential harm.

**No Warranties**: This software comes without any express or implied warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

**User Responsibilities**: By using this software, you agree to take full responsibility for any outcomes resulting from its use.

## 🌐 Join the Community

- [Telegram](https://t.me/+ZXphsppxUg41YmVl)
- Wechat Group

  <img src="https://i.imgur.com/zSHEoIm.png" width="200"/>

## ⭐ Star History

Star Certificate on GitHub and be instantly notified of new releases.

[![Stargazers over time](https://starchart.cc/certimate-go/certimate.svg?variant=adaptive)](https://starchart.cc/certimate-go/certimate)

