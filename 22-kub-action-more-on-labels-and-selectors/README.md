# 22-kub-action-more-on-labels-and-selectors

``` bash
kubectl apply -f service.yaml -f deployment.yaml # 선언적 실행
minikube service backend # service 실행
kubectl delete deployments,services -l group=example # 레이블의 key=value를 이용해 삭제 가능
```

Liveness Probe는 애플리케이션이 실행 중인지 여부를 확인하기 위해 사용된다.  
Pod의 내부 상태를 주기적으로 확인하여 애플리케이션이 정상적으로 작동하고 있는지 여부를 판단하며, 만약 Liveness Probe가 실패하는 경우, Kubernetes는 Pod를 다시 시작하거나 대체 Pod로 교체하여 가용성을 유지할 수 있게 도와주는 설정이다.
