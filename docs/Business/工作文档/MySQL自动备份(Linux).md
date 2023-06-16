# MySQL自动备份(Linux)



**创建备份目录：**

```
cd /home
mkdir backup
cd backup/
```

**创建备份Shell脚本:**

注意把以下命令中的DatabaseName换为实际的数据库名称；

当然，你也可以使用其实的命名规则！

```
vi bkDatabaseName.sh
```



输入/粘贴以下内容：

```
#!/bin/bash
mysqldump -uusername -ppassword DatabaseName > /home/backup/DatabaseName_$(date +%Y%m%d_%H%M%S).sql
```

对备份进行压缩（可选）：

```
#!/bin/bash
mysqldump -uusername -ppassword DatabaseName | gzip > /home/backup/DatabaseName_$(date +%Y%m%d_%H%M%S).sql.gz
```

注意：

把 username 替换为实际的用户名；

把 password 替换为实际的密码；

把 DatabaseName 替换为实际的数据库名；



**添加可执行权限：**

```
chmod u+x bkDatabaseName.sh
```



添加可执行权限之后先执行一下，看看脚本有没有错误，能不能正常使用；

./bkDatabaseName.sh

**添加计划任务**

检测或安装 crontab

确认crontab是否安装：

执行 crontab 命令如果报 command not found，就表明没有安装

```
yum -y install vixie-cron
```



添加计划任务

执行命令：

```
crontab -e
```

这时就像使用vi编辑器一样，可以对计划任务进行编辑。

输入以下内容并保存：

```
*/1 * * * * /home/backup/bkDatabaseName.sh
```



具体是什么意思呢？

意思是每一分钟执行一次shell脚本“/home/backup/bkDatabaseName.sh”。



```
0 1 * * * /home/backup/bkDatabaseName.sh
```

每天晚上一点执行。



注:https://www.jb51.net/article/122922.htm
