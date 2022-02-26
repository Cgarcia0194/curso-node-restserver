const errores = (res, numError = 400, texto = '') => res.status(numError).json({msg: texto});

module.exports = {errores};