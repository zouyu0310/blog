(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{428:function(a,s,e){a.exports=e.p+"assets/img/image-20230305162652481.8106db87.png"},429:function(a,s,e){a.exports=e.p+"assets/img/image-20230305162913805.c02edacf.png"},430:function(a,s,e){a.exports=e.p+"assets/img/image-20230305163105647.c9e20d0d.png"},431:function(a,s,e){a.exports=e.p+"assets/img/image-20230305163726883.ac9c587f.png"},432:function(a,s,e){a.exports=e.p+"assets/img/image-20230305163422860.e591982f.png"},433:function(a,s,e){a.exports=e.p+"assets/img/image-20230305164349510.027fc2f8.png"},818:function(a,s,e){"use strict";e.r(s);var t=e(14),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_02-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-配置"}},[a._v("#")]),a._v(" 02 配置")]),a._v(" "),s("h2",{attrs:{id:"服务器放好需要的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器放好需要的文件"}},[a._v("#")]),a._v(" 服务器放好需要的文件")]),a._v(" "),s("p",[s("img",{attrs:{src:e(428),alt:"image-20230305162652481"}})]),a._v(" "),s("p",[a._v("启动Jenkins")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -jar jenkins.war \n")])])]),s("p",[a._v("将Jenkins安装包上传服务器,安装好后如果没法访问,就关闭防火墙")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl stop firewalld.service\n")])])]),s("p",[a._v("首次启动war包会在"),s("code",[a._v("/root/.jenkins")]),a._v("生成配置文件")]),a._v(" "),s("p",[a._v("待完全启动成功后 访问服务器8080端口完成配置")]),a._v(" "),s("p",[a._v("初始化后的密码，密码文件使用后会自动删除：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Jenkins initial setup is required. An admin user has been created and a password generated.\nPlease use the following password to proceed to installation:\n\n6c02b8008780458e87764f08b5c76441\n\nThis may also be found at: /root/.jenkins/secrets/initialAdminPassword\n\n*************************************************************\n*************************************************************\n*************************************************************\n\n2023-03-05 08:27:49.231+0000 [id=31]    INFO    jenkins.InitReactorRunner$1#onAttained: Completed initialization\n2023-03-05 08:27:49.250+0000 [id=21]    INFO    hudson.lifecycle.Lifecycle#onReady: Jenkins is fully up and running\n")])])]),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(429),alt:"image-20230305162913805"}}),a._v(" "),s("p",[a._v("进入后安装推荐插件")]),a._v(" "),s("p",[s("img",{attrs:{src:e(430),alt:"image-20230305163105647"}})]),a._v(" "),s("p",[a._v("安装好后设置用户名")]),a._v(" "),s("p",[s("img",{attrs:{src:e(431),alt:"image-20230305163726883"}})]),a._v(" "),s("h2",{attrs:{id:"maven安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven安装"}},[a._v("#")]),a._v(" maven安装")]),a._v(" "),s("p",[a._v("解压")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" apache-maven-3.8.6-bin.tar.gz \n")])])]),s("p",[s("img",{attrs:{src:e(432),alt:"image-20230305163422860"}})]),a._v(" "),s("p",[a._v("移动到/usr/local/maven")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv apache-maven-3.8.6 /usr/local/maven\n")])])]),s("p",[a._v("安装maven的集成插件")]),a._v(" "),s("p",[s("img",{attrs:{src:e(433),alt:"image-20230305164349510"}})]),a._v(" "),s("p",[a._v("至此Jenkins配置和maven安装完成")])])}),[],!1,null,null,null);s.default=n.exports}}]);