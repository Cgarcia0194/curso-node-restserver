const mongoose = require('mongoose');

//función que sirve para crear la conexión con mongoDB
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CON, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
            //estos dos ultimos están en desuso
        });

        console.log('base de datos online');
    } catch (error) {
        console.log(error);
        throw new error('Error en la conexión');
    }
}

//exporto la función dbConnection
module.exports = {
    dbConnection
};