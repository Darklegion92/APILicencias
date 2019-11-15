const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config')

function crearToken (usuario) {
 
    const payload = {
      sub: usuario,
      iat: moment().unix(),
      exp: moment().add(14,'days').unix()
    }
    
    return jwt.encode(payload,config.SECRET_TOKEN)
  }

  module.exports = {
    crearToken
  }