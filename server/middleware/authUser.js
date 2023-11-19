const jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.json("The token was not available")
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) return res.json('Token is wrong')
        next()
    })
}