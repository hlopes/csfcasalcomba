# Styling

## Tailwind v4 — CSS-first

- There is no `tailwind.config.js`; don't create one. Theme tokens, colors, shadows, and the `.dark` variant are defined in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`, `@utility`). Edit `globals.css` to change theme tokens.
- Compose conditional classes with `cn()` from `@/lib/utils` (clsx + tailwind-merge).

## shadcn/ui primitives

Primitives follow shadcn/ui style (`components.json`, style `new-york`, lucide icons) and live in `src/components/ui/`. Add new primitives with `npx shadcn@latest add <name>`, then lint and format the touched files.

## Formatting

Run Prettier only on the files you touched: `npx prettier --write <path>`. The full-repo `format` script in `package.json` shows diffs for every untouched file — leave it for humans.
