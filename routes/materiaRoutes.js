var express = require ('express');
var MateriaController = require('../controllers/MateriaController');
var router = express.Router();

router.get('/',MateriaController.listarTodasDummy);
module.exports = router;