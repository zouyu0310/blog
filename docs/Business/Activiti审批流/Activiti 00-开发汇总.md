---
title: 开发汇总
date: 2023年6月12日10:09:29
---

---





## 获取当前节点是否是最后节点

```java
    public Boolean nextTaskIsEnd(String taskId) {
        //参数校验
        // 查询当前任务对象
        Task task = ProcessEngines.getDefaultProcessEngine().getTaskService()
                .createTaskQuery().taskId(taskId).singleResult();
        //根据taskId获取流程实例Id
        String processInstanceId = task.getProcessInstanceId();
        String definitionId = ProcessEngines.getDefaultProcessEngine()
                .getRuntimeService().createProcessInstanceQuery()
                .processInstanceId(processInstanceId).singleResult()
                .getProcessDefinitionId();
        ProcessDefinitionEntity processDefinitionEntity =
                (ProcessDefinitionEntity) ((RepositoryServiceImpl)
                        ProcessEngines.getDefaultProcessEngine().getRepositoryService())
                        .getDeployedProcessDefinition(definitionId);
        ActivityImpl activityImpl = processDefinitionEntity.
                findActivity(task.getTaskDefinitionKey());
        // 获取节点所有流向线路信息
        List<PvmTransition> outTransitions = activityImpl.getOutgoingTransitions();
        for (PvmTransition tr : outTransitions) {
            // 获取线路的终点节点
            PvmActivity ac = tr.getDestination();
            //当其中一条流线的中点不是结束节点时，直接返回 false（不是结束节点）
            if (!"endEvent".equals(ac.getProperty("type"))) {
                return false;
            }
        }
        return true;
    }
```

