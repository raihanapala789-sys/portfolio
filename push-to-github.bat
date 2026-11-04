@echo off
cd /d "%~dp0"
echo ====================================================
echo   PUSHING RAIHANATH PORTFOLIO TO GITHUB
echo   Repo: https://github.com/raihanapala789-sys/portfolio.git
echo ====================================================
echo.
"C:\Users\Raihanath\AppData\Local\Programs\MinGit\cmd\git.exe" push -u origin main
echo.
pause
