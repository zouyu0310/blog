---
title: 02 生产环境CPU高的问题排查
date: 2023-5-10 09:29:41
---



背景:  在生产环境中，CPU 使用率过高可能会导致应用程序性能下降，影响用户体验。因此，对于生产环境中的 CPU 使用率过高问题，需要及时进行排查和解决。



## 常规方案



1. 确定哪些进程占用了大量的 CPU 资源。您可以使用 `top` 或 `htop` 等工具来查看进程的 CPU 使用情况。
2. 如果发现是 Java 应用程序占用了大量的 CPU 资源，您可以使用 `jstack` 工具获取该 Java 进程的线程转储，以确定哪些线程占用了大量的 CPU 资源。
3. 分析线程转储，找出占用大量 CPU 资源的线程。您可以查看这些线程的堆栈跟踪，以确定它们正在执行的操作。
4. 根据分析结果，确定问题的根源并采取相应措施。例如，如果发现某个线程在执行一个耗时的数据库查询操作，则可能需要优化该查询语句或调整数据库索引。





## arthas

如果您想使用 Arthas 来排查生产环境中 CPU 使用率过高的问题，您可以采取以下步骤：

1. 在目标 Java 进程上启动 Arthas。您可以参考 [Arthas 官方文档](https://arthas.aliyun.com/doc/quick-start.html) 中的说明来安装并启动 Arthas。
2. [在 Arthas 命令行中，使用 `dashboard` 命令查看实时统计信息，包括系统负载、CPU 使用率、内存使用情况等](https://arthas.aliyun.com/en/doc/dashboard.html)[1](https://arthas.aliyun.com/en/doc/dashboard.html)。
3. [使用 `thread` 命令查看线程信息。您可以使用 `-n` 参数来查看最忙的 n 个线程的详细堆栈跟踪信息](https://arthas.aliyun.com/en/doc/thread.html)[2](https://arthas.aliyun.com/en/doc/thread.html)。
4. 分析线程信息，确定哪些线程占用了大量的 CPU 资源。您可以查看这些线程的堆栈跟踪，以确定它们正在执行的操作。
