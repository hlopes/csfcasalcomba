# Architecture

## Content is data, not markup

Pages import static TypeScript from `src/data/<section>/` (folder name mirrors the route section) and pass it into components. To edit a section's copy, find its data file under `src/data/` — copy inside components is resolved presentation, not source content.

## App Router layout

- File-system routes under `src/app/`, one folder per site section, each mirrored by `src/data/<section>/`.
- Shared TypeScript interfaces live in `src/types/`.
- Root layout wires `ThemeProvider` (next-themes, `defaultTheme: light`, `enableSystem`), `Header`/`Footer`, and `Toaster` (sonner).
- `IRSDialog` is deliberately commented out with a TODO ("re-enable when IRS campaign is active again") — re-enable it only when the TODO says so, never as cleanup.

## Components

- One folder per component type under `src/components/` (e.g. `hero/`, `accordion/`, `feature/`, `mail-template/`); never pile components into a shared flat directory.
- shadcn/ui-style primitives live in `src/components/ui/` (see [styling.md](./styling.md)).
- Animations use `motion` (not framer-motion v2); carousels use `swiper`. Reusable animation wrappers live in `src/components/animations/`.

## Security headers

`next.config.ts` sets a strict `Content-Security-Policy` and `X-Frame-Options: DENY` for all routes. Any new external resource (analytics, fonts, embeds) must be added to the CSP `src` allowlist, or it is blocked in production.
