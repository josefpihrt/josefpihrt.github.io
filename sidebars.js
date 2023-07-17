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
    { type: 'doc', id: 'roslynator/intro', label: "Intro" },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Roslynator Guides',
      },
      items: [
        'roslynator/configuration',
        'roslynator/how-to-configure-analyzers',
        'roslynator/how-to-configure-refactorings',
        'roslynator/how-to-configure-ruleset-file',
        'roslynator/how-to-customize-rules-for-projects',
        'roslynator/how-to-debug-roslynator',
        'roslynator/how-to-fix-all-diagnostics',
        'roslynator/how-to-suppress-diagnostic',
        'roslynator/how-to-update-documentation',
        'roslynator/how-to-use-both-vsix-and-nuget',
        'roslynator/analyzers-vs-refactorings',
      ],
    },
    {
      type: 'category',
      label: 'List of Analyzers',
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
      label: 'List of Refactorings',
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
      label: 'List of Code Fixes',
      link: { type: 'doc', id: 'roslynator/fixes' },
      items: [
        {
          type: 'autogenerated',
          dirName:   'roslynator/fixes',
        },
      ],
    },
    {
      type: 'category',
      label: 'Roslynator CLI',
      link: { type: 'doc', id: 'roslynator/cli' },
      items: [
        {
          type: 'category',
          label: 'Commands',
          link: { type: 'doc', id: 'roslynator/cli/commands' },
          items: [
            {
              type: 'autogenerated',
              dirName:   'roslynator/cli/commands',
            },
          ],
        },
      ],
    },
  ],
  orangSidebar: [
    {
      type: 'autogenerated',
      dirName: 'orang',
    },
  ],

  dotmarkdownSidebar: [
    {
      type: 'autogenerated',
      dirName: 'dotmarkdown',
    },
  ],
};

module.exports = sidebars;
