// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
// const config = {...}

// module.exports = config;
module.exports = async function createConfig() {
  const { remarkKroki } = await import('remark-kroki');

  /** @type {import('@docusaurus/plugin-content-docs').Options} */
  const defaultSettings = {
    // 默认使用自动生成的侧边栏配置
    sidebarPath: require.resolve('./sidebars.js'),
    // 默认使用插件
    remarkPlugins: [
      [
        remarkKroki,
        {
          // ...options here
          server: 'https://kroki.io',
          alias: ['plantuml']
        }
      ]
    ],
  };

  return {
    title: 'My Site',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',
  
    // Set the production url of your site here
    url: 'https://mutouh.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
  
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'mutouh', // Usually your GitHub org/user name.
    projectName: 'mutouh.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
  
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
  
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'zh-Hans',
      locales: ['zh-Hans'],
    },
  
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [
              [
                remarkKroki,
                  {
                    // ...options here
                    server: 'https://kroki.io',
                    alias: ['plantuml']
                  }
              ]
            ]
          },
          blog: {
            showReadingTime: false,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [
              [
                remarkKroki,
                  {
                    // ...options here
                    server: 'https://kroki.io',
                    alias: ['plantuml']
                  }
              ]
            ],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'docsLinux',
          path: 'docslinux',
          routeBasePath: 'docslinux',
          ...defaultSettings
          // ... other options
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'docsAnsible',
          path: 'docsansible',
          routeBasePath: 'docsansible',
          ...defaultSettings
          // ... other options
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'docsMbp',
          path: 'docsmbp',
          routeBasePath: 'docsmbp',
          ...defaultSettings
          // ... other options
        },
      ],
    ],
  
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'My Site',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            // docs linux
            {
              to: '/docslinux/chrony',
              position: 'left',
              label: 'Linux',
              activeBaseRegex: `/docslinux/`,
            },
            // docs ansible
            {
              to: '/docsansible/intro',
              position: 'left',
              label: 'Ansible',
              activeBaseRegex: `/docsansible/`,
            },
            // 先隐藏，待内容补充完整
            {
              to: '/docsmbp/intro',
              position: 'left',
              label: 'Mac开发环境',
              activeBaseRegex: `/docsmbp/`,
            },
            // right
            {
              href: 'https://github.com/facebook/docusaurus',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus',
                },
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
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
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
      })
  };
};