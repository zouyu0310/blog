(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{795:function(r,e,a){"use strict";a.r(e);var s=a(14),t=Object(s.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"首先需要开启硬件虚拟化及hyper-v功能-才能进行docker-for-windows软件安装。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先需要开启硬件虚拟化及hyper-v功能-才能进行docker-for-windows软件安装。"}},[r._v("#")]),r._v(" 首先需要开启硬件虚拟化及Hyper-V功能，才能进行Docker for Windows软件安装。")]),r._v(" "),e("p",[r._v("控制面板- 程序-   启用或关闭Windows功能 - 虚拟化")]),r._v(" "),e("p",[r._v("在任务栏中查看虚拟化是否开启。")]),r._v(" "),e("h2",{attrs:{id:"docker下载和安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker下载和安装"}},[r._v("#")]),r._v(" Docker下载和安装")]),r._v(" "),e("p",[r._v("Docker默认安装在C盘中，这样慢慢会导致C盘空间越来越小，建议把Docker安装到D盘。")]),r._v(" "),e("p",[r._v("Windows中更改Docker默认安装路径方法：\n1.先创建 D:\\Program Files\\Docker 目录。\n2.开始—“Windows系统”—“命令提示符”，一定要以管理员身份运行，然后，再运行如下命令：")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v('mklink /J "C:\\Program Files\\Docker"  "D:\\DevelopData\\DockerLink"\n')])])]),e("p",[r._v("运行结果：\n为 C:\\Program Files\\Docker <<===>>  D:\\DevelopData\\DockerLink创建的联接")]),r._v(" "),e("p",[r._v("去安装Docker就可以了，Docker默认安装路径已经更改成功了。")]),r._v(" "),e("h2",{attrs:{id:"阿里云加速器地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阿里云加速器地址"}},[r._v("#")]),r._v(" 阿里云加速器地址")]),r._v(" "),e("p",[r._v("加速配置registry-mirrors")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v('{\n\n  "registry-mirrors": ["https://64l2a5bw.mirror.aliyuncs.com"],\n\n  "builder": {\n    "gc": {\n      "defaultKeepStorage": "20GB",\n      "enabled": true\n    }\n  },\n  "experimental": false,\n  "features": {\n    "buildkit": true\n  }\n}\n')])])]),e("h2",{attrs:{id:"images下载-wsl硬盘映射更换待解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#images下载-wsl硬盘映射更换待解决"}},[r._v("#")]),r._v(" images下载 WSL硬盘映射更换待解决")])])}),[],!1,null,null,null);e.default=t.exports}}]);