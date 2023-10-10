(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{945:function(a,s,e){"use strict";e.r(s);var t=e(14),v=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mysql自动备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql自动备份"}},[a._v("#")]),a._v(" MySQL自动备份")]),a._v(" "),s("p",[a._v("分为两部分:")]),a._v(" "),s("ol",[s("li",[a._v("创建脚本")]),a._v(" "),s("li",[a._v("设置定时任务(可能需下载安装插件)")])]),a._v(" "),s("hr"),a._v(" "),s("p",[s("strong",[a._v("创建备份目录：")]),a._v(" (此时是在/home下创建,位置可任选,后续操作改为自建文件地址)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd /home\nmkdir backup\ncd backup/\n")])])]),s("p",[s("strong",[a._v("创建备份Shell脚本:")])]),a._v(" "),s("p",[a._v("注意把以下命令中的DatabaseName换为实际的数据库名称；")]),a._v(" "),s("p",[a._v("当然，你也可以使用其实的命名规则！")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vi bkDatabaseName.sh\n")])])]),s("p",[a._v("输入/粘贴以下内容：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#!/bin/bash\nmysqldump -uusername -ppassword DatabaseName > /home/backup/DatabaseName_$(date +%Y%m%d_%H%M%S).sql\n")])])]),s("p",[a._v("举例:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#!/bin/bash\nmysqldump -uroot -proot rushandatabasename > /home/backup/rushandatabasename_$(date +%Y%m%d_%H%M%S).sql\n")])])]),s("p",[a._v("对备份进行压缩（可选）：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#!/bin/bash\nmysqldump -uusername -ppassword DatabaseName | gzip > /home/backup/DatabaseName_$(date +%Y%m%d_%H%M%S).sql.gz\n")])])]),s("p",[a._v("注意：")]),a._v(" "),s("p",[a._v("把 username 替换为实际的用户名；")]),a._v(" "),s("p",[a._v("把 password 替换为实际的密码；")]),a._v(" "),s("p",[a._v("把 DatabaseName 替换为实际的数据库名；")]),a._v(" "),s("p",[s("strong",[a._v("添加可执行权限：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chmod u+x bkDatabaseName.sh\n")])])]),s("p",[a._v("添加可执行权限之后先执行一下，看看脚本有没有错误，能不能正常使用；")]),a._v(" "),s("p",[a._v("./bkDatabaseName.sh")]),a._v(" "),s("hr"),a._v(" "),s("p",[s("strong",[a._v("添加计划任务")])]),a._v(" "),s("p",[a._v("检测或安装 crontab")]),a._v(" "),s("p",[a._v("确认crontab是否安装：")]),a._v(" "),s("p",[a._v("执行 crontab 命令如果报 command not found，就表明没有安装,通过下面命令安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yum -y install vixie-cron\n")])])]),s("p",[a._v("添加计划任务")]),a._v(" "),s("p",[a._v("执行命令：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("crontab -e\n")])])]),s("p",[a._v("这时就像使用vi编辑器一样，可以对计划任务进行编辑。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0 1 * * * /home/backup/bkDatabaseName.sh\n")])])]),s("p",[a._v("每天晚上一点执行。")]),a._v(" "),s("p",[a._v("举例 : 输入以下内容并保存：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("*/1 * * * * /home/backup/bkDatabaseName.sh\n")])])]),s("p",[a._v("具体是什么意思呢？")]),a._v(" "),s("p",[a._v("意思是每一分钟执行一次shell脚本“/home/backup/bkDatabaseName.sh”。")]),a._v(" "),s("p",[a._v("脚本网址(注):https://www.jb51.net/article/122922.htm")])])}),[],!1,null,null,null);s.default=v.exports}}]);