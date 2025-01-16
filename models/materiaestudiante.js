"use strict";
var dbMysql = require ("./dbMysql");

const MateriaEstudiante = function(materiaestudiante){
    this.MateriaEstudianteId  = materiaestudiante.MateriaEstudianteId;
    this.MateriaId = materiaestudiante.MateriaId;
    this.EstudianteId = materiaestudiante.EstudianteId;
    this.Calificacion = materiaestudiante.Calificacion;
}
MateriaEstudiante.getAllDummy = function (response){
    const materiaestudiante = [{
        MateriaEstudianteId: 1,
        MateriaId: 1,
        EstudianteId: 1,
        Calificacion: "80"
        }
    ];
    response(null,materiaestudiante);
}
module.exports = MateriaEstudiante;