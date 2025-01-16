var express = require ('express');
var EstudianteActividadController = require('../controllers/EstudianteActividadController');
var router = express.Router();

router.get ('/',EstudianteActividadController.listarTodasDummy);
module.exports = router;