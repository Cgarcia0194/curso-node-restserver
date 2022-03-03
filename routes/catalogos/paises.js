const {
    paisesGet,
    paisesPost,
    paisesPut,
    paisesPatch,
    paisesDelete
} = require('../../controllers/catalogos/paises');

const {Router} = require('../../helpers/requires');
//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

/**
 * RUTAS DE paises
 */
//PARA LAS PETICIONES GET SE USA req.query, ya que son los datos que se mandan por URL después del ?
//como nombre=carlos&apellidoP=García...
router.get('/', paisesGet);

//PARA LAS PETICIONES POST SE USAR req.body, ya que los datos no se mandan por URL se mandan por el cuerpo del mensaje
router.post('/', paisesPost);

//
router.put('/', paisesPut);

//
router.patch('/', paisesPatch);

//
router.delete('/:idPais', paisesDelete);

module.exports = router;