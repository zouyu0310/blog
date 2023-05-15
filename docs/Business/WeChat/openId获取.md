---
title: openId获取
date: 2023年5月5日10:16:29
---



---



## 参考文档

```
https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
```





## 开发流程

网页授权流程分为四步：

1. 引导用户进入授权页面同意授权，获取code
2. 通过code换取网页授权access_token（与基础支持中的access_token不同）
3. 如果需要，开发者可以刷新网页授权access_token，避免过期
4. 通过网页授权access_token和openid获取用户基本信息（支持UnionID机制）



