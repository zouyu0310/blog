module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: '/blog/',
  
  locales: {
        '/': {
          lang: 'zh-CN'
        }
  },
  
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '邹宇的Blog', 
                items: [
                    
                    { text: '搭建', link: 'https://github.com/mqyqingfeng/Blog/issues/235' },
                ]
            }
        ],
		sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
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
            }
          ]
    }
}