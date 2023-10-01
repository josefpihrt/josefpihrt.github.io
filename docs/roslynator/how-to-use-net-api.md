---
sidebar_label: How to Use .NET API
---

# How to Use Roslynator .NET API

Roslynator .NET API extends Roslyn API and it can be used for development of custom analyzers/refactorings.

## Packages

| Package | Version | Extends |
| --- | --- | --- |
| [Roslynator.Core](https://www.nuget.org/packages/Roslynator.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Core.svg)](https://www.nuget.org/packages/Roslynator.Core) | [Microsoft.CodeAnalysis.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Common) |
| [Roslynator.Workspaces.Core](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.Workspaces.Core.svg)](https://www.nuget.org/packages/Roslynator.Workspaces.Core) | [Microsoft.CodeAnalysis.Workspaces.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Workspaces.Common) |
| [Roslynator.CSharp](https://www.nuget.org/packages/Roslynator.CSharp) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.svg)](https://www.nuget.org/packages/Roslynator.CSharp) | [Microsoft.CodeAnalysis.CSharp](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp) |
| [Roslynator.CSharp.Workspaces](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [![NuGet](https://img.shields.io/nuget/v/Roslynator.CSharp.Workspaces.svg)](https://www.nuget.org/packages/Roslynator.CSharp.Workspaces) | [Microsoft.CodeAnalysis.CSharp.Workspaces](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp.Workspaces) |

## Analyzer Package Configuration

Unfortunately it's not possible to reference any package in the analyzer package.
Therefore it's necessary to include `dll` files themselves:
```xml
<file src="bin\$Configuration$\netstandard2.0\Roslynator*.dll" target="analyzers\dotnet\cs" />
```

```xml title="Foo.Analyzers.nuspec"
<?xml version="1.0"?>
<package xmlns="http://schemas.microsoft.com/packaging/2011/08/nuspec.xsd">
  <metadata>
    <id>Foo.Analyzers</id>
    <version>1.0.0</version>
    <authors>Me</authors>
    <projectUrl>https://github.com/me/foo-analyzers</projectUrl>
    <repository type="git" url="https://github.com/me/foo-analyzers.git" />
    <developmentDependency>true</developmentDependency>
  </metadata>
  <files>
    <file src="bin\$Configuration$\netstandard2.0\Foo.Analyzers*.dll" target="analyzers\dotnet\cs" />
    <file src="bin\$Configuration$\netstandard2.0\Roslynator*.dll" target="analyzers\dotnet\cs" />
    <file src="tools\*.ps1" target="tools\" />
  </files>
</package>
```

### Package Folder Structure

- `Foo.Analyzers.1.0.0.nupkg`
  - `analyzers`
    - `dotnet`
      - `cs`
        - `Foo.Analyzers.dll`
        - `Foo.Analyzers.CodeFixes.dll`
        - `Roslynator.Core.dll`
        - `Roslynator.CSharp.dll`
        - `Roslynator.CSharp.Workspaces.dll`
        - `Roslynator.Workspace.Core.dll`
