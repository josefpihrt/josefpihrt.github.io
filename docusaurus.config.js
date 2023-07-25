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
        title: 'Josef Pihrt',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
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
            sidebarId: 'orangSidebar',
            position: 'left',
            label: 'Orang',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dotmarkdownSidebar',
            position: 'left',
            label: 'DotMarkdown',
          },
          {
            href: 'https://github.com/josefpihrt',
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
    }),
};

module.exports = config;
