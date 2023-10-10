(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{1120:function(n,e,o){"use strict";o.r(e);var r=o(14),a=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"_99-nacos之服务消费者注册和负载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_99-nacos之服务消费者注册和负载"}},[n._v("#")]),n._v(" 99_Nacos之服务消费者注册和负载")]),n._v(" "),e("p",[n._v("新建Module - cloudalibaba-consumer-nacos-order83  --服务消费者")]),n._v(" "),e("p",[n._v("POM")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<dependencies>\n        \x3c!--SpringCloud ailibaba nacos --\x3e\n        <dependency>\n            <groupId>com.alibaba.cloud</groupId>\n            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n        </dependency>\n        \x3c!-- 引入自己定义的api通用包，可以使用Payment支付Entity --\x3e\n        <dependency>\n            <groupId>com.springcloud</groupId>\n            <artifactId>cloud-api-commons</artifactId>\n\x3c!--            <version>1.0.0-SNAPSHOT</version>--\x3e\n            <version>1.0-SNAPSHOT</version>\n        </dependency>\n        \x3c!-- SpringBoot整合Web组件 --\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        \x3c!--日常通用jar包配置--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-devtools</artifactId>\n            <scope>runtime</scope>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n")])])]),e("p",[n._v("为什么nacos支持负载均衡？因为spring-cloud-starter-alibaba-nacos-discovery内含netflix-ribbon包。")]),n._v(" "),e("p",[n._v("天生自带负载均衡,ribbon!")]),n._v(" "),e("p",[n._v("yml")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server:\n  port: 83\n\nspring:\n  application:\n    name: nacos-order-consumer\n  cloud:\n    nacos:\n      discovery:\n        server-addr: localhost:8848\n\n#消费者将要去访问的微服务名称(注册成功进nacos的微服务提供者)\nservice-url:\n  nacos-user-service: http://nacos-payment-provider\n\n")])])]),e("p",[n._v("主启动")]),n._v(" "),e("p",[n._v("业务类 -- 此为使用LoadBalanced 调用其他微服务配置类!")]),n._v(" "),e("p",[n._v("ApplicationContextConfig")])])}),[],!1,null,null,null);e.default=a.exports}}]);