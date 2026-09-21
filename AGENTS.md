# Hackathon 2026 agent rules

<!--
Read by Claude Code (via CLAUDE.md), Cursor, Copilot and other tools that
follow the AGENTS.md convention.

Keep it short. Every line costs context on every request, so write only
what an agent would get WRONG without being told. Skip anything it can
read for itself in package.json, the file tree or git history.
-->

## Project

<!-- One or two lines: what this is, who it is for, what stage it is at.
     Hackathon constraints belong here (demo date, what "done" means). -->

## Stack constraints

<!-- Decisions that must NOT be changed, and the reason why.
     A rule without a reason gets overridden the first time it is inconvenient.
     Candidates from this repo: the Tailwind v4 approach, the formatter
     choice, the TypeScript version pin. -->

## Conventions

### Commits

Conventional Commits, always. No exceptions.

```
<type>(<optional scope>): <subject>
```

Types in use: `feat`, `fix`, `chore`, `build`, `ci`, `docs`, `refactor`, `test`, `perf`.

- Subject in the imperative, lowercase, no trailing period.
- Use the body to explain *why*, whenever the reason is not obvious from the diff.
- Breaking changes: `!` after the type plus a `BREAKING CHANGE:` footer.

**No AI attribution.** Never add a `Co-Authored-By` trailer for an AI, or any
"generated with" line, to a commit message or a pull request description.

**"Commit this" allows several commits.** Split distinct concerns without
asking. Group by reason for the change, not by directory. Tests land with
the code they cover.

**Correcting an unpushed commit:** offer to amend or squash, and ask. Never
stack an "actually not X" commit, and never rewrite history silently.

### Comments

Comments explain behaviour and intent only. Never restate the code, never
explain standard framework behaviour.

A "why" comment is load-bearing. Never delete the comment and the shape it
guards in the same edit.

### Changing shared shapes

Grep every dependent first. This matters most where the compiler cannot
help: locale keys, auto-imported symbols, route names, anything referenced
by string.

### Config and suppressions

Never add config the tool already derives.

A new suppression (`@ts-ignore`, `eslint-disable`) needs a reason on the same
line. Do not copy existing violations as precedent: old code predating a rule
is not permission to add more.

### Writing

No em dashes anywhere: code comments, commit messages, docs, locale strings.
Use a comma, period, colon or parentheses. Plain words over jargon shorthand.

## Commands

Verify every change with all three. Do not report success without running them.

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Node is managed by fnm and is not on PATH in non-interactive shells. Apply
`fnm env` first, or the commands fail with "node is not recognized".

## Reserved for humans

Agents must never run these. Prepare the work, then stop and hand it over:

- `git push` in any form, including pushing tags. Never force-push `main`.
- Releases of any kind: version bumps, tags, `pnpm publish`, deploys, hosting CLIs.

Committing locally is fine. Anything that publishes outward is not.

## Do not touch

**The git index.** No `git add`, and no `git reset`, `git restore --staged` or
`git checkout --` either. Staging is how the user reads a diff, so changing it
destroys their review.

**Generated output.** `.nuxt/` and `.output/` are rewritten by `nuxt prepare`
and `nuxt build`. Edit the source and regenerate.

## Gotchas

<!-- Environment quirks and past traps. The kind of thing that costs an
     hour to rediscover. -->
