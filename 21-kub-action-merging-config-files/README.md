# 21-kub-action-merging-config-files

리소스 정의는 service를 먼저하는게 좋다고 한다. service를 먼저 선언하면 좋은 이유는 service를 먼저 생성하면 service에 대한 DNS이름이나 IP 주소를 배정받을 수 있다. 또한, Deployment를 생성하기 전에 다른 리소스가 service에 접근할 수 있다. 이외에도 로드 밸런싱, 의존성 관리에 이점이 있다고 한다.

## Build

``` bash
kubectl apply -f master-deployment.yaml # 선언적 파일 실행
minikube service backend # 서비스 실행
kubectl delete -f master-deployment.yaml # 선언된 리소스 삭제
```
