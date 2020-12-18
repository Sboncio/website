#!/bin/bash
export DOCKER_USERNAME=sboncio
export DOCKER_PASSWORD=Hannahandsam1

sudo docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
cd app
echo $(pwd)
sudo docker build . --tag $DOCKER_USERNAME/app:latest


sudo docker push $DOCKER_USERNAME/app:latest
