## Environment
`os`: window 10
`node`: v18.15.0
`wsl`: Debian v1
`minikube`: v1.29.0
`kubernetes`: v1.26.1

## 도커로 빌드 후 허브에 푸시
```bash
docker build -t clucle/web .
docker push clucle/web
```

## 배포
```bash
# https://github.com/antonputra/tutorials/tree/main/lessons/050
kubectl apply -f deploy/mongodb/
kubectl apply -f deploy/server/
```

## 테스트
```bash
# 로컬 테스트를 위해 내부 몽고디비 오픈
minikube start
kubectl port-forward svc/clucle 4000:4000 -n staging
```

## 이미지 변경 됐을 시 재시작
```bash
kubectl rollout restart -n staging deployment clucle

# 재시작 완료 후
kubectl port-forward svc/clucle 4000:4000 -n staging
```