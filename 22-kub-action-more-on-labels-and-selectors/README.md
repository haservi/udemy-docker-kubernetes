# 22-kub-action-more-on-labels-and-selectors

``` bash
kubectl apply -f service.yaml -f deployment.yaml # 선언적 실행
minikube service backend # service 실행
kubectl delete deployments,services -l group=example # 레이블의 key=value를 이용해 삭제 가능
```
