# Roslynator

Roslynator is a set of code analysis tools for C#, powered by [Roslyn](https://github.com/dotnet/roslyn).

## Tools

- IDE extensions for:
  - [Visual Studio](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2022)
  - [VS Code](https://marketplace.visualstudio.com/items?itemName=josefpihrt-vscode.roslynator)
  - [Open VSX](https://open-vsx.org/extension/josefpihrt-vscode/roslynator)
- [NuGet packages](#nuget-packages) that contain a collection of analyzers
  - [Roslynator.Analyzers](https://www.nuget.org/packages/Roslynator.Analyzers)
  - [Roslynator.CodeAnalysis.Analyzers](https://www.nuget.org/packages/Roslynator.CodeAnalysis.Analyzers)
  - [Roslynator.Formatting.Analyzers](https://www.nuget.org/packages/Roslynator.Formatting.Analyzers)
- [Testing framework](testing) for unit-testing analyzers, refactorings, and code fixes
- [.NET API](ref) that extends the Roslyn API
- [Command line tool](cli)

## Contributions

Contributions are welcome! See the [developer docs](developers), [contributing with agent skills](contributing-with-agent-skills), and [open issues](https://github.com/dotnet/roslynator/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Aup-for-grabs).

:::tip
New to the Roslyn API? That is normal. Agent skills in the roslynator repo guide step-by-step workflows for bug fixes and new rules — and you can read them as plain contributor docs. Bugfixes or small improvements can be implemented right away. Larger tasks, such as adding a new analyzer or refactoring, should be discussed first.
:::

## Donations

Special thanks to:
  - [.NET on AWS Open Source Software Fund](https://github.com/aws/dotnet-foss) for donating $6000.00 USD ($500.00 for 12 months starting November 2024).
  - Microsoft for donating $1000.00 USD.
  - @IanKemp for donating $13.00 USD / month starting July 2021.
  - @Genbox for donating $5.00 USD / month starting October 2024.
  - Timo Nürnberg for donating $5.00 USD / month starting March 2025.

## .NET Foundation

This project is supported by the [.NET Foundation](https://www.dotnetfoundation.org/projects).

This project has adopted the code of conduct defined by the Contributor Covenant to clarify expected behavior in our community.
For more information see the [.NET Foundation Code of Conduct](https://dotnetfoundation.org/code-of-conduct).

## Command Line Tool

To install the CLI:
```sh
dotnet tool install -g roslynator.dotnet.cli
```

See the [CLI documentation](cli).

## Testing Framework

- Use the testing framework to unit-test analyzers, refactorings, and code fixes.
- The framework is available as a NuGet [package](https://www.nuget.org/packages/Roslynator.Testing.CSharp.Xunit). &ensp;[![NuGet](https://img.shields.io/nuget/v/Roslynator.Testing.CSharp.Xunit.svg)](https://www.nuget.org/packages/Roslynator.Testing.CSharp.Xunit)
- Examples in the Roslynator repo:
  - Analyzer tests: [Analyzers.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/Analyzers.Tests), [CodeAnalysis.Analyzers.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/CodeAnalysis.Analyzers.Tests), and [Formatting.Analyzers.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/Formatting.Analyzers.Tests)
  - Refactoring tests: [Refactorings.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/Refactorings.Tests)
  - Compiler diagnostic fix tests: [CodeFixes.Tests](https://github.com/dotnet/roslynator/tree/main/src/Tests/CodeFixes.Tests)

## .NET API

- The .NET API extends Roslyn and is intended for building custom analyzers and refactorings.
- These packages do not include analyzers or refactorings.
- See [reference documentation](ref).
- See "[How to use Roslynator .NET API](how-to-use-net-api)"

| Package | Version | Extends |
| --- | --- | --- |
| [Roslynator.Core](https://www.nuget.org/packages/Roslynator.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Core.svg)](https://www.nuget.org/packages/Roslynator.Core) | [Microsoft.CodeAnalysis.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Common) |
| [Roslynator.Workspaces.Core](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Workspaces.Core.svg)](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [Microsoft.CodeAnalysis.Workspaces.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Workspaces.Common) |
| [Roslynator.CSharp](https://www.nuget.org/packages/Roslynator.CSharp) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.svg)](https://www.nuget.org/packages/Roslynator.CSharp) | [Microsoft.CodeAnalysis.CSharp](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp) |
| [Roslynator.CSharp.Workspaces](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.Workspaces.svg)](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [Microsoft.CodeAnalysis.CSharp.Workspaces](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp.Workspaces) |
