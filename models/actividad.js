"use strict";
var dbMysql = require ("./dbMysql");

const Actividad = function(actividad){
    this.ActividadId = actividad.ActividadId;
    this.MateriaId = actividad.MateriaId;
    this.TipoActividadId = actividad.TipoActividadId;
    this.Nombre = actividad.Nombre;
    this.Descripcion = actividad.Descripcion;
    this.FechaEntrega = actividad.FechaEntrega;
}
Actividad.getAllDummy = function (response){
    const actividad = [{
        ActividadId: 1,
        MateriaId: 1,
        TipoActividadId: 1,
        Nombre: "Algebra",
        Descripcion: "Algebra Básica",
        FechaEntrega: "08/10/2025"
        }
    ];
    response(null, actividad);
};
module.exports = Actividad;
