const express = require( "express");
const cors = require( "cors");
const { dbConnection } = require("./db/config");

require("dotenv").config();
//Cuando la aplicación cargue, leeme este archivo de variables que es .env

//Crear el servidor / aplicación de express
const app = express();


//Base de datos
dbConnection();

//Para que accedan desde el url
app.use(express.static("public"));
//Cuando alguien busque mi puerto en la url, dirigele al directorio public que dentro
//contiene el index.HTML 

//CORS
app.use( cors());

//Lectura y parseo del body
app.use( express.json() );

//Configuramos Rutas
app.use( "/api/auth", require ("./routes/auth") );
//cuando alguien haga esta petición, redirijete a este archivo que es donde tengo yo las rutas

app.listen( process.env.PORT, () => {
    console.log( `Servidor de Universo Web escuchando por el puerto ${ process.env.PORT }`)
} )
//vamos a levantar escuchando con el puerto 4000