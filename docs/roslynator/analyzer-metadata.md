---
sidebar_label: Analyzer
---

# Analyzer Metadata

Analyzers metadata are stored in

- [Analyzers.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Analyzers/Analyzers.xml)
- [Formatting.Analyzers.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Formatting.Analyzers/Formatting.Analyzers.xml)
- [CodeAnalysis.Analyzers.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/CodeAnalysis.Analyzers/CodeAnalysis.Analyzers.xml)

## XML

```xml
<Analyzer Identifier="">
  <Id>RCS</Id>
  <Title></Title>
  <MessageFormat></MessageFormat>
  <Category>General</Category>
  <DefaultSeverity>Info</DefaultSeverity>
  <IsEnabledByDefault>true</IsEnabledByDefault>
  <SupportsFadeOut>false</SupportsFadeOut>
  <SupportsFadeOutAnalyzer>false</SupportsFadeOutAnalyzer>
  <MinLanguageVersion></MinLanguageVersion>
  <Summary></Summary>
  <Samples>
    <Sample>
      <Before><![CDATA[]]></Before>
      <After><![CDATA[]]></After>
    </Sample>
  </Samples>
  <ConfigOptions>
    <Option Key="" IsRequired="" />
  </ConfigOptions>
  <Remarks></Remarks>
  <Links>
    <Link>
      <Url></Url>
      <Text></Text>
    </Link>
  </Links>
</Analyzer>
```
## Reference

- `Analyzer`
  - `Identifier` - **\[required\]** Identifier that represents analyzer in a source code.
  - `Id` - **\[required\]** Internal ID of the refactoring (prefix `RCS` + sequential number). Common analyzer ID starts with `RCS1`, formatting analyzer ID starts with `RCS0`, code analysis analyzer ID starts with `RCS9`.
  - `Title` - **\[required\]** Short description of the analyzer
  - `MessageFormat` - **\[optional\]** Required only if message is parametrized, otherwise same as title.
  - `DefaultSeverity` - **\[required\]** `Hidden`, `Info`, `Warning` or `Error`. 
  - `IsEnabledByDefault` - **\[optional\]** Default is `true`.
  - `SupportsFadeOut` - **\[optional\]** if `true` the reported syntax should faded out.
  - `SupportsFadeOutAnalyzer` - **\[optional\]** if `true`, `RCS....FadeOut` analyzer will be generated.
  - `MinLanguageVersion` - **\[optional\]** Minimum language version for the analyzer to be applicable.
  - `Summary` - **\[required\]** A longer description of the analyzer (markdown format).
  - `Samples` - **\[recommended\]** 
    - `Sample` - 
      - `Before` - **\[required\]** A code that will produce a diagnostic.
      - `After` - **\[optional\]** A code with a code fix applied.
  - `ConfigOptions` - **\[optional\]** 
    - `Option` - 
      - `Key` - **\[required\]** Option key in EditorConfig file.
      - `IsRequired` - **\[optional\]** if `true` option must be set for the analyzer to work.
  - `Remarks` - **\[optional\]** Additional information about the analyzer which is displayed at the bottom of a page (markdown format).
  - `Links` - 
    - `Link` - **\[optional\]** A link to a related website.
      - `Url` - **\[required\]** 
      - `Text` - **\[required\]** 
