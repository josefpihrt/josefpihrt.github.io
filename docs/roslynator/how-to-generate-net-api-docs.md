# How to Generate .NET API Documentation

Roslynator [CLI](cli) allows you to generate documentation for .NET library.

Documentation can be published to following hosts:

- [Docusaurus](https://docusaurus.io/docs)
- [GitHub](https://github.com)
- [Sphinx](https://www.sphinx-doc.org/en)

### Generate Documentation Files

Run following command to generate documentation:

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
 --max-derived-types 10
```

### Generate Documentation Root File

Run following command to generate documentation root file:

```sh
roslynator generate-doc-root
```

#### Usage

```powershell title="generate-doc-root-file.ps1"
roslynator generate-doc-root MY_SOLUTION.sln `
 --properties Configuration=Release `
 -o "build/ref.md" `
 --host docusaurus `
 --heading ".NET API Reference" `
 --ignored-parts content `
 --root-directory-url "ref"
 ```

 See the actual [script](https://github.com/JosefPihrt/Roslynator/blob/main/tools/generate_ref_docs.ps1).
