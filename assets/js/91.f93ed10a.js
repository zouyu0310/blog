(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1099:function(t,s,r){"use strict";r.r(s);var a=r(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_58-hystrix之服务熔断理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_58-hystrix之服务熔断理论"}},[t._v("#")]),t._v(" 58_Hystrix之服务熔断理论")]),t._v(" "),s("p",[t._v("断路器，相当于保险丝。")]),t._v(" "),s("p",[t._v("熔断机制概述")]),t._v(" "),s("p",[t._v("熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务出错不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，"),s("strong",[t._v("恢复调用链路")]),t._v("。")]),t._v(" "),s("p",[t._v("在Spring Cloud框架里，熔断机制通过Hystrix实现。Hystrix会监控微服务间调用的状况，当失败的调用到一定阈值，缺省是5秒内20次调用失败，就会启动熔断机制。熔断机制的注解是@HystrixCommand。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(578),alt:"image-20211229001517595"}})]),t._v(" "),s("p",[t._v("场景: 并发过高，-- 降级 熔断 返回错误信息 -- 尝试重连，访问量没那么高（承受的住） 恢复")])])}),[],!1,null,null,null);s.default=n.exports},578:function(t,s,r){t.exports=r.p+"assets/img/20211229001517.fa11a2d8.png"}}]);