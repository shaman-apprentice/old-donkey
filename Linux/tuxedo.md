https://www.tuxedocomputers.com/index.php

`sudo wget http://deb.tuxedocomputers.com/0x54840598.pub.asc -O /usr/share/keyrings/tuxedocomputers-keyring.asc`
in /etc/apt/sources.list.d/archive_uri-http_deb_tuxedocomputers_com_ubuntu-jammy.list:
deb [arch=amd64 signed-by=/usr/share/keyrings/tuxedocomputers-keyring.asc] http://deb.tuxedocomputers.com/ubuntu jammy main

`sudo apt install tuxedo-control-center`
