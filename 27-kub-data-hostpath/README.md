# 27-kub-data-hostpath

``` bash
kubectl apply -f deployment.yaml
```

``` bash
    spec:
      containers:
        - name: story
          image: haservi/kub-data-demo:1
          volumeMounts:
            - mountPath: /app/story # 해당 볼륨의 파일을 
              name: story-volume
      volumes:
        - name: story-volume
          hostPath: # 노드에 종속적임
            path: /data # 여기에서 관리
            type: DirectoryOrCreate
```

위와 같이 설정을 하면 여러개의 Pods가 복제되도 하나의 저장소로 관리할 수 있다.  
하지만 동일한 노드의 Pod에서만 데이터에 접근할 수 있는 단점도 있다.

``` bash
      volumes:
        - name: story-volume
          PersistentVolumeClaim: 
            claimName: host-pvc
```

위와 같은 방식으로 선언하면 독립적이고 영구적인 volume을 얻을 수 있다.  
