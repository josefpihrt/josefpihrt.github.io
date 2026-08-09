# Contributing with Agent Skills

Contributions are welcome — including from developers who are new to the [Roslyn API](https://github.com/dotnet/roslyn). That is common. Roslynator is **metadata-driven**: you edit XML, run codegen, implement a focused class, and add a test. The repo also ships [client libraries](ref) (`BaseDiagnosticAnalyzer`, syntax helpers, in-repo test verifiers) so most tasks do not require deep Roslyn expertise.

## Agent skills

**Agent skills** in the [roslynator repository](https://github.com/dotnet/roslynator/tree/main/.claude/skills) are step-by-step workflows for AI coding agents (Cursor, Claude Code). When you clone the repo, agents can load them automatically from `.claude/skills/`.

You can also read `SKILL.md` files directly — they are useful contributor guides even without an AI agent.

| Skill | Use when |
|-------|----------|
| [add-analyzer](https://github.com/dotnet/roslynator/tree/main/.claude/skills/add-analyzer) | Adding a new `RCS####` analyzer |
| [add-refactoring](https://github.com/dotnet/roslynator/tree/main/.claude/skills/add-refactoring) | Adding a new `RR####` refactoring |
| [add-compiler-diagnostic-fix](https://github.com/dotnet/roslynator/tree/main/.claude/skills/add-compiler-diagnostic-fix) | Adding a code fix for `CS####` |
| [fix-analyzer-bug](https://github.com/dotnet/roslynator/tree/main/.claude/skills/fix-analyzer-bug) | Fixing a false positive, false negative, or bad code fix |
| [deprecate-analyzer-or-refactoring](https://github.com/dotnet/roslynator/tree/main/.claude/skills/deprecate-analyzer-or-refactoring) | Obsoleting or retiring a rule |
| [release-roslynator](https://github.com/dotnet/roslynator/tree/main/.claude/skills/release-roslynator) | Preparing a release (maintainers) |

Skills encode repo-specific details that are easy to get wrong when following generic Roslyn tutorials alone — for example running codegen from the `tools` directory, using `ChangeLog.md`, and using in-repo test base classes instead of the public NuGet testing packages.

## Where to start

1. Pick an [up-for-grabs issue](https://github.com/dotnet/roslynator/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Aup-for-grabs) or open a new issue with the rule id in the title (`RCS####`, `RR####`, or `CS####`).
2. Bug fixes and small improvements can be implemented right away. New analyzers or refactorings should be discussed first ([how to add an analyzer](how-to-add-new-analyzer), [how to add a refactoring](how-to-add-new-refactoring)).
3. Read [how to use the .NET API](how-to-use-net-api) for Roslynator client libraries.
4. Use [in-repo testing](testing) patterns — not only the public NuGet testing docs.

## Learn Roslyn

When you do need Roslyn background:

- [Roslyn GitHub repository](https://github.com/dotnet/roslyn)
- [Roslynator API reference](ref)
- Existing analyzers in `src/Analyzers/CSharp/Analysis/` and matching tests in `src/Tests/`
