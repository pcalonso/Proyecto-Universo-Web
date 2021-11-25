
const { response } = require("express");
const Usuario = require("../../models/Usuario");


const crearUsuario = async(req, res = response )=>{
    
    // console.log( req.body );Asi es como recogemos los datos como un objeto

    const { email, name, password } = req.body;

    try {
    //Verificar el email
    let usuario = await Usuario.findOne({email});
    //Hashear la contraseña
    //Generar el JWT  que mandamos a Angular para que lo use como autenticación pasiva
    //Generar respuesta ok
        
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
