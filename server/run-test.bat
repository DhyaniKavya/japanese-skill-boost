@echo off
cd %~dp0
node test-connection.js
echo Test completed. Check connection-test-result.txt for results.
pause