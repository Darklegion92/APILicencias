const Usuario = require('../models/Usuarios')
const service = require('../services/index.service')
const bcrypt = require('bcryptjs')

async function login(req,res){
  res.setHeader('Content-Type', 'application/json');
  const user = await Usuario.find({$or:[
    {usuario:req.body.datos.user},
    {correo:req.body.datos.user}],
  $and:[
    {password:req.body.datos.pass}
  ]})
  .catch(err => res.status(500).send({err}))
  
  if(user.length){
    return res.status(200).send({token: service.crearToken(user)})
  } 
  return res.status(201).send({res: 'USUARIO O CORREO NO EXISTEN'})
}

async function singup(req,res){
    let data = req.body.datos.nombres+""+req.body.datos.email
    user = data.split("@")
    const usuario = new Usuario({
      nombre: req.body.datos.nombres+" "+req.body.datos.apellidos,
      usuario: user[0].replace(/ /g, ""),
      correo: req.body.datos.email,
      telefono: req.body.datos.celular,
      direccion: req.body.datos.direccion,
      password: req.body.datos.pass
    })
    usuario.save((err)=>{
      if(err) {
        console.log(err);
        return res.status(500).send({res:"Error al crear el usuario"})}
      return res.status(200).send({ token: service.crearToken([usuario]) })
    })

    
}

function error(req,res){
    res.status(404).send({res: "Página no encontrada"});
}

module.exports = {
    login,
    singup,
    error
}