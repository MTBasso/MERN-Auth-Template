const express = require('express');
const router = express.Router();

const authController = require('../controllers/authControllers');
const { authUser } = require('../middleware/authUser');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/home', authUser, authController.testAuth);

module.exports = router;
