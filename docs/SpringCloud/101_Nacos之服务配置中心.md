## 101_Nacos之服务配置中心

基础配置

cloudalibaba-config-nacos-client3377

POM

```
<dependencies>
        <!--nacos-config-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
        </dependency>
        <!--nacos-discovery-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
        <!--web + actuator-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <!--一般基础配置-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

```







YML

Nacos同springcloud-config一样，在项目初始化时，要保证先从配置中心进行配置拉取，拉取配置之后，才能保证项目的正常启动。

springboot中配置文件的加载是存在优先级顺序的，bootstrap优先级高于application

bootstrap  -- 重点配置放在这

```yml
# nacos配置
server:
  port: 3377

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
#        group: DEV_GROUP
#        namespace: 7d8f0f5a-6a53-4785-9686-dd460158e5d4


# ${spring.application.name}-${spring.profile.active}.${spring.cloud.nacos.config.file-extension}

# nacos-config-client-dev.yaml

# nacos-config-client-test.yaml   ----> config.info

```

application

```
spring:
  profiles:
    active: dev #开发环境
```

主启动 : 添加@EnableDiscoveryClient  注册进注册中心nacos



业务类 @RefreshScope动态刷新

```
@RestController
@Slf4j
//支持Nacos的动态配置刷新
@RefreshScope
public class ConfigClientController {

    @Value("${config.info}")
    private String configInfo;

    @GetMapping("/config/info")
    public  String getConfigInfo(){
        return configInfo;
    }
}
```



## **在Nacos中添加配置信息**

**Nacos中的dataid的组成格式及与SpringBoot配置文件中的匹配规则**



说明：之所以需要配置spring.application.name，是因为它是构成Nacos配置管理dataId 字段的一部分。

在 Nacos Spring Cloud中,dataId的完整格式如下：

```
${prefix}-${spring-profile.active}.${file-extension}

```

```yml
1. prefix默认为spring.application.name的值，也可以通过配置项spring.cloud.nacos.config.prefix来配置。
2. spring.profile.active即为当前环境对应的 profile，详情可以参考 Spring Boot文档。注意：当spring.profile.active为空时，对应的连接符 - 也将不存在，datald 的拼接格式变成${prefix}.${file-extension}
3. file-exetension为配置内容的数据格式，可以通过配置项spring .cloud.nacos.config.file-extension来配置。目前只支持properties和yaml类型。
通过Spring Cloud 原生注解@RefreshScope实现配置自动更新。

```

![image-20220103221259539](https://gitee.com/zouyu0310/images/raw/master/img/20220103221306.png)



命令匹配规则:  服务名 - 开发环境 .配置文件数据格式(yaml  , 如果是yml会报错)



nacos添加: ( 注意: 此时nacos添加没有提示，要符合配置书写规范 冒号，缩进)

```
config:
    info: "config info for dev,from nacos config center!"
```





测试

    启动前需要在nacos客户端-配置管理-配置管理栏目下有对应的yaml配置文件
    运行cloud-config-nacos-client3377的主启动类
    调用接口查看配置信息 - http://localhost:3377/config/info

自带动态刷新   @RefreshScope

修改下Nacos中的yaml配置文件，再次调用查看配置的接口，就会发现配置已经刷新。


