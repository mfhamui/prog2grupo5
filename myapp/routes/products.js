const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const profileController = require('../controllers/profileController');


router.get('/', productController.index);
router.get('/login', profileController.show_login);
router.post('/login', profileController.login);
router.get('/profile', profileController.profile);
router.get('/product-add', productController.product_add );
router.get('/product/:id', productController.product);
router.get('/search-results/:search?', productController.search_result);
router.get('/register', profileController.register); 
router.post('/newuser/', profileController.create); 
router.post('/product/:id/comment', productController.add_comment);

module.exports = router;
