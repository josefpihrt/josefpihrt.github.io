# IDE Extensions

Starting with Roslynator **5.0**, analyzers are no longer bundled in IDE extensions. Use [Roslynator NuGet packages](https://www.nuget.org/profiles/josefpihrt) for diagnostics in the editor and `dotnet build`.

## Visual Studio 2026

- Extension: [Roslynator 2026](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2026)
- Requires Visual Studio 2026 (`[18.0,19.0)`)
- **Included:** refactorings, RCS analyzer code fixes, compiler diagnostic code fixes
- **Not included:** analyzers (use [Roslynator.Analyzers](https://www.nuget.org/packages/roslynator.analyzers) NuGet package)

The Visual Studio 2022 extension ([Roslynator 2022](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2022)) is no longer updated. On Visual Studio 2022, pin the last 4.x release or use NuGet packages.

## Visual Studio Code

- Extension: [Roslynator](https://marketplace.visualstudio.com/items?itemName=josefpihrt-vscode.roslynator) / [Open VSX](https://open-vsx.org/extension/josefpihrt-vscode/roslynator)
- **Included:** refactorings, compiler diagnostic code fixes
- **Not included:** analyzers, RCS analyzer code fixes (use NuGet packages)

### Prerequisites

This extension requires **legacy OmniSharp** (not C# Dev Kit):

- Set VS Code setting `dotnet.server.useOmnisharp` to `true`
- Disable extension **C# Dev Kit** (if installed)
- Use a recent [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) with OmniSharp **1.39.15+** (Roslyn 5.x)

[C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) does not support loading Roslyn features from an extension. As an alternative, use NuGet packages for [refactorings](https://www.nuget.org/packages/roslynator.refactorings) and [compiler diagnostic code fixes](https://www.nuget.org/packages/roslynator.codefixes).

## NuGet Packages

### Analyzers

Add a package reference to your project:

- [Roslynator.Analyzers](https://www.nuget.org/packages/Roslynator.Analyzers)
- [Roslynator.CodeAnalysis.Analyzers](https://www.nuget.org/packages/Roslynator.CodeAnalysis.Analyzers)
- [Roslynator.Formatting.Analyzers](https://www.nuget.org/packages/Roslynator.Formatting.Analyzers)

Analyzer packages ship multiple Roslyn flavors: `roslyn3.8`, `roslyn4.7`, and `roslyn5.0`. The build selects the appropriate flavor automatically.

### Refactorings and Code Fixes

Optional NuGet packages when you need Roslyn features without an IDE extension:

- [Roslynator.Refactorings](https://www.nuget.org/packages/Roslynator.Refactorings)
- [Roslynator.CodeFixes](https://www.nuget.org/packages/Roslynator.CodeFixes)

## Further Reading

- [Configuration](configuration)
- [Analyzers vs. Refactorings](analyzers-vs-refactorings)
- [Roslynator 5.0 release notes](https://github.com/dotnet/roslynator/blob/main/ChangeLog.md)
