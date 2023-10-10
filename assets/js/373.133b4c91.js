(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1001:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"两种方法配置调整springboot应用容器的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种方法配置调整springboot应用容器的参数"}},[t._v("#")]),t._v(" 两种方法配置调整SpringBoot应用容器的参数")]),t._v(" "),a("ul",[a("li",[t._v("修改配置文件")]),t._v(" "),a("li",[t._v("自定义配置类")])]),t._v(" "),a("h2",{attrs:{id:"一、使用配置文件定制修改相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、使用配置文件定制修改相关配置"}},[t._v("#")]),t._v(" 一、使用配置文件定制修改相关配置")]),t._v(" "),a("p",[t._v("在application.properties / application.yml配置所需要的属性\nserver.xx开头的是所有servlet容器通用的配置，server.tomcat.xx开头的是tomcat特有的参数，其它类似。")]),t._v(" "),a("p",[t._v("关于修改配置文件application.properties。\n"),a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html#common-application-properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringBoot项目详细的配置文件修改文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("其中比较重要的有：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("server.connection-timeout=")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("连接的超时时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("server.tomcat.max-connections=10000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("接受的最大请求连接数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("server.tomcat.accept-count=100")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当所求的线程处于工作中，被放入请求队列等待的最大的请求数量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("server.tomcat.max-threads=200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大的工作线程池数量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("server.tomcat.min-spare-threads=10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最小的工作线程池数量")])])])]),t._v(" "),a("h2",{attrs:{id:"二、springboot2-x定制和修改servlet容器的相关配置-使用配置类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、springboot2-x定制和修改servlet容器的相关配置-使用配置类"}},[t._v("#")]),t._v(" 二、SpringBoot2.x定制和修改Servlet容器的相关配置，使用配置类")]),t._v(" "),a("p",[t._v("步骤：\n1.建立一个配置类，加上@Configuration注解\n2.添加定制器ConfigurableServletWebServerFactory\n3.将定制器返回")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatCustomizer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigurableServletWebServerFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configurableServletWebServerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatServletWebServerFactory")]),t._v(" factory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatServletWebServerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8585")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);