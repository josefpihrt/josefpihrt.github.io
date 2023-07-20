# How to Add New Refactoring

## Discuss the Idea

It is recommended to create [issue](https://github.com/JosefPihrt/Roslynator/issues/new) where you can describe and discuss the idea and if it is accepted by the maintainers you can start with a development.

## Add Metadata

Add new element `<Refactoring>` to [Refactorings.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings.xml) file. It's possible to use [template](https://github.com/JosefPihrt/Roslynator/blob/main/src/Template.Refactorings.xml).

See [metadata reference](refactoring-metadata) for further information.

## Generate Code

Run script [`tools/generate_code.ps1`](https://github.com/JosefPihrt/Roslynator/blob/main/tools/generate_code.ps1).

## Implement Refactoring

Go to class [RefactoringContext](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings/CSharp/Refactorings/RefactoringContext.cs) and find a class where new refactoring can be added (or add a new class).

## Add Tests

- Add new file to a folder [Refactorings.Tests](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Refactorings.Tests). Convention is to name the file `[Id][Identifier]Tests.cs`.

:::tip
When writing a test code, tokens `[|` and `|]` represents start and end of a selected text respectively.
:::

## Update [Changelog](https://github.com/JosefPihrt/Roslynator/blob/main/ChangeLog.md)

```markdown
### Added

- Add refactoring "REFACTORING_TITLE" ([REFACTORING_ID](https://josefpihrt.github.io/docs/roslynator/refactorings/REFACTORING_ID)) ([#PR_ID](https://github.com/josefpihrt/roslynator/pull/PR_ID))
  - Add some description if necessary ...
```
