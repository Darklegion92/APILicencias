const {Router} = require('express')
const InicioCtrl = require('../controllers/Inicio.controller')

router = Router();
router
    .get('/',InicioCtrl.index)
    .get('/',InicioCtrl.imagenes)
    //.get('/*',InicioCtrl.error)
module.exports = router;