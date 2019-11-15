const {Schema, model} =require('mongoose')

const AgrupacionesSchema = new Schema({
    btnPadre: String,
    linkName1: String,
    linkName2: String,
    linkName3: String,
    linkName4: String,
    link1: String,
    link2: String,
    link3: String,
    link4: String
})

const Agrupacion = model('Agrupaciones',AgrupacionesSchema)

module.exports = Agrupacion;