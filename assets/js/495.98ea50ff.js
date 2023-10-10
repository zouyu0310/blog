(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{1159:function(e,s,t){"use strict";t.r(s);var a=t(14),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis集合-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集合-set"}},[e._v("#")]),e._v(" Redis集合(Set)")]),e._v(" "),s("p",[e._v("单值多value，且无重复")]),e._v(" "),s("p",[e._v("案例：")]),e._v(" "),s("h3",{attrs:{id:"_1-sadd-key-member-member"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-sadd-key-member-member"}},[e._v("#")]),e._v(" 1.SADD key member [member ...]")]),e._v(" "),s("p",[e._v("添加元素，可以多次向同一个key中设置不同值，不会覆盖之前的值")]),e._v(" "),s("h3",{attrs:{id:"_2-smembers-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-smembers-key"}},[e._v("#")]),e._v(" 2.SMEMBERS key")]),e._v(" "),s("p",[e._v("遍历集合中的所有元素")]),e._v(" "),s("h3",{attrs:{id:"_3-sismember-key-member"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sismember-key-member"}},[e._v("#")]),e._v(" 3.SISMEMBER key member")]),e._v(" "),s("p",[e._v("判断元素是否在集合中")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/40.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_4-srem-key-member-member"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-srem-key-member-member"}},[e._v("#")]),e._v(" 4.SREM key member [member ...]")]),e._v(" "),s("p",[e._v("删除元素")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/41.set-srem.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_5-scard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-scard"}},[e._v("#")]),e._v(" 5.scard")]),e._v(" "),s("p",[e._v("获取集合里面的元素个数")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/42.set-scard.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_6-srandmember-key-数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-srandmember-key-数字"}},[e._v("#")]),e._v(" 6.SRANDMEMBER key [数字]")]),e._v(" "),s("p",[e._v("从集合中随机$\\textcolor{red}{展现设置的数字个数}$元素，元素不删除")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/43.set-srandmember.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_7-spop-key-数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-spop-key-数字"}},[e._v("#")]),e._v(" 7.SPOP key [数字]")]),e._v(" "),s("p",[e._v("从集合中随机$\\textcolor{red}{弹出}$一个元素，出一个删除一个")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/44.set-spop.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_8-smove-key1-key2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-smove-key1-key2"}},[e._v("#")]),e._v(" 8. smove key1 key2")]),e._v(" "),s("p",[e._v("将key1里已存在的某个值赋给key2")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/45.set-smove.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_9-集合运算-集合的差集运算a-b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-集合运算-集合的差集运算a-b"}},[e._v("#")]),e._v(" 9.集合运算-集合的差集运算A-B")]),e._v(" "),s("p",[e._v("属于A但是不属于B的元素构成的集合")]),e._v(" "),s("p",[e._v("SDIFF key [key ...]，可以计算多个元素的差集")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/46.set-sdiff.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_10-集合运算-集合的并集运算a∪b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-集合运算-集合的并集运算a∪b"}},[e._v("#")]),e._v(" 10.集合运算-集合的并集运算A∪B")]),e._v(" "),s("p",[e._v("属于A或者属于B的元素构成的集合")]),e._v(" "),s("p",[e._v("SUNION key [key ...]")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/47.set-sunion.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_11-集合运算-集合的交集运算a∩b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-集合运算-集合的交集运算a∩b"}},[e._v("#")]),e._v(" 11.集合运算-集合的交集运算A∩B")]),e._v(" "),s("p",[e._v("属于A同时也属于B的共同拥有的元素构成的集合")]),e._v(" "),s("p",[e._v("SINTER key [key ...]")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/48.set-sinter.png",alt:""}})]),e._v(" "),s("p",[s("strong",[e._v("SINTERCARD numkeys key 【key ...】【LIMIT limit】")])]),e._v(" "),s("p",[e._v("numkeys 的具体值由输入的key个数决定")]),e._v(" "),s("p",[e._v("SINTERCARD 为redis7新命令，它不返回结果集，而是返回结果的基数。返回由所有给定集合的交集产生的集合的基数")]),e._v(" "),s("p",[e._v("基数的词语解释: 用于表示事物个数的数")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/49.set-sintercadr.png",alt:""}})]),e._v(" "),s("p",[e._v("![](images/50.set-sintercard limit.png)")])])}),[],!1,null,null,null);s.default=r.exports}}]);