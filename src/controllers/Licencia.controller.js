const Licencia = require('../models/Licencia')

//Se encarga de consultar todos los objetos
async function validar (req, res) {
  res.setHeader('Content-Type', 'application/json')

  const licencias = await Licencia.findOneAndUpdate(
    { key: req.body.key },
    { activa: 'false', equipo: req.body.serial, fechaActivacion: new Date() }
  ).catch(err => res.status(500).send({ err }))

  if (licencias) res.status(200).send({ licencias })
  else res.status(201).send({ res: 'Licencia no encontrada' })
}

//Se encarga de consultar todos los objetos
async function registrar (req, res) {
  res.setHeader('Content-Type', 'application/json')
  const { tipo, key, empresa, activa } = req.body
  const licencia = new Licencia({ tipo, key, empresa, activa })
  try {
    licencia.save()

    if (licencia) res.status(200).send({ licencia })
    else res.status(201).send({ res: 'Licencia ya registrada' })
  } catch (e) {
    console.log(e)
    res.status(500).send({ e })
  }
}

function error (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.status(404).send({ res: 'Página no encontrada' })
}

module.exports = {
  registrar,
  validar,
  error
}
