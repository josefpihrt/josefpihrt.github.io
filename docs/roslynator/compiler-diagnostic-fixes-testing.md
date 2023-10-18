---
sidebar_label: Compiler Diagnostic Fix Testing
---

# Unit Testing of Compiler Diagnostic Fixes

## NuGet Package

```
dotnet add package roslynator.testing.csharp.xunit
```
or
```
dotnet add package roslynator.testing.csharp.mstest
```

## Example: Test Compiler Diagnostic Fix

```cs
using Roslynator.Testing.CSharp.Xunit;
using Xunit;

public class ModifierIsNotValidForThisItemTests : XunitCompilerDiagnosticFixVerifier<RemoveModifierCodeFixProvider>
{
    public override string DiagnosticId { get; } = "CS0106";

    [Fact]
    public async Task Test()
    {
        await VerifyFixAsync(
            source: @"
struct S
{
    public virtual string M() => null;
}
",
            expectedSource: @"
struct S
{
    public string M() => null;
}
");
    }
}
```

