var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/register', profileController.register); 
router.post('/newuser/', profileController.create); 
router.get('/login', profileController.show_login);
router.post('/login', profileController.login);
router.get('/profile/logout', profileController.logout)
router.get('/profile/:id', profileController.profile);

module.exports = router;
