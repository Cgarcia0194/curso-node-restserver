const {
    Schema,
    model
} = require('mongoose');

const estadoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    clave: {
        type: Number,
        required: [true, 'La clave es obligatoria']
    },
    abreviatura: {
        type: String,
        required: [true, 'La abreviatura es obligatoria']
    },
    pais: {
        type: Number,
        required: [true, 'El pais es obligatorio']
    },
    estatus: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    usuario: {
        type: Number,
        required: [true]
    },
    fecha_registro: {
        type: Date,
        default: Date.now
    },
});

//se exporta con la función de model, lo que ayuda a ponerlo en una colección y el nombre
//Estados = es el nombre que tendrá la tabla a donde se guardará, si no está creada lo crea con el nombre
//usuarioSchema = es el esquema/modelo que se mandará
module.exports = model('Estados', estadoSchema);