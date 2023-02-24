## 21_订单支付两微服务注册进Eureka集群

- 将支付服务8001微服务，订单服务80微服务发布到上面2台Eureka集群配置中

将它们的配置文件的eureka.client.service-url.defaultZone进行修改



```
#微服务建议一定要写服务端口号和微服务名称
server:
  #端口号
  port: 8001

spring:
  application:
    #微服务名称 --注意:一般命名好后不要轻易改动 此为入住Eureka服务端的名称
    name: cloud-payment-service
  #数据库配置
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    #mysql5.x的没有cj
    driver-class-name: org.gjt.mm.mysql.Driver
    #记得先创建数据库
    url: jdbc:mysql://localhost:3306/db2021?useUnicode=true&characterEncoding=utf-8&useSSL=false&allowPublicKeyRetrieval=true
    username: root
    password: 



#mybatis配置
mybatis:
  mapper-locations: classpath:mapper/*.xml
  type-aliases-package: com.angenin.springcloud.entities  #所有Entity别名类所在包


logging:
  level:
    root: info
    com.springcloud: debug

eureka:
  client:
    #表示是否将自己注册进Eurekaserver默认为true。
    register-with-eureka: true
    #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡
    fetchRegistry: true
    service-url:
#      defaultZone: http://localhost:7001/eureka
      defaultZone: http://eureka7001.com:7001/eureka, http://eureka7002.com:7002/eureka


```





测试01   

1. 先要启动EurekaServer，7001/7002服务 重要! 
2. 再要启动服务提供者provider，8001
3. 再要启动消费者，80
4. 浏览器输入 -http://localhost:81/consumer/payment/get/1