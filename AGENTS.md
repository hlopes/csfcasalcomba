# AGENTS.md

**csfcasalcomba** — institutional website for "Centro Social e Paroquial de Casal Comba" (Next.js 16 App Router, TypeScript, Tailwind v4).

This is the canonical instruction file. `GEMINI.md` / `CLAUDE.md` are write-once pointers to it; their only possible update is a path change to this file.

## Essentials

- Use **npm** only (lockfile: `package-lock.json`; nothing else).
- Verify with `npm run lint`, `npm run typecheck`, `npm run test`, then `npm run build` — `next build` runs `tsc`, so the build is the final type-check gate.
- End-to-end smoke tests: `npm run test:e2e` (Playwright; runs against a production build).
- All user-facing copy is **Portuguese**: keep existing PT copy as-is unless the task explicitly asks to edit it.
- Commit messages must pass commitlint — use Conventional Commits. Details: [docs/agents/git-workflow.md](docs/agents/git-workflow.md).

## Read on demand

Open the file whose branch matches the task:

- [docs/agents/architecture.md](docs/agents/architecture.md) — editing routes, pages, `src/data/`, components, root layout, animations, or adding external resources (CSP).
- [docs/agents/styling.md](docs/agents/styling.md) — Tailwind/theme work, UI primitives, or formatting.
- [docs/agents/environment.md](docs/agents/environment.md) — contact form, Resend, `.env.local`, email templates, or hosting.
- [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md) — working to GitHub Issues or PRDs (via `gh`).
- [docs/agents/triage-labels.md](docs/agents/triage-labels.md) — labeling issues.
- [docs/agents/testing.md](docs/agents/testing.md) — adding or changing unit, integration, or end-to-end tests.
- [docs/agents/domain.md](docs/agents/domain.md) — domain terminology (`GLOSSARY.md` + `docs/adr/`).
