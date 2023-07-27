# DotMarkdown

DotMarkdown is a framework for creating markdown content.

## Supported Target Frameworks

- .NET Standard 1.3
- .NET Framework 4.5

## Installation

Run following command to install DotMarkdown basic package:
```sh
dotnet add package DotMarkdown
```

Run following command to include support for Docusaurus markdown:
```sh
dotnet add package DotMarkdown.Docusaurus
```

## Documentation

- [Reference documentation](ref)

## Usage 

### Commonly Used Types

- `DotMarkdown.MarkdownWriter`
- `DotMarkdown.MarkdownWriterSettings`
- `DotMarkdown.MarkdownFormat`
- `DotMarkdown.Linq.MFactory`

### How to Use MarkdownWriter

```csharp
using System.Text;
using DotMarkdown;

var sb = new StringBuilder();

using (MarkdownWriter writer = MarkdownWriter.Create(sb))
{
    writer.WriteHeading1("Markdown Sample");
    writer.WriteHeading2("Bullet List");
    writer.WriteBulletItem("text");
    writer.WriteStartBulletItem();
    writer.WriteBold("bold text");
    writer.WriteEndBulletItem();

    writer.WriteHorizontalRule();

    writer.WriteHeading2("Indented Code Block");
    writer.WriteIndentedCodeBlock("string s = null;");
}

Console.WriteLine(sb.ToString());
```

#### Output

```
# Markdown Sample

## Bullet List

* text
* **bold text**
- - -

## Indented Code Block

    string s = null;
```

- - -

### How to Use LINQ to Markdown

```csharp
using DotMarkdown.Linq;
using static DotMarkdown.Linq.MFactory;

MDocument document = Document(
    Heading1("Markdown Sample"),
    Heading2("Bullet List"),
    BulletList(
        "text",
        Bold("bold text")),
    HorizontalRule(),
    Heading2("IndentedCodeBlock"),
    IndentedCodeBlock("string s = null;"));

Console.WriteLine(document.ToString());
```

#### Output

```
# Markdown Sample

## Bullet List

* text
* **bold text**

- - -

## IndentedCodeBlock

    string s = null;
```

## Links

- [Mastering Markdown](http://guides.github.com/features/mastering-markdown/)
- [Markdown Cheatsheet](http://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Markdown Guide](https://www.markdownguide.org)
- [Daring Fireball: Markdown Syntax Documentation](http://daringfireball.net/projects/markdown/syntax)
- [CommonMark Spec](http://spec.commonmark.org)