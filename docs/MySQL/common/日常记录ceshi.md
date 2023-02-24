
---
title: 标题mysql12312
---
<!-- ---


permalink: /docs/MySQL/common/日常记录ceshi
--- -->

# 插入数据时，判断表中是否存在数据

```sql
INSERT INTO `sys_dict` ( `name`, `value` ) SELECT
'xxx',
NULL,

FROM
DUAL 
WHERE
	! EXISTS (
	SELECT
		1 
	FROM
		sys_dict 
	WHERE
		`value` = 'XX' 
	AND type = 'xxx' 
	)
```

