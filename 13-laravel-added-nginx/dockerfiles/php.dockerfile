# FROM php:7.4-apache
FROM php:8.0-fpm-alpine

WORKDIR /var/www/html

COPY src .

RUN docker-php-ext-install pdo pdo_mysql
# www-data 기본적으로 생성한 유저 권한을 변경
RUN chown -R www-data:www-data /var/www/html
