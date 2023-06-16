# mysql 8.0.27安装

删除 

rpm -qa | grep -i mysql



rpm -e --nodeps  xx

![img](https://gitee.com/zouyu0310/images/raw/master/img/20220110150414.png)



上传文件到 /usr/local下



解压

```
tar -xvf mysql-8.0.27-1.el7.x86_64.rpm-bundle_2.tar
```





安装



rpm -ivh mysql-community-common-8.0.27-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-8.0.27-1.el7.x86_64.rpm --force --nodeps

rpm -ivh mysql-community-client-8.0.27-1.el7.x86_64.rpm  --force --nodeps

rpm -ivh mysql-community-server-8.0.27-1.el7.x86_64.rpm



查版本

mysqladmin --version

```css
mysqladmin  Ver 8.0.27 for Linux on x86_64 (MySQL Community Server - GPL)
```



my.cnf文件拷贝到服务器的 /etc 下



#### **创建目录**

l 用FTP创建即可



/data/mysql/lib/mysql

/data/mysql/log

/data/mysql/run/mysqld

/data/mysql/tmp







#### **目录授权，否则启动失败**

chown -R mysql:mysql /var

会连不上



ftp无法远程访问：执行!!!!!!!!!

chown -R root.root /var/empty/sshd

chmod 744 /var/empty/sshd

service sshd restart





#### **初始化数据库**

mysqld --initialize --console  



我没报错 !



#### **启动服务**

systemctl start mysqld



报JOB错!!!!执行: 



chown -R mysql:mysql /  



会连不上

一定在执行

ftp无法远程访问：执行!!!!!!!!!

chown -R root.root /var/empty/sshd

chmod 744 /var/empty/sshd

service sshd restart



如果root 登录不上那就执行

chown -R root:root  /  



------

#### 

#### **查看初始化密码**

cat /data/mysql/log/mysqld.log | grep password

#### **登录mysql**

mysql -u root -p 



输入上一步查询到的初始化密码 输入时候看不见东西 输完敲回车即可





#### **修改初始密码**

ALTER USER root@localhost IDENTIFIED  BY 'Qianyan89892528'; 

flush privileges; 

use mysql;

\#修改加密规则  

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Qianyan89892528'; 

ALTER USER 'root'@'localhost' IDENTIFIED BY 'Qianyan89892528' PASSWORD EXPIRE NEVER; #更新一下用户的密码  

update user set host = '%' where user ='root'; 

\#刷新权限 

FLUSH PRIVILEGES;