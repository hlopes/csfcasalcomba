# AGENTS.md

Instruction file for the **csfcasalcomba** repo — institutional website for "Centro Social e Paroquial de Casal Comba" (Next.js App Router + TypeScript + Tailwind). This is the canonical instruction file; `GEMINI.md` and `CLAUDE.md` are pointer files that reference this file by path and must not duplicate its content. If `AGENTS.md` ever changes name or location, update the pointers in `GEMINI.md` and `CLAUDE.md` to match. `CLAUDE.md`, and any future agent files, must stay in sync with this file.

## Runtime & package manager

- Use **npm** only. Lockfile is `package-lock.json`; the `commit-msg` hook runs `./node_modules/.bin/commitlint`. Do not use Bun.
- No test framework is configured. Verification is `npm run lint` followed by `npm run build` (Next runs `tsc` at build time).

## Commands

- `npm run dev` - Dev server at http://localhost:3000
- `npm run build` - Production build (this is the type-check gate)
- `npm run start` - Serve production build
- `npm run lint` - ESLint (`.` with `next/core-web-vitals`, `next/typescript`)
- `npm run format` - Prettier write against **the whole repo** — prefer running prettier on only the files you touched (`npx prettier --write <path>`)
- `npm run email:dev` - React Email preview for templates in `src/components/mail-template/` at http://localhost:4000

## Setup & environment

- Contact form requires a local `.env.local` (`*.env*` is gitignored):
  - `RESEND_API_KEY` - Resend API key (https://resend.com)
  - `RESEND_TO` - Recipient address for the contact form
- Server action (`src/lib/mail.ts`) reads both vars at runtime and hardcodes sender `csfcasalcomba@resend.dev`. Build succeeds without them; only the form fails at send time.
- Deployed on Vercel (`@vercel/analytics` + `@vercel/speed-insights` mounted in the root layout).

## Styling (Tailwind v4 — CSS-first)

- **There is no `tailwind.config.js`.** Tailwind v4 ships a CSS-first config: theme tokens, colors, shadows, and the dark variant are defined in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`, `@utility`). Edit `globals.css` to change theme tokens; do not create a JS config.
- Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional classes.
- Components are shadcn/ui-style (`components.json`, style `new-york`, lucide icons) and live in `src/components/ui/`. Add new primitives with `npx shadcn@latest add <name>`, then re-run lint/format.
- Prettier config: no semicolons, single quotes, printWidth 80, trailing comma es5, `prettier-plugin-tailwindcss`.

## Architecture

- **App Router**, file-system routes under `src/app/` (`instituicao`, `infancia`, `area-senior`, `documentos`, `organograma`, `projectos-parcerias`, `contato`).
- **Content is data, not markup**: pages import static TypeScript from `src/data/<section>/` (mirrors the route sections) and pass it to components. When editing a section, find its data file under `src/data/` rather than trusting copy in components.
- **Granular component dirs**: every component type gets its own folder under `src/components/` (e.g., `hero/`, `accordion/`, `feature/`, `mail-template/`), not one shared `components/*.tsx` pile.
- `src/types/` holds shared TS interfaces (`MenuEntry`, `Card`, `Feature`, `Brand`, …).
- Root layout wires `ThemeProvider` (next-themes, `defaultTheme: light`, `enableSystem`), `Header`/`Footer`, `Toaster` (sonner). `IRSDialog` is deliberately commented out with a TODO ("re-enable when IRS campaign is active again") — do not silently place it back.
- Animations use `motion` (not framer-motion v2), carousels use `swiper`. Animation wrappers live in `src/components/animations/`.

## Security headers

`next.config.ts` sets a strict `Content-Security-Policy` and `X-Frame-Options: DENY` for all routes. Any new external resource (analytics, fonts, embeds) must be added to the CSP `src` allowlist or it will be blocked in production.

## Content language

- All user-facing copy is **Portuguese**. Do not translate strings or "modernize the copy"; preserve the PT content untouched unless the task explicitly asks to edit it.

## Gotchas

- Always import with the `@/` alias (`@/*` → `./src/*`, tsconfig).
- Commit messages are enforced as Conventional Commits by `commitlint`: a message is rejected unless its type is one of `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.
- No CI workflows beyond `dependabot.yml`; whatever you verify, you verify locally.

## Key files

- `src/app/layout.tsx` - Root layout (fonts, providers, analytics)
- `src/lib/mail.ts` - `'use server'` form action, zod-validated, Resend delivery
- `src/app/globals.css` - Tailwind v4 theme + all design tokens
- `src/data/menu-data.ts` - Navigation structure
