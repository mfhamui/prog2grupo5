const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/', productController.index);
router.get('/login', productController.login);
router.get('/profile', productController.profile);
router.get('/product-add', productController.product_add );
router.get('/product', productController.product);
router.get('/register', productController.register);
router.get('/search-results/:search?', productController.search_result);

module.exports = router;
