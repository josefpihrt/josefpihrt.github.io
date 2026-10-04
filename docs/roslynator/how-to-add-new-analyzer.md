# How to Add New Analyzer

:::tip
See [Contributing with agent skills](contributing-with-agent-skills) and the [add-analyzer](https://github.com/dotnet/roslynator/tree/main/.claude/skills/add-analyzer) skill in the roslynator repo.
:::

## Discuss the Idea

Start by opening an [issue](https://github.com/dotnet/roslynator/issues/new) to describe your idea. Once maintainers approve it, you can begin implementation.

## Choose Project/Package

### Analyzers

Use the `Analyzers` package for analyzers that do not fit into any of the following packages.
ID prefix for these analyzers is `RCS1`.

### Formatting.Analyzers

Use the `Formatting.Analyzers` package for analyzers that report invalid formatting. Code fixes for these analyzers typically adjust whitespace only.
ID prefix for these analyzers is `RCS0`.

### CodeAnalysis.Analyzers

Use the `CodeAnalysis.Analyzers` package for analyzers that analyze types from Roslyn API (`Microsoft.CodeAnalysis*` packages).
ID prefix for these analyzers is `RCS9`.


:::note
It's rare, but it's possible to introduce new project/package.
:::

## Add Metadata

Add analyzer metadata to [Analyzers.xml](https://github.com/dotnet/roslynator/blob/main/src/Analyzers.xml). A [template](https://github.com/dotnet/roslynator/blob/main/src/Template.Analyzers.xml) is available.

See the [metadata reference](analyzer-metadata) for details.

## Generate Code

Run [`tools/generate_code.ps1`](https://github.com/dotnet/roslynator/blob/main/tools/generate_code.ps1), or open the `CodeGenerator` project in Visual Studio.

## Implement Analyzer

Add a class deriving from `BaseDiagnosticAnalyzer`, or reuse an existing analyzer class.

## Implement Code Fix

:::info
Implement a code fix for the analyzer (strongly recommended).
:::

Add a class deriving from `BaseCodeFixProvider`, or reuse an existing code fix provider class.

## Add Tests  

- Add new file to a folder [Analyzers.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/Analyzers.Tests). Convention is to name the file `[Id][Identifier]Tests.cs`.

:::tip
In test code, `[|` and `|]` mark the start and end of the selected text.
:::

## Update Changelog

```markdown title="CHANGELOG.md"
### Added

- Add analyzer "ANALYZER_TITLE" ([ANALYZER_ID](https://josefpihrt.github.io/docs/roslynator/analyzers/ANALYZER_ID)) ([#PR_ID](https://github.com/dotnet/roslynator/pull/PR_ID))
  - Add some description if necessary ...
```
