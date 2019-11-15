const Imagen = require("../models/Imagenes")
const config = require("../config/config")

//Se encarga de consultar todos los objetos
async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const valor = req.params.dato;
  const imagenes = await Imagen.find({ tipo: new RegExp(valor, "i") }).catch(
    err => res.status(500).send({ err })
  );
  if (imagenes.length) return res.status(200).send({ imagenes });
  return res.status(204).send({ res: "no se encontraron datos" });
}

// cargar imagenes
async function cargarImagen(req, res) {
  const newImg = new Imagen({
    ruta:
      config.IP+"/img/"+req.file.originalname,
    descripcion: "fshfbhdks",
    tipo: req.params.tipo,
    link: "http://localhost:3000/products"
  });
  const respuesta = await newImg.save();
  if (respuesta) {
    return res.status(200).send({ res: "Imagen Cargada Correctamente" });
  } else {
    res.status(240).send({ res: "No se ha podido cargar" });
  }
}

//Se encarga de editar un objeto existente
async function editar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const respuesta = await Imagen.findByIdAndUpdate(
    req.params.id,
    req.body,
    { useFindAndModify: false }
  );
  if (respuesta) {
    return res
      .status(200)
      .send({ res: "imagen actualizada correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}

//Se encarga de eliminar un objeto existente
async function eliminar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const respuesta = await Imagen.findByIdAndDelete(req.params.id, {
    useFindAndModify: false
  });
  if (respuesta) {
    return res.status(200).send({ res: "imagen eliminada correctamente" });
  } else {
    res.status(500).send({ res: "se ha prenetado un error inesperado" });
  }
}

function error(req, res) {
  res.status(404).send({ res: "Página no encontrada" });
}

module.exports = {
  error,
  cargarImagen,
  eliminar,
  editar,
  consultar
};
