## 103_Nacos之DataID配置 -- 验证同组下不同环境配置切换

指定spring.profile.active和配置文件的DatalD来使不同环境下读取不同的配置

默认空间+默认分组+新建dev和test两个DatalD

- 新建dev配置DatalD

![image-20220103223441403](https://gitee.com/zouyu0310/images/raw/master/img/20220103223441.png)

通过spring.profile.active属性就能进行多环境下配置文件的读取

![image-20220103223455831](https://gitee.com/zouyu0310/images/raw/master/img/20220103223455.png)

**测试**

- http://localhost:3377/config/info
- 配置是什么就加载什么 test/dev