# How to Remove Unused Code

1) Install [Roslynator.DotNet.Cli](https://www.nuget.org/packages/Roslynator.DotNet.Cli/)

```
dotnet tool install -g roslynator.dotnet.cli
```

2) Run [find-symbol](cli/commands/find-symbol) command

Following command will find and remove types (classes, structs etc.) with internal or private visibility skipping types that are marked with `Obsolete` attribute:

```
roslynator find-symbol --symbol-kind type --unused --remove --without-attribute System.ObsoleteAttribute
```

