import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'WOVN.app',
  tagline: '',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/WovnAppDocumentation', 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WOVNio', // Usually your GitHub org/user name.
  projectName: 'WovnAppDocumentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  deploymentBranch: "gh-pages",
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WOVN.app',
      logo: {
        alt: 'WOVN.app Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'englishDocsSidebar',
          position: 'left',
          label: 'Documentation(English)',
        },
        {
          type: 'docSidebar',
          sidebarId: 'japaneseDocsSidebar',
          position: 'left',
          label: 'ドキュメント(日本語)',
        },
        {
          href: 'https://github.com/WOVNio/WovnAppDocumentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Start',
          items: [
            {
              label: 'iOS Quick Start',
              to: '/docs/English/iOS/ios_quick_start',
            },
            {
              label: 'Android Quick Start',
              to: '/docs/English/Android/android_quick_start',
            },
          ],
        },
        {
          title: 'クイックスタート',
          items: [
            {
              label: 'iOS クイックスタート',
              to: '/docs/Japanese/iOS/ios_quick_start',
            },
            {
              label: 'Android クイックスタート',
              to: '/docs/Japanese/Android/android_quick_start',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'WOVN.io',
              href: 'https://wovn.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WOVNio/WovnAppDocumentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WOVN.io. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
