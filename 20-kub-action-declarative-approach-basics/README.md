# 20-kub-action-declarative-approach-basics

[공식 문서](https://kubernetes.io/docs/home/)를 보는 것도 도움이 될 것 같다.

minikube 동작 확인

-f: 생성한 yaml 파일 실행

``` bash
kubectl apply -f deployment.yaml # 선언한 파일 실행
kubectl apply -f service.yaml # service 실행
minikube service backend # service 배포

kubectl get deployments
Kubectl get pods
Kubectl get services
```

yaml 파일의 설정을 변경하고 다시 파일을 실행하면 적용이 된다.

삭제는 해당 yaml을 선언적으로 삭제할 수도 있다.

``` bash
kubectl delete -f=deployment.yaml -f=service.yaml
```
