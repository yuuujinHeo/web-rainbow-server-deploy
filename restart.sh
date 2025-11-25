#!/bin/bash

echo "=========== 1) PM2에 등록된 서비스 종료 (없으면 에러남 정상)"
pm2 delete start_docker
pm2 delete start_host
pm2 delete server
pm2 delete mediamtx

echo "=========== 2) 도커 완전히 내리기 "
cd ~/web-rainbow-server-deploy
docker compose -f rrs-compose.yml down

echo "=========== 3) 혹시 모르니 재설치 "
git pull
pnpm install

echo "=========== 4) 혹시 모르니 도커이미지 받기 "
docker pull rainbowyujin/node_host_root:latest

echo "=========== 5) 다시 PM2 실행 (기존 서버는 안켜짐)"
pm2 start --cwd ~/web-rainbow-server-deploy ~/web-rainbow-server-deploy/start_docker.sh
pm2 start --cwd ~/web-rainbow-server-deploy ~/web-rainbow-server-deploy/start_host.sh
pm2 save
startup_command=$(pm2 startup | grep 'sudo' | tail -n 1)
eval $startup_command


echo "=========== 등록 완료. 도커 이미지 생성 시간 소요될 수 있음"
echo "설치과정 확인하려면 터미널창에 다음 입력 : docker logs"
echo "설치완료 확인하려면 웹브라우저에 다음 입력(swagger 페이지 떠야함) : http://localhost:13000/docs/api"

