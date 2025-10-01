#!/bin/bash

echo "1) PM2 등록 삭제"
pm2 delete start_docker
pm2 delete start_host

echo "2) Docker 다운로드"
docker login
docker pull rainbowyujin/node_host_root:latest

echo "3) Git 최신화"
git pull

echo "4) Module 다운로드"
pnpm install

echo "4) PM2 등록 및 실행"
pm2 start --cwd ~/web-rainbow-server-deploy ~/web-rainbow-server-deploy/start_docker.sh
pm2 start --cwd ~/web-rainbow-server-deploy ~/web-rainbow-server-deploy/start_host.sh
pm2 save


