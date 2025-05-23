const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const profileController = require('../controllers/profileController');


router.get('/', productController.index);
router.get('/login', profileController.login);
router.get('/profile', profileController.profile);
router.get('/product-add', productController.product_add );
router.get('/product', productController.product);
router.get('/register', profileController.register);
router.get('/search-results/:search?', productController.search_result);

module.exports = router;
