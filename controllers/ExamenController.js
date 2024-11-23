const Examenes = require('../models/Examenes.js');

const RespuestaGenerica = require('../models/RespuestaGenerica.js');

exports.findAll = function (req, res) {
    
    Examenes.getAllDummy(function (err, exam) {
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

exports.listaTodos = function (req, res) {
    Examenes.listaTodos(function (err, exam) {
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
}

exports.registra = function (req, res) {
    const examen = new Examenes({
        ExamenId: req.body.ExamenId,
        Nombre: req.body.Nombre,
        Notas: req.body.Notas,
        CategoriaId: req.body.CategoriaId
    });

    Examenes.Registrar(examen, function (err, exam) {
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
    }
    )
}

