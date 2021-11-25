
const mongoose = require("mongoose"); 
//Haremos las interacciones con mongoose

const dbConnection = async() => {
    //Porque vamos a hacer que la api no continue hasta que no este ok la bdd
    try {

      await mongoose.connect(process.env.CONEXION, {
          //Mandamos como argumento esa cadena de conexión
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
          //estos use lo recomiendan en la guia de mongoose
      });
      //Si pasa esta linea
      console.log("DB Online");
      //Sale este mensaje


    }catch (error){
        console.log (error);
        throw new Error("Error a la hora de inicializar DB");
    }
    
}
module.exports={
    dbConnection
}
    
