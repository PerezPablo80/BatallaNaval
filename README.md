## La creacion de esta batalla naval tiene el objetivo de mostrar el funcionamiento del socket.io para mostrar, en tiempo real, los cambios que se producen en diferentes dispositivos.

### Backend contiene la lógica interna donde reside la información a enviar, en tanto el frontend, usando React contendrá la visualización de los cambios en tiempo real.

#### Para ejecutar el backend:
1. [si es la primera vez] `npm install`
2. node index.js
   1. Se puede usar un sistema que mantenga encendido siempre node como pm2. No esta en este alcance, pero existe.

#### Para ejecutar el frontend:
1.  cd frontend
2.  npm install
3.  npm run dev  


## Consideraciones:
En mi caso fue necesario instalar cors y fue necesario leer el npm de socket pues no funcionaba con las ideas planteadas en diferentes foros.

(socket.io web)[https://www.npmjs.com/package/socket.io]

(cors from npm)[https://www.npmjs.com/package/cors]