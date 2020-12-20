#!/bin/sh

[ -d "/app/meta" ] || mkdir /app/meta;

[ -f "/app/meta/config.json" ] || $(echo "Create config.json" && exit 1);

[ -f "/app/meta/input.txt" ] ||  touch /app/input.txt;

[ -f "/app/meta/Einput.txt" ] ||touch /app/meta/Einput.txt;


cd /app
echo "Starting"
npm start
