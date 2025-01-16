const EstudianteActividad = require('../models/estudianteactividad.js');

const RespuestaGenerica = require('../models/RespuestaGenerica.js');

exports.listarTodasDummy = function (req, res){

    EstudianteActividad.getAllDummy(function(err,estudianteactividad){
        if(err){
            var respuestaError = new RespuestaGenerica();
            respuestaError.status = false;
            respuestaError.code = 500;
            respuestaError.message = "Error al obtener Estudiante Actividad";
            respuestaError.data = null;
            res.status(500);
            res.send(respuestaError);
        }else{
            var respuestaGeneric = new RespuestaGenerica();
            respuestaGeneric.status = true;
            respuestaGeneric.code = 200;
            respuestaGeneric.message = "Success";
            respuestaGeneric.data = estudianteactividad;
            res.status(200);
            res.send(respuestaGeneric);
        }
    })
}