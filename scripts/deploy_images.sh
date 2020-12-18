#!/bin/bash
sudo docker-compose down
sudo docker pull $DOCKER_USERNAME/app:latest
sudo docker-compose up -d