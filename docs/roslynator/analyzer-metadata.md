---
sidebar_label: Analyzer
---

# Analyzer Metadata

Analyzers metadata are stored in [Analyzers.xml](https://github.com/JosefPihrt/Roslynator/blob/main/src/Analyzers.xml).

## XML

```xml title="Analyzers.xml"
<Analyzer>
  <Id>RCS</Id>
  <Identifier></Identifier>
  <Status></Status>
  <ObsoleteMessage></ObsoleteMessage>
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
      <ConfigOptions>
        <Option Key="" Value="" />
      </ConfigOptions>
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
  - `Status` - **\[optional\]** Allowed values are `Enabled` (default), `Disabled` or `Obsolete`.
  - `ObsoleteMessage` - **\[optional\]** A message to display when `Status` is `Obsolete`.
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
        - `Option` - EditorConfig option associated with the sample.
          - `Key` - **\[required\]** EditorConfig option key.
          - `Value` - **\[required\]** EditorConfig option value.
  - `ConfigOptions` - **\[optional\]** 
    - `Option` - 
      - `Key` - **\[required\]** Option key in EditorConfig file.
      - `IsRequired` - **\[optional\]** if `true` option must be set for the analyzer to work.
  - `Remarks` - **\[optional\]** Additional information about the analyzer which is displayed at the bottom of a page (markdown format).
  - `Links` - 
    - `Link` - **\[optional\]** A link to a related website.
      - `Url` - **\[required\]** 
      - `Text` - **\[required\]** 

## Example

### Metadata

```xml title="Analyzers.xml"
<Analyzer Identifier="UseImplicitOrExplicitObjectCreation">
  <Id>RCS1250</Id>
  <Title>Use implicit/explicit object creation.</Title>
  <MessageFormat>Use {0} object creation.</MessageFormat>
  <DefaultSeverity>Info</DefaultSeverity>
  <IsEnabledByDefault>false</IsEnabledByDefault>
  <MinLanguageVersion>9.0</MinLanguageVersion>
  <Samples>
    <Sample>
      <Before><![CDATA[private string _value = new string(' ', 1)]]></Before>
      <After><![CDATA[private string _value = new(' ', 1)]]></After>
    </Sample>
  </Samples>
  <ConfigOptions>
    <Option Key="object_creation_type_style" IsRequired="true" />
    <Option Key="use_var_instead_of_implicit_object_creation" />
  </ConfigOptions>
  <Links>
    <Link>
      <Url>https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-9.0/target-typed-new</Url>
      <Text>Target-typed new expressions</Text>
    </Link>
  </Links>
</Analyzer>
```

### Generated Code

```csharp title="DiagnosticRules.Generated.cs"
/// <summary>RCS1250</summary>
public static readonly DiagnosticDescriptor UseImplicitOrExplicitObjectCreation = DiagnosticDescriptorFactory.Create(
    id:                 DiagnosticIdentifiers.UseImplicitOrExplicitObjectCreation, 
    title:              "Use implicit/explicit object creation.", 
    messageFormat:      "Use {0} object creation.", 
    category:           DiagnosticCategories.Roslynator, 
    defaultSeverity:    DiagnosticSeverity.Info, 
    isEnabledByDefault: false, 
    description:        null, 
    helpLinkUri:        DiagnosticIdentifiers.UseImplicitOrExplicitObjectCreation, 
    customTags:         Array.Empty<string>());
```

```cs title="DiagnosticIdentifiers.Generated.cs"
public const string UseImplicitOrExplicitObjectCreation = "RCS1250";
```

### Generated Documentation

See [RCS1250](analyzers/RCS1250).
