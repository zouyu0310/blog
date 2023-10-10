(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{1165:function(e,t,r){"use strict";r.r(t);var s=r(14),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis有序集合zset-sorted-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis有序集合zset-sorted-set"}},[e._v("#")]),e._v(" Redis有序集合Zset(sorted set)")]),e._v(" "),t("p",[e._v("在set基础上，每个val值前加一个score分数值。之前set是k1 v1 v2 v3，现在zset是 k1 score1 v1 score2 v2")]),e._v(" "),t("p",[e._v("案例：")]),e._v(" "),t("p",[e._v("向有序集合中加入一个元素和该元素的分数")]),e._v(" "),t("h3",{attrs:{id:"_1-zadd-key-score-member-score-member"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-zadd-key-score-member-score-member"}},[e._v("#")]),e._v(" 1.ZADD key score member [score member ...]")]),e._v(" "),t("p",[e._v("添加元素")]),e._v(" "),t("h3",{attrs:{id:"_2-zrange-key-start-stop-withscores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-zrange-key-start-stop-withscores"}},[e._v("#")]),e._v(" 2.ZRANGE key start stop [WITHSCORES]")]),e._v(" "),t("p",[e._v("按照元素分数从小到大的顺序返回索引从start到stop之间的所有元素")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/51.zset-zrange.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_3-zrevrange-key-start-stop-withscores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-zrevrange-key-start-stop-withscores"}},[e._v("#")]),e._v(" 3.zrevrange key start stop [WITHSCORES]")]),e._v(" "),t("p",[e._v("反转集合，按照元素分数从大到小的顺序返回索引从start到stop之间的所有元素")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/52.zset-zrevrange.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_4-zrangebyscore-key-min-max-【withscores】【limit-offset-count】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-zrangebyscore-key-min-max-【withscores】【limit-offset-count】"}},[e._v("#")]),e._v(" 4.ZRANGEBYSCORE key min max 【WITHSCORES】【LIMIT offset count】")]),e._v(" "),t("p",[e._v("获取指定分数范围的元素，可以在min和max前面加个(，表示不包含")]),e._v(" "),t("p",[e._v("limit作用是返回限制，limit开始下标步，一共多少步")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/53.zset-zrangebyscore.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_5-zscore-key-member"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-zscore-key-member"}},[e._v("#")]),e._v(" 5.ZSCORE key member")]),e._v(" "),t("p",[e._v("获取元素的分数")]),e._v(" "),t("h3",{attrs:{id:"_6-zcard-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-zcard-key"}},[e._v("#")]),e._v(" 6.ZCARD key")]),e._v(" "),t("p",[e._v("获取集合中元素的数量")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/54.zset-zcard.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_7-zrem-key-member-member"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-zrem-key-member-member"}},[e._v("#")]),e._v(" 7. zrem key member [member ...]")]),e._v(" "),t("p",[e._v("某个score对应的value值，作用是删除元素")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/55.zset-zrem.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_8-zincrby-key-increment-member"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-zincrby-key-increment-member"}},[e._v("#")]),e._v(" 8.ZINCRBY key increment member")]),e._v(" "),t("p",[e._v("增加某个元素的分数")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/56.zset-incrby.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_9-zcount-key-min-max"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-zcount-key-min-max"}},[e._v("#")]),e._v(" 9.ZCOUNT key min max")]),e._v(" "),t("p",[e._v("获得指定分数内的元素个数")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/57.zset-zcount.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_10-zmpop-numkeys-key-key-min-max-count-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-zmpop-numkeys-key-key-min-max-count-count"}},[e._v("#")]),e._v(" 10.ZMPOP numkeys key [key ...] MIN|MAX [COUNT count]")]),e._v(" "),t("p",[e._v("从键名列表中的"),t("strong",[e._v("第一个非空排序集中弹出一个或多个元素")]),e._v("，他们是成员分数对")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/58.zset-zmpop.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_11-zrank-key-member-withscore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-zrank-key-member-withscore"}},[e._v("#")]),e._v(" 11.zrank key member [withscore]")]),e._v(" "),t("p",[e._v("作用是通过子value获得下标值")]),e._v(" "),t("h3",{attrs:{id:"_12-zrevrank-key-member-withscore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-zrevrank-key-member-withscore"}},[e._v("#")]),e._v(" 12.zrevrank key member [withscore]")]),e._v(" "),t("p",[e._v("作用是通过子value逆序获得下标值")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/59.zset-zrank.png",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);