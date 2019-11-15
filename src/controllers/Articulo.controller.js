const Articulo = require("../models/Articulo");

//Se encarga de consultar todos los objetos
async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const articulos = await Articulo.find().catch(err =>
    res.status(500).send({ err })
  );
  if (articulos.length) return res.status(200).send({ articulos });
  return res.status(204).send({ res: "no se encontraron datos" });
}

//Se encarga de crear un nuevo objeto
async function crear(req, res) {
  res.setHeader("Content-Type", "application/json");
  const articulo = new Articulo(req.body)
  const respuesta = await articulo.save()
  .catch()
  if (respuesta) {
    return res.status(200).send({ res: "artículo creado correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}

//Se encarga de editar un objeto existente
async function editar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const respuesta = await Articulo.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false
  });
  if (respuesta) {
    return res.status(200).send({ res: "artículo actualizado correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}

//Se encarga de eliminar un objeto existente
async function eliminar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const respuesta = await Articulo.findByIdAndDelete(req.params.id, {
    useFindAndModify: false
  });
  if (respuesta) {
    return res.status(200).send({ res: "artículo eliminado correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}

//se encarga de filtrar los datos de la consulta
async function filtro(req, res) {
  res.setHeader("Content-Type", "application/json");
  const valor = req.params.valor;
  const articulos = await Articulo.find({
    $or: [{ nombre: new RegExp(valor, "i") }, { marca: new RegExp(valor, "i") }]
  }).catch(err => res.status(500).send({ err }));
  if (articulos.length) return res.status(200).send({ articulos });
  return res.status(204).send({ res: "SIN CONTENIDO" });
}

function show(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.body.err) return res.status(500).send({ err });
  if (req.body.articulos) return res.status(200).send({ articulos });
  return res.status(404).send({ res: "NO SE ENCUENTRA" });
}

async function find(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let consulta = {};
  consulta[req.params.key] = req.params.value;
  articulos = await Articulo.find(consulta).catch(err => {
    req.body.err = err;
    next();
  });
  if (!articulo) return next();
  req.body.articulos = articulos;
  return next();
}

function error(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(404).send({ res: "Página no encontrada" });
}

module.exports = {
  consultar,
  filtro,
  crear,
  editar,
  eliminar,
  error
}
