
module.exports = {

    'autobar':{}, //https://www.wenboz.com/p/3808.html
    // "vuepress-plugin-auto-sidebar": { collapse: {
    //     open: false,
    //   }}, // 自动侧边栏
    'vuepress-plugin-nuggets-style-copy':
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!'
      }
    }, // 代码块复制
// https://xiyang6.gitee.io/docs/%E5%8D%9A%E5%AE%A2/%E6%8F%92%E4%BB%B6%E5%A4%A7%E5%85%A8/#_4%E3%80%81%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8%E6%8F%92%E4%BB%B6
    'meting':
    {
        meting: {
            // 歌单地址-> 如果输入可忽略server|type|mid
            auto: 'https://music.163.com/#/playlist?id=2974518382',
            // 当前服务为netease -> 网易
            server: "netease",
            // 类型为歌单
            type: "playlist",
            // 歌单id
            mid: "2974518382",
        },
        aplayer: {
            // 歌单为随机
            order: 'random',
            // 0为不显示歌词
            lrcType: 0,
            // 音量
            volume: 0.55,
            // 开启迷你模式
            mini: true,
            // 自动播放
            autoplay: true
        },
    },

    '@vuepress-reco/vuepress-plugin-bulletin-popover':
    {
        title: '公告',
        body: [
            {
                type: 'title',
                content: '欢迎来到我的博客🎉🎉🎉',
                style: 'text-align: center;font-size: 15px;font-weight: bold;'
            },
            {
                type: 'text',
                content: '博客汇集了个人总结的资料文档，会不定期进行更新!',
                style: 'text-align: left;text-indent: 10px;font-size: 13px;'
            },
            {
                type: 'text',
                content: '博客中可能存在一些问题，欢迎小伙伴们给我留言.',
                style: 'text-align: left;text-indent: 10px;font-size: 13px;'
            },
            {
                type: 'text',
                content: '邮箱：zouyu0310@qq.com',
                style: 'text-align: left;text-indent: 10px;font-size: 13px;'
            }
        ],
        footer: null
    }
}