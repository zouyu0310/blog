module.exports = {
  // 标题
  title: '邹宇的博客',
  // 标题下的描述
  description: 'https://www.vuepress.cn/',
  /* github项目仓库名称 */
  base: '/blog/',

  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
// 主题配置
  themeConfig: {
    //最后更新时间
    lastUpdated: 'Last Updated', 
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Elasticsearch', items: [
          { text: '核心知识篇', link: '/elasticsearch-core/' },
          { text: '高级知识篇', link: '/elasticsearch-senior/' }
        ]
      },
      {
        text: '邹宇的Blog',
        items: [
          { text: '搭建', link: 'https://github.com/mqyqingfeng/Blog/issues/235' },
        ]
      },
      {
        text: '官方文档学习',
        items: [
          { text: '跳转', link: 'https://www.vuepress.cn/' },
        ]
      }
    ],
    // 左侧导航
    sidebar: [
      {
        // 标题
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 下级列表不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" }
        ],
      },
      {
        title: "ES-core",
        path: '/elasticsearch-core',
        collapsable: false, // 不折叠
        children: [
          { title: "ES", path: "/elasticsearch-core/" }
        ],
      }
    ]
  },

  plugins: ['@vuepress/nprogress']
}