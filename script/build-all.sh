#!/bin/bash

echo "current working directory: $(pwd)"
pnpm exec concurrently \
  "pnpm run build:watch microservice-device" \
  "pnpm run build:watch microservice-config" \
  "pnpm run build:watch microservice-task" \
  "pnpm run build:watch microservice-monitoring" \
  "pnpm run build:watch gateway" 
