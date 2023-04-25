---
title: Activiti 02-项目基本配置
date: 2023年4月13日13:12:24
---

---



## Springboot集成Activiti

### 引入依赖



```
<!--引入activiti的springboot启动器 -->
<dependency>
    <groupId>org.activiti</groupId>
    <artifactId>activiti-spring-boot-starter</artifactId>
    <version>7.1.0.M6</version>
    <exclusions>
        <exclusion>
            <artifactId>mybatis</artifactId>
            <groupId>org.mybatis</groupId>
        </exclusion>
    </exclusions>
</dependency>

```



### 添加配置

在`application-dev.yml`中添加如下配置

```yml
spring:    
	activiti:
      #    false:默认，数据库表不变，但是如果版本不对或者缺失表会抛出异常（生产使用）
      #    true:表不存在，自动创建（开发使用）
      #    create_drop: 启动时创建，关闭时删除表（测试使用）
      #    drop_create: 启动时删除表,在创建表 （不需要手动关闭引擎）
      database-schema-update: true
      #监测历史表是否存在，activities7默认不开启历史表
      db-history-used: true
      #none：不保存任何历史数据，流程中这是最高效的
      #activity：只保存流程实例和流程行为
      #audit：除了activity，还保存全部的流程任务以及其属性，audit为history默认值
      #full：除了audit、还保存其他全部流程相关的细节数据，包括一些流程参数
      history-level: full
      #校验流程文件，默认校验resources下的process 文件夹的流程文件
      check-process-definitions: true

```

注: 重启项目会自动创建数据库相关表act开头

### 使用activiti插件

#### 下载activiti-explorer

官网下载：https://www.activiti.org/get-started