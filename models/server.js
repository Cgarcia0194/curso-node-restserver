const express = require('express'); //se impporta/requiere express para hacer más fácil la configuración del server
const cors = require('cors'); //se requiere cors para el uso de peticiones fuera del servidor
require('dotenv').config(); //se requiere el dotenv para hacer uso de archivos .env

class Server {
    constructor() {
        this.app = express(); //se guarda el método express de arriba en app
        this.port = process.env.PORT; // se guarda el puerto desde el archivo .env
        this.usuariosPath = '/api/usuarios'; //se establece la ruta donde están las rutas de usuarios y se define api

        this.estadosPath = '/api/estados'; //se establece la ruta donde están las rutas de usuarios y se define api

        //MIDDLEWARES Funciones que añaden funcionalidad al web server
        /**
         * CORS sirve para proteger el servidor como los errores de cross origin access error
         */
        this.middlewares(); //si manda llamar la función middlewares

        //rutas de la aplicación
        this.routes(); // se manda llamar la función routes
    }

    /**
     * 
     */
    middlewares() {
        /**
         * use es la palabra clave use para decir que se usa un middleware
         * los cors son peticiones que se hacen a otro servidor, está prohibio que se hagan a un servidor ajeno
         * al de la aplicació, el CORS es el que regula o hace que esto sea posible y no haya problemas
         */
        this.app.use(cors()); //crea un middleware de la ibrería importada cors

        //middleware que sirve para poder mandar información desde el front al servidor/backend
        //cualquier información la va serializar en formato JSON
        this.app.use(express.json());

        this.app.use(express.static('public')); //directorio público
    }

    /**
     * Esta función sirve para crear un middleware (use) y se manda llamar a la ruta y donde están las rutas '../routes/user'
     */
    routes() {
        /**
         * se aplica un middleware donde se pasa una ruta (this.usuariosPath) donde está ubicadas las rutas 
         * y se manda llamar a require('../routes/user')
         */
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
        this.app.use(this.estadosPath, require('../routes/estados'));
    }

    /**
     * Esta función sirve para hacer escuchar al servidor en el puerto que se estableció en process.env.PORT
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor ejecutandose en puerto: ', this.port);
        });
    }
}

//se exporta la clase completa
module.exports = Server;