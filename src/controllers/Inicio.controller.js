
async function index(req,res){
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send({res:'index'})
}

function show(req,res){
    if(req.body.err) return res.status(500).send({err})
    if(req.body.articulos) return res.status(200).send({articulos})
    return res.status(404).send({res: 'NO SE ENCUENTRA'})
}

async function find(req,res,next){
    let consulta = {}
    consulta[req.params.key] = req.params.value
    articulos = await Articulo.find(consulta)
    .catch(err=>{
        req.body.err = err
        next()
    })
    if(!articulo) return next()
    req.body.articulos = articulos;
    return next();
}

function error(req,res){
    res.status(404).send({res: "Página no encontrada"});
}
function imagenes(req,re){
    
}

module.exports = {
    index,
    show,
    find,
    imagenes,
    error
}