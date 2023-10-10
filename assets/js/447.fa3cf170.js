(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1096:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_54-hystrix之服务降级支付侧fallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_54-hystrix之服务降级支付侧fallback"}},[t._v("#")]),t._v(" 54_Hystrix之服务降级支付侧fallback")]),t._v(" "),a("p",[t._v("降级配置 - @HystrixCommand")]),t._v(" "),a("p",[t._v("8001先从自身找问题")]),t._v(" "),a("p",[t._v("设置自身调用超时时间的峰值，峰值内可以正常运行，超过了需要有兜底的方法处埋，作服务降级fallback。")]),t._v(" "),a("p",[t._v("8001fallback")]),t._v(" "),a("p",[t._v("业务类启用 - @HystrixCommand报异常后如何处理")]),t._v(" "),a("p",[t._v("—旦调用服务方法失败并抛出了错误信息后，会自动调用@HystrixCommand标注好的fallbackMethod调用类中的指定方法")]),t._v(" "),a("p",[t._v("主启动")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@SpringBootApplication\n@EnableEurekaClient\n@EnableCircuitBreaker //服务降级, 激活!\npublic class PaymentHystrixMain8001 {\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentHystrixMain8001.class, args);\n    }\n}\n")])])]),a("p",[t._v("service")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HystrixCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fallbackMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paymentInfo_TimeOutHandler"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("commandProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HystrixProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution.isolation.thread.timeoutInMilliseconds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//说明: 如果程序报错会自动走 paymentInfo_TimeOutHandler 方法,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commandProperties 后面配置的 name为 这个线程 ,不超过3s 为正常")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentInfo_TimeOut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" timeNunber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//睡3s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*        try {\n\n            //TimeUnit.SECONDS.sleep(timeNunber);\n            TimeUnit.MILLISECONDS.sleep(3000);\n        }catch (InterruptedException e){\n            e.printStackTrace();\n        }*/")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算错误,直接报错,也采用下面兜底方法")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"线程池:  "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  paymentInfo_TimeOut,id: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"O(∩_∩)O哈哈~"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentInfo_TimeOutHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"线程池:  "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('",报错了!!!我是兜底方法  paymentInfo_TimeOutHandler,id: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o(╥﹏╥)o"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述有两个报错,")]),t._v(" "),a("ol",[a("li",[t._v("睡3s")]),t._v(" "),a("li",[t._v("计算失误问题")])]),t._v(" "),a("p",[t._v("都可以采用下方兜底方法!")]),t._v(" "),a("p",[t._v("当前服务不可用了，做服务降级，兜底的方案都是paymentInfo_TimeOutHandler")])])}),[],!1,null,null,null);a.default=e.exports}}]);