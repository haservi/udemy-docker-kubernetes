# Networks Starting Setup

## 빌드 방법

### 이미지 생성

mongo db 이미지 및 컨테이너 생성

``` bash
docker run mongo

docker run -d --name mongodb mongo  
```

동일한 네트워크로 실행하는 방법

``` bash
# mongo 설치
docker run mongo

# 이미지 빌드
docker build -t favorites-node .

# 네트워크 생성
docker network create favorites-net

# 네트워크를 지정한 mongo 컨테이너 실행
docker run -d --name mongodb --network favorites-net mongo

# 네트워클 지정한 이미지 컨테이너 실행
docker run --name favorites --network favorites-net  -d --rm -p 3000:3000 favorites-node
```

### 컨테이너 실행

- `-p` 3000번 외부 포트 80번 내부포트
- `-d` `detached mode로 도커 컨테이너를 백그라운드에서 실행
- `--name` 컨테이너 이름 지정
- `--rm` 피드백이 중지 시 자동으로 컨테이너 제거
- `-v` 볼륨 지정 명명된 볼륨은 컨테이너가 제거하지 않음
- `:ro` 읽기 전용

``` bash
docker run --name favorites -d --rm -p 3000:3000
```

### 도커 관련

도커 내부에서 나의 로컬 호스트를 아는 방법

``` bash
localhost:port -> host.docker.internal:port
```

도커에 존재하는 네트워크 확인

``` bash
docker network ls
```
