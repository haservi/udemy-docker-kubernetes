# 31-kub-network-dummy-user-service

kubernetes 폴더에서 해당 명령어 실행

``` bash
kubectl apply -f user-deployment.yaml
kubectl apply -f=users-service.yaml

minikube service users-service
```

해당 서비스의 url을 이용해 postman으로 테스트 가능

``` json
{
    "email": "test@test.com",
    "password": "testers"
}
```
