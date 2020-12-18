#!/bin/bash
sudo apt install python3 
sudo apt install python3-pip
pip3 install -r app/requirements.txt
cd app
pytest
