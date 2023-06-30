#!/bin/bash
# 上面中的 #! 是一种约定标记, 它可以告诉系统这个脚本需要什么样的解释器来执行;

echo "今天也要加油! GitAutoPush Starting..."
echo "Stay hunge Stay foolish,求知若饥，虚心若愚!"
time=$(date "+%Y-%m-%d %H:%M:%S")
git add .

read -t 100 -p "请输入提交注释:" msg

if  [ ! "$msg" ] ;then
    echo "[commit message] 默认提交,  提交时间: ${time}"
	git commit -m "默认提交,  提交时间: ${time}"
else
    echo "[commit message] $msg, 提交人: $(whoami), 提交时间: ${time}"
	git commit -m "$msg    (提交时间: ${time})"
fi

	
git push origin master
echo "提交即将成功! GitAutoPush Ending..."
