# 54_Hystrix之服务降级支付侧fallback

降级配置 - @HystrixCommand

8001先从自身找问题

设置自身调用超时时间的峰值，峰值内可以正常运行，超过了需要有兜底的方法处埋，作服务降级fallback。

8001fallback

业务类启用 - @HystrixCommand报异常后如何处理

—旦调用服务方法失败并抛出了错误信息后，会自动调用@HystrixCommand标注好的fallbackMethod调用类中的指定方法

主启动

```
@SpringBootApplication
@EnableEurekaClient
@EnableCircuitBreaker //服务降级, 激活!
public class PaymentHystrixMain8001 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentHystrixMain8001.class, args);
    }
}
```

service

```java

    @HystrixCommand(fallbackMethod = "paymentInfo_TimeOutHandler",commandProperties = {
            @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds",value="2000")

    })
    //说明: 如果程序报错会自动走 paymentInfo_TimeOutHandler 方法,
    // commandProperties 后面配置的 name为 这个线程 ,不超过3s 为正常
    public String paymentInfo_TimeOut(Integer id) {


        int timeNunber =5;
        //睡3s
/*        try {

            //TimeUnit.SECONDS.sleep(timeNunber);
            TimeUnit.MILLISECONDS.sleep(3000);
        }catch (InterruptedException e){
            e.printStackTrace();
        }*/
        // 计算错误,直接报错,也采用下面兜底方法
        int age = 10/0;
        return "线程池:  "+Thread.currentThread().getName()+"  paymentInfo_TimeOut,id: "+id+"O(∩_∩)O哈哈~";
    }

    public String paymentInfo_TimeOutHandler(Integer id){
        return "线程池:  "+Thread.currentThread().getName()+",报错了!!!我是兜底方法  paymentInfo_TimeOutHandler,id: "+id+"o(╥﹏╥)o";
    }
```

 

上述有两个报错,

1. 睡3s
2. 计算失误问题

都可以采用下方兜底方法!

当前服务不可用了，做服务降级，兜底的方案都是paymentInfo_TimeOutHandler