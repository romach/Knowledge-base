const repoUrl = "https://github.com/romach/Knowledge-base/";

module.exports = {
  title: 'Knowledge base',
  tagline: 'Knowledge base',
  url: 'https://knowledge.romach007.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'romach', // Usually your GitHub org/user name.
  projectName: 'Knowledge-base', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-162800907-1'
    },
    navbar: {
      title: 'Knowledge base',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.ico',
      },
      links: [
        {
          href: repoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: repoUrl,
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Roman Cherepanov`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            `${repoUrl}edit/master/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
