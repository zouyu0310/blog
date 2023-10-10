(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{515:function(t,s,a){t.exports=a.p+"assets/img/20200521204548.315287af.png"},516:function(t,s,a){t.exports=a.p+"assets/img/20200521204736.98a1ed14.png"},517:function(t,s,a){t.exports=a.p+"assets/img/20200521204831.07f45e73.png"},518:function(t,s,a){t.exports=a.p+"assets/img/20200521205251.97b7e5dd.png"},519:function(t,s,a){t.exports=a.p+"assets/img/20200521205456.1f892a9f.png"},520:function(t,s,a){t.exports=a.p+"assets/img/20200521205633.8946ee8b.png"},933:function(t,s,a){"use strict";a.r(s);var r=a(14),_=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#1-%E4%BB%80%E4%B9%88%E6%98%AF%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB"}},[t._v("1. 什么是动静分离")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"}},[t._v("2. 准备工作")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3-%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE"}},[t._v("3. 具体配置")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#4-%E6%9C%80%E7%BB%88%E6%B5%8B%E8%AF%95"}},[t._v("4. 最终测试")])])]),t._v(" "),s("h1",{attrs:{id:"_1-什么是动静分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是动静分离"}},[t._v("#")]),t._v(" 1. 什么是动静分离")]),t._v(" "),s("p",[t._v("Nginx 动静分离简单来说就是把动态跟静态请求分开，不能理解成只是单纯的把动态页面和静态页面物理分离。严格意义上说应该是动态请求跟静态请求分开，可以理解成使用 Nginx 处理静态页面，Tomcat 处理动态页面。动静分离从目前实现角度来讲大致分为两种，")]),t._v(" "),s("p",[s("strong",[t._v("一种是纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案")]),t._v("；")]),t._v(" "),s("p",[s("strong",[t._v("另外一种方法就是动态跟静态文件混合在一起发布，通过 nginx 来分开")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(515),alt:""}})]),t._v(" "),s("p",[t._v("通过 location 指定不同的后缀名实现不同的请求转发。通过 expires 参数设置，可以使浏览器缓存过期时间，减少与服务器之前的请求和流量。具体 Expires 定义：是给一个资源设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可，所以不会产生额外的流量。此种方法非常适合不经常变动的资源。（如果经常更新的文件，不建议使用 Expires 来缓存），我这里设置 3d，表示在这 3 天之内访问这个 URL，发送一个请求，比对服务器该文件最后更新时间没有变化，则不会从服务器抓取，返回状态码304，如果有修改，则直接从服务器重新下载，返回状态码 200。")]),t._v(" "),s("h1",{attrs:{id:"_2-准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备工作"}},[t._v("#")]),t._v(" 2. 准备工作")]),t._v(" "),s("p",[s("strong",[t._v("在 liunx 系统中准备静态资源，用于进行访问")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(516),alt:""}})]),t._v(" "),s("h1",{attrs:{id:"_3-具体配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-具体配置"}},[t._v("#")]),t._v(" 3. 具体配置")]),t._v(" "),s("p",[s("strong",[t._v("在")]),t._v(" "),s("strong",[t._v("nginx")]),t._v(" "),s("strong",[t._v("配置文件中进行配置")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(517),alt:""}})]),t._v(" "),s("h1",{attrs:{id:"_4-最终测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-最终测试"}},[t._v("#")]),t._v(" 4. 最终测试")]),t._v(" "),s("p",[s("strong",[t._v("浏览器中输入地址")])]),t._v(" "),s("p",[t._v("http://服务器ip/image/01.jpg")]),t._v(" "),s("p",[s("img",{attrs:{src:a(518),alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("因为配置文件")]),t._v(" "),s("strong",[t._v("autoindex on")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(519),alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("在浏览器地址栏输入地址")])]),t._v(" "),s("p",[t._v("http://服务器ip/www/a.html")]),t._v(" "),s("p",[s("img",{attrs:{src:a(520),alt:""}})])])}),[],!1,null,null,null);s.default=_.exports}}]);