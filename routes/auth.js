const {login} = require('../controllers/auth');
const {Router,check} = require('../helpers/requires');
const {validarCampos} = require('../middlewares');

//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

/**
 * RUTAS DE AUTH
 */
router.post('/login', [
    check('correo', 'el correo es obligatorio').isEmail(),
    check('contrasenia', 'la contraseña es obligatorio').not().isEmpty(),
    validarCampos
], login);

//Se exporta la variable router que es una instancia de Router
module.exports = router;