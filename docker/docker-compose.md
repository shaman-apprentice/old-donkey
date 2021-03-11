docker-compose.yml
```
web:
  build: .

  links:
    - redis

  ports:
    - "3000"
    - "8000"

redis:
  image: redis:alpine
  volumes:
    - /var/redis/data:/data
```

- `docker-compose up -d`
- `docker-compose logs` and alike
- `docker-compose scale web=3`