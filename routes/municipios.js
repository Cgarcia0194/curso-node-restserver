const {
    municipiosGet,
    municipiosPost,
    municipiosPut,
    municipiosPatch,
    municipiosDelete
} = require('../controllers/municipios');

const {Router} = require('../helpers/requires');
//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

/**
 * RUTAS DE MUNICIPIOS
 */

router.get('/', municipiosGet);

router.post('/', municipiosPost);

router.put('/', municipiosPut);

router.patch('/', municipiosPatch);

router.delete('/', municipiosDelete);

module.exports = router;