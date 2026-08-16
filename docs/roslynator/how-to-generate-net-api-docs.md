# How to Generate .NET API Documentation

Roslynator [CLI](cli) allows you to generate documentation for a .NET library.

Documentation can be published to the following hosts:

- [Docusaurus](https://docusaurus.io/docs)
- [GitHub](https://github.com)
- [Sphinx](https://www.sphinx-doc.org/en)

### Generate Documentation Files

Run the following command to generate documentation:

```sh
roslynator generate-doc
```

#### Usage

```powershell title="generate-doc-files.ps1"
roslynator generate-doc MY_SOLUTION.sln `
 --properties Configuration=Release `
 -o "build/ref" `
 --host docusaurus `
 --heading ".NET API Reference" `
 --group-by-common-namespace `
 --ignored-common-parts content `
 --ignored-root-parts all `
 --max-derived-types 10 `
 --root-file-path "build/ref.md"
```

See the actual [script](https://github.com/dotnet/roslynator/blob/main/tools/generate_ref_docs.ps1).
