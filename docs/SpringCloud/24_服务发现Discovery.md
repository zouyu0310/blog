## 24_服务发现Discovery

盘点 注册中心的信息!  拿到eureka上面注册的服务信息

对于注册进eureka里面的微服务，可以通过服务发现来获得该服务的信息

- 修改cloud-provider-payment8001的Controller (暴露自身的服务信息)

```
 @Resource
    private DiscoveryClient discoveryClient;
    
    
    @GetMapping(value = "/payment/discovery")
    public Object discovery(){

        //判断注册的服务有几个 (总服务有哪些?)
        List<String> services = discoveryClient.getServices();
        for (String element : services) {
            log.info("element:{}",element);
        }

        //获取实例 -- 也即获取payment服务内部提供服务的模块信息
        List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");
        for (ServiceInstance instance : instances) {
            //获取实例的服务名,ip,端口和url
            log.info(instance.getServiceId()+"\t"+instance.getHost()+"\t"+instance.getPort()+"\t"+instance.getUri());
        }

        return this.discoveryClient;

    }
```



8001主启动类



```
@SpringBootApplication

@EnableDiscoveryClient //注册发现

@EnableEurekaClient   //Eureka Client端
public class PaymentMain8001 {
    public static void main(String[] args){
        SpringApplication.run(PaymentMain8001.class,args);
        System.out.println("启动成功");
    }
}
```





- 自测

先要启动EurekaSeryer

再启动8001主启动类，需要稍等一会儿

浏览器输入http://localhost:8001/payment/discovery

浏览器输出：

![image-20211220001309389](https://gitee.com/zouyu0310/images/raw/master/img/20211220001309.png)

日志输出:

![image-20211220001514664](https://gitee.com/zouyu0310/images/raw/master/img/20211220001514.png)

