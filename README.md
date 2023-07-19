# josefpihrt.github.io

This website contains documentation for following projects:

- [Roslynator](https://github.com/josefpihrt/roslynator)
- [DotMarkdown](https://github.com/josefpihrt/dotmarkdown)
- [Orang](https://github.com/josefpihrt/orang)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Generate Documentation

For local development it's necessary to pull following repositories and place them next to this repository:

- [Roslynator](https://github.com/josefpihrt/roslynator)
- [DotMarkdown](https://github.com/josefpihrt/dotmarkdown)
- [Orang](https://github.com/josefpihrt/orang)

Folder structure (example):

- `code`
  - `josefpihrt.github.io`
  - `roslynator` (required name)
  - `dotmarkdown` (required name)
  - `orang` (required name)

Then run script `tools/generate_docs.ps1` (generated documentation can be deleted with script `tools/delete_docs.ps1`).

# Local Development

Run `npm run start`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

# Build

Run `npm run build`

This command generates static content into the `build` directory and can be served using any static contents hosting service.
