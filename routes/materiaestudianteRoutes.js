var express = require ('express');
var MateriaEstudianteController = require('../controllers/MateriaEstudianteController');
var router = express.Router();

router.get ('/',MateriaEstudianteController.listarTodasDummy);
module.exports = router;