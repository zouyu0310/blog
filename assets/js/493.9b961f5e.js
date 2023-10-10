(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1156:function(t,s,r){"use strict";r.r(s);var e=r(14),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"redis列表-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis列表-list"}},[t._v("#")]),t._v(" Redis列表(List)")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/23.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("单key多value")])]),t._v(" "),s("p",[t._v("简单说明：$\\textcolor{red}{一个双端链表的结构}$，容量是2的32次方减1个元素大概40多亿，主要功能有push/pop等，一般用在栈、队列、消息队列等场景。left、right都可以插入添加；")]),t._v(" "),s("p",[t._v("如果键不存在，创建新的链表；")]),t._v(" "),s("p",[t._v("如果键已存在，新增内容；")]),t._v(" "),s("p",[t._v("如果值全移除，对应的键也就消失了")]),t._v(" "),s("p",[t._v("$\\textcolor{green}{它的底层实际上就是个双向链表，对两端的作性能很高，通过索引下标的操作中间的节点性能会较差}$")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/24.jpg",alt:""}})]),t._v(" "),s("p",[t._v("案例：")]),t._v(" "),s("h3",{attrs:{id:"_1-lpush-rpush-lrange-注-没有rrange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-lpush-rpush-lrange-注-没有rrange"}},[t._v("#")]),t._v(" 1.lpush/rpush/lrange      注："),s("strong",[t._v("没有rrange")])]),t._v(" "),s("p",[s("img",{attrs:{src:"images/25.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-lpop-rpop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-lpop-rpop"}},[t._v("#")]),t._v(" 2.lpop/rpop")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/26.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-lindex-按照索引下标获得元素-从上到下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-lindex-按照索引下标获得元素-从上到下"}},[t._v("#")]),t._v(" 3.lindex，按照索引下标获得元素（从上到下）")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/27.List-lindex.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-llen-获取list列表中元素的个数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-llen-获取list列表中元素的个数"}},[t._v("#")]),t._v(" 4.llen,获取List列表中元素的个数")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/28.List-llen.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_5-lrem-key-数字n-给定值v1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-lrem-key-数字n-给定值v1"}},[t._v("#")]),t._v(" 5.lrem key 数字N 给定值v1")]),t._v(" "),s("p",[t._v("解释：删除N个值等于v1的元素")]),t._v(" "),s("p",[t._v("从left往right删除2个值等于v1的元素，返回的值为实际删除的数量")]),t._v(" "),s("p",[t._v("LREM list3 0 值，表示删除全部给定的值，$\\textcolor{red}{零个就是全部值}$")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/29.List-lrem.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_6-ltrim-key-开始index-结束index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-ltrim-key-开始index-结束index"}},[t._v("#")]),t._v(" 6.ltrim key 开始index 结束index")]),t._v(" "),s("p",[t._v("截取指定范围的值后在赋值给key")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/30.List-ltrim.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_7-rpoplpush-源列表-目的列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-rpoplpush-源列表-目的列表"}},[t._v("#")]),t._v(" 7.rpoplpush 源列表  目的列表")]),t._v(" "),s("p",[t._v("移除列表的最后一个元素，并将该元素添加到另一个列表并返回")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/31.list-rpoplpush.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_8-lset-key-index-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-lset-key-index-value"}},[t._v("#")]),t._v(" 8.lset key index value")]),t._v(" "),s("p",[t._v("让指定数组集合的小标位置值替换成新值")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/32.list-lset.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_9-linsert-key-before-after-已有值-插入的新值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-linsert-key-before-after-已有值-插入的新值"}},[t._v("#")]),t._v(" 9.linsert key before/after 已有值 插入的新值")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/33.list-linsert.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=a.exports}}]);