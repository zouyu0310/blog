(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{974:function(t,a,e){"use strict";e.r(a);var l=e(14),_=Object(l.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、事务的具体定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、事务的具体定义"}},[t._v("#")]),t._v(" 一、事务的具体定义")]),t._v(" "),a("p",[t._v("事务提供一种机制将一个活动涉及的所有操作纳入到一个不可分割的执行单元，组成事务的所有操作只有在所有操作均能正常执行的情况下方能提交，只要其中任一操作执行失败，都将导致整个事务的回滚。\n简单地说，事务提供一种“要么什么都不做，要么做全套（All or Nothing）”机制。ACID就不说了，ACID就是对这句话的一个解释。")]),t._v(" "),a("h1",{attrs:{id:"二、并发环境下的数据库事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、并发环境下的数据库事务"}},[t._v("#")]),t._v(" 二、并发环境下的数据库事务")]),t._v(" "),a("h2",{attrs:{id:"_2-1-事务并发执行会出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-事务并发执行会出现的问题"}},[t._v("#")]),t._v(" 2.1 事务并发执行会出现的问题")]),t._v(" "),a("p",[t._v("我们先来看一下事务并发，数据库可能会出现的问题：")]),t._v(" "),a("ul",[a("li",[t._v("更新丢失（问题严重）\n当有两个并发执行的事务，更新同一行数据，那么有可能一个操作会把另一个操作的更新覆盖掉。")]),t._v(" "),a("li",[t._v("脏读 （问题严重）\n一个事务读到另一个尚未提交的事务中的数据，即读到了事务的处理过程中的数据，而不是结果数据。 该数据可能会被回滚从而失效。 如果第一个事务拿着失效的数据去处理那就发生错误了。")]),t._v(" "),a("li",[t._v("不可重复读 （一般来说可以接受）\n不可重复读的含义：一个事务对同一行数据读了两次，却得到了不同的结果。它具体分为如下两种情况：\n虚读：在事务1两次读取同一记录的过程中，事务2对该记录进行了修改，从而事务1第二次读到了不一样的记录。\n幻读：事务1在两次查询的过程中，事务2对该表进行了插入、删除操作，从而事务1第二次查询的结果数量发生了变化。")])]),t._v(" "),a("blockquote",[a("p",[t._v("不可重复读 与 脏读 的区别？\n脏读读到的是尚未提交的数据，而不可重复读读到的是已经提交的数据，只不过在两次读的过程中数据被另一个事务改过了。")])]),t._v(" "),a("h2",{attrs:{id:"_2-2-如何解决并发过程中事务问题-事务隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-如何解决并发过程中事务问题-事务隔离"}},[t._v("#")]),t._v(" 2.2 如何解决并发过程中事务问题（事务隔离）")]),t._v(" "),a("p",[t._v("数据库一共有如下四种隔离级别：")]),t._v(" "),a("ul",[a("li",[t._v("Read uncommitted 读未提交\n在该级别下，一个事务对一行数据修改的过程中，不允许另一个事务对该行数据进行修改，但允许另一个事务对该行数据读。\n因此本级别下，不会出现更新丢失，但会出现脏读、不可重复读。")]),t._v(" "),a("li",[t._v("Read committed 读提交 （oracle、sqlserver默认的隔离级别）\n在该级别下，未提交的写事务不允许其他事务访问该行，因此"),a("strong",[t._v("不会出现脏读")]),t._v("；但是读取数据的事务允许其他事务的访问该行数据，因此会出现不可重复读的情况。")]),t._v(" "),a("li",[t._v("Repeatable read 重复读 （mysql的默认隔离级别）\n简单说就是：一个事务开始读或写数据时，不允许其他事务对该数据进行修改。在该级别下，读事务禁止写事务，但允许读事务，因此不会出现同一事务两次读到不同的数据的情况（不可重复读），且写事务禁止其他一切事务。"),a("strong",[t._v("这个级别无法解决幻读问题")]),t._v("。")]),t._v(" "),a("li",[t._v("Serializable 序列化\n该级别要求所有事务都必须串行执行，因此能避免一切因并发引起的问题，但效率很低。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200425125418.png",alt:""}}),t._v("\n隔离级别越高，越能保证数据的完整性和一致性，但是对并发性能的影响也越大。对于多数应用程序，可以优先考虑把数据库系统的隔离级别设为Read Committed。它能够避免脏读取，而且具有较好的并发性能。尽管它会导致不可重复读、幻读这些并发问题，应该由应用程序员采用悲观锁或乐观锁来控制。")])]),t._v(" "),a("h1",{attrs:{id:"三、事务传播行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、事务传播行为"}},[t._v("#")]),t._v(" 三、事务传播行为")]),t._v(" "),a("h3",{attrs:{id:"举例说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例说明"}},[t._v("#")]),t._v(" 举例说明")]),t._v(" "),a("p",[t._v("事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。")]),t._v(" "),a("p",[t._v("用伪代码说明：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ServiceA {\n           \n         void methodA() {\n             ServiceB.methodB();\n         }\n\n}\n      \nServiceB {\n           \n         void methodB() {\n         }\n           \n}\n")])])]),a("p",[t._v("代码中"),a("code",[t._v("methodA()")]),t._v("方法嵌套调用了"),a("code",[t._v("methodB()")]),t._v("方法，"),a("code",[t._v("methodB()")]),t._v("的事务传播行为由"),a("code",[t._v("@Transaction(Propagation=XXX)")]),t._v("设置决定。")]),t._v(" "),a("h3",{attrs:{id:"spring中七种事务传播行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring中七种事务传播行为"}},[t._v("#")]),t._v(" Spring中七种事务传播行为")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事务传播行为类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_REQUIRED")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中。这是最常见的选择。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_SUPPORTS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("支持当前事务，如果当前没有事务，就以非事务方式执行。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_MANDATORY")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用当前的事务，如果当前没有事务，就抛出异常。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_REQUIRES_NEW")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新建事务，如果当前存在事务，把当前事务挂起。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_NOT_SUPPORTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_NEVER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以非事务方式执行，如果当前存在事务，则抛出异常。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PROPAGATION_NESTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与PROPAGATION_REQUIRED类似的操作。")])])])]),t._v(" "),a("p",[t._v("定义非常简单，也很好理解，下面我们就进入代码测试部分，验证我们的理解是否正确。")]),t._v(" "),a("h1",{attrs:{id:"四、-transactional-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、-transactional-注解"}},[t._v("#")]),t._v(" 四、@Transactional 注解")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当在配置文件中有多个 TransactionManager , 可以用该属性指定选择哪个事务管理器。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("propagation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事务的传播行为，默认值为 REQUIRED。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("isolation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事务的隔离度，默认值采用 DEFAULT。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事务的超时时间，默认值为-1。如果超过该时间限制但事务还没有完成，则自动回滚事务。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("read-only")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定事务是否为只读事务，默认值为 false；为了忽略那些不需要事务的方法，比如读取数据，可以设置 read-only 为 true。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rollback-for")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于指定能够触发事务回滚的异常类型，如果有多个异常类型需要指定，各类型之间可以通过逗号分隔。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("no-rollback- for")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("抛出 no-rollback-for 指定的异常类型，不回滚事务。")])])])]),t._v(" "),a("h1",{attrs:{id:"五、spring事务的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、spring事务的实现"}},[t._v("#")]),t._v(" 五、spring事务的实现")]),t._v(" "),a("p",[t._v("spring事务本质上是依赖于数据库事务\n"),a("img",{attrs:{src:"https://box.kancloud.cn/83b7902520146de4b8468a6c12210d56_955x538.png",alt:"img"}}),t._v("\nSpring事务本质上是依赖于第三方的实现\n"),a("img",{attrs:{src:"https://box.kancloud.cn/312679a3bf90c280b9f4fed1f77a8e37_640x369.png",alt:"img"}})]),t._v(" "),a("h1",{attrs:{id:"六、分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、分布式事务"}},[t._v("#")]),t._v(" 六、分布式事务")]),t._v(" "),a("p",[t._v("笔者自己将分布式事务分为两种：跨服务的分布式事务，跨库的分布式事务。")]),t._v(" "),a("ol",[a("li",[t._v("跨库的分布式事务：我在做一个服务A的时候，需要同时操作两个数据库。我们之前给大家讲的例子都是这一种，实际上总的思路就是有一个对象统一管理多个事务的提交与回滚。这种分布式事务还是在数据库层面去解决的。")])]),t._v(" "),a("blockquote",[a("p",[t._v("为了大家方便理解：我以小故事给大家简单讲一下两段式提交：假如我在外地出差到了妇女节分别用给老婆和妈邮寄了礼物，我希望他们两个都收到礼物并拥有礼物。首先我用快递把礼物邮到家里，这是一段提交。老婆和妈告诉我：收到了收到了，谢谢！才发现包装盒带密码，她们没法看礼物。然后我给老婆和妈打电话，告诉他们密码，他们就可以看了。大家有问题：1.一阶段没问题有响应才到第二阶段，二阶段礼物到家之后，老婆电话停机怎么办？只给妈妈打了电话,没给老婆打。笔者说：这种问题是所有分布式事务解决方案都要面对的问题（面对网络与宕机问题任何分布式事务都会失效），这个不是两段式提交自己的问题。那么就没办法了么？有，网络超时就有异常，有异常就回滚，告诉妈妈这个礼物有问题要退回。2.给妈打完电话之后我的电话停机了怎么办？就是补偿方案，我记得这个电话没打给老婆，等电话充费后再打，进而达到最终一致性，重点是我要记得。在这个例子中，我就是一个事务管理器，而老婆和妈就是资源管理器，资源管理器是在数据库的组件，而事务管理器通常是应用组件。而不同的数据库对两段式提交的支持是不同的，也就是资源管理器不同。参考:"),a("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/79769043",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 分布式事务之——MySQL对XA事务的支持"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200425130122.png",alt:""}})]),t._v(" "),a("ol",[a("li",[t._v("跨服务分布式事务: 也就是说我在做一个服务A的时候，需要通过网络调用多个其他服务，有可能第一个服务B成功了，第二个服务C执行失败了。这种分布式单纯的依靠数据库层面就很难解决了，一般都是通过最终一致性的方式解决。比如：通过MQ，给服务B发消息，服务B执行，然后真的做持久化操作数据入库了。给服务C发消息，服务C执行失败，这个消息就会存在MQ里面，依照一定的策略还会发给服务C，直到服务C成功为止。这样保障最终一致。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);