# Testing

Two layers, both wired into CI (`.github/workflows/ci.yml`):

- **Unit / integration** — Vitest + React Testing Library, jsdom.
- **End-to-end** — Playwright smoke tests against a production build.

## Unit and integration tests

- Config: `vitest.config.mts`; setup: `vitest.setup.ts` (jest-dom matchers + RTL cleanup).
- Tests are colocated with the code: `*.test.ts` / `*.test.tsx` next to the module under test.
- Run `npm run test` once, or `npm run test:watch` while developing.
- The contact flow is covered at both levels: `src/lib/mail.test.ts` exercises the server action (honeypot, rate limit, validation, Resend call) with Next.js and Resend mocked; `contact-schema.test.ts` covers the zod schema.
- Mock Next.js runtime pieces per test file: `next/navigation` (`usePathname`, `useRouter`, `useSearchParams`), `next-themes` (`useTheme`), and server actions (`@/lib/mail`). Mock `@/components/animations/Animate` to render children directly; `motion`'s viewport observers are not available in jsdom.
- `src/lib/contact-schema.ts` holds the zod schema used by the contact form. It lives outside `mail.ts` because `'use server'` modules may only export async functions.

## End-to-end smoke tests

- Config: `playwright.config.ts`; tests: `e2e/`.
- `npm run test:e2e` builds and starts the app automatically (`webServer`), so it exercises production output.
- First local run needs browsers: `npx playwright install chromium`.
- The suite checks every primary route returns HTTP 200, that same-origin links found on those pages resolve, and that their `#fragment` anchors exist. External document links (Google Drive) are not fetched.
- When adding a primary route, add it to `primaryRoutes` in `e2e/smoke.spec.ts`.

## CI

- `quality` job: the verification sequence from [AGENTS.md](../../AGENTS.md) — lint, typecheck, test, build.
- `e2e` job: installs Chromium and runs `npm run test:e2e`.
- Runs on every pull request and on pushes to `main`.
