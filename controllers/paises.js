const {
    response
} = require('express');

const Pais = require('../models/paises');

const paisesGet = (req, res) => {
    res.json({
        mesg: 'paises Get'
    });
};

const paisesPost = async (req, res) => {
    const {
        nombre,
        abreviatura
    } = req.body; //desestructuro el body con los valores que son obligatorios

    const pais = new Pais({
        nombre,
        abreviatura
    }); //mando los valores desestructurados al modelo de estado

    //guardar en la base de datos
    await pais.save();

    res.json({
        mesg: 'paises post',
        pais
    });
};

const paisesPut = (req, res = response) => {
    res.json({
        mesg: 'paises put'
    });
};

const paisesPatch = (req, res = response) => {
    res.json({
        mesg: 'paises patch'
    });
};

const paisesDelete = (req, res = response) => {
    res.json({
        mesg: 'paises delete'
    });
};

module.exports = {
    paisesGet,
    paisesPost,
    paisesPut,
    paisesPatch,
    paisesDelete
};