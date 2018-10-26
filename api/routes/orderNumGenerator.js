var express= require('express');
var router= express.Router();

var orderNumGeneratorController= require('../controllers/orderNumGeneratorController');

router.get('/', orderNumGeneratorController.generateOrderNum);

router.get('/:market/:brand', orderNumGeneratorController.generateOrderNum);

router.post('/', orderNumGeneratorController.generateOrderNum);

module.exports= router;