const Categoria = require('./catalogos/categoria');
const Movimiento = require('./gastos/movimiento');
const Persona = require('./procesos/persona');
const Producto = require('./catalogos/producto');
const Role = require('./catalogos/role');
const Server = require('./server/server');
const Usuarios = require('./procesos/usuario');

module.exports = {
    Categoria,
    Movimiento,
    Persona,
    Producto,
    Role,
    Server,
    Usuarios
};