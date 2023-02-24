## 42_Ribbon之手写轮询算法

自己试着写一个类似RoundRobinRule的本地负载均衡器。

- 7001/7002集群启动
- 8001/8002微服务改造- controller  添加接口  作用: 返回服务的访问端口





```
@RestController
@Slf4j
public class PaymentController{

    ...
    
	@GetMapping(value = "/payment/lb")
    public String getPaymentLB() {
        return serverPort;//返回服务接口
    }
    
    ...
}

```



- 80订单微服务改造 (正式开始手写)

1.ApplicationContextConfig去掉注解@LoadBalanced，如果使用Ribbon就一定写,去掉则不使用



OrderMain80去掉注解@RibbonClient





2.创建LoadBalancer接口



```java
package com.springcloud.lb;

import org.springframework.cloud.client.ServiceInstance;

import java.util.List;

/**
 * @author zouyu
 * @date 2021/12/26
 * 手写负载均衡 接口
 */
public interface LoadBalancer {

    /*
     * @Description: 1. 收集所有活着的服务
     * @Title: instances
     * @Author: zouyu
     * @Date: 2021-12-26 10:16:13
     * @Param: serviceInstances
     * @Return: org.springframework.cloud.client.ServiceInstance
     * @Throws:
     */
    ServiceInstance instances(List<ServiceInstance> serviceInstances);
}

```

3.MyLB

实现LoadBalancer接口

```java
package com.springcloud.lb;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @ClassName MyLb
 * @Description
 * @Author zouyu
 * @Date 2021/12/26 22:16
 * @Version 1.0
 **/

@Component //让容器扫描的到
@Slf4j
public class MyLb implements LoadBalancer {

    //原子类,给初始值是0  多线程下变量操作具有原子性
    //https://blog.csdn.net/fanrenxiang/article/details/80623884
    private AtomicInteger atomicInteger = new AtomicInteger(0);

    //获取到服务的方法,很重要 不允许修改
    public final int getAndIncrement(){
        int current;
        int next;

        do{
            //当前值
            current = this.atomicInteger.get();
            //下一个值
            next = current >= Integer.MAX_VALUE ? 0 : current+1 ;


        }while (
            //https://blog.csdn.net/qq_35571554/article/details/82892806?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link
            //CAS 比较并替换。
            //current 期望值 next修改值
            !this.atomicInteger.compareAndSet(current,next)
            //  !如果说取不到,那就 自旋 一直取
            //  current 当前值和期望值一致就修改,修改完成为next后返回true, 添加! 跳出循环

        );

        log.info("**********第几次访问,次数next:{}",next);
        return next;
    }

    @Override
    public ServiceInstance instances(List<ServiceInstance> serviceInstances) {
        //获取下标.  serviceInstances.size() 服务器集群总数量;  getAndIncrement()   rest接口第几次请求数
        int index = getAndIncrement() % serviceInstances.size();

        //返回哪个提供服务
        return serviceInstances.get(index);
    }
}

```





4.OrderController -- 引入自己定义的策略

```java
package com.springcloud.controller;

import com.springcloud.entities.CommonResult;
import com.springcloud.entities.Payment;
import com.springcloud.lb.LoadBalancer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.net.URI;
import java.util.List;

/**
 * @ClassName OrderController
 * @Description 消费者接口
 * @Author zouyu
 * @Date 2021/12/16 22:54
 * @Version 1.0
 **/
@RestController
@Slf4j
public class OrderController {
    //业务: 80端口调用8001
    //public static final String PAYMENT_URL = "http://localhost:8001";
    public static final String PAYMENT_URL = "http://CLOUD-PAYMENT-SERVICE";


    @Autowired
    private RestTemplate restTemplate;

    //引入自己写的负载均衡方法
    @Autowired
    private LoadBalancer loadBalancer;

    @Resource
    private DiscoveryClient discoveryClient;



    //负载均衡loadBalancer 测试
    @GetMapping(value = "/consumer/payment/lb")
    private String getPaymentLB(){
        //获取实例 -- 也即获取payment服务内部提供服务的模块信息 -- 获取到服务的信息
        List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");

        if(instances == null || instances.size() <= 0){ //服务为空返回null
            return null;
        }else{//有服务,传到自写的负载均衡方法中
            ServiceInstance serviceInstance = loadBalancer.instances(instances);
            URI uri = serviceInstance.getUri(); //服务的访问地址
            //去访问
            return restTemplate.getForObject(uri+"/payment/lb",String.class);

        }

    }


}

```

![image-20211226231728059](https://gitee.com/zouyu0310/images/raw/master/img/20211226231728.png)



5.测试 不停地刷新http://localhost:81/consumer/payment/lb，可以看到8001/8002交替出现。 首先出现8002

1 % 2取下标为1 的服务所以为8002

![image-20211226231852347](https://gitee.com/zouyu0310/images/raw/master/img/20211226231852.png)



6. 重启服务,会从1开始记录次数



## 不要去做api调用工程师，要学会去自己造轮子