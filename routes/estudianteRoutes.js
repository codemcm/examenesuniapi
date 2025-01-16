var express = require ('express');
var estudianteController = require('../controllers/EstudianteController');
var router = express.Router();

router.get('/',estudianteController.listarTodasDummy);
module.exports = router;