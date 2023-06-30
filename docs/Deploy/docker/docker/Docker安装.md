#  Docker安装

![image-20220105234131428](https://gitee.com/zouyu0310/images/raw/master/img/20220105234138.png)





## 正式安装

> 1. 确定你是CentOS7及以上版本
>
> ```
> cat /etc/redhat-release
> ```
>
> 2. 卸载旧版本
>
> 3. yum安装gcc相关
>
>    ```
>    yum -y install gcc
>    yum -y install gcc-c++
>    ```
>
>    
>
> 4. 安装需要的软件包
>
>    ```
>    yum install -y yum-utils
>    ```
>
>    
>
> 5. 设置stable镜像仓库 -- 注意: 一定使用阿里云镜像
>
>    ```
>    yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
>    ```
>
>    
>
> 6. 更新yum软件包索引 -- 更新yum为最新
>
>    ```
>    yum makecache fast
>    ```
>
>    
>
> 7. 安装DOCKER CE
>
>    ```
>    yum -y install docker-ce docker-ce-cli containerd.io
>    ```
>
>    
>
> 8. 启动docker
>
>    ```
>    systemctl start docker # 启动
>    systemctl status docker # 查看docker运行状态
>    ```
>
> 9. 测试
>
>    ```
>    docker version
>    ```
>
>    ```
>    docker run hello-world #运行docker下载后自带的镜像
>    ```
>
> 10. 卸载
>
>     ```
>     systemctl stop docker 
>     yum remove docker-ce docker-ce-cli containerd.io
>     rm -rf /var/lib/docker
>     rm -rf /var/lib/containerd
>     ```
>
>     



## 阿里云镜像加速

1.  阿里云获得加速器地址连接(选择容器镜像服务)
2.  获取加速器地址 :

```
https://64l2a5bw.mirror.aliyuncs.com
```

3. 直接粘上

```
#创建docker文件夹
mkdir -p /etc/docker

#新增配置
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://64l2a5bw.mirror.aliyuncs.com"]
}
EOF
```

4. 重启docker

```
systemctl daemon-reload

systemctl restart docker
```



以上操作完成配置后 拉取镜像会畅通无阻

