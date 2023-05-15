---
title: Autowired 注入bean为null解决方案
date: 2023年5月5日13:58:22
---



---



问题背景
需要从yml配置文件中读取参数，写了一个config实体类，添加了GET，SET方法，再别的类中@Autowired注入这个配置类的时候报空指针。

问题原因 一
1、不能在定时任务中调用别的类 2、不能new一个类。
然后注入值，因为定时任务会开启一个新的进程，而spring值会注入到初始的类中，但这个有值类并没有被使用，而是调用了无值的类。

问题原因 二  初始化顺序


```
成员变量初始化 -> Constructor -> @Autowired
```

调用get时候，还没有进入autowired的生命周期，自然为空，获取不到值，报空指针错误。

## 解决方案

引入工具类

```
/**
 * @author yichuan@iscas.ac.cn
 * 此工具类用于从Spring的上下文中去获取到类，解决@autowird注入空指针的问题
 * @version 1.0
 * @date 2020/10/27 16:54
 */
@Component
public class ApplicationContextHelperUtil implements ApplicationContextAware {
    private static ApplicationContext applicationContext;
    @Override
    public void setApplicationContext( ApplicationContext applicationContext1 ) throws BeansException {
        applicationContext = applicationContext1;
    }

    public static ApplicationContext getApplicationContext(){
        return applicationContext;
    }

    @SuppressWarnings("unchecked")
    public static <T> T getBean(Class<T> clazz) {
        return (T) applicationContext.getBean(clazz);
    }
}


```





同时调用方法由

```
@Autowired
HeartbeatConfig heartbeatConfig;
```

改为

```
private static HeartbeatConfig heartbeatConfig =(HeartbeatConfig) ApplicationContextHelperUtil.getBean(HeartbeatConfig.class);
```



参考:

```
https://blog.csdn.net/wenyichuan/article/details/109315211?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-109315211-blog-128559132.235%5Ev32%5Epc_relevant_increate_t0_download_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-109315211-blog-128559132.235%5Ev32%5Epc_relevant_increate_t0_download_v2&utm_relevant_index=2
```

