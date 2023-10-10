(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{744:function(s,e,a){"use strict";a.r(e);var t=a(14),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ul",[e("li",[e("a",{attrs:{href:"#mysql%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E5%8F%8A%E4%BC%98%E5%8C%96"}},[s._v("Mysql内存管理及优化")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%86%85%E5%AD%98%E4%BC%98%E5%8C%96%E5%8E%9F%E5%88%99"}},[s._v("内存优化原则")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#myisam-%E5%86%85%E5%AD%98%E4%BC%98%E5%8C%96"}},[s._v("MyISAM 内存优化")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#innodb-%E5%86%85%E5%AD%98%E4%BC%98%E5%8C%96"}},[s._v("InnoDB 内存优化")])])])])]),s._v(" "),e("h1",{attrs:{id:"mysql内存管理及优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql内存管理及优化"}},[s._v("#")]),s._v(" Mysql内存管理及优化")]),s._v(" "),e("h2",{attrs:{id:"内存优化原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存优化原则"}},[s._v("#")]),s._v(" 内存优化原则")]),s._v(" "),e("p",[s._v("1） 将尽量多的内存分配给MySQL做缓存，但要给操作系统和其他程序预留足够内存。")]),s._v(" "),e("p",[s._v("2） MyISAM 存储引擎的数据文件读取依赖于操作系统自身的IO缓存，因此，如果有MyISAM表，就要预留更多的内存给操作系统做IO缓存。")]),s._v(" "),e("p",[s._v("3） 排序区、连接区等缓存是分配给每个数据库会话（session）专用的，其默认值的设置要根据最大连接数合理分配，如果设置太大，不但浪费资源，而且在并发连接较高时会导致物理内存耗尽。")]),s._v(" "),e("h2",{attrs:{id:"myisam-内存优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myisam-内存优化"}},[s._v("#")]),s._v(" MyISAM 内存优化")]),s._v(" "),e("p",[s._v("了解即可，我们平时用的都是 InnoDB")]),s._v(" "),e("p",[s._v("myisam存储引擎使用 key_buffer 缓存索引块，加速myisam索引的读写速度。对于myisam表的数据块，mysql没有特别的缓存机制，完全依赖于操作系统的IO缓存。")]),s._v(" "),e("ul",[e("li",[s._v("key_buffer_size")])]),s._v(" "),e("p",[s._v("key_buffer_size决定MyISAM索引块缓存区的大小，直接影响到MyISAM表的存取效率。可以在MySQL参数文件中设置key_buffer_size的值，对于一般MyISAM数据库，建议至少将1/4可用内存分配给key_buffer_size。")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("/usr/my.cnf")]),s._v(" 中做如下配置：")]),s._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("key_buffer_size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("512M")]),s._v("\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key_buffer_size'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看大小")]),s._v("\n")])])]),e("ul",[e("li",[s._v("read_buffer_size")])]),s._v(" "),e("p",[s._v("如果需要经常顺序扫描myisam表，可以通过增大read_buffer_size的值来改善性能。但需要注意的是read_buffer_size是每个session独占的，如果默认值设置太大，就会造成内存浪费。")]),s._v(" "),e("ul",[e("li",[s._v("read_rnd_buffer_size")])]),s._v(" "),e("p",[s._v("对于需要做排序的myisam表的查询，如带有order by子句的sql，适当增加 read_rnd_buffer_size 的值，可以改善此类的sql性能。但需要注意的是 read_rnd_buffer_size 是每个session独占的，如果默认值设置太大，就会造成内存浪费。")]),s._v(" "),e("h2",{attrs:{id:"innodb-内存优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb-内存优化"}},[s._v("#")]),s._v(" InnoDB 内存优化")]),s._v(" "),e("p",[s._v("innodb用一块内存区做IO缓存池，该缓存池不仅用来缓存innodb的索引块，而且也用来缓存innodb的数据块。")]),s._v(" "),e("ul",[e("li",[s._v("innodb_buffer_pool_size")])]),s._v(" "),e("p",[s._v("该变量决定了 innodb 存储引擎表数据和索引数据的最大缓存区大小。在保证操作系统及其他程序有足够内存可用的情况下，innodb_buffer_pool_size 的值越大，缓存命中率越高，访问InnoDB表需要的磁盘I/O 就越少，性能也就越高。")]),s._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("innodb_buffer_pool_size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("512M")]),s._v("\n")])])]),e("ul",[e("li",[s._v("innodb_log_buffer_size")])]),s._v(" "),e("p",[s._v("决定了 Innodb 重做日志缓存的大小，对于可能产生大量更新记录的大事务，增加innodb_log_buffer_size的大小，可以避免innodb在事务提交前就执行不必要的日志写入磁盘操作。")]),s._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("innodb_log_buffer_size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10M")]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);