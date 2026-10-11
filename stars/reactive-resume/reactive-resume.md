---
project: reactive-resume
stars: 44098
description: A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. Try it out today!
url: https://github.com/reactive-resume/reactive-resume
---

Important

**Repository moved:** Reactive Resume now lives at **`reactive-resume/reactive-resume`** on GitHub. **Docker Hub stays at `amruthpillai/reactive-resume`.** GHCR images publish to `ghcr.io/reactive-resume/reactive-resume`. GitHub Sponsors and Open Collective funding links remain unchanged.

Reactive Resume
===============

Reactive Resume is a free and open-source resume builder for writing resumes and cover letters, checking your work, and tracking job applications.

**Get Started** · **Learn More**

  

* * *

Create a free account, import an existing resume or start fresh, and see the finished page as you write. Download a PDF, Word, Markdown, or JSON file, or share your resume with a public link. You can also run the whole application on your own infrastructure.

You own your data. The codebase is open source under the MIT license, with no tracking, no ads, and no paid tier. Optional AI features use a provider you connect; hosting and provider usage may have their own costs.

Features
--------

**Write, Design, and Check**

-   Redesigned editor with inline content editing and click-to-select on the page
-   Live PDF preview and browser downloads powered by Forme, rendered in a background worker
-   Rich text, custom sections, drag-and-drop ordering, and structured dates with consistent formatting
-   Autosave, local recovery of unsaved resume drafts, and up to 200 undo steps
-   Phone and tablet layouts, keyboard shortcuts, and a searchable command bar

**Templates and Customization**

-   17 templates, including the new Porygon and Smeargle, previewed with your own content
-   One-column, two-column, and ATS-safe template filters
-   Font presets, custom fonts, colors, spacing, A4 and Letter paper, and left or right sidebars
-   Fit overflowing content by adjusting density, margins, and text size
-   Custom Styles written as Semantic CSS, with an element picker on the page

**Resume Checks**

-   Readability checks with findings pinned to the relevant lines
-   Job-posting keyword matching and a view of the text hiring software reads
-   Checks on the exported PDF, plus an optional AI writing review
-   A public ATS checker that reads PDFs in your browser without an account

**Documents and Cover Letters**

-   One searchable library for resumes and letters, with tags, sorting, and grid or list views
-   Standalone cover letters with their own editor, exports, and version history
-   Link a letter to a resume to keep its sender details and design in sync, or customize it independently
-   Automatic and named versions you can preview and restore
-   Trash with Undo and a 30-day recovery window

**Job Applications**

-   List, Board, Insights, and Calendar views for tracking applications from Saved to Offer
-   Save jobs from a URL or pasted posting; optional keyword search through Firecrawl, Tavily, or Exa
-   Tailor a resume and draft a cover letter for a saved job
-   Track contacts, notes, follow-ups, application outcomes, and the documents you sent
-   Schedule interviews, export calendar events, and import or export applications as CSV

**AI Assistant**

-   Assistant beside your resume or letter, with conversations tied to that document
-   Proposed edits show what changes and why; accept or reject each suggestion
-   Improve selected text, review writing, and draft letters from a resume and job posting
-   Connect OpenAI, Anthropic, Google Gemini, OpenRouter, Ollama, or other supported providers and compatible endpoints
-   Optional web search and page reading; self-hosters can configure shared AI and web-access providers

**Import, Export, and Sharing**

-   Import Reactive Resume JSON, JSON Resume, LinkedIn data exports, PDF, and Word files
-   JSON, LinkedIn, and readable PDF imports work without AI; Word imports require a connected provider
-   Export resumes and letters as PDF, Word (DOCX), Markdown, or JSON
-   Share resumes through public links with optional password protection and view/download statistics
-   REST API and MCP server for document management, imports, exports, checks, and application workflows

**Privacy and Control**

-   Self-host with Docker, Vercel, or Cloudflare Workers
-   No tracking or ads; export your account data or delete your account
-   Passkeys, two-factor authentication, and linked sign-in providers
-   Multiple interface languages, light/dark/system themes, and reduced-motion support

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

  
**Porygon**

  
**Smeargle**

Quick Start
-----------

Use the hosted app to start writing, or build this checkout locally with Docker and Docker Compose:

# Clone the repository
git clone --depth=1 https://github.com/reactive-resume/reactive-resume.git reactive-resume
cd reactive-resume

# Create your local configuration
cp .env.example .env
# Edit .env: set AUTH\_SECRET and a separate ENCRYPTION\_SECRET.
# Generate each secret with: openssl rand -hex 32

# Build the app and start PostgreSQL, Redis, and SeaweedFS
docker compose up -d --build

# Open http://localhost:3000 in your browser

This builds the checked-out source. For a deployment using published images, follow the Docker guide. For source development, see the development setup guide.

Tech Stack
----------

Category

Technology

Web app

React 19 SPA, TanStack Router, and Vite

Server

Hono on Node.js 24 or Cloudflare Workers

Language

TypeScript

Monorepo

pnpm and Turborepo

Database

PostgreSQL with Drizzle ORM

API

oRPC, OpenAPI REST, and MCP

Auth

Better Auth

Styling

Tailwind CSS

UI Components

Base UI + shared UI package

State Management

Zustand + TanStack Query

PDF rendering

Forme, with PDF.js for the viewer

Rich text

TipTap

Localization

Lingui

Documentation
-------------

The full documentation lives at docs.rxresu.me:

Guide

Description

Getting started

First-time setup and basic usage

What's new in v6

Changes and where familiar features moved

Checking your resume

Readability, job match, and writing reviews

Using the assistant

Ask for changes and review proposed edits

Writing a cover letter

Create a letter and link it to a resume

Tracking job applications

Saved jobs, stages, interviews, and insights

Exporting your resume

PDF, Word, Markdown, and JSON downloads

API and MCP

Connect scripts and external assistants

Self-hosting

Deploy on your own infrastructure

Migrating from v5

Migrations and integration changes

Development setup

Local development environment

Project architecture

Codebase structure and package boundaries

Self-Hosting
------------

Reactive Resume supports Docker, Kubernetes, Vercel, and Cloudflare Workers. Each deployment runs the same application with PostgreSQL and upload storage.

Vercel provisions Neon PostgreSQL, private Blob storage, and Upstash Redis through its deployment wizard. Supply two persistent secrets and use the **Services** framework preset. Static assets run in the frontend service, and Hono serves the application routes and APIs from the backend service. See the Vercel guide for setup, limits, and optional SMTP/OAuth configuration.

Cloudflare deployment requires **Workers Paid** and uses Static Assets, private R2 storage, SQLite Durable Objects, and PostgreSQL through Hyperdrive. Supply an existing PostgreSQL database and apply migrations before deployment. See the Cloudflare guide for setup and runtime limits.

For Docker and Kubernetes, the application needs:

-   **PostgreSQL** — Accounts, documents, applications, and assistant conversations
-   **Upload storage** — A persistent local directory or an S3-compatible bucket, such as SeaweedFS
-   **Redis** (optional) — Shared coordination across instances and resumable assistant replies
-   **SMTP** (optional) — Verification and password-reset emails

> **PDF generation in v6** uses Forme in the browser and on the server. No Browserless, Chromium, or external print service is needed. Legacy `PRINTER_*` and `BROWSERLESS_*` environment variables can be removed.

Published releases are available from Docker Hub and GitHub Container Registry (`latest` tracks the latest stable release):

# Docker Hub
docker pull amruthpillai/reactive-resume:latest

# GitHub Container Registry
docker pull ghcr.io/reactive-resume/reactive-resume:latest

See the Docker guide or Kubernetes guide for complete instructions. Self-hosters can also configure shared AI and job-search services.

For a v5 upgrade, back up your database and uploads and stop all v5 instances before applying v6 migrations. Old visual style rules require a manual conversion; API and MCP integrations also have changes. Follow Migrating from v5.

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
3.  Commit your changes using Conventional Commits (`git commit -m 'feat: add amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

See the development setup guide for how to run the project locally.

Maintainers review the `status: needs triage` queue weekly. Triaged bugs become `status: confirmed`; feature proposals become `status: accepted`; reports that need details become `status: needs info`.

License
-------

MIT — do whatever you want with it.
