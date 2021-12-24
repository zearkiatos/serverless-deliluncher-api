 serverless-dev:
		serverless offline --host 0.0.0.0 --port $PORT

docker-develop-up:
	docker-compose -f docker-compose.develop.yml up --build

docker-develop-down:
	docker-compose -f docker-compose.develop.yml down