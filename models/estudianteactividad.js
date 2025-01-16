"use strict";

var dbMysql = require ("./dbMysql");

const estudianteactividad = function(estudianteactividad){
    this.EstudianteActividadId = estudianteactividad.EstudianteActividadId;
    this.EstudianteId = estudianteactividad.EstudianteId;
    this.ActividadId = estudianteactividad.ActividadId;
    this.Calificacion = estudianteactividad.Calificacion;
    this.MateriaId = estudianteactividad.MateriaId;
}

estudianteactividad.getAllDummy = function (response){
    const estudianteactividad =[{
        EstudianteActividadId: 1,
        EstudianteId: 1,
        ActividadId: 1,
        Calificacion1: "85",
        MateriaId: 1
        }
    ];
    response(null,estudianteactividad);
}
module.exports = estudianteactividad;