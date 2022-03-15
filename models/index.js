const Categoria = require('./catalogos/categoria');
const Colonia = require('./catalogos/colonias');
const Pais = require('./catalogos/pais');
const Persona = require('./procesos/persona');
const Producto = require('./catalogos/producto');
const Role = require('./catalogos/role');
const Server = require('./server/server');
const Usuarios = require('./procesos/usuario');

module.exports = {
    Categoria,
    Colonia,
    Pais,
    Persona,
    Producto,
    Role,
    Server,
    Usuarios
};