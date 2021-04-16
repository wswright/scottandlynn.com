/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lynn and Scott.com',
  tagline: 'We are getting married on October 1st, 2021!',
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
        src: 'img/yellow_heart.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Our Pictures',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/wswright/scottandlynn.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `No Copyright © ${new Date().getFullYear()}  Built with Docusaurus. <marquee><img alt="" src="data:image/png;base64,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" />More details coming soon!<img alt="" src="data:image/png;base64,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" /></marquee>`,
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
