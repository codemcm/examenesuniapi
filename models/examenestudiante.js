"use strict";
var dbMysql = require("./dbMysql");

const examenestudiante = function(examenestudiante){
    this.ExamenEstudianteId = examenestudiante.ExamenEstudianteId;
    this.ExamenId = examenestudiante.ExamenId;
    this.EstudianteId = examenestudiante.EstudianteId;
    this.Calificacion = examenestudiante.Calificacion;
    this.FechaRegistro = examenestudiante.FechaRegistro;
    this.Observaciones = examenestudiante.Observaciones;
}
examenestudiante.getAllDummy = function (response){
    const examenestudiante = [{
        ExamenEstudianteId: 1,
        ExamenId: 1,
        EstudianteId: 1,
        Calificacion: 80,
        FechaRegistro: "08/07/2009",
        Observaciones: "Observaciones"
        }
    ];
    response(null, examenestudiante);
}
module.exports = examenestudiante;