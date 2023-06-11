# 25-kub-data-deployment-and-service

``` bash
docker build -t haservi/kub-data-demo .
docker push haservi/kub-data-demo # docker hub 추가

kubectl get deployments
kubectl apply -f=service.yaml -f=deployment.yaml
mknikube service story-service
```

위와 같이 설정하면 pod가 어떠한 문제로 재시작되면 볼륨이 사라짐
