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
