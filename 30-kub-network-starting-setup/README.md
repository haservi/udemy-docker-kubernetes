# 30-kub-network-starting-setup

docker compose 실행

``` bash
docker-compose up -d --build
docker-compose down -v
```

k8s 배포

```bash
kubectl get deployments # 배포 확인 제거
kubectl delete deployment [name] # 배포 삭제 -> 삭제하면 pod도 삭제됨
kubectl get services # 서비스 확인
kubectl delete service [name] # 서비스 삭제
```

docker hub 등록

user-api 폴더로 이동

``` bash
docker build -t haservi/kub-demo-users .
docker push haservi/kub-demo-users
```

kubernets 폴더로 이동  
user deployment 설정

``` bash
kubectl apply -f=user-deployment.yaml # 폴더로 이동해서 실행해야함
```
