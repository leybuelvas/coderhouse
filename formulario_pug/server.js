const express = require('express');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));


app.set('views', './views');
app.set('view engine', 'pug');

const DB_PRODUCTOS = [];

//RUTAS
app.get('/', (req, res) => {
    res.render('vista', {DB_PRODUCTOS});
});

app.post('/productos', (req, res) => {
    DB_PRODUCTOS.push(req.body);
    console.log(DB_PRODUCTOS);
    res.redirect('/');
});



const PORT = 9090;
const server = app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${server.address().port}`);
});
server.on('error', err => console.log(`error en el servidor ${err}`));