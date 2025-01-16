const Categoria = require('../models/categoria.js');

const RespuestaGenerica = require('../models/RespuestaGenerica.js');

exports.listarTodasDummy = function (req, res){

    Categoria.getAllDummy(function(err,categoria){
        if(err){
            var respuestaError = new RespuestaGenerica();
            respuestaError.status = false;
            respuestaError.code = 500;
            respuestaError.message = "Error al obtener categorias";
            respuestaError.data = null;
            res.status(500);
            res.send(respuestaError);
        }else{
            var respuestaGeneric = new RespuestaGenerica();
            respuestaGeneric.status = true;
            respuestaGeneric.code = 200;
            respuestaGeneric.message = "Success";
            respuestaGeneric.data = categoria;
            res.status(200);
            res.send(respuestaGeneric);
        }
    })
}