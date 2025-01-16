var express = require ('express');
var TipoActividadController = require('../controllers/TipoActividadController');
var router = express.Router();

router.get ('/',TipoActividadController.listarTodasDummy);
module.exports = router;