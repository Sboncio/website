#!/bin/bash
echo $MYSQL_PASSWORD | docker secret create MYSQL_ROOT_PASSWORD - 
sudo docker-compose down
sudo docker pull $DOCKER_USERNAME/app:latest
sudo docker-compose up -d