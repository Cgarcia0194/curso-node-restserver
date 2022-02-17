const {
    response
} = require('express');

const estadosGet = (req, res) => {
    res.json({
        mesg: 'estados Get'
    });
};

const estadosPost = (req, res) => {
    res.json({
        mesg: 'estados post'
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