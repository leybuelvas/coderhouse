const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static('./public')); 
app.use(express.urlencoded({ extended: true }));


app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


const DB_PRODUCTOS = [];


app.get('/', (req, res) => {
    res.render('vista', {DB_PRODUCTOS});
});


app.post('/productos', (req, res) => {
    DB_PRODUCTOS.push(req.body);
    console.log(DB_PRODUCTOS);
    res.redirect('/');
});



const PORT = 9091;
const server = app.listen(process.env.PORT || PORT,()=> {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});
server.on('error', err => console.log(`error en servidor ${err}`));