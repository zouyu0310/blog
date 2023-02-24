//插件
const pluginConf = require('./config/pluginConfig.js');
// 导航栏
const navConf = require('./config/navConfig.js');
// 侧边栏 -- 使用自动生成侧边栏
// const sidebarConf = require('../../config/sidebarConfig.js');

module.exports = {

  // 主题 https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html
  // 标题
  title: '邹宇的博客',
   head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: '/images/man.png' }
        ]
    ],
  // 标题下的描述
  // description: 'https://www.vuepress.cn/',
  description: '求知若渴，虚心若愚。 愿你每天都在成长',
  /* github项目仓库名称 */
  base: '/blog/',

  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true,  // 代码显示行号
  }, 
  plugins: pluginConf,
  // 主题配置
  themeConfig: {
    logo: '/images/man.png', // 导航栏左侧的logo,不写就不显示
    //最后更新时间
    lastUpdated: 'Last Updated',
    nav: navConf,
    // 左侧导航
    // sidebar: sidebarConf
    sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
    editLinks: true,  // 开启编辑链接功能
    editLinkText: '帮助我改善此页面',  // 自定义超链接的文本内容
    repoLabel: 'GitHub',  // 链接的名称
    repo: 'https://github.com/zouyu0310/blog',  // 链接的地址

    
  },


}