## 109_Nacos集群配置(上)Linux版本安装

预计需要，1个Nginx+3个nacos注册中心+1个mysql

nacos解压到 /usr/local下





**application.properties配置**

nacos/conf文件下

添加以下内容，设置数据源

```
spring.datasource.platform=mysql

db.num=1
db.url.0=jdbc:mysql://localhost:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=root
db.password=XXXX

```

**Linux服务器上nacos的集群配置cluster.conf**

梳理出3台nacos集器的不同服务端口号，设置3个端口：

- 3333
- 4444
- 5555

nacos/conf文件下 -- 先复制出来一份

```
cp cluster.conf.example  cluster.conf
```

内容: 

```
172.31.241.249:3333
172.31.241.249:4444
172.31.241.249:5555
```

**注意**，这个IP不能写127.0.0.1，必须是Linux命令`hostname -i`能够识别的IP

**编辑Nacos的启动脚本startup.sh，使它能够接受不同的启动端口**

/nacos/bin目录下有startup.sh

平时单机版的启动，都是./startup.sh即可

但是，集群启动，我们希望可以类似其它软件的shell命令，传递不同的端口号启动不同的nacos实例。
命令: ./startup.sh -p 3333表示启动端口号为3333的nacos服务器实例，和上一步的cluster.conf配置的一致。

修改内容


![image-20220104213248646](https://gitee.com/zouyu0310/images/raw/master/img/20220104213255.png)



注意: nacos2.0.3不需要修改此配置

![image-20220104213739636](C:\Users\geecity\AppData\Roaming\Typora\typora-user-images\image-20220104213739636.png)

执行方式 - `startup.sh - p 端口号`

```
./startup.sh -p 3333
./startup.sh -p 4444
./startup.sh -p 5555
```







