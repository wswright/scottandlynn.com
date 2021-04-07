/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lynn and Scott.com',
  tagline: 'We are getting married!',
  url: 'https://lynnandscott.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wswright', // Usually your GitHub org/user name.
  projectName: 'scottandlynn.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'LynnandScott.com',
      logo: {
        alt: 'We are getting married!',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Engagement Pictures',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/wswright/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `No Copyright © ${new Date().getFullYear()}  Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/wswright/scottandlynn.com/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
