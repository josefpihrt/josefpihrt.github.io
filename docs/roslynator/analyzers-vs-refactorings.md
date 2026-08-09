# Analyzers vs. Refactorings

There are two basic concepts in code analysis:

- **Analyzer** (+ **Code Fix**)
- **Refactoring**

These two concepts are often confused, so it helps to understand the difference.

## Basic Terms

Term        | Description
----------- | ----------------------------------------------------------------------------------
Analyzer    | Represents a general rule (code style) that should be followed.
Diagnostic  | Represents a specific issue reported by the analyzer.
Code Fix    | Represents an operation that will fix the reported issue.
Refactoring | Represents a single operation that is provided on demand for a given span of text.

## Analyzers

> Analyzer represents a general rule (code style) that should be followed.

An analyzer runs in the background and checks source code against a rule. When it finds a violation, it reports a **diagnostic**. The IDE shows the diagnostic in the Error List and as squiggles. If a **code fix** is available, you can apply it — including a 'Fix all occurrences in …' option for batch fixes.

### Analyzers in the IDE

All diagnostics are displayed in the Error List. Each diagnostic appears as squiggles in the code editor. Diagnostics that are marked as hidden are not visible.

Press `Ctrl` + `.` to see available code fixes. Code fixes have precedence over refactorings so they are displayed first. There is an identifier and a description in the fly-out menu. A 'Suppress ...' option appears at the bottom of the menu.

![Code Fix in Context Menu](/img/roslynator/code-fix-in-context-menu.png)

## Refactorings

> Refactoring represents a single operation that is provided on demand for a given span of text.

When requested, the IDE will suggest a list of refactorings that apply to a given span of text. Refactorings usually have no identifier. However, Roslynator refactorings have an identifier similar to `RR1234`. This identifier is hidden in the IDE, but visible in Visual Studio options.

### Refactorings in the IDE

Press `Ctrl` + `.` to see available refactorings. Refactorings have lower precedence so they are displayed below diagnostics. There is no identifier and no description in the fly-out menu.

![Refactoring in Context Menu](/img/roslynator/refactoring-in-context-menu.png)
