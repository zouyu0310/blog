---
title: BigDecimal进行金额计算
date: 2023-3-9 14:50:37
---



## 案例

```
    public static void main(String[] args) {
        float a = 72.49f;
        System.out.println("商品a单价：" + a);
        int n = 10;
        System.out.println("购买a数量：" + n);
        System.out.println("商品a总价：" + a*n);

        double d1 = 0.58D;
        long n1 = 100L;
        System.out.println("商品b单价：" + d1);
        System.out.println("购买b数量：" + n1);
        System.out.println("商品b总价：" + d1*n1);
    }

输出: 
商品a单价：72.49
购买a数量：10
商品a总价：724.89996
商品b单价：0.58
购买b数量：100
商品b总价：57.99999999999999
```



结论: 无论是float还是double都出现了金额缺失的情况。



产生丢失精度的原因：浮点数不精确的根本原因在于尾数部分的位数是固定的，一旦需要表示的数字的精度高于浮点数的精度，那么必然产生误差！这在处理金融数据的情况下是绝对不允许存在的。

Java 中 float 的精度为 6-7 位有效数字。double 的精度为 15-16 位，BigDecimal 用来对超过16位有效位的数进行精确的运算



## 使用BigDecimal进行金额计算

因为float和double存在精度丢失问题所以在进行数字的精确计算的时候，我们需要通过BigDecmal来进行精确计算。

### 加法 **add()**函数   减法**subtract()**函数

### 乘法**multiply()**函数  除法**divide()**函数  绝对值abs()函数

```
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal(0.005);
        BigDecimal num2 = new BigDecimal(1000000);
        BigDecimal num3 = new BigDecimal(-1000000);
        //尽量用字符串的形式初始化
        BigDecimal num12 = new BigDecimal("0.005");
        BigDecimal num22 = new BigDecimal("1000000");
        BigDecimal num32 = new BigDecimal("-1000000");
        //加法
        BigDecimal result1 = num1.add(num2);
        BigDecimal result12 = num12.add(num22);

        System.out.println(result1);
        System.out.println(result12);
        //减法
        BigDecimal result2 = num1.subtract(num2);
        BigDecimal result22 = num12.subtract(num22);
        System.out.println(result2);
        System.out.println(result22);

        //乘法
        BigDecimal result3 = num1.multiply(num2);
        BigDecimal result32 = num12.multiply(num22);
        System.out.println(result3);
        System.out.println(result32);

        //绝对值
        BigDecimal result4 = num3.abs();
        BigDecimal result42 = num32.abs();
        System.out.println(result4);
        System.out.println(result42);

        //除法
        BigDecimal result5 = num2.divide(num1,20,BigDecimal.ROUND_HALF_UP);
        BigDecimal result52 = num22.divide(num12,20,BigDecimal.ROUND_HALF_UP);
        System.out.println(result5);
        System.out.println(result52);
    }
    
 输出: 
1000000.005000000000000000104083408558608425664715468883514404296875
1000000.005
-999999.994999999999999999895916591441391574335284531116485595703125
-999999.995
5000.000000000000104083408558608425664715468883514404296875000000
5000.000
1000000
1000000
199999999.99999999583666365766
200000000.00000000000000000000
```







使用BigDecimal类构造方法传入double类型时，计算的结果也是不精确的！

因为不是所有的浮点数都能够被精确的表示成一个double 类型值，有些浮点数值不能够被精确的表示成 double 类型值，因此它会被表示成与它最接近的 double 类型的值。必须改用传入String的构造方法。这一点在BigDecimal类的构造方法注释中有说明。


