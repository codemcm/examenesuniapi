var express = require ('express');
var preguntaController = require('../controllers/preguntaController');
var router = express.Router();

router.get ('/',preguntaController.listarTodasDummy);
module.exports = router;