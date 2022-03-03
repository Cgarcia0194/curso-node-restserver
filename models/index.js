const Categoria = require('./catalogos/categoria');
const Paises = require('./catalogos/pais');
const Producto = require('./catalogos/producto');
const Role = require('./catalogos/role');
const Server = require('./server/server');
const Usuarios = require('./procesos/usuario');

module.exports = {
    Categoria,
    Paises,
    Producto,
    Role,
    Server,
    Usuarios
};