const Usuario = require('../models/usuario.js');

const RespuestaGenerica = require('../models/RespuestaGenerica.js');

exports.listarTodasDummy = function (req, res){

    Usuario.getAllDummy(function(err,usuario){
        if(err){
            var respuestaError = new RespuestaGenerica();
            respuestaError.status = false;
            respuestaError.code = 500;
            respuestaError.message = "Error al obtener el usuario";
            respuestaError.data = null;
            res.status(500);
            res.send(respuestaError);
        }else{
            var respuestaGeneric = new RespuestaGenerica();
            respuestaGeneric.status = true;
            respuestaGeneric.code = 200;
            respuestaGeneric.message = "Success";
            respuestaGeneric.data = usuario;
            res.status(200);
            res.send(respuestaGeneric);
        }
    })
}