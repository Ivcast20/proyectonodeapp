/*
1. npm i dotenv (nos permite utilizar un archivo .env para las variables globales)
2. Crear un archivo .env
3. Escribir la variable PORT  y colocar el puerto
4. Importarla en el archivo index.js
5. En el archivo package.json agregar en scripts "start": "node index.js"
6. crear el archivo .gititnore
*/
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT; //importo el valor de la variable PORT del env

app.use(express.static('public'));


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port,()=>{
    console.log(`La app se está ejecutando en el puerto ${port}`);
});