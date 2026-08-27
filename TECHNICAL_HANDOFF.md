# Social Hub — Technical Handoff

## Overview

Social Hub is a single-page, responsive digital-marketing website. The visitor-facing experience is a static React page with client-side anchor navigation, CSS-led motion, a click-to-call contact link, and a link to the Social Hub Instagram profile. The project includes a server, database, and authentication scaffold supplied by the project template, but the current public marketing page does **not** require visitors to log in, call a custom API, or read/write any database data.

> **Maintenance principle:** Keep public content and styling in the client files; use the environment setting only for the phone number; and preserve the managed asset URLs until you deliberately migrate the site to another host.

## Languages, Frameworks, and Runtime

| Layer | Technology | Role in this project |
| --- | --- | --- |
| Main language | **TypeScript** | Used for the React interface, server scaffold, tests, and shared types. |
| UI framework | **React 19** | Renders the single-page interface and manages the header’s scroll state plus the section-reveal observer. |
| Build system | **Vite 7** | Runs local development with hot reload and compiles the browser bundle. |
| Styling | **Tailwind CSS 4** plus authored CSS | Provides base utilities; `client/src/index.css` contains the complete editorial visual system, responsive rules, and motion. |
| Server runtime | **Node.js** with **Express 4** | Serves the built application in production through the template’s server entry point. |
| Router | **Wouter** | Resolves the public `/` page and the fallback route. |
| Server contract scaffold | **tRPC 11** and **React Query** | Included by the upgraded template for future features. The present landing page does not call a custom tRPC procedure. |
| Optional persistence scaffold | **Drizzle ORM**, **MySQL2**, and **AWS S3 SDK** | Available for future authenticated features, database records, and storage. No custom database table or storage workflow is currently active. |

## Libraries and Packages

The project manifest includes the full template dependency set. The following groups are relevant to maintenance.

| Group | Packages | How they are used |
| --- | --- | --- |
| Core UI | `react`, `react-dom`, `wouter`, `lucide-react` | React renders the page, Wouter handles routes, and Lucide supplies the arrow, phone, and Instagram icons. |
| Visual system | `tailwindcss`, `@tailwindcss/vite`, `tw-animate-css`, `tailwind-merge`, `class-variance-authority` | Tailwind and the shared component system support layout; the principal animation and responsive rules are authored in `client/src/index.css`. |
| Component primitives | Radix UI packages, `shadcn/ui` components, `sonner` | The existing `Button` component is used for calls to action. The remaining primitives are available if the site later gains forms, accordions, dialogs, or other interactions. |
| Motion and utilities | `framer-motion`, `clsx`, `date-fns`, `zod` | Installed by the project template. The current website intentionally uses lightweight CSS and browser APIs for its motion rather than a JavaScript animation library. |
| Future full-stack capability | `express`, `@trpc/*`, `@tanstack/react-query`, `drizzle-orm`, `mysql2`, `dotenv`, `jose`, `@aws-sdk/*` | Template infrastructure for a future form backend, protected admin area, database, or file handling. It is not required for the present static marketing content. |
| Tooling and validation | `typescript`, `vite`, `tsx`, `vitest`, `esbuild`, `prettier`, `drizzle-kit` | Supports local development, type checking, tests, production builds, formatting, and future database migrations. |

## Asset Inventory and Storage Model

The live website uses project-managed asset URLs beginning with `/manus-storage/`. This keeps large image files out of the deployed source tree and avoids slow website deployment. The exact same original image assets are mirrored in the GitHub repository under `assets/` so the repository remains a complete maintenance handoff.

| GitHub asset file | Live website reference | Use |
| --- | --- | --- |
| `assets/social-hub-supplied-logo.jpg` | `/manus-storage/social-hub-supplied-logo_1446de7c.jpg` | The supplied HER SOCIAL HUB logo shown in the hero identity card. |
| `assets/social-hub-spark-mark.png` | `/manus-storage/social-hub-spark-mark_6f5fa7b1.png` | The pink four-point mark used in the header, hero, contact section, and site footer. |
| `assets/social-hub-hero-editorial.jpg` | `/manus-storage/social-hub-hero-editorial_ac5e19e7.jpg` | Hero art direction. |
| `assets/social-hub-content-tile.jpg` | `/manus-storage/social-hub-content-tile_6dfed556.jpg` | Content-creation section visual. |
| `assets/social-hub-growth-tile.jpg` | `/manus-storage/social-hub-growth-tile_b901bd01.jpg` | Reach-and-engagement section visual. |

The icon set is not stored as image files: the icons are supplied by the `lucide-react` package and bundled at build time. The display fonts are **Bodoni Moda** and **DM Sans**, requested from Google Fonts in `client/src/index.css`. There are no local font files in the repository, so an internet connection is required to retrieve them in the current configuration.

### Moving to Another Host

For continued hosting on this project, retain the `/manus-storage/` image URLs already present in `client/src/pages/Home.tsx`. If you deploy outside this managed project, upload the mirrored `assets/` files to your chosen static host, object storage, or CDN, then replace the five URLs at the top of `Home.tsx` with the new public asset paths. Do not put the large originals into `client/public/` when deploying this project here; that can slow or block the managed deployment.

## Environment Variables and the `.env` File

The only custom public website setting currently consumed by the page is:

```env
VITE_SOCIAL_HUB_PHONE=+91 1234567890
```

The page reads this value through `getSocialHubPhone()` in `client/src/lib/contact.ts`; it then builds the `tel:` link through `getSocialHubPhoneHref()`. Update the value when the final number is ready. Variables beginning with `VITE_` are included in the browser bundle, so this number is intentionally public. It must **not** be used for private keys, passwords, database URLs, or tokens.

For local work, add the variable to a local `.env` file. The repository ignores `.env`, `.env.local`, and other local environment files, so they are not committed. For this managed project, update the `VITE_SOCIAL_HUB_PHONE` value through the project environment/secrets settings; restart or rebuild after changing it.

The template also receives platform-provided environment values for its built-in analytics, OAuth, server signing, database connection, and service proxies. These are managed by the hosting environment and are not committed to GitHub. None of their values should be copied into the repository or the browser code.

## Project Structure

```text
Social-Hub/
├── assets/                         # Repository mirror of the five website images
├── client/
│   ├── index.html                  # Page metadata, title, favicon, analytics loader
│   └── src/
│       ├── pages/Home.tsx          # Main page content, service data, sections, links, scroll behaviour
│       ├── index.css               # Brand tokens, responsive layouts, motion, focus states
│       ├── lib/contact.ts          # Environment-backed phone helpers
│       ├── lib/contact.test.ts     # Phone configuration unit tests
│       ├── components/ui/          # Reusable shadcn/ui primitives
│       ├── contexts/               # Theme setup
│       └── main.tsx                # React application entry point
├── server/
│   ├── _core/                      # Template server, OAuth, runtime, and platform integration code
│   ├── routers.ts                  # tRPC router scaffold
│   ├── db.ts                       # Database utility scaffold
│   └── auth.logout.test.ts         # Template authentication test
├── shared/                         # Shared server/client types and constants
├── drizzle/                        # Drizzle schema and migration scaffold
├── package.json                    # Dependencies and developer commands
├── vite.config.ts                  # Vite build and development configuration
├── vitest.config.ts                # Automated test configuration
├── CONFIGURATION.md                # Short contact-setting guide
├── TECHNICAL_HANDOFF.md            # This detailed maintenance guide
└── uiux-review.md                  # Recorded visual review and rationale
```

## What Is Static and What Is Easy to Change

| Area | Current form | Update location |
| --- | --- | --- |
| Services, headings, body copy, navigation labels, Instagram link, and contact call-to-action | Static TypeScript/JSX content | `client/src/pages/Home.tsx` |
| Service list entries | A single `services` array | `client/src/pages/Home.tsx` near the beginning of the file |
| Colours, type hierarchy, layouts, breakpoints, focus states, and animation timings | Authored CSS | `client/src/index.css` |
| Phone number | Public environment variable | Project environment settings or local `.env` |
| Images and spark mark | Five managed URL constants, mirrored under `assets/` in GitHub | Update the constants near the top of `client/src/pages/Home.tsx` after rehosting replacements |
| Full-stack capability | Template scaffolding only | Add new tRPC procedures in `server/routers.ts`, data access in `server/db.ts`, and schema changes in `drizzle/schema.ts` when a real feature is approved |

The existing page is deliberately easy to update because its copy is centralised in one component and its presentation is centralised in one stylesheet. No CMS, form submission service, newsletter, analytics dashboard, custom database records, or appointment booking flow has been added yet.

## Development, Validation, and Deployment

Use the following commands from the repository root after installing Node.js and pnpm:

```bash
pnpm install
pnpm dev       # local development with hot reload
pnpm check     # TypeScript validation
pnpm test      # Vitest test suite
pnpm build     # production build
pnpm start     # run the built Node/Express app
```

The latest validation run passed TypeScript checks, three automated tests across two test files, and the production build. The build output is generated into `dist/` and is intentionally excluded from Git because it is reproducible. No external hosting configuration, custom domain, DNS setting, or CI/CD workflow is included in the repository. To publish within the current project, create a checkpoint and use the project’s **Publish** control; configure `VITE_SOCIAL_HUB_PHONE` in the deployment environment first.

## Recommended Maintenance Sequence

When new images or contact information arrive, first add the original visual assets to the repository `assets/` folder, then upload or host optimised variants for the live site and update the five relevant image constants. Change the phone number through the environment setting, not the JSX. Finally, run `pnpm check`, `pnpm test`, and `pnpm build` before pushing the updated source.

Keep the source-backed images in GitHub as the long-term handoff archive, but treat the live asset URLs as deployment configuration. This separation preserves a lightweight web build while giving you a complete set of assets to move or rehost the project in the future.
