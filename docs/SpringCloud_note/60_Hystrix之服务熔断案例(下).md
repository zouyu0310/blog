## 60_Hystrix之服务熔断案例(下)

服务侧  cloud-provider-hygtrix-payment8001  -- 8001 PaymentController

```
    //====服务熔断
    @GetMapping("/payment/circuit/{id}")
    public String paymentCircuitBreaker(@PathVariable("id") Integer id)
    {
        String result = paymentService.paymentCircuitBreaker(id);
        log.info("****result: "+result);
        return result;
    }
```

测试

自测cloud-provider-hystrix-payment8001

正确 - http://localhost:8001/payment/circuit/1

错误 - http://localhost:8001/payment/circuit/-1

多次错误，再来次正确，但显示 **错误信息** --此时发生熔断，再次刷新后恢复 说明成功重启


