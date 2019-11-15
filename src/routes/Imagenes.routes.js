const {Router} = require('express')
const ImagenCtrl = require('../controllers/Imagen.controller')

router = Router();
router
    .get('/:dato',ImagenCtrl.consultar)
    .get('/*',ImagenCtrl.error)

    .post('/:tipo', ImagenCtrl.cargarImagen)

    .put('/:id',ImagenCtrl.editar)

    .delete('/:id',ImagenCtrl.eliminar)
    
    
    
module.exports = router;