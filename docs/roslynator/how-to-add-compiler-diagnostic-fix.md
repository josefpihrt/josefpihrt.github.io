# How to Add Compiler Diagnostic Fix

:::tip
See [Contributing with agent skills](contributing-with-agent-skills) and the [add-compiler-diagnostic-fix](https://github.com/dotnet/roslynator/tree/main/.claude/skills/add-compiler-diagnostic-fix) skill in the roslynator repo.
:::

## Discuss the Idea

Start by opening an [issue](https://github.com/dotnet/roslynator/issues/new) to describe your idea. Once maintainers approve it, you can begin implementation.

## Add Diagnostic Metadata

If the compiler diagnostic is not already listed, add it to [Diagnostics.xml](https://github.com/dotnet/roslynator/blob/main/src/Diagnostics.xml):

```xml
<Diagnostic
  Id="CS0163"
  Identifier="ControlCannotFallThroughFromOneCaseLabelToAnother"
  Severity="Error"
  Title="Control cannot fall through from one case label to another"
  Message="Control cannot fall through from one case label to another"
  HelpUrl="https://learn.microsoft.com/dotnet/csharp/misc/cs0163" />
```

## Add Code Fix Metadata

Add a new `RCF####` entry to [CodeFixes.xml](https://github.com/dotnet/roslynator/blob/main/src/CodeFixes.xml):

```xml
<CodeFix Id="RCF0002" Identifier="AddBreakStatementToSwitchSection" Title="Add break statement to switch section">
  <FixableDiagnosticIds>
    <Id>CS0163</Id>
    <Id>CS8070</Id>
  </FixableDiagnosticIds>
</CodeFix>
```

One `RCF` fix can target multiple `CS` ids; one `CS` id can have multiple `RCF` fixes.

## Generate Code

From the `tools` directory:

```sh
cd tools && pwsh ./generate_code.ps1
```

Or open the `CodeGenerator` project in Visual Studio.

## Implement Code Fix Provider

Add a class in [CodeFixes/CSharp/CodeFixes](https://github.com/dotnet/roslynator/tree/main/src/CodeFixes/CSharp/CodeFixes) deriving from `CompilerDiagnosticCodeFixProvider`.

- Use `CompilerDiagnosticIdentifiers.CS####_Identifier` constants in `FixableDiagnosticIds` (not bare `"CS####"` strings).
- Call `IsEnabled(...)` in `RegisterCodeFixesAsync` so EditorConfig toggles work.

## Add Tests

Add a new file to [CodeFixes.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/CodeFixes.Tests). Convention: `CS####IdentifierTests.cs`.

Use `AbstractCSharpCompilerDiagnosticFixVerifier` from the in-repo test framework — not `XunitCompilerDiagnosticFixVerifier` from the NuGet package. See [compiler diagnostic fix testing](compiler-diagnostic-fixes-testing) for the public NuGet API.

:::tip
Compiler fix tests do not use `[|` and `|]` span markers — the compiler diagnostic location is implicit.
:::

## Update Changelog

File: `ChangeLog.md` at the repository root (not `CHANGELOG.md`).

```markdown title="ChangeLog.md"
### Added

- Add code fix "FIX_TITLE" for CS#### ([#PR_ID](https://github.com/dotnet/roslynator/pull/PR_ID))
```
