#!/bin/bash

sudo docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
cd app
echo $(pwd)
sudo docker build . --tag $DOCKER_USERNAME/app:latest


sudo docker push $DOCKER_USERNAME/app:latest
