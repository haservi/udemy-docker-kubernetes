# Deployment Starting Setup

## build

```bash
docker build -t node-dep-example .
docker run -d --rm --name node-dep -p 80:80 node-dep-example
```
