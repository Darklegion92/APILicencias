const {Schema, model} = require('mongoose')


const imagenesSchema = new Schema({
    ruta: {
        type:String,
        required:true,
        lowercase:true
    },
    descripcion: {
        type:String,
        required:true,
        lowercase:true
    },
    link: {
        type:String,
        required:true,
        default: 0
    },
    fecha: {
        type:Date,
        default: Date.now()
    },
    tipo:{
        type:String,
        require:true,
        default:"top"
    }
})

const Imagen = model('Imagenes',imagenesSchema)

module.exports = Imagen;