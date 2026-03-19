# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server at http://localhost:4321
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

No lint or test commands are configured.

## Architecture

This is an **Astro 5** static site deployed to GitHub Pages at `/mypage/` base path.

### Routing

File-based routing via `src/pages/`:
- `index.astro` → home page (hero, GitHub chart, latest articles, projects)
- `docs/index.astro` → articles list (excludes entries with slug containing 'intro')
- `docs/[...slug].astro` → dynamic article pages via Astro content collections

### Content Management

Articles are Markdown files in `src/content/docs/` with frontmatter schema defined in `src/content/config.ts`:
- `title` (required)
- `pubDate` (required ISO 8601)
- `description` (optional)

Subdirectory paths become part of the slug (e.g., `docs/rust/my-article.md` → `/mypage/docs/rust/my-article`).

### Key Files

- `astro.config.mjs` — base path `/mypage/`, static output mode, Tailwind integration
- `tailwind.config.cjs` — custom dark theme palette, `fade-in`/`slide-up` animations, typography plugin
- `src/layouts/Layout.astro` — base HTML layout wrapping all pages
- `src/components/AnimateOnScroll.astro` — Intersection Observer wrapper; accepts `animation` and `delay` props

### Styling

Tailwind with a dark-first custom palette:
- Background: `#1a1a1a` / `#2d2d2d`
- Primary: `#3b82f6` (blue)
- Text: `#f0f0f0`

Prose content uses the typography plugin with dark-theme inversion.

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to `master`.
