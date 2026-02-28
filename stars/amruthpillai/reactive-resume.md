---
project: reactive-resume
stars: 35480
description: A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. Try it out today!
url: https://github.com/amruthpillai/reactive-resume
---

Reactive Resume
===============

Reactive Resume is a free and open-source resume builder that simplifies the process of creating, updating, and sharing your resume.

**Get Started** · **Learn More**

* * *

Reactive Resume makes building resumes straightforward. Pick a template, fill in your details, and export to PDF—no account required for basic use. For those who want more control, the entire application can be self-hosted on your own infrastructure.

Built with privacy as a core principle, Reactive Resume gives you complete ownership of your data. The codebase is fully open-source under the MIT license, with no tracking, no ads, and no hidden costs.

Features
--------

**Resume Building**

-   Real-time preview as you type
-   Multiple export formats (PDF, JSON)
-   Drag-and-drop section ordering
-   Custom sections for any content type
-   Rich text editor with formatting support

**Templates**

-   Professionally designed templates
-   A4 and Letter size support
-   Customizable colors, fonts, and spacing
-   Custom CSS for advanced styling

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
-   Dark mode support
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

Quick Start
-----------

The quickest way to run Reactive Resume locally:

# Clone the repository
git clone https://github.com/amruthpillai/reactive-resume.git
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

Radix UI

State Management

Zustand + TanStack Query

Documentation
-------------

Comprehensive guides are available at docs.rxresu.me:

Guide

Description

Getting Started

First-time setup and basic usage

Self-Hosting

Deploy on your own server

Development Setup

Local development environment

Project Architecture

Codebase structure and patterns

Exporting Your Resume

PDF and JSON export options

Self-Hosting
------------

Reactive Resume can be self-hosted using Docker. The stack includes:

-   **PostgreSQL** — Database for storing user data and resumes
-   **Printer** — Headless Chromium service for PDF and screenshot generation
-   **SeaweedFS** (optional) — S3-compatible storage for file uploads

Pull the latest image from Docker Hub or GitHub Container Registry:

# Docker Hub
docker pull amruthpillai/reactive-resume:latest

# GitHub Container Registry
docker pull ghcr.io/amruthpillai/reactive-resume:latest

See the self-hosting guide for complete instructions.

Support
-------

Reactive Resume is and always will be free and open-source. If it has helped you land a job or saved you time, please consider supporting continued development:

Other ways to support:

-   Star this repository
-   Report bugs and suggest features
-   Improve documentation
-   Help with translations

Star History
------------

Contributing
------------

Contributions make open-source thrive. Whether fixing a typo or adding a feature, all contributions are welcome.

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

See the development setup guide for detailed instructions on how to set up the project locally.

License
-------

MIT — do whatever you want with it.
