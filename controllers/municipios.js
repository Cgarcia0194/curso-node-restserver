const {response} = require('express');
const Municipio = require('../models/municipio');

const municipiosGet = (req, res) => {
    res.json({
        mesg: 'municipios Get'
    });
};

const municipiosPost = async (req, res) => {
    const {
        nombre,
        clave,
        abreviatura,
        estado,
        usuario
    } = req.body; //desestructuro el body con los valores que son obligatorios

    const municipio = new Municipio({
        nombre,
        clave,
        abreviatura,
        estado,
        usuario
    }); //mando los valores desestructurados al modelo de estado

    //guardar en la base de datos
    await municipio.save();

    res.json({
        msg: 'municipios post',
        municipio
    });
};

const municipiosPut = (req, res = response) => {
    res.json({
        mesg: 'municipios put'
    });
};

const municipiosPatch = (req, res = response) => {
    res.json({
        mesg: 'municipios patch'
    });
};

const municipiosDelete = (req, res = response) => {
    res.json({
        mesg: 'municipios delete'
    });
};

module.exports = {
    municipiosGet,
    municipiosPost,
    municipiosPut,
    municipiosPatch,
    municipiosDelete
};