const Authrouter = require('express').Router();
const AuthController = require('./AuthController');


Authrouter.route('/signUp')
    .post(AuthController.signUp)
Authrouter.route('/signIn')
    .post(AuthController.signIn)

module.exports = Authrouter;