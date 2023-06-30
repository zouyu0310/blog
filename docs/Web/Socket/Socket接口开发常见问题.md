



## Java网络编程之通过代码实现Socket通信

参考文档: 

https://blog.csdn.net/qq_35427589/article/details/124497008



## **Nginx(三)支持Socket转发过程详解**



参考文档

https://blog.51cto.com/u_13561776/3691511

https://cloud.tencent.com/developer/article/1900241



```
worker_processes  1;
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}
stream{
    upstream abc{
        server 172.18.8.196:11911;
    }
    server{
        listen 11911;
        proxy_pass abc;
    }
}

```

