const Examenes = require('../models/Examenes.js');
const RespuestaGenerica = require('../models/RespuestaGenerica.js');

exports.findAll = function (req, res) {
    
    Examenes.getAll(function (err, exam) {
    if (err) {
        var respuestaError = new RespuestaGenerica();
        respuestaError.status = false;
        respuestaError.code = 500;
        respuestaError.message = "Error retrieving exams";
        respuestaError.data = null;
        res.status(500);
        res.send(respuestaError);
    } else {
        var respuestaGeneric = new RespuestaGenerica();
        respuestaGeneric.status = true;
        respuestaGeneric.code = 200;
        respuestaGeneric.message = "Success";
        respuestaGeneric.data = exam;
        res.status(200);
        res.send(respuestaGeneric);
    }
    })
};


