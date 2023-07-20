# How to Add New Analyzer

## Discuss the Idea

It is recommended to create [issue](https://github.com/JosefPihrt/Roslynator/issues/new) where you can describe and discuss the idea and if it is accepted by the maintainers you can start with a development.

## Choose Project/Package

### Analyzers

Suitable for analyzers that do no fit into any of the following packages.
ID prefix for these analyzers is `RCS1`.

### Formatting.Analyzers

Suitable for analyzers that reports invalid formatting. Code fix for these analyzers usually only manipulates with whitespace.
ID prefix for these analyzers is `RCS0`.

### CodeAnalysis.Analyzers

Suitable for analyzers that analyze types from Roslyn API (`Microsoft.CodeAnalysis*` packages).
ID prefix for these analyzers is `RCS9`.


:::note
It's rare, but it's possible to introduce new project/package.
:::

## Add Metadata

Add new element `<Analyzer>` to [Analyzers.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Analyzers/Analyzers.xml) file. It's possible to use [Analyzers.Template.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Analyzers/Analyzers.Template.xml) as a template.

See [metadata reference](analyzer-metadata) for further information.

## Generate Code

Run script [`tools/generate_code.ps1`](https://github.com/JosefPihrt/Roslynator/blob/main/tools/generate_code.ps1).

## Implement Analyzer

Add class that derives from `BaseDiagnosticAnalyzer` or possibly use some already existing analyzer class.

## Implement Code Fix

:::info
It's strongly recommended to implement code fix for the analyzer.
:::

Add class that derives from `BaseCodeFixProvider` or possibly use some already existing code fix provider class.

## Add Tests  

- Add new file to a folder [Analyzers.Tests](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Analyzers.Tests). Convention is to name the file `[Id][Identifier]Tests.cs`.

:::tip
When writing a test code, tokens `[|` and `|]` represents start and end of a selected text respectively.
:::

## Update [Changelog](https://github.com/JosefPihrt/Roslynator/blob/main/ChangeLog.md)

```markdown
### Added

- Add analyzer "ANALYZER_TITLE" ([ANALYZER_ID](https://josefpihrt.github.io/docs/roslynator/analyzers/ANALYZER_ID)) ([#PR_ID](https://github.com/josefpihrt/roslynator/pull/PR_ID))
  - Add some description if necessary ...
```
