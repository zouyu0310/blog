## 105_Nacos之Namespace空间方案

新建dev/test的Namespace

![image-20220103224520143](https://gitee.com/zouyu0310/images/raw/master/img/20220103224520.png)



可以到的一个空间id  -- 添加到springcloud配置中

```
156e84dd-3bd4-4d2d-a1ea-c633bdd0c787
```

```
spring:
  application:
    name: nacos-config-client
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos服务注册中心地址
      config:  #配置
        server-addr: localhost:8848 #Nacos作为配置中心地址
        file-extension: yaml #指定yaml格式的配置 --读取yml格式
        group: DEV_GROUP
        namespace: 156e84dd-3bd4-4d2d-a1ea-c633bdd0c787  #<------------指定namespace
```

