# 04-data-volumes-starting-setup

도커 파일 생성 후 아래와 같이 명령어 실행

## 이미지 생성

- `-t`는 태그를 달기 위한 명령어

``` bash
docker build -t feedback-node .
```

### 컨테이너 실행

- `-p` 3000번 외부 포트 80번 내부포트
- `-d` `detached mode로 도커 컨테이너를 백그라운드에서 실행
- `--name` 컨테이너 이름 지정
- `--rm` 피드백이 중지 시 자동으로 컨테이너 제거
- `-v` 볼륨 지정 명명된 볼륨은 컨테이너가 제거하지 않음

``` bash
docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node
```

바인드 마운트 방법

``` bash
docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v $(pwd):/app -v /app/node_modules feedback-node
```

### 기타 명령어

컨테이너 제거

``` bash
docker rm [mycontainer]
```

이미지 제거

``` bash
docker rmi [myimage]
```

볼륨 확인

``` bash
docker volume ls 
```

볼륨 제거

``` bash
docker volume rm [volume name]
```

### 바인드 마운트 단축키

``` bash
macOS/Linux: -v $(pwd):/app
Windows: -v "%cd%":/app
```
