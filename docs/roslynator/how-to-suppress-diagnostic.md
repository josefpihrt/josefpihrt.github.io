# How to Suppress Diagnostic

Suppressing a diagnostic is appropriate for rare edge cases that an analyzer cannot or should not cover.

Don't use suppression as a substitute for analyzer configuration — suppressed diagnostics still run the analyzer.

### Suppress Diagnostic for a Declaration

```csharp
using System.Diagnostics.CodeAnalysis;

class C
{
    [SuppressMessage("Readability", "RCS1008", Justification = "<Pending>")]
    void M()
    {
        var x = Foo(); // no RCS1008 here
    }
}
```

```csharp
using System.Diagnostics.CodeAnalysis;

[assembly: SuppressMessage("Readability", "RCS1008", Justification = "<Pending>", Scope = "member", Target = "~M:C.M")]

class C
{
    void M()
    {
        var x = Foo(); // no RCS1008 here
    }
}
```

### Suppress Diagnostic for Selected Lines

```csharp
using System.Diagnostics.CodeAnalysis;

class C
{
    void M()
    {
#pragma warning disable RCS1008
        var x = Foo(); // no RCS1008 here
#pragma warning restore RCS1008
    }
}
```

### Suppress Diagnostic for Namespace

```csharp
using System.Diagnostics.CodeAnalysis;

[assembly: SuppressMessage("Readability", "RCS1008", Justification = "<Pending>", Scope = "NamespaceAndDescendants", Target = "N1.N2")]

namespace N1.N2
{
    class C
    {
        void M()
        {
            var x = Foo(); // no RCS1008 here
        }
    }
}
```
