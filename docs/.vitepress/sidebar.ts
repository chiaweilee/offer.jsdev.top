function sidebar() {
  return {
    '/basic/': [
      {
        text: 'JavaScript 基础',
        items: [{ text: '数据类型', link: '/basic/javascript/data-types' }],
      },
    ],
    '/guide/': [
      {
        text: '导读',
        items: [
          { text: '背景简介', link: '/guide/introduction' },
          { text: '快速上手', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Job Model',
        items: [
          { text: 'P5 扎实基础', link: '/guide/p5' },
          { text: 'P6 独当一面', link: '/guide/p6' },
          { text: 'P7 领域专家', link: '/guide/p7' },
          { text: 'P8 领域突破', link: '/guide/p8' },
        ],
      },
      {
        text: '参与贡献',
        items: [{ text: '贡献代码', link: '/guide/contribute' }],
      },
    ],
  };
}

export default sidebar;
