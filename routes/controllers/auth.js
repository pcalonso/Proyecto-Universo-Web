
const { response } = require("express");
const Usuario = require("../../models/Usuario");
const bcrypt = require('bcryptjs');
const { db } = require("../../models/Usuario");
const { generarJWT} =require("../../helpers/jwt");

const crearUsuario = async(req, res = response )=>{
    
    // console.log( req.body );Asi es como recogemos los datos como un objeto

    const { email, name, password } = req.body;

    try {
    //Verificar el email
    let usuario = await Usuario.findOne({email});
    
        if ( usuario ){
            return res.status (400).json ({
                ok: false,
                msg: "El usuario ya existe con ese email"
            });
        }
    //Crear usuario con el modelo
    const dbUser = new Usuario(req.body);    
    //Hashear la contraseña
    const salt = bcrypt.genSaltSync(10);
        //generamos una vuelta de 10 para generar la contraseña
    dbUser.password = bcrypt.hashSync ( password, salt);
    //Generar el JWT  que mandamos a Angular para que lo use como autenticación pasiva
    const token = await generarJWT(dbUser.id, name);
    //Crear usuario de DB
     await dbUser.save();
    //Generar respuesta ok
    return res.status(201).json({
        ok:true,
        uid: dbUser.id,
        name,
        token 
    });

    } catch (error) {

        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Algo salió mal, por favor hable con el administrador"
        });
    }
    
   
    
    
}

const loginUsuario = (req, res = response )=>{

    const { email, password } = req.body;
      
    
    return res.json({
        ok: true,
        msg: "Login de Usuario/"
    });
}

const revalidarToken = (req, res )=>{
    
    return res.json({
        ok: true,
        msg: "Renew"
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};
