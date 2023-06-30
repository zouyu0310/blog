# 高级02 DockerFile 

Dockerfile是用来构建Docker镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。

![image-20220108010530355](https://gitee.com/zouyu0310/images/raw/master/img/20220108010530.png)

构建三步骤

1. 编写Dockerfile文件
2. docker build命令构建镜像
3. docker run依镜像运行容器实例

## DockerFile构建过程解析

### Dockerfile内容基础知识

1：每条保留字指令都必须为大写字母且后面要跟随至少一个参数

2：指令按照从上到下，顺序执行

3：#表示注释

4：每条指令都会创建一个新的镜像层并对镜像进行提交



### Docker执行Dockerfile的大致流程

（1）docker从基础镜像运行一个容器

（2）执行一条指令并对容器作出修改

（3）执行类似docker commit的操作提交一个新的镜像层

（4）docker再基于刚提交的镜像运行一个新容器(形成多分层)

（5）执行dockerfile中的下一条指令直到所有指令都执行完成



###  小总结 -- 照方拿药

从应用软件的角度来看，Dockerfile、Docker镜像与Docker容器分别代表软件的三个不同阶段，
*  Dockerfile是软件的原材料
*  Docker镜像 是软件的交付品
*  Docker容器则可以认为是软件镜像的运行态，也即依照镜像运行的容器实例
Dockerfile面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可，合力充当Docker体系的基石。



![image-20220108011138670](https://gitee.com/zouyu0310/images/raw/master/img/20220108011138.png)

1 Dockerfile，需要定义一个Dockerfile，Dockerfile定义了进程需要的一切东西。Dockerfile涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计namespace的权限控制)等等;

2 Docker镜像，在用Dockerfile定义一个文件之后，docker build时会产生一个Docker镜像，当运行 Docker镜像时会真正开始提供服务;

3 Docker容器，容器是直接提供服务的。



## DockerFile常用保留字指令

![image-20220108011606721](https://gitee.com/zouyu0310/images/raw/master/img/20220108011606.png)





# 案例  自定义镜像mycentosjava8
1. 要求:Centos7镜像具备vim+ifconfig+jdk8

2. 编写:DockerFile --注意：大写字母D

```
# FROM基于哪个镜像开工
FROM centos
MAINTAINER zzyy<zzyybs@126.com>

# 镜像进入的路径 设置的环境变量,可以在后续的任何RUN指令中使用
ENV MYPATH /usr/local
# 引用上述路径,WORKDIR 终端默认登陆的进来工作目录，一个落脚点
WORKDIR $MYPATH
 
# 第一个功能: 安装vim编辑器,RUN也就是在linux系统下执行的命令
RUN yum -y install vim
# 第二个功能:安装ifconfig命令查看网络IP
RUN yum -y install net-tools
# 第三个功能:安装java8及lib库
RUN yum -y install glibc.i686
RUN mkdir /usr/local/java
#ADD 是相对路径jar,把jdk-8u261-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置
ADD jdk-8u261-linux-x64.tar.gz /usr/local/java/
#配置java环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_261
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH
 
EXPOSE 80
 
CMD echo $MYPATH
CMD echo "success--------------ok"
CMD /bin/bash
```



3. 构建:

```
docker build -t centosjava8:1.5 .

# 注意，上面TAG后面有个空格，有个点
```



![image-20220129000334350](https://gitee.com/zouyu0310/images/raw/master/img/20220129000341.png)



dockerfile中from引用了centos镜像，但是本地没有会自动下载。



4. 运行: 验证是否三个功能正常

```
docker run -it centosjava8:1.5 /bin/bash
```

```
java -verison 
# (此处可能出错,一定检查提供jdk和路径名称是否一致)
# 补充: linux 环境变量文件: /etc/profile 
ifconfig
vim filename
```

