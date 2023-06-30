

## 将应用打包成镜像

编写Dockerfile将自己的应用打包镜像



### 1、以前

Java为例

- SpringBoot打包成可执行jar
- 把jar包上传给服务

- 服务器运行java -jar



### 2、现在

所有机器都安装Docker，任何应用都是镜像，所有机器都可以运行





### 3、怎么打包-Dockerfile

-Dockerfile就是告诉linux怎么制作镜像	

找openjdk

maintainer  这个镜像作者



copy  target目录下任意jar包  复制到linux系统下路径。

ENTRYPOINT  镜像启动命令

```dockerfile
FROM openjdk:8-jdk-slim
LABEL maintainer=leifengyang

COPY target/*.jar   /app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
```



注意：打包如果是war包

```
FROM openjdk:8-jdk-slim
LABEL maintainer=leifengyang

COPY target/*.war   /app.war

ENTRYPOINT ["java","-jar","/app.war"]
```





复制到系统里的



```
docker build -t java-demo:v1.0 .
```

java-demo:v1.0后可以加 -f 指定哪一个Dockerfile



 -t 起一个镜像名+版本  后面一个点 表示在当前目录下工作





 3、启动容器 

启动应用容器

```
docker run -d -p 8080:8080 --name myjava-app java-demo:v1.0 
```

![image-20210929233330447](https://gitee.com/zouyu0310/images/raw/master/img/20210929233337.png)





分享镜像



```
# 登录docker hub
docker login

#给旧镜像起名
docker tag java-demo:v1.0  leifengyang/java-demo:v1.0

# 推送到docker hub
docker push leifengyang/java-demo:v1.0

# 在别的机器上拉 镜像名+版本
docker pull leifengyang/java-demo:v1.0

# 别的机器运行
docker run -d -p 8080:8080 --name myjava-app java-demo:v1.0 
```



## 部署中间件

部署一个Redis+应用，尝试应用操作Redis产生数据

```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

#redis使用自定义配置文件启动

docker run -v /data/redis/redis.conf:/etc/redis/redis.conf \
-v /data/redis/data:/data \
-d --name myredis \
-p 6379:6379 \
redis:latest  redis-server /etc/redis/redis.conf

```



# docker安装

# 安装

## 1、centos下安装docker

其他系统参照如下文档

https://docs.docker.com/engine/install/centos/



### 1、移除以前docker相关包

```bash
yum remove docker *
```





### 2、配置yum源

```bash
sudo yum install -y yum-utils
sudo yum-config-manager \
--add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

注:sudo是使用管理员权限

正式:

```
yum install -y yum-utils

yum-config-manager \
--add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```





### 3、安装docker

```bash
yum install -y docker-ce docker-ce-cli containerd.io

# 注意:默认下最新版本 如果指定版本在ce后指定
yum install -y docker-ce-19.0.3 docker-ce-cli containerd.io

#以下是在安装k8s的时候使用
yum install -y docker-ce-20.10.7 docker-ce-cli-20.10.7  containerd.io-1.4.6
```



会安装三个东西

```
docker-ce  docker社区版-docker服务器
docker-ce-cli  docker命令行程序
containerd.io  容器环境
```



### 4、启动



开机启动并立即启动

```bash
systemctl enable docker --now
```



### 5、配置加速

这里额外添加了docker的生产环境核心配置cgroup

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://82m9ar63.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```



注: 

```
["https://82m9ar63.mirror.aliyuncs.com"],  为加速器地址可以使用自己的阿里云的免费加速器
```

阿里云-产品服务--容器镜像服务--镜像工作-(加速器)



解析:

```
sudo mkdir -p /etc/docker # 先创建文件夹/etc/docker 
sudo tee /etc/docker/daemon.json <<-'EOF' #核心配置
{
  "registry-mirrors": ["https://82m9ar63.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
sudo systemctl daemon-reload  #后台重启
sudo systemctl restart docker #docker重启
```





# Docker命令实战

# 常用命令 

![image-20210930125733055](https://gitee.com/zouyu0310/images/raw/master/img/20210930125733.png)







# 基础实战

## 1、找镜像

去[docker hub](http://hub.docker.com)，找到nginx镜像

```bash
docker pull nginx  #下载最新版

镜像名:版本名（标签）

#下载指定版本
docker pull nginx:1.20.1


docker pull redis  #下载最新
docker pull redis:6.2.4

## 下载来的镜像都在本地
docker images  #查看所有镜像



## 删除镜像
docker rmi 镜像名:版本号/镜像id(更具有唯一性)

redis = redis:latest
注: latest为最新版本

如: docker rmi nginx:1.20.1
```



![image-20210930131020570](https://gitee.com/zouyu0310/images/raw/master/img/20210930131020.png)



## 2、启动容器

启动nginx应用容器，并映射88端口，测试的访问

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

【docker run  设置项   镜像名  】 镜像启动运行的命令（镜像里面默认有的，一般不会写）

# -d：后台运行
# --restart=always: 开机自启
docker run --name=mynginx   -d  --restart=always -p  88:80   nginx




# 查看正在运行的容器
docker ps
# 查看所有
docker ps -a
# 删除停止的容器
docker rm  容器id/名字
docker rm -f  容器id/名字  #强制删除正在运行中的

#停止容器
docker stop 容器id/名字
#再次启动
docker start 容器id/名字

#应用开机自启(修改  update )
docker update 容器id/名字 --restart=always
```





## 3、修改容器内容

修改默认的index.html 页面

### 1、进容器内部修改

```bash
# 进入容器内部的系统，修改容器内容
docker exec -it 容器id  /bin/bash


# -it 为交互模式
# bash 控制台

# 退出
exit
```

已经进入

![image-20210930132919349](https://gitee.com/zouyu0310/images/raw/master/img/20210930132919.png)

```
# 查看内部 ls /
```

![image-20210930133131824](https://gitee.com/zouyu0310/images/raw/master/img/20210930133131.png)



注意: 以上内部的镜像内容从docker hub的容器描述查看

```
https://hub.docker.com/_/nginx?tab=description&page=1&ordering=last_updated
```







### 2、挂载数据到外部修改

```bash
docker run --name=mynginx   \
-d  --restart=always \
-p  88:80 -v /data/html:/usr/share/nginx/html:ro  \
nginx

# 修改页面只需要去 主机的 /data/html
```



```bash
docker run --name=mynginx -d --restart=always -p 88:80 -v /data/html:/usr/share/nginx/html:ro   nginx


# -v挂载 主机地址:容器地址
# 注意: 如果/data/html主机文件为空,那容器中文件也是空
# 一定保证外部文件在,才可以挂载
# 默认容器对这个目录有可读写权限，可以通过指定ro，将权限改为只读（readonly）
```









## 4、提交改变

将自己修改好的镜像提交



```bash
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

docker commit -a "zouyu" -m "shouye nihao" 26  zouyunginx:v1.0

#docker commit -a 作者  -m 提交内容 容器id 镜像名:版本

```

注: 其他配置参数可以参考 docker commit --help

![image-20210930140132239](https://gitee.com/zouyu0310/images/raw/master/img/20210930140132.png)



可以直接运行提交修改好的镜像，名字后面带版本 如果不带会报最新版本错误

````
 docker run --name=zouyunihao -d -p 88:80 zouyunginx:v1.0
````

复习:

```
docker ps -a  # docker全部容器
docker ps  # docker正在运行容器
```







### 1、镜像传输

```bash
# 将镜像保存成压缩包-- 真正的文件
docker save -o abc.tar guignginx:v1.0

# 别的机器加载这个镜像
docker load -i abc.tar


# 离线安装
```



```
[root@192 ~]# docker save --help

Usage:  docker save [OPTIONS] IMAGE [IMAGE...]

Save one or more images to a tar archive (streamed to STDOUT by default)

Options:
  -o, --output string   Write to a file, instead of STDOUT
```





## 5、推送远程仓库

推送镜像到docker hub；应用市场



```bash
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
# 把旧镜像的名字，改成仓库要求的新版名字
docker tag guignginx:v1.0 leifengyang/guignginx:v1.0

# 登录到docker hub
docker login       


docker logout（推送完成镜像后退出）

# 推送
docker push leifengyang/guignginx:v1.0


# 别的机器下载
docker pull leifengyang/guignginx:v1.0
```



## 6、补充

```bash
# 查看日志
docker logs 容器名/id   排错

# 进入容器
docker exec -it 容器id /bin/bash


# docker 经常修改nginx配置文件
docker run -d -p 80:80 \
-v /data/html:/usr/share/nginx/html:ro \
-v /data/conf/nginx.conf:/etc/nginx/nginx.conf \
--name mynginx-02 \
nginx

#例子:
docker run -d -p 87:80 -v /data/html:/usr/share/nginx/html:ro -v /data/conf/nginx.conf:/etc/nginx/nginx.conf --name mynginx-02 nginx
# 此时启动会报错,主机nginx.conf下不存在配置, nginx.conf为文件夹

#把运行正常的容器指定位置的东西复制出来 
docker cp 5eff66eec7e1:/etc/nginx/nginx.conf  /data/conf/nginx.conf
#反向写:  也可以把外面的内容复制到容器里面
docker cp  /data/conf/nginx.conf  5eff66eec7e1:/etc/nginx/nginx.conf
```



```
# 注意:如果之前启动失败的容器也会存在,只是没运行罢了 记得删除
```







# 进阶实战

小结： 之前的操作：

docker hub下载镜像，下载完成后run--容器





## 1、编写自己的应用

编写一个HelloWorld应用

https://start.spring.io/



示例代码：  https://gitee.com/leifengyang/java-demo.git





## 2、将应用打包成镜像

编写Dockerfile将自己的应用打包镜像



### 1、以前

Java为例

- SpringBoot打包成可执行jar
- 把jar包上传给服务

- 服务器运行java -jar











### 2、现在

所有机器都安装Docker，任何应用都是镜像，所有机器都可以运行





### 3、怎么打包-Dockerfile



```dockerfile
FROM openjdk:8-jdk-slim
LABEL maintainer=leifengyang

COPY target/*.jar   /app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
```



```bash
docker build -t java-demo:v1.0 .
```



思考：

每个应用每次打包，都需要本地编译、再上传服务器、再进行docker构建，如果有1000个应用要打包镜像怎么办？有没有更好的方式？







## 3、启动容器

启动应用容器



```bash
docker run -d -p 8080:8080 --name myjava-app java-demo:v1.0 
```



分享镜像

```bash
# 登录docker hub
docker login

#给旧镜像起名
docker tag java-demo:v1.0  leifengyang/java-demo:v1.0

# 推送到docker hub
docker push leifengyang/java-demo:v1.0

# 别的机器
docker pull leifengyang/java-demo:v1.0

# 别的机器运行
docker run -d -p 8080:8080 --name myjava-app java-demo:v1.0 
```











## 4、部署中间件

部署一个Redis+应用，尝试应用操作Redis产生数据



```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

#redis使用自定义配置文件启动

docker run -v /data/redis/redis.conf:/etc/redis/redis.conf \
-v /data/redis/data:/data \
-d --name myredis \
-p 6379:6379 \
redis:latest  redis-server /etc/redis/redis.conf
```
