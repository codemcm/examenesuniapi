
const Examenes = function(examen) {
    this.nombreexamen = examen.nombreexamen;
    this.id = examen.id;
}

Examenes.getAll = function (response) {
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


module.exports = Examenes;