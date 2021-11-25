const { Router} = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, revalidarToken } = require("./controllers/auth");
const { validarCampos } = require("./middlewares/validar-campos");

const router = Router();
//CRUD


//Creamos un nuevo usuario
router.post ( "/new",[
    //Todos los middelware se van a ejecutar consecutivamente
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe tener un mínimo de 6 caracteres").isLength({min: 6}),
    validarCampos
], crearUsuario); 


//Login de usuario
router.post ( "/",[
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe tener un mínimo de 6 caracteres").isLength({min: 6}),
    validarCampos
], loginUsuario);
//vamos a colocar el path, los middelware y el controlador de esta ruta

//Validar y revalidar token
router.get ( "/renew", revalidarToken);  
    

module.exports = router;
//Para poder exportar en Node, necesitamos usar este module.exports, si usaramos
//exports no funcionaria