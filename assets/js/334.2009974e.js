(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{958:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-yaml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-yaml"}},[a._v("#")]),a._v(" 1. YAML")]),a._v(" "),t("p",[a._v("YAML（YAML Ain't Markup Language）")]),a._v(" "),t("p",[a._v("YAML A Markup Language：是一个标记语言")]),a._v(" "),t("p",[a._v("YAML isn't Markup Language：不是一个标记语言；")]),a._v(" "),t("p",[a._v("标记语言：")]),a._v(" "),t("p",[a._v("以前的配置文件；大多都使用的是 "),t("strong",[a._v("xxxx.xml")]),a._v("文件；")]),a._v(" "),t("p",[a._v("YAML："),t("strong",[a._v("以数据为中心")]),a._v("，比json、xml等更适合做配置文件；")]),a._v(" "),t("h1",{attrs:{id:"_2-yaml语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-yaml语法"}},[a._v("#")]),a._v(" 2. YAML语法")]),a._v(" "),t("h2",{attrs:{id:"_2-1-基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本语法"}},[a._v("#")]),a._v(" 2.1 基本语法")]),a._v(" "),t("p",[a._v("k: (空格)v : 表示一堆键值对(空格必须有)")]),a._v(" "),t("p",[a._v("以"),t("code",[a._v("空格")]),a._v("的缩进来控制层级关系；只要是左对齐的一列数据，都是同一个层级的")]),a._v(" "),t("p",[a._v("次等级的前面是空格，不能使用制表符(tab)")]),a._v(" "),t("p",[a._v("冒号之后如果有值，那么冒号和值之间至少有一个空格，不能紧贴着")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /hello\n")])])]),t("h2",{attrs:{id:"_2-2-值得写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-值得写法"}},[a._v("#")]),a._v(" 2.2 值得写法")]),a._v(" "),t("h3",{attrs:{id:"_1-字面量-普通的值-数字-字符串-布尔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-字面量-普通的值-数字-字符串-布尔"}},[a._v("#")]),a._v(" 1. 字面量：普通的值（数字，字符串，布尔）")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v\n")])])]),t("p",[a._v("字符串默认不用加上单引号或者双引号；")]),a._v(" "),t("p",[t("code",[a._v('""')]),a._v("：双引号；不会转义字符串里面的特殊字符；特殊字符会作为本身想表示的意思")]),a._v(" "),t("p",[t("em",[a._v("eg：")]),a._v(' name: "zhangsan \\n lisi"：输出；zhangsan 换行 lisi')]),a._v(" "),t("p",[t("code",[a._v("''")]),a._v("：单引号；会转义特殊字符，特殊字符最终只是一个普通的字符串数据")]),a._v(" "),t("p",[t("em",[a._v("eg：")]),a._v(" name: ‘zhangsan \\n lisi’：输出；zhangsan \\n lisi")]),a._v(" "),t("h3",{attrs:{id:"_2-对象、map-属性和值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-对象、map-属性和值"}},[a._v("#")]),a._v(" 2. 对象、Map（属性和值）")]),a._v(" "),t("p",[t("code",[a._v("k: v")]),a._v("在下一行来写对象的属性和值的关系；注意缩进")]),a._v(" "),t("ol",[t("li",[t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 张三\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("gender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 男\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 22Copy to clipboardErrorCopied\n")])])])]),a._v(" "),t("li",[t("p",[a._v("行内写法")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 张三"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("gender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 男"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_3-数组-list、set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数组-list、set"}},[a._v("#")]),a._v(" 3. 数组（List、Set）")]),a._v(" "),t("ol",[t("li",[t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fruits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 苹果\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 桃子\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 香蕉Copy to clipboardErrorCopied\n")])])])]),a._v(" "),t("li",[t("p",[a._v("行内写法")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fruits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("苹果"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("桃子"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("香蕉"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])])]),a._v(" "),t("h1",{attrs:{id:"_3-简单示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-简单示例"}},[a._v("#")]),a._v(" 3. 简单示例")]),a._v(" "),t("h2",{attrs:{id:"一、设计一个yaml数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、设计一个yaml数据结构"}},[a._v("#")]),a._v(" 一、设计一个YAML数据结构")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#    1. 一个家庭有爸爸、妈妈、孩子。\n#    2. 这个家庭有一个名字（family-name）叫做“happy family”\n#    3. 爸爸有名字(name)和年龄（age）两个属性\n#    4. 妈妈有两个别名\n#    5. 孩子除了名字(name)和年龄（age）两个属性，还有一个friends的集合\n#    6. 每个friend有两个属性：hobby(爱好)和性别(sex)\n")])])]),t("p",[a._v("上面的数据结构用yaml该如何表示呢？")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("family")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("family-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"happy family"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("father")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zimug\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mother")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("alias")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" lovely\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ailice\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("child")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zimug\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("friends")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hobby")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" football\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("  male\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hobby")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" basketball\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" female\n")])])]),t("p",[a._v("或者是friends的部分写成")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("friends")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hobby")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" football"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("  male"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hobby")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" basketball"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" female"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"规则1-字符串的单引号与双引号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则1-字符串的单引号与双引号"}},[a._v("#")]),a._v(" 规则1：字符串的单引号与双引号")]),a._v(" "),t("ul",[t("li",[a._v("双引号；不会转义字符串里面的特殊字符；特殊字符会作为本身想表示的意思，如：\n​ name: “zhangsan \\n lisi”：输出；zhangsan 换行 lisi")]),a._v(" "),t("li",[a._v("单引号；会转义特殊字符，特殊字符最终只是一个普通的字符串数据，如：\n​ name: ‘zhangsan \\n lisi’：输出；zhangsan \\n lisi")])]),a._v(" "),t("h3",{attrs:{id:"规则2-支持松散的语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则2-支持松散的语法"}},[a._v("#")]),a._v(" 规则2：支持松散的语法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("family-name = familyName = family_name\n")])])]),t("h2",{attrs:{id:"二、配置文件占位符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、配置文件占位符"}},[a._v("#")]),a._v(" 二、配置文件占位符")]),a._v(" "),t("p",[a._v("Spring Boot配置文件支持占位符，一些用法如下")]),a._v(" "),t("h3",{attrs:{id:"_2-1-随机数占位符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-随机数占位符"}},[a._v("#")]),a._v(" 2.1 随机数占位符")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[a._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("random.value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("random.int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("random.long"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("random.int(10)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("random.int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("65536")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-2-默认值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-默认值"}},[a._v("#")]),a._v(" 2.2 默认值")]),a._v(" "),t("p",[a._v("占位符获取之前配置的值，如果没有可以是用“冒号”指定默认值\n格式例如，xxxxx.yyyy是属性层级及名称，如果该属性不存在，冒号后面填写默认值")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[a._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("xxxxx.yyyy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("默认值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);