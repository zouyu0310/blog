(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{313:function(t,_,s){t.exports=s.p+"assets/img/image-20230619141401307.2cdbb3a6.png"},314:function(t,_,s){t.exports=s.p+"assets/img/image-20230619141522623.fcfcc10b.png"},315:function(t,_,s){t.exports=s.p+"assets/img/image-20230619142034523.76b29965.png"},316:function(t,_,s){t.exports=s.p+"assets/img/image-20230619142710735.d7be8a05.png"},725:function(t,_,s){"use strict";s.r(_);var a=s(14),v=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("hr"),t._v(" "),_("h2",{attrs:{id:"_1-适用背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-适用背景"}},[t._v("#")]),t._v(" 1. 适用背景")]),t._v(" "),_("ol",[_("li",[t._v("云服务器会定时备份")]),t._v(" "),_("li",[t._v("当数据被删除但当时没有做数据备份")]),t._v(" "),_("li",[t._v("查找某个时间点之前的数据")])]),t._v(" "),_("h2",{attrs:{id:"_2-数据库服务器恢复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库服务器恢复"}},[t._v("#")]),t._v(" 2. 数据库服务器恢复")]),t._v(" "),_("p",[t._v("一般用于只有数据库的服务器进行恢复，在目前版本不受影响的情况下获取丢失或者误删除的数据。")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("登陆阿里云后台找到实例")])]),t._v(" "),_("li",[_("p",[t._v("找到具体实例后点击快照 - 找到具体需要环境的时间点快照")])]),t._v(" "),_("li",[_("p",[t._v("点击创建自定义镜像")]),t._v(" "),_("p",[_("img",{attrs:{src:s(313),alt:"image-20230619141401307"}})]),t._v(" "),_("p",[_("img",{attrs:{src:s(314),alt:"image-20230619141522623"}})])]),t._v(" "),_("li",[_("p",[t._v("通过以上步骤，一个可运行的快照镜像就生成完成，下面创建具体的实例")])]),t._v(" "),_("li",[_("p",[t._v("首页点击-创建实例")])]),t._v(" "),_("li",[_("p",[t._v("付费类型 -选择 按量付费 （注： 一定选择按量付费，数据处理完成后及时释放）")])]),t._v(" "),_("li",[_("p",[t._v("镜像-选择 自定义镜像 粘贴镜像ID到此处")]),t._v(" "),_("p",[_("img",{attrs:{src:s(315),alt:"image-20230619142034523"}})])]),t._v(" "),_("li",[_("p",[t._v("点击下单，账户中剩余金额要超过100元")])]),t._v(" "),_("li",[_("p",[t._v("下单完成后一个实例就创建成功，点击启动就可以登陆进入服务器内部")])]),t._v(" "),_("li",[_("p",[t._v("处理完数据后一定记住及时释放此实例，按量付费会按时间产生费用。")])])]),t._v(" "),_("h2",{attrs:{id:"_3-程序服务器恢复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-程序服务器恢复"}},[t._v("#")]),t._v(" 3. 程序服务器恢复")]),t._v(" "),_("p",[t._v("一般用于程序服务器，不会有数据增量的机器。中病毒等情况下可通过此类方法恢复。（注： 对于部分增量数据不会恢复，所以一定要先做下面第一条）")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("找到实例-创建云盘快照，保存目前的服务器状态。")])]),t._v(" "),_("li",[_("p",[t._v("实例停机，回滚云盘")]),t._v(" "),_("p",[_("img",{attrs:{src:s(316),alt:"image-20230619142710735"}})])]),t._v(" "),_("li",[_("p",[t._v("等待回滚完毕后就恢复在固定时间点的快照状态。")])])])])}),[],!1,null,null,null);_.default=v.exports}}]);