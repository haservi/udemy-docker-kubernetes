# 19-kub-action-starting-setup

image build

``` bash
docker build -t kub-first-app . 
```

이미지를 쿠버네티스 클러스터로 보내야 함

minikube 동작 확인 및 정지 시 실행(mac 기준)

``` bash
minikube status
minikube start --driver=docker
```
