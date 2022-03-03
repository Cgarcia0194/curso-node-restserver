const errores = (res, numError = 400, texto = '') => res.status(numError).json({msg: texto});

const respuesta = (res, numMensaje = 200, data) => res.status(numMensaje).json(data);

module.exports = {errores, respuesta};