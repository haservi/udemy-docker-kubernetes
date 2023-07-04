# 37-kub-deploy-starting-setup

mongodb 설정

docker hub에 등록

``` bash
docker build -t haservi/kub-dep-auth .
docker push haservi/kub-dep-auth

docker build -t haservi/kub-dep-users .
docker push haservi/kub-dep-users
```

AWS CLI를 이용해 ELK 설정 AWS CLI [링크](https://aws.amazon.com/ko/cli/)

access key 등 입력이 필요..

`minikube delete`로 기존 minikube는 삭제하고 aws eks에서 작업이 필요

인스턴스는 `t3-small` 이상으로 해야 pod 스케쥴링이 실패하지 않는다.
