const {
    paisesGet,
    paisesPost,
    paisesPut,
    paisesPatch,
    paisesDelete
} = require('../controllers/paises');

const {Router} = require('../helpers/requires');
//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

/**
 * RUTAS DE paises
 */

router.get('/', paisesGet);

router.post('/', paisesPost);

router.put('/', paisesPut);

router.patch('/', paisesPatch);

router.delete('/:idPais', paisesDelete);

module.exports = router;