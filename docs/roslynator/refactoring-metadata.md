---
sidebar_label: Refactoring
---

# Refactoring Metadata

Refactorings metadata are stored in [Refactorings.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings.xml).

## XML

```xml title="Refactorings.xml"
<Refactoring Id="" Identifier="" Title="">
  <OptionKey></OptionKey>
  <Syntaxes>
    <Syntax></Syntax>
  </Syntaxes>
  <Span></Span>
  <Summary></Summary>
  <Samples>
    <Sample>
      <Before><![CDATA[]]></Before>
      <After><![CDATA[]]></After>
    </Sample>
  </Samples>
  <Remarks></Remarks>
  <Links>
    <Link>
      <Url></Url>
      <Text></Text>
    </Link>
  </Links>
</Refactoring>
```

## Reference

- `Refactoring`
  - `Id` - **\[required\]** Internal ID of the refactoring (prefix `RR` + sequential number).
  - `Identifier` - **\[required\]** Identifier which represents refactoring in a code (see [RefactoringIdentifiers.Generated.cs](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings/CSharp/RefactoringIdentifiers.Generated.cs)).
  - `Title` - **\[required\]** Short description of the refactoring.
  - `OptionKey` - **\[required\]** Refactoring identifier in the EditorConfig.
  - `Syntaxes`
    - `Syntax` - **\[required\]** A syntax where the refactoring can be invoked (used for documentation only).
  - `Span` - **\[optional\]** A part of a syntax where the refactoring can be invoked (used for documentation only).
  - `Summary`- **\[recommended\]** A longer description of the refactoring (markdown format).
  - `Samples`
    - `Sample`- **\[recommended\]**
      - `Before` - A code before the refactoring was invoked
      - `After` - A code after the refactoring was invoked
  - `Remarks` - **\[optional\]** Additional information about the refactoring which is displayed at the bottom of a page (markdown format).
  - `Links`
    - `Link` - **\[optional\]** A link to a related website.
      - `Url`- **\[required\]**
      - `Text` - **\[required\]**

## Example

### Metadata

```xml title="Refactorings.xml"
<Refactoring Id="RR0217" Identifier="DeconstructForeachVariable" Title="Deconstruct foreach variable">
  <OptionKey>deconstruct_foreach_variable</OptionKey>
  <Syntaxes>
    <Syntax>foreach statement</Syntax>
  </Syntaxes>
  <Span></Span>
  <Summary>type or identifier</Summary>
  <Samples>
    <Sample>
      <Before><![CDATA[var dic = new Dictionary<string, object>();

foreach (var kvp in dic)
{
  var k = kvp.Key;
  var v = kvp.Value.ToString();
}
]]></Before>
      <After><![CDATA[var dic = new Dictionary<string, object>();

foreach (var (key, value) in dic)
{
  var k = key;
  var v = value.ToString();
}
]]></After>
    </Sample>
  </Samples>
</Refactoring>
```

### Generated Code


```cs title="RefactoringIdentifiers.Generated.cs"
public const string DeconstructForeachVariable = Prefix + "0217";
```

### Generated Documentation

See [RR0217](refactorings/RR0217).
