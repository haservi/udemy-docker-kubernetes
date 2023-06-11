# 24-kub-data-starting-setup

``` bash
docker-compose up -d --build
# docker-compose에서 volumes를 명시했기에 컨테이너가 종료되도 따로 관리
docker-compose down # 
```

kubernetes에서의 volumes

쿠버네티스에서도 도커 볼륨을 사용하지만, 다양한 드라이버가 있으며, 파일을 관리하기가 더 용이함
