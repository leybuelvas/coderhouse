const express = require('express');
const DB_PRODUCTOS = [];
const app = express();


app.use(express.urlencoded({ extended: true }));


app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) =>{
    res.render('pages/index', {DB_PRODUCTOS});
});


app.post('/productos', (req, res) =>{
    DB_PRODUCTOS.push(req.body);
   console.log(DB_PRODUCTOS);
    res.redirect('/');
});


const PORT = 9092;
const server = app.listen(process.env.PORT || PORT,()=> {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});
server.on('error', err => console.log(`error en servidor ${err}`));
