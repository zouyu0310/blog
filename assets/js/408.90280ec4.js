(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1035:function(t,v,s){"use strict";s.r(v);var _=s(14),i=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"一、为什么使用消息队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么使用消息队列"}},[t._v("#")]),t._v(" 一、为什么使用消息队列")]),t._v(" "),v("p",[v("strong",[t._v("看完下面这个故事，相信你能理解消息队列的作用与好处:")]),t._v("\n转载自知乎：https://www.zhihu.com/question/34243607")]),t._v(" "),v("p",[t._v("小红是小明的姐姐。小红希望小明多读书，常寻找好书给小明看，之前的方式是这样：小红问小明什么时候有空，把书给小明送去，并亲眼监督小明读完书才走。久而久之，两人都觉得麻烦。后来的方式改成了：小红对小明说「我放到书架上的书你都要看」，然后小红每次发现不错的书都放到书架上，小明则看到书架上有书就拿下来看。")]),t._v(" "),v("p",[v("strong",[t._v("书架就是一个消息队列，小红是生产者，小明是消费者。")])]),t._v(" "),v("h3",{attrs:{id:"这带来的好处有"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#这带来的好处有"}},[t._v("#")]),t._v(" 这带来的好处有")]),t._v(" "),v("ol",[v("li",[t._v("小红想给小明书的时候，不必问小明什么时候有空，亲手把书交给他了，小红只把书放到书架上就行了。这样小红小明的时间都更自由。这个实际上就是消息队列的好处之一：解耦，降低了应用之间的耦合度。")]),t._v(" "),v("li",[t._v("小红相信小明的读书自觉和读书能力，不必亲眼观察小明的读书过程，小红只要做一个放书的动作，很节省时间。消息队列好处之异步操作，并行处理。小红作为数据生产者应用业务处理的的效率提高，他不用等待消费者的反馈，就可以去处理其他事情。")]),t._v(" "),v("li",[t._v("当明天有另一个爱读书的小伙伴小强加入，小红仍旧只需要把书放到书架上，小明和小强从书架上取书即可。消息队列好处之易于扩展，一个人看不完的书多人看，一个人干不完的事多个人干。")]),t._v(" "),v("li",[t._v("书架上的书放在那里，小明阅读速度快就早点看完，阅读速度慢就晚点看完，没关系，比起小红把书递给小明并监督小明读完的方式，小明的压力会小一些。这就好比应用压力非常大的时候，消息队列起一个缓冲与持久化的作用，降低后端数据库等操作的压力。数据库快就快做，数据库处理慢就慢点做。不要一下把压力都交给数据库，会卡死。")])]),t._v(" "),v("h3",{attrs:{id:"消息队列使用成本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息队列使用成本"}},[t._v("#")]),t._v(" 消息队列使用成本")]),t._v(" "),v("ol",[v("li",[t._v("引入复杂度\n毫无疑问，「书架」这东西是多出来的，需要地方放它，还需要防盗。")]),t._v(" "),v("li",[t._v("暂时的不一致性\n假如妈妈问小红「小明最近读了什么书」，在以前的方式里，小红因为亲眼监督小明读完书了，可以底气十足地告诉妈妈，但新的方式里，小红回答妈妈之后会心想「小明应该会很快看完吧……」")])]),t._v(" "),v("p",[t._v("这中间存在着一段「妈妈认为小明看了某书，而小明其实还没看」的时期，当然，小明最终的阅读状态与妈妈的认知会是一致的，这就是所谓的「最终一致性」。")]),t._v(" "),v("h1",{attrs:{id:"二、jms规范之消息传递模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、jms规范之消息传递模型"}},[t._v("#")]),t._v(" 二、JMS规范之消息传递模型")]),t._v(" "),v("p",[t._v("JMS支持两种不同的消息传递模型:")]),t._v(" "),v("p",[t._v("1、Point-to-Point(P2P)")]),t._v(" "),v("p",[t._v("2、Publish/Subscribe(Pub/Sub)")]),t._v(" "),v("h3",{attrs:{id:"p2p模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#p2p模型"}},[t._v("#")]),t._v(" P2P模型")]),t._v(" "),v("p",[t._v("在P2P模型中，一条消息仅传递给一个接收者。队列负责保存该消息，直到接收器准备就绪。"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200506095001.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200506095217.png",alt:""}}),t._v("\nP2P的特点：")]),t._v(" "),v("ol",[v("li",[t._v("每个消息只有一个消费者（Consumer）(即一旦被消费，消息就不再在消息队列中)。")]),t._v(" "),v("li",[t._v("生产者和消费者之间在时间上没有依赖性，也就是说当生产者发送了消息之后，不管消费者有没有正在运行，它不会影响到消息被发送到队列。")]),t._v(" "),v("li",[t._v("每条消息仅会传送给一个消费者。可能会有多个消费者在一个队列中侦听，但是每个队列中的消息只能被队列中的一个消费者所消费。")]),t._v(" "),v("li",[t._v("消息存在先后顺序。一个队列会按照消息服务器将消息放入队列中的顺序，把它们传送给消费者。当已被消费时，就会从队列头部将它们删除（除非使用了消息优先级）。")]),t._v(" "),v("li",[t._v("消费者在成功接收消息之后需向队列应答成功。如果你希望发送的每个消息都应该被成功处理的话，那么你需要使用P2P模式。")])]),t._v(" "),v("h3",{attrs:{id:"publish-subscribe模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#publish-subscribe模型"}},[t._v("#")]),t._v(" Publish/Subscribe模型")]),t._v(" "),v("p",[t._v("在Pub / Sub模型中，一条消息被传递给所有订阅者。这就像广播。在这里，主题被用作负责保存和传递消息的面向消息的中间件。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/krislinzhao/IMGcloud/img/20200506095658.png",alt:""}})]),t._v(" "),v("p",[t._v("Publish/Subscribe的特点：")]),t._v(" "),v("ol",[v("li",[t._v("每个消息可以有多个消费者；")]),t._v(" "),v("li",[t._v("发布者和订阅者之间有时间上的依赖性。针对某个主题的订阅者，它必须创建一个订阅者之后，才能消费发布者的消息，而且为了消费消息，订阅者必须保持运行的状态。")]),t._v(" "),v("li",[t._v("为了缓和这样严格的时间相关性，JMS允许订阅者创建一个可持久化的订阅。这样，即使订阅者没有被激活（运行），它也能在激活后接收到发布者的消息。")]),t._v(" "),v("li",[t._v("每条消息都会传送给称为订阅者的多个消息消费者。订阅者有许多类型，包括持久型、非持久型和动态型。")]),t._v(" "),v("li",[t._v("发布者通常不会知道、也意识不到哪一个订阅者正在接收主题消息。")])])])}),[],!1,null,null,null);v.default=i.exports}}]);