---
sidebar_label: Refactorings Testing
---

# Unit Testing of Refactorings

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

## Example: Test Refactoring

```cs
using Roslynator.Testing.CSharp.Xunit;
using Xunit;

public class AddArgumentNameTests : XunitRefactoringVerifier<AddArgumentNameCodeRefactoringProvider>
{
    [Fact]
    public async Task Test()
    {
        await VerifyRefactoringAsync(
            source: @"
class C
{
    void M()
    {
        var arr = new[]
        {
            new string(
                [|' ',
                1|])
        };
    }
}
",
            expectedSource: @"
class C
{
    void M()
    {
        var arr = new[]
        {
            new string(
                c: ' ',
                count: 1)
        };
    }
}
");
    }
}
```

## How to Mark Selected Text

Selected text is marked directly in a test code using `[|` and `|]` tokens.

## How to Add Config Options

Each test method has parameter `options` of type `TestOptions`:

```cs
options: Options.AddConfigOption("option_key", "option_value")
```
