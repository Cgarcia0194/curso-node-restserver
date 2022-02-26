const {errores} = require('../helpers/errores'); //requiere la función de errores para lanzarlo
const {generarJWT} = require('../helpers/generar-jwt');
const {response, request, bcryptjs} = require('../helpers/requires');
const Usuario = require('../models/usuario'); //requiere el modelo de Usuario

const login = async (req, res = response) => {

    const {correo, contrasenia} = req.body;

    try {
        //verificar xi el correo existe
        const usuario = await Usuario.findOne({correo});//busca el usuario mediante su modelo buscandolo por el correo que se ingresa

        if(!usuario){//si no hay valores en la variable es porque no coincide el correo
            return errores(res, 400, 'Usuario / contraseña no son correctos');
        }

        //verificar activo del usuario
        if(usuario.estado === false){//si el estado es false el usuario está inactivo
            return errores(res, 400, 'el usuario no está activo');
        }

        //verificar la contraseña
        //se busca la contraseña comparando por el bcruptjs (contraseña que mete el usuario, contraseña del correo con el que coincidió)
        const contraseniaValida = bcryptjs.compareSync(contrasenia, usuario.contrasenia);
        
        if(contraseniaValida === false){//si la contraseña es false no es correcta
            return errores(res, 400, 'la contraseña no es correcta');
        }

        //generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        return errores(res, 400, 'Hable con el administrador');
    }
};

module.exports = {
    login
};