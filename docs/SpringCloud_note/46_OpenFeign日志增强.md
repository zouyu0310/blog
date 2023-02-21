46_OpenFeign日志增强

日志打印功能

Feign提供了日志打印功能，我们可以通过配置来调整日恙级别，从而了解Feign 中 Http请求的细节。

说白了就是对Feign接口的调用情况进行监控和输出

日志级别

    NONE：默认的，不显示任何日志;
    BASIC：仅记录请求方法、URL、响应状态码及执行时间;
    HEADERS：除了BASIC中定义的信息之外，还有请求和响应的头信息;
    FULL：除了HEADERS中定义的信息之外，还有请求和响应的正文及元数据。

配置日志bean

```java
package com.springcloud.config;

import feign.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



/**
 * @ClassName FeignConfig
 * @Description FeignConfig配置日志bean
 * @Author zouyu
 * @Date 2021/12/27 0:48
 * @Version 1.0
 **/
@Configuration
public class FeignConfig {
    @Bean
    Logger.Level feignLoggerLevel()
    {
        //详细日志
        return Logger.Level.FULL;
    }

    /*
    NONE：默认的，不显示任何日志;
    BASIC：仅记录请求方法、URL、响应状态码及执行时间;
    HEADERS：除了BASIC中定义的信息之外，还有请求和响应的头信息;
    FULL：除了HEADERS中定义的信息之外，还有请求和响应的正文及元数据。
     */


}

```

**YML文件里需要开启日志的Feign客户端**

```
logging:
  level:
    # feign日志以什么级别监控哪个接口
    com.lun.springcloud.service.PaymentFeignService: debug
```

**后台日志查看**

得到更多日志信息。



![image-20211227005448185](https://gitee.com/zouyu0310/images/raw/master/img/20211227005448.png)