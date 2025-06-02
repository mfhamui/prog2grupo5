var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.register); 
router.post('/newuser/', userController.create); 
router.get('/login', userController.show_login);
router.post('/login', userController.login);
router.get('/profile/logout', userController.logout)
router.get('/profile/:id', userController.profile);

module.exports = router;
