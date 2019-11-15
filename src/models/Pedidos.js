const {Schema, model} =require('mongoose')

const PedidosSchema = new Schema({
    cliente:{
        type: String,
        required: true,
        default: "Cliente de Prueba",
        lowercase: true
    },
    direccion:{
        type: String,
        required: true,
        default: "En algun lugar del mundo",
        lowercase: true
    },
    telefono:{
        type: String,
        required: true,
        default: "666",
        lowercase: true
    },
    articulos:[
        {nombre: {
            type:String,
            required:true,
            lowercase:true
        },
        codigo: {
            type:String,
            required:true,
            lowercase:true
        },
        precio: {
            type:Number,
            required:true,
            default: 0
        },
        genero: {
            type:String,
            required:true,
            enum: ['damas','caballeros'],
            lowercase:true
        },
        talla: {
            type:Number,
            required:true,
            default: 0
        },
        marca: {
            type:String,
            required:true,
            default: 'Planeta Store',
            lowercase:true
        },
        adulto: {
            type:Boolean,
            default: true,
            required:true
        },
        color: {
            type:String,
            required:true,
            default: 'black',
            lowercase:true
        },
        imagen: {
            type:String,
            required:true,
            default: 'error.jpg',
            lowercase:true
        }, 
        creacion: {
            type:Date,
            default: Date.now()
        },
        tipo: {
            type:String,
            required:true,
            default: "Calzado",
            lowercase:true
        },
        incart:{
            type:Boolean,
            required:true,
            default:false
        },
        cantidad:{
            type:Number,
            required:true,
            default:1
        }}
    ]
})

const Pedido = model('Pedidos',PedidosSchema)

module.exports = Pedido;