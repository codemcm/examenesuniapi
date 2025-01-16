"use strict";
var dbMysql = require ("./dbMysql");

const Materia = function(materia){
    this.MateriaId = materia.MateriaId;
    this.Nombre = materia.Nombre;
    this.Descripcion = materia.Descripcion;
}
Materia.getAllDummy = function (response){
    const materia = [{
        MateriaId: 1,
        Nombre: "Matemáticas",
        Descripcion: "Algebra"
        }
    ];
    response(null,materia);
}
module.exports = Materia;