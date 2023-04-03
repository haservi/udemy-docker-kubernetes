# Multi Starting Setup

## 빌드 방법

docker network ls

``` bash
docker network create goals-net
```

### DB

``` bash
docker run mongo
docker run --name mongodb --rm -d --network goals-net mongo
```

### Backend

``` bash
docker build -t goals-node .
docker run --name goals-backend --rm -d --network goals-net -p 80:80 goals-node
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
