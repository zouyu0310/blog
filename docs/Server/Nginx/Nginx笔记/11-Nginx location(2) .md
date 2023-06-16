



nginx location 常用配置示例

- [root](https://blog.csdn.net/qq_40225004/article/details/119979392#root)
- [alias](https://blog.csdn.net/qq_40225004/article/details/119979392#alias)
- [rewrite](https://blog.csdn.net/qq_40225004/article/details/119979392#rewrite)
- [proxy_pass](https://blog.csdn.net/qq_40225004/article/details/119979392#proxy_pass)



## 1、location 匹配规则

- [官方文档 location](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)

```
location = / {
    [ configuration A ]
}

location / {
    [ configuration B ]
}

location /documents/ {
    [ configuration C ]
}

location ^~ /images/ {
    [ configuration D ]
}

location ~* \.(gif|jpg|jpeg)$ {
    [ configuration E ]
}
# "/"请求将匹配 configuration A
# "/index.html"请求将匹配 configuration B
# "/documents/document.html"请求将匹配 configuration C
# "/images/1.gif"请求将匹配 configuration D
# "/documents/1.jpg"请求将匹配 configuration E

```

**以下面这个为例:**

```
location /a {}  # 1

location /b {}  # 2

location ^~ /a/b {}  # 3

location ~* /a.* {}  # 4

location ~* /.* {}  # 5

location = /a/b {}  # 6

```

匹配规则是 :

例如，请求是 " /a/b "

1、完全匹配优先级最高 ( " = /a/b " ，编号6 )，匹配完成结束搜索。

2、如果没有完全匹配，优先找最长匹配前缀 ( 也就是 " /a/b "，编号3 ) ，再看 " /a/b " 前面有没有 ^~ 修辞

3、如果有 ^~ 修辞，那匹配结束，结果是 " /a/b "

4、如果没有 ^~ 修辞，还将继续匹配正则，正则匹配按照从上到下的顺序，如上面 编号4和5都能满足匹配规则，但是4在上面，所以结果是编号4，结束匹配

5、如果所有正则都没匹配上，那结果还是 " /a/b "，编号3





具体挑几种情况说明：

case 1：

```
location /a {}

location /a/ {}

location /b {}

```

请求 " /a/b " 会匹配到第二个" /a/ " ，因为是最长匹配前缀

case 2 ：

```
location /a/b {}

location /a/ {}

location ~ /a.* {}

```

请求 " /a/b " 会匹配到第三个 " ~ /a.* "，因为虽然首先匹配最长前缀是 " /a/b "，但它没有 ^~ 结束正则，所以继续正则匹配，匹配到了第三个

case 3：

```
location /a/b {}

location /a/ {}

location ~ /b.* {}

```

请求 " /a/b " 会匹配到第一个 " /a/b "，首先匹配最长前缀是 " /a/b "，它没有 ^~ 结束正则，所以尝试匹配第三个，但是匹配失败，所以还是返回 " /a/b "

case 4：

```
location /a/b {}

location ~ /.* {}

location ~ /a.* {}

```

请求 " /a/b " 会匹配到第二个 " ~ /.* "，首先匹配最长前缀是 " /a/b “，它没有 ^~ 结束正则，所以尝试匹配正则，” ~ /.* "在上面，所以先匹配它，匹配成功结束匹配

case 5：

```
location /a/b {}

location ~ /c.* {}

location ~ /d.* {}

```

请求 " /a/b " 会匹配到第一个 " /a/b "，首先匹配最长前缀是 " /a/b “，它没有 ^~ 结束正则，所以尝试匹配正则，先匹配 " ~ /c.* " 匹配失败，再匹配” ~ /d.* " 依然失败，所以结果还是 " /a/b "

case 6：

```
location ^~ /a {}

location ~ /a.* {}

```

请求 " /a/b " 会匹配到第一个 " ^~ /a/ "，因为匹配最长前缀是 " /a "，它前面有 ^~ 结束了正则匹配

case 7：

```
location ^~ /a/b {}

location ~ /a.* {}

location = /a/b {}

```

请求 " /a/b " 会匹配到第三个 " = /a/b "，因为匹配到了最长的 " /a/b "，它前面有 = 结束了整个匹配

**总结就是：完全匹配 > ^~ 最长前缀 > 正则 > 最长前缀**


另外，官方文档说的

在 0.7.1 到 0.8.41 的版本中，如果请求匹配没有“ `=`”和“ `^~`”修饰符的前缀位置，搜索也会终止并且不检查正则表达式。



## 2、http_core_module 中用的两个文件访问指令， root 和 alias

- [官方文档 alias](http://nginx.org/en/docs/http/ngx_http_core_module.html#alias)
- [官方文档 root](http://nginx.org/en/docs/http/ngx_http_core_module.html#root)



##### 1、root ：服务器实际访问路径为 root路径 ＋ location路径

```
location /a {
	root /b/; 
}
# requestURI: /a/index.html    =>     匹配服务器文件: /b/a/index.html

```

eg:

```
location /html {
	root /usr/local/nginx/;
}
# 请求:  http://${domain}/html/a.html => 匹配服务器文件: /usr/local/nginx/html/a.html
# 请求:  http://${domain}/html/www/a.html => 匹配服务器文件: /usr/local/nginx/html/www/a.html

```





##### 2、alias ：服务器实际访问路径为 alias路径 ＋ 去掉location路径后的请求路径

```
location /a/ {
alias /b/;  
}
# requestURI: /a/index.html    =>     匹配服务器文件: /b/index.html

```

eg:

```
location /html {
	alias /usr/local/nginx/;
}
# 请求:  http://${domain}/html/a.html => 匹配服务器文件: /usr/local/nginx/a.html
# 请求:  http://${domain}/html/www/a.html => 匹配服务器文件: /usr/local/nginx/www/a.html

#====================== 分割线 =======================================

location /html/www {
	alias /usr/local/nginx;
}
# 请求:  http://${domain}/html/www/a.html => 匹配服务器文件: /usr/local/nginx/a.html

```

##### 3、正则取参数

```
location ~ ^/user/(.+\.(?:gif|jpe?g|png))$ {
  alias /usr/local/nginx/$1;
}
# 请求:  http://${domain}/user/a.jpg   =>  匹配服务器文件: /usr/local/nginx/a.jpg

#====================== 分割线 =======================================

location ~ ^/user/(.+\.(?:gif|jpe?g|png))$ {
  root /usr/local/nginx/$1; #这种没啥实际作用
}
# 请求:  http://${domain}/user/a.jpg => 匹配服务器文件: /usr/local/nginx/a.jpg/user/a.jpg

```

##### 4、官方文档说

```
# 当 location 匹配指令值的最后一部分时：
# 如下这种情况下：   http://xxx/images/a.jpg     =>     /data/w3/images/a.jpg
location /images/ {
 alias /data/w3/images/;
}

# 最好是换成下面这种写法

location /images/ {
 root /data/w3;
}

```





## 3、http_rewrite_module 中的 break、if、return、rewrite、set



- [官方文档](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html)

**用一个案例介绍这几个指令的用法，我取名为： 动态路径转发**

如下代码，我想发起左边的请求，通过[nginx](https://so.csdn.net/so/search?q=nginx&spm=1001.2101.3001.7020)后实际请求右边的请求

```
请求 http://xxx/server/8000/list  经过nginx =>   实际请求  http://xxx:8000/list
请求 http://xxx/server/9000/one   经过nginx =>   实际请求  http://xxx:9000/one
请求 http://xxx/server/${port}/${param}   经过nginx =>  实际请求  http://xxx:${port}/${param}

```

那就可以这样加一个location 取出端口和参数，在nginx中重定向到 http://xxx:port / port/port/param;



```
location /server/ {
	set $port ""; 
	set $param ""; 
	if ($uri ~ "^/server/(.*)/(.*)$") {	
		set $port $1; 
		set $param $2; 
     	 rewrite ^/(.*)   http://xxx:$port/$param break; 
         # 也可以用 proxy_pass 加 break; 如下
         # proxy_pass   http://139.9.137.157:$port/$param;
         # break; (这里的break不能像rewrite里的一样放屁股上)
	}
    return 400; 
}

```

简单介绍一下这个配置的意思

例如，请求的URL 为 http://xxx/server/9000/one

1、定义两个变量 port 和 param 都为空串

2、如果请求的uri 匹配 这样的正则，取出两个参数，第一个参数为 9000，第二个参数为 one

3、将参数1 (9000) 赋值给变量 port ， 将参数2 (one) 赋值给变量 param

4、重定向整个路径到http://xxx:p o r t / port/port/param 也就是（ http://xxx:9000/one），break表示停止处理当前指令集，也就是不再进行后续的匹配等操作

5、如果上面的if 条件不满足，就返回 400 状态码

```
location /server/ {
	set $port ""; # 定义变量 port
	set $param ""; # 定义变量 param  都为空串
	if ($uri ~ "^/server/(.*)/(.*)$") {	# 如果请求的uri 匹配 这样的正则，取出两个参数
		set $port $1; # 将参数1，赋值给port
		set $param $2; # 将参数2，赋值给param
     	rewrite ^/(.*)   http://xxx:$port/$param break; # 重定向整个路径到http://localhost:$port/$param，break表示停止处理当前指令集，也就是不再进行后续的匹配等操作
	}
    return 400; # 如果uri没有匹配上上面的正则，返回400 状态码
}

```

**第二个案例演示一下文件访问**

假如我的 nginx.conf 中 已经有了如下的location



```
location /html {
	root /usr/local/nginx/;
}

```

按照root指令的规则，访问 http://xxxxxx/html/a.html 实际就能访问到 /usr/local/nginx/html/a.html。

现在要求：

访问: https://xxxxxx/html/page1 能访问到 /usr/local/nginx/html/1.html

访问: https://xxxxxx/html/page2 能访问到 /usr/local/nginx/html/2.html

访问: https://xxxxxx/html/pagen 能访问到 /usr/local/nginx/html/n.html

那就可以这样再加一个location解决，获取uri中的参数，然后组装，转发到原来的location

```
# 原来的
location /html {
	root /usr/local/nginx/;
}

# 新加一个
location /html/page {
	rewrite ^/html/page(.*)$ /html/$1.html last;  # 获取page后面的数字n，然后转到 /html/n.html，last表示停止处理当前的指令集 并开始搜索与更改的 URI 匹配的新位置
}

```

简单介绍一下这个配置的意思

例如，请求的URL 为 https://xxx/html/pagea （注意: /html 和 /html/page 都会匹配上这个请求， 但是 /html/page 比 /html 长，所以会使用下面这个loocation

rewrite ^/html/page(.*)$ /html/$1.html : 意思是将page后面的 a 提取出来，然后转到 (不是重定向) /html/$1.html ，也就是 /html/a.html

last表示停止处理当前的指令集 并开始搜索与更改的 URI 匹配的新位置，也就是重新去匹配 /html/a.html，当然就匹配到了原来的/html


## 4、http_proxy_module 中的代理设置指令， proxy_pass

proxy_pass 应该也是最常用的指令之一了

**还是用几个案例介绍一下用法**



##### 1、proxy_pass 中有 uri 的情况，location 中的部分将被替换

```
location /a/ {
    proxy_pass http://xxx/b/;
}
# 请求  http://xxx/a/list     将代理到=>    http://xxx/b/list

```



eg：

```
location /name/ {
    proxy_pass http://127.0.0.1/remote/;
}
# 请求  http://xxx/name/list     将代理到=>   http://127.0.0.1/remote/list      

```

##### 2、proxy_pass 中没有 uri 的情况，将原始的uri 拼接到 proxy_pass 中

```
location /a/list {
    proxy_pass http://xxx;
}
# 请求  http://xxx/a/list     将代理到=>    http://xxx/a/list

```

eg：

```
location /name/list/ {
    proxy_pass http://127.0.0.1;
}
# 请求  http://xxx/name/list     代理到=>   http://127.0.0.1/name/list    

```

##### 3、获取uri上的参数，拼装到 proxy_pass

```
location /name {
	if ($uri ~ "^/name/(.*)$") {
    	proxy_pass http://127.0.0.1:9011/$1;
         break;
        }
    return 400;
}
# 请求  http://xxx/name/a.html     代理到=>   http://127.0.0.1:9011/a.html 

```

