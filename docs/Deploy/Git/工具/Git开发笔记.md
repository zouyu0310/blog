# 后续新增Git提交

```
git add .

git commit -m 'git笔记再次提交!'

git push
```







# git提交

```
git remote add origin git@gitee.com:zouyu0310/git-learning.git


git push -u origin "master"
```







# Git开发笔记

## 修改git上传代码的作者姓名



```
https://www.cnblogs.com/xiaoshahai/p/13704098.html
```

打开 git-bash.exe

然后输入命令：git config user.name，然后回车之后就可以看到当前的提交者姓名

然后根据自己的姓名对提交者姓名进行设置，输入命令：git config --global user.name "用户名"，然后回车



# 本地文件使用git进行管理

## 1. 进入文件

![image-20220223234839002](https://gitee.com/zouyu0310/images/raw/master/img/20220223234846.png)

## 2. 初始化

（1）Windows右击，然后点击Git Bash Here

![image-20220223234928064](https://gitee.com/zouyu0310/images/raw/master/img/20220223234928.png)

(2)在出来的控制台中，输入git init,并enter。至此，Git算是真正的开始管理这个文件夹了。

![image-20220223234954566](https://gitee.com/zouyu0310/images/raw/master/img/20220223234954.png)



可以看到，执行初始化之后，文件夹里面多出来了一个文件夹:.git。它的含义是在以后各种操作的配置信息以及版本信息等等都会存放在这里面。

![image-20220223235008137](https://gitee.com/zouyu0310/images/raw/master/img/20220223235008.png)

## 3. 开始管理

### 3.1 git status的使用

首先我们在控制台中输入git status,他的含义是检测文件夹中文件的状态。原本我们文件夹中已经有了一个文件，但是还未处理，见下图。

![image-20220223235135834](https://gitee.com/zouyu0310/images/raw/master/img/20220223235135.png)

### 3.2 git add的使用

　　现在我们试着管理一个文件试试。输入git add Git开发笔记.md.它的含义是让Git管理这个文件夹，此时文件从工作区到暂存区。接着，执行git status查看文件状态。可以看到Git开发笔记.md变绿了，此时如果有未管理的文件夹那应该还是红色的。

![image-20220223235315704](https://gitee.com/zouyu0310/images/raw/master/img/20220223235315.png)

如果我们想将所有未管理的文件夹管理起来，只需输入git add . 即可。这样所有未被管理的文件夹都可以被管理了。

## 4 git commit -m '描述信息' 的使用

（1）上面我们经历了从未被管理到被管理，现在开始经历从被管理到生成版本控制。

　　我们输入：git commit -m '描述信息' ，此时文件从暂存区到版本库。再输入git status查看状态。可以看到生成版本控制之后，绿色的文件夹已经消失了。这意味着这个文件夹里面所有的文件都已经被git管理起来，生成一个版本了。

（2）假设现在我们对文件进行了修改。我们再次输入git status查看状态。可以看到git检测出了此文件夹已经被修改了。



![image-20220223235638433](https://gitee.com/zouyu0310/images/raw/master/img/20220223235638.png)

现在，我们输入git add XX.md 或者git add . 将修改过的，也就是未被管理的给管理起来。再输入git status查看状态。

![image-20220223235727519](https://gitee.com/zouyu0310/images/raw/master/img/20220223235727.png)

接着，生成版本控制：git commit -m '描述信息'。

### 4.1 如何查看两个版本呢？——git log

　　我们输入git log。可以看到这里我们的两个版本。

![image-20220223235845521](https://gitee.com/zouyu0310/images/raw/master/img/20220223235845.png)



## 　总结：

　　一般对一个文件夹进行版本控制大概需要这样：

　　git status　　——查看状态

　　git add . 或者 git add 某个文件　　——使之被管理

　　git commit -m '描述信息'　　——版本控制

　　git log　　——查看状态



# 使用码云进行代码管理

# 创建新仓库，按照给出指令push到码云

![image-20220224000120575](https://gitee.com/zouyu0310/images/raw/master/img/20220224000120.png)



```
mkdir git-learning
cd git-learning
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin git@gitee.com:zouyu0310/git-learning.git
git push -u origin "master"
```

![image-20220224000232089](https://gitee.com/zouyu0310/images/raw/master/img/20220224000232.png)



码云已经接管代码.



![image-20220224000313558](https://gitee.com/zouyu0310/images/raw/master/img/20220224000313.png)

# 小结: 

```
#初始化
git init
#查看状态
git status
#使之被管理
git add . 或者 git add 某个文件
#版本控制
git commit -m '描述信息'
#查看每次提交的状态
git log

#码云推送
git remote add origin git@gitee.com:zouyu0310/git-learning.git
git push -u origin "master"
```



# 新增: git克隆项目到本地

```
git clone  https://gitee.com/zouyu0310/hongs-study-notes.git
```

![image-20220224125418600](https://gitee.com/zouyu0310/images/raw/master/img/20220224125425.png)
