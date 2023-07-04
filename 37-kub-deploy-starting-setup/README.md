# 37-kub-deploy-starting-setup

mongodb 설정

docker hub에 등록

``` bash
docker build -t haservi/kub-dep-auth .
docker push haservi/kub-dep-auth

docker build -t haservi/kub-dep-users .
docker push haservi/kub-dep-users
```

mongoDB Atalas 연동 필요 [링크](https://www.mongodb.com/cloud/atlas/register)

AWS CLI를 이용해 ELK 설정 AWS CLI [링크](https://aws.amazon.com/ko/cli/)

access key 등 입력이 필요..

`minikube delete`로 기존 minikube는 삭제하고 aws eks에서 작업이 필요

실제로 aws eks에서 `kubectl get pods`를 하면 EXTERNAL-IP를 확인할 수 있다.

인스턴스는 `t3-small` 이상으로 해야 pod 스케쥴링이 실패하지 않는다.

Pod는 노드에서 실행되는 컨테이너에 포함된다.

Kubernetes(K8s)에서 Pod는 가장 작은 배포 단위이며, Pod는 K8s 클러스터 내에서 실행되는 하나 이상의 컨테이너 그룹이다. Pod는 논리적인 호스트 또는 노드에서 실행되며, 컨테이너, 저장소, 네트워크 리소스 등을 공유할 수 있다.  
각각의 Pod는 고유한 IP 주소를 가지며, 포트 공간을 공유하여 서로 통신할 수 있습니다. Pod는 주로 관련된 서비스를 함께 실행하기 위해 사용되며, 서비스 디스커버리, 로깅, 모니터링 등을 위한 사이드카 컨테이너를 함께 포함할 수도 있다.

Pod는 일시적인 존재이며, 언제든지 새로운 Pod로 교체될 수 있다. 이는 확장성과 견고성을 높이기 위한 K8s의 핵심 개념 중 하나이다.

노드(Node)는 K8s 클러스터의 물리적 또는 가상의 서버이다. 노드는 Pod를 실행하는 호스트로 사용되며, 컨테이너 런타임(예: Docker)과 K8s 에이전트가 설치되어 있습니다. 각 노드는 일련의 리소스(CPU, 메모리, 디스크 등)를 제공하고, Pod를 스케줄링하여 실행한다. 여러 개의 Pod는 여러 노드에 분산되어 실행될 수 있다.
