//se requiere a express, pero se desestructura la función Router
const {
    response,//sirve para traer de forma desestructurada la función response que se usa para las peticiones
    request,
    Router
} = require('express');

//se llama la función Router en router, a este se le configuran las rutas
const router = Router();

//librería que sireve para poder validar campos de diferentes tipos como correos, tamaño, customs, etc
const {
    check
} = require('express-validator');

const bcryptjs = require('bcryptjs'); //requiere la librería bcryptjs, que sirve para encriptar

//middleware que sirve para validar los campos
const {
    validarCampos
} = require('../middlewares/validarCampos');

module.exports = {
    response,
    request,
    router,
    check,
    bcryptjs,
    validarCampos
}