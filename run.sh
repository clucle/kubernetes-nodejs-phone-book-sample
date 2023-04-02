docker build -t clucle/web .
docker push clucle/web
kubectl rollout restart -n staging deployment clucle