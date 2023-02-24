

目录

[[toc]]



---
# 说明

 1. 文档可解决的问题: 

   * 旧公众号停止使用，更换为新的公众号。保持用户信息不变（openid）

   * 微信文档说明： 账号迁移后，粉丝的openid会变化，微信用户关注不同的公众号，对应的openid是不一样的，迁移成功后，粉丝的openid以目标帐号（即新公众号）对应的OpenID为准。





# 代码实现

1. 关键点: 每次请求数为 100 ==>分批次调用接口

2. 由新账号的 token =>access_token

3. 代码实现

   ```java
       public List<String> getNewOpenId(String accessToken) {
           String getUrl = "https://api.weixin.qq.com/cgi-bin/changeopenid?access_token=" + accessToken;
           List<Map<String, Object>> newOpenids = new ArrayList<>();
           // 分页查询
           int pageNum = 0;
           int pageSize = 100;
           while (true) {
               Map<String, Object> openidMap = new HashMap<>();
               openidMap.put("pageNum", pageNum);
               openidMap.put("totalNum", pageSize);
               List<String> openids = gzhSendmessageService.getOpenidsTogetNew(openidMap);
               // 如果查询出来的数据个数小于等于0，说明查询完毕
               if (openids.size() <= 0) {
                   break;
               }
               String message = null;
               try {
                   JSONObject json = new JSONObject();
                   json.put("from_appid", "XXXXXXXXXX");
                   json.put("openid_list", openids);
                   message = HttpRequest.post(getUrl)
                           .body(json.toJSONString())
                           .execute().body();
                   System.err.println("message:" + message);
                   JSONObject jsonObject = JSONObject.parseObject(message);
                   JSONArray list = jsonObject.getJSONArray("result_list");
                   List<Map> aa = list.toJavaList(Map.class);
                   for (Map j : aa) {
                       Map<String, Object> map = new HashMap<>();
                       map.put("openid", j.get("ori_openid"));
                       map.put("new_openid", j.get("new_openid"));
                       System.out.println(map);
                       newOpenids.add(map);
                   }
                   pageNum += pageSize;
               } catch (Exception e) {
                   e.printStackTrace();
               }
           }
           System.out.println(newOpenids);
           int xx = 0;
           //更新数据
           for (Map<String, Object> o : newOpenids) {
               int x = gzhSendmessageService.updateNewOpenid(o);
               xx = xx + x;
               System.out.println(xx);
           }
   
           return null;
       }
   
   ```

   







# 参考

参考文档

```
https://kf.qq.com/faq/1901177NrqMr190117nqYJze.html
```

