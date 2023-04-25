---
title: Activiti 03-业务集成(前端绘制部署)
date: 2023年4月17日15:17:37
---



## 前端流程项目

oa-web-vue-element



### 概念介绍



流程大类:   系统流程  自定义流程

流程小类:   自己设定小类 oa_flow_child



### 项目重点

重点文件路径:  src\components\bpmn

核心: 

1. 主界面
2. 流程组件
3. 节点组件
4. 初始化BMPN规范文件
5. 流程部署 -- 文件新增+ 部署 (接口: act/deploy)



### 最终文件

得到   bpmn20.xml文件







### 部署日志

```sql
-- 1 -- 16:48:18 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.P.selectLatestProcessDefinitionByKeyAndTenantId - ==>  
select * from ACT_RE_PROCDEF where KEY_ = 'process1621590346263' and TENANT_ID_ = 'a7fb0794abf840a18f152bd52bac220a' and VERSION_ = (select max(VERSION_) from ACT_RE_PROCDEF where KEY_ = 'process1621590346263' and TENANT_ID_ = 'a7fb0794abf840a18f152bd52bac220a') 
-- 2 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.P.selectProperty - ==>  
select * from ACT_GE_PROPERTY where NAME_ = 'next.dbid' 
-- 3 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.P.updateProperty - ==>  
update ACT_GE_PROPERTY SET REV_ = 481, VALUE_ = '1200001' where NAME_ = 'next.dbid' and REV_ = 480 
-- 4 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.J.selectJobByTypeAndProcessDefinitionKeyAndTenantId - ==>  
select J.* from ACT_RU_JOB J inner join ACT_RE_PROCDEF P on J.PROC_DEF_ID_ = P.ID_ where J.HANDLER_TYPE_ = 'timer-start-event' and P.KEY_ = 'process1621590346263' and P.TENANT_ID_ = 'a7fb0794abf840a18f152bd52bac220a' 
-- 5 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.E.selectEventSubscriptionsByTypeAndProcessDefinitionId - ==>  
select * from ACT_RU_EVENT_SUBSCR WHERE (EVENT_TYPE_ = 'message') and PROC_DEF_ID_ = 'process1621590346263:2:226097' and EXECUTION_ID_ is null and PROC_INST_ID_ is null and TENANT_ID_ = 'a7fb0794abf840a18f152bd52bac220a' 
-- 6 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.E.selectEventSubscriptionsByTypeAndProcessDefinitionId - ==>  
select * from ACT_RU_EVENT_SUBSCR WHERE (EVENT_TYPE_ = 'signal') and PROC_DEF_ID_ = 'process1621590346263:2:226097' and EXECUTION_ID_ is null and PROC_INST_ID_ is null and TENANT_ID_ = 'a7fb0794abf840a18f152bd52bac220a' 
-- 7 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.P.insertProcessDefinition - ==>  
insert into ACT_RE_PROCDEF(ID_, REV_, CATEGORY_, NAME_, KEY_, VERSION_, DEPLOYMENT_ID_, RESOURCE_NAME_, DGRM_RESOURCE_NAME_, DESCRIPTION_, HAS_START_FORM_KEY_, HAS_GRAPHICAL_NOTATION_ , SUSPENSION_STATE_, TENANT_ID_) values ('process1621590346263:3:1197501', 1, 'http://bpmn.io/schema/bpmn', '0521审批-朱博文', 'process1621590346263', 3, '59f8578dcd4546928c900947509b2549', 'process1621590346263.bpmn20.xml', 'process1621590346263.png', null, false, true, 1, 'a7fb0794abf840a18f152bd52bac220a') 
-- 8 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.D.insertDeployment - ==>  
insert into ACT_RE_DEPLOYMENT(ID_, NAME_, CATEGORY_, TENANT_ID_, DEPLOY_TIME_) values('59f8578dcd4546928c900947509b2549', '0521审批-朱博文', null, 'a7fb0794abf840a18f152bd52bac220a', '2023-04-17 16:48:18.414') 
-- 9 -- 16:48:19 [http-nio-88-exec-27] DEBUG o.a.e.i.p.e.R.bulkInsertResource - ==>  
INSERT INTO ACT_GE_BYTEARRAY(ID_, REV_, NAME_, BYTES_, DEPLOYMENT_ID_, GENERATED_) VALUES ('4de7aa0583884a5c85e691ab84004842', 1, 'childType', java.io.ByteArrayInputStream@797fd29, '59f8578dcd4546928c900947509b2549', false) , ('5093e843bf404bd18933085ad9ecc800', 1, 'process1621590346263.bpmn20.xml', java.io.ByteArrayInputStream@16830484, '59f8578dcd4546928c900947509b2549', false) , ('d57961e08fdf432597cd8d29f460ea14', 1, 'process1621590346263.png', java.io.ByteArrayInputStream@4b12d0a, '59f8578dcd4546928c900947509b2549', false) , ('e4942361738e4213adabd4b7e70881c5', 1, 'flowType', java.io.ByteArrayInputStream@20153629, '59f8578dcd4546928c900947509b2549', false) 
-- 10 -- 16:52:24 [http-nio-88-exec-27] DEBUG c.q.a.dao.FormProcessInfoDao.get - ==>  
SELECT t1.`key`, t1.`name`, t1.`flow_type`, t1.`child_type`, t1.`form_type`, t1.`form_url`, t1.`createman`, t1.`updateman`, t1.`caretetime`, t1.`updatetime`, t1.`icon_url`, t1.`timeout_config_uuid`, t1.`sort` FROM oa_form_process_info t1 WHERE t1.`key` = 'process1621590346263' 
-- 11 -- 16:52:38 [http-nio-88-exec-27] DEBUG c.q.a.dao.FormProcessInfoDao.remove - ==>  
DELETE FROM oa_form_process_info WHERE `key` = 'process1621590346263' 
-- 12 -- 16:52:38 [http-nio-88-exec-27] DEBUG c.q.a.dao.FormProcessInfoDao.save - ==>  
REPLACE INTO oa_form_process_info (`key`, `name`, `flow_type`, `child_type`, `form_type`, `form_url`, `createman`, `updateman`, `caretetime`, `updatetime`, `icon_url`) VALUES ('process1621590346263', '0521审批-朱博文', 'sys_oa', 'youhui', null, '', '邹宇', '邹宇', '2023-04-17 16:52:24.012', '2023-04-17 16:52:24.012', null) 
-- 13 -- 16:56:00 [http-nio-88-exec-27] DEBUG c.q.a.d.F.removeByProssKey - ==>  
DELETE FROM oa_flow_copysend WHERE process_id = 'process1621590346263' 

```







    1)在数据库的act_ru_execution正在运行的运行对象表中插入一条记录
    
    2)在数据库的act_hi_procinst程实例的历史表中插入一条记录
    
    3)在数据库的act_hi_actinst活动节点的历史表中插入一条记录
    
    4)我们图中节点都是任务节点，所以同一时候也会在act_ru_task流程实例的历史表加入一条记录
    
    5)在数据库的act_hi_taskinst任务历史表中也插入一条记录。
-----------------------------------


### 核心代码

```java
@SpringBootTest
public class ProcessTest {

    @Autowired
    private RepositoryService repositoryService;

    // 单个文件的部署
    @Test
    public void deployProcess() {
        Deployment deploy = repositoryService.createDeployment()
                .addClasspathResource("process/qingjia.bpmn20.xml")
                .addClasspathResource("process/qingjia.png")
                .name("请假申请流程")
                .deploy();

        System.out.println("deploy.getId() = " + deploy.getId());
        System.out.println("deploy.getName() = " + deploy.getName());
    }
}

注: addString() 可在流程中加入业务参数
```



