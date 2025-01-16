var express = require ('express');
var CategoriaController = require('../controllers/CategoriaController');
var router = express.Router();

router.get ('/', CategoriaController.listarTodasDummy);
module.exports = router;