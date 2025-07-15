@echo off
cd %~dp0
echo Starting server with logging...
node server.js > server-log.txt 2>&1