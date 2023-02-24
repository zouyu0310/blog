# 39_Ribbon负载规则替换

1.修改cloud-consumer-order80

2.注意配置细节

官方文档明确给出了警告:

这个自定义配置类不能放在@ComponentScan所扫描的当前包下以及子包下，

否则我们自定义的这个配置类就会被所有的Ribbon客户端所共享，达不到特殊化定制的目的了。

（也就是说不要将Ribbon配置类与主启动类同包）

3.新建package - com.myrule

4.在com.myrule下新建MySelfRule规则类

```
/**
 * @ClassName MySelfRule
 * @Description ribbon 更换负载均衡规则类
 * @Author zouyu
 * @Date 2021/12/26 20:46
 * @Version 1.0
 **/
@Configuration
public class MySelfRule {

    @Bean
    public IRule myRule(){
        //定义为随机
        return new RandomRule();
    }
}
```

5.主启动类添加@RibbonClient

```
@SpringBootApplication
@EnableEurekaClient

//添加到此处  name说明: 80要去访问支付微服务
@RibbonClient(name = "CLOUD-PAYMENT-SERVICE", configuration = MySelfRule.class)
public class OrderMain80 {
    public static void main(String[] args){
        SpringApplication.run(OrderMain80.class,args);
        System.out.println("80服务启动成功!");
    }
}
```



6.测试

开启cloud-eureka-server7001，cloud-consumer-order80，cloud-provider-payment8001，cloud-provider-payment8002

浏览器-输入http://localhost/consumer/payment/get/1

返回结果中的serverPort在8001与8002两种间反复横跳。而且结果没有规律

