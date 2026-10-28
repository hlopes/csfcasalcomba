# Environment

## Contact form setup

The contact form needs a local `.env.local` (gitignored via `*.env*`):

- `RESEND_API_KEY` — Resend API key (https://resend.com)
- `RESEND_TO` — recipient address, or a comma-separated list of recipients
- `RESEND_FROM` — optional sender in `"Name <email>"` format; falls back to the Resend sandbox address when unset. Verify a production domain in Resend before using it.

The build succeeds without these variables; only sending fails at runtime.

## Mail implementation

- `src/lib/mail.ts` is the `'use server'` form action: zod-validated, delivered via Resend.
- Bot defense: honeypot field (`website`) plus in-memory per-IP rate limiting (3 requests/minute).
- Email templates live in `src/components/mail-template/`; preview them with `npm run email:dev` at http://localhost:4000.

## Hosting

Deployed on Vercel, with `@vercel/analytics` and `@vercel/speed-insights` mounted in the root layout. New external scripts/styles must pass the CSP allowlist (see [architecture.md](./architecture.md)).
