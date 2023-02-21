//插件
const pluginConf = require('../../config/pluginConfig.js');
// 导航栏
const navConf = require('../../config/navConfig.js');
// 侧边栏 -- 使用自动生成侧边栏
// const sidebarConf = require('../../config/sidebarConfig.js');

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
  markdown: {
    lineNumbers: true,  // 代码显示行号
  }, 
  plugins: pluginConf,
  // 主题配置
  themeConfig: {
    //最后更新时间
    lastUpdated: 'Last Updated',
    nav: navConf,
    // 左侧导航
    // sidebar: sidebarConf
    sidebarDepth: 1 // 侧边栏显示深度，默认为1，即显示一级标题
  },


}