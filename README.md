# typescript projelerinizde pm2 kullanma örneği.


Öncelikle ```npm install typescript --save-dev``` modülünü yüklemelisiniz yüklendikten sonra  ```npm install copyfiles --save-dev```  
modülünüde yükledikten sonra ```npm run build``` komutunu kullanarak dosyalarınızı JavaScript dosyalarına derleyin. Daha sonra ise pm2 yi yüklemelisiniz, ```npm install pm2 -g``` yüklendikten sonra ise ```npm run start``` kullanarak sistemleri başlatın.

# ÇALIŞMA
![İMG](https://cdn.discordapp.com/attachments/1118782795385426050/1223952259851882577/unknown.png?ex=661bb95e&is=6609445e&hm=2e3a503e2d8c557804081ab321fa6dadc77daba6ad58c2cd95ca08e106336b7d&)
# YENİ UYGULAMA TASLAĞI
```js
 {

            name: 'yeni app',

            script: 'dist/APP/index.js',

            autorestart: true,

            watch: false,

            max_memory_restart: '1G',

            env: {

                NODE_ENV: 'development'

            },

            env_production: {

                NODE_ENV: 'production'

            }

        },

```
