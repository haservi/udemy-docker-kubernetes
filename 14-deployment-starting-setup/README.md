# Deployment Starting Setup

## build

```bash
docker build -t node-dep-example .
docker run -d --rm --name node-dep -p 80:80 node-dep-example
```

## AWS 설정 관련

EC2 연결

``` bash
chmod 400 [your.pem]
ssh -i "[your.pem] " [your-public-dns]
```

remote 업데이트 도커 설치

``` bash
sudo yum update -y # 리모트 머신 설치
sudo amazon-linux-extras install docker # 아마존 도커 설치
sudo service docker start # 도커 시작
docker run  # 도커 실행
sudo docker run -d --rm -p 80:80 haservi/node-dep-example
```

### 도커 이미지 공식홈페이지 푸시

``` bash
docker login # 로그인
docker build -t node-dep-example . # 이미지 생성
docker tag node-dep-example haservi/node-dep-example # 태그 지정
docker push haservi/node-dep-example # 푸시
```
