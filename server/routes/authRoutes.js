const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const authController = require('../controllers/authController');

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.json("The token was not available")
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) return res.json('Token is wrong')
        next()
    })
}

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/home', verifyUser, authController.testAuth);

module.exports = router;
