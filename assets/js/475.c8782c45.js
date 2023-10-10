(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1141:function(n,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"ssl证书使用nginx服务器部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl证书使用nginx服务器部署"}},[n._v("#")]),n._v(" SSL证书使用Nginx服务器部署")]),n._v(" "),t("h1",{attrs:{id:"ssl证书作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl证书作用"}},[n._v("#")]),n._v(" SSL证书作用")]),n._v(" "),t("p",[n._v("服务器部署了 SSL 证书后可以确保用户在浏览器上输入的机密信息和从服务器上查询的机密信息从用户电脑到服务器之间的传输链路上是高强度加密传输的，是不可能被非法篡改和窃取的。同时向网站访问者证明了服务器的真实身份，此真实身份是通过第三方权威机构验证的。也就是说有两大作用：数据加密和身份认证。")]),n._v(" "),t("h1",{attrs:{id:"阿里云申请免费证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云申请免费证书"}},[n._v("#")]),n._v(" 阿里云申请免费证书")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YpLdn59dVE2Wno83/img/b2b08614-db19-4203-a34d-868537cd0c38.png",alt:"image"}})]),n._v(" "),t("h1",{attrs:{id:"下载nginx服务器类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载nginx服务器类型"}},[n._v("#")]),n._v(" 下载Nginx服务器类型")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YpLdn59dVE2Wno83/img/c2ade3d5-733c-40d0-800e-1ec4ead2e515.png",alt:"image"}})]),n._v(" "),t("h1",{attrs:{id:"下载后查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载后查看文件"}},[n._v("#")]),n._v(" 下载后查看文件")]),n._v(" "),t("p",[n._v("打开浏览器的默认下载位置，解压已下载的Nginx证书压缩包文件。")]),n._v(" "),t("p",[n._v("解压后您将会 获得以下文件：")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YpLdn59dVE2Wno83/img/a4eb805c-e87b-4304-8289-ccd05915c7fd.png",alt:"image"}})]),n._v(" "),t("p",[n._v("注: PEM格式的证书文件。KEY格式的证书密钥文件。")]),n._v(" "),t("p",[n._v("PEM格式的证书文件是采用Base64编码的文本文件，可以根据需要将证书文件修改成其他格式。")]),n._v(" "),t("h1",{attrs:{id:"在nginx独立服务器上安装证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在nginx独立服务器上安装证书"}},[n._v("#")]),n._v(" 在Nginx独立服务器上安装证书")]),n._v(" "),t("ol",[t("li",[n._v("登录Nginx服务器。")])]),n._v(" "),t("p",[n._v("例如，您可以使用远程登录工具（例如，PuTTY、Xshell）登录服务器。")]),n._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[n._v("执行以下命令，在Nginx安装目录（默认为/usr/local/nginx/conf）下创建一个用于存放证书的目录（命名为cert）。")]),n._v(" "),t("p",[n._v("cd /usr/local/nginx/conf  #进入Nginx默认安装目录。如果您修改过默认安装目录，请根据实际配置进行调整。\nmkdir cert  #创建证书目录，命名为cert。")])]),n._v(" "),t("li",[t("p",[n._v("将本地证书文件和密钥文件上传到Nginx服务器的证书目录（示例中为/usr/local/nginx/conf/cert）")])]),n._v(" "),t("li",[t("p",[n._v("编辑Nginx配置文件（nginx.conf），修改与证书相关的配置内容。在/usr/local/nginx/conf目录下")]),n._v(" "),t("p",[n._v("在配置文件中定位到HTTP协议代码片段（http{}），并在HTTP协议代码里面添加以下server配置（如果server配置已存在，按照以下注释内容修改相应配置即可）。\n使用示例代码前，请注意替换以下内容：")])])]),n._v(" "),t("p",[n._v("官方配置:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("#以下属性中，以ssl开头的属性表示与证书配置有关。\nserver {\n    listen 443 ssl;\n    #配置HTTPS的默认访问端口为443。\n    #如果未在此处配置HTTPS的默认访问端口，可能会造成Nginx无法启动。\n    #如果您使用Nginx 1.15.0及以上版本，请使用listen 443 ssl代替listen 443和ssl on。\n    server_name yourdomain.com; #需要将yourdomain.com替换成证书绑定的域名。\n    root html;\n    index index.html index.htm;\n    ssl_certificate cert/cert-file-name.pem;  #需要将cert-file-name.pem替换成已上传的证书文件的名称。\n    ssl_certificate_key cert/cert-file-name.key; #需要将cert-file-name.key替换成已上传的证书密钥文件的名称。\n    ssl_session_timeout 5m;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    #表示使用的加密套件的类型。\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #表示使用的TLS协议的类型。\n    ssl_prefer_server_ciphers on;\n    location / {\n        root html;  #站点目录。\n        index index.html index.htm;\n    }\n}\n")])])]),t("p",[n._v("滨海中央花园配置:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('#zouyu 2021/10/13 滨海中央花园 配置SSL证书(误删)\n\nserver {\nlisten 443  ssl;   #SSL协议访问端口号为443。此处如未添加ssl，可能会造成Nginx无法启动。\nserver_name  bhzyhy.org.cn;  #将localhost修改为您证书绑定的域名，例如：www.example.com。\nssl_certificate cert/bhzyhy.org.cn.pem;   #将domain name.pem替换成您证书的文件名。\nssl_certificate_key cert/bhzyhy.org.cn.key;   #将domain name.key替换成您证书的密钥文件名。\nssl_session_timeout 5m;\nssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。\nssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。#ssl_prefer_server_ciphers on;   \n\nlocation / {\n\tproxy_pass  http://127.0.0.1:20000/;\n\tproxy_read_timeout  3600;\n\tfastcgi_connect_timeout 300;  \n\tfastcgi_send_timeout  300;  \n\tfastcgi_read_timeout  300; \n\tfastcgi_buffers 8  16k;\n fastcgi_buffer_size  32k;\n \n proxy_set_header  X-Real-IP  $remote_addr;\n\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\t\n\t\tproxy_redirect off;\n proxy_set_header Host $host;\n        proxy_set_header X-Real-IP       $remote_addr;\n        proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;\n\t\tclient_max_body_size  100M;\n\t\t\n\t\t# websocket support\n\t\tproxy_http_version 1.1;\n\t\tproxy_set_header Upgrade $http_upgrade;\n\t\tproxy_set_header Connection "upgrade";\n\t\t\n}\n\n# 微信路径\nlocation  ~* \\.(txt)$  {\nroot   /data/wechat/;\n}\nlocation ^~/geecityform {\n    #nginx文件夹下的目录\n    alias html/geecityform;\n    #入口页面配置\n    try_files $uri $uri/ /geecityform/index.html;\n    index index.html;\n  }\n}\n')])])]),t("p",[n._v("注: 如果使用的是阿里云ECS服务器，必须在ECS管理控制台的安全组页面，配置放行80端口和443端口，否则网站访问可能出现异常。")]),n._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[n._v("执行以下命令，重启Nginx服务。")]),n._v(" "),t("p",[n._v("nginx -s reload  #重新载入配置文件。")])])]),n._v(" "),t("h1",{attrs:{id:"使用openssl查询证书到期时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用openssl查询证书到期时间"}},[n._v("#")]),n._v(" 使用openssl查询证书到期时间")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("进入ssl证书保存路径 /usr/local/nginx/conf/cert")])]),n._v(" "),t("li",[t("p",[n._v("执行openssl查询命令")]),n._v(" "),t("p",[n._v("openssl x509 -in pass.pem -noout -dates")])])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YpLdn59dVE2Wno83/img/f086099c-fd06-4bfa-8ec9-f5fe2e0330e4.png",alt:"image"}})]),n._v(" "),t("h3",{attrs:{id:"出现the-ssl-parameter-requires-ngx-http-ssl-module-in-usr-local-nginx-conf-nginx-conf处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#出现the-ssl-parameter-requires-ngx-http-ssl-module-in-usr-local-nginx-conf-nginx-conf处理"}},[n._v("#")]),n._v(' 出现the "ssl" parameter requires ngx_http_ssl_module in /usr/local/nginx/conf/nginx.conf处理')]),n._v(" "),t("h3",{attrs:{id:"by-zouyu-2022-7-17-14-45-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#by-zouyu-2022-7-17-14-45-23"}},[n._v("#")]),n._v(" --By zouyu 2022-7-17 14:45:23")]),n._v(" "),t("p",[n._v("nginx缺少ssl模块，需要安装 -- 注意需要使用nginx源文件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v(" ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module\n")])])]),t("h2",{attrs:{id:"更换证书后放于nginx下后需要重载nginx新证书才会生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换证书后放于nginx下后需要重载nginx新证书才会生效"}},[n._v("#")]),n._v(" 更换证书后放于nginx下后需要重载nginx新证书才会生效")])])}),[],!1,null,null,null);t.default=r.exports}}]);