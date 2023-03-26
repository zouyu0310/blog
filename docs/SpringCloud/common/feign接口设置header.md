---
title:  01feign接口设置header
date 2023-3-17 14:31:29
---



##  实现 RequestInterceptor 接口 =>Feign传递Header参数 




```java
package com.geecity.api.common.config;/**
 * @Author zouyu
 * @Date 2023/3/17 14:12
 * @Version 1.0 （版本号）
 */

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * @ClassName FeignInterceptor
 * @Description   实现 RequestInterceptor 接口 =>Feign传递Header参数  自定义实现RequestInterceptor接口的apply方法
 * @Author zouyu
 * @Date 2023/03/17 14:12
 * @Version 1.0
 **/
@Component
public class FeignInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate requestTemplate) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                .getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        Enumeration<String> headerNames = request.getHeaderNames();
        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String name = headerNames.nextElement();
                String values = request.getHeader(name);
                requestTemplate.header(name, values);
            }
        }
    }
}


```

