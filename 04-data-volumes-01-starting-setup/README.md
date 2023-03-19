# Docker Volumes

## 빌드 방법

도커 파일 생성 후 아래와 같이 명령어 실행

### 이미지 생성

- `-t`는 태그를 달기 위한 명령어

``` bash
docker build -t feedback-node .
```

### 컨테이너 실행

- `-p` 3000번 외부 포트 80번 내부포트
- `-d` `detached mode로 도커 컨테이너를 백그라운드에서 실행
- `--name` 컨테이너 이름 지정
- `--rm` 피드백이 중지 시 자동으로 컨테이너 제거

``` bash
docker run -p 3000:80 -d --name feedback-app --rm feed-back  
```

### 기타 명령어

``` bash
docker rm mycontainer
```

``` bash
docker rmi myimage
```
