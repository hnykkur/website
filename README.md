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
productImage:
  src: /images/projects/example/product.jpg
  alt: Short description of the final product shot
  caption: Optional caption under the large figure
wipImages:
  - src: /images/projects/example/wip-1.jpg
    alt: Early prototype
    caption: Bench bring-up
  - src: /images/projects/example/wip-2.jpg
    alt: Iteration
    caption: Enclosure iteration
---

## Context

Case study body…

## Role & scope

…

## Approach

…

## Outcome

…
```

- `featured: true` shows the project on the home page
- `order` controls listing order
- `status`: `active` | `shipped` | `ongoing` | `consulting`
- Case study body uses the four sections above; a WIP montage is inserted before **Outcome** when `wipImages` is set
- List/cover icons: add under `public/images/projects/` and set `cover`
- Case study photos: drop files in `public/images/projects/<slug>/`, then point `productImage` / `wipImages` `src` at them (placeholders live in `public/images/placeholders/`)

### Shot list guidance

| Project | Final product | WIP montage ideas |
|---|---|---|
| Hanzi Tree | Skill tree or assemble-from-parts UI on device | IDS sketch, early Flutter screen, curriculum/mastery iteration |
| AuroraGo | Device + companion app (forecasts, space weather, local alert) | Camera/MCU bench, detection debug frame, enclosure or cold-power work |
| Róbó-Fóbó | Four robots with LED collars (optional phone in frame) | Cut/printed parts, PCB bring-up, early BLE teleop test |
| Electronics Consulting | Anonymous finished board or instrumented prototype | Layout review, scope-on-board bring-up, power/revision moment |

No CMS — git is the content store. Adding a project is one MDX file (and optional images).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/work` | Project index |
| `/work/[slug]` | Case study |
| `/about` | Bio and competencies |
| `/contact` | Contact form |
| `/hanzitree/privacy` | Hanzi Tree privacy policy |

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
