# Docker Cheatsheet

One liner to stop / remove all of Docker containers:

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)