const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = ( req, res = response, next) =>{
    const token = req.header ('x-token');
    //Leo el token
        if (!token){
            return res.status(401).json({
                ok : false,
                msg: 'Error en el Token'
            })
        //Si no hay nada, lo saco fuera    
        }
        try {
         const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );
            req.uid = uid;
            req.name = name;
            //Revalidamos 
        } catch (error) {
            return res.status(401).json({
                ok :false,
                msg: 'Token no válido'
            });
        }
        //Todo Ok
        next ();
}
module.exports = {
    validarJWT
}