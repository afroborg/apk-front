build:
	docker build . -t apk-frontend
start:
	docker run -p 3000:3000 \
	-d --name apk-frontend \
	--network=traefik \
	 apk-frontend