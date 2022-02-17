const {
    Router
} = require('express');
const {
    estadosGet,
    estadosPost,
    estadosPut,
    estadosPatch,
    estadosDelete
} = require('../controllers/estados');
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