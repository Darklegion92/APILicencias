const {Router} = require('express')
const AgrupacionCtrl = require('../controllers/Agrupacion.controller')
const Acceso = require('../middlewares/acceso')

router = Router();
router
    .get('/',AgrupacionCtrl.consultar)
    .get('/:agrupacion/:genero',AgrupacionCtrl.filtro)
    .get('/*',AgrupacionCtrl.error)

    .post('/',AgrupacionCtrl.crear)

    .put('/:id',AgrupacionCtrl.editar)

    .delete('/:id',AgrupacionCtrl.eliminar)
    
module.exports = router;