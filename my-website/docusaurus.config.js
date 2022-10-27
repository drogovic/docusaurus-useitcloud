// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const appConfig = require("./web-config.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Use IT Cloud',
  tagline: 'Documentation',
  url: 'https://bright-raindrop-a76334.netlify.app',
  baseUrl: '/',
  // plugins: [ require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drogovic', // Usually your GitHub org/user name.
  projectName: 'docusaurus-useitcloud', // Usually your repo name.
  
  // search plugin - works in mode build
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
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
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/', // rdz docs
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          //customCss: require.resolve('./src/css/custom.css'),
          customCss: require.resolve('./src/styles/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Use IT Cloud',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon_uic.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction/1000',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/blog', label: 'Support', position: 'left'},
          //{
          //  href: 'https://useitcloud.com/',
          //  label: 'Use IT Cloud',
          //  position: 'right',
          //},
          {
            href: '/api-reference/',
            label: 'API',
            position: 'left',
            target: '_blank'
          },          
          /**{ to: '/api-reference', label: 'API', position: 'left'},*/
          { href: appConfig.links.github, position: 'right', className: 'header-link header-github-link', 'aria-label': 'GitHub repository'},
          { href: appConfig.links.twitter, position: 'right', className: 'header-link header-twitter-link', 'aria-label': 'Twitter'},           
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docs',
                to: '/docs/Introduction/1000',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Press & Media',
                href: 'https://useitcloud.com/presse-media/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/use-it-cloud',
              },
              //{
              //  label: 'Twitter',
              //  href: 'https://twitter.com/UseItCloud',
              //},
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Support',
                to: '/blog',
              },              
              {
                label: 'Use IT Cloud',
                href: 'https://useitcloud.com/',
              },
              {
                label: 'Prologue',
                href: 'https://prologue.fr/',
              },              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;