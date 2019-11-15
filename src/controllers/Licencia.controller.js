const Licencia = require("../models/Licencia");

//Se encarga de consultar todos los objetos
async function validar(req, res) {
  res.setHeader("Content-Type", "application/json");
  
  const licencias = await Licencia.findOneAndUpdate({key:req.body.key},{activa:"false",equipo:req.body.serial}).catch(err =>
    res.status(500).send({ err })
  );
  
  if (licencias) return res.status(200).send({ licencias });
  return res.status(204).send({ res: "Licencia no encontrada" });

}

function error(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(404).send({ res: "Página no encontrada" });
}

module.exports = {
  validar,
  error
}
