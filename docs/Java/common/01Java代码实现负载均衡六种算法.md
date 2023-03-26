---
title: 01Java代码实现负载均衡六种算法
date: 2023-3-20 21:52:20
---



## 介绍

[负载均衡](https://so.csdn.net/so/search?q=负载均衡&spm=1001.2101.3001.7020)是我们平时常见的解决高并发问题的一大法宝，负载均衡从字面理解就是将请求均衡分发到后台的服务器，本文通过例子模拟几种常见负载均衡算法的实现



## 负载均衡算法



本文主要介绍一下几种负载均衡算法的实现：

1. 随机算法
2. 加权随机算法
3. 轮询算法
4. 加权轮询算法
5. IP-Hash算法
6. 最小连接数算法

##### 2.1、随机算法（Random）

通过系统随机函数，根据后台服务器的server的地址随机选取其中一台服务器进行访问，根据概率论的相关知识，随着调用量的增加，最终的访问趋于平均，就是达到了均衡的目的。

```java
/**
 * @author Administrator
 * @Date 2019/8/20 15:08
 *
 * 随机法：
 * 负载均衡方法随机的把负载分配到各个可用的服务器上，通过随机数生成算法选取一个服务器。毕竟随机，，有效性受到了质疑
 *
 */
public class TestRandom {
    //    1.定义map, key-ip,value-weight
    static Map<String,Integer> ipMap=new HashMap<>();
    static {
        ipMap.put("192.168.13.1",1);
        ipMap.put("192.168.13.2",2);
        ipMap.put("192.168.13.3",4);
    }
    public String Random() {
        Map<String,Integer> ipServerMap=new ConcurrentHashMap<>();
        ipServerMap.putAll(ipMap);

        Set<String> ipSet=ipServerMap.keySet();

        //定义一个list放所有server
        ArrayList<String> ipArrayList=new ArrayList<String>();
        ipArrayList.addAll(ipSet);

        //循环随机数
        Random random=new Random();
        //随机数在list数量中取（1-list.size）
        int pos=random.nextInt(ipArrayList.size());
        String serverNameReturn= ipArrayList.get(pos);
        return  serverNameReturn;
    }

    public static void main(String[] args) {
        TestRandom testRandom=new TestRandom();
        for (int i =0;i<10;i++){
            String server=testRandom.Random();
            System.out.println(server);
        }
    }
}


```



##### 2.2、加权随机算法（WeightRandom）

加权随机算法就是在上面的随机算法的基础上做的优化，比如一些性能好的Server多承担一些，请求根据权重分发到各个服务器。

```java
/**
 * @author Administrator
 * @Date 2019/8/20 15:11
 * 加权随机法：
 * 获取带有权重的随机数字，随机这种东西，不能看绝对，只能看相对。
 */
public class TestWeightRandom {

    //    1.定义map, key-ip,value-weight
    static Map<String, Integer> ipMap = new HashMap<>();

    static {
        ipMap.put("192.168.13.1", 1);
        ipMap.put("192.168.13.2", 2);
        ipMap.put("192.168.13.3", 4);


    }

    public String weightRandom() {
        Map<String, Integer> ipServerMap = new ConcurrentHashMap<>();
        ipServerMap.putAll(ipMap);

        Set<String> ipSet = ipServerMap.keySet();
        Iterator<String> ipIterator = ipSet.iterator();

        //定义一个list放所有server
        ArrayList<String> ipArrayList = new ArrayList<String>();

        //循环set，根据set中的可以去得知map中的value，给list中添加对应数字的server数量
        while (ipIterator.hasNext()) {
            String serverName = ipIterator.next();
            Integer weight = ipServerMap.get(serverName);
            for (int i = 0; i < weight; i++) {
                ipArrayList.add(serverName);
            }
        }

        //循环随机数
        Random random = new Random();
        //随机数在list数量中取（1-list.size）
        int pos = random.nextInt(ipArrayList.size());
        String serverNameReturn = ipArrayList.get(pos);
        return serverNameReturn;
    }

    public static void main(String[] args) {
        TestWeightRandom testWeightRandom = new TestWeightRandom();
        for (int i = 0; i < 10; i++) {
            String server = testWeightRandom.weightRandom();
            System.out.println(server);
        }


    }
}


```

##### 2.3、轮询算法（Random）

轮询算法顾名思义，就是按照顺序轮流访问后台服务。

```java
/**
 * @author Administrator
 * @Date 2019/8/20 14:34
 *
 * 轮询法：
 * 轮询算法按顺序把每个新的连接请求分配给下一个服务器，最终把所有请求平分给所有的服务器。
 * 优点：绝对公平
 * 缺点：无法根据服务器性能去分配，无法合理利用服务器资源。
 *
 * @TODO
 */
public class TestRoundRobin {


    //1.定义map, key-ip,value-weight
    static Map<String,Integer> ipMap=new HashMap<>();
    static {
        ipMap.put("192.168.13.1",1);
        ipMap.put("192.168.13.2",1);
        ipMap.put("192.168.13.3",1);

    }

    //Integer sum=0;
    Integer  pos = 0;

    public String RoundRobin(){
        Map<String,Integer> ipServerMap=new ConcurrentHashMap<>();
        ipServerMap.putAll(ipMap);

        //2.取出来key,放到set中
        Set<String> ipset=ipServerMap.keySet();

        //3.set放到list，要循环list取出
        ArrayList<String> iplist=new ArrayList<String>();
        iplist.addAll(ipset);
        String serverName=null;

        //4.定义一个循环的值，如果大于set就从0开始
        synchronized(pos){
            if (pos>=ipset.size()){
                pos=0;
            }
            serverName=iplist.get(pos);
            //轮询+1
            pos ++;
        }
        return serverName;

    }

    public static void main(String[] args) {
        TestRoundRobin testRoundRobin=new TestRoundRobin();
        for (int i=0;i<10;i++){
            String serverIp=testRoundRobin.RoundRobin();
            System.out.println(serverIp);
        }
    }
}

```



##### 2.4、加权轮询算法（WeightRoundRobin）

加权随机一样，加权轮询，就是在轮询的基础上加上权重，将服务器性能好的，权重高一些。

```java
/**
 * @author Administrator
 * @Date 2019/8/20 15:00
 * 加权轮询法：
 * 该算法中，每个机器接受的连接数量是按权重比例分配的。这是对普通轮询算法的改进，比如你可以设定：
 * 第三台机器的处理能力是第一台机器的两倍，那么负载均衡器会把两倍的连接数量分配给第3台机器。加权轮询分为：简单的轮询、平滑的轮询。
 * 什么是平滑的轮询，就是把每个不同的服务，平均分布。在Nginx源码中，实现了一种叫做平滑的加权轮询（smooth weighted round-robin balancing）
 * 的算法，它生成的序列更加均匀。5个请求现在分散开来，不再是连续的。
 */
public class TestWeightRoundRobin {
    //1.map, key-ip,value-weight
    static Map<String,Integer> ipMap=new HashMap<>();
    static {
        ipMap.put("192.168.13.1",1);
        ipMap.put("192.168.13.2",2);
        ipMap.put("192.168.13.3",4);


    }
    Integer pos=0;
    public String weightRoundRobin(){
        Map<String,Integer> ipServerMap=new ConcurrentHashMap<>();
        ipServerMap.putAll(ipMap);

        Set<String> ipSet=ipServerMap.keySet();
        Iterator<String> ipIterator=ipSet.iterator();

        //定义一个list放所有server
        ArrayList<String> ipArrayList=new ArrayList<String>();

        //循环set，根据set中的可以去得知map中的value，给list中添加对应数字的server数量
        while (ipIterator.hasNext()){
            String serverName=ipIterator.next();
            Integer weight=ipServerMap.get(serverName);
            for (int i = 0;i < weight ;i++){
                ipArrayList.add(serverName);
            }
        }
        String serverName=null;
        if (pos>=ipArrayList.size()){
            pos=0;
        }
        serverName=ipArrayList.get(pos);
        //轮询+1
        pos ++;


        return  serverName;
    }

    public static void main(String[] args) {
        TestWeightRoundRobin testWeightRoundRobin=new TestWeightRoundRobin();
        for (int i =0;i<10;i++){
            String server=testWeightRoundRobin.weightRoundRobin();
            System.out.println(server);
        }


    }
}

```



##### 2.5、IP-Hash算法（IpHash）

根据hash算法，将请求大致均分的分配到各个服务器上

```java
/**
 * @author Administrator
 * @Date 2019/8/20 15:13
 * IP_Hash算法：
 * hash(object)%N算法，通过一种散列算法把请求分配到不同的服务器上。
 */
public class TestIpHash {
    //    1.定义map, key-ip,value-weight
    static Map<String, Integer> ipMap = new HashMap<>();

    static {
        ipMap.put("192.168.13.1", 1);
        ipMap.put("192.168.13.2", 2);
        ipMap.put("192.168.13.3", 4);
    }

    public String ipHash(String clientIP) {
        Map<String, Integer> ipServerMap = new ConcurrentHashMap<>();
        ipServerMap.putAll(ipMap);

        //2.取出来key,放到set中
        Set<String> ipset = ipServerMap.keySet();

        //3.set放到list，要循环list取出
        ArrayList<String> iplist = new ArrayList<String>();
        iplist.addAll(ipset);

        //对ip的hashcode值取余数，每次都一样的
        int hashCode = clientIP.hashCode();
        int serverListsize = iplist.size();
        int pos = hashCode % serverListsize;
        return iplist.get(pos);

    }

    public static void main(String[] args) {
        TestIpHash testIpHash = new TestIpHash();
        for(int i = 0; i < 10; i++){
            System.out.println(testIpHash.ipHash("192.168.21.2"));
            System.out.println(testIpHash.ipHash("192.168.21.3"));
        }
    }

}


```

2.6、最小连接数算法（ LeastConnection）
前面我们费尽心思来实现服务消费者请求次数分配的均衡，我们知道这样做是没错的，可以为后端的多台服务器平均分配工作量，最大程度地提高服务器的利用率，但是，实际上，请求次数的均衡并不代表负载的均衡。因此我们需要介绍最小连接数法，最小连接数法比较灵活和智能，由于后台服务器的配置不尽相同，对请求的处理有快有慢，它正是根据后端服务器当前的连接情况，动态的选取其中当前积压连接数最少的一台服务器来处理当前请求，尽可能的提高后台服务器利用率，将负载合理的分流到每一台服务器。

```java
/**
 * @ClassName: TestLeastConnection
 * @Description: 最小连接数算法
 * 最小连接数法是根据服务器当前的连接情况进行负载均衡的，当请求到来时，会选取当前连接数最少的一台服务器来处理请求。
 * @Author: leo825
 * @Date: 2020-02-11 13:02
 * @Version: 1.0
 */
public class TestLeastConnection {
    //1.定义map, key-ip,value-weight
    /**
     * 定义map
     * key：模拟后台服务的ip
     * value：一个Map，map的key是权重，value是接受请求的次数，
     */
    static Map<String, Integer> ipMap = new HashMap<>();
    //模拟请求的次数
    static ThreadLocalRandom random = ThreadLocalRandom.current();

    static {
        ipMap.put("192.168.13.1", random.nextInt(10));
        ipMap.put("192.168.13.2", random.nextInt(10));
        ipMap.put("192.168.13.3", random.nextInt(10));
    }

    //从list中选取接受请求数最少的服务并返回
    public String leastConnection() {
        Iterator<String> ipListIterator = ipMap.keySet().iterator();
        String serverName = null;
        int times = 0;//访问次数
        while (ipListIterator.hasNext()) {
            String tmpServerName = ipListIterator.next();
            int requestTimes = ipMap.get(tmpServerName);
            //第一次需要赋值
            if (times == 0) {
                serverName = tmpServerName;
                times = requestTimes;
            } else {
                //找到最小次数
                if (times > requestTimes) {
                    serverName = tmpServerName;
                    times = requestTimes;
                }
            }
        }
        ipMap.put(serverName, ++times);//访问后+1
        System.out.println("获取到的地址是：" + serverName + ", 访问次数：" + times);
        return serverName;
    }

    public static void main(String[] args) {
        TestLeastConnection testLeastConnection = new TestLeastConnection();
        for (int i = 0; i < 10; i++) {
            testLeastConnection.leastConnection();
        }
    }
}

```





