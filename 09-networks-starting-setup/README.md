# Networks Starting Setup

## 빌드 방법

### 이미지 생성

mongo db 이미지 및 컨테이너 생성

``` bash
docker run mongo

docker run -d --name mongodb mongo  
```

``` bash
docker build -t feedback-node .
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
