"use strict";
var dbMysql = require ("./dbMysql");

const Usuario = function (usuario){
    UsuarioId = usuario.UsuarioId;
    NickName = usuario.NickName;
    Password = usuario.Password;
    FechaRegistro = usuario.FechaRegistro;
}
Usuario.getAllDummy = function (response){
    const usuario = [{
        UsuarioId: 1,
        NickName: "user",
        Password: "user",
        FechaRegistro: "01/01/2025"
        }
    ];
    response(null,usuario);
}
module.exports = Usuario;