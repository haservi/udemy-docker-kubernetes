# Multi Starting Setup

## 빌드 방법

docker network ls

``` bash
docker network create goals-net
```

### DB

data: data db 볼륨 추가
-e: 환경변수 추가
-e MONGO_INITDB_ROOT_USERNAME=admin
-e MONGO_INITDB_ROOT_PASSWORD=password

``` bash
docker run mongo
docker run --name mongodb \
 -v data:/data/db \
 --rm \
 -d \
 --network goals-net \
 mongo

docker pull mongo:3.6
docker run --name mongodb -v data:/data/db --rm -d --network goals-net mongo:3.6
```

### Backend

- -v: log 볼륨 추가
- $(pwd): 해당 코드의 위치(mac)

``` bash
docker build -t goals-node .
docker run --name goals-backend \
 --rm \ 
 -d \
 -v $(pwd):/app \
 -v logs:/app/logs \
 -v /app/node_modules \
 --network goals-net \
 -p 80:80 \
 goals-node
```

backend/app.js 의 이름이 mongodb 컨테이너와 같아야 한다.

### Frontend

자신의 폴더 경로 찾기

- macOS/Linux: -v $(pwd):/app
- Windows: -v "%cd%":/app
- -it: 도커 컨테이너를 대화형(interactive) 모드로 실행

해당 폴더 위치에서 해야함

``` bash
docker build -t goals-react .
docker run \
 --name goals-frontend \
 -v $(pwd)/src:/app/src \
 --rm \
 -d \
 -it \
 -p 3000:3000 \
 goals-react
```

프론트엔드의 경우 --network가 의미가 없다. 애초에 브라우저를 통해 연결되기 때문에

### Other

``` docker
docker ps pru
```

`.dockerignore`를 정하여 docker image를 만들때 필요없는 파일은 제외하는게 좋다.
