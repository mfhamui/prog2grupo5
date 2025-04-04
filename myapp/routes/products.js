const express = require('express');
const router = express.Router
const productController = require('../controllers/productController');
const loginController = require('../controllers/loginController')
const profileController = require('../controllers/profileController')
const registerController = require('../controllers/registerController')

router.get('/', productController.index)
router.get('/index', productController.index);
router.get('/login', loginController.login);
router.get('/profile', profileController.profile);
router.get('/product-add', productController.product_add );
router.get('/product', productController.product);
router.get('/register', registerController.register);
router.get('/search-result', productController.search_result);

module.exports = router;
