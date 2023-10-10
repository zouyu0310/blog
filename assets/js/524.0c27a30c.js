(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{1197:function(e,n,r){"use strict";r.r(n);var t=r(14),o=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"springboot集成redis简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成redis简介"}},[e._v("#")]),e._v(" SpringBoot集成Redis简介")]),e._v(" "),n("h3",{attrs:{id:"总体概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总体概述"}},[e._v("#")]),e._v(" 总体概述")]),e._v(" "),n("p",[e._v("jedis-lettuce-RedisTemplate三者的联系")]),e._v(" "),n("h3",{attrs:{id:"本地java连接redis常见问题-小白注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地java连接redis常见问题-小白注意"}},[e._v("#")]),e._v(" 本地Java连接Redis常见问题，小白注意")]),e._v(" "),n("ol",[n("li",[e._v("bind配置请注释掉")]),e._v(" "),n("li",[e._v("保护模式设置为no")]),e._v(" "),n("li",[e._v("Linux系统的防火墙设置")]),e._v(" "),n("li",[e._v("Redis服务器的IP地址和密码是否正确")]),e._v(" "),n("li",[e._v("忘记写访问redis的服务端口号和auth密码")])]),e._v(" "),n("h3",{attrs:{id:"集成jedis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成jedis"}},[e._v("#")]),e._v(" 集成Jedis")]),e._v(" "),n("p",[e._v("是什么：Jedis Client是Redis官网推荐的一个面向Java客户端，库文件实现了对各类API进行封装调用")]),e._v(" "),n("p",[e._v("步骤：")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("建module")])]),e._v(" "),n("li",[n("p",[e._v("改pom")]),e._v(" "),n("div",{staticClass:"language-pom extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.7.11</version>\n        <relativePath/> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <groupId>com.luojia</groupId>\n    <artifactId>redis7_study</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>redis7_study</name>\n    <description>Demo project for Spring Boot</description>\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>1.8</maven.compiler.target>\n        <junit.version>4.12</junit.version>\n        <log4j.version>1.2.17</log4j.version>\n        <lombok.version>1.16.18</lombok.version>\n    </properties>\n\n    <dependencies>\n        \x3c!--SpringBoot 通用依赖模块--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        \x3c!-- jedis --\x3e\n        <dependency>\n            <groupId>redis.clients</groupId>\n            <artifactId>jedis</artifactId>\n            <version>4.3.1</version>\n        </dependency>\n        \x3c!-- 通用基础配置 --\x3e\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>${junit.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>log4j</groupId>\n            <artifactId>log4j</artifactId>\n            <version>${log4j.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>${lombok.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')])])])]),e._v(" "),n("li",[n("p",[e._v("写YML")]),e._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[e._v("server.port=7777\nspring.application.name=redis7_study\n")])])])]),e._v(" "),n("li",[n("p",[e._v("主启动")])]),e._v(" "),n("li",[n("p",[e._v("业务类")])])]),e._v(" "),n("h3",{attrs:{id:"集成letter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成letter"}},[e._v("#")]),e._v(" 集成letter")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("是什么")]),e._v(" "),n("p",[e._v("Lettuce是一个Redis的Java驱动包，Lettuce翻译为生菜，就是吃的那种生成，所以它的logo如下：")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"images/1.jpg",alt:""}})]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[e._v("lettuce VS Jedis")]),e._v(" "),n("p",[n("img",{attrs:{src:"images/2.jpg",alt:""}})])])])])}),[],!1,null,null,null);n.default=o.exports}}]);