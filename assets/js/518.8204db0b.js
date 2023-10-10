(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1190:function(s,e,r){"use strict";r.r(e);var t=r(14),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_3主3从redis集群配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3主3从redis集群配置"}},[s._v("#")]),s._v(" 3主3从Redis集群配置")]),s._v(" "),e("h3",{attrs:{id:"找3台真实虚拟机-各自新建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找3台真实虚拟机-各自新建"}},[s._v("#")]),s._v(" 找3台真实虚拟机，各自新建")]),s._v(" "),e("p",[s._v("mkdir -p /myredis/cluster")]),s._v(" "),e("h3",{attrs:{id:"新建6个独立的redis实例服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建6个独立的redis实例服务"}},[s._v("#")]),s._v(" 新建6个独立的Redis实例服务")]),s._v(" "),e("p",[s._v("IP： 192.168.0.100 + 端口6381/6382")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6381.conf")]),s._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('bind 0.0.0.0\ndaemonize yes\nprotected-mode no\nport 6381\nlogfile "/myredis/cluster/cluster6381.log"\npidfile /myredis/cluster6381.pid\ndir /myredis/cluster\ndbfilename dump6381.rdb\nappendonly yes\nappendfilename "appendonly6381.aof"\nrequirepass 123456\nmasterauth 123456\n\ncluster-enabled yes\ncluster-config-file nodes-6381.conf\ncluster-node-timeout 5000\n')])])]),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6382.conf")]),s._v(" "),e("p",[s._v("IP：192.168.0.100 + 端口6383/6384")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6383.conf")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6384.conf")]),s._v(" "),e("p",[s._v("IP：192.168.0.100 + 端口6385/6386")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6385.conf")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6386.conf")]),s._v(" "),e("p",[s._v("启动6台主机实例")]),s._v(" "),e("p",[s._v("​\tredis-server /myredis/cluster/redisCluster6381.conf")]),s._v(" "),e("p",[s._v("​\t...")]),s._v(" "),e("p",[s._v("​\tredis-server /myredis/cluster/redisCluster6386.conf")]),s._v(" "),e("h3",{attrs:{id:"通过redis-cli-命令为6台机器构建集群关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过redis-cli-命令为6台机器构建集群关系"}},[s._v("#")]),s._v(" 通过redis-cli 命令为6台机器构建集群关系")]),s._v(" "),e("p",[e("strong",[s._v("构建主从关系命令")])]),s._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 一定要注意，此处要修改自己的IP为真实IP\nredis-cli -a 123456 --cluster create --cluster-replicas 1 192.168.111.175:6381 192.168.111.175:6382 192:168.111.172:6383 192.168.111.172:6384 192.168.111.174:6385 192.168.111.174:6386\n")])])]),e("p",[s._v("--cluster- replicas 1 表示为每个master创建一一个slave节点")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/17.jpg",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("一切OK的话，3主3从搞定")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/18.jpg",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_6381作为切入点-查看并检验集群状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6381作为切入点-查看并检验集群状态"}},[s._v("#")]),s._v(" 6381作为切入点，查看并检验集群状态")]),s._v(" "),e("p",[e("strong",[s._v("连接进6381作为切入点，$\\textcolor{red}{\\large 查看节点状态}$")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/19.jpg",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("cluster nodes")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/20.jpg",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("CLUSTER INFO")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/21.jpg",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);