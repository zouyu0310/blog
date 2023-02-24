## 20_Eureka集群环境构建

创建cloud-eureka-server7002工程，过程参考16_EurekaServer服务端安装

![image-20211219202429571](https://gitee.com/zouyu0310/images/raw/master/img/20211219202429.png)

找到C:\Windows\System32\drivers\etc路径下的hosts文件，修改映射配置添加进hosts文件

```
127.0.0.1 eureka7001.com
127.0.0.1 eureka7002.com
```

![image-20211219202508050](https://gitee.com/zouyu0310/images/raw/master/img/20211219202508.png)

修改cloud-eureka-server7001配置文件，集群指向其他eureka

```
server:
  port: 7001

eureka:
  instance:
#    hostname: localhost #eureka服务端的实例名称
    hostname: eureka7001.com  #eureka服务端的实例名称 -- 构建集群,修改了 本地的映射
  client:
    #false表示不向注册中心注册自己。
    register-with-eureka: false
    #false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
    fetch-registry: false
    service-url:
      #设置与Eureka server交互的地址查询服务和注册服务都需要依赖这个地址。
#      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
#      相互注册,相互守望!
      #单机就是7001自己
      #defaultZone: http://eureka7001.com:7001/eureka/
      #集群指向其它eureka
      defaultZone: http://eureka7002.com:7002/eureka/
```

同理修改 cloud-eureka-server7002配置文件

```
server:
  port: 7002

#互相注册,相互守望
eureka:
  instance:
    hostname: eureka7002.com #eureka服务端的实例名称
  client:
    #false表示不向注册中心注册自己。
    register-with-eureka: false
    #false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
    fetch-registry: false
    service-url:
      #设置与Eureka server交互的地址查询服务和注册服务都需要依赖这个地址。
      defaultZone: http://eureka7001.com:7001/eureka/
```



最后测试



![image-20211219202419698](https://gitee.com/zouyu0310/images/raw/master/img/20211219202419.png)