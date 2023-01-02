#!/bin/bash

# DeployServer-0.0.1-SNAPSHOT.jar가 실행중이라면 프로세스를 종료합니다.
ps -ef | grep "domain-0.0.1-SNAPSHOT.jar" | grep -v grep | awk '{print $2}' | xargs kill -9 2> /dev/null

# 종료 이력을 파악하여 적절한 문구를 출력합니다.
if [ $? -eq 0 ];then
    echo "my-application Stop Success"
else
    echo "my-application Not Running"
fi

# domain-0.0.1-SNAPSHOT.jar를 다시 실행하기 위한 과정을 진행합니다.
echo "my-application Restart!"
echo $1

# nohup 명령어를 통해 백그라운드에서 domain-0.0.1-SNAPSHOT.jar를 실행합니다.
nohup java -jar build/libs/domain-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev > /dev/null 2