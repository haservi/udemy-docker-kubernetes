# deployment-added-frontend-project

Docker CMD에서 `CMD [ "npm", "start" ]`값은 기본적으로 package.json의 스크립트에 있는 start 명령어를 실행한다.  
이외에는 가운데에 `CMD [ "npm", "run", "start" ]`을 추가해서 스크립트 실행해야한다.

[nginx docker menual](https://hub.docker.com/_/nginx)을 참조하여 빌드된 파일의 위치를 지정해야 한다.

멀티스테이지 빌드로 하나의 도커파일에 여러 이미지를 빌드할 수 있다.

-f: 도커 파일명을 지정할 수 있음

``` bash
docker build -f frontend/Dockerfile.prod ./frontend
```
