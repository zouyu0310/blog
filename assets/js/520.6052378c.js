(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1194:function(t,a,s){"use strict";s.r(a);var r=s(14),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"主从容错切换迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从容错切换迁移"}},[t._v("#")]),t._v(" 主从容错切换迁移")]),t._v(" "),a("h3",{attrs:{id:"容错切换迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容错切换迁移"}},[t._v("#")]),t._v(" 容错切换迁移")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("主6381和从机切换，先停止主机6381")]),t._v(" "),a("p",[t._v("6381主机停了，对应的真实从机上位")]),t._v(" "),a("p",[t._v("6381作为1号主机分配的从机以实际情况为准，具体是几号机器就是几号机器")])]),t._v(" "),a("li",[a("p",[t._v("再次查看集群信息，本次6381主6384从")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/28.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("停止主机6381，再次查看集群信息")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/27.png",alt:""}})]),t._v(" "),a("p",[t._v("6384成功上位")])]),t._v(" "),a("li",[a("p",[t._v("随后，6381原来的主机回来了，是否会上位？")]),t._v(" "),a("p",[t._v("恢复前："),a("img",{attrs:{src:"images/29.png",alt:""}})]),t._v(" "),a("p",[t._v("恢复后："),a("img",{attrs:{src:"images/30.png",alt:""}})]),t._v(" "),a("p",[t._v("$\\textcolor{red}{\\large 6381不会上位并以从节点形式回归}$")])])]),t._v(" "),a("h3",{attrs:{id:"集群不保证数据一致性100-ok-是会有数据丢失的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群不保证数据一致性100-ok-是会有数据丢失的情况"}},[t._v("#")]),t._v(" 集群不保证数据一致性100%OK，是会有数据丢失的情况")]),t._v(" "),a("p",[t._v("Redis集群不保证强一致性这意味着在特定的条件下，Redis集群可能会丢掉一些被系统收到的写入请求命令")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/16.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"手动故障转移or节点从属调整该如何处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动故障转移or节点从属调整该如何处理"}},[t._v("#")]),t._v(" 手动故障转移or节点从属调整该如何处理")]),t._v(" "),a("p",[t._v("上面6381宕机后，6381鸡儿6384主从对调了，和原始设计图不一样了,该如何调换主从位置呢")]),t._v(" "),a("p",[t._v("重新登录6381机器")]),t._v(" "),a("p",[t._v("常用命令：cluster failover")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/31.png",alt:""}})])])}),[],!1,null,null,null);a.default=v.exports}}]);