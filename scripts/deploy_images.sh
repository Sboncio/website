#!/bin/bash
sudo docker-compose down
sudo docker pull sboncio/app:latest
sudo docker-compose up -d