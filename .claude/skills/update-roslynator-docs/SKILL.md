---
name: update-roslynator-docs
description: Use when publishing roslynator docs after a product release, bumping RoslynatorRef or RoslynatorCliRef, rolling the site changelog for a Roslynator bump, cutting a docs-site v* deploy tag, regenerating docs locally, or editing gitignored docs/roslynator/analyzers by mistake.
---

# Update Roslynator Docs

## Overview

Five hard-gated steps to publish docs after a Roslynator product release: discover tags + bump pins/changelog → PR → squash-merge → choose site version → push deploy tag. CI regenerates generated pages from the pins — do not hand-edit gitignored paths.

**Violating the letter of the gates is violating the spirit of the gates.** Do not batch steps or confirm once for the whole publish.

**Not for:** implementing analyzers in the roslynator repo; shipping product `v*` / `cli-v*` tags (`release-roslynator`).

## Hard gates

Before each step: present what you will do, then use interactive confirmation (`AskQuestion` if available; otherwise ask and wait). Do **not** use markdown checkboxes.

**STOP. Do NOT proceed** to the next step until the user explicitly confirms the current step.

## Quick Reference

| Step | Gate | Action |
|------|------|--------|
| 1 | Confirm before commit | Latest `v*` + same-commit `cli-v*`; bump `build.yml` + `CHANGELOG.md` |
| 2 | Confirm before push/PR | Create PR |
| 3 | Confirm before merge | `gh pr merge --squash` |
| 4 | Confirm version | Pull `main`; default site version = last docs `v*` + revision bump |
| 5 | Confirm before tag push | `git tag` + `git push` (queues Pages deploy) |

Generated paths / local regen: [references/generated-paths.md](references/generated-paths.md).

## Step 1 — Pins + changelog

**STOP until user confirms Step 1.**

1. Resolve latest Roslynator analyzer tag (`v*`) from sibling clone or remote (`git ls-remote --tags`, `gh release list --repo dotnet/roslynator`).
2. List tags on **that commit**. Require a `cli-v*` on the **same commit**. If missing: **STOP. Do NOT proceed** until the user explicitly overrides or a matching CLI tag exists.
3. Branch from latest docs `main` (e.g. `bump/roslynator-X.Y.Z`).
4. Edit [`.github/workflows/build.yml`](../../.github/workflows/build.yml):
   ```yaml
   RoslynatorRef: vX.Y.Z
   RoslynatorCliRef: cli-vA.B.C
   ```
5. Edit [`CHANGELOG.md`](../../CHANGELOG.md): under `## [Unreleased]`, insert a dated section using the **provisional** next site version (latest docs-site `v*` tag’s patch/revision **+ 1**; **tags win** over older changelog headers):
   ```markdown
   ## [0.4.N] - YYYY-MM-DD

   ### Changed

   - Update Roslynator to `X.Y.Z`
   - Update Roslynator CLI to `A.B.C`
   ```
6. Commit only those intentional files. Do **not** run `generate_docs.ps1` or edit gitignored generated trees as part of this bump.

**STOP.** Wait for Step 2 confirmation.

## Step 2 — Create PR

**STOP until user confirms Step 2.**

Push the branch and open a PR — title style `Bump Roslynator to X.Y.Z`.

**STOP.** Wait for Step 3 confirmation.

## Step 3 — Squash-merge

**STOP until user confirms Step 3.**

```bash
gh pr merge <PR_NUMBER> --squash
```

**STOP.** Wait for Step 4 confirmation.

## Step 4 — Site version

**STOP until user confirms Step 4 (including the version number).**

1. `git checkout main && git pull origin main`
2. Default site version = latest docs tag `v0.A.B` with **B+1** (e.g. `v0.4.33` → `0.4.34`). User may supply another version.
3. If the confirmed version differs from the changelog header from Step 1, update `CHANGELOG.md` on `main` (small follow-up PR or amend via new commit — never force-push) **before** tagging so header and tag match.

**STOP.** Wait for Step 5 confirmation.

## Step 5 — Deploy tag

**STOP until user confirms Step 5.**

```bash
git tag "v0.A.B"
git push origin "v0.A.B"
```

Report **tag pushed / deploy workflow queued**, not “site live”, until Actions succeeds. Do not amend published tags.

## Outside the five gates

- Local regen / hand-written pages / “don’t edit analyzers/”: see [references/generated-paths.md](references/generated-paths.md). Not required for a pin bump.
- Product releases on `dotnet/roslynator`: use `release-roslynator` there — this skill only **consumes** those tags as pins.

## Common Mistakes

| Mistake | Fix |
|---------|------|
| Pin CLI from a different commit than `v*` | Same commit required; STOP if absent |
| Default next version from CHANGELOG while tags are ahead | **Tags win** for revision default |
| `gh pr merge` without `--squash` | Always `--squash` |
| Merge + tag in one go | Separate STOPs (Steps 3–5) |
| `generate_docs.ps1` required for pin bump | CI regenerates from pins; skip unless user asks |
| Edit `docs/roslynator/analyzers/` (etc.) | Gitignored — see reference |
| Claim “deployed” when tag just pushed | Say tag pushed / workflow queued |
| Invent site version without last-tag+1 | Default = latest docs `v*` patch + 1; user may override |
| Pins already match latest `v*` / same-commit `cli-v*` | Report nothing to bump; do not invent a publish |
| `generate_docs.ps1` from repo root without `cd tools` | Run from `josefpihrt.github.io/tools/` (optional regen only) |
