(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1091:function(t,s,_){"use strict";_.r(s);var r=_(14),v=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_47-hystrix是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_47-hystrix是什么"}},[t._v("#")]),t._v(" 47_Hystrix是什么")]),t._v(" "),s("p",[t._v("概述")]),t._v(" "),s("p",[t._v("分布式系统面临的问题")]),t._v(" "),s("p",[t._v("复杂分布式体系结构中的应用程序有数十个依赖关系，每个依赖关系在某些时候将不可避免地失败。")]),t._v(" "),s("p",[t._v("服务雪崩")]),t._v(" "),s("p",[t._v("多个微服务之间调用的时候，假设微服务A调用微服务B和微服务C，微服务B和微服务C又调用其它的微服务，这就是所谓的“扇出”。如果扇出的链路上某个微服务的调用响应时间过长或者不可用，对微服务A的调用就会占用越来越多的系统资源，进而引起系统崩溃，所谓的“雪崩效应”.\n对于高流量的应用来说，单一的后避依赖可能会导致所有服务器上的所有资源都在几秒钟内饱和。比失败更糟糕的是，这些应用程序还可能导致服务之间的延迟增加，备份队列，线程和其他系统资源紧张，导致整个系统发生更多的级联故障。这些都表示需要对故障和延迟进行隔离和管理，以便单个依赖关系的失败，不能取消整个应用程序或系统。")]),t._v(" "),s("p",[t._v("所以，通常当你发现一个模块下的某个实例失败后，这时候这个模块依然还会接收流量，然后这个有问题的模块还调用了其他的模块，这样就会发生级联故障，或者叫雪崩。")]),t._v(" "),s("p",[t._v("Hystrix是什么")]),t._v(" "),s("p",[t._v("Hystrix是一个用于处理分布式系统的延迟和容错的开源库，在分布式系统里，许多依赖不可避免的会调用失败，比如超时、异常等，Hystrix能够保证在一个依赖出问题的情况下，不会导致整体服务失败，避免级联故障，以提高分布式系统的弹性。")]),t._v(" "),s("p",[t._v('"断路器”本身是一种开关装置，当某个服务单元发生故障之后，通过断路器的故障监控（类似熔断保险丝)，向调用方返回一个符合预期的、可处理的备选响应（FallBack)，而不是长时间的等待或者抛出调用方无法处理的异常，这样就保证了服务调用方的线程不会被长时间、不必要地占用，从而避免了故障在分布式系统中的蔓延，乃至雪崩。')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("hystrix\nn. 豪猪属;猬草属;豪猪;豪猪亚属\n")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);