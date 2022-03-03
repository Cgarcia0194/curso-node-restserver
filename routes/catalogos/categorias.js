const {
    Router,
    check
} = require('../../helpers/requires');
const {
    validarCampos,
    validarJWT,
    esAdminRol
} = require('../../middlewares');

const {
    existeCategoria,
    existeCategoriaPorId
} = require('../../helpers/db-validators');

const {
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
    consultarCategoriasActivas,
    consultarCategoria
} = require('../../controllers/catalogos/categorias');

/**
 * para las peticiones que reciben id crear un middleware que sirve para validar que existe el id que se manda
 */

//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

router.put('/:idCategoria', [
    validarJWT,
    check('idCategoria', 'No es un id válido').isMongoId(),
    check('idCategoria').custom(existeCategoriaPorId),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoria),
    validarCampos
], actualizarCategoria);

router.delete('/:id', [
    validarJWT,
    esAdminRol,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], eliminarCategoria);

router.get('/', consultarCategoriasActivas);

router.get('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], consultarCategoria);

//Se exporta la variable router que es una instancia de Router
module.exports = router;