# 26-kub-data-first-volume

``` bash
docker build -t haservi/kub-data-demo:1 .
docker push haservi/kub-data-demo:1
kubectl apply -f deployment.yaml # deploy 새로 선언

kubectl get pods # 기존에 있던 pod는 종료되고 새로운 것이 생성됨
```

위의 설정으로 pod가 종료되지 않는 한 볼륨을 유지할 수 있음

``` bash
    volumeMounts: # volumes와 binding을 해줘야 함
    - mountPath: /app/story
        name: story-volume
volumes: # 이렇게 지정하면 해당 컨테이너가 볼륨을 공유해서 쓸수 있음
- name: story-volume
    emptyDir: {} # pod가 살아 있는 동안 해당 폴더를 유지 시켜줌
```
