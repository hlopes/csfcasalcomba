# AGENTS.md

When you need to search docs, use Context7.

## Commands

- Use **npm** as the runtime/package manager (not bun/yarn)
- `npm run dev` - Start dev server at http://localhost:3000
- `npm run lint` - Lint code
- `npm run format` - Format with Prettier
- `npm run email:dev` - Preview email templates at http://localhost:4000

## Conventions

- **Commit messages**: Conventional commits enforced via Husky/commitlint (format: `type(scope): description`)
- **No testing** - No test framework configured
- **Absolute imports**: Use `@/` alias (configured in tsconfig.json)

## Architecture

- **src/app/** - Next.js App Router pages (file-system routing)
- **src/components/** - Granular component directories (accordion/, hero/, ui/, etc.)
- **src/data/** - Static data organized by section (home/, infancia/, area-senior/, etc.)
- **src/lib/** - Utilities (utils.ts, mail.ts)
- **src/types/** - TypeScript interfaces

## Email Development

- Email templates in `src/components/mail-template/`
- Preview at http://localhost:4000 via `npm run email:dev`
- Uses React Email + Resend

## Key Files

- `src/lib/utils.ts` - Contains `cn()` helper for class merging
- `src/app/layout.tsx` - Root layout with providers
- `src/data/menu-data.ts` - Navigation structure
