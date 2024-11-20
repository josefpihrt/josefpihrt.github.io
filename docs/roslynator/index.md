# Roslynator

Roslynator is a set of code analysis tools for C#, powered by [Roslyn](https://github.com/dotnet/roslyn).

## Tools

- IDE extensions for:
  - [Visual Studio](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2022)
  - [VS Code](https://marketplace.visualstudio.com/items?itemName=josefpihrt-vscode.roslynator)
  - [Open VSX](https://open-vsx.org/extension/josefpihrt-vscode/roslynator)
- [NuGet packages](#nuget-packages) that contain collection of analyzers
  - [Roslynator.Analyzers](https://www.nuget.org/packages/Roslynator.Analyzers)
  - [Roslynator.CodeAnalysis.Analyzers](https://www.nuget.org/packages/Roslynator.CodeAnalysis.Analyzers)
  - [Roslynator.Formatting.Analyzers](https://www.nuget.org/packages/Roslynator.Formatting.Analyzers)
- [Testing framework](testing) that allows unit testing of analyzers, refactoring and code fixes
- [.NET API](ref) that extend Roslyn API
- [Command line tool](cli)

## Contributions

Contributions are welcome! If you are interested please see:
- documentation for [developers](developers)
- available [issues](https://github.com/JosefPihrt/Roslynator/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Aup-for-grabs)

:::tip
Bugfixes or small improvements can be implemented right away. Larger task like adding new analyzer or refactoring should be discussed first.
:::

## Donations

Special thanks to:
  - [AWS Open Source Software Fund](https://github.com/aws/dotnet-foss) for donating $6000.00 USD ($500.00 for 12 months starting November 2024).
  - Microsoft for donating $1000.00 USD.
  - Ian Kemp for donating $13.00 USD / month starting July 2021.

## .NET Foundation

This project is supported by the [.NET Foundation](https://www.dotnetfoundation.org/projects).

This project has adopted the code of conduct defined by the Contributor Covenant to clarify expected behavior in our community.
For more information see the [.NET Foundation Code of Conduct](https://dotnetfoundation.org/code-of-conduct).

## Command Line Tool

Run following command to install Roslynator command line tool:
```sh
dotnet tool install -g roslynator.dotnet.cli
```

See [documentation](cli) for further information.

## Testing Framework

- Roslynator Testing Framework can be used for unit testing of analyzers, refactorings and code fixes.
- Framework is distributed as NuGet [package](https://www.nuget.org/packages/Roslynator.Testing.CSharp.Xunit). &ensp;[![NuGet](https://img.shields.io/nuget/v/Roslynator.Testing.CSharp.Xunit.svg)](https://www.nuget.org/packages/Roslynator.Testing.CSharp.Xunit)
- Learn how to use the framework from actual usages in Roslynator repo:
  - Tests of analyzers are [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Analyzers.Tests), [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/CodeAnalysis.Analyzers.Tests) and [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Formatting.Analyzers.Tests)
  - Tests of refactorings are [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Refactorings.Tests)
  - Tests of fixes of compiler diagnostics are [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/CodeFixes.Tests)

## .NET API

- Roslynator .NET API extends Roslyn API and it can be used for development of custom analyzers/refactorings.
- Packages do not contain any analyzers/refactorings themselves.
- See [reference documentation](ref).
- See "[How to use Roslynator .NET API](how-to-use-net-api)"

| Package | Version | Extends |
| --- | --- | --- |
| [Roslynator.Core](https://www.nuget.org/packages/Roslynator.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Core.svg)](https://www.nuget.org/packages/Roslynator.Core) | [Microsoft.CodeAnalysis.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Common) |
| [Roslynator.Workspaces.Core](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Workspaces.Core.svg)](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [Microsoft.CodeAnalysis.Workspaces.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Workspaces.Common) |
| [Roslynator.CSharp](https://www.nuget.org/packages/Roslynator.CSharp) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.svg)](https://www.nuget.org/packages/Roslynator.CSharp) | [Microsoft.CodeAnalysis.CSharp](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp) |
| [Roslynator.CSharp.Workspaces](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.Workspaces.svg)](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [Microsoft.CodeAnalysis.CSharp.Workspaces](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp.Workspaces) |
