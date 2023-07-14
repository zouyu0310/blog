---
title: 授权系统docker转移
date: 2023年7月5日16:08:42
---



---

docker可视化

```
和mysql密码一样
```





---

数据存放:
/data/dockerData/mysql



---

## Compose 
compose命令构建和运行应用

后台执行该服务可以加上 -d 参数：

docker-compose up -d
路径

/data/dockerData/dockerCompose/mysql



```
version: '3'
services:
  mysql:                                            #mysql服务节点
    image: mysql:8.0.33                                #mysql镜像，如果镜像容器没有会去自动拉取
    container_name: mysqlcompose3306                           #容器的名称
    command:                                        #构建容器后所执行的命令
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_unicode_ci
      --lower-case-table-names=1    #忽略数据表明大小写
    restart: always                                 #跟随docker的启动而启动
    environment:
      MYSQL_ROOT_PASSWORD: XXX                     #设置root帐号密码
      SET_CONTAINER_TIMEZONE: true
      CONTAINER_TIMEZONE: Asia/Shanghai                       #time
    ports:
      - 3306:3306
    volumes:
      - /data/dockerData/mysql/data:/var/lib/mysql           #数据文件挂载
      - /data/dockerData/mysql/conf.d:/etc/mysql/conf.d      #配置文件挂载
      - /data/dockerData/mysql/log:/var/log/mysql            #日志文件挂载
      - /etc/localtime:/etc/localtime
~                                           
```

