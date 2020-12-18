#!/bin/bash

sudo docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

sudo docker build app $DOCKER_USERNAME/app:latest

sudo docker push $DOCKER_USERNAME/app:latest