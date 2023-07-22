---
sidebar_label: Roslynator CLI
---

# Roslynator Command Line Tool

## Commands

- [analyze](cli/commands/analyze)
- [fix](cli/commands/fix)
- [format](cli/commands/format)
- [generate-doc](cli/commands/generate-doc)
- [generate-doc-root](cli/commands/generate-doc-root)
- [list-symbols](cli/commands/list-symbols)
- [loc](cli/commands/loc)
- [lloc](cli/commands/lloc)
- [rename-symbol](cli/commands/rename-symbol)
- [spellcheck](cli/commands/spellcheck)

## Installation

Run `dotnet tool install -g roslynator.dotnet.cli`

## Requirements

- Version `0.5.0` or higher required .NET Core SDK 6 or 7
- Version `0.4.0` or higher requires .NET Core SDK 6
- Version `0.2.0` or higher requires .NET Core SDK 5

## Exit Code

Value | Comment
--- | ---
0 | Success\*
1 | Not a success\*\*
2 | Error occurred or execution canceled

\* No diagnostic was found (`analyze` command ) or all diagnostics were fixed (`fix` command) etc.

\*\* A diagnostic was found (`analyze` command) or not all diagnostics were fixed (`fix` command) etc.

### Legacy .NET Framework Package

- Stand-alone application that requires .NET Framework (Windows only).
- It can be used for .NET Framework projects (old style `csproj`).
- Download [package](https://www.nuget.org/packages/Roslynator.CommandLine) and run `Roslynator.exe`.
