(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{942:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("通过nginx访问静态文件配置，均是在server模块中配置，有两种方式：")]),t._v(" "),s("p",[t._v("1、alias")]),t._v(" "),s("p",[t._v("通过alias关键字，重定义路径，如")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location /file/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" /home/china/areas/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此时，通过浏览器访问http://127.0.0.1:7001/file/t.txt，则访问服务器的文件是/home/china/areas/t.txt")]),t._v(" "),s("p",[t._v("2、root")]),t._v(" "),s("p",[t._v("通过root关键字，重定义路径，如")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7002")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root /home/china/areas/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此时，通过浏览器访问http://127.0.0.1:7001/t.txt，则访问服务器的文件是/home/china/areas/t.txt")]),t._v(" "),s("p",[t._v("上述两种方法均可达到目的，区别是它们对路径的解析方式不同，alias 会把指定路径当作文件路径，")]),t._v(" "),s("p",[t._v("而root会把指定路径拼接到文件路径，再进行访问。")])])}),[],!1,null,null,null);s.default=e.exports}}]);