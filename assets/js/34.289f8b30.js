(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{396:function(t,e,a){t.exports=a.p+"assets/img/20220110122532.e2fdc468.png"},397:function(t,e,a){t.exports=a.p+"assets/img/20220110122659.ec8952a7.png"},398:function(t,e,a){t.exports=a.p+"assets/img/20220110123639.661cd2c5.png"},399:function(t,e,a){t.exports=a.p+"assets/img/20220110123819.431ca624.png"},794:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"idea使用docker插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idea使用docker插件"}},[t._v("#")]),t._v(" IDEA使用Docker插件")]),t._v(" "),e("h2",{attrs:{id:"一、开启docker远程访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、开启docker远程访问"}},[t._v("#")]),t._v(" 一、开启Docker远程访问")]),t._v(" "),e("p",[t._v("如果使用idea编辑器的话，可以使用docker插件来远程使用服务器(虚拟机)上的docker,简单方便快捷的使用docker,更重要的是使用插件可以实现项目的一键部署，当然这还需要一些简单的配置。\n默认的dokcer是不支持远程访问的，需要加点配置，开启Docker的远程访问")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#修改Docker服务文件，需要先切换到root用户\nvim /lib/systemd/system/docker.service\n#注释掉"ExecStart"这一行，并添加下面这一行信息\nExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375\n')])])]),e("p",[e("img",{attrs:{src:a(396),alt:"image-20220110122525687"}})]),t._v(" "),e("p",[t._v("重新加载配置文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#重新加载配置文件\nsystemctl daemon-reload\n#重启服务\nsystemctl restart docker.service\n#查看配置的端口号（2375）是否开启（非必要）\nnetstat -nlpt  #如果找不到netstat命令，可以先安装一下这个工具，具体百度\n")])])]),e("p",[e("img",{attrs:{src:a(397),alt:"image-20220110122659644"}})]),t._v(" "),e("h1",{attrs:{id:"二、连接docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、连接docker"}},[t._v("#")]),t._v(" 二、连接docker")]),t._v(" "),e("p",[t._v("使用idea的docker插件连接docker，idea默认已经下载过docker插件了，如果没有的话，需要在idea下载docker插件")]),t._v(" "),e("p",[e("img",{attrs:{src:a(398),alt:"image-20220110123639173"}})]),t._v(" "),e("p",[t._v("连接成功之后就可以使用服务器(虚拟机)上的docker了")]),t._v(" "),e("p",[e("img",{attrs:{src:a(399),alt:"image-20220110123818979"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);