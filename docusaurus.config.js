module.exports = {
  title: "Media Cloud Documentation",
  tagline:
    "Media Cloud is a permissionless marketplace for web services, built using the Media Network protocol. It offers a peer-to-peer alternative to traditional cloud giants like AWS, Azure, and Google Cloud.",
  url: "https://www.mediacloud.ws/docs",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "mediafoundation",
  projectName: "media-cloud-docs",
  themeConfig: {
    image: "https://media.network/images/mediasocial.jpg",
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Media Cloud Docs",
      logo: {
        alt: "Media Cloud Logo",
        src: "/img/medianetwork.svg",
        srcDark: "/img/medianetworkwhite.svg",
      },
      items: [
        {
          href: "https://t.me/Media_FDN",
          label: "Chat",
          position: "right",
        },
        {
          href: "https://github.com/mediafoundation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Misc",
          items: [
            {
              label: "Launch App",
              href: "https://app.media.network",
            },
            {
              label: "Network Status",
              href: "https://status.media.network",
            },
            {
              label: "Back to home",
              href: "https://media.network",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/Media_FDN",
            },
            {
              label: "Telegram",
              href: "https://t.me/Media_FDN",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/Xxv5euvmva",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mediafoundation",
            },
            {
              label: "Coingecko",
              href: "https://www.coingecko.com/en/coins/media-network",
            },
            {
              label: "Blog",
              href: "https://www.media.network/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Media Foundation`,
    },
    editUrl: "https://github.com/mediafoundation/media-cloud-docs/edit/main/",
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          path: "src/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
/*   plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/media-network/about',
            from: '/about-intro',
          },
          {
            to: '/governance',
            from: [
              '/media-governance-dao',
              '/media-governance-troubleshooting'
            ]
          }
        ],
      },
    ],
  ], */
};
