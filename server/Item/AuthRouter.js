const Authrouter = require('express').Router();
const AuthController = require('./AuthController');


Authrouter.route('/api/auth/signup').post(AuthController.signUp)
Authrouter.route('/api/auth/signin').post(AuthController.signIn)

module.exports = Authrouter;