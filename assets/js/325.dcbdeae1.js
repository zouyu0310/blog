(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{952:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、restful风格api的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、restful风格api的好处"}},[t._v("#")]),t._v(" 一、RESTful风格API的好处")]),t._v(" "),a("p",[t._v("API（Application Programming Interface），顾名思义：是一组编程接口规范，客户端与服务端通过请求响应进行数据通信。REST（Representational State Transfer）决定了接口的形式与规则。"),a("strong",[t._v("RESTful是基于http方法的API设计风格，而不是一种新的技术.")])]),t._v(" "),a("ol",[a("li",[t._v("看Url就知道要什么资源")]),t._v(" "),a("li",[t._v("看http method就知道针对资源干什么")]),t._v(" "),a("li",[t._v("看http status code就知道结果如何")])]),t._v(" "),a("p",[t._v("对接口开发提供了一种可以广泛适用的规范，为前端后端交互减少了接口交流的口舌成本，是"),a("strong",[t._v("约定大于配置")]),t._v("的体现。通过下面的设计，大家来理解一下这三句话。")]),t._v(" "),a("blockquote",[a("p",[t._v("当然也不是所有的接口，都能用REST的形式来表述。在实际工作中，灵活运用，我们用RESTful风格的目的是为大家提供统一标准，避免不必要的沟通成本的浪费，形成一种通用的风格。就好比大家都知道：伸出大拇指表示“你很棒“的意思，绝大部分人都明白，因为你了解了这种风格习惯。但是不排除有些地区伸出大拇指表示其他意思，就不适合使用！")])]),t._v(" "),a("h1",{attrs:{id:"二、restful-api的设计风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、restful-api的设计风格"}},[t._v("#")]),t._v(" 二、RESTful API的设计风格")]),t._v(" "),a("h2",{attrs:{id:"_2-1、rest-是面向资源的-名词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、rest-是面向资源的-名词"}},[t._v("#")]),t._v(" 2.1、REST 是面向资源的（名词）")]),t._v(" "),a("p",[t._v("REST 通过 URI 暴露资源时，会强调不要在 URI 中出现动词。比如：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("不符合REST的接口URI")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("符合REST接口URI")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/getDogs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/dogs/{id}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取一个小狗狗")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/getDogs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/dogs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取所有小狗狗")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/addDogs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("POST /api/dogs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("添加一个小狗狗")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/editDogs/{id}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("PUT /api/dogs/{id}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改一个小狗狗")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GET /api/deleteDogs/{id}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE /api/dogs/{id}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除一个小狗狗")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-2、用http方法体现对资源的操作-动词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、用http方法体现对资源的操作-动词"}},[t._v("#")]),t._v(" 2.2、用HTTP方法体现对资源的操作（动词）")]),t._v(" "),a("ul",[a("li",[t._v("GET ： 获取、读取资源")]),t._v(" "),a("li",[t._v("POST ： 添加资源")]),t._v(" "),a("li",[t._v("PUT ： 修改资源")]),t._v(" "),a("li",[t._v("DELETE ： 删除资源")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img//20200416130005.png",alt:""}})]),t._v(" "),a("p",[t._v("实际上，这四个动词实际上就对应着增删改查四个操作，这就利用了HTTP动词来表示对资源的操作。")]),t._v(" "),a("h2",{attrs:{id:"_2-3-http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-http状态码"}},[t._v("#")]),t._v(" 2.3. HTTP状态码")]),t._v(" "),a("p",[t._v("通过HTTP状态码体现动作的结果,不要自定义")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("200 OK \n400 Bad Request \n500 Internal Server Error\n")])])]),a("p",[t._v("在 APP 与 API 的交互当中，其结果逃不出这三种状态：")]),t._v(" "),a("ul",[a("li",[t._v("所有事情都按预期正确执行完毕 - 成功")]),t._v(" "),a("li",[t._v("APP 发生了一些错误 – 客户端错误（如：校验用户输入身份证，结果输入的是军官证，就是客户端输入错误）")]),t._v(" "),a("li",[t._v("API 发生了一些错误 – 服务器端错误（各种编码bug或服务内部自己导致的异常）")])]),t._v(" "),a("p",[t._v("这三种状态与上面的状态码是一一对应的。如果你觉得这三种状态，分类处理结果太宽泛，http-status code还有很多。建议还是要遵循KISS(Keep It Stupid and Simple)原则，上面的三种状态码完全可以覆盖99%以上的场景。这三个状态码大家都记得住，而且非常常用，多了就不一定了。")]),t._v(" "),a("h2",{attrs:{id:"_2-4-get方法和查询参数不应该改变数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-get方法和查询参数不应该改变数据"}},[t._v("#")]),t._v(" 2.4. Get方法和查询参数不应该改变数据")]),t._v(" "),a("p",[t._v("改变数据的事交给POST、PUT、DELETE")]),t._v(" "),a("h2",{attrs:{id:"_2-5-使用复数名词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-使用复数名词"}},[t._v("#")]),t._v(" 2.5. 使用复数名词")]),t._v(" "),a("p",[t._v("/dogs 而不是 /dog")]),t._v(" "),a("h2",{attrs:{id:"_2-6-复杂资源关系的表达"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-复杂资源关系的表达"}},[t._v("#")]),t._v(" 2.6. 复杂资源关系的表达")]),t._v(" "),a("p",[t._v("GET /cars/711/drivers/ 返回 使用过编号711汽车的所有司机\nGET /cars/711/drivers/4 返回 使用过编号711汽车的4号司机")]),t._v(" "),a("h2",{attrs:{id:"_2-7-高级用法-hateoas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-高级用法-hateoas"}},[t._v("#")]),t._v(" 2.7. 高级用法:HATEOAS")]),t._v(" "),a("p",[a("strong",[t._v("HATEOAS")]),t._v(":Hypermedia as the Engine of Application State 超媒体作为应用状态的引擎。\nRESTful API最好做到HATEOAS，"),a("strong",[t._v("即返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么")]),t._v("。比如，当用户向api.example.com的根目录发出请求，会得到这样一个文档。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"collection https://www.example.com/zoos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.example.com/zoos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"List of zoos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/vnd.yourformat+json"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面代码表示，文档中有一个link属性，用户读取这个属性就知道下一步该调用什么API或者可以调用什么API了。")]),t._v(" "),a("h2",{attrs:{id:"_2-8-资源过滤、排序、选择和分页的表述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-资源过滤、排序、选择和分页的表述"}},[t._v("#")]),t._v(" 2.8. 资源"),a("strong",[t._v("过滤、排序、选择和分页")]),t._v("的表述")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img//20200416131439.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-9-版本化你的api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-版本化你的api"}},[t._v("#")]),t._v(" 2.9. 版本化你的API")]),t._v(" "),a("p",[t._v("强制性增加API版本声明，不要发布无版本的API。如：/api/v1/blog")]),t._v(" "),a("p",[a("strong",[t._v("面向扩展开放，面向修改关闭")]),t._v("：也就是说一个版本的接口开发完成测试上线之后，我们一般不会对接口进行修改，如果有新的需求就开发新的接口进行功能扩展。这样做的目的是：当你的新接口上线后，不会影响使用老接口的用户。如果新接口目的是替换老接口，也不要在v1版本原接口上修改，而是开发v2版本接口，并声明v1接口废弃！")])])}),[],!1,null,null,null);a.default=r.exports}}]);