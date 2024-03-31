## typescript projelerinizde pm2 kullanma örneği.


Öncelikle ```npm install typescript --save-dev``` yükleyerek tüm typescript ile derlemelisiniz, yüklendikten sonra tsc komutunu kullanarak tüm typescript kodlarınızı javascript'e derleyin.

daha sonra ise pm2 yi yüklemelisiniz, ```npm install pm2 -g``` yüklendikten sonra ise ```pm2 start ecosystem.config.js --env production``` kullanarak sistemleri başlatın.
