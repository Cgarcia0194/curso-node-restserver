const {
  mensaje,
  response
} = require("../../helpers");

const {
  Pais
} = require("../../models");

const crearPais = async (req, res = response) => {
  const {
    nombre,
    abreviatura
  } = req.body;

  const paisDB = await Pais.findOne({
    nombre,
    abreviatura
  });

  if (paisDB) {
    return mensaje(res, 400, `El nombre del pais '${nombre}' ya está registrado`);
  }

  const data = {
    nombre,
    abreviatura,
    usuario: req.usuario._id
  };

  const pais = new Pais(data);

  await pais.save();

  return mensaje(res, 200, pais);
};

//actualizar pais
const actualizarPais = async (req, res = response) => {
  const {
    idPais
  } = req.params;

  const {
    nombre,
    abreviatura
  } = req.body;

  const data = {
    idPais,
    nombre,
    abreviatura,
  };

  const pais = await Pais.findByIdAndUpdate(idPais, data, {
    new: true,
  });

  return mensaje(res, 200, pais);
};

module.exports = {
  crearPais,
  actualizarPais
};