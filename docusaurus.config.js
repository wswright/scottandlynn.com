/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lynn & Scott',
  tagline: 'Wedding Website',
  url: 'https://lynnandscott.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/yellow_heart.png',
  organizationName: 'wswright', // Usually your GitHub org/user name.
  projectName: 'scottandlynn.com', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
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
        "style": "dark",
        "links": [],
        "copyright": "No Copyright © 2021  Built with Docusaurus. <marquee><img alt='cartoon picture of a corgi' src='/img/corg.png' style='width: 65px;height: 50px;'/></marquee>"
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
