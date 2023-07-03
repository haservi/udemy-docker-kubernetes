# 36-kub-network-finished

forntend 폴더에서

``` bash
docker build -t haservi/kub-demo-frontend .
docker push haservi/kub-demo-frontend
```

kubernetes 폴더에서

``` bash
kubectl delete -f=frontend-service.yaml -f=frontend-deployment.yaml
kubectl apply -f=frontend-service.yaml -f=frontend-deployment.yaml

kubectl delete -f=tasks-service.yaml -f=tasks-deployment.yaml
kubectl apply -f=tasks-service.yaml -f=tasks-deployment.yaml
```

``` bash
minikube service frontend-service
```
