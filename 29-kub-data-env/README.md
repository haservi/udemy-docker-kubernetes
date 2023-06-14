# 29-kub-data-env

``` bash
docker build -t haservi/kub-data-demo:2
docker push haservi/kub-data-demo:2

kubectl apply -f environment.yaml # env 설정
kubectl get configmap # configmap 확인

kubectl apply -f deployment.yaml
kubectl get pods
```
