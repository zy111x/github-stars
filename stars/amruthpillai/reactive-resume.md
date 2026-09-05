---
project: reactive-resume
stars: 42220
description: A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. Try it out today!
url: https://github.com/amruthpillai/reactive-resume
---

Reactive Resume
===============

Reactive Resume is a free and open-source resume builder that makes it easy to create, update, and share your resume.

**Get Started** · **Learn More**

* * *

Pick a template, fill in your details, and export to PDF. Basic use needs no account. If you want more control, you can run the whole application on your own infrastructure.

You own your data. The codebase is open source under the MIT license, with no tracking, no ads, and no hidden costs.

Sponsors
--------

Sponsors pay for hosting, maintenance, and ongoing development, which is what keeps Reactive Resume free and independent. Thank you to everyone who chips in.

Atlas Cloud supports Reactive Resume as a project sponsor. Atlas Cloud provides a unified AI platform for developers, with access to hundreds of models for chat, image generation, video generation, media processing, and GPU cloud workloads through one API key, one endpoint, and one billing account.

If your company would like to sponsor Reactive Resume, email hello@amruthpillai.com.

Features
--------

**Resume Building**

-   Live preview as you type
-   Multiple export formats (PDF, JSON, DOCX)
-   Drag-and-drop section ordering
-   Custom sections for any content type
-   Rich text editor

**Templates**

-   15 templates to choose from
-   A4 and Letter page sizes
-   Customizable colors, fonts, and spacing
-   Structured Style Rules for section and text styling

**Privacy & Control**

-   Self-host on your own infrastructure
-   No tracking or analytics by default
-   Full data export at any time
-   Delete your data permanently with one click

**Extras**

-   AI integration (OpenAI, Google Gemini, Anthropic Claude)
-   Multi-language support
-   Share resumes via unique links
-   Import from JSON Resume format
-   Dark mode
-   Passkey and two-factor authentication

Templates
---------

  
**Azurill**

  
**Bronzor**

  
**Chikorita**

  
**Ditto**

  
**Gengar**

  
**Glalie**

  
**Kakuna**

  
**Lapras**

  
**Leafish**

  
**Onyx**

  
**Pikachu**

  
**Rhyhorn**

  
**Ditgar**

  
**Meowth**

  
**Scizor**

Quick Start
-----------

The quickest way to run Reactive Resume locally:

# Clone the repository
git clone --depth=1  https://github.com/amruthpillai/reactive-resume.git
cd reactive-resume

# Start all services
docker compose up -d

# Access the app
open http://localhost:3000

For detailed setup instructions, environment configuration, and self-hosting guides, see the documentation.

Tech Stack
----------

Category

Technology

Framework

TanStack Start (React 19, Vite)

Runtime

Node.js

Language

TypeScript

Database

PostgreSQL with Drizzle ORM

API

ORPC (Type-safe RPC)

Auth

Better Auth

Styling

Tailwind CSS

UI Components

Base UI + shadcn-style package

State Management

Zustand + TanStack Query

Documentation
-------------

The full documentation lives at docs.rxresu.me:

Guide

Description

Getting Started

First-time setup and basic usage

Self-Hosting

Deploy on your own server

Development setup

Local development environment

Project architecture

Codebase structure and patterns

Exporting Your Resume

PDF and JSON export options

Self-Hosting
------------

Reactive Resume can be self-hosted using Docker. The stack includes:

-   **PostgreSQL** — Database for storing user data and resumes
-   **SeaweedFS** (optional) — S3-compatible storage for file uploads

> **From v5.1.0 onwards** — PDF generation runs entirely client-side via `@react-pdf/renderer`. New deployments no longer need Browserless, Chromium, or any external print service. The `PRINTER_*` and `BROWSERLESS_*` environment variables are no longer read and can be removed from your `.env`.

Pull the latest image from Docker Hub or GitHub Container Registry:

# Docker Hub
docker pull amruthpillai/reactive-resume:latest

# GitHub Container Registry
docker pull ghcr.io/amruthpillai/reactive-resume:latest

See the self-hosting guide for complete instructions.

Support
-------

Reactive Resume is and always will be free and open source. If it has helped you land a job or saved you time, please consider supporting continued development:

Other ways to support:

-   Star this repository
-   Report reproducible bugs and suggest actionable features
-   Help other users in GitHub Discussions
-   Improve documentation
-   Help with translations

Star History
------------

Contributing
------------

Every contribution helps, whether it is a typo fix or a new feature.

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

See the development setup guide for how to run the project locally.

Maintainers review the `status: needs triage` queue weekly. Triaged bugs become `status: confirmed`; feature proposals become `status: accepted`; reports that need details become `status: needs info`.

License
-------

MIT — do whatever you want with it.
