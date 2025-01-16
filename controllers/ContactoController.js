const Contacto = require('../models/contacto.js');

const RespuestaGenerica = require('../models/RespuestaGenerica.js');

exports.listarTodasDummy = function (req, res){

    Contacto.getAllDummy(function(err,contacto){
        if(err){
            var respuestaError = new RespuestaGenerica();
            respuestaError.status = false;
            respuestaError.code = 500;
            respuestaError.message = "Error al obtener contacto";
            respuestaError.data = null;
            res.status(500);
            res.send(respuestaError);
        }else{
            var respuestaGeneric = new RespuestaGenerica();
            respuestaGeneric.status = true;
            respuestaGeneric.code = 200;
            respuestaGeneric.message = "Success";
            respuestaGeneric.data = contacto;
            res.status(200);
            res.send(respuestaGeneric);
        }
    })
}