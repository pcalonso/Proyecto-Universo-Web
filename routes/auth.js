const { Router} = require("express");
const { crearUsuario, loginUsuario, revalidarToken } = require("./controllers/auth");

const router = Router();
//CRUD


//Creamos un nuevo usuario
router.post ( "/new", crearUsuario); 

//Login de usuario
router.post ( "/", loginUsuario);

//Validar y revalidar token
router.get ( "/renew", revalidarToken);  
    

module.exports = router;
//Para poder exportar en Node, necesitamos usar este module.exports, si usaramos
//exports no funcionaria