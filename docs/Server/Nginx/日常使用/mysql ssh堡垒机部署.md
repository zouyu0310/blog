

## 介绍

跳板机(Jump Server)，也称堡垒机，是一类可作为跳板批量操作远程设备的网络设备，是系统管理员或运维人员常用的操作平台之一。

正常的登录流程
使用ssh命令登录跳板机；
登录跳板机成功后，在跳板机分配的终端中使用ssh命令再登录开发机，跳板机和开发机之间采用带密码的ssh验证，因此需要输入ssh私钥的密码。

本地PC  ->  跳板机 -> 开发机



## 背景

A服务器  B服务器  C服务器mysql

现在mysql服务器C只能通过内网访问，B服务器就能通过内网连接访问到mysql

A服务器无法直接连接C服务器mysql，所以要通过跳板机(跳板机指的是B服务器)连接mysql





实现：

在A服务器下面执行命令

ssh -p {ssh_port} -i {rsa_file} -fNL {local_port}:{mysql_ip}:{mysql_port} {ssh_user}@{ssh_ip}
ssh -p 22 -i ./id_rsa_jump -fNL 33060:mysql_ip:3306 jump@jump_ip # 实例

命令详解：
-p {ssh_port}: 指定跳板机器的ssh服务的端口
-i {rsa_file}:指定连接跳板机的ssh公钥，由跳板机的ssh服务端生成，如果不指定公钥或者公钥验证失败则会弹出密码进行登录。
-f:需进行ssh认证
-N:只进行端口转发，不执行命令
-L:指定连接服务的格式 [bind_address:]port:host:hostport
{local_port}：本地监听的端口
{mysql_ip}：转发到的mysql的ip或域名
{mysql_port}：转发到的mysql的端口
{ssh_port}：跳板机的
{ssh_user}：跳板机的ssh用户名(如果为rsa登录，则ras对应的用户名和ssh_user一致)
{ssh_ip}：跳板机的ip或域名
A服务器执行以上命令就可以连接远程MySQL了





## navicat连接



1. 目标数据库的域名/IP,端口，用户名，密码
2. 这时候不要点OK！选择SSH这个tab
3. 选中User SSH Tunnel；填写跳板机域名/IP，用户名，密码(注意：端口22不要变)
4. 点击OK，保存链接，打开链接完成通过ssh通道连接跳板机达到连接数据库的目的











## 参考文章

```
nginx配置tcp转发: https://blog.csdn.net/ls909074489/article/details/113613563
```



安装stream组件

编译时追加 

```
--with-stream 

如: ./configure --with-http_stub_status_module --with-http_ssl_module --with-stream 
```

