const {
    estadosGet,
    estadosPost,
    estadosPut,
    estadosPatch,
    estadosDelete
} = require('../controllers/estados');

const {Router} = require('../helpers/requires');
//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

/**
 * RUTAS DE ESTADOS
 */

router.get('/', estadosGet);

router.post('/', estadosPost);

router.put('/', estadosPut);

router.patch('/', estadosPatch);

router.delete('/', estadosDelete);

module.exports = router;