# 34-kub-network-all-services-connected

task 관련 도커 허브 생성

``` bash
docker build -t haservi/kub-demo-tasks .
docker push haservi/kub-demo-tasks
```

task deployment 실행

``` bash
kubectl apply -f=tasks-service.yaml -f=tasks-deployment.yaml
kubectl apply -f=users-service.yaml -f=users-deployment.yaml
kubectl apply -f=auth-service.yaml -f=auth-deployment.yaml
```

로그 확인하는 방법

``` bash
kubectl get pods # 실행중인 pod의 이름 확인
kubectl logs [tasks-deployment-7dfc7659b4-bvblc] # 실행중인 pod log 확인
```
