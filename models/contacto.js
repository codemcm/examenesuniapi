"use strict";
var dbMysql = require("./dbMysql");

const Contacto = function(contacto){
    this.ContactoId = contacto.ContactoId;
    this.Celular = contacto.Celular;
    this.NombreCompleto = contacto.NombreCompleto;
    this.Mensaje = contacto.Mensaje;
    this.Email = contacto.Email;
    this.Escuela = contacto.Escuela;
    this.FechaRegistro = contacto.FechaRegistro;
}
Contacto.getAllDummy = function (response){
    const contacto = [{
            ContactoId: 1,
            Celular: "2371646655",
            NombreCompleto: "Luis Yahir",
            Mensaje: "Hola",
            Email: "yahir@gmail.com",
            Escuela: "Lic.Jesus Reyes Heroles",
            FechaRegistro: "07/09/2006"
        }
    ];
    response(null,contacto);
}
module.exports = Contacto;
