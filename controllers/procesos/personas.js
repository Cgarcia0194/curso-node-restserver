const {mensaje, bcryptjs, response} = require('../../helpers');
const {Persona, Usuario} = require('../../models');

//Función que inserta el persona
const personasPost = async (req, res = response) => {

    const info = req.body; //desestructuro el body con los valores que son obligatorios

    const persona = new Persona({
        nombre: info.txtNombre,
        apellido_paterno: info.txApellidoPaterno,
        apellido_materno: info.txApellidoMaterno,
        rfc: info.txtRfc,
        curp: info.txtCurp,
        genero: info.txtGenero,
        telefono: info.txtTelefono,
        telefono_opcional: info.txtTelefonoOp,
        fecha_nacimiento: info.txtFechaNac,
        edad: info.txtEdad,
        correo: info.txtCorreo,
        estado_civil: info.txtEstadocivil,
        nacionalidad: info.txtNacionalidad,
        img: info.txtImg
    }); //mando los valores desestructurados al modelo de persona

    const usuario = new Usuario({
        nombre: info.txtNombre,
        correo: info.txtCorreo,
        contrasenia: info.txtContrasenia,
        rol: 'USER_ADMIN',
        persona: persona._id
    }); //mando los valores desestructurados al modelo de usuario

    //encriptar la contraseña
    //bcryptjs sirve para encriptar y según el número es la cantidad de vueltas que hace para encriptar
    //entre mayor el numero mas seguro es, pero tarda más en procesar
    const salt = bcryptjs.genSaltSync(10);

    //mando al modelo de usuario.contrasenia la clave encriptada
    usuario.contrasenia = bcryptjs.hashSync(info.txtContrasenia, salt);

    //guardar en la base de datos
    await persona.save();

    //guardar en la base de datos
    await usuario.save();

    return mensaje(res, 200, {msg: 'Post API - controlador', persona});
};


//se exportan las variables de cada ruta
module.exports = {
    personasPost
};