var whitelist = ['http://192.168.1.58']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    } 
  }
}

module.exports = {
    PORT: process.env.PORT || 8080,
    DB: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pruebas',
    corsOptions: corsOptions,
    SECRET_TOKEN: "SOLTEC-tecnologiaydesarrollo$",
    IP: process.env.IP || "http://localhost"
}
