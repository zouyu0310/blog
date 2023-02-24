## 110_Nacos集群配置(下)

**5.Nginx的配置，由它作为负载均衡器**

修改nginx的配置文件 - nginx.conf

```
   #nacos upstream
   upstream cluster{
           server 127.0.0.1:3333;
           server 127.0.0.1:4444;
           server 127.0.0.1:5555;

   }

```





## 单机启动

```
./startup.sh -m standalone
```

