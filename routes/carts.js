const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/CartController')

router.post('/', cartsController.creteCart)
router.post('/add-product', cartsController.addProduct)
router.get('/', cartsController.all)
module.exports = router;
