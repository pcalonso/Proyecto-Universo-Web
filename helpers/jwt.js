const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name) => {
    //Que quiero recibir
    const payLoad = { uid, name};
 
    return new Promise ( ( resolve, reject) => {
        jwt.sign(payLoad, process.env.SECRET_JWT_SEED,{
            //Esto es lo que voy a firmar por lo que mando aqui el payLoad
            expiresIn: '24h'
            //Duración del JWT
        },(err, token) => {
    
            if ( err ){
                //MAL
                console.log(err);
                reject( err );
            }else {
                resolve( token )
            }
        })
    });

    
 
}

module.exports = {
    generarJWT
}