var express = require ('express');
var ExamenEstudianteController = require('../controllers/ExamenEstudianteController');
var router = express.Router();

router.get('/',ExamenEstudianteController.listarTodasDummy);
module.exports = router;