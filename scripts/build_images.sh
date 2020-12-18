#!/bin/bash

sudo docker rmi -f $(sudo docker images -qa)
sudo docker rm $(sudo docker container list -qa) 

sudo docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
cd app
echo $(pwd)
sudo docker build . --tag $DOCKER_USERNAME/app:latest


sudo docker push $DOCKER_USERNAME/app:latest
