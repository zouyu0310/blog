(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{1023:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、缓存注解说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、缓存注解说明"}},[t._v("#")]),t._v(" 一、缓存注解说明：")]),t._v(" "),a("p",[a("code",[t._v("@Cacheable")]),t._v(" 通常应用到读取数据的方法上，如查找方法：先从缓存中读取，如果没有再调用方法获取数据，然后把数据查询结果添加到缓存中。如果缓存中查找到数据，被注解的方法将不会执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200429154434.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("@CachePut")]),t._v("通常应用于保存和修改方法配置，能够根据方法的请求参数对其结果进行缓存，和 @Cacheable 不同的是，它每次都会触发被注解方法的调用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200429154505.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("@CachEvict")]),t._v(" 通常应用于删除方法配置，能够根据一定的条件对缓存进行清空。可以清除一条或多条缓存。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200429154630.png",alt:""}})]),t._v(" "),a("p",[t._v("Caching为组合注解（非常有用），请看下文。")]),t._v(" "),a("h1",{attrs:{id:"二、缓存注解常用策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、缓存注解常用策略"}},[t._v("#")]),t._v(" 二、缓存注解常用策略")]),t._v(" "),a("p",[t._v("查询分两种：一种是查回来一个集合，一种是查一个对象。\n那么，我们随便增删改一个对象，都有可能导致集合缓存与数据库数据不一致。\n通常情况下，我们该怎么做才能做到一致性？"),a("strong",[t._v("只要发生删改查，就把集合类缓存销毁")]),t._v(" "),a("strong",[t._v("对于查询方法：")]),t._v(" "),a("code",[t._v("@Cacheable(value=“obj”)")]),t._v(" 或 "),a("code",[t._v("@Cacheable(value=“objList”)")]),t._v(" "),a("strong",[t._v("对于修改和新增方法：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Caching")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evict "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CacheEvict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"objList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("allEntries "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  put"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CachePut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("对于删除方法：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Caching")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evict "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CacheEvict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"objList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("allEntries "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CacheEvict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("在实际的生产环境中，没有一定之规，哪种注解必须用在哪种方法上，"),a("code",[t._v("@CachEvict")]),t._v(" 注解通常也用于更新方法上。数据的缓存策略，要根据资源的使用方式，做出合理的缓存策略规划。保证缓存与业务数据库的数据一致性。并做好测试，没有一定之规。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);