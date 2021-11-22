const express = require( "express");
const cors = require( "cors");





//Crear el servidor / aplicación de express
const app = express();

//CORS
app.use( cors());

//Lectura y parseo del body
app.use( express.json() );

//Configuramos Rutas
app.use( "/api/auth", require ("./routes/auth") );
//cuando alguien haga esta petición, redirijete a este archivo que es donde tengo yo las rutas

app.listen( 4000, () => {
    console.log( "Servidor de Universo Web escuchando por el puerto ${ 4000 }")
} )
//vamos a levantar escuchando con el puerto 4000