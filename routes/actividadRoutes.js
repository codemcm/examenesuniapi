var express = require ('express');
var ActividadController = require('../controllers/ActividadController');
var router = express.Router();

router.get('/',ActividadController.listarTodasDummy);
module.exports = router;
