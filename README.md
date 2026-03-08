# csfcasalcomba

Welcome to the csfcasalcomba project! This is a modern, high-performance web application built with Next.js, TypeScript, and Tailwind CSS.

## 📖 About This Site

This website serves as the online presence for the "Centro Social e Paroquial de Casal Comba", a social solidarity institution. The site provides information about the institution, its services, and its projects. It is designed to be a resource for the community, offering details on services for children and seniors, as well as institutional documents and contact information.

## Sitemap

The website is organized into the following main sections:

- `/`: The homepage, featuring a brief introduction to the institution and its key services.
- `/instituicao`: Information about the institution's history, mission, and values.
- `/infancia`: Details about the services and programs available for children.
- `/area-senior`: Information on the services and support provided for seniors.
- `/documentos`: A collection of important institutional documents.
- `/organograma`: The organizational chart of the institution.
- `/projectos-parcerias`: Information about ongoing projects and partnerships.
- `/contato`: Contact information and a form to get in touch with the institution.

## ✨ Features

- **Next.js 16**: The latest version of the popular React framework for server-side rendering, static site generation, and more.
- **TypeScript**: Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **Tailwind CSS 4**: A utility-first CSS framework for rapid UI development.
- **Bun**: A fast all-in-one JavaScript runtime, bundler, and package manager.
- **ESLint and Prettier**: For consistent code style and quality.
- **Husky and commitlint**: To enforce conventional commit messages.
- **React Email and Resend**: For building and sending beautiful emails with React.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/)

### Installation and Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/csfcasalcomba.git
    cd csfcasalcomba
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the following environment variables:

    ```
    # Resend API Key
    # You can get one from https://resend.com/
    RESEND_API_KEY=your-api-key
    ```

4.  **Run the development server:**

    ```bash
    bun run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the application for production.
- `bun run start`: Starts a production server.
- `bun run lint`: Lints the codebase for errors.
- `bun run format`: Formats the code with Prettier.
- `bun run email:dev`: Starts the React Email development server.

## 📂 Project Structure

```
csfcasalcomba/
├── .github/              # GitHub Actions and issue templates
├── .husky/               # Husky pre-commit hooks
├── .next/                # Next.js build output
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable components
│   │   ├── mail-template/ # React Email templates
│   │   ├── providers/    # React Context providers
│   │   ├── shared/       # Shared components
│   │   └── ui/           # UI components (e.g., buttons, inputs)
│   ├── lib/              # Library functions and utilities
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── bun.lockb             # Bun lockfile
├── components.json       # Shadcn UI components configuration
├── commitlint.config.js  # Commitlint configuration
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── prettier.config.js    # Prettier configuration
├── README.md             # This file
└── tsconfig.json         # TypeScript configuration
```

## 🏛️ Architecture

This project utilizes the Next.js App Router, which enables a file-system-based routing mechanism and allows for the easy creation of layouts, pages, and components. The architecture is designed to be modular and scalable, with a clear separation of concerns.

- **`src/app`**: Contains all the routes and pages of the application.
- **`src/components`**: Home to all reusable components, categorized into `shared`, `ui`, `providers`, and `mail-template`.
- **`src/lib`**: Includes utility functions, API clients, and other library code.

## 🎨 Styling

Styling is handled with Tailwind CSS, a utility-first CSS framework. We use `clsx` to conditionally apply classes and `tailwind-merge` to resolve conflicting classes.

- **`tailwind.config.js`**: The configuration file for Tailwind CSS.
- **`postcss.config.mjs`**: The configuration file for PostCSS.
- **`src/styles/globals.css`**: Global styles and Tailwind CSS directives.

## 📧 Email

This project uses React Email to build and style emails with React components, and Resend to send them.

- **`src/components/mail-template`**: Contains all the email templates.
- **`bun run email:dev`**: Starts a development server at [http://localhost:4000](http://localhost:4000) to preview your email templates.

## 🎨 Linting and Formatting

This project uses ESLint and Prettier to maintain code quality and consistency.

- **ESLint**: Checks for code quality and style issues. The configuration is in `eslint.config.mjs`.
- **Prettier**: An opinionated code formatter. The configuration is in `prettier.config.js`.

We recommend installing the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for your code editor.

## 📝 Commit Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. A pre-commit hook is set up with Husky and commitlint to enforce this.

When you commit, your commit message should be in the following format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Example:**

```
feat(auth): add login page
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
