(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1070:function(e,r,n){"use strict";n.r(r);var t=n(14),a=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_18-订单微服务80入驻进eurekaserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_18-订单微服务80入驻进eurekaserver"}},[e._v("#")]),e._v(" 18_订单微服务80入驻进EurekaServer")]),e._v(" "),r("p",[e._v("EurekaClient端cloud-consumer-order80将注册进EurekaServer成为服务消费者consumer，类似来上课消费的同学")]),e._v(" "),r("p",[e._v("1.cloud-consumer-order80")]),e._v(" "),r("p",[e._v("2.POM")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n</dependency>\n")])])]),r("p",[e._v("3.YML")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server:\n  port: 81\n\nspring:\n  application:\n    name: cloud-order-service\n\neureka:\n  client:\n    #表示是否将自己注册进Eurekaserver默认为true。\n    register-with-eureka: true\n    #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡\n    fetchRegistry: true\n    service-url:\n      defaultZone: http://localhost:7001/eureka\n\n")])])]),r("p",[e._v("4.主启动")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('/**\n * @ClassName OrderMain80\n * @Description 消费者主程序\n * @Author zouyu\n * @Date 2021/12/16 22:50\n * @Version 1.0\n **/\n@SpringBootApplication\n@EnableEurekaClient \npublic class OrderMain80 {\n    public static void main(String[] args){\n        SpringApplication.run(OrderMain80.class,args);\n        System.out.println("80服务启动成功!");\n    }\n}\n')])])]),r("p",[e._v("5.测试")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("启动cloud-provider-payment8001、cloud-eureka-server7001和cloud-consumer-order80这三工程。\n浏览器输入 http://localhost:7001 , 在主页的Instances currently registered with Eureka将会看到cloud-provider-payment8001、cloud-consumer-order80两个工程名。\n")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);