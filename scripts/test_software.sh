#!/bin/bash
sudo apt install python3 python3-pip python3-pytest -y
pip3 install -r app/requirements.txt
cd app
python3 -m pytest
