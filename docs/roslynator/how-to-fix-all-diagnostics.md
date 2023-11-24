# How to Fix All Diagnostics in a Solution

1) Install [Roslynator.DotNet.Cli](https://www.nuget.org/packages/Roslynator.DotNet.Cli/)

```
dotnet tool install -g roslynator.dotnet.cli
```

2) Run [fix](cli/commands/fix) command

```
roslynator fix PATH_TO_SOLUTION
```
