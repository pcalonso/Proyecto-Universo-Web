const { response } = require("express");
const { validationResult} = require("express-validator");
//Como queremos que nuestro codigo en el auth.js/controller quede lo mas limpio posible
//creamos un nuevo archivo con las validaciones que necesitamos.
//Es aquí donde pasamos el codigo y limpiamos el controlador.

const validarCampos = (req, res= response, next )=> {
    const errors = validationResult ( req );
    if ( !errors.isEmpty()){
        return res.status (400).json ({
            ok: false,
            errors: errors.mapped()
        });
    }
    next();
}

module.exports = {
    validarCampos
};

