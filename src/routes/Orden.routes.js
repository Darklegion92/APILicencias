const {Router} = require('express')
const OrdenCtrl = require('../controllers/Orden.controller')
const middlewares = require('../middlewares/validaciones')

router = Router();
router
    .post('/',middlewares.validarCarrito,OrdenCtrl.agregarArticulo)
    .get('/*',OrdenCtrl.error)
module.exports = router;