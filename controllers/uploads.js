const {mensaje, response, subirArchivo} = require('../helpers');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const cargarArchivo = async (req, res = response) => {
    //verifica que en la req venga el files y por tamaño
    if (!req.files || Object.keys(req.files).length === 0) {
        return mensaje(res, 400, {
            msg: 'No se encontraron archivos'
        });
    }

    try {
        const nombreArchivo = await subirArchivo(req.files, undefined);
        mensaje(res, 200, {
            nombreArchivo
        });
    } catch (error) {
        mensaje(res, 400, {
            error
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const actualizarArchivo = async (req, res = response) => {

    const {
        coleccion,
        id
    } = req.params;

    mensaje(res, 200, {coleccion, id});

};

module.exports = {
    cargarArchivo,
    actualizarArchivo
}