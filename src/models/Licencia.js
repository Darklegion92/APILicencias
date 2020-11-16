const { Schema, model } = require('mongoose')

const licenciaSchema = new Schema({
  tipo: {
    type: String,
    required: true,
    lowercase: true
  },
  key: {
    type: String,
    unique: true,
    required: true
  },
  empresa: {
    type: String,
    required: true,
    lowercase: true
  },
  activa: {
    type: Boolean,
    required: true,
    default: true
  },
  equipo: {
    type: String,
    uppercase: true
  },
  fechaCreacion: {
    type: Date,
    required: true,
    default: new Date(),
    select: false
  },
  fechaActivacion: {
    type: Date,
    select: false
  }
})

const Licencia = model('Licencias', licenciaSchema)

module.exports = Licencia
