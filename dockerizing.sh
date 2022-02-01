#!/bin/sh

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "Docker Image Version : "$PACKAGE_VERSION
docker build -t ".../...":$PACKAGE_VERSION .
docker push ".../...":$PACKAGE_VERSION
docker rmi ".../...":$PACKAGE_VERSION
