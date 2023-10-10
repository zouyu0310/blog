(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1167:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"aof-append-only-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-append-only-file"}},[t._v("#")]),t._v(" AOF(Append Only File)")]),t._v(" "),s("h3",{attrs:{id:"官网介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网介绍"}},[t._v("#")]),t._v(" 官网介绍")]),t._v(" "),s("p",[s("img",{attrs:{src:a(240),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),s("p",[t._v("$\\textcolor{red}{以日志的形式来记录每个写操作}$，将Redis执行过的所有写指令记录下来(读操作不记录)，只许追加文件但是不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redis重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作")]),t._v(" "),s("p",[t._v("默认情况下，redis是没有开启AOF的。开启AOF功能需要设置配置：appendonly yes")]),t._v(" "),s("h3",{attrs:{id:"能干嘛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#能干嘛"}},[t._v("#")]),t._v(" 能干嘛")]),t._v(" "),s("p",[s("img",{attrs:{src:a(633),alt:""}})]),t._v(" "),s("p",[t._v("AOF保存的是appendonly.aof文件")]),t._v(" "),s("h3",{attrs:{id:"aof持久化工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof持久化工作流程"}},[t._v("#")]),t._v(" AOF持久化工作流程")]),t._v(" "),s("p",[s("img",{attrs:{src:a(634),alt:""}})]),t._v(" "),s("p",[t._v("1.Client作为命令的来源，会有多个源头以及源源不断的请求命令。")]),t._v(" "),s("p",[t._v("2.在这些命令到达Redis Server 以后并不是直接写入AOF文件，会将其这些命令先放入AOF缓存中进行保存。这里的AOF缓冲区实际上是内存中的一片区域，存在的目的是当这些命令达到一定量以后再写入磁盘，避免频繁的磁盘IO操作。")]),t._v(" "),s("p",[t._v("3.AOF缓冲会根据AOF缓冲区"),s("strong",[t._v("同步文件的三种写回策略")]),t._v("将命令写入磁盘上的AOF文件。")]),t._v(" "),s("p",[t._v("4.随着写入AOF内容的增加为避免文件膨胀，会根据规则进行命令的合并("),s("strong",[t._v("又称AOF重写")]),t._v(")，从而起到AOF文件压缩的目的。")]),t._v(" "),s("p",[t._v("5.当Redis Server服务器重启的时候会队AOF文件载入数据。")]),t._v(" "),s("h3",{attrs:{id:"aof缓冲区三种写回策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof缓冲区三种写回策略"}},[t._v("#")]),t._v(" AOF缓冲区三种写回策略")]),t._v(" "),s("p",[s("img",{attrs:{src:a(635),alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("ALways")]),t._v("：同步写回，每个写命令执行完立刻同步地将日志写会磁盘")]),t._v(" "),s("p",[s("strong",[t._v("everysec")]),t._v("：每秒写回，每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，每隔1秒把缓冲区中的内容写入到磁盘")]),t._v(" "),s("p",[s("strong",[t._v("no")]),t._v("：操作系统控制的写回，每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘")]),t._v(" "),s("p",[t._v("小总结：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(636),alt:""}})])])}),[],!1,null,null,null);s.default=e.exports},240:function(t,s,a){t.exports=a.p+"assets/img/1.Redis-1688870014985-5.3235bad1.jpg"},633:function(t,s,a){t.exports=a.p+"assets/img/25.c1fa8368.jpg"},634:function(t,s,a){t.exports=a.p+"assets/img/26.025763f3.jpg"},635:function(t,s,a){t.exports=a.p+"assets/img/27.64c70367.jpg"},636:function(t,s,a){t.exports=a.p+"assets/img/28.f40be5be.jpg"}}]);