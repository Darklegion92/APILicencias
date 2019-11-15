const {Router} = require('express')
const LicenciaCtrl = require('../controllers/Licencia.controller')

router = Router();
router
    .post('/validar',LicenciaCtrl.validar)
    
module.exports = router;