"use strict";
var dbMysql = require ("./dbMysql");

const Pregunta = function(pregunta){
    this.PreguntaId = pregunta.PreguntaId;
    this.ExamenId = pregunta.ExamenId;
    this.TextoPregunta = pregunta.TextoPregunta;
    this.R1 = pregunta.R1;
    this.R2 = pregunta.R2;
    this.R3 = pregunta.R3;
    this.RespuestaCorrecta = pregunta.RespuestaCorrecta;
}
Pregunta.getAllDummy = function (response){
    const pregunta = [{
        PreguntaId: 1,
        ExamenId: 1,
        TextoPregunta: "cuanto es 2+2",
        R1: "4",
        R2: "8",
        R3: "3",
        RespuestaCorrecta: "4"
        }
    ];
    response(null, pregunta);
}
module.exports = Pregunta;