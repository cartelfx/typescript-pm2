# typescript projelerinizde pm2 kullanma örneği.


Öncelikle ```npm install typescript --save-dev``` modülünü yükledikten sonra  ```npm install copyfiles --save-dev```  
modülünüde yükledikten sonra ```npm run build``` komutunu kullanarak dosyalarınızı JavaScript dosyalarına derleyin. Daha sonra ise pm2 yi yüklemelisiniz, ```npm install pm2 -g``` yüklendikten sonra ise ```npm run start``` kullanarak sistemleri başlatın.


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
