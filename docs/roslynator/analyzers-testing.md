---
sidebar_label: Analyzers Testing
---

# Unit Testing of Analyzers

:::info
Contributors in the roslynator repo should use in-repo test patterns — see [contributing with agent skills](contributing-with-agent-skills) and [fix-analyzer-bug](https://github.com/dotnet/roslynator/tree/main/.claude/skills/fix-analyzer-bug). The examples below target consumers of the NuGet testing packages.
:::

## NuGet Package

```
dotnet add package roslynator.testing.csharp.xunit
```
or
```
dotnet add package roslynator.testing.csharp.mstest
```

## Example: Test Analyzer With Code Fix

```cs
using Roslynator.Testing.CSharp.Xunit;
using Xunit;

public class AccessibilityModifiersTests
    : XunitDiagnosticVerifier<AccessibilityModifiersAnalyzer, AccessibilityModifiersCodeFixProvider>
{
    public override DiagnosticDescriptor Descriptor { get; } = AccessibilityModifiersAnalyzer.Descriptor;

    [Fact]
    public async Task Test()
    {
        await VerifyDiagnosticAndFixAsync(
            source: @"
namespace N
{
    class [|C|]
    {
    }
}
",
            expectedSource: @"
namespace N
{
    internal class C
    {
    }
}
",
            options: Options.AddConfigOption("roslynator_accessibility_modifiers", "explicit"));
    }
}
```

## Example: Test Analyzer Without Code Fix

Use `EmptyCodeFixProvider` in tests of analyzers without a code fix.

```cs
using Roslynator.Testing.CSharp.Xunit;
using Xunit;

public class UnusedParameterTests
    : XunitDiagnosticVerifier<UnusedParameterAnalyzer, EmptyCodeFixProvider>
{
    public override DiagnosticDescriptor Descriptor { get; } = DiagnosticDescriptors.UnusedParameter;

    [Fact]
    public async Task Test()
    {
        await VerifyDiagnosticAsync(
            source: @"
class C
{
    void M([|object p|])
    {
    }
}
"
);
    }
}
```

## How to Mark Diagnostic's Location

Diagnostic's location is marked directly in a test code using `[|` and `|]` tokens.

## How to Add Config Options

Each test method has parameter `options` of type `TestOptions`:

```cs
options: Options.AddConfigOption("option_key", "option_value")
```
