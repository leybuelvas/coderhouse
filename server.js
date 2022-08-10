
const express = require('express');
const app = express();
const Contenedor = require('./clase/desafio-2');


const productos = new Contenedor('productos.txt');


app.get('/productos', async (req, res) => {
    const mostrar = await productos.getAll();
    res.send(mostrar);
});


app.get('/productoRandom', async (req, res) => {
    const object = await productos.getAll();
    const idRandom = Math.floor(Math.random() * object.length);
    res.send(object[idRandom]);
});

app.get('*', (req, res) => {
    res.send('¡Ups! ERROR 404 PAGE NOT FOUND')
});

const server = app.listen(8080,() => console.log('Server listening on port http://localhost:8080/'));
server.on('error',err => console.log(`error: ${err}`));









