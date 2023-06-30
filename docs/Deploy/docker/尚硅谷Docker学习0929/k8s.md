

# k8s

---

# 安装docker容器环境

### 1、移除以前docker相关包

```bash
yum remove docker *
```

### 2、配置yum源(注意如果使用多窗口命令行控制软件需要逐一执行,不可以统一执行 因为有分隔符)

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

#以下是在安装k8s的时候使用 使用20.10.7版本 
yum install -y docker-ce-20.10.7 docker-ce-cli-20.10.7  containerd.io-1.4.6
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

检查: 查看是否配置了加速镜像地址

```
docker info
```



![image-20211006180647421](https://gitee.com/zouyu0310/images/raw/master/img/20211006180654.png)

至此,docker环境就安装完毕



-------











# 3、kubeadm创建集群

请参照以前Docker安装。先提前为所有机器安装Docker

## 1、安装kubeadm

- 一台兼容的 Linux 主机。Kubernetes 项目为基于 Debian 和 Red Hat 的 Linux 发行版以及一些不提供包管理器的发行版提供通用的指令
- 每台机器 2 GB 或更多的 RAM （如果少于这个数字将会影响你应用的运行内存)

- 2 CPU 核或更多
- 集群中的所有机器的网络彼此均能相互连接(公网和内网都可以)

- - **设置防火墙放行规则**

- 节点之中不可以有重复的主机名、MAC 地址或 product_uuid。请参见[这里](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#verify-mac-address)了解更多详细信息。

- - **设置不同hostname**

- 开启机器上的某些端口。请参见[这里](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports) 了解更多详细信息。

- - **内网互信**

- 禁用交换分区。为了保证 kubelet 正常工作，你 **必须** 禁用交换分区。

- - **永久关闭**

- ![](https://gitee.com/zouyu0310/images/raw/master/img/20211006181809.png)

Swap 为0,0,0 



### 1、基础环境

所有机器执行以下操作

```bash
#各个机器设置自己的主机名
hostnamectl set-hostname xxxx
# 查看主机名
hostname

# 将 SELinux 设置为 permissive 模式（相当于将其禁用）
#临时禁用
sudo setenforce 0 
# 永久禁用
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

#关闭swap
swapoff -a  
sed -ri 's/.*swap.*/#&/' /etc/fstab

#允许 iptables 检查桥接流量
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF

# 让以上的配置生效,可查看到linux内核中启用的规则
sudo sysctl --system
```

到此为止,每一台服务器的预备环境准备完毕





### 2、安装kubelet、kubeadm、kubectl





```bash
# 配置k8s下载源

cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
   http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF

#下载三大件
sudo yum install -y kubelet-1.20.9 kubeadm-1.20.9 kubectl-1.20.9 --disableexcludes=kubernetes
#启动kubelet (厂长)
sudo systemctl enable --now kubelet
```

kubelet 现在每隔几秒就会重启，因为它陷入了一个等待 kubeadm 指令的死循环

```
systemctl status kubelet
```



## 2、使用kubeadm引导集群



### 1、下载各个机器需要的镜像

```bash
#在 master节点执行下述语句,创建images.sh脚本
# 为了方便,可以在其他节点也安装
sudo tee ./images.sh <<-'EOF'
#!/bin/bash
images=(
kube-apiserver:v1.20.9
kube-proxy:v1.20.9
kube-controller-manager:v1.20.9
kube-scheduler:v1.20.9
coredns:1.7.0
etcd:3.4.13-0
pause:3.2
)
for imageName in ${images[@]} ; do
docker pull registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images/$imageName
done
EOF
# 添加权限,并执行脚本 下载所需镜像
chmod +x ./images.sh && ./images.sh
```

![image-20211006232548326](https://gitee.com/zouyu0310/images/raw/master/img/20211006232548.png)

### 2、初始化主节点

```bash
#所有机器添加master的 域名映射，以下需要修改为自己的ip
# hosts文件添加maste的域名
echo "192.168.152.134  cluster-endpoint" >> /etc/hosts
#在其他节点添加好master域名后 ping 域名能通就说明配置成功


#主节点初始化(只在主节点运行)
#注: apiserver-advertise-address 后为自己master的ip
# control-plane-endpoint后为自己定义的域名
#image-repository 镜像仓库

kubeadm init \
--apiserver-advertise-address=192.168.152.134 \
--control-plane-endpoint=cluster-endpoint \
--image-repository registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images \
--kubernetes-version v1.20.9 \
--service-cidr=10.96.0.0/16 \
--pod-network-cidr=192.168.0.0/16

#如果修改service-cidr和-pod-network-cidr所有网络范围不重叠
```

注意:产生如下报错说明服务器配置太差

```
error execution phase preflight: [preflight] Some fatal errors occurred:
        [ERROR NumCPU]: the number of available CPUs 1 is less than the required 2
        [ERROR Mem]: the system RAM (972 MB) is less than the minimum 1700 MB
```

如果成功会显示:

```bash
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now join any number of control-plane nodes by copying certificate authorities
and service account keys on each node and then running the following as root:

  kubeadm join cluster-endpoint:6443 --token 4r7apl.vrg934ajnfso0viz \
    --discovery-token-ca-cert-hash sha256:43cbb9f4932ff9a6c9c2baf26c2ae744367f15031214cc901dc13d46bdf55b2a \
    --control-plane 

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join cluster-endpoint:6443 --token 4r7apl.vrg934ajnfso0viz \
    --discovery-token-ca-cert-hash sha256:43cbb9f4932ff9a6c9c2baf26c2ae744367f15031214cc901dc13d46bdf55b2a 
```



k8s命令小结:

```bash
#查看集群所有节点
kubectl get nodes

#根据配置文件，给集群创建资源
kubectl apply -f xxxx.yaml

#查看集群部署了哪些应用？
# docker中:
docker ps   ===(等同)   kubectl get pods -A
# 运行中的应用在docker里面叫容器，在k8s里面叫Pod
kubectl get pods -A
```



### 3、根据提示继续

master成功后提示如下：

![img](https://gitee.com/zouyu0310/images/raw/master/img/20211006181254.png)



#### 1、设置.kube/config



复制初始化成功给出的命令,如

```
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
```







#### 2、安装网络组件 --master节点运行

[calico官网](https://docs.projectcalico.org/getting-started/kubernetes/self-managed-onprem/onpremises#install-calico-with-kubernetes-api-datastore-more-than-50-nodes)

```bash
#下载calico配置文件
curl https://docs.projectcalico.org/manifests/calico.yaml -O

# kubectl 应用某个文件的配置
kubectl  apply -f calico.yaml
```

![image-20211007231201067](https://gitee.com/zouyu0310/images/raw/master/img/20211007231208.png)

![image-20211007231314435](https://gitee.com/zouyu0310/images/raw/master/img/20211007231314.png)

目前位置master节点 总部已经部署完毕

### 4、加入node节点--按照master初始化成功给出的提示 如

```bash
kubeadm join cluster-endpoint:6443 --token 4r7apl.vrg934ajnfso0viz \
    --discovery-token-ca-cert-hash sha256:43cbb9f4932ff9a6c9c2baf26c2ae744367f15031214cc901dc13d46bdf55b2a 
```

以上参考命令24小时之内有效



新令牌

```
kubeadm token create --print-join-command
```



***高可用部署方式，也是在这一步的时候，使用添加主节点的命令即可\***

如果加入节点等待时间较长,参考k8s api server不可达

```
https://blog.csdn.net/YouMing_Li/article/details/117553658
```

成功截图:

![image-20211008192421052](https://gitee.com/zouyu0310/images/raw/master/img/20211008192428.png)



### 5、验证集群



- 验证集群节点状态---在master节点

- - kubectl get nodes

![image-20211008192457367](https://gitee.com/zouyu0310/images/raw/master/img/20211008192457.png)



实时监控节点 都是running才可以

```
kubectl get pod -A -w
```

![image-20211008195838768](https://gitee.com/zouyu0310/images/raw/master/img/20211008195839.png)

### 6、部署dashboard

#### 1、部署

kubernetes官方提供的可视化界面

https://github.com/kubernetes/dashboard

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml
```

没办法下载的话 直接把yaml下载下来

```bash
# 下载wget
yum install -y wget
# wget 下载
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml
```



实在不行就直接创建文件,复制下方

```
vi dashboard.yaml
```



```yaml
# Copyright 2017 The Kubernetes Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

apiVersion: v1
kind: Namespace
metadata:
  name: kubernetes-dashboard

---

apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard

---

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  ports:
    - port: 443
      targetPort: 8443
  selector:
    k8s-app: kubernetes-dashboard

---

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-certs
  namespace: kubernetes-dashboard
type: Opaque

---

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-csrf
  namespace: kubernetes-dashboard
type: Opaque
data:
  csrf: ""

---

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-key-holder
  namespace: kubernetes-dashboard
type: Opaque

---

kind: ConfigMap
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-settings
  namespace: kubernetes-dashboard

---

kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
rules:
  # Allow Dashboard to get, update and delete Dashboard exclusive secrets.
  - apiGroups: [""]
    resources: ["secrets"]
    resourceNames: ["kubernetes-dashboard-key-holder", "kubernetes-dashboard-certs", "kubernetes-dashboard-csrf"]
    verbs: ["get", "update", "delete"]
    # Allow Dashboard to get and update 'kubernetes-dashboard-settings' config map.
  - apiGroups: [""]
    resources: ["configmaps"]
    resourceNames: ["kubernetes-dashboard-settings"]
    verbs: ["get", "update"]
    # Allow Dashboard to get metrics.
  - apiGroups: [""]
    resources: ["services"]
    resourceNames: ["heapster", "dashboard-metrics-scraper"]
    verbs: ["proxy"]
  - apiGroups: [""]
    resources: ["services/proxy"]
    resourceNames: ["heapster", "http:heapster:", "https:heapster:", "dashboard-metrics-scraper", "http:dashboard-metrics-scraper"]
    verbs: ["get"]

---

kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
rules:
  # Allow Metrics Scraper to get metrics from the Metrics server
  - apiGroups: ["metrics.k8s.io"]
    resources: ["pods", "nodes"]
    verbs: ["get", "list", "watch"]

---

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kubernetes-dashboard
subjects:
  - kind: ServiceAccount
    name: kubernetes-dashboard
    namespace: kubernetes-dashboard

---

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kubernetes-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubernetes-dashboard
subjects:
  - kind: ServiceAccount
    name: kubernetes-dashboard
    namespace: kubernetes-dashboard

---

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: kubernetes-dashboard
  template:
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
    spec:
      containers:
        - name: kubernetes-dashboard
          image: kubernetesui/dashboard:v2.3.1
          imagePullPolicy: Always
          ports:
            - containerPort: 8443
              protocol: TCP
          args:
            - --auto-generate-certificates
            - --namespace=kubernetes-dashboard
            # Uncomment the following line to manually specify Kubernetes API server Host
            # If not specified, Dashboard will attempt to auto discover the API server and connect
            # to it. Uncomment only if the default does not work.
            # - --apiserver-host=http://my-address:port
          volumeMounts:
            - name: kubernetes-dashboard-certs
              mountPath: /certs
              # Create on-disk volume to store exec logs
            - mountPath: /tmp
              name: tmp-volume
          livenessProbe:
            httpGet:
              scheme: HTTPS
              path: /
              port: 8443
            initialDelaySeconds: 30
            timeoutSeconds: 30
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            runAsUser: 1001
            runAsGroup: 2001
      volumes:
        - name: kubernetes-dashboard-certs
          secret:
            secretName: kubernetes-dashboard-certs
        - name: tmp-volume
          emptyDir: {}
      serviceAccountName: kubernetes-dashboard
      nodeSelector:
        "kubernetes.io/os": linux
      # Comment the following tolerations if Dashboard must not be deployed on master
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule

---

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: dashboard-metrics-scraper
  name: dashboard-metrics-scraper
  namespace: kubernetes-dashboard
spec:
  ports:
    - port: 8000
      targetPort: 8000
  selector:
    k8s-app: dashboard-metrics-scraper

---

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: dashboard-metrics-scraper
  name: dashboard-metrics-scraper
  namespace: kubernetes-dashboard
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: dashboard-metrics-scraper
  template:
    metadata:
      labels:
        k8s-app: dashboard-metrics-scraper
      annotations:
        seccomp.security.alpha.kubernetes.io/pod: 'runtime/default'
    spec:
      containers:
        - name: dashboard-metrics-scraper
          image: kubernetesui/metrics-scraper:v1.0.6
          ports:
            - containerPort: 8000
              protocol: TCP
          livenessProbe:
            httpGet:
              scheme: HTTP
              path: /
              port: 8000
            initialDelaySeconds: 30
            timeoutSeconds: 30
          volumeMounts:
          - mountPath: /tmp
            name: tmp-volume
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            runAsUser: 1001
            runAsGroup: 2001
      serviceAccountName: kubernetes-dashboard
      nodeSelector:
        "kubernetes.io/os": linux
      # Comment the following tolerations if Dashboard must not be deployed on master
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule
      volumes:
        - name: tmp-volume
          emptyDir: {}
```



然后应用

```
kubectl apply -f dashboard.yaml 
```

很多配置文件使用,就会产生很多应用,等待创建完成

![image-20211008200956341](https://gitee.com/zouyu0310/images/raw/master/img/20211008200956.png)

#### 2、设置访问端口



把端口暴露到机器上

```bash
kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard
```

type: ClusterIP 改为 type: NodePort



```bash
kubectl get svc -A |grep kubernetes-dashboard
## 找到端口  3w多的 ，在安全组放行
```

![image-20211008201442827](https://gitee.com/zouyu0310/images/raw/master/img/20211008201442.png)



虚拟机则 开放端口

```
1、开启防火墙 
    systemctl start firewalld

2、开放指定端口
      firewall-cmd --zone=public --add-port=31033/tcp --permanent
 命令含义：
--zone #作用域
--add-port=1935/tcp  #添加端口，格式为：端口/通讯协议
--permanent  #永久生效，没有此参数重启后失效

3、重启防火墙
      firewall-cmd --reload

4、查看端口号
netstat -ntlp   //查看当前所有tcp端口·

netstat -ntulp |grep 1935   //查看所有1935端口使用情况·

关闭防火墙 systemctl stop firewalld
```



访问： https://集群任意IP:端口      https://192.168.152.134:31033



#### 3、创建访问账号

```yaml
#创建访问账号，准备一个yaml文件； vi dash-user.yaml
# 注意: 全部粘贴 如果报错 检查配置文件第一行是否有问题
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard


# 应用  kubectl apply -f dash-user.yaml
```

![image-20211009123317721](https://gitee.com/zouyu0310/images/raw/master/img/20211009123318.png)



#### 4、令牌访问

```bash
#获取访问令牌
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

得到令牌 

```json
eyJhbGciOiJSUzI1NiIsImtpZCI6IjNMZzNyNFVhOTRuN0s2cVBpZmpFREt5RGFDQ0xjM2hjNFY1bDZ3WlF4SDgifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXE2OWhmIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIyYmEzMTRkZS00NmVkLTQyMzUtODg4MC02OGJjOTcxMGZhNjkiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.Wb3Bg-Gp-yiyisybRCEYArhj8E5j8XcZnCsmELPsJYlrzV367sfmMzp17_LmsC3vjyOyWoEux3PcYn5lTnxzbcVvpbEWThdbkPyx7c4z6wqTcuj-B2UKteHw6QAnNJdhH3hEJEdUQAo3L961uz-TNFNDzbyt_-hZEtOyRBYS8aysL2a5Wyy77f10TN19Pn2kyZRq_lseOXIJRpYZlARe107PaLmEelvBwZPKSj93XukKRkpk7sD8Pe_AFc9jJzBa6ciQfRJ37OVQL3vDZXQmDuCsdCLCytKFycP2wJod-QixiPmC4mKSW2IqSvn2Mj57iAOBrUuOgKfjswVtZNpSMQ
```

#### 5、界面

![image-20211009123607809](https://gitee.com/zouyu0310/images/raw/master/img/20211009123608.png)
