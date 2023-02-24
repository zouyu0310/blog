# 18_订单微服务80入驻进EurekaServer

EurekaClient端cloud-consumer-order80将注册进EurekaServer成为服务消费者consumer，类似来上课消费的同学

1.cloud-consumer-order80

2.POM

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

3.YML

```
server:
  port: 81

spring:
  application:
    name: cloud-order-service

eureka:
  client:
    #表示是否将自己注册进Eurekaserver默认为true。
    register-with-eureka: true
    #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡
    fetchRegistry: true
    service-url:
      defaultZone: http://localhost:7001/eureka

```

4.主启动

```
/**
 * @ClassName OrderMain80
 * @Description 消费者主程序
 * @Author zouyu
 * @Date 2021/12/16 22:50
 * @Version 1.0
 **/
@SpringBootApplication
@EnableEurekaClient 
public class OrderMain80 {
    public static void main(String[] args){
        SpringApplication.run(OrderMain80.class,args);
        System.out.println("80服务启动成功!");
    }
}
```





5.测试

    启动cloud-provider-payment8001、cloud-eureka-server7001和cloud-consumer-order80这三工程。
    浏览器输入 http://localhost:7001 , 在主页的Instances currently registered with Eureka将会看到cloud-provider-payment8001、cloud-consumer-order80两个工程名。
