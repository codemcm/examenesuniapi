"use strict";
var dbMysql = require("./dbMysql");

const TipoActividad = function(tipoactividad){
    this.TipoActividadId = tipoactividad.TipoActividadId;
    this.NombreTipo = tipoactividad.NombreTipo;
}
TipoActividad.getAllDummy = function (response){
    const tipoactividad = [{
        TipoActividadId: 1,
        NombreTipo: ""
        }
    ];
    response(null,tipoactividad);
}
module.exports = TipoActividad;