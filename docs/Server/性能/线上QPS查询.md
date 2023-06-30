---
title: 
date: 2023年6月20日13:41:40
---



---

```
tail -f  2023-06-20_00.4.log | grep pms |cut -d " " -f2|cut -d ':' -f3|uniq -c
```







参考文档

https://blog.csdn.net/exceptional_derek/article/details/47617397?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-47617397-blog-116595205.235%5Ev38%5Epc_relevant_sort_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-47617397-blog-116595205.235%5Ev38%5Epc_relevant_sort_base2&utm_relevant_index=6



## 查询nginx请求日志



```
tail -500 access.log | grep pms | awk '{print substr($4,2,20)}'| uniq -c
```

参考:

https://blog.csdn.net/weixin_42119281/article/details/116595205
