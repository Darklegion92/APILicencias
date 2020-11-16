'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const licenciasRouter = require('./routes/Licencias.routes')
const multer = require('multer')
const path = require('path')

const APP = express()

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img'),
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

//MiddelWare
APP.use(cors())
APP.use(bodyParser.json())
APP.use(bodyParser.urlencoded({ extended: false }))
APP.use(morgan('dev'))
APP.use(
  multer({
    storage,
    dest: path.join(__dirname, 'public/img')
  }).single('file')
)

//Rutas
APP.use('/licencias', licenciasRouter)

//Elementos Estaticos
APP.use(express.static(path.join(__dirname, 'public')))
module.exports = APP
