function sidebar() {
  return {
    '/guide/': [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Routing', link: '/guide/routing' },
          { text: 'Deploying', link: '/guide/deploying' },
          { text: 'Internationalization', link: '/guide/i18n' },
        ],
      },
      {
        text: 'Writing',
        collapsed: false,
        items: [
          { text: 'Markdown', link: '/guide/markdown' },
          { text: 'Asset Handling', link: '/guide/asset-handling' },
          { text: 'Frontmatter', link: '/guide/frontmatter' },
          { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
          { text: 'API Reference', link: '/guide/api' },
        ],
      },
      {
        text: 'Theme',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/theme-introduction' },
          { text: 'Nav', link: '/guide/theme-nav' },
          { text: 'Sidebar', link: '/guide/theme-sidebar' },
          { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
          { text: 'Edit Link', link: '/guide/theme-edit-link' },
          { text: 'Last Updated', link: '/guide/theme-last-updated' },
          { text: 'Layout', link: '/guide/theme-layout' },
          { text: 'Home Page', link: '/guide/theme-home-page' },
          { text: 'Team Page', link: '/guide/theme-team-page' },
          { text: 'Badge', link: '/guide/theme-badge' },
          { text: 'Footer', link: '/guide/theme-footer' },
          { text: 'Search', link: '/guide/theme-search' },
          { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' },
        ],
      },
      {
        text: 'Migrations',
        collapsed: false,
        items: [
          {
            text: 'Migration from VuePress',
            link: '/guide/migration-from-vuepress',
          },
          {
            text: 'Migration from VitePress 0.x',
            link: '/guide/migration-from-vitepress-0',
          },
        ],
      },
    ],
  };
}

export default sidebar;
