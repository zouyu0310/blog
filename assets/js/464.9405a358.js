(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1122:function(t,s,v){"use strict";v.r(s);var _=v(14),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是幂等性-indempotent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是幂等性-indempotent"}},[t._v("#")]),t._v(" 什么是幂等性（Indempotent）")]),t._v(" "),s("p",[t._v("幂等性（"),s("code",[t._v("Indempotent")]),t._v("）是数学中的一个概念。")]),t._v(" "),s("p",[s("strong",[t._v("对于接口而言，以相同的参数调用这个接口一次和多次时，对系统产生的影响是相同的，那么我们就认为这个接口是一个幂等接口。")])]),t._v(" "),s("h2",{attrs:{id:"为什么需要幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要幂等性"}},[t._v("#")]),t._v(" 为什么需要幂等性")]),t._v(" "),s("p",[t._v("并不是所有接口都需要保证幂等性。以相同的请求调用这个接口一次或多次，需要给调用方返回一致的结果时，就要考虑将这个接口设计成幂等接口。")]),t._v(" "),s("h3",{attrs:{id:"什么情况下会产生接口幂等性问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下会产生接口幂等性问题"}},[t._v("#")]),t._v(" 什么情况下会产生接口幂等性问题")]),t._v(" "),s("ul",[s("li",[t._v("网络波动，可能会引起重复请求")]),t._v(" "),s("li",[t._v("用户重复操作，用户在操作时候可能会无意触发多次下单交易，甚至没有响应而有意触发多次交易应用")]),t._v(" "),s("li",[t._v("使用了失效或超时重试机制（Nginx重试、RPC重试或业务层重试等）")]),t._v(" "),s("li",[t._v("页面重复刷新")]),t._v(" "),s("li",[t._v("使用浏览器后退按钮重复之前的操作，导致重复提交表单")]),t._v(" "),s("li",[t._v("使用浏览器历史记录重复提交表单")]),t._v(" "),s("li",[t._v("浏览器重复的HTTP请求")]),t._v(" "),s("li",[t._v("定时任务重复执行")]),t._v(" "),s("li",[t._v("用户双击提交按钮")])]),t._v(" "),s("h3",{attrs:{id:"幂等的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#幂等的使用场景"}},[t._v("#")]),t._v(" 幂等的使用场景")]),t._v(" "),s("ol",[s("li",[t._v("微信领红包接口：对于一个红包，领一次和领多次具有一样的效果，故该场景下领红包接口需保证幂等性。")]),t._v(" "),s("li",[t._v("订单创建接口：在创建订单时，第一次调用返回超时了，重试机制一般会再次调用这个接口。此时我们不能因为这个接口被调了两次，就创建两个一样的订单；因此需保证幂等性。")]),t._v(" "),s("li",[t._v("库存扣减接口")]),t._v(" "),s("li",[t._v("支付接口")])]),t._v(" "),s("h2",{attrs:{id:"如何保证幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何保证幂等性"}},[t._v("#")]),t._v(" 如何保证幂等性")]),t._v(" "),s("h3",{attrs:{id:"前端设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端设计"}},[t._v("#")]),t._v(" 前端设计")]),t._v(" "),s("p",[t._v("从前端设计角度考虑，是通过防止重复提交来保证幂等性（但无法完全保证）。")]),t._v(" "),s("p",[t._v("防止重复提交更多的是不让用户发起多次一样的请求。比如用户在线购物下单时点了提交订单按钮，但是由于网络原因响应很慢，此时用户比较心急，多次点击了订单提交按钮。这种情况下就可能会造成多次下单。")]),t._v(" "),s("p",[t._v("一般防止重复提交的方案有将订单按钮置灰，跳转到结果页等。主要还是从客户端的角度来解决重复提交的问题。")]),t._v(" "),s("p",[t._v("幂等更多的是在重复请求已经发生，或是无法避免的情况下，采取一定的技术手段让这些重复请求不给系统带来副作用。")]),t._v(" "),s("h4",{attrs:{id:"_1-按钮只能点击一次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-按钮只能点击一次"}},[t._v("#")]),t._v(" 1.按钮只能点击一次")]),t._v(" "),s("p",[t._v("用户点击按钮后，将按钮置灰，或者显示loading状态。")]),t._v(" "),s("h4",{attrs:{id:"_2-页面重定向-prg模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面重定向-prg模式"}},[t._v("#")]),t._v(" 2.页面重定向-PRG模式")]),t._v(" "),s("p",[t._v("PRG模式，即 "),s("code",[t._v("Post-Redirect-Get")]),t._v("，当客户提交表单后，去执行一个客户端的重定向，跳转到提交成功页面，避免用户按F5刷新导致的重复提交，也能消除按浏览器后退键导致的重复提交问题。目前绝大多数公司都是这么做的，如淘宝，京东等。")]),t._v(" "),s("h3",{attrs:{id:"后端设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端设计"}},[t._v("#")]),t._v(" 后端设计")]),t._v(" "),s("h4",{attrs:{id:"_1-来源-序列号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-来源-序列号"}},[t._v("#")]),t._v(" 1.来源+序列号")]),t._v(" "),s("p",[t._v("这是一种比较好理解的通用的方案。")]),t._v(" "),s("p",[t._v("当调用接口时，参数中必须传入来源 "),s("code",[t._v("source")]),t._v(" 字段和序列号 "),s("code",[t._v("seq")]),t._v(" 字段（实际项目中可用其他唯一标识字段代替，如序列号 "),s("code",[t._v("uuid")]),t._v(" 等），服务端接收到请求，先判断自己是否是一个幂等接口，如果不是幂等接口就正常处理请求。")]),t._v(" "),s("p",[t._v("如果是一个幂等接口，就将 "),s("code",[t._v("source")]),t._v(" 和 "),s("code",[t._v("seq")]),t._v(" 组成联合主键，去数据库表或 Redis 中查询。如果没有查询到，说明没处理过这个请求，然后正常处理请求就行了。处理完之后将处理结果和 "),s("code",[t._v("source")]),t._v(" 和 "),s("code",[t._v("seq")]),t._v(" 信息一起存入数据库或 Redis 中。")]),t._v(" "),s("p",[t._v("如果根据 "),s("code",[t._v("source")]),t._v(" 和 "),s("code",[t._v("seq")]),t._v(" 能查询到，说明已经处理过这个请求了，直接将处理的结果返回即可。")]),t._v(" "),s("p",[t._v("这种方案非常简单，而且易于理解，比较通用。但是如果请求量很大的话，存放请求记录的表会很大，这个时候可以将一段时间之前的记录删除，以提升性能。")]),t._v(" "),s("h4",{attrs:{id:"_2-唯一索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-唯一索引"}},[t._v("#")]),t._v(" 2.唯一索引")]),t._v(" "),s("p",[t._v("此方案适合用于执行新增（"),s("code",[t._v("create")]),t._v("）操作的接口。")]),t._v(" "),s("p",[t._v("对业务唯一的字段加上唯一索引，这样当数据重复时，插入数据会抛出异常。")]),t._v(" "),s("p",[t._v("比如新增用户接口，我们将用户表中的身份证字段加上唯一索引。当同一个请求调用两次时，我们可以先 "),s("code",[t._v("select")]),t._v(" 后 "),s("code",[t._v("insert")]),t._v("。先根据身份证字段查询下用户是否存在，不存在的话再新增。存在的话就返回新增失败，或者直接新增也行，数据库会抛异常，我们对异常处理返回前台就行了。")]),t._v(" "),s("blockquote",[s("p",[t._v("大家可能会有一个疑问，我同一个请求调用两次，第一返回新增成功，第二次返回失败，返回的结果不同啊。这个接口还是幂等接口吗？")]),t._v(" "),s("p",[t._v("此处，重申下概念，幂等强调的是接口一次调用和多次调用产生的效果是一样的。这边调用一次和调用多次都是新增了一个对象，所以还是满足幂等的。")])]),t._v(" "),s("p",[s("strong",[t._v("在分布式系统中，生成唯一索引，或更进一步的，生成全局唯一ID，一般有如下 4 种方案")])]),t._v(" "),s("ol",[s("li",[t._v("数据库自增主键")]),t._v(" "),s("li",[t._v("UUID")]),t._v(" "),s("li",[t._v("Redis")]),t._v(" "),s("li",[t._v("Twitter-Snowflake 算法")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方案")]),t._v(" "),s("th",[t._v("顺序性")]),t._v(" "),s("th",[t._v("重复性")]),t._v(" "),s("th",[t._v("存在的问题")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数据库自增主键")]),t._v(" "),s("td",[t._v("递增")]),t._v(" "),s("td",[t._v("不会重复")]),t._v(" "),s("td",[t._v("数据库宕机不可用")])]),t._v(" "),s("tr",[s("td",[t._v("UUID")]),t._v(" "),s("td",[t._v("无序列")]),t._v(" "),s("td",[t._v("通过多位随机字符串做到极低的重复概率，但理论上会出现重复")]),t._v(" "),s("td",[t._v("一直可用")])]),t._v(" "),s("tr",[s("td",[t._v("Redis")]),t._v(" "),s("td",[t._v("递增")]),t._v(" "),s("td",[t._v("RDB持久化模式下，会出现重复")]),t._v(" "),s("td",[t._v("Redis宕机不可用")])]),t._v(" "),s("tr",[s("td",[t._v("Snowflake 算法")]),t._v(" "),s("td",[t._v("递增")]),t._v(" "),s("td",[t._v("不会重复")]),t._v(" "),s("td",[t._v("时钟回拨")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-乐观锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-乐观锁"}},[t._v("#")]),t._v(" 3. 乐观锁")]),t._v(" "),s("p",[t._v("此方案适用于执行更新（"),s("code",[t._v("update")]),t._v("）操作的接口。")]),t._v(" "),s("p",[t._v("乐观锁只是在更新数据那一刻锁表，其他时间不锁表，所以相对于悲观锁，效率更高。 我们一般通过数据库来实现乐观锁，比较通用的做法是增加一个时间戳（"),s("code",[t._v("timestamp")]),t._v("）或版本号（"),s("code",[t._v("version")]),t._v("）字段。")]),t._v(" "),s("p",[t._v("此处以版本号（"),s("code",[t._v("version")]),t._v("）为例进行说明。")]),t._v(" "),s("ol",[s("li",[t._v("先根据标识信息（如用户ID）查询用户信息，获取当前 version 信息")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("version "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",[s("li",[t._v("如果数据存在，假设此次查询结果 "),s("code",[t._v("version = 1")]),t._v("，再使用 "),s("code",[t._v("version")]),t._v(" 和 "),s("code",[t._v("id")]),t._v(" 字段作为查询条件去执行更新操作")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- version是第一步查询到的值，此处假设为1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])]),s("ol",[s("li",[t._v("根据 "),s("code",[t._v("update")]),t._v(" 更新操作影响的行数是否大于0，来判断此次更新操作是否成功")]),t._v(" "),s("li",[t._v("第1次请求 "),s("code",[t._v("version = 1")]),t._v(" 是可以成功的，操作成功后 "),s("code",[t._v("version")]),t._v(" 变成 2 了。这时如果并发的请求过来，再执行相同的SQL")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",[s("li",[t._v("该 "),s("code",[t._v("update")]),t._v(" 操作不会真正更新数据，最终 SQL 执行结果影响行数是0。")])]),t._v(" "),s("h4",{attrs:{id:"_4-状态机控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-状态机控制"}},[t._v("#")]),t._v(" 4. 状态机控制")]),t._v(" "),s("p",[t._v("此方法适合在有状态机流转的情况下。")]),t._v(" "),s("p",[t._v("比如订单业务系统中，订单的状态有待支付，支付中，支付成功，支付失败。设计时最好只支持状态的单向改变，比如待支付一定在支付中的前面，这样在更新的时候就可以加上对当前订单状态的限定条件。例如想把订单状态更新为支付成功，则之前的订单状态必须为支付中。")]),t._v(" "),s("p",[t._v("代码实现中，对于状态字段，可以使用 "),s("code",[t._v("int")]),t._v(" 类型，并且通过值的大小来做幂等。比如待支付订单为0，支付中为1，支付成功为100。在做状态机更新时，我们就可以这样控制")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{status} where id = #{id} and status < #{status}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_5-分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-分布式锁"}},[t._v("#")]),t._v(" 5. 分布式锁")]),t._v(" "),s("p",[t._v("执行方法时。现根据业务唯一ID获取分布式锁。若获取成功则执行；若获取锁不成功则不执行。分布式锁可以基于Redis，Zookeeper，MySQL来实现。")]),t._v(" "),s("p",[t._v("此处以Redis分布式锁在订单业务中的应用为例进行说明")]),t._v(" "),s("ol",[s("li",[t._v("用户通过浏览器发起请求，服务端生成订单号 "),s("code",[t._v("code")]),t._v(" 作为唯一业务字段。")]),t._v(" "),s("li",[t._v("使用 Redis 的 "),s("code",[t._v("set")]),t._v(" 命令，将该订单 "),s("code",[t._v("code")]),t._v(" 设置到 Redis 中，同时设置超时时间。")]),t._v(" "),s("li",[t._v("判断是否设置成功，如果设置成功，说明是第一次请求，则进行后续数据操作。")]),t._v(" "),s("li",[t._v("如果设置失败，说明是重复请求，则直接返回成功。")])]),t._v(" "),s("p",[t._v("需要注意的是，分布式锁一定要设置一个合理的过期时间，如果设置过短，无法有效的防止重复请求。如果设置过长，可能会浪费 Redis 的存储空间，需要根据实际业务情况而定。")]),t._v(" "),s("h4",{attrs:{id:"_6-去重表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-去重表"}},[t._v("#")]),t._v(" 6.去重表")]),t._v(" "),s("p",[t._v("此方法适用于在业务中有唯一标识的插入场景中，比如在支付业务中，若一个订单只会支付一次，则订单ID可以作为唯一标识。")]),t._v(" "),s("p",[t._v("创建一张去重表，将业务唯一ID作为唯一索引，如订单号。当想针对订单做一系列操作时，先向去重表中插入一条记录，若插入成功，执行后续操作；若插入失败，数据库会抛出唯一约束异常，不执行后续操作。")]),t._v(" "),s("p",[t._v("去重表本质上可以看成基于 MySQL实现的分布式锁。")]),t._v(" "),s("h4",{attrs:{id:"_7-token机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-token机制"}},[t._v("#")]),t._v(" 7.token机制")]),t._v(" "),s("p",[t._v("此种方案需要两次请求才能完成一次业务操作（增加了性能损耗和负载）")]),t._v(" "),s("ol",[s("li",[t._v("第一次请求获取token")]),t._v(" "),s("li",[t._v("第二次请求带着这个token，完成业务操作。")])]),t._v(" "),s("p",[t._v("具体步骤如下")]),t._v(" "),s("ol",[s("li",[t._v("用户访问页面时，浏览器自动发起获取token请求。")]),t._v(" "),s("li",[t._v("服务端生成token，保存到redis中，然后返回给浏览器。")]),t._v(" "),s("li",[t._v("用户第2次通过浏览器发起请求时，携带该token。")]),t._v(" "),s("li",[t._v("在redis中查询该token是否存在，如果存在表示是第一次请求，做则后续的数据操作，并删除token。")]),t._v(" "),s("li",[t._v("如果不存在，说明是重复请求，则直接返回成功。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);