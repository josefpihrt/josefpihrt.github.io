# Generated Paths and Regeneration

Supporting facts for `update-roslynator-docs`. The gated publish ritual (pins → PR → squash-merge → version → deploy tag) lives in SKILL.md. This file covers generated-path rules and optional local regen.

## Gitignored generated paths (`docs/.gitignore`)

Do not hand-edit:

```
roslynator/analyzers
roslynator/refactorings
roslynator/fixes
roslynator/cli
roslynator/ref
roslynator/analyzers.md
roslynator/configuration.md
roslynator/fixes.md
roslynator/ref.md
roslynator/refactorings.md
```

Source of truth: XML in the **roslynator** repo (`Analyzers.xml`, `Refactorings.xml`, `CodeFixes.xml`, `Diagnostics.xml`) plus CLI/API generators. CI checks out roslynator at `RoslynatorRef` / `RoslynatorCliRef` from `.github/workflows/build.yml`.

## Hand-written (`docs/roslynator/`)

`index.md`, `cli.md`, `testing.md`, how-to pages (`how-to-add-new-analyzer`, `how-to-add-new-refactoring`, `how-to-add-compiler-diagnostic-fix`, etc.), `contributing-with-agent-skills.md`, `analyzer-metadata.md`, `refactoring-metadata.md`, guides.

Boundary: `roslynator/cli/` is generated; `roslynator/cli.md` is hand-written. For orang, `orang/cli.md` is generated.

## Local regeneration (optional — not a publish gate)

Sibling layout:

```
<code-parent>/
  josefpihrt.github.io/
  roslynator/
```

**Must run from `josefpihrt.github.io/tools/`:**

```bash
cd tools && pwsh ./generate_docs.ps1
```

Invokes roslynator `generate_cli_docs`, `generate_ref_docs`, `generate_metadata`, `generate_configuration_file`; copies `build/*` → `docs/roslynator`.

Cleanup: `tools/delete_docs.ps1`.

Pin bumps do **not** require local regen; CI jobs rebuild from the workflow pins.

## CI jobs (`.github/workflows/build.yml`)

| Job | Output |
|-----|--------|
| `build_roslynator` | analyzer/refactoring/fix pages |
| `build_roslynator_cli` | `cli/` |
| `build_roslynator_ref` | `ref/`, `ref.md` |
| `build_roslynator_configuration` | `configuration.md` |

Pins (examples may lag; always read `build.yml`):

```yaml
RoslynatorRef: v4.16.0
RoslynatorCliRef: cli-v0.13.0
```

`build_docusaurus` merges artifacts, spellcheck, `npm run build`. Deploy when a `v*` tag is pushed.

Verify locally (optional): `npm run build` or `npm start`.
