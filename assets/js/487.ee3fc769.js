(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{1150:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"redis地理空间-geo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis地理空间-geo"}},[t._v("#")]),t._v(" Redis地理空间(GEO)")]),t._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介：")]),t._v(" "),e("p",[t._v("移动互联网时代LBS应用越来越多，交友软件中附近的小姐姐、外卖软件中附近的美食店铺、高德地图附近的核酸检查点等等，那这种附近各种形形色色的XXX地址位置选择是如何实现的?\n地球上的地理位置是使用二维的经纬度表示，经度范围(-180,180]，纬度范围(-90，90]，只要我们确定一个点的经纬度就可以取得他在地球的位置。\n例如滴滴打车，最直观的操作就是实时记录更新各个车的位置，\n然后当我们要找车时，在数据库中查找距离我们(坐标x0,y0)附近r公里范围内部的车辆\n使用如下SQL即可:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" taxi "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" position "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" x0"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" X "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" x0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" y0"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" y0"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("r\n")])])]),e("p",[t._v("$\\textcolor{red}{但是这样会有什么问题呢?}$\n1.查询性能问题，如果并发高，数据量大这种查询是要搞垮数据库的\n2.这个查询的是一个矩形访问，而不是以我为中心r公里为半径的圆形访问。\n3.精准度的问题，我们知道地球不是平面坐标系，而是一个圆球，这种矩形计算在长距离计算时会有很大误差")]),t._v(" "),e("h3",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/71.jpg",alt:""}})]),t._v(" "),e("p",[t._v("redis在3.2版本以后增加了地址位置的处理")]),t._v(" "),e("h3",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("h3",{attrs:{id:"_1-geoadd-key-longitude-latitude-member-longitude-latitude-member"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-geoadd-key-longitude-latitude-member-longitude-latitude-member"}},[t._v("#")]),t._v(" 1.GEOADD key longitude latitude member [longitude latitude member]")]),t._v(" "),e("p",[t._v("多个经度(longitude)、纬度(latitude)、位置名称(member)添加到指定的key中")]),t._v(" "),e("p",[t._v('命令：GEOADD city 116.403963 39.915119 "天安门" 116.403414 39.924091 "故宫" 116.024067 40.362639 "长城"')]),t._v(" "),e("p",[t._v("geo类型实际上是zset，可以使用zset相关的命令对其进行遍历，如果遍历出现中文乱码可以使用如下命令：redis-cli --raw")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/72.GEO-geoadd.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2-geopos-key-member-member"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-geopos-key-member-member"}},[t._v("#")]),t._v(" 2.GEOPOS key member [member]")]),t._v(" "),e("p",[t._v("从键里面返回所有指定名称(member )元素的位置（经度和纬度），不存在返回nil")]),t._v(" "),e("p",[t._v("GEOPOS city 天安门 故宫 长城")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/73.GEO-geopos.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_3-geodist-key-member1-member2-m-km-ft-mi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-geodist-key-member1-member2-m-km-ft-mi"}},[t._v("#")]),t._v(" 3.GEODIST key member1 member2 [M|KM|FT|MI]")]),t._v(" "),e("p",[t._v("返回两个给定位置之间的距离")]),t._v(" "),e("p",[t._v("m-米")]),t._v(" "),e("p",[t._v("km-千米")]),t._v(" "),e("p",[t._v("ft-英寸")]),t._v(" "),e("p",[t._v("mi-英里")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/75.GEO-GEODIST.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_4-georadius-key-longitude-latitude-radius-m-km-ft-mi-withcoord-withdist-withhash-count-count-any"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-georadius-key-longitude-latitude-radius-m-km-ft-mi-withcoord-withdist-withhash-count-count-any"}},[t._v("#")]),t._v(" 4.GEORADIUS key longitude latitude radius M|KM|FT|MI [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]")]),t._v(" "),e("p",[t._v("以给定的经纬度为中心，返回与中心的距离不超过给定最大距离的所有元素位置")]),t._v(" "),e("p",[t._v("WITHDIST: 在返回位置元素的同时， 将位置元素与中心之间的距离也一并返回。 距离的单位和用户给定的范围单位保持一致。\nWITHCOORD: 将位置元素的经度和维度也一并返回。\nWITHHASH:以 52 位有符号整数的形式， 返回位置元素经过原始 geohash 编码的有序集合分值。 这个选项主要用于底层应用或者调试，实际中的作用并不大\nCOUNT 限定返回的记录数。")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/76.GEO-georadius.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_5-georadiusbymember"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-georadiusbymember"}},[t._v("#")]),t._v(" 5.GEORADIUSBYMEMBER")]),t._v(" "),e("p",[t._v("跟GEORADIUS类似")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/77.GEO-georadiusbymember.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_6-geohash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-geohash"}},[t._v("#")]),t._v(" 6.GEOHASH")]),t._v(" "),e("p",[t._v("返回一个或多个位置元素的GEOhash表示")]),t._v(" "),e("p",[t._v("geohash 算法生成的base32编码值，3维变2维变1维")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/74.GEO-GEOhash.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);