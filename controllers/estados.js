const {response} = require('express');
const Estado = require('../models/estado');

const estadosGet = (req, res) => {
    res.json({
        mesg: 'estados Get'
    });
};

const estadosPost = async (req, res) => {
    const {
        nombre,
        clave,
        abreviatura,
        pais,
        usuario
    } = req.body; //desestructuro el body con los valores que son obligatorios

    const estado = new Estado({
        nombre,
        clave,
        abreviatura,
        pais,
        usuario
    }); //mando los valores desestructurados al modelo de estado

    //guardar en la base de datos
    await estado.save();

    res.json({
        mesg: 'estados post',
        estado
    });
};

const estadosPut = (req, res = response) => {
    res.json({
        mesg: 'estados put'
    });
};

const estadosPatch = (req, res = response) => {
    res.json({
        mesg: 'estados patch'
    });
};

const estadosDelete = (req, res = response) => {
    res.json({
        mesg: 'estados delete'
    });
};

module.exports = {
    estadosGet,
    estadosPost,
    estadosPut,
    estadosPatch,
    estadosDelete
};