# Hnykkur

Official website for Hnykkur — an Icelandic engineering practice focused on embedded systems, electronics, software, and product development.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- MDX case studies (`next-mdx-remote`)
- Resend (contact form)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — from [Resend](https://resend.com)
- `CONTACT_TO_EMAIL` — inbox for submissions
- `CONTACT_FROM_EMAIL` — a verified sender in Resend

Without `RESEND_API_KEY`, the form returns a clear error and the mailto fallback remains available.

## Content workflow

Projects live in `src/content/projects/` as MDX files with frontmatter:

```mdx
---
title: Project name
summary: One sentence for the index and home page.
tags:
  - Embedded
  - Software
status: ongoing
year: 2025
featured: true
order: 1
cover: /images/projects/example.jpg
coverFit: contain   # optional; use for logos that should not crop (e.g. wordmarks)
coverZoom: 1.3      # optional; tighten padding on step-response style marks
---

## Context

Case study body…
```

- `featured: true` shows the project on the home page
- `order` controls listing order
- `status`: `active` | `shipped` | `ongoing` | `consulting`
- Add images under `public/images/projects/` and reference them with `cover`

No CMS — git is the content store. Adding a project is one MDX file (and optional images).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/work` | Project index |
| `/work/[slug]` | Case study |
| `/about` | Bio and competencies |
| `/contact` | Contact form |

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
