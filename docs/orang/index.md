﻿---
sidebar_position: 0
sidebar_label: Intro
---

# Orang

Search, replace, rename and delete files and its content using the power of \.NET regular expressions\.

## CLI

### Installation

```sh
dotnet tool install -g orang.dotnet.cli
```

### Documentation

See [documentation](cli) for further information.

## .NET API

### Installation

```sh
dotnet add package orang.filesystem
```

### Documentation

See [reference documentation](ref) for further information.

### Usage

Clean .NET project temporary folders:

#### Fluent API

```cs
using System;
using System.Threading;
using Orang;
using Orang.FileSystem;
using Orang.FileSystem.Fluent;

IOperationResult result = new SearchBuilder()
    .MatchDirectory(d => d
        .Name(Pattern.Any("bin", "obj", PatternOptions.Equals))
        .NonEmpty())
    .SkipDirectory(Pattern.Any(".git", ".vs", "node_modules", PatternOptions.Equals | PatternOptions.Literal))
    .Delete(d => d
        .ContentOnly()
        .DryRun()
        .LogOperation(o => Console.WriteLine(o.Path)))
    .Run("<DIRECTORY_PATH>", CancellationToken.None);

Console.WriteLine(result.Telemetry.MatchingDirectoryCount);
```

#### Classic API

```cs
using System;
using System.Threading;
using Orang;
using Orang.FileSystem;

var search = new Search(
    new DirectoryMatcher()
    {
        Name = new Matcher(@"\A(bin|obj)\z"),
        EmptyOption = FileEmptyOption.NonEmpty,
    },
    new SearchOptions()
    {
        SearchDirectory = new DirectoryMatcher()
        {
            Name = new Matcher(@"\A(\.git|\.vs|node_modules)\z", invert: true)
        }
    });

IOperationResult result = search.Delete(
    "<DIRECTORY_PATH>",
    new DeleteOptions()
    {
        ContentOnly = true,
        DryRun = true,
        LogOperation = o => Console.WriteLine(o.Path),
    },
    CancellationToken.None);

Console.WriteLine(result.Telemetry.MatchingDirectoryCount);
```
