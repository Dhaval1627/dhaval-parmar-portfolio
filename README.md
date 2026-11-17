# Dhaval Parmar — Developer Portfolio

A single-page portfolio for Dhaval Parmar, a PHP Laravel Developer and Shopify App Developer. It presents professional experience, technical skills, Shopify applications, Laravel projects, and backend development work.

**Live site:** [https://dhaval1627.github.io/dhaval-parmar-portfolio/](https://dhaval1627.github.io/dhaval-parmar-portfolio/)

**Repository:** [https://github.com/Dhaval1627/dhaval-parmar-portfolio](https://github.com/Dhaval1627/dhaval-parmar-portfolio)

## Contents

- [About the portfolio](#about-the-portfolio)
- [Features](#features)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Customization](#customization)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)

## About the portfolio

The site is a static page built with Astro and deployed on GitHub Pages. Visitors can move through one continuous page:

- A professional introduction with role, specialization, and a short bio
- Technical skills grouped by discipline
- Featured projects, including Shopify public and private apps and a Laravel/CodeIgniter CRM
- Work experience
- Education
- Contact actions and social profiles (email, LinkedIn, and GitHub)

Empty projects, experience, or education data is omitted from both the page and the navigation.

## Features

These behaviors are implemented in the current source.

- **Dark theme.** The page uses a slate background (`#020617`), glass-style cards, a green accent (`#22C55E`), and an indigo secondary accent (`#6366F1`).
- **Responsive layout.** Sections stack on small screens and use a two-column grid from the `lg` breakpoint. The header switches to a hamburger menu below `md`.
- **Navigation and scrolling.** In-page links target About, Projects, Experience, and Education. The header tracks the section in view, smooth scrolling is enabled, and each section has a scroll margin so the fixed header does not cover headings.
- **Hero.** Name, title, specialization, calls to action, social links, and a short stats strip.
- **About and skills.** Biography plus skill groups rendered as labeled badge lists.
- **Project showcase.** Numbered cards with a category tag, description, and technology tags. Category colors distinguish Shopify public apps, Shopify private apps, and the real-estate CRM. An optional `link` turns a card into an external link.
- **Experience.** A timeline of roles with company, date range, and bullet points.
- **Education.** A timeline of degrees, schools, dates, and achievements.
- **Contact and social links.** “Hire Me” and “Contact” open a mailto link. Email, phone, LinkedIn, GitHub, and Twitter icons render only when the matching value is set in configuration. Twitter is supported by the components and is not set in the current config.
- **SEO and social metadata.** The document head sets the title, description, author, theme color, Open Graph title/description/type, and Twitter card title and description from `src/config.ts`.
- **Accessibility and reduced motion.** Skip link, labeled navigation, keyboard-dismissible mobile menu, visible focus rings, and `prefers-reduced-motion` support that turns off smooth scrolling and continuous animations (aurora background, fade-in, cursor blink, scroll indicator, and timeline pulse).

## Technology stack

Versions below are the ones locked in `package-lock.json`.

| Category | Technology |
| --- | --- |
| Framework | [Astro](https://astro.build/) 5.12.3 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4.1.11, loaded with `@tailwindcss/vite` 4.1.11 |
| Languages | TypeScript (`src/config.ts`, Astro component scripts, `tsconfig.json` extending `astro/tsconfigs/strict`), JavaScript, HTML, CSS |
| Build tools | Vite (through Astro), npm |
| Fonts | IBM Plex Sans and JetBrains Mono (Google Fonts) |
| Deployment | GitHub Actions to GitHub Pages (Node.js 22) |

There is no UI framework such as React or Vue. Pages are Astro components that compile to static HTML.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages build and deploy
├── public/
│   └── favicon.svg             # Site icon
├── src/
│   ├── components/
│   │   ├── About.astro         # Bio and skill groups
│   │   ├── Education.astro     # Education timeline
│   │   ├── Experience.astro    # Work history timeline
│   │   ├── Footer.astro        # Social links and footer navigation
│   │   ├── Header.astro        # Fixed navigation and mobile menu
│   │   ├── Hero.astro          # Introduction and calls to action
│   │   └── Projects.astro      # Project cards and category tags
│   ├── pages/
│   │   └── index.astro         # Single page, metadata, and section order
│   ├── styles/
│   │   └── global.css          # Tailwind theme tokens and global styles
│   └── config.ts               # Portfolio content
├── .gitignore
├── astro.config.mjs            # Site URL, base path, Tailwind plugin
├── LICENSE.md
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

| Path | Purpose |
| --- | --- |
| `src/config.ts` | Personal details, skills, projects, experience, education, and contact links |
| `src/pages/index.astro` | Composes every section and sets document metadata |
| `src/components/` | One component per section. Each component reads `siteConfig` |
| `src/styles/global.css` | Color, type, motion, focus, and scrollbar styles |
| `public/` | Files copied to the site root. The favicon is requested with the configured base path |
| `astro.config.mjs` | `site`, `base`, and the Tailwind Vite plugin |
| `.github/workflows/deploy.yml` | Production build and GitHub Pages deployment |

Generated folders such as `node_modules/`, `dist/`, and `.astro/` are gitignored and are not part of the source.

## Getting started

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 22 (the version used in deployment) and npm

Astro 5 also runs on Node.js 18.20.8 and 20.3 or newer. The GitHub Actions workflow installs Node.js 22.

**Clone, install, and run**

```bash
git clone https://github.com/Dhaval1627/dhaval-parmar-portfolio.git
cd dhaval-parmar-portfolio
npm ci
npm run dev
```

`npm ci` installs the exact versions in `package-lock.json`.

The development server starts at [http://localhost:4321](http://localhost:4321). Because `base` is `/dhaval-parmar-portfolio`, open:

[http://localhost:4321/dhaval-parmar-portfolio/](http://localhost:4321/dhaval-parmar-portfolio/)

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server with hot reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run astro` | Run the Astro CLI (`astro dev`, `astro build`, `astro check`, and other Astro commands) |

`dev`, `build`, and `preview` are the scripts used for day-to-day work. `astro` forwards arguments to the Astro CLI.

## Customization

### Content — `src/config.ts`

`siteConfig` is the content source. Components import it directly. There is no CMS and no content collection.

| Field | Used for |
| --- | --- |
| `name`, `title`, `description` | Hero, document title, meta description, and social metadata |
| `social.email` | Mailto links, including Hire Me and Contact |
| `social.phone` | Optional `tel:` link in the hero and footer |
| `social.linkedin`, `social.github`, `social.twitter` | Optional profile links. Omit a key to hide that icon |
| `aboutMe` | About paragraph |
| `skills` | Object whose keys are group labels and whose values are string arrays |
| `projects` | Project cards. See the shape below |
| `experience` | `{ company, title, dateRange, bullets }` |
| `education` | `{ school, degree, dateRange, achievements }` |

Project objects use this shape:

```ts
{
  name: string;
  category?: string;
  description: string;
  skills?: string[];
  highlights?: string[];
  link?: string;
}
```

`Projects.astro` renders `name`, `category`, `description`, `skills`, and `link`. `highlights` is stored in the current config and is not rendered. Removing every project, experience entry, or education entry hides that section and its navigation links.

`accentColor` is declared in `src/config.ts` and is not read by any component or stylesheet. Changing it does not change the theme.

### Sections — `src/components/`

Edit a component when the layout or markup of that section should change. `src/pages/index.astro` controls section order and the document `<head>`.

### Theme — `src/styles/global.css`

Theme tokens are declared in the Tailwind v4 `@theme` block:

| Token | Current value | Role |
| --- | --- | --- |
| `--color-background` | `#020617` | Page background |
| `--color-surface` | `#0F172A` | Alternate section background |
| `--color-card` | `#0E1223` | Card background |
| `--color-primary` | `#1E293B` | Raised surface |
| `--color-accent` | `#22C55E` | Green accent |
| `--color-accent-secondary` | `#6366F1` | Indigo accent |
| `--color-foreground` | `#F8FAFC` | Primary text |
| `--color-muted` | `#94A3B8` | Secondary text |
| `--color-border` | `#334155` | Borders |
| `--font-sans` | IBM Plex Sans | Body type |
| `--font-mono` | JetBrains Mono | Headings, labels, and tags |

`color-scheme: dark` is set on `html`. Selection color, caret, focus ring, scrollbar, glass panels, and the aurora background are also defined in this file.

Many components also use the hex values `#22C55E` and `#6366F1` directly in Tailwind classes. A full accent change means updating both the tokens in `global.css` and those hardcoded classes. The Google Fonts stylesheet is linked from `src/pages/index.astro`.

### Static files — `public/`

Files in `public/` are served from the site root. The only asset today is `favicon.svg`, referenced in `index.astro` with Astro’s `BASE_URL` so it resolves under the GitHub Pages subpath.

## Deployment

The site is a static Astro build published with GitHub Actions.

**Astro configuration** (`astro.config.mjs`):

- `site`: `https://dhaval1627.github.io`
- `base`: `/dhaval-parmar-portfolio`

Together these produce the live URL [https://dhaval1627.github.io/dhaval-parmar-portfolio/](https://dhaval1627.github.io/dhaval-parmar-portfolio/).

**Workflow:** `.github/workflows/deploy.yml` (`Deploy to GitHub Pages`)

- Runs on every push to the `portfolio-customization` branch.
- Also supports **workflow_dispatch**, so it can be started manually from the Actions tab.
- Uses Node.js 22, `npm ci`, and `npm run build`.
- Uploads the `dist/` directory and deploys it with `actions/deploy-pages`.
- Requests `contents: read`, `pages: write`, and `id-token: write`.
- Deploys into the `github-pages` environment. A new run does not cancel one that is already in progress.

**Enable GitHub Pages**

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `portfolio-customization`, or run **Deploy to GitHub Pages** with **Run workflow**.

**Confirm a deployment**

1. Open the **Actions** tab and select the latest **Deploy to GitHub Pages** run.
2. Confirm the `build` and `deploy` jobs both succeed.
3. Open [https://dhaval1627.github.io/dhaval-parmar-portfolio/](https://dhaval1627.github.io/dhaval-parmar-portfolio/). The first deployment can take a minute to become available.

## Author

**Dhaval Parmar**  
PHP Laravel Developer | Shopify App Developer

- Email: [dhavalsunnyparmar@gmail.com](mailto:dhavalsunnyparmar@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/dhaval-parmar-35bb6b237/](https://www.linkedin.com/in/dhaval-parmar-35bb6b237/)
- GitHub: [https://github.com/dhaval1627](https://github.com/dhaval1627)

## License

This project is licensed under the [MIT License](LICENSE.md).

Copyright (c) 2025 Ryan Fitzgerald.
