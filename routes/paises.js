const {router} = require('../helpers/requires');

const {
    paisesGet,
    paisesPost,
    paisesPut,
    paisesPatch,
    paisesDelete
} = require('../controllers/paises');


/**
 * RUTAS DE paises
 */

router.get('/', paisesGet);

router.post('/', paisesPost);

router.put('/', paisesPut);

router.patch('/', paisesPatch);

router.delete('/:idPais', paisesDelete);

module.exports = router;