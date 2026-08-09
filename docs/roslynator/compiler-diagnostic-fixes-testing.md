---
sidebar_label: Compiler Diagnostic Fix Testing
---

# Unit Testing of Compiler Diagnostic Fixes

:::info
Contributors implementing fixes in the roslynator repo should follow [How to Add Compiler Diagnostic Fix](how-to-add-compiler-diagnostic-fix) and use `AbstractCSharpCompilerDiagnosticFixVerifier`. The examples below target consumers of the NuGet testing packages.
:::

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

