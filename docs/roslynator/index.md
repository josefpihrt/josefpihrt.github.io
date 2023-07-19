# Roslynator

* A collection of 500+ [analyzers](analyzers), [refactorings](refactorings) and [fixes](fixes) for C#, powered by [Roslyn](https://github.com/dotnet/roslyn).
* [Release notes](https://github.com/JosefPihrt/Roslynator/blob/main/ChangeLog.md)
* Follow on [Twitter](https://twitter.com/roslynator)

## Donation

* Although Roslynator products are free of charge, any [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BX85UA346VTN6) is welcome and supports further development.
* [List of donations](https://github.com/JosefPihrt/Roslynator/blob/main/Donations.md)

## Extensions

| IDE | Extension |
| --- | --- |
| Visual Studio | [Roslynator 2022](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2022) |
| VS Code | [Roslynator](https://marketplace.visualstudio.com/items?itemName=josefpihrt-vscode.roslynator) |
| Open VSX | [Roslynator](https://open-vsx.org/extension/josefpihrt-vscode/roslynator) |

Extensions contains analyzers, refactorings and fixes for C# compiler diagnostics.

## NuGet Packages

| Package | Version | Comment |
| --- | --- | --- |
| [Roslynator.Analyzers](https://www.nuget.org/packages/Roslynator.Analyzers) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Analyzers.svg)](https://www.nuget.org/packages/Roslynator.Analyzers) | common analyzers (RCS1xxx) ([list](http://pihrt.net/Roslynator/Analyzers?Query=RCS1)) |
| [Roslynator.CodeAnalysis.Analyzers](https://www.nuget.org/packages/Roslynator.CodeAnalysis.Analyzers) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CodeAnalysis.Analyzers.svg)](https://www.nuget.org/packages/Roslynator.CodeAnalysis.Analyzers) | analyzers for Roslyn API (RCS9xxx) ([list](http://pihrt.net/Roslynator/Analyzers?Query=RCS9)) |
| [Roslynator.Formatting.Analyzers](https://www.nuget.org/packages/Roslynator.Formatting.Analyzers) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Formatting.Analyzers.svg)](https://www.nuget.org/packages/Roslynator.Formatting.Analyzers) | formatting analyzers (RCS0xxx) ([list](http://pihrt.net/Roslynator/Analyzers?Query=RCS0)) |

*Note: All analyzers in package Roslynator.Formatting.Analyzers are disabled by default.*

## Roslynator Command Line Tool

Run following command to install Roslynator command line tool:
```
dotnet tool install -g roslynator.dotnet.cli
```

See [documentation](cli) for further information.

## Roslynator Testing Framework

* Roslynator Testing Framework can be used for unit testing of analyzers, refactorings and code fixes.
* Framework is distributed as NuGet [package](https://www.nuget.org/packages/Roslynator.Testing.CSharp.Xunit). &ensp;[![NuGet](https://img.shields.io/nuget/v/Roslynator.Testing.CSharp.Xunit.svg)](https://www.nuget.org/packages/Roslynator.Testing.CSharp.Xunit)
* Learn how to use the framework from actual usages in Roslynator repo:
  * Tests of analyzers are [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Analyzers.Tests), [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/CodeAnalysis.Analyzers.Tests) and [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Formatting.Analyzers.Tests)
  * Tests of refactorings are [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/Refactorings.Tests)
  * Tests of fixes of compiler diagnostics are [here](https://github.com/JosefPihrt/Roslynator/tree/main/src/Tests/CodeFixes.Tests)

## Roslynator Client Libraries

* Roslynator client libraries are meant be used for development of your own analyzers/refactorings.
* It does not contain any analyzers/refactorings itself.
* See [reference](ref).

| Package | Version | Built on top of |
| --- | --- | --- |
| [Roslynator.Core](https://www.nuget.org/packages/Roslynator.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Core.svg)](https://www.nuget.org/packages/Roslynator.Core) | [Microsoft.CodeAnalysis.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Common) |
| [Roslynator.Workspaces.Core](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Workspaces.Core.svg)](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [Microsoft.CodeAnalysis.Workspaces.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Workspaces.Common) |
| [Roslynator.CSharp](https://www.nuget.org/packages/Roslynator.CSharp) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.svg)](https://www.nuget.org/packages/Roslynator.CSharp) | [Microsoft.CodeAnalysis.CSharp](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp) |
| [Roslynator.CSharp.Workspaces](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.Workspaces.svg)](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [Microsoft.CodeAnalysis.CSharp.Workspaces](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp.Workspaces) |
