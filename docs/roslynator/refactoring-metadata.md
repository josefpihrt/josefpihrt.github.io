---
sidebar_label: Refactoring
---

# Refactoring Metadata

Refactorings metadata are stored in [Refactorings.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Refactorings/Refactorings.xml).

## XML

```xml
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
