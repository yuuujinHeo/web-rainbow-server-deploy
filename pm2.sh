#!/bin/bash

pm2 start ~/web-rainbow-server-deploy/start_docker.sh
pm2 start ~/web-rainbow-server-deploy/start_host.sh
pm2 save
startup_command=$(pm2 startup | grep 'sudo' | tail -n 1)
eval $startup_command

