// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Josef Pihrt',
  tagline: 'Welcome to My GitHub Pages',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://josefpihrt.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'JosefPihrt', // Usually your GitHub org/user name.
  // projectName: 'Roslynator', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Josef Pihrt',
        logo: {
          alt: 'Logo',
          src: 'img/logo-large.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'roslynatorSidebar',
            position: 'left',
            label: 'Roslynator',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dotmarkdownSidebar',
            position: 'left',
            label: 'DotMarkdown',
          },
          {
            type: 'docSidebar',
            sidebarId: 'snippeticaSidebar',
            position: 'left',
            label: 'Snippetica',
          },
          {
            type: 'docSidebar',
            sidebarId: 'orangSidebar',
            position: 'left',
            label: 'Orang',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gitaliasSidebar',
            position: 'left',
            label: 'Gitalias',
          },
          {
            href: 'https://github.com/josefpihrt?tab=repositories&sort=stargazers&type=source',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        copyright: `Copyright © 2022-${new Date().getFullYear()} Josef Pihrt. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,

        // languages supported by default (https://github.com/FormidableLabs/prism-react-renderer/blob/30a01dcfb3db66f0bfa3b7815e3652b1a3828927/packages/generate-prism-languages/index.ts#L10-L23)
        // cpp
        // go
        // graphql
        // html
        // jsx
        // js-extras
        // kotlin
        // markdown
        // objectivec
        // reason
        // rust
        // swift
        // tsx
        // yaml

        additionalLanguages: // https://prismjs.com/#supported-languages
          [
            'powershell',
            'csharp',
            'editorconfig',
            'bash',
          ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '3VJ5CPZUIK',

        // Public API key: it is safe to commit it
        apiKey: '6c446dc3bb46d032426323a65e41c28d',

        indexName: 'josefpihrtio',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
