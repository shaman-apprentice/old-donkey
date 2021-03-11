- `dockerd` (starts docker daemon)
- `docker run --name <name> -d -p <host-port>:<container-port> image`
  - `-it` (interactive)
  - `-e NODE_ENV=production` (environment)
  - `-v <host-dir>:<container-dir` (volume)
  - `--volumes-from <name>` (mounts volume of <name> container)
  - note that localhost is not the internal host of the container -> `httpServer.listen(8080, "0.0.0.0")`
- `docker ps` (-a for stopped container as well)
- `docker logs <name|id>`
- `docker exec <name> <cmd>`
- _.dockerignore_ file for ignoring files to be copied

Docker file:
```
# cache results from top to down until first difference
FROM nginx:alpine
COPY <src> <dst-in-container>
RUN <cmd> # result is baked into image -> you should clean up tmp files
ONBUILD RUN npm install # executes when used as base image
CDM <cmd> # run cmd as soon as image is instantiated
```

- `docker build -t <name:version> <build-dir>` (build-dir containing docker file)
- `docker images` (show available images)

Inter-container communication:
- Via linking at start time: `docker run --link <friendly-name>:<host-name-within-starting-container> alpine ping -c 1 <host-name-within-starting-container>` (sets _envs_ and _/etc/hosts_)
- Via docker network:
  - `docker network create <network-name>`
  - `docker run -d --name=<fn1> --net=<network-name> <image>` (adds `nameserver 127.0.0.11` to _/etc/resolv.conf_)
  - `docker run -d --net=<network-name> alpine ping -c1 <fn1>`
