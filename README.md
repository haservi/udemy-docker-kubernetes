# udemy-docker-kubernetes

해당 저장소는 Udemy Docker Kubernetes [강의](https://www.udemy.com/course/docker-kubernetes-2022/)를 학습한 코드입니다.

학습 시작일: 2023년 1월 15일  
학습 종료일:

## Docker Compose

도커 컴포즈 실행

- -d: detached 모드

``` bash
docker-compose up -d
```

도커 컴포즈 종료

- -v: 볼륨과 함께 제거

``` bash
docker-compose down -v
```

## 도커 명령어 관련 정보

- `-p` 3000번 외부 포트 80번 내부포트
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
docker image prune
docker volume prune
```

### 바인드 마운트 단축키

``` bash
macOS/Linux: -v $(pwd):/app
Windows: -v "%cd%":/app
```
