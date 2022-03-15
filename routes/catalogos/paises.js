const {
    esAdminRol,
    validarCampos,
    validarJWT
} = require("../../middlewares");

const {
    check,
    existePaisPorId,
    Router,
} = require("../../helpers");

const {
    crearPais, actualizarPais
} = require("../../controllers/catalogos/paises");

//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

//PARA LAS PETICIONES POST SE USAR req.body, ya que los datos no se mandan por URL se mandan por el cuerpo del mensaje
router.post("/", [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("abreviatura", "La abreviatura es obligatoria").not().isEmpty(),
    validarCampos,
], crearPais);

//actualiza la pais
router.put('/:idPais', [
    validarJWT,
    check('idPais', 'No es un id válido').isMongoId(),
    check('idPais').custom(existePaisPorId),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('abreviatura', 'El código postal es obligatorio').not().isEmpty(),
    validarCampos
], actualizarPais);

module.exports = router;