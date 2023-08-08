    const express = require('express');

    class Server {

        constructor() {

            this.app = express();
            this.port = process.env.PORT;

            // Middlewares
            this.middlewares();

            // Rutas de la aplicacion
            this.routes();

        }

        middlewares() {

            this.app.use(express.static('public'));

        }

        routes(){

            this.app.get('/', (req, res) => {

                res.send('Pagina principal modulada');
        
            });

        }

        listen(){

            this.app.listen( this.port , () => {

                console.log('El server esta corriendo en el puerto, ', this.port);
        
            });

        }


    }

    module.exports = Server;