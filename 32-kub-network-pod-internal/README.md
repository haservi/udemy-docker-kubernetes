# 32-kub-network-pod-internal

`users-api` 폴더에서 도커 허브로 배포

``` bash
docker build -t haservi/kub-demo-users .
docker push haservi/kub-demo-users
```

`kubernetes` 폴더로 이동하여 아래 명령어 입력

``` bash
kubectl apply -f=users-service.yaml -f=users-deployment.yaml
kubectl apply -f=auth-service.yaml -f=auth-deployment.yaml
```
