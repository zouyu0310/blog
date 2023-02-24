## 102_Nacos之命名空间分组和DataID三者关系 -- 隔离关系

**问题 - 多环境多项目管理**

问题1:

实际开发中，通常一个系统会准备

1. dev开发环境
2. test测试环境
3. prod生产环境。

如何保证指定环境启动时服务能正确读取到Nacos上相应环境的配置文件呢?

问题2:

一个大型分布式微服务系统会有很多微服务子项目，每个微服务项目又都会有相应的开发环境、测试环境、预发环境、正式环境…那怎么对这些微服务配置进行管理呢?





Nacos的图形化管理界面

![image-20220103221714284](https://gitee.com/zouyu0310/images/raw/master/img/20220103221714.png)





**Namespace+Group+Data lD三者关系？为什么这么设计？**

1是什么

类似Java里面的package名和类名最外层的namespace是可以用于区分部署环境的，Group和DatalD逻辑上区分两个目标对象。

2三者情况

![image-20220103221827760](https://gitee.com/zouyu0310/images/raw/master/img/20220103221827.png)



Nacos默认的Namespace是public，Namespace主要用来实现隔离。

    比方说我们现在有三个环境：开发、测试、生产环境，我们就可以创建三个Namespace，不同的Namespace之间是隔离的。

Group默认是DEFAULT_GROUP，Group可以把不同的微服务划分到同一个分组里面去
Service就是微服务:一个Service可以包含多个Cluster (集群)，Nacos默认Cluster是DEFAULT，Cluster是对指定微服务的一个虚拟划分。

    比方说为了容灾，将Service微服务分别部署在了杭州机房和广州机房，这时就可以给杭州机房的Service微服务起一个集群名称(HZ) ，给广州机房的Service微服务起一个集群名称(GZ)，还可以尽量让同一个机房的微服务互相调用，以提升性能。

最后是Instance，就是微服务的实例。


![image-20220103222254516](https://gitee.com/zouyu0310/images/raw/master/img/20220103222254.png)

