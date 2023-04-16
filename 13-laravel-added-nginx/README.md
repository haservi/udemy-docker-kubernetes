# Laravel Added Nging

## 빌드 관련

docker-compose는 단일 컨테이너도 실행 할 수 있다

``` bash
docker-compose run --rm composer
````

laravel src 파일 생성

``` bash
docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
```

docker-compose는 여러 서비스를 동시에 실행 가능

``` bash
docker-compose up -d server php mysql
```

도커파일이 변경된 사항이 있는 경우 이미지를 다시 생성 강제 방법

``` bash
docker-compose up -d --build server
```

``` bash
docker-compose run --rm artisan migrate
```

### 빌드 오류 관련 정리

Parse error: syntax error, unexpected '|', expecting variable (T_VARIABLE) in /var/www/html/vendor/nunomaduro/termwind/src/Functions.php on line 17

--> 아래와 같이 Php 버전을 변경하고 다시 src를 만들면 됨

``` bash
# FROM php:7.4-apache
FROM php:8.0-fpm-alpine # php docker 파일 수정
docker-compose run --rm composer create-project laravel/laravel:8.0.0 . # 해당 명령어로 다시 실행
```

### 기타 설정

src/.env 설정 변경

``` bash
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

