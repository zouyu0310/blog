## 73_GateWay的Filter

路由过滤器可用于修改进入的HTTP请求和返回的HTTP响应，路由过滤器只能指定路由进行使用。Spring Cloud Gateway内置了多种路由过滤器，他们都由GatewayFilter的工厂类来产生。

Spring Cloud Gateway的Filter:

    生命周期：
        pre
        post
    
    种类（具体看官方文档）：
        GatewayFilter - 有31种
        GlobalFilter - 有10种

常用的GatewayFilter：AddRequestParameter GatewayFilter

自定义全局GlobalFilter：

两个主要接口介绍：

    GlobalFilter
    Ordered

能干什么：

    全局日志记录
    统一网关鉴权
    …

代码案例：

GateWay9527项目添加MyLogGateWayFilter类：


```
@Component
@Slf4j
public class MyLogGateWayFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        log.info("***********come in MyLogGateWayFilter:  "+new Date());

        String uname = exchange.getRequest().getQueryParams().getFirst("uname"); //需要带uanme

        if(uname == null)
        {
            log.info("*******用户名为null，非法用户，o(╥﹏╥)o");
            //不被接收
            exchange.getResponse().setStatusCode(HttpStatus.NOT_ACCEPTABLE);
            return exchange.getResponse().setComplete();
        }
        //进入下一个过滤链
        return chain.filter(exchange);

    }

    @Override
    public int getOrder() {
        return 0;
    }
}
```

测试：

启动：

    EurekaMain7001
    PaymentMain8001
    GateWayMain9527
    PaymentMain8002

浏览器输入：

    http://localhost:9527/payment/lb - 访问异常
    http://localhost:9527/payment/lb?uname=zhangsan - 正常访问
