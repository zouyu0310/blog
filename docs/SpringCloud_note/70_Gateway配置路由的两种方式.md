## 70_Gateway配置路由的两种方式

1. **在配置文件yml中配置，见上一章节**

2. **代码中注入RouteLocator的Bean**

接下来::



百度国内新闻网址，需要外网 - http://news.baidu.com/guonei

**自己写一个**

业务需求 - 通过9527网关访问到外网的百度新闻网址

**编码**

cloud-gateway-gateway9527业务实现

```
package com.springcloud.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @ClassName GateWayConfig
 * @Description 网关路由配置类
 * @Author zouyu
 * @Date 2021/12/29 21:05
 * @Version 1.0
 **/
@Configuration
public class GateWayConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder routeLocatorBuilder)
    {
        //RouteLocatorBuilder路由构建器
        //routes和第一种方法yml中的routes 一样 下面是id等等
        RouteLocatorBuilder.Builder routes = routeLocatorBuilder.routes();

        routes.route("path_route_springcloud",
                r -> r.path("/guonei")
                        .uri("http://news.baidu.com/guonei")).build(); //build()构建

        return routes.build();
    }


}

```

