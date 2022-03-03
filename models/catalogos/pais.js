const {
    Schema,
    model
} = require('mongoose');

const paisSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    abreviatura: {
        type: String,
        required: [true, 'La abreviatura es obligatoria']
    },
    estatus: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    }
});

//se exporta con la función de model, lo que ayuda a ponerlo en una colección y el nombre
//Paises = es el nombre que tendrá la tabla a donde se guardará, si no está creada lo crea con el nombre
//paisSchema = es el esquema/modelo que se mandará
module.exports = model('Paises', paisSchema);