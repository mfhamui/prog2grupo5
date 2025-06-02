const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



router.get('/', productController.index);
router.get('/product-add', productController.product_add );
router.post('/product-add', productController.createProduct);
router.get('/product/:id', productController.product);
router.get('/search-results/:search?', productController.search_result);

router.post('/product/:id/comment', productController.add_comment);

module.exports = router;
