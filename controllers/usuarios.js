const {
    response
} = require('express'); //sirve para traer de forma desestructurada la función response que se usa para las peticiones

//trae info del servidor
const usuariosGet = (req, res = response) => {
    const {q, nombre = 'Sin nombre', apikey} = req.query;

    res.json({
        msg: 'Get API - controlador',
        q,
        nombre,
        apikey
    });
};

//manda información al servidor
const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'Post API - controlador',
        nombre,
        edad
    });
};

//actualiza información en el servidor
const usuariosPut = (req, res = response) => {
    const {idUsuario} = req.params;

    res.json({
        msg: 'Put API - controlador',
        idUsuario
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
};

//elimina información del servidor
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
};

//se exportan las variables de cada ruta
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
};