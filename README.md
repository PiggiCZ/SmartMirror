# SmartMirror
Chytré zrcadlo, ročníkový projekt:

- Cílem mého snažení je zrcadlo, které bude umět příjmat hlasovou komunikaci a zároveň odpovídat na zadané dotazy jako např. počasí z webu, nejbližší autobusové spojení z místa které určím a pokud výjde čas, chtěl bych zkusit i předčítání zpráv z mobilu.

Postup práce:

1. Naučit se s Kicad programem ve kterém budu kreslit veškeré elektronické schéma k mému projektu.
2. Sestrojení elektro. schématu
3. Zprovoznění Raspbianu na RaspberyPi 4 MODEL B skrze aplikaci NOOBS
  > - Stažení aplikace NOOBS ze stránky https://www.raspberrypi.org/downloads/noobs/
  > - Extrakce souborů ze staženého .ZIP souboru do předem připravené, již zformátované SD karty
  > - První spuštění RaspberryPi a následný BOOT do systému Raspbian
4. 

Použité odkazy:

https://www.youtube.com/watch?v=aa3VVZA0e5Y
https://www.raspberrypi.org/documentation/hardware/raspberrypi/schematics/rpi_SCH_4b_4p0_reduced.pdf

Hardware k vytvoření projektu:

https://rpishop.cz/raspberry-pi-4b/1600-RPI401.html
https://cz.gearbest.com/chargers-cables/pp_946407.html?wid=1433363
https://cz.gearbest.com/chargers-cables/pp_1816455.html?wid=1433363
https://bit.ly/2mhg3hM
https://youness.net/raspberry-pi/how-to-connect-bluetooth-headset-or-speaker-to-raspberry-pi-3


Příkazy:
export http_proxy=username:password@proxyhost.com:8080
export https_proxy=username:password@proxyhost.com:8081
exprot no_proxy=localhost, 127.0.0.1, *.my.lan
npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>
