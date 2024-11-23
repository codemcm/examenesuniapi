
"use strict";
var dbMysql = require("./dbMysql");

const Examenes = function(examen) {
    this.ExamenId = examen.ExamenId;
    this.Nombre = examen.Nombre;
    this.Notas = examen.Notas;
    this.CategoriaId = examen.CategoriaId;
}

Examenes.getAllDummy = function (response) {
    const examen = [{
        id: 1,
        nombreexamen: "Matemáticas"
        }, {
        id: 2,
        nombreexamen: "Matemáticas"
        }];
        
        //response(new Error("No se encontraron exámenes"), null);
        response(null, examen);
    
    
};
Examenes.listaTodos = function (response) {
    dbMysql.query("SELECT * FROM examen", function (err, res) {
        if (err) {
            console.log("error: ", err);
            response(err, null);
            return;
        }
        console.log("examen: ", res);
        response(null, res);
    });
};


module.exports = Examenes;