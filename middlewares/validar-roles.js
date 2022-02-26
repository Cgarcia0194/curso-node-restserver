const {errores} = require('../helpers/errores'); //requiere la función de errores para lanzarlo
const {response} = require('../helpers/requires');

/**
 * Función que sirve para validar que e usuario que desea eliminar tiene el rol de administrador
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const esAdminRol = (req, res = response, next) => {
    if(!req.usuario){//quiere decir que si existe el usuario
        return errores(res, 500, 'Se quiere validar el rol sin validar el token primero');
    }

    const {rol, nombre} = req.usuario;

    if(rol !== 'ADMIN_ROLE'){
       return errores(res, 401, `El usuario (${nombre}) tiene un rol ${rol}`);
    }

    next();
};

/**
 * Función que sirve para poder buscar que el rol del usuario concuerde con alguno de los que se pasan en la función
 * @param  {...any} roles 
 * @returns 
 */
const tieneRol = (...roles) => {
    return (req, res = response, next) => {

        if(!req.usuario){//quiere decir que si existe el usuario
            return errores(res, 500, 'Se quiere validar el rol sin validar el token primero');
        }

        if(!roles.includes(req.usuario.rol)) {
            return errores(res, 401, `El servicio requiere uno de estos roles ${roles}`);
        }
        
        next();
    };

};

module.exports = {
    esAdminRol,
    tieneRol
};