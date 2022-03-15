const { cargarArchivo, actualizarArchivo } = require('../controllers/uploads');
const {coleccionesPermitidas, Router, check} = require('../helpers');
const {validarCampos} = require('../middlewares');

//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

router.post('/', cargarArchivo);

router.put('/:coleccion/:id', [
    check('id').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(['usuarios','productos'])),
    validarCampos
], actualizarArchivo);

//Se exporta la variable router que es una instancia de Router
module.exports = router;