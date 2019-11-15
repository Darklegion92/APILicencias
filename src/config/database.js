const mongoose = require('mongoose')
const CONFIG = require('./config')

module.exports = {
    con: null,
    connect: ()=>{
        if(this.con) return this.con;
        return mongoose.connect(CONFIG.DB,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true
        }).then(con => {
            this.con = con;
            console.log('Conexión DB Correcta');
            
        }).catch(error=>console.log(error))
    }
}
