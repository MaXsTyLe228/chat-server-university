const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');

router.get('/login', authController.login);
router.get('/registration', authController.registration);

module.exports = router;