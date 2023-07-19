# How to Add New Refactoring

NOTE: It's recommended to create [GitHub issue](https://github.com/JosefPihrt/Roslynator/issues/new) about a new refactoring, discuss it and then start with a development.

## Add Metadata

Add new element `<Refactoring>` to [Refactorings.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings/Refactorings.xml) file. It's possible to use [Refactorings.Template.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings/Refactorings.Template.xml) as a template.

See [metadata reference](refactoring-metadata) for further information.

## Generate Code

Run script [`generate_code.ps1`](https://github.com/JosefPihrt/Roslynator/blob/main/tools/generate_code.ps1).

## Implement Refactoring

Go to class [RefactoringContext](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings/CSharp/Refactorings/RefactoringContext.cs) and find a class where new refactoring can be added (or add a new class).

## Add Tests

- Add new file to a folder [Refactorings.Tests](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Refactorings.Tests). Convention is to name the file `[Id][Identifier]Tests.cs`.

- When writing a test code, token `[||]` denotes cursor position or selected text.

## Update [Changelog](https://github.com/JosefPihrt/Roslynator/blob/main/ChangeLog.md)

```md
### Added

- Add refactoring "REFACTORING_TITLE" ([REFACTORING_ID](https://josefpihrt.github.io/docs/roslynator/refactorings/REFACTORING_ID)) ([#PR_ID](https://github.com/josefpihrt/roslynator/pull/PR_ID))
  - Add some description if necessary ...
```
