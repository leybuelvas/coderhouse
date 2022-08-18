const router = require('express').Router();
const Producto = require('../producto.js');


router.get('/productos', (req, res) => {
    res.send(Producto.productos)
});

router.get('/productos/:id',(req, res) => {
    const producto = Producto.productos.find(producto => producto.id == Number(req.params.id));
    if(producto) {
         res.send(producto);
    } else {
         res.status(404).send({error :'Producto no encontrado'});
    }
});

router.post('/productos', (req, res) => {
    let { tittle, price, thumbnail } = req.body;
    const producto = { tittle, price, thumbnail};
    producto.id = Producto.productos.length + 1;
    Producto.productos.push(producto);
    res.send(Producto.productos);
});

router.put('/productos/:id', (req, res) => {
    let { title, price, thumbnail } = req.body;
    let index = Producto.productos.findIndex(producto => producto.id === Number(req.params.id));
    if (index >= 0) {
        Producto.productos[index] = { title, price, thumbnail };
        Producto.productos[index].id = Number(req.params.id);
        res.send(Producto.productos[index]);
    } else {
        res.status(404).send({ error: 'Producto no encontrado' });
    }
});

router.delete('/productos/:id', (req, res) => {
    let index = Producto.productos.findIndex(producto => producto.id === Number(req.params.id));
    if (index >= 0) {
        Producto.productos.splice(index, 1);
        res.send({ message: 'Producto eliminado' });
    } else {
        res.status(404).send({ error: 'Producto no encontrado' });
    }
})

module.exports = router;