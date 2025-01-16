"use strict";

var dbMysql = require ("./dbMysql");

const estudiante = function(estudiante){
    this.EstudianteId = estudiante.EstudianteId;
    this.Nombre = estudiante.Nombre;
    this.Apellidos = estudiante.Apellidos;
    this.FechaRegistro = estudiante.FechaRegistro;
    this.UsuarioId = estudiante.UsuarioId;
    this.Celular = estudiante.Celular;
}

estudiante.getAllDummy = function (response){
    const estudiante = [{
        EstudianteId: 1,
        Nombre: "daniel",
        Apellidos: "perez",
        FechaRegistro: "40/08/2005",
        UsuarioId: 1,
        Celular: "46516268",
        }
    ];
    response(null,estudiante);
}
module.exports = estudiante;