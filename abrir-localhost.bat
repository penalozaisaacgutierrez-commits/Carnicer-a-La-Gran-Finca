@echo off
REM Si WAMP (Apache) esta apagado, use el servidor PHP en el puerto 8771.
start http://localhost:8771/
if exist "C:\wamp64\bin\php\php8.3.28\php.exe" (
  start "CarniceriaLaGranFinca" /MIN "C:\wamp64\bin\php\php8.3.28\php.exe" -S localhost:8771 -t "C:\wamp64\www\carniceria-la-gran-finca"
)
