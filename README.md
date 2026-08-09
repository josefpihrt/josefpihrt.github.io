# josefpihrt.github.io

Documentation for the following projects:

- [Roslynator](https://github.com/dotnet/roslynator)
- [DotMarkdown](https://github.com/josefpihrt/dotmarkdown)
- [Orang](https://github.com/josefpihrt/orang)
- [Snippetica](https://github.com/josefpihrt/snippetica)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Generate Documentation

For local development, clone the following repositories alongside this one:

- [Roslynator](https://github.com/dotnet/roslynator)
- [DotMarkdown](https://github.com/josefpihrt/dotmarkdown)
- [Orang](https://github.com/josefpihrt/orang)
- [Snippetica](https://github.com/josefpihrt/snippetica)

Folder structure (example):

- `code`
  - `josefpihrt.github.io`
  - `roslynator` (required name)
  - `dotmarkdown` (required name)
  - `orang` (required name)
  - `snippetica` (required name)

Then run `tools/generate_docs.ps1` (use `tools/delete_docs.ps1` to remove generated output).

# Local Development

Run `npm run start`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

# Build

Run `npm run build`

This command generates static content into the `build` directory and can be served by any static hosting service.
