const {Router} = require('express')
const ArticuloCtrl = require('../controllers/Articulo.controller')

router = Router();
router
    .get('/',ArticuloCtrl.consultar)
    .get('/:valor',ArticuloCtrl.filtro)

    .post('/',ArticuloCtrl.crear)

    .put('/:id',ArticuloCtrl.editar)

    .delete('/:id',ArticuloCtrl.eliminar)
    
module.exports = router;