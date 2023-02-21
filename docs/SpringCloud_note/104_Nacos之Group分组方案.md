## 104_Nacos之Group分组方案

通过Group实现环境区分 - 新建Group



![image-20220103224032295](https://gitee.com/zouyu0310/images/raw/master/img/20220103224032.png)



bootstrap

在config下增加一条group的配置即可。可配置为DEV_GROUP或TEST GROUP

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
        group: TEST_GROUP
```



最终调用接口可以看到读取到nacos的新增配置