# Agent instructions

## Git workflow

- Never push or commit directly to `main` (or `master`).
- Create a feature branch, commit there, and open a PR.
- Do not push to remote unless the user asks.
- Do not force-push to `main` or rewrite published history unless the user explicitly requests it.
- Avoid `--force` / `--force-with-lease` on shared branches unless the user explicitly requests it.
- Do not create commits unless the user asks.
- Do not skip git hooks (`--no-verify`) unless the user asks.
- Do not merge your own PR unless the user explicitly asks.

## This repository

- Do not hand-edit gitignored generated paths under `docs/roslynator/analyzers/`, `docs/roslynator/refactorings/`, `docs/roslynator/fixes/`, `docs/roslynator/cli/`, or `docs/roslynator/ref/`.
- Use [.claude/skills/update-roslynator-docs/](.claude/skills/update-roslynator-docs/) and run `cd tools && pwsh ./generate_docs.ps1` to regenerate Roslynator docs.
- For Roslynator code contributions, see [contributing with agent skills](https://josefpihrt.github.io/docs/roslynator/contributing-with-agent-skills) and the [roslynator AGENTS.md](https://github.com/dotnet/roslynator/blob/main/AGENTS.md).
