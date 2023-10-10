(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1171:function(t,s,r){"use strict";r.r(s);var e=r(14),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"redis管道介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis管道介绍"}},[t._v("#")]),t._v(" Redis管道介绍")]),t._v(" "),s("h3",{attrs:{id:"面试题-如何优化频繁命令往返造成的性能瓶颈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题-如何优化频繁命令往返造成的性能瓶颈"}},[t._v("#")]),t._v(" 面试题：如何优化频繁命令往返造成的性能瓶颈？")]),t._v(" "),s("p",[t._v("Redis是一种基于"),s("strong",[t._v("客户端-服务端模型")]),t._v("以及请求/响应协议的TCP服务。一个请求会遵循以下步骤:\n1客户端向服务端发送命令分四步(发送命令→命令排队→命令执行-返回结果)，并监听Socket返回，通常以阻塞模式等待服务端响应。\n2服务端处理命令，并将结果返回给客户端。\n上述两步称为: Round Trip Time(简称RTT,数据包往返于两端的时间)。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/1.jpg",alt:""}})]),t._v(" "),s("p",[t._v("如果同时需要执行大量的命令，那么就要等待上一条命令应答后再执行，这中间不仅仅多了RTT (Round Time Trip) ，而且还频繁调用系统IO， 发送网络请求，同时需要redis调用多次read()和write()系统方法， 系统方法会将数据从用户态转移到内核态，这样就会对进程上下文有比较大的影响了，性能不太好，0(π_ π)0。这时候Redis管道就出现了。")])])}),[],!1,null,null,null);s.default=a.exports}}]);