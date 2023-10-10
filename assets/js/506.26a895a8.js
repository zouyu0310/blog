(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{1179:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"redis复制介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis复制介绍"}},[t._v("#")]),t._v(" Redis复制介绍")]),t._v(" "),s("h3",{attrs:{id:"是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),s("p",[t._v("官网地址：https://redis.io/docs/management/replication/")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/1.jpg",alt:""}})]),t._v(" "),s("p",[t._v("一句话：就是主从复制，master以写为主，slave以读为主，当master数据变化的时候，自动将新的数据异步同步到其他的slave数据库")]),t._v(" "),s("h3",{attrs:{id:"能干嘛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#能干嘛"}},[t._v("#")]),t._v(" 能干嘛")]),t._v(" "),s("ul",[s("li",[t._v("读写分离")]),t._v(" "),s("li",[t._v("容灾恢复")]),t._v(" "),s("li",[t._v("数据备份")]),t._v(" "),s("li",[t._v("水平扩容支撑高并发")])]),t._v(" "),s("h3",{attrs:{id:"怎么玩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么玩"}},[t._v("#")]),t._v(" 怎么玩")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("$\\textcolor{red}{配从(库)不配主(库)}$")])]),t._v(" "),s("li",[s("p",[t._v("权限细节，重要")]),t._v(" "),s("p",[t._v("master如果配置了requirepass参数，需要密码登录 ，那么slave就要配置masterauth来设置校验密码，否则的话master会拒绝slave的访问请求")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/2.jpg",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("基本操作命令")]),t._v(" "),s("p",[s("strong",[t._v("info replication")]),t._v(" ：可以查看复制结点的主从关系和配置信息")]),t._v(" "),s("p",[s("strong",[t._v("replicaof 主库IP 主库端口")]),t._v(" ：一般写入进Redis.conf配置文件内，重启后依然生效")]),t._v(" "),s("p",[s("strong",[t._v("slaveof 主库IP 主库端口")]),t._v(" ：")]),t._v(" "),s("p",[t._v("​\t每次与master断开之后，都需要重新连接，除非你配置进了redis.conf文件；在运行期间修改slave节点的信息，如果该数据库已经是某个主数据库的从数据库，那么会停止和原主数据库的同步关系 $\\textcolor{red}{转而和新的主数据库同步，重新拜码头}$")]),t._v(" "),s("p",[s("strong",[t._v("slaveof no one")]),t._v(" ：使当前数据库停止与其他数据库的同步，$\\textcolor{red}{转成主数据库，自立为王}$")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);