(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1105:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_64-hystrix图形化dashboard监控实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_64-hystrix图形化dashboard监控实战"}},[t._v("#")]),t._v(" 64_Hystrix图形化Dashboard监控实战")]),t._v(" "),a("p",[a("strong",[t._v("修改cloud-provider-hystrix-payment8001")]),t._v(" (被监控)")]),t._v(" "),a("p",[t._v("注意：新版本Hystrix需要在主启动类PaymentHystrixMain8001中指定监控路径")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    /**\n     *此配置是为了服务监控而配置，与服务容错本身无关，springcloud升级后的坑\n     *ServletRegistrationBean因为springboot的默认路径不是"/hystrix.stream"，\n     *只要在自己的项目里配置上下面的servlet就可以了\n     *否则，Unable to connect to Command Metric Stream 404\n     */\n    @Bean\n    public ServletRegistrationBean getServlet() {\n        HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();\n        ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);\n        registrationBean.setLoadOnStartup(1);\n        registrationBean.addUrlMappings("/hystrix.stream");\n        registrationBean.setName("HystrixMetricsStreamServlet");\n        return registrationBean;\n    }\n\n')])])]),a("p",[a("strong",[t._v("如果8001主启动不配置，生成监控图标会报错 404")])]),t._v(" "),a("p",[t._v("监控测试")]),t._v(" "),a("p",[t._v("启动1个eureka")]),t._v(" "),a("p",[t._v("启动8001，9001")]),t._v(" "),a("p",[t._v("观察监控窗口")]),t._v(" "),a("p",[t._v("9001监控8001 - 填写监控地址 - http://localhost:8001/hystrix.stream 到 http://localhost:9001/hystrix页面的输入框。")]),t._v(" "),a("p",[t._v("测试地址 -- 产生数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("http://localhost:8001/payment/circuit/1\n\nhttp://localhost:8001/payment/circuit/-1\n\n测试通过\n\n先访问正确地址，再访问错误地址，再正确地址，会发现图示断路器都是慢慢放开的。\n")])])]),a("p",[a("img",{attrs:{src:e(580),alt:"image-20211229124102640"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(581),alt:"image-20211229124130831"}})]),t._v(" "),a("p",[a("strong",[t._v("如何看?")])]),t._v(" "),a("ul",[a("li",[t._v("7色")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(582),alt:"image-20211229124401765"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1圈\n")])])]),a("p",[t._v("实心圆：共有两种含义。它通过颜色的变化代表了实例的健康程度，它的健康度从绿色<黄色<橙色<红色递减。")]),t._v(" "),a("p",[t._v("该实心圆除了颜色的变化之外，它的大小也会根据实例的请求流量发生变化，流量越大该实心圆就越大。所以通过该实心圆的展示，就可以在大量的实例中快速的发现故障实例和高压力实例。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1线\n")])])]),a("p",[t._v("曲线：用来记录2分钟内流量的相对变化，可以通过它来观察到流量的上升和下降趋势。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("整图说明\n")])])]),a("p",[a("img",{attrs:{src:e(583),alt:"image-20211229124419422"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(584),alt:"image-20211229124435714"}})])])}),[],!1,null,null,null);a.default=r.exports},580:function(t,a,e){t.exports=e.p+"assets/img/20211229124102.a3e59f30.png"},581:function(t,a,e){t.exports=e.p+"assets/img/20211229124130.5c7a2819.png"},582:function(t,a,e){t.exports=e.p+"assets/img/20211229124401.c0c0dd77.png"},583:function(t,a,e){t.exports=e.p+"assets/img/20211229124419.37af1bb3.png"},584:function(t,a,e){t.exports=e.p+"assets/img/20211229124435.df50a6d0.png"}}]);