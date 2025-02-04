
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

Examenes.Registrar = function (examen, response) {
    dbMysql.query("INSERT INTO examen SET ?", examen, function (err, res) {
        if (err) {
            console.log("error: ", err);
            response(err, null);
            return;
        }
        examen.ExamenId = res.insertId;
        //console.log("examen----: ", { id: res.insertId, ...examen });
        response(null, examen);  
    }
    );
}

Examenes.getExamenById = function (examenId, response) {
    let sqlQuery = "SELECT * FROM examen WHERE ExamenId = ?";
    dbMysql.query(sqlQuery, examenId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            response(err, null);
            return;
        }
        if (res.length) {
            console.log("examen encontrado: ", res[0]);
            response(null, res[0]);
            return;
        }
        response({ kind: "not_found" }, null);
    });
};

Examenes.updateById = function (id, examen, result) {
    dbMysql.query(
        "UPDATE examen SET Nombre = ?, Notas = ?, CategoriaId = ? WHERE ExamenId = ?",
        [examen.Nombre, examen.Notas, examen.CategoriaId, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("examen actualizado: ", { id: id, ...examen }); 
            result(null, { id: id, ...examen });
        }   
    );  
}

Examenes.remove = function (id, result) {
    dbMysql.query("DELETE FROM examen WHERE ExamenId = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("examen eliminado con id: ", id);
        result(null, res);
    });
};

module.exports = Examenes;