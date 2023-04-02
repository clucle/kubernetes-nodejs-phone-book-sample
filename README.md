## Environment
`os`: window 10
`node`: v18.15.0
`wsl`: Debian v1
`minikube`: v1.29.0
`kubernetes`: v1.26.1

## mongodb 배포
```bash
# https://github.com/antonputra/tutorials/tree/main/lessons/050
kubectl apply -f deploy/mongodb/
```

## mongodb 테스트
```bash
# 쿠버네티스 내부 포트와 연결해서 외부에서 테스트

kubectl port-forward svc/mongodb-headless 27017:27017 -n database
mongosh -u clucle -p secretpassword123 --authenticationDatabase clucle-web
```

## 도커로 빌드 후 허브에 푸시
```bash
docker build -t clucle/web .
docker push clucle/web
```

## server 배포
```bash
# 이미지 변경 됐을 시
kubectl rollout restart -n staging deployment clucle

kubectl apply -f deploy/server/
```

## 서버 로컬에서 테스트하기
```bash
# 로컬 테스트를 위해 내부 몽고디비 오픈
minikube start
kubectl port-forward svc/mongodb-headless 27017:27017 -n database

# 서버 실행
node server
```

## server 외부 포트 열기
```bash
kubectl port-forward svc/clucle 4000:4000 -n staging
```
