---
title: MyBatis学习笔记03
date: 2023年7月7日11:40:44
---



### 十一、动态SQL【`重点`】

------

> MyBatis的映射文件中支持在基础SQL上添加一些逻辑操作，并动态拼接成完整的SQL之后再执行，以达到SQL复用、简化编程的效果。



#### 11.1 < sql >

```xml
<mapper namespace="com.qf.mybatis.part2.dynamic.BookDao">
    <sql id="BOOKS_FIELD"> <!-- 定义SQL片段 -->
        SELECT id,name,author,publish,sort
    </sql>

    <select id="selectBookByCondition" resultType="com.qf.mybatis.part2.dynamic.Book">
				<include refid="BOOKS_FIELD" /> <!-- 通过ID引用SQL片段 -->
        FROM t_books
    </select>
</mapper>
```
补充：
```xml
    <!-- 抽取重复sql片段 -->
    <sql id="user_field">
        select id,username,password,gender,regist_time registTime
        from t_user 
    </sql>

    <select id="queryUsers" resultType="User">
        <!-- 引用sql片段 -->
        <include refid="user_field"/>
    </select>
```


#### 11.2 < where >
查询是很频繁的，如果查询的列特别多，那就需要再DAO中写特别多的方法，现在可以创建一个
>User queryUser (User user);

方法，可以把User的属性全部返回出来，我们可以在mapper.xml对方法的描述时做 if 判断，想要谁那就返回谁。

那就只需要写一个方法即可

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.qf.dao.UserDAO">

    <!-- 抽取重复sql片段 -->
    <sql id="user_field">
        select id,username,password,gender,regist_time registTime
        from t_user
    </sql>

    <select id="queryUsers" resultType="User">
        <!-- 引用sql片段 -->
        <include refid="user_field"/>
    </select>

    <select id="queryUser" resultType="User">
        <include refid="user_field"/>
        where
        <if test="id != null">
            id=#{id}
        </if>
        <if test="username != null">
            username=#{username}
        </if>
    </select>


</mapper>
```

补充：
@before注解

```java
    UserDAO mapper;
    @Before
    //@before注解是junit的注解,可以在下面方法执行前都执行被修饰的方法，把通用语句放进去
    //此处就是每次都创建一个mapper，
    public void init(){
        mapper= MyBatisUtil.getMapper(UserDAO.class);
    }
```
如果查询多个条件是，会涉及or和and，但是前后如果有条件 if 不满足会造成SQL语句错误。那就要使用where标签，把内容包裹起来。

```java
 <!-- where标签：
             1. 补充where关键字
             2. 识别where子句中如果 以or，and开头，会将or，and去除
         -->
       <where>
            <if test="username!=null">
                username=#{username}
            </if>
            <if test="gender!=null">
                and gender=#{gender}
            </if>
        </where>
```


#### 11.3 < set > --针对于更新
实际更新可能只需要改某一个字段
接受一个对象，如果某个字段为空那就不需要更新。

按照之前的if标签可进行选择，如果修改全部字段没问题，但是其中一个字段为null的话，if标签里面的SQL语句后面会存在一个逗号，引起SQL语法报错。

```xml
<update id="updateuser">
    UPDATE tables
    <!--
               1. 补充set
               2. 自动将set子句的最后的逗号去除
        -->
        <!--<set>
            <if test="username!=null">
                username=#{username},
            </if>
            <if test="password!=null">
                password=#{password},
            </if>
            <if test="gender!=null">
                gender=#{gender},
            </if>
            <if test="registTime!=null">
                regist_time=#{registTime}
            </if>
        </set>-->
    WHERE id = #{id}
</update>
```



#### 11.4 < trim >

> < trim prefix="" suffix="" prefixOverrides="" suffixOverrides="" >代替< where > 、< set >

prefix加前缀 suffix加后缀 

trim是一个比较综合的标签，可以实现where和set的功能


```xml
        <!--  prefix="where" 补充where关键字
              prefixOverrides="or|and"  where子句中如果以or或and开头，会被干掉
        -->
        <trim prefix="where" prefixOverrides="or|and">
            <if test="username!=null">
                username=#{username}
            </if>
            <if test="gender!=null">
                and gender=#{gender}
            </if>
        </trim>

```

```xml
<update id="方法名">
		UPDATE table
 <!-- prefix="set" 补充一个set
             suffixOverrides=","    自动将set子句的最后的逗号去除
         -->
        <trim prefix="set" suffixOverrides=",">
            <if test="username!=null">
                username=#{username},
            </if>
            <if test="password!=null">
                password=#{password},
            </if>
            <if test="gender!=null">
                gender=#{gender},
            </if>
            <if test="registTime!=null">
                regist_time=#{registTime}
            </if>
        </trim>
		WHERE id = #{id}
</update>
```



#### 11.5 < foreach >



```xml
<delete id="deleteByIds">
		DELETE FROM t_books
		WHERE id IN
		<foreach collection="list" open="(" separator="," close=")"  item="id" index="i">
				#{id}
		</foreach>
</delete>
```




| 参数       | 描述     | 取值                                          |
| ---------- | -------- | --------------------------------------------- |
| collection | 容器类型 | list、array、map                              |
| open       | 起始符   | (                                             |
| close      | 结束符   | )                                             |
| separator  | 分隔符   | ,                                             |
| index      | 下标号   | 从0开始，依次递增                             |
| item       | 当前项   | 任意名称（循环中通过 #{任意名称} 表达式访问） |

补充：

```java
public interface UserDAO {

    List<User> queryUsers();
    /*User queryUserById(@Param("id") Integer id);
    User queryUserByUsername(@Param("username") String username);*/
    User queryUser(User user);
    List<User>  queryUser2(User user);
    Integer deleteUser(@Param("id") Integer id);
    Integer updateUser(User user);
    Integer insertUser(User user);

    Integer deleteManyUser(List<Integer> ids);

    Integer insertManyUser(List<User> users);
}
```

```xml
    <!--foreach描述in()括号中的内容，注意输入类型是list<>集合-->
    <delete id="deleteManyUser" parameterType="java.util.List">
        <!--delete from t_user where id in (x,x,x,x,x,x)-->
        delete from t_user where id in
        <foreach collection="list" open="(" close=")" item="id9" separator=",">
            #{id9}
        </foreach>
    </delete>
```
foreach描述：遍历一个list集合，以（开头，以）结尾，每次输出结果存到id9的结果上，然后把id9作输出，中间以逗号分隔。

同理可以使用foreach作添加操作

```xml

    <insert id="insertManyUser" parameterType="java.util.List">
        <!--insert into t_user (null,x,x,x,x,x,x),(null,xxxx,xxx,xx)-->
        insert into t_user values
        <!--foreach描述：insertManyUser方法返回为list，遍历是list-->
        <foreach collection="list" close="" open="" item="user9" separator=",">
            (null,#{user9.username},#{user9.password},#{user9.gender},#{user9.registTime})
        </foreach>
    </insert>
```

```java
    @Test
    public void test5(){
        List<Integer> ids = Arrays.asList(10006, 10007, 10008, 10009);
        mapper.deleteManyUser(ids);
        MyBatisUtil.commit();//修改数据，需要对事务进行提交
    }
    //Arrays.asList() 该方法是将数组转化成List集合的方法。

    @Test
    public void test6(){
        List<User> users = Arrays.asList(new User(null, "张三", "123", true, new Date()),
                new User(null, "李四", "456", false, new Date()));
        mapper.insertManyUser(users);
        MyBatisUtil.commit();
    }
```


### 十二、缓存（Cache）【`重点`】

------

> 内存中的一块存储空间，服务于某个应用程序，旨在将频繁读取的数据临时保存在内存中，便于二次快速访问。

> 存在内存中的数据是频繁被访问，但是很少被更新的数据。

| 无缓存：用户在访问相同数据时，需要发起多次对数据库的直接访问，导致产生大量IO、读写硬盘的操作，效率低下 |
| :----------------------------------------------------------: |
|             ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221922511.png)
             |

| 有缓存：首次访问时，查询数据库，将数据存储到缓存中；再次访问时，直接访问缓存，减少IO、硬盘读写次数、提高效率 |
| :----------------------------------------------------------: |
|                 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221929713.png)
  |



#### 12.1 一级缓存

> SqlSession级别的缓存，同一个SqlSession的发起多次同构查询，会将数据保存在一级缓存中。

* [注意：无需任何配置，默认开启一级缓存。]()
一级缓存默认被开启，不需要配置

```java
 @Test
    public void test7(){
        SqlSession sqlSession = MyBatisUtil.openSession();
        UserDAO mapper = sqlSession.getMapper(UserDAO.class);
        List<User> users = mapper.queryUsers();
        System.out.println("===========");
        List<User> users1 = mapper.queryUsers();//再查一次
        //查询结果发现只查询了一次，所以一级缓存默认开启

        System.out.println("-------------------------------");
        SqlSession session = MyBatisUtil.getSession();
        //mybatisUtil添加getSession方法，获取新的session
        //getsession方法直接返回sqlsession，不再绑定唯一
        
        UserDAO mapper1 = session.getMapper(UserDAO.class);
        mapper1.queryUsers();
    }
```
小结：
1. 同一个sqlsession相同条件查询一次就可以缓存到内存中，不需要访问第二次数据库。
2. 一级缓存使用价值不大，对象已经获取过，就不需要再次获取了，所以需要学习使用二级缓存，范围在sqlsessionFactory范围，也就是整个项目上都可以对返回值全局共享。

#### 12.2 二级缓存--使用价值更高

> SqlSessionFactory级别的缓存，同一个SqlSessionFactory构建的SqlSession发起的多次同构查询，会将数据保存在二级缓存中。

* [注意：在sqlSession.commit()或者sqlSession.close()之后生效。]()



##### 12.2.1 开启全局缓存

> < settings >是MyBatis中极为重要的调整设置，他们会改变MyBatis的运行行为，其他详细配置可参考官方文档。

放到mybatis-config.xml

```xml
<configuration>
	<properties .../>
  	
  	<!-- 注意书写位置 -->
    <settings>
        <setting name="cacheEnabled" value="true"/> <!-- mybaits-config.xml中开启全局缓存（默认开启） -->
    </settings>
  
  	<typeAliases></typeAliases>
</configuration>
```
注意：mybatis的配置文件的标签有明确的顺序，可以查看 configuration  标签 

```java
<!--(properties?, settings?, typeAliases?,
        typeHandlers?, objectFactory?, objectWrapperFactory?,
        reflectorFactory?, plugins?, environments?,
        databaseIdProvider?, mappers?)-->
```



##### 12.2.2 指定Mapper缓存
在mapper文件中加上<cache / >标签，开启二极缓存
```xml
<mapper namespace="com.qf.mybatis.part2.cache.BookDao">
   <!-- 二级缓存默认开启的，但并不是所有的查询结果，都会进入二级缓存 -->
    <cache/>

    <select id="selectBookByCondition" resultType="com.qf.mybatis.part2.cache.Book">
        SELECT * FROM t_books
    </select>
</mapper>
```

```java
@Test
public void testMapperCache(){

  	SqlSession sqlSession1 = MyBatisUtils.getSession();
  
  	BookDao bookDao1 = sqlSession1.getMapper(BookDao.class);

  	bookDao1.selectBookByCondition(new Book());

  	sqlSession1.close(); //必须关闭SqlSession才可缓存数据

  	//--------------------

  	SqlSession sqlSession2 = MyBatisUtils.getSession();

  	BookDao bookDao2 = sqlSession2.getMapper(BookDao.class);

  	bookDao2.selectBookByCondition(new Book());

  	sqlSession2.close(); //缓存击中
}
```
小结：
1. 必须关闭SqlSession才可缓存数据，关闭后才会进到二级缓存。


##### 12.2.3 缓存清空并重新缓存
如果数据库中数据被增删改之后就需要清除缓存

```java
@Test
public void testMapperCache(){

  	SqlSession sqlSession1 = MyBatisUtils.getSession();
  
  	BookDao bookDao1 = sqlSession1.getMapper(BookDao.class);

  	bookDao1.selectBookByCondition(new Book());

  	sqlSession1.close(); //必须关闭SqlSession才可缓存数据

  	//--------------------
  	
		SqlSession sqlSession3 = MyBatisUtils.getSession();

		BookDao bookDao3 = sqlSession3.getMapper(BookDao.class);

		bookDao3.deleteBookById(102);

		sqlSession3.commit(); //DML成功，数据发生变化，缓存清空

		sqlSession3.close();
  
  	//--------------------

  	SqlSession sqlSession2 = MyBatisUtils.getSession();

  	BookDao bookDao2 = sqlSession2.getMapper(BookDao.class);

  	bookDao2.selectBookByCondition(new Book());

  	sqlSession2.close(); //缓存未击中，重新查询数据库、重新缓存
}
```
使用同一个mapper删除就会被移除。
第一次查询，数据缓存到内存中，第二次删除，数据被删除持久化。第三次重新查询，缓存未被击中。


### 十三、Druid连接池--德鲁伊

------

之前做的每一个请求都需要一个连接，整个流程是比较费时间的，并且消耗资源。

#### 13.1 概念

> Druid 是阿里巴巴开源平台上的一个项目，整个项目由数据库连接池、插件框架和 SQL 解析器组成。该项目主要是为了扩展 JDBC 的一些限制，可以让程序员实现一些特殊的需求，比如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等，程序员可以通过定制来实现自己需要的功能。
>



#### 13.2 不同连接池对比

> 测试执行申请归还连接 1,000,000（一百万）次总耗时性能对比。



##### 13.2.1 测试环境

| 环境 | 版本                  |
| ---- | --------------------- |
| OS   | OS X 10.8.2           |
| CPU  | Intel i7 2GHz 4 Core  |
| JVM  | Java Version 1.7.0_05 |



##### 13.2.2 基准测试结果对比

| JDBC-Conn Pool   | 1 Thread | 2 threads | 5 threads  | 10 threads | 20 threads | 50 threads  |
| ---------------- | -------- | --------- | ---------- | ---------- | ---------- | ----------- |
| [Druid]()        | [898]()  | [1,191]() | [1,324]()  | [1,362]()  | [1,325]()  | [1,459]()   |
| tomcat-jdbc      | 1,269    | 1,378     | 2,029      | 2,103      | 1,879      | 2,025       |
| DBCP             | 2,324    | 5,055     | 5,446      | 5,471      | 5,524      | 5,415       |
| BoneCP           | 3,738    | 3,150     | 3,194      | 5,681      | 11,018     | 23,125      |
| jboss-datasource | 4,377    | 2,988     | 3,680      | 3,980      | 32,708     | 37,742      |
| C3P0             | 10,841   | 13,637    | 10,682     | 11,055     | 14,497     | 20,351      |
| Proxool          | 16,337   | 16,187    | 18,310(Ex) | 25,945     | 33,706(Ex) | 39,501 (Ex) |



##### 13.2.3 测试结论

* [Druid 是性能最好的数据库连接池，tomcat-jdbc 和 druid 性能接近。]()
* Proxool 在激烈并发时会抛异常，不适用。
* C3P0 和 Proxool 都相当慢，影响 sql 执行效率。
* BoneCP 性能并不优越，采用 LinkedTransferQueue 并没有能够获得性能提升。
* 除了 bonecp，其他的在 JDK 7 上跑得比 JDK 6 上快。
* jboss-datasource 虽然稳定，但性能很糟糕。



#### 13.3 配置pom.xml

> 引入Druid依赖

```xml
<!-- https://mvnrepository.com/artifact/com.alibaba/druid -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.16</version>
</dependency>
```



#### 13.4 创建DruidDataSourceFactory

> MyDruidDataSourceFactory并继承PooledDataSourceFactory，并替换数据源。

```java
package com.qf.mybatis.part2.utils;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.datasou	rce.pooled.PooledDataSourceFactory;

public class MyDruidDataSourceFactory extends PooledDataSourceFactory {
    public MyDruidDataSourceFactory() {
        this.dataSource = new DruidDataSource();//替换数据源
    }
}
//会返回德鲁伊连接池的一个对象。
```



#### 13.5 修改mybatis-config.xml

> mybatis-config.xml中连接池相关配置。

```xml
<!--连接池-->
 <!-- 数据连接参数  -->
            <dataSource type="com.qf.datasource.MyDruidDataSourceFactory">
                <property name="driverClass" value="${jdbc.driver}"/>
                <!-- &转义&amp; -->
                <property name="jdbcUrl" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
```

[注意：< property name="属性名" />属性名必须与com.alibaba.druid.pool.DruidAbstractDataSource中一致。]()



### 十四、PageHelper -- 分页

------

#### 14.1 概念

> PageHelper是适用于MyBatis框架的一个分页插件，使用方式极为便捷，支持任何复杂的单表、多表分页查询操作。



#### 14.2 访问与下载

> 官方网站：https://pagehelper.github.io/
>
> 下载地址：https://github.com/pagehelper/Mybatis-PageHelper



#### 14.3 开发步骤

> PageHelper中提供了多个分页操作的静态方法入口。



##### 14.3.1 引入依赖

> pom.xml中引入PageHelper依赖。

```xml
<dependency>
		<groupId>com.github.pagehelper</groupId>
		<artifactId>pagehelper</artifactId>
		<version>5.1.10</version>
</dependency>
```



##### 14.3.2 配置MyBatis-config.xml

> 在MyBatis-config.xml中添加< plugins >。

```xml
<configuration>
  	<typeAliases></typeAliases>
  
    <plugins>
        <!-- com.github.pagehelper为PageHelper类所在包名 -->
        <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
    </plugins>
  
  	<environments>...</environments>
</configuration>
```



##### 14.3.3 PageHelper应用方式

> 使用PageHelper提供的静态方法设置分页查询条件。

```java
 @Test
    public void testPage(){
        UserDAO mapper = MyBatisUtil.getMapper(UserDAO.class);
        //在查询前，设置分页  查询第一页，每页2条数据
        // PageHelper特点： 对其之后的第一个查询，进行分页功能追加
        PageHelper.startPage(1,2);
        List<User> users = mapper.queryUsers();
        for (User user : users) {
            System.out.println(user);
        }
        // 将查询结果 封装到 PageInfo对象中
        PageInfo<User> pageInfo = new PageInfo(users);
        System.out.println("================");
    }
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210427192647537.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)



#### 14.4 PageInfo对象

> PageInfo对象中包含了分页操作中的所有相关数据。

|                        PageInfo结构图                        |
| :----------------------------------------------------------: |
| ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424222110456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
|



##### 14.4.1 PageInfo应用方式

> 使用PageInfo保存分页查询结果。

```java
@Test
public void testPageInfo(){
		UserDao userDao = MyBatisUtils.getMapper(UserDao.class);
		PageHelper.startPage(6, 2);
		List<User> users = userDao.selectAllUsers();
		PageInfo<User> pageInfo = new PageInfo<User>(users);//将分页查询的结果集保存在PageInfo对象中
		System.out.println(pageInfo);
}
```



##### 14.4.2 注意事项

> * 只有在PageHelper.startPage()方法之后的[第一个查询会有执行分页]()。
> * 分页插件[不支持带有“for update”]()的查询语句。
> * 分页插件不支持[“嵌套查询”]()，由于嵌套结果方式会导致结果集被折叠，所以无法保证分页结果数量正确。。



##### 14.4.3 分页练习

> 使用Servlet+JSP+MyBatis+分页插件，完成分页查询功能。



### 十五、补充【了解】

------

> [以下内容并非必备知识，了解即可。]()



#### 15.1 MyBatis注解操作

> 通过在接口中直接添加MyBatis注解，完成CRUD。

* [注意：接口注解定义完毕后，需将接口全限定名注册到mybatis-config.xml的< mappers >中。]()
* [经验：注解模式属于硬编码到.java文件中，失去了使用配置文件外部修改的优势，可结合需求选用。]()

```xml
<mappers>
		<mapper class="com.qf.mybatis.part1.annotations.UserMapper" /><!-- class="接口全限定名"-->
</mappers>
```



##### 15.1.1 查询

```java
public interface UserMapper {
    @Select("SELECT * FROM t_users WHERE id = #{id}")
    public User selectUserById(Integer id);

    @Select("SELECT * FROM t_users WHERE id = #{id} AND password = #{pwd}")
    public User selectUserByIdAndPwd_annotation(@Param("id") Integer id, @Param("pwd") String password);
}
```



##### 15.1.2 删除

```java
@Delete(value = "DELETE FROM t_users WHERE id = #{id}")
public int deleteUser(Integer id);
```



##### 15.1.3 修改

```java
@Update("UPDATE t_users SET name = #{name} , password = #{password} , salary = #{salary} , birthday = #{birthday} WHERE id = #{id}")
public int updateUser(User user);
```



##### 15.1.4 插入

```java
@Insert("INSERT INTO t_users VALUES(#{id},#{name},#{password},#{salary},#{birthday},null)")
public int insertUser(User user);

@Options(useGeneratedKeys = true , keyProperty = "id") // 自增key，主键为id
@Insert("INSERT INTO t_users VALUES(#{id},#{name},#{password},#{salary},#{birthday},null)")
public int insertUserGeneratedKeys(User user);
```
补充：UserDAO接口

```java
    @Select("SELECT id,username,password,gender,regist_time FROM t_user")
    List<User> queryUsers();
    @Select("SELECT id,username,password,gender,regist_time\n" +
            " FROM t_user\n" +
            " WHERE id = #{id}")
    User queryUserById(@Param("id") Integer id);

    @Delete("delete from t_user\n" +
            "        where id=#{id}")
    Integer deleteUser(@Param("id") Integer id);

    @Update("update t_user\n" +
            "        set username=#{username},password=#{password},gender=#{gender},regist_time=#{registTime}\n" +
            "        where id=#{id}")
    Integer updateUser(User user);

  
```
主键回填：

```java
  @Options(useGeneratedKeys = true , keyProperty = "id") // 自增key，主键为id
    @Insert("insert into t_user values(#{id},#{username},#{password},#{gender},#{registTime})")
    Integer insertUser(User user);
```

Test

```java
    @Test
    public void test1(){
        UserDAO mapper = MyBatisUtil.getMapper(UserDAO.class);
        List<User> users = mapper.queryUsers();
        for (User user : users) {
            System.out.println(user);
        }
        System.out.println("============");
        User user = mapper.queryUserById(10011);
        System.out.println(user);
        //mapper.deleteUser(10011);
        User new_user = new User(null, "new_user", "1111", true, new Date());
        //mapper.insertUser(new_user);
        System.out.println("新用户id:"+new_user.getId());
        //mapper.updateUser(new User(10015,"张三2","11111",true,new Date()));
        MyBatisUtil.commit();
    }
```
注解开发： 第一步写DAO，第二步写注解，第三步注册到mybatis-config.xml

小结注解：
1. 注解会产生耦合，不建议使用。
2. 使用mapper更方便。

#### 15.2 $符号的应用场景

> ${attribute} 属于字符串拼接SQL，而非预编译占位符，会有注入攻击问题，不建议在常规SQL中使用，常用于可解决动态生降序问题。



##### 15.2.1 $符号参数绑定

```java
public List<User> selectAllUsers1(User user); // ${name} ${id} 可获取user中的属性值
public List<User> selectAllUsers2(@Param("rule") String rule); //必须使用@Param否则会作为属性解析
```

```xml
<select id="selectAllUsers1" resultType="user">
	SELECT * FROM t_users 
    WHERE name = '${name}' or id = ${id} <!-- 拼接name和id，如果是字符类型需要用单引号：'${name}' -->
</select>
<select id="selectAllUsers2" resultType="user">
	SELECT * FROM t_users 
  	ORDER BY id ${rule} <!-- 拼接 asc | desc -->
</select>
```

```java
User user = new User(....);
List<User> ulist1 = userDAO.selectAllUsers1(user); //调用时传入user对象

List<User> ulist2 = userDao.selectAllUsers2("desc"); //调用时传入asc | desc
```



##### 15.2.2 $符号注入攻击

```xml
<select id="selectUsersByKeyword" resultType="user">
	SELECT * FROM t_user
  	WHERE name = '${name}' <!-- 会存在注入攻击  比如传入参数是 【String name = "tom' or '1'='1";】-->
</select>
```

| 注入攻击，拼接的内容，改变了原sql语义，被攻击！ |
| :---------------------------------------------: |
|        ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424222038421.jpg)
     |

$符小结:
缺点：
1. 使用${}在涉及字符字段的时候需要在SQL中加上单引号，#{}是自动加的。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210502125207246.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210502125229775.png)
2. 如果写的是#{arg0},就会找这个参数对应类型的get方法获取arg0的值。也就是说简单类型的就必须加上@parm注解，如果是引用就不需要加

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210502125345381.png)
3.  本质区别：用#号取值，用的是一个占位符，$是直接进行拼接
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210502125752632.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/2021050212585750.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)

#号使用占位符
```java
/**
     * 1.占位符：规避sql注入风险
     * 2.占位符要和列相关位置才可以使用
     * 原则：填充数据，要和列相关
     * select * from t_user where id=?
     * insert into t_user values(?,?,?)
     * update t_user set username=?,password=?
     * @throws ClassNotFoundException
     * @throws SQLException
     */
 @Test
    public void test2() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mybatis_shine?useUnicode=true&characterEncoding=utf-8","root","111111");

        //要填充的数据
        String username = "shine_66' or '1'='1";
        String rule = "desc";
        String sql = "select * from t_user where username=?";
        String sql2 = "select * from t_user order by id ?";

        PreparedStatement preparedStatement = connection.prepareStatement(sql2);
        // 在占位符上 填充desc
        preparedStatement.setString(1,rule);

        ResultSet resultSet = preparedStatement.executeQuery();
        while(resultSet.next()){
            System.out.println(resultSet.getInt("id"));
            System.out.println(resultSet.getString("username"));
        }
    }
```
上述SQL变成select * from t_user order by id="shine_66' or '1'='1"
数据库中是找不到这个字符的

$直接拼接

```java

/**
     * 1. sql注入风险
     * 2. 随意拼接
     * @throws ClassNotFoundException
     * @throws SQLException
     */
@Test
    public void test3() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mybatis_shine?useUnicode=true&characterEncoding=utf-8","root","111111");

        //要填充的数据
        String username = "shine_xxx' or '1'='1";
        String rule = "desc";
        //sq拼接填充数据  select * from t_user where username='shine_66'
        //sq拼接填充数据  select * from t_user where username='shine_xxx' or '1'='1'
        // 当拼接sql片段，有sql注入风险，外界参数改变原有sql的语义
        String sql = "select * from t_user where username='"+username+"'";
        String sql2 = "select * from t_user order by id "+rule;

        Statement statement = connection.createStatement();

        ResultSet resultSet = statement.executeQuery(sql2);
        while(resultSet.next()){
            System.out.println(resultSet.getInt("id"));
            System.out.println(resultSet.getString("username"));

        }
    }
```
综上：当拼接sql片段，有sql注入风险，外界参数改变原有sql的语义。原则上能不用拼接就不用。

4. $的使用场景，在sql语句上动态填充：如排序

```java
	    String rule = "desc";
        String sql2 = "select * from t_user order by id "+rule;
```


#### 15.3 MyBatis处理关联关系-嵌套查询【了解】

> 思路：查询部门信息时，及联查询所属的员工信息。
>
> * DepartmentDao接口中定义selectDepartmentById，并实现Mapper。
> * EmployeeDao接口中定义selectEmployeesByDeptId，并实现Mapper，
> * 当selectDepartmentById被执行时，通过< collection >调用selectEmployeesByDeptId方法，并传入条件参数。


现在是查询两次，员工部门表
员工查员工，部门查部门。

```java

public interface EmployeeDAO {
    // 查询某个部门下的所有员工
    List<Employee> queryEmployeeByDeptId(@Param("deptId") Integer deptId);
}
```

```xml
<resultMap id="emp_dept" type="Employee">
        <id column="id" property="id"></id>
        <result column="name" property="name"></result>
        <result column="salary" property="salary"></result>

        <!--<association property="department" javaType="Department">
            <id column="deptId" property="id"></id>
            <result column="deptName" property="name"></result>
            <result column="location" property="location"></result>
        </association>-->

        <association property="department" javaType="Department"
                     select="com.qf.dao.DepartmentDAO.queryDepartmentById"
                     column="dept_id"<--给到的属性-->
        ></association>
    </resultMap>

    <select id="queryEmployeeByDeptId" resultType="Employee">
        select id,name,salary
        from t_employees
        where dept_id=#{deptId}
    </select>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210502161605501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
可以查出当前部门下的所有员工。
先查出部门，再通过部门使用查询员工的方法进行嵌套查询。

```java
DepartmentDAO mapper = MyBatisUtil.getMapper(DepartmentDAO.class);
        Department department = mapper.queryDepartmentById(1);
        System.out.println(department);
        List<Employee> employees = department.getEmployees();
        for (Employee employee : employees) {
            System.out.println(employee);
        }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210502162002494.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
反过来查询员工的部门信息也是可以的

##### 15.3.1 主表查询

> 定义selectEmployeesByDeptId，并书写Mapper，实现根据部门ID查询员工信息

```java
public interface EmployeeDao {
    /**
     * 根据部门编号查询员工信息
     * @param did 部门编号
     * @return 该部门中的所有员工
     */
    public List<Employee> selectEmployeeByDeptId(@Param("did") String did);
}
```

```xml
<mapper namespace="com.qf.mybatis.part2.one2many.EmployeeDao">
    <!-- 根据部门编号查询所有员工 -->
    <select id="selectEmployeeById" resultType="employee" >
        SELECT id,name,salary,dept_id 
      	FROM t_employees 
      	WHERE dept_id = #{did}
    </select>
</mapper>
```



##### 15.3.2 及联调用

> ##### 定义selectDepartmentById，并书写Mapper，实现根据部门ID查询部门信息，并及联查询该部门员工信息

```java
public interface DepartmentDao {
    /**
     * 查询部门信息
     * @param id
     * @return
     */
    public Department selectDepartmentById(@Param("id") String id);
}
```

```xml
<mapper namespace="com.qf.mybatis.part2.one2many.DepartmentDao">
    <resultMap id="departmentResultMap" type="department">
        <id property="id" column="id" />
        <result property="name" column="name" />
        <result property="location" column="location" />
         <!-- column="传入目标方法的条件参数"  select="及联调用的查询目标"-->
        <collection property="emps" ofType="Employee" column="id" 
                    select="com.qf.mybatis.part2.one2many.EmployeeDao.selectEmployeeByDeptId" />
    </resultMap>
    <select id="selectAllDepartments" resultMap="departmentResultMap">
        SELECT id , name , location
        FROM t_departments
        WHERE id = #{id}
    </select>
</mapper>
```



##### 15.3.3 延迟加载

> ##### mybatis-config.xml中开启延迟加载

```xml
<settings>
		<setting name="lazyLoadingEnabled" value="true"/> <!-- 开启延迟加载（默认false） -->
</settings>
```

* [注意：开启延迟加载后，如果不使用及联数据，则不会触发及联查询操作，有利于加快查询速度、节省内存资源。]()



