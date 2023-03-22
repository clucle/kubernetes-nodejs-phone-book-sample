## Environment
`os`: window 10
`node`: v18.15.0
`wsl`: Debian v1
`minikube`: v1.29.0
`kubernetes`: v1.26.1

## 도커로 서버 띄우기
```bash
docker run -d -p 8080:8000 clucle/hello
```

## 쿠베네티스로 서버 띄우기
```bash
kubectl create -f ./pod.yaml
kubectl apply -f ./pod.yaml
kubectl get pod

kubectl create -f ./service.yaml
kubectl apply -f ./service.yaml

minikube service hello-svc --url
```