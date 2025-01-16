"use strict";
var dbMysql = require ("./dbMysql");

const Categoria= function(categoria) {
    this.CategoriaId = categoria.CategoriaId;
    this.NombreCategoria = categoria.NombreCategoria;
    this.Active = categoria.Active;
}
Categoria.getAllDummy = function (response){
    const categoria = [{
        CategoriaId: 1,
        NombreCategoria: "Matemáticas",
        Active: 1
        }
    ];
    response(null, categoria);
};
module.exports = Categoria;