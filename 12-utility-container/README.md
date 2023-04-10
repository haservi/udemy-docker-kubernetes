# Utility Container

node를 설치하지 않고도 도커로 아래와 같은 명령어를 입력하면 컨테이너에 npm 을 설정할 수 잇다.

``` bash
docker run -it -d node
docker exec -it [컨테이너이름] [명령어]
```

도커를 이용해 로컬환경에 작업환경을 설치하지 않고 프로그램을 실행할 수도 있다.

``` bash
docker build -t node-util .
docker run -it -v $(pwd):/app node-util init
docker run -it -v $(pwd):/app node-util install express --save
```
