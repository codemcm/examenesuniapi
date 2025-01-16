var express = require ('express');
var UsuarioController = require('../controllers/UsuarioController');
var router = express.Router();

router.get ('/',UsuarioController.listarTodasDummy);
module.exports = router;