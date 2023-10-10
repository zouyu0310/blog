(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1026:function(t,a,r){"use strict";r.r(a);var s=r(14),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),a("ul",[a("li",[t._v("FastDFS是一个轻量级的开源分布式文件系统。")]),t._v(" "),a("li",[t._v("FastDFS主要解决了大容量的文件存储和高并发访问的问题，文件存取时实现了负载均衡。")]),t._v(" "),a("li",[t._v("FastDFS实现了软件方式的RAID，可以使用廉价的IDE硬盘进行存储")]),t._v(" "),a("li",[t._v("支持存储服务器在线扩容")]),t._v(" "),a("li",[t._v("支持相同内容的文件只保存一份，节约磁盘空间")]),t._v(" "),a("li",[t._v("FastDFS特别适合大中型网站使用，用来存储资源文件（如：图片、文档、音频、视频等等）")])]),t._v(" "),a("h1",{attrs:{id:"二、架构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、架构说明"}},[t._v("#")]),t._v(" 二、架构说明")]),t._v(" "),a("ul",[a("li",[t._v("Tracker：管理集群，tracker 也可以实现集群。每个 tracker 节点地位平等。收集 Storage 集群的状态。")]),t._v(" "),a("li",[t._v("Storage：实际保存文件 Storage 分为多个组，每个组之间保存的文件是不同的。每个组内部可以有多个成员，")])]),t._v(" "),a("p",[t._v("组成员内部保存的内容是一样的，组成员的地位是一致的，没有主从的概念。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200501125955.png",alt:""}})]),t._v(" "),a("p",[t._v("说明 nginx + fileid（文件路径），http访问\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200501130209.png",alt:""}})]),t._v(" "),a("h1",{attrs:{id:"三、好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、好处"}},[t._v("#")]),t._v(" 三、好处：")]),t._v(" "),a("ol",[a("li",[t._v("将文件的管理与具体业务应用解耦，可以多个应用共用一套fastDFS集群，分成不同的组")]),t._v(" "),a("li",[t._v("图片访问，只需要将http-url交给浏览器。nginx提供访问服务。")]),t._v(" "),a("li",[t._v("方便统一备份，一组的多个storage就是彼此的备份")]),t._v(" "),a("li",[t._v("可以将图片浏览，文件下载的压力分散给nginx服务。应用自己专心做业务。")]),t._v(" "),a("li",[t._v("缩略图，防盗链等等")])])])}),[],!1,null,null,null);a.default=i.exports}}]);