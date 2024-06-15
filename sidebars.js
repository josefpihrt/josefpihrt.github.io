/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  roslynatorSidebar: [
    { type: 'doc', id: 'roslynator/index', label: "Intro" },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Roslynator Guides',
        slug: 'roslynator/category/guides'
      },
      items: [
        'roslynator/configuration',
        'roslynator/analyzers-vs-refactorings',
        'roslynator/how-to-suppress-diagnostic',
        'roslynator/how-to-fix-all-diagnostics',
        'roslynator/how-to-remove-unused-code',
        'roslynator/how-to-update-documentation',
        'roslynator/how-to-generate-net-api-docs',
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      link: {
        type: 'generated-index',
        title: 'Developers',
        slug: 'roslynator/developers'
      },
      items: [
        'roslynator/how-to-use-net-api',
        'roslynator/how-to-add-new-analyzer',
        'roslynator/how-to-add-new-refactoring',
        {
          type: 'category',
          label: 'Testing',
          link: { type: 'doc', id: 'roslynator/testing' },
          items: [
            'roslynator/analyzers-testing',
            'roslynator/refactorings-testing',
            'roslynator/compiler-diagnostic-fixes-testing',
          ],
        },
        {
          type: 'category',
          label: 'Metadata Reference',
          link: {
            type: 'generated-index',
            title: 'Metadata Reference',
            slug: 'roslynator/category/metadata'
          },
          items: [
            'roslynator/analyzer-metadata',
            'roslynator/refactoring-metadata',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Code Analysis Reference',
      link: {
        type: 'generated-index',
        title: 'Code Analysis Reference',
        slug: 'roslynator/category/code-analysis'
      },
      items: [
        {
          type: 'category',
          label: 'Analyzers',
          link: { type: 'doc', id: 'roslynator/analyzers' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'roslynator/analyzers',
            },
          ],
        },
        {
          type: 'category',
          label: 'Refactorings',
          link: { type: 'doc', id: 'roslynator/refactorings' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'roslynator/refactorings',
            },
          ],
        },
        {
          type: 'category',
          label: 'Fixes',
          link: { type: 'doc', id: 'roslynator/fixes' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'roslynator/fixes',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      link: { type: 'doc', id: 'roslynator/cli' },
      items: [
        {
          type: 'category',
          label: 'Commands',
          link: { type: 'generated-index', slug: 'roslynator/cli/category/commands' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'roslynator/cli/commands',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '.NET API Reference',
      link: { type: 'doc', id: 'roslynator/ref' },
      items: [
        {
          type: 'autogenerated',
          dirName:   'roslynator/ref',
        },
      ],
    },
 ],
  orangSidebar: [
    { type: 'doc', id: 'orang/index', label: "Intro" },
    {
      type: 'category',
      label: 'Orang CLI',
      link: { type: 'doc', id: 'orang/cli' },
      items: [
        {
          type: 'category',
          label: 'Commands',
          link: { type: 'doc', id: 'orang/cli/commands' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'orang/cli/commands',
            },
          ],
        },
        { type: 'doc', id: 'orang/cli/how-to', label: "How to's" },
        { type: 'doc', id: 'orang/cli/expression-syntax', label: "Expression Syntax" },
        { type: 'doc', id: 'orang/cli/options-values', label: "Options Values" },
      ],
    },
    {
      type: 'category',
      label: '.NET API Reference',
      link: { type: 'doc', id: 'orang/ref' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'orang/ref',
        },
      ],
    },
  ],
  dotmarkdownSidebar: [
    { type: 'doc', id: 'dotmarkdown/index', label: "Intro" },
    { type: 'doc', id: 'dotmarkdown/docusaurus-markdown' },
    {
      type: 'category',
      label: '.NET API Reference',
      link: { type: 'doc', id: 'dotmarkdown/ref' },
      items: [
        {
          type: 'autogenerated',
          dirName:   'dotmarkdown/ref',
        },
      ],
    },
  ],
  snippeticaSidebar: [
    { type: 'doc', id: 'snippetica/index', label: "Intro" },
    { type: 'doc', id: 'snippetica/quick-reference-cs-vb', label: "Quick Reference for C# and VB" },
    {
      type: 'category',
      label: 'Snippets',
      link: {
        type: 'generated-index',
        title: 'Snippets',
        slug: 'snippetica/snippets'
      },
      items: [
        {
          type: 'category',
          label: 'Visual Studio',
          link: { type: 'doc', id: 'snippetica/snippets/vs' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'snippetica/snippets/vs',
            },
          ],
        },
        {
          type: 'category',
          label: 'VS Code',
          link: { type: 'doc', id: 'snippetica/snippets/vscode' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'snippetica/snippets/vscode',
            },
          ],
        },
      ],
    },
  ],
  gitaliasSidebar: [
    { type: 'doc', id: 'gitalias/index', label: "Intro" },
    { type: 'doc', id: 'gitalias/commands-aliases', label: "Commands Aliases" },
    { type: 'doc', id: 'gitalias/most-used-aliases', label: "Most Used Aliases" },
  ],
};

module.exports = sidebars;
