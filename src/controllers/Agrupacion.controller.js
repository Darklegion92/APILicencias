const Agrupacion = require("../models/Agrupaciones");
const Articulo = require("../models/Articulo");

//Se encarga de consultar todos los objetos
async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const agrupaciones = await Agrupacion.find().catch(err =>
    res.status(500).send({ err })
  );
  if (agrupaciones.length) return res.status(200).send({ agrupaciones });
  return res.status(204).send({ res: "no se encontraron datos" });
}

//Se encarga de crear un nuevo objeto
async function crear(req, res) {
  res.setHeader("Content-Type", "application/json");
  const agrupacion = new Agrupacion(req.body);
  const respuesta = await agrupacion.save();
  if (respuesta) {
    return res.status(200).send({ res: "agrupación creada correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}
//Se encarga de editar un objeto existente
async function editar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const respuesta = await Agrupacion.findByIdAndUpdate(
    req.params.id,
    req.body,
    { useFindAndModify: false }
  );
  if (respuesta) {
    return res
      .status(200)
      .send({ res: "agrupación actualizada correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}
//Se encarga de eliminar un objeto existente
async function eliminar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const respuesta = await Agrupacion.findByIdAndDelete(req.params.id, {
    useFindAndModify: false
  });
  if (respuesta) {
    return res.status(200).send({ res: "agrupación eliminada correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}

async function filtro(req, res) {
  res.setHeader("Content-Type", "application/json");
  let tipo = req.params.agrupacion;
  let genero = req.params.genero;

  const articulos = await Articulo.find({ tipo, genero }).catch(err =>
    res.status(500).send({ res: err })
  );
  if (articulos.length == 0) return res.status(204).send();
  return res.status(200).send({ articulos });
}

function privado(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ res: "Ingreso A Privado" });
}

function error(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(404).send({ res: "página no encontrada" });
}
module.exports = {
  consultar,
  filtro,
  editar,
  eliminar,
  crear,
  error
};
