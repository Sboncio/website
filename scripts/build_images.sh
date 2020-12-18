#!/bin/bash

sudo docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

sudo docker build app sboncio/app:latest

sudo docker push sboncio/app:latest