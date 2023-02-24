## 	

OpenFeign 写上注解之后会找配置的服务名暴露的相应方法





**超时设置，故意设置超时演示出错情况**

1.服务提供方8001/8002故意写暂停程序

```
    //Feign故意超时3s
    @GetMapping(value = "/payment/feign/timeout")
    public String paymentFeignTimeout()
    {
        // 业务逻辑处理正确，但是需要耗费3秒钟
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //返回端口
        return serverPort;
    }
```



2.服务消费方80添加超时方法PaymentFeignService

```
    //访问Feign故意超时3s的接口
    @GetMapping(value = "/payment/feign/timeout")
    public String paymentFeignTimeout();
```

3.服务消费方80添加超时方法OrderFeignController

```
    //消费侧 Feign故意超时测试
    @GetMapping(value = "/consumer/payment/feign/timeout")
    public String paymentFeignTimeout() {
        //openfeign-ribbon ,默认等待一秒  超过一秒就报错
        return paymentFeignService.paymentFeignTimeout();

    }
```



4.测试：

多次刷新http://localhost/consumer/payment/feign/timeout

将会跳出错误Spring Boot默认错误页面，主要异常：feign.RetryableException:Read timed out executing GET http://CLOUD-PAYMENT-SERVCE/payment/feign/timeout。

OpenFeign默认等待1秒钟，超过后报错






![image-20211227004130689](https://gitee.com/zouyu0310/images/raw/master/img/20211227004130.png)



**YML文件里需要开启OpenFeign客户端超时控制** -- 由ribbon进行限制

```
#设置feign客户端超时时间(OpenFeign默认支持ribbon)(单位：毫秒)
ribbon:
  #指的是建立连接所用的时间，适用于网络状况正常的情况下,两端连接所用的时间, 此时5s
  ReadTimeout: 5000
  #指的是建立连接后从服务器读取到可用资源所用的时间
  ConnectTimeout: 5000

```



