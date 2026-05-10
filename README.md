# The Empire Within

Marketing site for The Empire Within — a small retreat practice running immersive sanctuaries in Bali for emotional and somatic mastery.

Built with [Astro](https://astro.build), styled with SCSS, and deployed automatically on every push to `main`.

---

## Stack

- **Framework:** Astro 6 (static output)
- **Language:** TypeScript
- **Styling:** SCSS with `@use`/`@include`, scoped per component
- **Smooth scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Hosting:** Static deploy on push to `main`
- **Backend:** none (Appwrite planned for forms and email capture)

## Getting started

Requires Node.js `>=22.12.0` (use `nvm use 22.14` if available locally).

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the built site locally
```

> Don't run `npm run dev` from agents — it runs in the background. Use `npm run build` for verification.

## Project layout

```text
src/
├── components/         Reusable Astro components (Header, Footer, hero variants, retreat sections, …)
├── data/               Typed data files that drive the site
│   ├── retreats.ts     Retreats: copy, schedule, inclusions, images, FAQs, testimonials
│   └── posts.ts        Journal articles: title, body block array, hero image
├── layouts/
│   └── Layout.astro    Base HTML shell, Lenis smooth scroll, reveal animations,
│                       global anchor-link smooth-scroll handler
├── pages/
│   ├── index.astro     Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── one-on-one.astro
│   ├── retreats/
│   │   ├── index.astro Listing of all retreats
│   │   └── [slug].astro  One page per retreat (data-driven)
│   ├── blog/
│   │   ├── index.astro Journal listing
│   │   └── [slug].astro  One page per article (data-driven)
│   ├── terms.astro
│   └── privacy.astro
├── scripts/            Tiny client-side TS modules (e.g. nav breakpoint constants)
├── styles/
│   ├── _variables.scss Design tokens (colours, typography, spacing, breakpoints)
│   ├── _reset.scss
│   └── global.scss     Font imports + base typography
public/
├── header.jpeg         Homepage hero image
├── logo.png            Logo asset
└── ulamas/             Location photography for retreats and articles
```

## Adding content

### A new retreat

Append an entry to `src/data/retreats.ts`. The dynamic route `pages/retreats/[slug].astro` will pick it up at build time and render the full page (hero, overview, pillars, schedule, gallery, inclusions, audience, pricing, testimonials, FAQ, inquiry CTA). The retreats listing index will surface a card automatically.

### A new article

Append an entry to `src/data/posts.ts`. The body is a typed `PostBlock[]` array supporting `paragraph`, `heading`, `quote`, `list`, and `image` blocks. The dynamic route `pages/blog/[slug].astro` renders any post, plus a "continue reading" section with related posts (matched by category or shared tag).

### A new page

Add an `.astro` file under `src/pages/`. Use the existing components — `PageHero`, `BookingCta`, `Faq`, `Testimonials`, `LegalDocument`, etc. — to compose new pages without writing new SCSS.

## Conventions

- **TypeScript first.** Use `.ts`/`.astro` for new files.
- **SCSS, no Tailwind.** Component styles use `<style lang="scss">` and `@use '../styles/variables' as *`.
- **Design tokens** live in `src/styles/_variables.scss`. Don't inline hex values or pixel sizes.
- **Reveal animations** are opt-in via the `reveal`, `reveal-fade`, and `reveal-stagger` classes (handled by `Layout.astro`).
- **Anchor links** (`href="#id"`) work everywhere — `Layout.astro` intercepts clicks and routes them through Lenis with header-aware offset.
- **Conventional commits** preferred for new commits where helpful (`feat:`, `fix:`, `refactor:`).

## Deployment

Static build deployed on every push to `main`. Repository: [MirceaDumitrescu/the-empire-within](https://github.com/MirceaDumitrescu/the-empire-within).

## Roadmap

- Wire the contact form and newsletter signup to a real backend (Appwrite or a transactional service).
- Replace the YouTube hero embed on retreat pages with self-hosted video for performance.
- Move blog body content to Astro Content Collections (MDX) once authoring volume justifies it.
