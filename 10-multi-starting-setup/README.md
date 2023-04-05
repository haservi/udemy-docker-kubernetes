# Multi Starting Setup

## 빌드 방법

docker network ls

``` bash
docker network create goals-net
```

### DB

data: data db 볼륨 추가
-e: 환경변수 추가
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=secret

``` bash
docker run mongo
docker run --name mongodb -v data:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --rm -d --network goals-net mongo

docker pull mongo:3.6
docker run --name mongodb -v data:/data/db --rm -d --network goals-net mongo:3.6

```

### Backend

- -v: log 볼륨 추가
- $(pwd): 해당 코드의 위치(mac)

``` bash
docker build -t goals-node .
docker run --name goals-backend --rm -d -v $(pwd):/app -v logs:/app/logs -v /app/node_modules --network goals-net -p 80:80 goals-node
```

backend/app.js 의 이름이 mongodb 컨테이너와 같아야 한다.

### Frontend

``` bash
docker build -t goals-react .
docker run --name goals-frontend --rm -d -p 3000:3000 goals-react
```

프론트엔드의 경우 --network가 의미가 없다. 애초에 브라우저를 통해 연결되기 때문에

### Other

``` docker
docker ps pru
```
