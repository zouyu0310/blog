(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1065:function(e,r,a){"use strict";a.r(r);var v=a(14),t=Object(v.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_15-eureka基础知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_15-eureka基础知识"}},[e._v("#")]),e._v(" 15  Eureka基础知识")]),e._v(" "),r("p",[e._v("什么是服务治理")]),e._v(" "),r("p",[e._v("Spring Cloud封装了Netflix 公司开发的Eureka模块来实现服务治理")]),e._v(" "),r("p",[e._v("在传统的RPC远程调用框架中，管理每个服务与服务之间依赖关系比较复杂，管理比较复杂，所以需要使用服务治理，管理服务于服务之间依赖关系，可以实现服务调用、负载均衡、容错等，实现服务发现与注册。")]),e._v(" "),r("p",[e._v("什么是服务注册与发现")]),e._v(" "),r("p",[e._v("Eureka采用了CS的设计架构，Eureka Sever作为服务注册功能的服务器，它是服务注册中心。而系统中的其他微服务，使用Eureka的客户端连接到 Eureka Server并维持心跳连接。这样系统的维护人员就可以通过Eureka Server来监控系统中各个微服务是否正常运行。")]),e._v(" "),r("p",[e._v("在服务注册与发现中，有一个注册中心。当服务器启动的时候，会把当前自己服务器的信息比如服务地址通讯地址等以别名方式注册到注册中心上。另一方(消费者服务提供者)，以该别名的方式去注册中心上获取到实际的服务通讯地址，然后再实现本地RPC调用RPC远程调用框架核心设计思想:在于注册中心，因为使用注册中心管理每个服务与服务之间的一个依赖关系(服务治理概念)。在任何RPC远程框架中，都会有一个注册中心存放服务地址相关信息(接口地址)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(544),alt:"image-20211218230851493"}})]),e._v(" "),r("p",[e._v("Eureka包含两个组件:Eureka Server和Eureka Client")]),e._v(" "),r("p",[e._v("Eureka Server提供服务注册服务")]),e._v(" "),r("p",[e._v("各个微服务节点通过配置启动后，会在EurekaServer中进行注册，这样EurekaServer中的服务注册表中将会存储所有可用服务节点的信息，服务节点的信息可以在界面中直观看到。")]),e._v(" "),r("p",[e._v("EurekaClient通过注册中心进行访问")]),e._v(" "),r("p",[e._v("它是一个Java客户端，用于简化Eureka Server的交互，客户端同时也具备一个内置的、使用轮询(round-robin)负载算法的负载均衡器。在应用启动后，将会向Eureka Server发送心跳(默认周期为30秒)。如果Eureka Server在多个心跳周期内没有接收到某个节点的心跳，EurekaServer将会从服务注册表中把这个服务节点移除（默认90秒)")])])}),[],!1,null,null,null);r.default=t.exports},544:function(e,r,a){e.exports=a.p+"assets/img/20211218230858.a6c9aae6.png"}}]);