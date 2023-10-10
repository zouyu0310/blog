(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{940:function(n,t,s){"use strict";s.r(t);var e=s(14),a=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##代码块中的events、http、server、location、upstream等都是块配置项##")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##块配置项可以嵌套。内层块直接继承外层快，例如：server块里的任意配置都是基于http块里的已有配置的##")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##Nginx worker进程运行的用户及用户组 ")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#语法：user username[groupname]    默认：user nobody nobody")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('#user用于设置master进程启动后，fork出的worker进程运行在那个用户和用户组下。当按照"user username;"设置时，用户组名与用户名相同。')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#若用户在configure命令执行时，使用了参数--user=usergroup 和 --group=groupname,此时nginx.conf将使用参数中指定的用户和用户组。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#user  nobody;")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##Nginx worker进程个数：其数量直接影响性能。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#每个worker进程都是单线程的进程，他们会调用各个模块以实现多种多样的功能。如果这些模块不会出现阻塞式的调用，那么，有多少CPU内核就应该配置多少个进程，反之，有可能出现阻塞式调用，那么，需要配置稍多一些的worker进程。")]),n._v("\nworker_processes  1;\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##ssl硬件加速。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#用户可以用OpneSSL提供的命令来查看是否有ssl硬件加速设备：openssl engine -t")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#ssl_engine device;")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##守护进程(daemon)。是脱离终端在后台允许的进程。它脱离终端是为了避免进程执行过程中的信息在任何终端上显示。这样一来，进程也不会被任何终端所产生的信息所打断。##")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##关闭守护进程的模式，之所以提供这种模式，是为了放便跟踪调试nginx，毕竟用gdb调试进程时最繁琐的就是如何继续跟进fork出的子进程了。##")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##如果用off关闭了master_proccess方式，就不会fork出worker子进程来处理请求，而是用master进程自身来处理请求")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#daemon off;   #查看是否以守护进程的方式运行Nginx 默认是on ")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#master_process off; #是否以master/worker方式工作 默认是on")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##error日志的设置#")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#语法： error_log /path/file level;")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#默认： error_log / log/error.log error;")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#当path/file 的值为 /dev/null时，这样就不会输出任何日志了，这也是关闭error日志的唯一手段；")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#leve的取值范围是debug、info、notice、warn、error、crit、alert、emerg从左至右级别依次增大。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#当level的级别为error时，error、crit、alert、emerg级别的日志就都会输出。大于等于该级别会输出，小于该级别的不会输出。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#如果设定的日志级别是debug，则会输出所有的日志，这一数据量会很大，需要预先确保/path/file所在的磁盘有足够的磁盘空间。级别设定到debug，必须在configure时加入 --with-debug配置项。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#error_log  logs/error.log;")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#error_log  logs/error.log  notice;")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#error_log  logs/error.log  info;")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##pid文件（master进程ID的pid文件存放路径）的路径")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#pid        logs/nginx.pid;")]),n._v("\n \n \nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#仅对指定的客户端输出debug级别的日志： 语法：debug_connection[IP|CIDR]")]),n._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#这个设置项实际上属于事件类配置，因此必须放在events{……}中才会生效。它的值可以是IP地址或者是CIRD地址。")]),n._v("\n \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#debug_connection 10.224.66.14;  #或是debug_connection 10.224.57.0/24")]),n._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#这样，仅仅以上IP地址的请求才会输出debug级别的日志，其他请求仍然沿用error_log中配置的日志级别。")]),n._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#注意：在使用debug_connection前，需确保在执行configure时已经加入了--with-debug参数，否则不会生效。")]),n._v("\n\tworker_connections  1024;\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##核心转储(coredump):在Linux系统中，当进程发生错误或收到信号而终止时，系统会将进程执行时的内存内容(核心映像)写入一个文件(core文件)，以作为调试只用，这就是所谓的核心转储(coredump).")]),n._v("\n \nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##嵌入其他配置文件 语法：include /path/file")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#参数既可以是绝对路径也可以是相对路径（相对于Nginx的配置目录，即nginx.conf所在的目录）")]),n._v("\n    include       mime.types;\n    default_type  application/octet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("-")]),n._v("stream;\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#access_log  logs/access.log  main;")]),n._v("\n \n    sendfile        on;\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#tcp_nopush     on;")]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#keepalive_timeout  0;")]),n._v("\n    keepalive_timeout  65;\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#gzip  on;")]),n._v("\n \n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##listen监听的端口")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#语法：listen address:port [ default(deprecated in 0.8.21) | default_server | [ backlog=num | rcvbuf=size | sndbuf=size | accept_filter=filter | deferred | bind | ssl ] ]")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#default_server: 如果没有设置这个参数，那么将会以在nginx.conf中找到的第一个server块作为默认server块")]),n._v("\n\tlisten       8080;\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#主机名称：其后可以跟多个主机名称，开始处理一个HTTP请求时，nginx会取出header头中的Host，与每个server中的server_name进行匹配，以此决定到底由那一个server来处理这个请求。有可能一个Host与多个server块中的server_name都匹配，这时会根据匹配优先级来选择实际处理的server块。server_name与Host的匹配优先级见文末。")]),n._v("\n\t server_name  localhost;\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#charset koi8-r;")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#access_log  logs/host.access.log  main;")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#location / {")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    root   html;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    index  index.html index.htm;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#}")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("##location 语法： location [=|~|~*|^~] /uri/ { ... }")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# location的使用实例见文末。")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#注意：location时有顺序的，当一个请求有可能匹配多个location时，实际上这个请求会被第一个location处理。")]),n._v("\n\tlocation / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\tproxy_pass http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("//192.168.1.60;\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#error_page  404              /404.html;")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# redirect server error pages to the static page /50x.html")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#")]),n._v("\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            root   html;\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#location ~ \\.php$ {")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    proxy_pass   http://127.0.0.1;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#}")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#location ~ \\.php$ {")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    root           html;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    fastcgi_pass   127.0.0.1:9000;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    fastcgi_index  index.php;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    include        fastcgi_params;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#}")]),n._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# deny access to .htaccess files, if Apache's document root")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# concurs with nginx's one")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#location ~ /\\.ht {")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    deny  all;")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#}")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n \n \n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#server {")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    listen       8000;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    listen       somename:8080;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    server_name  somename  alias  another.alias;")]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    location / {")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#        root   html;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#        index  index.html index.htm;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    }")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#}")]),n._v("\n \n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# HTTPS server")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#server {")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    listen       443 ssl;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    server_name  localhost;")]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    ssl_certificate      cert.pem;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    ssl_certificate_key  cert.key;")]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    ssl_session_cache    shared:SSL:1m;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    ssl_session_timeout  5m;")]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    ssl_prefer_server_ciphers  on;")]),n._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    location / {")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#        root   html;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#        index  index.html index.htm;")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#    }")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#}")]),n._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);