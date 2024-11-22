
var express = require('express');
var ExamenController = require('../controllers/ExamenController');
var router = express.Router();
router.get('/', ExamenController.findAll);

module.exports = router;