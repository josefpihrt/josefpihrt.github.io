---
name: update-roslynator-docs
description: Use when publishing roslynator docs on josefpihrt.github.io, regenerating analyzer or refactoring markdown, editing docs/roslynator/analyzers by mistake, bumping RoslynatorRef after release, or running generate_docs.ps1.
---

# Update Roslynator Docs

## Overview

Docusaurus site at https://josefpihrt.github.io/docs/roslynator/. Generated analyzer/refactoring/fix content comes from roslynator XML + CI generators — not from editing gitignored paths.

## When to Use

- Regenerating analyzer/refactoring/fix/API docs locally
- Editing contributor how-tos or metadata reference pages
- Bumping `RoslynatorRef` / `RoslynatorCliRef` after a release
- Agent might edit `docs/roslynator/analyzers/` by mistake

**Not for:** implementing analyzers in roslynator repo (`add-analyzer` etc.).

## Quick Reference

| Task | Where |
|------|-------|
| Generated content source | roslynator `src/*.xml` |
| Local regen | `cd tools && pwsh ./generate_docs.ps1` (from **this** repo's `tools/`) |
| Hand-written pages | `docs/roslynator/*.md` (non-gitignored) |
| CI pins | `.github/workflows/build.yml` lines `RoslynatorRef`, `RoslynatorCliRef` |
| Verify | `npm run build` |

Full paths and CI jobs: [references/generated-paths.md](references/generated-paths.md).

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Edit `docs/roslynator/analyzers/` (or fixes/ref/cli/ref) | Gitignored — edit XML in roslynator repo, then regenerate |
| Follow how-to "edit static files here" blindly | Only non-gitignored `docs/roslynator/*.md`; not generated subfolders |
| `generate_docs.ps1` from repo root without `cd tools` | Run from `josefpihrt.github.io/tools/` |
| Wrong sibling layout | `../../roslynator/` relative to docs `tools/` |
| Skip `RoslynatorRef` after release | Bump pins in `.github/workflows/build.yml` |
| Use `roslynator generate-doc` for site pages | Site uses `generate_docs.ps1` + CI artifact jobs |

**Violating the letter of the rules:** editing gitignored `docs/roslynator/analyzers/` is wasted work even if the edit "looks right" in the preview.

Publication: PR to https://github.com/josefpihrt/josefpihrt.github.io
