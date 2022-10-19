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
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drogovic', // Usually your GitHub org/user name.
  projectName: 'docusaurus-useitcloud', // Usually your repo name.

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
          customCss: require.resolve('./src/css/custom.css'),
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
            label: 'User Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/blog', label: 'Support', position: 'left'},
          {
            href: 'https://useitcloud.com/',
            label: 'Use IT Cloud',
            position: 'right',
          },
          { to: '/api-reference', label: 'API', position: 'left' },
          { href: appConfig.links.github, position: 'right', className: 'header-link header-github-link', 'aria-label': 'GitHub repository'},
          { href: appConfig.links.storybook, position: 'right', className: 'header-link header-storybook-link', 'aria-label': 'Component Library'},
          { href: appConfig.links.grafana, position: 'right', className: 'header-link header-grafana-link', 'aria-label': 'Grafana Dashboard'},
          { href: appConfig.links.rabbitmq, position: 'right', className: 'header-link header-rabbitmq-link', 'aria-label': 'RabbitMQ Console'},
          { href: appConfig.links.s3filestorage, position: 'right', className: 'header-link header-s3-link', 'aria-label': 'S3 File Storage'},
          { href: appConfig.links.kubernetes, position: 'right', className: 'header-link header-kubernetes-link', 'aria-label': 'Kubernetes Platform'},
          { href: appConfig.links.artifactory, position: 'right', className: 'header-link header-jfrog-link', 'aria-label': 'Artifactory'},
          { href: appConfig.links.confluence, position: 'right', className: 'header-link header-confluence-link', 'aria-label': 'Wiki Workspace'},
          { href: appConfig.links.jira, position: 'right', className: 'header-link header-jira-link', 'aria-label': 'Sprint Planning Dashboard'},          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User docs',
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
              {
                label: 'Twitter',
                href: 'https://twitter.com/UseItCloud',
              },
            ],
          },
          {
            title: 'More',
            items: [
              //{
              //  label: 'Blog',
              //  to: '/blog',
              //},
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