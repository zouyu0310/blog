(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{1178:function(t,v,_){"use strict";_.r(v);var a=_(14),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"redis发布订阅常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis发布订阅常用命令"}},[t._v("#")]),t._v(" Redis发布订阅常用命令")]),t._v(" "),v("h3",{attrs:{id:"常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令：")]),t._v(" "),v("p",[v("img",{attrs:{src:"images/4.jpg",alt:""}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("SUBSCRIBE channel [channel ...]")]),t._v(" "),v("p",[t._v("订阅给定的一个或多个频道的信息")]),t._v(" "),v("p",[t._v("$\\textcolor{red}{推荐先执行订阅然后在发布，订阅成功之前发布的消息是收不到的}$")]),t._v(" "),v("p",[t._v("订阅的客户端每次可以收到一个3个参数的消息")]),t._v(" "),v("ol",[v("li",[t._v("消息种类")]),t._v(" "),v("li",[t._v("始发频道的名称")]),t._v(" "),v("li",[t._v("实际的消息内容")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"images/5.jpg",alt:""}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("PUBLISH channel message")]),t._v(" "),v("p",[t._v("发布消息到指定的频道")])]),t._v(" "),v("li",[v("p",[t._v("PSUBSCRIBE pattern [pattern ...]")]),t._v(" "),v("p",[t._v("按照模式批量订阅，订阅一个或多个符合给定模式(支持*号？号之类的)的频道")])]),t._v(" "),v("li",[v("p",[t._v("PUBSUB subcommand [argument [argument ...]]")]),t._v(" "),v("p",[t._v("查看订阅与发布系统")]),t._v(" "),v("p",[t._v("PUBSUB CHANNELS")]),t._v(" "),v("p",[t._v("​\t由活跃频道组成的列表")]),t._v(" "),v("p",[v("img",{attrs:{src:"images/6.jpg",alt:""}})]),t._v(" "),v("p",[t._v("PUBSUB NUMSUB [channel [channel ...]]")]),t._v(" "),v("p",[t._v("​\t某个频道有几个订阅者")]),t._v(" "),v("p",[v("img",{attrs:{src:"images/7.jpg",alt:""}})]),t._v(" "),v("p",[t._v("PUBSUB NUMPAT")]),t._v(" "),v("p",[t._v("​\t只统计使用PSUBSCRIBE命令执行的返回客户端订阅的唯一$\\textcolor{red}{模式的数量}$")]),t._v(" "),v("p",[v("img",{attrs:{src:"images/9.jpg",alt:""}})])]),t._v(" "),v("li",[v("p",[t._v("UNSUBSCRIBE [channel [channel ...]]")]),t._v(" "),v("p",[t._v("退订给定的频道")])]),t._v(" "),v("li",[v("p",[t._v("PUNSUBSCRIBE [pattern [pattern ...]]")]),t._v(" "),v("p",[t._v("退订所有给定模式的频道")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);