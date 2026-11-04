@echo off
title Raihanath Portfolio Server
cd /d "%~dp0"
echo Starting local portfolio server...
start http://localhost:8080/
powershell -NoProfile -ExecutionPolicy Bypass -File .\serve.ps1 -Port 8080
pause
