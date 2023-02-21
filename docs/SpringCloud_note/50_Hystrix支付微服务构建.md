## 50_Hystrix支付微服务构建

将cloud-eureka-server7001改配置成单机版

1.新建cloud-provider-hygtrix-payment8001

2.POM

```
    <dependencies>
        <!--hystrix-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>
        <!--eureka client-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <!--web-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency><!-- 引入自己定义的api通用包，可以使用Payment支付Entity -->
            <groupId>com.springcloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

3.YML

```
server:
  port: 8001

spring:
  application:
    name: cloud-provider-hystrix-payment

eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      #defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka
      defaultZone: http://eureka7001.com:7001/eureka

```

4.主启动

```
@SpringBootApplication
@EnableEurekaClient
public class PaymentHystrixMain8001
{
    public static void main(String[] args) {
            SpringApplication.run(PaymentHystrixMain8001.class, args);
    }
}

```

5.业务类

service

```java
package com.springcloud.service.impl;


import ch.qos.logback.core.util.TimeUtil;
import com.springcloud.service.PaymentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.concurrent.TimeUnit;

/**
 * @ClassName PaymentServiceIpml
 * @Description
 * @Author zouyu
 * @Date 2021/12/15 23:44
 * @Version 1.0
 **/

@Service
public class PaymentServiceIpml implements PaymentService {


    /*
     * @Description: 正常访问肯定ok的方法
     * @Title: paymentInfo_OK
     * @Author: zouyu
     * @Date: 2021-12-27 12:39:15
     * @Param: id 
     * @Return: java.lang.String
     * @Throws: 
     */
    @Override
    public String paymentInfo_OK(Integer id) {
        return "线程池:  "+Thread.currentThread().getName()+"  paymentInfo_OK,id: "+id+"O(∩_∩)O哈哈~";
    }

    /*
     * @Description: 故意出错
     * @Title: paymentInfo_TimeOut
     * @Author: zouyu
     * @Date: 2021-12-27 12:40:54
     * @Param: id
     * @Return: java.lang.String
     * @Throws:
     */
    @Override
    public String paymentInfo_TimeOut(Integer id) {

        //睡3s
        try {
            int timeNunber =3;
            TimeUnit.SECONDS.sleep(timeNunber);
        }catch (InterruptedException e){
            e.printStackTrace();
        }

        return "线程池:  "+Thread.currentThread().getName()+"  paymentInfo_TimeOut,id: "+id+"O(∩_∩)O哈哈~";
    }
}

```



controller

```
@RestController
@Slf4j
public class PaymentController {

    @Resource
    private PaymentService paymentService;

    @Value("${server.port}")
    private String serverport;

    @GetMapping("/payment/hystrix/ok/{id}")
    public String paymentInfo_OK(@PathVariable("id") Integer id)
    {
        String result = paymentService.paymentInfo_OK(id);
        log.info("*****result: "+result);
        return result;
    }

    @GetMapping("/payment/hystrix/timeout/{id}")
    public String paymentInfo_TimeOut(@PathVariable("id") Integer id)
    {
        String result = paymentService.paymentInfo_TimeOut(id);
        log.info("*****result: "+result);
        return result;
    }


}

```









6.正常测试

启动eureka7001

启动cloud-provider-hystrix-payment8001

访问

success的方法 - http://localhost:8001/payment/hystrix/ok/1
每次调用耗费3秒钟 - http://localhost:8001/payment/hystrix/timeout/1

上述module均OK

以上述为根基平台，从正确 -> 错误 -> 降级熔断 -> 恢复。


