# Hackathon 2026

Nuxt 4 app, server-rendered, styled with Tailwind CSS v4.

## Stack

| Piece | Choice |
| --- | --- |
| Framework | Nuxt 4 (SSR, Nitro server) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Linting | `@nuxt/eslint` flat config, stylistic rules on |
| Types | TypeScript 5.9 + `vue-tsc`, typed pages enabled |
| Package manager | pnpm (pinned in `packageManager`) |

## Requirements

Node version is pinned in `.node-version`. With `fnm` or `nvm` installed it switches automatically on `cd`.

## Setup

```bash
pnpm install
```

`postinstall` runs `nuxt prepare`, which generates `.nuxt/` — auto-import types, the typed route map and the ESLint config all live there. It is gitignored and regenerates on every install.

## Development

```bash
pnpm dev          # http://localhost:3000
```

## Checks

```bash
pnpm lint         # eslint .
pnpm lint:fix     # autofix, including formatting
pnpm typecheck    # vue-tsc via nuxt typecheck
```

CI runs all three plus a build on every push and pull request.

## Production

```bash
pnpm build        # outputs .output/
pnpm preview      # serve the build locally
```

Deploy `.output/` to any Nitro-supported host, or run it directly:

```bash
node .output/server/index.mjs
```

## Conventions

- **Routes** are files in `app/pages/`. `about.vue` becomes `/about` — no route config.
- **Typed routes** are on, so `navigateTo({ name: 'about' })` is checked at compile time. Raw path strings are not checked; prefer route names.
- **Auto-imports** cover `app/components/`, `app/composables/`, `app/utils/`, plus all Nuxt and Vue APIs. Do not write import statements for those.
- **Tailwind v4 is CSS-first.** There is no `tailwind.config.js`; customise theme tokens with `@theme` in `app/assets/css/main.css`.
- **ESLint owns formatting.** Do not add Prettier — the two will fight.
