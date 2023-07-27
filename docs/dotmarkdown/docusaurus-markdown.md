# Docusaurus Markdown

## Usage

```powershell
dotnet add package DotMarkdown.Docusaurus
```

### Code

```csharp title="DocusaurusExample.cs"
using DotMarkdown.Docusaurus;
using DotMarkdown.Docusaurus.Linq;
using static DotMarkdown.Linq.MFactory;
using static DotMarkdown.Docusaurus.Linq.DocusaurusMarkdownFactory;

var docusaurusDocument = Document(
    FrontMatter(
        ("sidebar_label", "Intro"),
        ("sidebar_position", 0)
    ),
    Heading1("Code Block Example"),
    CodeBlock("Console.WriteLine(\"Hello World!\");", "csharp", "HelloWorld.cs"),
    Heading1("Admonition Example"),
    new DocusaurusTipBlock("This is a special tip.") { Title = "Special Tip"}
);
```

### Rendered Markdown

#### Default Format
```csharp title="DocusaurusExample.cs"
var markdown = docusaurusDocument.ToString();
```

````markdown title="docusaurus.md"
---
sidebar_label: "Intro"
sidebar_position: 0
---

# Code Block Example

```csharp title="HelloWorld.cs"
Console.WriteLine("Hello World!");
```

# Admonition Example

:::tip Special Tip

This is a special tip\.

:::

````

#### Non-default Format
```csharp title="DocusaurusExample.cs"
var format = new DocusaurusMarkdownFormat(
    includeCodeLineNumbers: true,
    includeAdmonitionBlankLines: false);

var markdown = docusaurusDocument.ToString(format);
```

````markdown title="docusaurus.md"
---
sidebar_label: "Intro"
sidebar_position: 0
---

# Code Block Example

```csharp showLineNumbers title="HelloWorld.cs"
Console.WriteLine("Hello World!");
```

# Admonition Example

:::tip Special Tip
This is a special tip\.
:::

````
