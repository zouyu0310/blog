(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{969:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、jasypt是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、jasypt是什么"}},[t._v("#")]),t._v(" 一、"),a("code",[t._v("Jasypt")]),t._v("是什么")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200421145055.png",alt:""}}),t._v(" "),a("a",{attrs:{href:"http://www.jasypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://jasypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jasypt"),a("OutboundLink")],1),t._v("是一个Java库，允许开发人员以很简单的方式添加基本加密功能，而无需深入研究加密原理。利用它可以实现高安全性的，基于标准的加密技术，无论是单向和双向加密。加密密码，文本，数字，二进制文件。")])]),t._v(" "),a("ol",[a("li",[t._v("高安全性的，基于标准的加密技术，无论是单向和双向加密。加密密码，文本，数字，二进制文件…")]),t._v(" "),a("li",[t._v("集成Hibernate的。")]),t._v(" "),a("li",[t._v("可集成到Spring应用程序中，与Spring Security集成。")]),t._v(" "),a("li",[t._v("集成的能力，用于加密的应用程序（即数据源）的配置。")]),t._v(" "),a("li",[t._v("特定功能的高性能加密的multi-processor/multi-core系统。")]),t._v(" "),a("li",[t._v("与任何JCE（Java Cryptography Extension）提供者使用开放的API")])]),t._v(" "),a("h1",{attrs:{id:"二、使用bat脚本生成加密串和盐值-密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、使用bat脚本生成加密串和盐值-密钥"}},[t._v("#")]),t._v(" 二、使用bat脚本生成加密串和盐值(密钥)")]),t._v(" "),a("p",[t._v("为了方便，简单编写了一个bat脚本方便使用。")]),t._v(" "),a("div",{staticClass:"language-bat extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@echo off\nset/p input=待加密的明文字符串：\nset/p password=加密密钥(盐值)：\necho 加密中......\njava -cp jasypt-1.9.2.jar org.jasypt.intf.cli.JasyptPBEStringEncryptionCLI  ^\ninput=%input% password=%password% ^\nalgorithm=PBEWithMD5AndDES\npause\n")])])]),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("jasypt-1.9.2.jar")]),t._v("中的"),a("code",[t._v("org.jasypt.intf.cli.JasyptPBEStringEncryptionCLI")]),t._v("类进行加密")]),t._v(" "),a("li",[t._v("input参数是待加密的字符串，password参数是加密的密钥(盐值)")]),t._v(" "),a("li",[t._v("使用PBEWithMD5AndDES算法进行加密")])]),t._v(" "),a("p",[t._v("**注意："),a("code",[t._v("jasypt-1.9.2.jar")]),t._v(" 文件需要和bat脚本放在相同目录下。")]),t._v(" "),a("p",[t._v("使用示例：\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200421145514.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("注意：相同的盐值(密钥)，每次加密的结果是不同的。")])]),t._v(" "),a("h1",{attrs:{id:"三、jasypt与spring-boot整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、jasypt与spring-boot整合"}},[t._v("#")]),t._v(" 三、"),a("code",[t._v("Jasypt")]),t._v("与spring boot整合")]),t._v(" "),a("p",[t._v("首先引入"),a("code",[t._v("Jasypt")]),t._v("的maven坐标")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.ulisesbocchio"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jasypt-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.18"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("properties")]),t._v("或"),a("code",[t._v("yml")]),t._v('文件中需要对明文进行加密的地方的地方，使用ENC()包裹，如原值："happy family"，加密后使用'),a("code",[t._v("ENC(密文)")]),t._v("替换。")]),t._v(" "),a("p",[t._v("为了方便测试，在"),a("code",[t._v("properties")]),t._v("或"),a("code",[t._v("yml")]),t._v("文件中，做如下配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置盐值（加密解密密钥），我们配置在这里只是为了测试方便")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产环境中，切记不要这样直接进行设置，可通过环境变量、命令行等形式进行设置。下文会讲")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jasypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("encryptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n")])])]),a("p",[t._v("简单来说，就是在需要加密的值使用"),a("code",[t._v("ENC(")]),t._v("和"),a("code",[t._v(")")]),t._v("进行包裹，即："),a("code",[t._v("ENC(密文)")]),t._v("。之后像往常一样使用"),a("code",[t._v('@Value("${}")')]),t._v("获取该配置即可，获取的是解密之后的值。")]),t._v(" "),a("h1",{attrs:{id:"四、如何存储盐值-密钥-更安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、如何存储盐值-密钥-更安全"}},[t._v("#")]),t._v(" 四、如何存储盐值(密钥)更安全")]),t._v(" "),a("blockquote",[a("p",[t._v("本身加解密过程都是通过"),a("code",[t._v("盐值")]),t._v("进行处理的，所以正常情况下"),a("code",[t._v("盐值")]),t._v("和"),a("code",[t._v("加密串")]),t._v("是分开存储的。"),a("strong",[a("code",[t._v("盐值")]),t._v("应该放在"),a("code",[t._v("系统属性")]),t._v("、"),a("code",[t._v("命令行")]),t._v("或是"),a("code",[t._v("环境变量")]),t._v("来使用，而不是放在同一个配置文件里面。")])])]),t._v(" "),a("h2",{attrs:{id:"_4-1-命令行存储方式示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-命令行存储方式示例"}},[t._v("#")]),t._v(" 4.1 命令行存储方式示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("java -jar xxx.jar --jasypt.encryptor.password=xxx &;\n")])])]),a("h2",{attrs:{id:"_4-2-环境变量存储方式示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-环境变量存储方式示例"}},[t._v("#")]),t._v(" 4.2 环境变量存储方式示例")]),t._v(" "),a("p",[t._v("设置环境变量("),a("code",[t._v("linux")]),t._v(")：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 打开/etc/profile文件\nvim /etc/profile\n# 文件末尾插入\nexport JASYPT_PASSWORD = xxxx\n")])])]),a("p",[t._v("启动命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("java -jar xxx.jar --jasypt.encryptor.password=${JASYPT_PASSWORD} &;\n")])])]),a("h1",{attrs:{id:"五、这样真的安全么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、这样真的安全么"}},[t._v("#")]),t._v(" 五、这样真的安全么？")]),t._v(" "),a("p",[a("strong",[t._v("有的同学会问这样的问题：如果的"),a("code",[t._v("linux")]),t._v("主机被攻陷了怎么办，黑客不就知道了密钥？")])]),t._v(" "),a("p",[t._v("对于这个问题：我只能这么说，如果你的应用从内部被攻陷，在这个世界上没有一种加密方法是绝对安全的。这种加密方法只能做到：防君子不防小人。大家可能都听说过，某著名互联网公司将明文数据库密码上传到了"),a("code",[t._v("github")]),t._v("上面，导致用户信息被泄露的问题。这种加密方式，无非是将密钥与加密结果分开存放，减少个人疏忽导致的意外，增加破解难度。")]),t._v(" "),a("p",[t._v("如果密钥被从内部渗透暴露了，任何加密都是不安全的。就像你的组织内部有离心离德的人，无论你如何加密都不安全，你需要做的是把他找出来干掉，或者防范他加入你的组织！")])])}),[],!1,null,null,null);a.default=r.exports}}]);