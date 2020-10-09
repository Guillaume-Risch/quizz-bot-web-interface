#!/bin/bash
cd src && npx tsc && cd ../static && npx tsc && cd ..
docker-compose down
docker-compose up -d