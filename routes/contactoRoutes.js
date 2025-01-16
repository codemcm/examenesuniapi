var express = require ('express');
var contactoController = require('../controllers/ContactoController');
var router = express.Router();

router.get ('/', contactoController.listarTodasDummy);
module.exports = router;