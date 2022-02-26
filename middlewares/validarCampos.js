/**
 * Middleware que sirve para validar los campos, usa express,validator y la función validationResult 
 * para hacer esta función
 * 
 */
const {validationResult} = require('express-validator');
const {errores} = require('../helpers/errores'); //requiere la función de errores para lanzarlo

/**
 * función que sirve para poder validar los campos
 * @param {*} req : sirve para hacer las peticiones (request)
 * @param {*} res : sirve para traer el resultado (result)
 * @param {*} next : sirve para dar siguiente al otro middleware, si no hay otro middleware, pasa al siguiente argumento
 * @returns 
 */
const validarCampos = (req, res, next) => {
    const error = validationResult(req);

    if(!error.isEmpty()){
        return errores(res, 400, error);
    }

    next();//si no pasa por el if llega aquí y manda al otro argumento de la ruta POST
}

module.exports = {
    validarCampos
}