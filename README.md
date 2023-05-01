# udemy-docker-kubernetes

해당 저장소는 Udemy Docker Kubernetes [강의](https://www.udemy.com/course/docker-kubernetes-2022/)를 학습한 코드입니다.

학습 시작일: 2023년 1월 15일  
학습 종료일:

## Docker Compose

도커 컴포즈 실행

- -d: detached 모드
- up --build: 이미지를 리빌드

``` bash
docker-compose up -d
```

도커 컴포즈 종료

- -v: 볼륨과 함께 제거

``` bash
docker-compose down -v
```

## 도커 명령어 관련 정보

- `-p` 포트 설정 ex) 3000:80 -> host port:container port
- `-d` `detached mode로 도커 컨테이너를 백그라운드에서 실행
- `--name` 컨테이너 이름 지정
- `--rm` 피드백이 중지 시 자동으로 컨테이너 제거
- `-v` 볼륨 지정 명명된 볼륨은 컨테이너가 제거하지 않음
- `:ro` 읽기 전용

도커 내부에서 나의 로컬 호스트를 아는 방법

``` bash
localhost:port -> host.docker.internal:port
```

도커 컨테이너 및 이미지 한번에 제거

``` bash
docker container prune
docker image prune # 이게 안되면 아래거로
docker rmi $(docker images -a -q)
docker volume prune
```

### 바인드 마운트 단축키

``` bash
macOS/Linux: -v $(pwd):/app
Windows: -v "%cd%":/app
```

### AWS에 대해

AWS는 Amazon Web Services의 약어로, 아마존닷컴이 제공하는 클라우드 컴퓨팅 서비스 플랫폼입니다. AWS는 컴퓨팅, 스토리지, 데이터베이스, 분석, 인공지능, IoT 및 기타 다양한 서비스를 제공하여 기업이나 개인이 필요로 하는 IT 인프라를 클라우드 기반으로 구축하고 관리할 수 있도록 도와줍니다. 아래 링크는 AWS에 대한 강사분의 영상 설명 링크입니다.  
[AWS에 대한 유튜브 영상 링크](https://academind.com/tutorials/aws-the-basics)

### 도커 이미지 공식홈페이지 등록/업데이트/가져오기

도커 이미지 등록

``` bash
docker login # 로그인
docker build -t node-dep-example . # 이미지 생성
docker tag node-dep-example haservi/node-dep-example # 태그 지정
docker push haservi/node-dep-example # 푸시
```

도커 이미지 업데이트 방법

``` bash
docker build -t node-dep-example . # 동일한 태그로 등록
docker tag node-dep-example haservi/node-dep-example:0.1 # 버전 명시
docker push haservi/node-dep-example:0.1 # 푸시
```

도커 이미지 가져오기

``` bash
docker pull haservi/node-dep-example:0.1
```

팁으로 도커 이미지의 변화없이 같으면 이미지의 이름은 다르지만 이미지ID가 같아서 삭제가 안되는 경우가 있다.
이럴 때는 아래와 같이 태그를 명시해서 제거할 수 있다.

``` bash
docker rmi [이미지이름:tag]
```
