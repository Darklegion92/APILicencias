
const Pedidos = require('../models/Pedidos')

async function agregarArticulo(req,res){
    var newPedido = new Pedidos({articulos: req.body})
    let total =0
    req.body.forEach(item => {
            total = total + (item.cantidad * item.precio)
    })
    const respuesta = await newPedido.save() 
    if(respuesta) {
        return res.status(200).send({res:"Pedido Registrado Correctamente",total:total})
    }else {
        res.status(500).send({res: "no se ha podido guardar"})
   }
}

function error(req,res){
    res.status(404).send({res: "Página no encontrada"});
}

module.exports = {
    agregarArticulo,
    error
}