# How to Fix All Diagnostics in a Solution

1) Install [Roslynator.DotNet.Cli](https://www.nuget.org/packages/Roslynator.DotNet.Cli/)&ensp;[![NuGet](https://img.shields.io/nuget/v/Roslynator.DotNet.Cli.svg)](https://nuget.org/packages/Roslynator.DotNet.Cli): 
  - Run `dotnet tool install -g Roslynator.DotNet.Cli`

1) Execute [fix](cli/commands/fix) command:

```shell
roslynator fix SOLUTION
```
