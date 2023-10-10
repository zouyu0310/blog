(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{797:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[a._v("#")]),a._v(" Docker安装")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/zouyu0310/images/raw/master/img/20220105234138.png",alt:"image-20220105234131428"}})]),a._v(" "),t("h2",{attrs:{id:"正式安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式安装"}},[a._v("#")]),a._v(" 正式安装")]),a._v(" "),t("blockquote",[t("ol",[t("li",[a._v("确定你是CentOS7及以上版本")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cat /etc/redhat-release\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[a._v("卸载旧版本")])]),a._v(" "),t("li",[t("p",[a._v("yum安装gcc相关")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum -y install gcc\nyum -y install gcc-c++\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装需要的软件包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum install -y yum-utils\n")])])])]),a._v(" "),t("li",[t("p",[a._v("设置stable镜像仓库 -- 注意: 一定使用阿里云镜像")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])])]),a._v(" "),t("li",[t("p",[a._v("更新yum软件包索引 -- 更新yum为最新")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum makecache fast\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装DOCKER CE")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum -y install docker-ce docker-ce-cli containerd.io\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动docker")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl start docker # 启动\nsystemctl status docker # 查看docker运行状态\n")])])])]),a._v(" "),t("li",[t("p",[a._v("测试")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker version\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run hello-world #运行docker下载后自带的镜像\n")])])])]),a._v(" "),t("li",[t("p",[a._v("卸载")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl stop docker \nyum remove docker-ce docker-ce-cli containerd.io\nrm -rf /var/lib/docker\nrm -rf /var/lib/containerd\n")])])])])])]),a._v(" "),t("h2",{attrs:{id:"阿里云镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云镜像加速"}},[a._v("#")]),a._v(" 阿里云镜像加速")]),a._v(" "),t("ol",[t("li",[a._v("阿里云获得加速器地址连接(选择容器镜像服务)")]),a._v(" "),t("li",[a._v("获取加速器地址 :")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://64l2a5bw.mirror.aliyuncs.com\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("直接粘上")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('#创建docker文件夹\nmkdir -p /etc/docker\n\n#新增配置\ntee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": ["https://64l2a5bw.mirror.aliyuncs.com"]\n}\nEOF\n')])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("重启docker")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl daemon-reload\n\nsystemctl restart docker\n")])])]),t("p",[a._v("以上操作完成配置后 拉取镜像会畅通无阻")])])}),[],!1,null,null,null);t.default=r.exports}}]);