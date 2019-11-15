const {Schema, model} =require('mongoose')
const bcrypt = require('bcryptjs')

const UsuariosSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        lowercase:true
    },
    usuario:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select: false
    },
    correo:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    telefono:{
        type:String,
        required:true,
        lowercase:true
    },
    direccion:{
        type:String,
        required:true,
        lowercase:true
    },
    tipo:{
        type:String,
        required:true,
        enum:['cliente','gestion'],
        default:'cliente',
        lowercase:true
    },
    creado:{
        type: Date,
        default: Date.now()
    }

})
const Usuario = model('Usuarios',UsuariosSchema)

module.exports = Usuario;