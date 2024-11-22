
var express = require('express');
import examenes from './examenes.js';
var router = express.Router();
router.get('/', function(req, res, next) {
    res.send(examenes.getExamenes());
});
module.exports = router;