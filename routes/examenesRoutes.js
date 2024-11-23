
var express = require('express');
var ExamenController = require('../controllers/ExamenController');
var router = express.Router();
router.get('/', ExamenController.findAll);
router.get('/listaTodos', ExamenController.listaTodos);
router.post('/registra', ExamenController.registra);
router.get('/:examenId', ExamenController.findOne);
router.put('/:examenId', ExamenController.update);
router.delete('/:examenId', ExamenController.delete);

module.exports = router;