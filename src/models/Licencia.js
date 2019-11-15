const {Schema, model} = require('mongoose')


const licenciaSchema = new Schema({
    tipo: {
        type:String,
        required:true,
        lowercase:true
    },
    key: {
        type:String,
        unique:true,
        required:true
    },
    empresa: {
        type:String,
        required:true,
        lowercase:true
    },
    activa: {
        type:Boolean,
        required:true
    },
    equipo:{
        type:String,
        uppercase:true,
    }
})

const Licencia = model('Licencias',licenciaSchema)

module.exports = Licencia;