---
title: MyBatis学习笔记02
date: 2023年7月7日11:40:22
---



### 八、MyBatis工具类【`重点`】

------

#### 8.1 封装工具类

> * Resource：用于获得读取配置文件的IO对象，耗费资源，建议通过IO一次性读取所有所需要的数据。
>
>  * SqlSessionFactory：SqlSession工厂类，内存占用多，耗费资源，建议每个应用只创建一个对象。
>
> * SqlSession：相当于Connection，可控制事务，应为线程私有，不被多线程共享。
>
> * 将获得连接、关闭连接、提交事务、回滚事务、获得接口实现类等方法进行封装。

```java
package com.qf.mybatis.part1.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.InputStream;

public class MyBatisUtils {

  	//获得SqlSession工厂
    private static SqlSessionFactory factory;

  	//创建ThreadLocal绑定当前线程中的SqlSession对象
    private static final ThreadLocal<SqlSession> tl = new ThreadLocal<SqlSession>();

    static {
        try {
            InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
            factory = new SqlSessionFactoryBuilder().build(is);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //获得连接（从tl中获得当前线程SqlSession）
    private static SqlSession openSession(){
        SqlSession session = tl.get();
        if(session == null){
            session = factory.openSession();
            tl.set(session);
        }
        return session;
    }

    //释放连接（释放当前线程中的SqlSession）
    private static void closeSession(){
        SqlSession session = tl.get();
        session.close();
        tl.remove();
    }

    //提交事务（提交当前线程中的SqlSession所管理的事务）
    public static void commit(){
        SqlSession session = openSession();
        session.commit();
        closeSession();
    }

    //回滚事务（回滚当前线程中的SqlSession所管理的事务）
    public static void rollback(){
        SqlSession session = openSession();
        session.rollback();
        closeSession();
    }

    //获得接口实现类对象
    public static <T extends Object> T getMapper(Class<T> clazz){
        SqlSession session = openSession();
        return session.getMapper(clazz);
    }
}
```



#### 8.2 测试工具类

> 调用MyBatisUtils中的封装方法。

```java
@Test
public void testUtils() {
    try {
				UserDao userDao = MyBatisUtils.getMapper(UserDao.class);
				userDao.deleteUser(15);
				MyBatisUtils.commit();
		} catch (Exception e) {
				MyBatisUtils.rollback();
				e.printStackTrace();
		}
}
```
补充：

```java
package com.qf.util;


import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

/**
 * 1. 加载配置
 * 2. 创建SqlSessionFactory
 * 3. 创建Session
 * 4. 事务管理
 * 5. Mapper获取
 */
public class MyBatisUtil {
    //先做一个静态的sqlSessionFactory
    private static SqlSessionFactory sqlSessionFactory;

    private static final ThreadLocal<SqlSession> tl = new ThreadLocal<SqlSession>();

    //sqlSessionFactory 需要加载配置的支持，因为只需要加载一次，那就使用静态代码块
    static{//加载配置信息

        try {
            //1.获得读取MyBatis配置文件的流对象
            InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
            //2.构建SqlSession连接对象的工厂
            sqlSessionFactory  = new SqlSessionFactoryBuilder().build(is);
        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    //sqlSession和jdbc中的connection一样
    // 要保证线程唯一，全局不唯一的特点->需要ThreadLocal

    //通过下面spenSession方法可以让线程绑定一个session，不需要重复创建
    public static SqlSession openSession(){
        SqlSession sqlSession = tl.get();//看当前线程中是否绑定好了session
        if(sqlSession==null){
            sqlSession=sqlSessionFactory.openSession();//sqlsession为空那就绑定新创建的
            tl.set(sqlSession);//set绑定再该线程中
        }
        return sqlSession;
    }

    //关闭sqlsession资源
    public static void closeSession(){
        SqlSession sqlSession = tl.get();
        sqlSession.close();
    }

    //事务提交
    public static void commit(){
        SqlSession sqlSession = openSession();//拿到当前线程绑定的session
        sqlSession.commit();
        closeSession();
    }

    public static void rollback(){
        SqlSession sqlSession = openSession();
        sqlSession.rollback();
        closeSession();
    }

    //Mapper的获取，返回mapper实现类对象，所以不一样，使用泛型，返回T
    //参数是一个类对象
    //也就是给一个XXXDAO就返回XXX
    public static <T> T getMapper(Class<T> mapper){
        SqlSession sqlSession = openSession();
        return sqlSession.getMapper(mapper);
    }


}

```
测试：

```java
package com.qf;

import com.qf.dao.StudentDAO;
import com.qf.entity.Student;
import com.qf.util.MyBatisUtil;

public class TestMyBatis {
    public static void main(String[] args) {
        //Student
        StudentDAO studentmapper = MyBatisUtil.getMapper(StudentDAO.class);

        studentmapper.insertStudent(new Student(null,"zhangsan",true));

        System.out.println(studentmapper);

        MyBatisUtil.commit();

        MyBatisUtil.closeSession();


    }
}

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424214716653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)

### 九、ORM映射【`重点`】

------

#### 9.1 MyBatis自动ORM失效

> MyBatis只能自动维护库表”列名“与”属性名“相同时的一一对应关系，二者不同时，无法自动ORM。

|       自动ORM失效        |
| :----------------------: |
|![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424214935181.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
 |



#### 9.2 方案一：列的别名

> 在SQL中使用 as 为查询字段添加列别名，以匹配属性名。

```xml
<mapper namespace="com.qf.mybatis.part2.orm.ManagerDao">
    <select id="selectManagerByIdAndPwd" resultType="com.qf.mybatis.part2.orm.Manager">
        SELECT mgr_id AS id , mgr_name AS username , mgr_pwd AS password
        FROM t_managers
        WHERE mgr_id = #{id} AND mgr_pwd = #{pwd}
    </select>
</mapper>
```



#### 9.3 方案二：结果映射（ResultMap - 查询结果的封装规则）

> 通过< resultMap id="" type="" >映射，匹配列名与属性名。

```xml
<mapper namespace="com.qf.mybatis.part2.orm.ManagerDao">

    <!--定义resultMap标签-->
    <resultMap id="managerResultMap" type="com.qf.mybatis.part2.orm.Manager">
      	<!--关联主键与列名-->
        <id property="id" column="mgr_id" />
      
      	<!--关联属性与列名-->
        <result property="username" column="mgr_name" />
        <result property="password" column="mgr_pwd" />
    </resultMap>
  
     <!--使用resultMap作为ORM映射依据-->
    <select id="selectAllManagers" resultMap="managerResultMap">
        SELECT mgr_id , mgr_name , mgr_pwd
        FROM t_managers
    </select>
</mapper>
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace = 所需实现的接口全限定名-->
<mapper namespace="com.qf.dao.UserDAO">

    <resultMap id="user_resultMap" type="User">
        <!-- 定义更复杂的  映射规则 -->
        <id column="id" property="id"></id>
        <result column="username" property="username"></result>
        <result column="password" property="password"></result>
        <result column="gender" property="gender"></result>
        <result column="regist_time" property="registTime"></result>
    </resultMap>


    <!--id = 所需重写的接口抽象方法，resultType = 查询后所需返回的对象类型-->

    <!--不使用resultType，使用resultMap-->
    <select id="queryUserById" resultMap="user_resultMap">
         SELECT id,username,password,gender,regist_time
        from t_user where id=#{id}
    </select>


 

</mapper>
```

```java
        //测试resultMap映射关系
        UserDAO usermapper = MyBatisUtil.getMapper(UserDAO.class);

        User user = usermapper.queryUserById(9);

        System.out.println(user);

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221710340.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
测试成功，最后的字符被映射好。


### 十、MyBatis处理关联关系-多表连接【`重点`】

------

> 实体间的关系：关联关系（拥有 has、属于 belong）
>
>  * OneToOne：一对一关系（Passenger--- Passport）
>
> * OneToMany：一对多关系（Employee --- Department）
>
> * ManyToMany：多对多关系（Student --- Subject）

|    Table建立外键关系     |
| :----------------------: |
| ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221814158.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
 |

|      Entity添加关系属性      |
| :--------------------------: |
|![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221820429.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
  |

| Mapper中将属性与列名对应 |
| :----------------------: |
| ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221829257.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
 |



#### 10.1 OneToOne--旅客表和护照表

> SQL参考OneToOneExample.sql

```xml
<mapper namespace="com.qf.mybatis.part2.one2one.PassengerDao">

  	<!-- 结果映射（查询结果的封装规则） -->
    <resultMap id="passengerResultMap" type="com.qf.mybatis.part2.one2one.Passenger">
        <id property="id" column="id"/>
        <result property="name" column="name" />
        <result property="sex" column="sex" />
        <result property="birthday" column="birthday" />

      	<!-- 关系表中数据的封装规则 -->	 <!-- 指定关系表的实体类型 -->
        <association property="passport" javaType="com.qf.mybatis.part2.one2one.Passport">
            <id property="id" column="passport_id" />
            <result property="nationality" column="nationality" />
            <result property="expire" column="expire" />
          	<result property="passenger_id" column="passenger_id" />
        </association>
    </resultMap>

  	<!-- 多表连接查询 -->					  	<!-- 结果映射（查询结果的封装规则）-->
    <select id="selectPassengerById" resultMap="passengerResultMap">
        <!-- 别名（避免与p1.id冲突） -->
        SELECT p1.id , p1.name , p1.sex , p1.birthday , p2.id as passport_id , p2.nationality , p2.expire 			, p2.passenger_id
        FROM t_passengers p1 LEFT JOIN t_passports p2
        ON p1.id = p2.passenger_id
        WHERE p1.id = #{id}
    </select>
</mapper>
```

* [注意：指定“一方”关系时（对象），使用< association javaType="" >]()
补充代码：
SQL：

```java
 create table t_passengers(
    id int primary key auto_increment,
    name varchar(50),
    sex varchar(1),
    birthday date
)default charset =utf8;

create table t_passports(
    id int primary key auto_increment,
    nationality varchar(50),
    expire date,
    passenger_id int unique,
    foreign key (passenger_id) references t_passengers(id)
)default charset =utf8;

insert into t_passengers values(null,'shine_01','f','2018-11-11');
insert into t_passengers values(null,'shine_02','m','2019-12-12');

insert into t_passports values(null,'China','2030-12-12',1);
insert into t_passports values(null,'America','2035-12-12',2);
```


entity

```java
package com.qf.entity;

import java.util.Date;

//护照类
public class Passport {
    private Integer id;
    private String nationality;
    private Date expire;

    // 存储旅客信息 ： 添加关系属性
    private Passenger passenger;


    public Passport(){}
    public Passport(Integer id, String nationality, Date expire) {
        this.id = id;
        this.nationality = nationality;
        this.expire = expire;
    }

    @Override
    public String toString() {
        return "Passport{" +
                "id=" + id +
                ", nationality='" + nationality + '\'' +
                ", expire=" + expire +
                '}';
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Date getExpire() {
        return expire;
    }

    public void setExpire(Date expire) {
        this.expire = expire;
    }
}

```

```java
package com.qf.entity;

import java.util.Date;

//旅客类
public class Passenger {
    private Integer id;
    private String name;
    private Boolean sex;
    private Date birthday;

    // 存储旅客的护照信息 ： 关系属性
    private Passport passport;

    public Passenger(){}
    public Passenger(Integer id, String name, Boolean sex, Date birthday) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
    }

    public Passport getPassport() {
        return passport;
    }

    public void setPassport(Passport passport) {
        this.passport = passport;
    }

    @Override
    public String toString() {
        return "Passenger{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex=" + sex +
                ", birthday=" + birthday +
                '}';
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getSex() {
        return sex;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
}

```
注意添加关系属性。

dao：

```java
public interface PassengerDAO {
    Passenger queryPassengerById(@Param("id") Integer id);
}
```

```java
public interface PassportDAO {


    Passport queryPassportById(@Param("id") Integer id);
}
```
Mapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.qf.dao.PassengerDAO">

<!--使用resultMap作映射，resultTyper='实体类' 实体类和返回值不符-->
    <resultMap id="passenger_passport" type="Passenger">
        <id column="id" property="id"></id>
        <result column="name" property="name"></result>
        <result column="sex" property="sex"></result>
        <result column="birthday" property="birthday"></result>

        <!-- 描述 passId nationality expire 和  passport 映射规则 -->
        <!--使用association标签作关联属性的映射。-->
        <association property="passport" javaType="Passport">
            <id column="passId" property="id"></id>
            <result column="nationality" property="nationality"></result>
            <result column="expire" property="expire"/>
        </association>
    </resultMap>

    <!-- 查询 旅客及其护照 -->
    <select id="queryPassengerById" resultMap="passenger_passport">
        select t_passengers.id,t_passengers.name,t_passengers.sex,t_passengers.birthday,
               t_passports.id passId,t_passports.nationality,t_passports.expire
        from t_passengers join t_passports
        on t_passengers.id = t_passports.passenger_id
        where t_passengers.id=#{id}
    </select>

</mapper>
```

```xml

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.qf.dao.PassportDAO">


    <resultMap id="passport_passenger" type="Passport">
        <id column="id" property="id"></id>
        <result column="nationality" property="nationality"></result>
        <result column="expire" property="expire"></result>

        <association property="passenger" javaType="Passenger">
            <id column="passenger_id" property="id"></id>
            <result column="name" property="name"></result>
            <result column="sex" property="sex"></result>
            <result column="birthday" property="birthday"></result>
        </association>
    </resultMap>

    <select id="queryPassportById" resultMap="passport_passenger">
        select t_passports.id,t_passports.nationality,t_passports.expire,
               t_passengers.id passenger_id,t_passengers.name,t_passengers.sex,t_passengers.birthday
        from t_passports join t_passengers
        on t_passengers.id = t_passports.passenger_id
        where t_passports.id=#{id}
    </select>

</mapper>
```
注意：需要注册新的mapper.xml文件

```java
    <!--Mapper文件注册位置-->
    <mappers>
        <!--注册Mapper文件-->
        <!--<mapper resource="UserDAOMapper.xml"/>-->
        <mapper resource="com/qf/dao/UserDAOMapper.xml"/>
        <mapper resource="com/qf/dao/StudentDAOMapper.xml"/>
        <mapper resource="com/qf/dao/PassengerDAOMapper.xml"/>
        <mapper resource="com/qf/dao/PassportDAOMapper.xml"/>
    </mappers>
```
测试：

```java
PassengerDAO mapper = MyBatisUtil.getMapper(PassengerDAO.class);
Passenger passenger = mapper.queryPassengerById(1);
System.out.println("============");
System.out.println(passenger);
System.out.println(passenger.getPassport());//使用get方法，获取对象值
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210425225856480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)




#### 10.2 OneToMany--员工部门关系表

> SQL参考OneToManyExample.sql

```xml
<mapper namespace="com.qf.mybatis.part2.one2many.DepartmentDao">

  	<!-- 封装规则 -->
    <resultMap id="departmentResultMap" type="com.qf.mybatis.part2.one2many.Department">
        <id property="id" column="id" />
        <result property="name" column="name" />
        <result property="location" column="location" />
        
      	<!-- 关系表中数据的封装规则 -->		<!-- 指定关系表的实体类型 -->
        <collection property="emps" ofType="com.qf.mybatis.part2.one2many.Employee">
            <id property="id" column="emp_id" />
            <result property="name" column="emp_name" />
            <result property="salary" column="salary" />
            <result property="dept_id" column="dept_id" />
        </collection>
    </resultMap>

  	<!-- 多表连接查询 -->			      <!-- 封装规则 -->
    <select id="selectDepartmentById" resultMap="departmentResultMap" >
      	<!-- 别名（避免与d.id、d.name冲突）-->
        SELECT d.id , d.name , d.location , e.id AS emp_id , e.name emp_name , e.salary , e.dept_id
        FROM t_departments d LEFT JOIN t_employees e
        ON d.id = e.dept_id
        WHERE d.id = #{id}
    </select>

</mapper>
```

* [注意：指定“多方”关系时（集合），使用< collection ofType="" >]()

补充：
省略get.set
```java
public class Department {
    private Integer id;
    private String name;
    private String location;

    // 存储部门中所有员工信息,注意：返回多个数值，要用list集合接收返回值
    private List<Employee> employees;

```

```java
public class Employee {
    private Integer id;
    private String name;
    private Double salary;

    // 员工从属的部门信息
    private Department department;
```

```java
public interface DepartmentDAO {

    // 查询部门，及其所有员工信息
    Department queryDepartmentById(@Param("id") Integer id);
}

```

```java
public interface EmployeeDAO {

    // 查询员工信息 并且 查到对应的部门信息
    Employee queryEmployeeById(@Param("id") Integer id);
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.qf.dao.DepartmentDAO">


    <resultMap id="dept_emp" type="Department">
        <id column="id" property="id"></id>
        <result column="name" property="name"></result>
        <result column="location" property="location"></result>

        <!-- emp_id  emp_name  salary    employees -->
        <collection property="employees" ofType="Employee">
            <id column="emp_id" property="id"></id>
            <result column="emp_name" property="name"></result>
            <result column="salary" property="salary"></result>
        </collection>
    </resultMap>
    <select id="queryDepartmentById" resultMap="dept_emp">
        select t_departments.id ,t_departments.name,t_departments.location,
               t_employees.id emp_id,t_employees.name emp_name,t_employees.salary
        from t_departments join t_employees
        on t_departments.id = t_employees.dept_id
        where t_departments.id=#{id}
    </select>

</mapper>
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.qf.dao.EmployeeDAO">

    <resultMap id="emp_dept" type="Employee">
        <id column="id" property="id"></id>
        <result column="name" property="name"></result>
        <result column="salary" property="salary"></result>

        <association property="department" javaType="Department">
            <id column="deptId" property="id"></id>
            <result column="deptName" property="name"></result>
            <result column="location" property="location"></result>
        </association>
    </resultMap>

    <select id="queryEmployeeById" resultMap="emp_dept">
        select t_employees.id,t_employees.name,t_employees.salary,
               t_departments.id deptId ,t_departments.name deptName,t_departments.location

        from t_employees join t_departments
        on t_departments.id = t_employees.dept_id
        where t_employees.id=#{id}
    </select>

</mapper>
```
测试
```java
        DepartmentDAO departmentDAO = MyBatisUtil.getMapper(DepartmentDAO.class);
        Department department = departmentDAO.queryDepartmentById(1);
        System.out.println(department);
        //返回的员工为多个，放到list<>集合中，所以需要增强for循环遍历。
        List<Employee> employees = department.getEmployees();
        for (Employee employee : employees){
            System.out.println(employee);
        }
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210426124700927.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)

测试的时候检查Mapper是否没在配置文件中注册。
如果还是不行就是要maven-clear一下

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210426122857593.png)、
一对一使用association标签
```java
        EmployeeDAO mapper = MyBatisUtil.getMapper(EmployeeDAO.class);
        Employee employee = mapper.queryEmployeeById(2);
        System.out.println(employee);
        System.out.println(employee.getDepartment());

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210426124508234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)

#### 10.3 ManyToMany

> SQL参考

|       建立第三张关系表       |
| :--------------------------: |
|![在这里插入图片描述](https://img-blog.csdnimg.cn/20210424221855566.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY4ODU4MQ==,size_16,color_FFFFFF,t_70)
 |

```xml
<mapper namespace="com.qf.mybatis.part2.many2many.StudentDao">

  	<!-- 映射查询只封装两表中的信息，可忽略关系表内容 -->
    <resultMap id="allMap" type="com.qf.mybatis.part2.many2many.Student">
        <id property="id" column="id" />
        <result property="name" column="name" />
        <result property="sex" column="sex" />
        <collection property="subjects" ofType="com.qf.mybatis.part2.many2many.Subject">
            <id property="id" column="sid" />
            <result property="name" column="sname" />
            <result property="grade" column="grade" />
        </collection>
    </resultMap>

  	<!-- 三表连接查询 -->
    <select id="selectAllStudents" resultMap="allMap">
        SELECT s1.* , ss.* , s2.id as sid , s2.name as sname , s2.grade
        FROM t_students s1 LEFT JOIN t_stu_sub ss
        ON s1.id = ss.student_id <!-- 通过t_stu_sub表建立二者之间的关系 -->
        LEFT JOIN t_subjects s2
        ON ss.subject_id = s2.id
    </select>
</mapper>
```

* [注意：指定“多方”关系时（集合），使用< collection ofType="" >]()



#### 10.4 关系总结

> 一方，添加集合；多方，添加对象。
>
> 双方均可建立关系属性，建立关系属性后，对应的Mapper文件中需使用< ResultMap >完成多表映射。
>
> 持有对象关系属性，使用< association property="dept" javaType="department" >
>
> 持有集合关系属性，使用< collection property="emps" ofType="employee" >





