---
sidebar_label: Roslynator CLI
---

# Roslynator Command Line Tool

## Installation

Run `dotnet tool install -g roslynator.dotnet.cli`

Run `roslynator --help` to see a list of available [commands](./cli/category/commands).

## Requirements

- Version `0.9.0` or higher requires .NET SDK 7 or 8.
- Version `0.8.0` or higher requires .NET SDK 6, 7 or 8.
- Version `0.5.0` or higher requires .NET SDK 6 or 7
- Version `0.4.0` or higher requires .NET SDK 6
- Version `0.2.0` or higher requires .NET SDK 5

## Exit Code

Value | Comment
--- | ---
0 | Success\*
1 | Not a success\*\*
2 | Error occurred or execution canceled

\* No diagnostic was found (`analyze` command) or all diagnostics were fixed (`fix` command) etc.

\*\* A diagnostic was found (`analyze` command) or not all diagnostics were fixed (`fix` command) etc.

## Legacy .NET Framework Package

- Stand-alone application that requires .NET Framework (Windows only).
- It can be used for .NET Framework projects (old style `csproj`).
- Download [package](https://www.nuget.org/packages/Roslynator.CommandLine) and run `Roslynator.exe`.
