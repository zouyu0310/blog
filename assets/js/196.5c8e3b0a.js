(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{804:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("Table of Contents")]),t._v(" "),a("em",[t._v("generated with "),a("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocToc"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%88%9D%E5%A7%8B"}},[t._v("初始")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85git"}},[t._v("安装Git")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E7%AD%BE%E5%90%8D"}},[t._v("设置用户签名")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%8F%90%E4%BA%A4%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93"}},[t._v("提交到远程仓库")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%95%99%E7%A8%8B"}},[t._v("教程")])])]),t._v(" "),a("h2",{attrs:{id:"初始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始"}},[t._v("#")]),t._v(" 初始")]),t._v(" "),a("h3",{attrs:{id:"安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装Git")]),t._v(" "),a("p",[t._v("官网： https://git-scm.com/")]),t._v(" "),a("p",[t._v("下载慢可使用淘宝镜像下载：https://npm.taobao.org/mirrors/git-for-windows/")]),t._v(" "),a("p",[t._v("下载完之后安装，一键默认即可")]),t._v(" "),a("h3",{attrs:{id:"设置用户签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置用户签名"}},[t._v("#")]),t._v(" 设置用户签名")]),t._v(" "),a("p",[t._v("Git 首次安装必须设置一下用户签名，否则无法提交代码")]),t._v(" "),a("p",[t._v("基本语法：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name 用户名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email 邮箱\n")])])]),a("p",[t._v("签名作用：")]),t._v(" "),a("p",[t._v("每次提交到远程时区分不同操作者，在每次的提交信息中能看到。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("C:\\Users\\用户名\\")]),t._v("目录下 "),a("code",[t._v(".gitconfig")]),t._v(" 文件查看配置信息")]),t._v(" "),a("h2",{attrs:{id:"提交到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交到远程仓库"}},[t._v("#")]),t._v(" 提交到远程仓库")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建远程仓库")]),t._v(" "),a("p",[t._v("在 GitHub/Gitee 中创建仓库")]),t._v(" "),a("p",[t._v("主分支一般设置为 "),a("code",[t._v("master")])])]),t._v(" "),a("li",[a("p",[t._v("初始化本地库")]),t._v(" "),a("p",[t._v("在本地仓库目录下，打开 Git Bash")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),a("p",[t._v("项目文件夹下就会生成.git文件，这是一个隐藏文件。")])]),t._v(" "),a("li",[a("p",[t._v("添加远程仓库地址")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/oddfar/docs.git\n")])])]),a("p",[t._v("把链接替换成自己的")])]),t._v(" "),a("li",[a("p",[t._v("拉取远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("  pull origin master\n")])])]),a("p",[t._v("作用是拉取远程仓库的文件，拉取本地没有的文件和新更改的文件")])]),t._v(" "),a("li",[a("p",[t._v("添加暂存区")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[a("code",[t._v(".")]),t._v("把所有文件添加到暂存区")]),t._v(" "),a("p",[t._v("添加指定文件："),a("code",[t._v("git add 文件名")])]),t._v(" "),a("p",[t._v("注意 add 后面有空格")])]),t._v(" "),a("li",[a("p",[t._v("提交本地库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日志信息"')]),t._v("\n")])])]),a("p",[t._v("将暂存区的文件提交到本地库")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("git status")]),t._v(" 查看状态")])]),t._v(" "),a("li",[a("p",[t._v("同步到远程")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])])])]),t._v(" "),a("p",[t._v("至此，已成功提交到远程。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("也可以创建好远程仓库后，直接克隆到本地")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/oddfar/docs.git\n")])])]),a("p",[t._v("把本地代码，复制到下载的目录")]),t._v(" "),a("p",[t._v("再从第五步开始提交到 GitHub")]),t._v(" "),a("p",[t._v("https 在国内不太稳定，有时候链接不上，建议用 SSH 链接来对仓库进行管理")])])}),[],!1,null,null,null);a.default=r.exports}}]);