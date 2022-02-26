const jwt = require('jsonwebtoken'); //se importa la librería jsonwebtoken que sirve para generar los json web tokens

const {errores} = require('../helpers/errores'); //requiere la función de errores para lanzarlo
const {request,response} = require('../helpers/requires');
const Usuario = require('../models/usuario'); //requiere el modelo de Usuario

const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return errores(res, 401, 'No hay un token en la petición solicitada');
    }

    try {
        //token: el que manda el usuario front end
        //process.env.SECRETORPRIVATEKEY: es el que está en el backend en el archivo .env
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY); //sirve para verificar el json web token

        //traigo la información del usuario que está logueado en el sistema y quiere eliminar a otro usuario
        const usuario = await Usuario.findById({_id: uid});

        if (usuario) { //verifica que exista información del usuario que está logueado en el sistema
            if (usuario.estado === false) { //si existe, pero está en false es como si estuviera eliminado
                return errores(res, 401, 'El usuario que está en el sistema está eliminado');
            }
        } else { //si no existe totalmente en la base de datos
            return errores(res, 401, 'El usuario no existe');
        }

        //asigno el _id por uid para poder trabajar los tokens
        req.usuario = usuario;
        next(); //debe aplicarse este next para que conitnúe a evaluar e siguiente middleware

    } catch (error) {
        console.log('Mirar el error',error);
        return errores(res, 401, 'Token no válido');
    }
};

module.exports = {
    validarJWT
}