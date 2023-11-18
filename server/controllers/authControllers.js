const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.testAuth = (req, res) => {
    res.json('Success')
}

exports.register = (req, res) => {
    const { name, email, password } = req.body;
    bcrypt
        .hash(password, 10)
        .then(hash => {
            UserModel
                .create({
                    name: name,
                    email: email,
                    password: hash,
                })
                .then(user => res.json(user))
                .catch(err => res.json(err))
        })
        .catch(err => console.log(err.message))
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    UserModel
        .findOne({ email: email })
        .then(user => {
            bcrypt.compare(password, user.password, (err, response) => {
                if (!response) res.json("The password is incorrect")
                const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "30d" });
                res.cookie("token", token);
                res.json('Success')
            })
        })
        .catch(() => res.json("There is not an account with that email yet"))
}
