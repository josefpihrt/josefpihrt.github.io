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
        ],
      },
      footer: {
        copyright: `Copyright © 2022-${new Date().getFullYear()} Josef Pihrt and Contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: // https://prismjs.com/#supported-languages
        [
          'powershell',
          'csharp',
          'editorconfig'
        ], 
      },
    }),
};

module.exports = config;
