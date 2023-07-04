# 39-kub-deploy-volumes-finished

실제 코드를 EKS에 올리는 것은 비용적인 문제도 있으므로.. 전체적으로 어떤 방식으로 진행하는지 확인

EFS도 AWS에서 제공하는 하나의 서비스로 인식하면 좋을 것 같다.  
결국은 pod가 어떠한 문제로 종료되어도 데이터는 유지할 수 있는 방법(EFS, csi, hostpath, s3 등등) 을 적용하면 된다.
