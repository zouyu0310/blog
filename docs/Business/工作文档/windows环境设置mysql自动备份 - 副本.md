# windows环境设置mysql数据库自动备份

## 00、背景介绍

客户使用的是mysql数据库，虽然大部分数据库客户端工具都具有备份功能，但并不能做到定期自动备份；在Windows环境下，手工备份MySQL是很繁琐的，所以我们
要实现数据库的自动备份就需要一下两步：

- 利用MySQL提供的备份命令mysqldump
- 结合Windows的任务计划程序



## 01、实现步骤

### 1、编写脚本

- 说明：此方法可以不用关闭数据库，并且可以按每一天备份的时间来命名备份文件。

新建一个数据库备份文件的存放目录，如：D:\mysql_backup
注意：目录地址中不要带空格！
新建一个批处理文件，如：mysql_backup_tool.bat，文件内容如下：

注: 查询mysql安装路径

```
show variables like "%char%";
```

D:\Environment\mysql-8.0.25\mysql-8.0.25-winx64\bin

![image-20220210085655478](https://gitee.com/zouyu0310/images/raw/master/img/20220210085702.png)



```bash
rem ******MySQL backup start******
    @echo off
    
    ::删除一周前的备份数据
    forfiles /p "d:\mysql_backup" /m backup_*.sql -d -7 /c "cmd /c del /f @path"
    
    ::设置时间变量
    set "Ymd=%date:~,4%%date:~5,2%%date:~8,2%" 
    
    ::进入mysql安装目录的bin目录下cd D:\Environment\mysql-8.0.25\mysql-8.0.25-winx64\bin\
    
    ::执行备份操作
    D:\Environment\mysql-8.0.25\mysql-8.0.25-winx64\bin\mysqldump --opt --single-transaction=TRUE --user=root --password=Qianyan89892528 --host=127.0.0.1 --protocol=tcp --port=3306 --default-character-set=utf8 --single-transaction=TRUE --routines --events "nacos_config" > d:\mysql_backup\backup_%Ymd%.sql
    
    @echo on
    rem ******MySQL backup end******
```



```
1. forfiles 为删除过期文件的命令，-d -7 删除7天的文件；
2. 关于时间参数的参考：
		%date:~0,10%      //提取年月日信息
        %date:~-3%         //提取星期几信息
        %time:~0,5%         //提取时间中的时和分
        %time:~0,-3%       //提取时和分和秒信息
3. mysqldump 为MySQL提供的备份命令，该命令所在目录为MySQL安装目录下的bin文件夹中，此处直接使用该命令的前提是该命令所在bin文件夹已被设置为系统环境变量，如未设置，则要写全路径；
4. –user=root 为 MySQL 用户名；
5. –password=root 为 MySQL 密码；
6. –host=127.0.0.1 为 MySQL 主机名；
7. “nacos_config” 为要备份的数据库的名称；
8. backup_%Ymd%.sql 是根据当前时间规则生成备份文件的名称。
```



## 02、添加定时任务

我们进入服务器管理面板，点击右上角菜单栏中的“工具”，选择其中的“任务计划程序”：

控制面板 -- 管理工具--任务计划程序



![image-20220210091359548](https://gitee.com/zouyu0310/images/raw/master/img/20220210091359.png)

![image-20220210092256969](https://gitee.com/zouyu0310/images/raw/master/img/20220210092257.png)

![image-20220210091450286](https://gitee.com/zouyu0310/images/raw/master/img/20220210091450.png)



![image-20220210092324372](https://gitee.com/zouyu0310/images/raw/master/img/20220210092324.png)


![image-20220210091517605](https://gitee.com/zouyu0310/images/raw/master/img/20220210091517.png)



![image-20220210092119685](https://gitee.com/zouyu0310/images/raw/master/img/20220210092119.png)



完成这些步骤后，windows会给我们看一下整个任务的概述信息：

![image-20220210092357654](https://gitee.com/zouyu0310/images/raw/master/img/20220210092357.png)



确定无误之后，点击“完成”就可以了。此时我们就会看到在Windows的任务列表里，多了一条新的任务：



![image-20220210092504655](https://gitee.com/zouyu0310/images/raw/master/img/20220210092504.png)

至此，在Windows环境下自动备份MySQL的设置就全部完成了。

顺便展示下备份测试结果：(由于第一次经验不足，导致备份失败，修复完问题 9:50成功备份)

注意： 如果测试脚本是否可行，可直接点击进行查看数据是否正常备份



![image-20220210095022264](https://gitee.com/zouyu0310/images/raw/master/img/20220210095022.png)
