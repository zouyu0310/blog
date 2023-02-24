## 64_Hystrix图形化Dashboard监控实战

**修改cloud-provider-hystrix-payment8001** (被监控)

注意：新版本Hystrix需要在主启动类PaymentHystrixMain8001中指定监控路径

```
    /**
     *此配置是为了服务监控而配置，与服务容错本身无关，springcloud升级后的坑
     *ServletRegistrationBean因为springboot的默认路径不是"/hystrix.stream"，
     *只要在自己的项目里配置上下面的servlet就可以了
     *否则，Unable to connect to Command Metric Stream 404
     */
    @Bean
    public ServletRegistrationBean getServlet() {
        HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
        registrationBean.setLoadOnStartup(1);
        registrationBean.addUrlMappings("/hystrix.stream");
        registrationBean.setName("HystrixMetricsStreamServlet");
        return registrationBean;
    }

```

**如果8001主启动不配置，生成监控图标会报错 404**





监控测试

启动1个eureka

启动8001，9001

观察监控窗口

9001监控8001 - 填写监控地址 - http://localhost:8001/hystrix.stream 到 http://localhost:9001/hystrix页面的输入框。





测试地址 -- 产生数据

    http://localhost:8001/payment/circuit/1
    
    http://localhost:8001/payment/circuit/-1
    
    测试通过
    
    先访问正确地址，再访问错误地址，再正确地址，会发现图示断路器都是慢慢放开的。


![image-20211229124102640](https://gitee.com/zouyu0310/images/raw/master/img/20211229124102.png)

![image-20211229124130831](https://gitee.com/zouyu0310/images/raw/master/img/20211229124130.png)

**如何看?**

- 7色

![image-20211229124401765](https://gitee.com/zouyu0310/images/raw/master/img/20211229124401.png)

    1圈

实心圆：共有两种含义。它通过颜色的变化代表了实例的健康程度，它的健康度从绿色<黄色<橙色<红色递减。

该实心圆除了颜色的变化之外，它的大小也会根据实例的请求流量发生变化，流量越大该实心圆就越大。所以通过该实心圆的展示，就可以在大量的实例中快速的发现故障实例和高压力实例。

    1线

曲线：用来记录2分钟内流量的相对变化，可以通过它来观察到流量的上升和下降趋势。

    整图说明
![image-20211229124419422](https://gitee.com/zouyu0310/images/raw/master/img/20211229124419.png)

![image-20211229124435714](https://gitee.com/zouyu0310/images/raw/master/img/20211229124435.png)

