# How to Add New Refactoring

:::tip
See [Contributing with agent skills](contributing-with-agent-skills) and the [add-refactoring](https://github.com/dotnet/roslynator/tree/main/.claude/skills/add-refactoring) skill in the roslynator repo.
:::

## Discuss the Idea

Start by opening an [issue](https://github.com/dotnet/roslynator/issues/new) to describe your idea. Once maintainers approve it, you can begin implementation.

## Add Metadata

Add refactoring metadata to [Refactorings.xml](https://github.com/dotnet/roslynator/blob/main/src/Refactorings.xml). A [template](https://github.com/dotnet/roslynator/blob/main/src/Template.Refactorings.xml) is available.

See the [metadata reference](refactoring-metadata) for details.

## Generate Code

Run [`tools/generate_code.ps1`](https://github.com/dotnet/roslynator/blob/main/tools/generate_code.ps1), or open the `CodeGenerator` project in Visual Studio.

## Implement Refactoring

Go to class [RefactoringContext](https://github.com/dotnet/roslynator/blob/main/src/Refactorings/CSharp/Refactorings/RefactoringContext.cs) and find a class where new refactoring can be added (or add a new class).

## Add Tests

- Add new file to a folder [Refactorings.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/Refactorings.Tests). Convention is to name the file `[Id][Identifier]Tests.cs`.

:::tip
In test code, `[|` and `|]` mark the start and end of the selected text.
:::

## Update Changelog

```markdown title="CHANGELOG.md"
### Added

- Add refactoring "REFACTORING_TITLE" ([REFACTORING_ID](https://josefpihrt.github.io/docs/roslynator/refactorings/REFACTORING_ID)) ([#PR_ID](https://github.com/dotnet/roslynator/pull/PR_ID))
  - Add some description if necessary ...
```
