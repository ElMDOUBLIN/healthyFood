const mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

const authSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;