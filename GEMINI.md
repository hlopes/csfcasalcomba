# GEMINI.md - Context & Instructions

This document provides foundational context and operational guidelines for the **csfcasalcomba** project.

## Project Overview

The **csfcasalcomba** project is a modern, high-performance institutional website for the "Centro Social e Paroquial de Casal Comba". It is built using the **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **Bun**.

### Core Technologies

- **Framework**: [Next.js 16.2.1](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.1.8](https://tailwindcss.com/)
- **Runtime/Package Manager**: [Bun](https://bun.sh/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Forms/Validation**: [Zod](https://zod.dev/)
- **Email**: [React Email](https://react.email/) & [Resend](https://resend.com/)
- **Components**: Radix UI (via `@radix-ui/*`) & Shadcn UI-inspired modular structure.

---

## Architecture & Structure

The project follows a modular and feature-based organization:

- **`src/app/`**: Next.js App Router pages and layouts.
  - Routing is file-system based (e.g., `src/app/area-senior/page.tsx`).
  - Layouts handle global UI (Header, Footer, ThemeProvider).
- **`src/components/`**: Highly granular component structure. Each component type has its own directory (e.g., `accordion/`, `hero/`, `ui/`).
- **`src/data/`**: Static data for the website, organized by section (e.g., `home/`, `infancia/`, `area-senior/`).
- **`src/lib/`**: Utility functions (`utils.ts`) and third-party integrations (e.g., `mail.ts`).
- **`src/types/`**: Global TypeScript interface and type definitions.
- **`public/`**: Static assets like images and SVG shapes.

---

## Building and Running

The project uses **Bun** as its primary runner.

- **Development**: `bun run dev` (Starts dev server at http://localhost:3000)
- **Build**: `bun run build` (Builds for production)
- **Production Preview**: `bun run start` (Starts production server)
- **Linting**: `bun run lint` (Checks for code quality/style)
- **Formatting**: `bun run format` (Runs Prettier)
- **Email Development**: `bun run email:dev` (Preview email templates at http://localhost:4000)

---

## Development Conventions

### Coding Style & Standards

- **Types**: Use TypeScript for all source files. Prefer interfaces for object shapes and types for unions/aliases.
- **Naming**: Use PascalCase for React components and camelCase for functions, variables, and properties.
- **Styling**: Use Tailwind CSS utility classes. Use `cn()` (from `src/lib/utils.ts`) for conditional class merging.
- **Imports**: Use absolute imports with the `@/` alias (configured in `tsconfig.json`).
- **Formatting**: Adhere to Prettier rules defined in `prettier.config.js`.
- **Linting**: Follow ESLint rules defined in `eslint.config.mjs`.

### Testing

- *Currently, there is no explicit testing framework configured in `package.json`. If adding tests, consider using Bun's built-in test runner or Vitest.*

### Contributions & Commits

- **Conventional Commits**: The project enforces conventional commit messages via Husky and `commitlint`.
  - Format: `<type>[optional scope]: <description>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Pre-commit Hooks**: Husky is configured to run `commitlint` on `commit-msg`.

### UI Components

- **Modular UI**: Add new components to their respective directory in `src/components`.
- **Themes**: Support for light and dark modes is handled via `next-themes`. Use Tailwind's `dark:` modifier.

---

## Key Files for Reference

- `package.json`: Main project configuration and dependencies.
- `next.config.ts`: Next.js specific configuration.
- `tailwind.config.js`: Tailwind CSS theme and plugin configuration.
- `src/app/layout.tsx`: Root layout with global providers and components.
- `src/lib/utils.ts`: Common utility functions like `cn`.
- `src/data/menu-data.ts`: Navigation menu structure.
