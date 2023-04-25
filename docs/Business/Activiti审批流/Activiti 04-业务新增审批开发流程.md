---
title: Activiti 04-业务新增审批开发流程
date: 2023年4月18日10:02:48
---





## 业务新增审批



### 1.1 确定流程小类

oa_flow_child表新增type

如: feeRefund 押金退款转预存审批

```
INSERT INTO `oa_flow_child` ( `group_id`, `uuid`, `name`, `type`, `status`, `a_id`, `company_id`, `form_url`, `biaoshi`) VALUES ( NULL, 'feeRefund', '押金退款转预存审批', 'sys_oa', 1, '', '', '/infee/stepDeposit/tostepNode/{}?taskId={}', 'feeRefund');

```

核心为: uuid



### 1.2 流程管理新增流程

流程大类选择系统或者自定义

流程小类选择相关具体类型

部署完成后生成流程





### 1.3 业务页面新增类型查询

```
		getSActiviti(){
			$.ajax({
				type : "GET",
				url : "/activiti/task/gotoListByChildType/v2",
				data : {
					childType:'feeRefund'
				},// 你的formid
				error : (request)=> {
					parent.layer.alert("Connection error");
				},
				success : (data)=> {
					console.log(data)
					this.lcList = data

				


				}
			});
		},
```

核心是查到流程的ID 如(process1681785394291)  ,并定义一个key 与业务进行绑定(可根据key查询具体的业务参数)



### 1.4 审批提交-只提交审批数据,不涉及业务数据

```
接口: infee/stepDeposit/startFlow
```





### 1.5 客户审批

* 工作流程-找到具体审批数据点击审批

```
接口:  activiti/task/form/
根据流程key可定位到具体流程小类和业务数据
最终重定向到指定页面 return "redirect:" + formKey;
```





### 1.6 审批过程

```
提交接口: infee/stepDeposit/checksub/v2
```

根据同意 拒绝控制业务走向



