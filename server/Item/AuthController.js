const Auth = require('./Auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.signUp = async (req, res) => {
    try {
        let { username, password } = req.body
        let existingUser = await Auth.findOne({ username })
        if (existingUser) {
            throw "User already exists"
        }
        let newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        let user = await Auth.create({
            username,
            password: newPassword
        })
        let token = jwt.sign(
            {
                username: user.username,
                _id: user._id
            },
            "jwtSecret",
            {
                expiresIn: "1h"
            }
        );
        res.send({
            user,
            token: token
        })
    }
    catch (error) {
        res.send(error)
    }
}

exports.signIn = async (req, res) => {
    try {
        let { username, password } = req.body
        let user = await Auth.findOne({ username })
        if (!user) {
            throw "User doesn't exist"
        }
        let isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            throw "Wrong password"
        }
        let token = jwt.sign(
            {
                username: user.username,
                _id: user._id
            },
            "jwtSecret",
            {
                expiresIn: "1h"
            }
        );
        res.send({
            user,
            token: token
        })
    }
    catch (error) {
        res.send(error)
    }
}
