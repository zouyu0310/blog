## 67_GateWay非阻塞异步模型

有Zuull了怎么又出来Gateway？**我们为什么选择Gateway?**

netflix不太靠谱，zuul2.0一直跳票，迟迟不发布。

    1一方面因为Zuul1.0已经进入了维护阶段，而且Gateway是SpringCloud团队研发的，是亲儿子产品，值得信赖。而且很多功能Zuul都没有用起来也非常的简单便捷。
    2Gateway是基于异步非阻塞模型上进行开发的，性能方面不需要担心。虽然Netflix早就发布了最新的Zuul 2.x，但Spring Cloud貌似没有整合计划。而且Netflix相关组件都宣布进入维护期；不知前景如何?
    3多方面综合考虑Gateway是很理想的网关选择。

SpringCloud Gateway具有如下特性

    1基于Spring Framework 5，Project Reactor和Spring Boot 2.0进行构建；
    2动态路由：能够匹配任何请求属性；
    3可以对路由指定Predicate (断言)和Filter(过滤器)；
    4集成Hystrix的断路器功能；
    5集成Spring Cloud 服务发现功能；
    6易于编写的Predicate (断言)和Filter (过滤器)；
    7请求限流功能；
    8支持路径重写。

SpringCloud Gateway与Zuul的区别

    1在SpringCloud Finchley正式版之前，Spring Cloud推荐的网关是Netflix提供的Zuul。
    2Zuul 1.x，是一个基于阻塞I/O的API Gateway。
    3Zuul 1.x基于Servlet 2.5使用阻塞架构它不支持任何长连接(如WebSocket)Zuul的设计模式和Nginx较像，每次I/О操作都是从工作线程中选择一个执行，请求线程被阻塞到工作线程完成，但是差别是Nginx用C++实现，Zuul用Java实现，而JVM本身会有第-次加载较慢的情况，使得Zuul的性能相对较差。
    4Zuul 2.x理念更先进，想基于Netty非阻塞和支持长连接，但SpringCloud目前还没有整合。Zuul .x的性能较Zuul 1.x有较大提升。在性能方面，根据官方提供的基准测试,Spring Cloud Gateway的RPS(每秒请求数)是Zuul的1.6倍。
    5Spring Cloud Gateway建立在Spring Framework 5、Project Reactor和Spring Boot2之上，使用非阻塞API。
    6Spring Cloud Gateway还支持WebSocket，并且与Spring紧密集成拥有更好的开发体验
