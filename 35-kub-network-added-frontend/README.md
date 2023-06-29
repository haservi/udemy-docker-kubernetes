# 35-kub-network-added-frontend

``` bash
docker build -t haservi/kub-demo-tasks .
docker push haservi/kub-demo-tasks

docker build -t haservi/kub-demo-frontend .
```

``` bash
kubectl delete -f=tasks-service.yaml -f=tasks-deployment.yaml
kubectl apply -f=tasks-service.yaml -f=tasks-deployment.yaml

kubectl apply -f=frontend-service.yaml -f=frontend-deployment.yaml
minikube service frontend-service
```
