# deployment-added-frontend-project

Docker CMD에서 `CMD [ "npm", "start" ]`값은 기본적으로 package.json의 스크립트에 있는 start 명령어를 실행한다.  
이외에는 가운데에 `CMD [ "npm", "run", "start" ]`을 추가해서 스크립트 실행해야한다.
