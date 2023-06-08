# 23-kub-action-finished

``` bash
docker build -t haservi/kub-first-app:4 .
docker push haservi/kub-first-app:4

kubectl apply -f service.yaml -f deployment.yaml # 선언적 실행
minikube service backend # metadata의 name으로 서비스 실행

kubectl delete -f service.yaml -f deployment.yaml # 선언적 삭제
```
