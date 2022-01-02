build:
	docker build . -t apk-frontend
start:
	docker run -p 3000:3000 \
	-l traefik.http.routers.apk-backend.rule=${ROUTER_RULE}  \
	-l traefik.http.routers.apk-backend.tls=true  \
	-l traefik.http.routers.apk-backend.tls.certresolver=le  \
	 apk-frontend