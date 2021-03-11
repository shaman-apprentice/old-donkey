- `docker swarm init`
  - > docker swarm join --token SWMTKN-1-61dizpi1bio5gskeuki1ggxj2gwbgairlilbm0cbz49c6bphls-dx3ed56rw1rsnznxfz8vn13rw 172.17.0.79:2377
  - creates swarm manager
- To join run on other host _above output_
- docker node ls
  - | ID                          | HOSTNAME | STATUS | AVAILABILITY | MANAGER STATUS | ENGINE VERSION
    |:---------------------------:|:--------:|:------:|:------------:|:--------------:|---------------
    | 3dp4ca4djrnw6ezvhzqvixkr4 * | host01   | Ready  | Active       | Leader         | 19.03.13
    | zid6gzkkwmo4mco1rr016bcv7   | host02   | Ready  | Active       |                |
- `docker network create -d overlay skynet`
- `docker service create --name http --network skynet --replicas 2 -p 80:80 katacoda/docker-http-server`
  - `docker ps` will have a running continer of image _katacoda/docker-http-server_ on 2 nodes
  - `curl host01` on both nodes will alternating answer, as swarm manager handles dispatching