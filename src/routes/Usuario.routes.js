const {Router} = require('express')
const UsuarioCtrl = require('../controllers/Usuario.controller')

router = Router();
router
    .get('/login/:id',UsuarioCtrl.login)
    .post('/login',UsuarioCtrl.login)
    .post('/singup',UsuarioCtrl.singup)
    .get('/*',UsuarioCtrl.error)
    
module.exports = router;