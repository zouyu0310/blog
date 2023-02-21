module.exports = [
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
    
  ]