(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1101:function(t,r,e){"use strict";e.r(r);var n=e(14),a=Object(n.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_60-hystrix之服务熔断案例-下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_60-hystrix之服务熔断案例-下"}},[t._v("#")]),t._v(" 60_Hystrix之服务熔断案例(下)")]),t._v(" "),r("p",[t._v("服务侧  cloud-provider-hygtrix-payment8001  -- 8001 PaymentController")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('    //====服务熔断\n    @GetMapping("/payment/circuit/{id}")\n    public String paymentCircuitBreaker(@PathVariable("id") Integer id)\n    {\n        String result = paymentService.paymentCircuitBreaker(id);\n        log.info("****result: "+result);\n        return result;\n    }\n')])])]),r("p",[t._v("测试")]),t._v(" "),r("p",[t._v("自测cloud-provider-hystrix-payment8001")]),t._v(" "),r("p",[t._v("正确 - http://localhost:8001/payment/circuit/1")]),t._v(" "),r("p",[t._v("错误 - http://localhost:8001/payment/circuit/-1")]),t._v(" "),r("p",[t._v("多次错误，再来次正确，但显示 "),r("strong",[t._v("错误信息")]),t._v(" --此时发生熔断，再次刷新后恢复 说明成功重启")])])}),[],!1,null,null,null);r.default=a.exports}}]);