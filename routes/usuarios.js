const {
    Router
} = require('express'); //se requiere a express, pero se desestructura la función Router
const router = Router(); //se llama la función Router en router, a este se le configuran las rutas

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
} = require('../controllers/usuarios');

/**
 * RUTAS DE USUARIOS
 */
router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:idUsuario', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

//se exporta la variable router
module.exports = router;