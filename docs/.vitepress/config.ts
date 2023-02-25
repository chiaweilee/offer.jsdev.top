import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vitepress';
import nav from './nav';
import sidebar from './sidebar';

export default defineConfig({
  lang: 'zh-CN',
  title: '剑指前端Offer',
  description: '',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['script', {}, fs.readFileSync(path.resolve(__dirname, './inlined-scripts/hm.js'), 'utf-8')],
  ],
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/html-js/html-js.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/html-js/html-js.github.io' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present html-js',
    },
    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
    // carbonAds: {
    //   code: '',
    //   placement: '',
    // },
  },
});
