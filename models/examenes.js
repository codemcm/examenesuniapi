const express = require("express");
const app = express();
const getExamenes = (request, response) => {
    const examen = {
        id: 1,
        nombreexamen: "Matemáticas"
    };
    response.json(examen);
};

const getExamen = (request, response) => {
    const examen = {
        id: 1,
        nombreexamen: "Matemáticas"
    };
    response.json(examen);
};
app.route("/examenes").get(getExamenes);

module.exports = app;