const Role = require('../models/role'); // se requiere el modelo de rol
const Usuario = require('../models/usuario'); //requiere el modelo de Usuario

/**
 * Función que sirve para poder validar el nombre del rol que ya está registrado en la BD de la tabla roles
 * @param {*} nombre 
 */
const esRolValido = async (nombre = '') => {
    const existeRol = await Role.findOne({
        nombre
    });

    if (!existeRol) {
        throw new Error(`El rol '${nombre}' no está registrado en la base de datos`);
    }
};

/**
 * Función que sirve para poder buscar el correo en los usuarios ya registrados y que no se repita
 * @param {*} correo 
 */
const emailExiste = async (correo = '') => {
    //verificar el correo
    const existeCorreo = await Usuario.findOne({
        correo
    });

    if (existeCorreo) {
        throw new Error(`El correo ${correo} ya está registrado`);
    }
};

/**
 * Función que sirve para poder validar el id del usuario
 * @param {*} idUsuario : es el id del usuario que se desea modificar
 */
const existeUsuarioPorId = async idUsuario => {
    //verificar el id del usuario
    const existeUsuario = await Usuario.findById({
        _id: idUsuario
    });

    if (!existeUsuario) {
        throw new Error(`El id ${idUsuario} no existe`);
    }
};

//se exportan las funciones para que sean usadas en otros archivos JS
module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
};